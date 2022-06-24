// @flow

import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { translate } from '../../../base/i18n';

import { ColorSchemeRegistry } from '../../../base/color-scheme';
import { BottomSheet, hideDialog, isDialogOpen } from '../../../base/dialog';
import { bottomSheetStyles } from '../../../base/dialog/components/native/styles';
import { IconDragHandle } from '../../../base/icons';
import { connect } from '../../../base/redux';
import { StyleType } from '../../../base/styles';
import { SharedDocumentButton } from '../../../etherpad';
import { InviteButton } from '../../../invite';
import { LiveStreamButton, RecordButton } from '../../../recording';
import { SharedVideoButton } from '../../../shared-video/components';
import { ClosedCaptionButton } from '../../../subtitles';
import { TileViewButton } from '../../../video-layout';
import HelpButton from '../HelpButton';
import AudioOnlyButton from './AudioOnlyButton';
import ScreenSharingButton from './ScreenSharingButton.js';
import styles from './styles';
import ConferenceInforButton from './ConferenceInforButton';
import ConferenceMemberButton from './ConferenceMemberButton';
import AudioDeviceToggleButton  from '../../../mobile/audio-mode/components/AudioDeviceToggleButton';

const cancelIcon = require('../../../../../images/ic_Close.png');


/**
 * The type of the React {@code Component} props of {@link OverflowMenu}.
 */
type Props = {

    /**
     * True if the overflow menu is currently visible, false otherwise.
     */
    _isOpen: boolean,

    /**
     * Whether the recoding button should be enabled or not.
     */
    _recordingEnabled: boolean,

    /**
     * The width of the screen.
     */
    _width: number,

    /**
     * Used for hiding the dialog when the selection was completed.
     */
    dispatch: Function
};

type State = {

    /**
     * True if the bottom scheet is scrolled to the top.
     */
    scrolledToTop: boolean,

    /**
     * True if the 'more' button set needas to be rendered.
     */
    showMore: boolean
}

/**
 * The exported React {@code Component}. We need it to execute
 * {@link hideDialog}.
 *
 * XXX It does not break our coding style rule to not utilize globals for state,
 * because it is merely another name for {@code export}'s {@code default}.
 */
let OverflowMenu_; // eslint-disable-line prefer-const

/**
 * Implements a React {@code Component} with some extra actions in addition to
 * those in the toolbar.
 */
class OverflowMenu extends PureComponent<Props, State> {
    /**
     * Initializes a new {@code OverflowMenu} instance.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this.state = {
            scrolledToTop: true,
            showMore: false
        };

        // Bind event handlers so they are only bound once per instance.
        this._onCancel = this._onCancel.bind(this);
        this._onSwipe = this._onSwipe.bind(this);
        this._onToggleMenu = this._onToggleMenu.bind(this);
        this._renderHeaderBottomSheet = this._renderHeaderBottomSheet.bind(this);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { _bottomSheetStyles, _width } = this.props;
        
        const buttonProps = {
            afterClick: this._onCancel,
            showLabel: true,
            styles: bottomSheetStyles.buttons
        };

        return (
            <BottomSheet
                onCancel={this._onCancel}
                onSwipe={this._onSwipe}
                renderHeader={this._renderHeaderBottomSheet}>
                <ConferenceInforButton {...buttonProps} />
                <ConferenceMemberButton {...buttonProps}/>
                <TileViewButton {...buttonProps} />
                <ScreenSharingButton {...buttonProps} />
                <AudioDeviceToggleButton {...buttonProps} />
                {/* {!toolbarButtons.has('invite') && <InviteButton {...buttonProps} />} */}
            </BottomSheet>
        );
    }


   
    _renderHeaderBottomSheet: () => React$Element<any>;

    _renderHeaderBottomSheet() {
        const { t } = this.props;

        return (
            <View style={styles.containerHeaderBottomSheet}>
                <View style={{ width: 40 }} />
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                }}>

                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15 }}>
                        {t('toolbar.options')}
                    </Text>
                </View>

                <View style={{ alignSelf: 'center', width: 40 }}>
                    <TouchableOpacity onPress={this._onCancel}>
                        <Image source={cancelIcon} style={{ marginRight: 24 }} />
                    </TouchableOpacity>

                </View>

            </View>
        );
    }

    _onCancel: () => boolean;

    /**
     * Hides this {@code OverflowMenu}.
     *
     * @private
     * @returns {boolean}
     */
    _onCancel() {
        console.log("_onCancel");
        if (this.props._isOpen) {
            this.props.dispatch(hideDialog(OverflowMenu_));
            return true;
        }

        return false;
    }

    _onSwipe: string => void;

    /**
     * Callback to be invoked when swipe gesture is detected on the menu. Returns true
     * if the swipe gesture is handled by the menu, false otherwise.
     *
     * @param {string} direction - Direction of 'up' or 'down'.
     * @returns {boolean}
     */
    _onSwipe(direction) {
        const { showMore } = this.state;

        switch (direction) {
            case 'up':
                !showMore && this.setState({
                    showMore: true
                });

                return !showMore;
            case 'down':
                showMore && this.setState({
                    showMore: false
                });

                return showMore;
        }
    }

    _onToggleMenu: () => void;

    /**
     * Callback to be invoked when the expand menu button is pressed.
     *
     * @returns {void}
     */
    _onToggleMenu() {
        this.setState({
            showMore: !this.state.showMore
        });
    }
}

/**
 * Function that maps parts of Redux state tree into component props.
 *
 * @param {Object} state - Redux state.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state) {
    return {
        _bottomSheetStyles: ColorSchemeRegistry.get(state, 'BottomSheet'),
        _isOpen: isDialogOpen(state, OverflowMenu_),
        _width: state['features/base/responsive-ui'].clientWidth
    };
}

OverflowMenu_ = connect(_mapStateToProps)(translate(OverflowMenu));

export default OverflowMenu_;
