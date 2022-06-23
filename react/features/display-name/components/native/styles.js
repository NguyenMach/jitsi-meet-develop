// @flow

import BaseTheme from '../../../base/ui/components/BaseTheme.native';
import { ColorPalette } from '../../../base/styles';

export default {
    displayNameBackdrop: {
        alignSelf: 'center',
        borderRadius: 4,
        paddingVertical: 4
    },

    displayNamePadding: {
        padding: BaseTheme.spacing[1],
        paddingRight: 6
    },

    displayNameText: {
        color: ColorPalette.white,
        fontSize: 14
    }
};