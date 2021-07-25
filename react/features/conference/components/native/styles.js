import { ColorSchemeRegistry, schemeColor } from '../../../base/color-scheme';
import { BoxModel, ColorPalette, fixAndroidViewClipping } from '../../../base/styles';

export const INSECURE_ROOM_NAME_LABEL_COLOR = ColorPalette.warning;

/**
 * The styles of the feature conference.
 */
export default {

    /**
     * {@code Conference} style.
     */
    conference: fixAndroidViewClipping({
        alignSelf: 'stretch',
        backgroundColor: '#040404',
        flex: 1
    }),

    displayNameContainer: {
        margin: 10
    },

    /**
     * View that contains the indicators.
     */
    indicatorContainer: {
        flex: 1,
        flexDirection: 'row'
    },


    lonelyButton: {
        alignItems: 'center',
        borderRadius: 24,
        flexDirection: 'row',
        height: 48,
        justifyContent: 'space-around',
        paddingHorizontal: 12
    },

    lonelyButtonComponents: {
        marginHorizontal: 6
    },

    lonelyMeetingContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: BoxModel.padding * 2
    },

    lonelyMessage: {
        paddingVertical: 12
    },

    pipButtonContainer: {
        position: 'absolute',
        top: 10,
        left: 5,
        zIndex: 1
    },

    pipButton: {
        iconStyle: {
            color: ColorPalette.white,
            fontSize: 24
        },
        underlayColor: 'transparent'
    },

    navBarSafeView: {
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },

    navBarWrapper: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: 80,
        paddingHorizontal: 14,
    },

    roomTimer: {
        color: ColorPalette.white,
        fontSize: 13,
        fontWeight: '600',
    },

    roomTimerView: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
        height: 28,
        justifyContent: 'center',
        minWidth: 40
    },

    roomName: {
        color: ColorPalette.white,
        fontSize: 14,
        fontWeight: '600'
    },

    roomNameView: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
        flexShrink: 1,
        height: 28,
        justifyContent: 'center',
    },

    buttonTileView: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        borderRadius: 26,
        height: 52,
        width: 52,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:8,
        padding:10
    },

    roomNameWrapper: {
        flexDirection: 'row'
    },

    /**
     * The style of the {@link View} which expands over the whole
     * {@link Conference} area and splits it between the {@link Filmstrip} and
     * the {@link Toolbox}.
     */
    toolboxAndFilmstripContainer: {
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },

    insecureRoomNameLabel: {
        backgroundColor: INSECURE_ROOM_NAME_LABEL_COLOR
    },
    containerSwitchCamera:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentView:{
        backgroundColor: '#rgba(0,0,0,0.65)',
        flexDirection: 'row',
        height: 52,
        alignItems: 'center',
        borderRadius: 171,
        paddingHorizontal: 20
    }
};

ColorSchemeRegistry.register('Conference', {
    lonelyButton: {
        backgroundColor: schemeColor('inviteButtonBackground')
    },

    lonelyMessage: {
        color: schemeColor('onVideoText')
    }
});
