// @flow

import _ from 'lodash';

import { createToolbarEvent, sendAnalytics } from '../../analytics';
import { appNavigate } from '../../app/actions';
import { disconnect } from '../../base/connection';
import { translate } from '../../base/i18n';
import { connect } from '../../base/redux';
import { AbstractHangupButton } from '../../base/toolbox/components';
import type { AbstractButtonProps } from '../../base/toolbox/components';
import {
    hangupConference,
} from '../../base/conference';
import { getFeatureFlag, IS_CREATOR} from '../../base/flags';

/**
 * The type of the React {@code Component} props of {@link HangupButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function
};

/**
 * Component that renders a toolbar button for leaving the current conference.
 *
 * @augments AbstractHangupButton
 */
class HangupButton extends AbstractHangupButton<Props, *> {
    _hangup: Function;

    accessibilityLabel = 'toolbar.accessibilityLabel.hangup';
    label = 'toolbar.hangup';
    tooltip = 'toolbar.hangup';

    /**
     * Initializes a new HangupButton instance.
     *
     * @param {Props} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props: Props) {
        super(props);
        this.hangup = this.hangup.bind(this);
    }

    /**
     * Helper function to perform the actual hangup action.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _doHangup() {
        this.hangup()
    }

     hangup() {
        sendAnalytics(createToolbarEvent('hangup'));

        const { isCreator } = this.props

        // FIXME: these should be unified.
        if (navigator.product === 'ReactNative') {
            if (isCreator) {
                this.props.dispatch(hangupConference({ data: 'hangup' }));
            }else {
                this.props.dispatch(appNavigate(undefined));
            }

        } else {
            if (isCreator) {
                this.props.dispatch(hangupConference({ data: 'hangup' }));
            }else {
                this.props.dispatch(disconnect(true));
            }
        }
    }

}

/**
 * Maps part of the redux state to the component's props.
 *
 * @param {Object} state - The Redux state.
 * @returns {Props}
 */
 function _mapStateToProps(state) {
    const isCreator = getFeatureFlag(state, IS_CREATOR, false);

    return {
        isCreator
    };
}

export default translate(connect(_mapStateToProps)(HangupButton));
