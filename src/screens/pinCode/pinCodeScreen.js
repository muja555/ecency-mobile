import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container, Content, Icon, Item, Input } from "native-base";

import { Logo, FormInput } from "../../components";

import styles from "../../styles/pinCode.styles";

class PinCodeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        };
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Logo style={styles.logo} />
                    <Text style={styles.title}>Enter Pin Code</Text>
                    <Item style={styles.input}>
                        <Input
                            secureTextEntry={!this.state.showPassword}
                            keyboardType="numeric"
                            maxLength={4}
                        />
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({
                                    showPassword: !this.state.showPassword,
                                })
                            }
                        >
                            <Icon
                                style={styles.icon}
                                active
                                name="lock"
                                type="EvilIcons"
                                backgroundColor={"#fff"}
                            />
                        </TouchableOpacity>
                    </Item>
                    <TouchableOpacity>
                        <Text style={styles.forgotButtonText}>
                            Oh, I forgot it…
                        </Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}

export default PinCodeScreen;
