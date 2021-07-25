// @flow

import { ColorSchemeRegistry, schemeColor } from '../../../base/color-scheme';
import { BoxModel, ColorPalette } from '../../../base/styles';

const BUTTON_SIZE = 52;

// Toolbox, toolbar:

/**
 * The style of toolbar buttons.
 */
const toolbarButton = {
    borderRadius: 26,
    borderWidth: 0,
    flex: 0,
    flexDirection: 'row',
    height: BUTTON_SIZE,
    justifyContent: 'center',
    marginHorizontal: 6,
    marginTop: 6,
    width: BUTTON_SIZE
};

/**
 * The icon style of the toolbar buttons.
 */
const toolbarButtonIcon = {
    alignSelf: 'center',
    color: ColorPalette.darkGrey,
    fontSize: 24
};


/**
 * The icon style of toolbar buttons which display white icons.
 */
const whiteToolbarButtonIcon = {
    ...toolbarButtonIcon,
    color: ColorPalette.white
};

const blackToolbarButtonIcon = {
    ...toolbarButtonIcon,
    color: ColorPalette.black
};

/**
 * The Toolbox and toolbar related styles.
 */
const styles = {

    expandMenuContainer: {
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: 'column'
    },

    sheetGestureRecognizer: {
        alignItems: 'stretch',
        flexDirection: 'column'
    },

    /**
     * The style of the toolbar.
     */
    toolbox: {
        alignItems: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: 'row',
        flexGrow: 0,
        justifyContent: 'space-between',
        paddingHorizontal: BoxModel.margin,
        paddingVertical: 8,
        marginHorizontal:20
    },

    /**
     * The style of the root/top-level container of {@link Toolbox}.
     */
    toolboxContainer: {
        flexDirection: 'column',
        flexGrow: 0,
        width: '100%',
        maxWidth: 580,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    containerHeaderBottomSheet:{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 60,
        backgroundColor: '#0F1114',
        flexDirection: 'row',
    }
};

export default styles;

/**
 * Color schemed styles for the @{Toolbox} component.
 */
ColorSchemeRegistry.register('Toolbox', {
    /**
     * Styles for buttons in the toolbar.
     */
    buttonStyles: {
        iconStyle: toolbarButtonIcon,
        style: toolbarButton
    },

    buttonStylesBorderless: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: 'rgba(0,0,0,0.65)'
        }
    },

    backgroundToggle: {
        backgroundColor: ColorPalette.white
    },

    hangupButtonStyles: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            width:52,
            height:52,
            borderRadius:26,
            backgroundColor: schemeColor('hangup')
        },
        underlayColor: ColorPalette.buttonUnderlay
    },

    /**
     * Styles for toggled buttons in the toolbar.
     */
    toggledButtonStyles: {
        iconStyle: blackToolbarButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: ColorPalette.white
        }
    }
});
