import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
    const handleStart = () => {
        router.replace('/home');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/guia+logo.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <TouchableOpacity>

            <Button
                title="ACESSAR"
                onPress={handleStart}
            />
            
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#112342',
    },
    logo: {
        width: 310,
        height: 110,
        marginBottom: 100
    },
 
});