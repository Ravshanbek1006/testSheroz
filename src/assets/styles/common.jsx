import { StatusBar } from 'react-native'

export const verticalCenter = {
    justifyContent: 'center'
};

export const horizontalCenter = {
    alignItems: 'center'
};

export const center = {
    ...verticalCenter,
    ...horizontalCenter
};

export const horizontal = {
    flexDirection: 'row',
    alignItems: 'center'
};

export const shadow = {
    //ios
    shadowColor: "#979797",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5.00,
    //android
    elevation: 0.5
};

export const statusBarHeight = StatusBar.currentHeight || 0;


export const container = {
    flex: 1,
};
