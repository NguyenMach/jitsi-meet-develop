import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { ColorPalette } from '../../../styles';
import { translate } from '../../../i18n';

const styles = StyleSheet.create({
    button:{
        height: 44,
        backgroundColor: 'rgba(30,149,100,0.20)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    vline:{
        marginTop:16,
        height:1,
        backgroundColor:'rgba(255,255,255, 0.1)'
    },
    imageContainer: {
        paddingBottom: 20,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    modal: {
        justifyContent: 'center',
        borderRadius: 4,
    },
    cell: {
        height: 44,
        alignItems: 'center',
        marginRight: 11
    },
    content: {
        flex: 0,
        padding:20,
        backgroundColor: '#151515',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 8
    },
    titleButtonOK: {
        color: 'blue',
        fontSize: 22,
        marginTop: 20,
        marginBottom: 15,
    },
    titleText: {
        fontSize: 17,
        color: 'white',
        fontWeight:'600'
    },
    text: {
        fontSize: 14,
        marginTop: 20,
        color: 'white',
    },
    imageContainer: {
        paddingTop: 59,
        paddingBottom: 80,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    containerNotContainImage: {
      height: 59,
    },
    keyImage: {
        alignSelf: 'stretch',
        height: 155 ,
        width: 140
    },
    containerButton: {
        marginTop:30,
        marginBottom:4,
        justifyContent: 'flex-end'
    },
    titleButtonCancel: {
        marginRight: 5,
        color: 'black',
        fontSize: 30,
      },
      titleButtonOK: {
        color: 'black',
        fontSize: 30,
        marginRight:20
      },
});


class HangupDialog extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidUpdate(prevProps) {
        //
    }

    _onPressEnd = () => {
        this.props.onClose &&  this.props.onClose()
        this.props.didSelectEnd && this.props.didSelectEnd()
    }

    _onPressLeave = () => {
        this.props.onClose &&  this.props.onClose()
        this.props.didSelectLeave && this.props.didSelectLeave()
    }


    // ===============RENDER======================
    render() {
        const {
            visible,
            onClose,
            onModalHide,
            title,
            message,
            t
        } = this.props;

        return (
            <Modal
                isVisible={visible}
                onModalHide={onModalHide}
                style={styles.modal}
                onRequestClose={onClose}>
                <View style={styles.content}>
    
                    {title && <Text style={styles.titleText}>{title}</Text>}

                    <View style = {styles.vline}/>

                    {message && <Text style={title ? styles.text : { ...styles.text, marginTop: 0 }}>{message}</Text>}

                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress={this._onPressEnd} style = {styles.button}>
                            <Text style = {{color: ColorPalette.color_33EFA2}}> {t("dialog.end")} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={this._onPressLeave} 
                            style = {[styles.button,{
                            backgroundColor: 'rgba(255,255,255, 0.06)',
                            marginTop:16
                        }]}>
                            <Text style = {{color: 'white'}}> {t("dialog.leave")} </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>
        );
    }
}


export default translate(HangupDialog);