// @flow

import { type Dispatch } from 'redux';

import {
    createToolbarEvent,
    sendAnalytics
} from '../../../analytics';
import { translate } from '../../../base/i18n';
import { IconMember } from '../../../base/icons';
import { connect } from '../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';
import {
    showConferenceMembers,
    rejoinConferenceFailed
} from '../../../base/conference';

/**
 * The type of the React {@code Component} props of {@link ConferenceInforButton}.
 */
type Props = AbstractButtonProps & {
    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Dispatch<any>
};

/**
 * An implementation of a button to raise or lower hand.
 */
class ConferenceMemberButton extends AbstractButton<Props, *> {
    icon = IconMember;
    label = 'toolbar.conferenceMember';

    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this._showConferenceMember();
    }


    _showConferenceMember() {
        this.props.dispatch(showConferenceMembers("hello"));

    }
}

/**
 * Maps part of the Redux state to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @param {Object} ownProps - The properties explicitly passed to the component instance.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state, ownProps): Object {
    const { visible } = ownProps;

    return {
        visible:visible || true
    };
}

export default translate(connect(_mapStateToProps)(ConferenceMemberButton));
