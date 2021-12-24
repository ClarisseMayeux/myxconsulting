import React from 'react';
import {Linking, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import {BsInstagram, BsLinkedin, BsFacebook, BsPlus} from 'react-icons/bs';
import {color} from '../assets/color.js'

export default class FloatingButton extends React.Component{
    constructor(props){
        super(props);
        this.mainAnimation = new Animated.Value(1);
    }

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.mainAnimation, {
            toValue,
            friction: 7,
            useNativeDriver: false
        }).start();

        this.open = !this.open;
    }

    redirect = (url) => {
        Linking
            .openURL(url)
            .catch(err => console.error('Error', err));
    }

    render() {

        const rotation = {
            transform: [
                {
                    rotate: this.mainAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "135deg"]
                    })
                }
            ]
        };

        const InstaAppear = {
            transform: [
                { scale: this.mainAnimation },
                {
                    translateY: this.mainAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -60]
                    })
                }
            ]
        };
        const FbAppear = {
            transform: [
                { scale: this.mainAnimation },
                {
                    translateX: this.mainAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 50]
                    })
                },
                {
                    translateY: this.mainAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -30]
                    })
                },
            ]
        };
        const LinkdAppear = {
            transform: [
                { scale: this.mainAnimation },
                {
                    translateX: this.mainAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -50]
                    })
                },
                {
                    translateY: this.mainAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -30]
                    })
                },
            ]
        };

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <BsPlus style={{ color: "#FFF", fontSize: 40}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>this.redirect("https://www.instagram.com/myxconsulting")}>
                    <Animated.View style={[styles.button, styles.secondary, InstaAppear]}>
                        <BsInstagram style={{ color: "#fff", fontSize: 25}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback onPress={()=>this.redirect("https://www.facebook.com/myxconsultingfb")}>
                    <Animated.View style={[styles.button, styles.secondary, FbAppear]}>
                        <BsFacebook style={{ color: "#fff", fontSize: 25}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>this.redirect("https://www.linkedin.com/company/myx-consulting")}>
                    <Animated.View style={[styles.button, styles.secondary, LinkdAppear]}>
                        <BsLinkedin style={{ color: "#fff", fontSize: 25}}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute"
    },

    button:{
        position: "fixed",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#F02A4B",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10}
    },

    menu:{
        backgroundColor: color.secondColor
    },

    secondary:{
        width: 45,
        height: 45,
        borderRadius: 45/2,
        backgroundColor: color.videoBgColor
    },
});