// @flow

import React from 'react';
import { Text, View } from 'react-native';

import { getConferenceName } from '../../../base/conference';
import { getFeatureFlag, CONFERENCE_TIMER_ENABLED, MEETING_NAME_ENABLED } from '../../../base/flags';
import { connect } from '../../../base/redux';
import { PictureInPictureButton } from '../../../mobile/picture-in-picture';
import { isToolboxVisible } from '../../../toolbox/functions.native';
import ConferenceTimer from '../ConferenceTimer';
import OverflowMenuButton from '../../../toolbox/components/native/OverflowMenuButton';
import ToggleCameraButton from '../../../toolbox/components/native/ToggleCameraButton';
import { ColorSchemeRegistry } from '../../../base/color-scheme';

import Labels from './Labels';
import styles from './styles';


type Props = {

    /**
     * The color-schemed stylesheet of the feature.
     */
    _styles: StyleType,


    /**
     * Whether displaying the current conference timer is enabled or not.
     */
    _conferenceTimerEnabled: boolean,

    /**
     * Name of the meeting we're currently in.
     */
    _meetingName: string,

    /**
     * Whether displaying the current meeting name is enabled or not.
     */
    _meetingNameEnabled: boolean,

    /**
     * True if the navigation bar should be visible.
     */
    _visible: boolean
};

/**
 * Implements a navigation bar component that is rendered on top of the
 * conference screen.
 *
 * @param {Props} props - The React props passed to this component.
 * @returns {React.Node}
 */
const NavigationBar = (props: Props) => {
    if (!props._visible) {
        return null;
    }

    const { _styles } = props;
    const { buttonStylesBorderless, toggledButtonStyles } = _styles;
    const backgroundToggledStyle = {
        ...toggledButtonStyles,
        style: [
            toggledButtonStyles.style,
            _styles.backgroundToggle
        ]
    };

    return (
        <View
            pointerEvents='box-none'
            style={styles.navBarWrapper}>
            <View style={styles.contentView}>
                <View style={[styles.roomTimerView, { backgroundColor: 'rgba(0,0,0,0)' }]}>
                    <ConferenceTimer textStyle={styles.roomTimer} />
                </View>

                <View style={[styles.roomNameView, { backgroundColor: 'rgba(0,0,0,0)' }]}>
                    <Text
                        numberOfLines={1}
                        style={styles.roomName}>
                        {'•  ' + props._meetingName}
                    </Text>
                </View>
            </View>

            <View style={styles.containerSwitchCamera}>
                <ToggleCameraButton
                    styles={buttonStylesBorderless}
                    toggledStyles={backgroundToggledStyle} />

                <OverflowMenuButton
                    styles={buttonStylesBorderless}
                    toggledStyles={backgroundToggledStyle} />

            </View>
        </View>
    );
};

/**
 * Maps part of the Redux store to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @returns {Props}
 */
function _mapStateToProps(state) {
    const { hideConferenceTimer, hideConferenceSubject } = state['features/base/config'];

    return {
        _styles: ColorSchemeRegistry.get(state, 'Toolbox'),
        _conferenceTimerEnabled:
            getFeatureFlag(state, CONFERENCE_TIMER_ENABLED, true) && !hideConferenceTimer,
        _meetingName: getConferenceName(state),
        _meetingNameEnabled:
            getFeatureFlag(state, MEETING_NAME_ENABLED, true) && !hideConferenceSubject,
        _visible: isToolboxVisible(state)
    };
}

export default connect(_mapStateToProps)(NavigationBar);
