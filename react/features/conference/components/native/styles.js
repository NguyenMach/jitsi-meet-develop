import { ColorSchemeRegistry, schemeColor } from '../../../base/color-scheme';
import { fixAndroidViewClipping, ColorPalette } from '../../../base/styles';
import BaseTheme from '../../../base/ui/components/BaseTheme.native';

export const INSECURE_ROOM_NAME_LABEL_COLOR = BaseTheme.palette.actionDanger;

const TITLE_BAR_BUTTON_SIZE = 24;
const HEADER_ACTION_BUTTON_SIZE = 17;


/**
 * The styles of the safe area view that contains the title bar.
 */
const titleBarSafeView = {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
};

/**
 * The styles of the feature conference.
 */
export default {

    /**
     * {@code Conference} Style.
     */
    conference: fixAndroidViewClipping({
        alignSelf: 'stretch',
        backgroundColor: BaseTheme.palette.uiBackground,
        flex: 1
    }),

    displayNameContainer: {
        margin: 10
    },

    headerNavigationButton: {
        height: BaseTheme.spacing[6],
        marginTop: 20,
        width: BaseTheme.spacing[6]
    },

    headerNavigationText: {
        color: BaseTheme.palette.text01,
        fontSize: HEADER_ACTION_BUTTON_SIZE
    },

    headerNavigationTextBold: {
        ...BaseTheme.typography.labelButton,
        color: BaseTheme.palette.text01,
        fontSize: HEADER_ACTION_BUTTON_SIZE
    },

    /**
     * View that contains the indicators.
     */
    indicatorContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    titleBarButtonContainer: {
        borderRadius: 3,
        height: BaseTheme.spacing[7],
        marginTop: BaseTheme.spacing[1],
        marginRight: BaseTheme.spacing[1],
        zIndex: 1,
        width: BaseTheme.spacing[7]
    },

    inviteButton: {
        iconStyle: {
            color: BaseTheme.palette.icon01,
            padding: 12,
            fontSize: TITLE_BAR_BUTTON_SIZE
        },
        underlayColor: BaseTheme.spacing.underlay01
    },

    lonelyButton: {
        alignItems: 'center',
        borderRadius: 24,
        flexDirection: 'row',
        height: BaseTheme.spacing[6],
        justifyContent: 'space-around',
        paddingHorizontal: 12
    },

    lonelyButtonComponents: {
        marginHorizontal: 6
    },

    lonelyMeetingContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: BaseTheme.spacing[3]
    },

    lonelyMessage: {
        paddingVertical: BaseTheme.spacing[2]
    },

    pipButtonContainer: {
        '&:not(:empty)': {
            borderRadius: 3,
            height: BaseTheme.spacing[7],
            marginTop: BaseTheme.spacing[1],
            marginLeft: BaseTheme.spacing[1],
            zIndex: 1,
            width: BaseTheme.spacing[7]
        }
    },

    pipButton: {
        iconStyle: {
            color: BaseTheme.palette.icon01,
            padding: 12,
            fontSize: TITLE_BAR_BUTTON_SIZE
        },
        underlayColor: BaseTheme.spacing.underlay01
    },

    titleBarSafeViewColor: {
        ...titleBarSafeView,
        backgroundColor: BaseTheme.palette.uiBackground
    },

    titleBarSafeViewTransparent: {
        ...titleBarSafeView
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
    
    titleBarWrapper: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: 80,
        paddingHorizontal: 14
    },
    
    alwaysOnTitleBar: {
        paddingRight: 0,
        borderRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        marginLeft: BaseTheme.spacing[2],
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: BaseTheme.spacing[2],

        '&:not(:empty)': {
            padding: 4
        }
    },

    expandedLabelWrapper: {
        zIndex: 1
    },

    roomTimer: {
        color: ColorPalette.white,
        fontSize: 13,
        fontWeight: '600'
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
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 8,
        flexShrink: 1,
        flexGrow: 1
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
    },

    raisedHandsCountLabel: {
        backgroundColor: BaseTheme.palette.warning02,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: BaseTheme.spacing[0],
        marginBottom: BaseTheme.spacing[0],
        marginRight: BaseTheme.spacing[1]
    },

    raisedHandsCountLabelText: {
        color: BaseTheme.palette.uiBackground,
        paddingLeft: BaseTheme.spacing[2]
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
