import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as AuthSession from "expo-auth-session";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext, UserType } from "../../context/UserProvider";

export function SignIn() {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  async function handleDiscordSignIn() {
    const response = await AuthSession.startAsync({
      authUrl:
        "https://discord.com/api/oauth2/authorize?client_id=1025754344982847578&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40mbrunos%2Fmobile&response_type=token&scope=identify",
    });

    fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${response.params.access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data: UserType) => {
        setUser(data);
        navigation.navigate("home");
      });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title="Entrar" subtitle="Encontre o seu duo e bora jogar!" />

        <Button onPress={handleDiscordSignIn}>Entrar com Discord</Button>
      </SafeAreaView>
    </Background>
  );
}
