import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../../assets/images/blue-fade-out.png")}
        style={styles.blueBackground}
        resizeMode="cover"
      />
      <Image
        source={require("../../assets/images/background-rectangle.png")}
        style={styles.backgroundRectangles}
        resizeMode="cover"
      />
      <Image
        source={require("../../assets/images/fighter.png")}
        style={styles.fighter}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"}e organize suas{"\n"}jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Entrar com Discord"
          onPress={() => router.replace("/home")}
          style={({ pressed }) => [
            styles.discordButton,
            pressed && styles.discordButtonPressed,
          ]}
        >
          <View style={styles.discordIconArea}>
            <Image
              source={require("../../assets/images/discord-icon.png")}
              style={styles.discordIcon}
            />
          </View>
          <Text style={styles.discordLabel}>Entrar com Discord</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, overflow: "hidden", backgroundColor: "#0e1647" },
  blueBackground: { ...StyleSheet.absoluteFill, width: "100%", height: "100%" },
  backgroundRectangles: {
    position: "absolute",
    top: 110,
    left: 0,
    width: 395,
    height: 370,
  },
  fighter: {
    position: "absolute",
    top: 110,
    left: "50%",
    width: 290,
    height: 320,
    transform: [{ translateX: -145 }],
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 400,
    paddingHorizontal: 24,
  },
  title: {
    color: "#e6e9f2",
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 44,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 16,
    color: "#e6e9f2",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "center",
  },
  discordButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 300,
    height: 48,
    marginTop: 40,
    overflow: "hidden",
    borderRadius: 7,
    backgroundColor: "#ed1745",
  },
  discordButtonPressed: { opacity: 0.8 },
  discordIconArea: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRightWidth: 1,
    borderRightColor: "#991F36",
  },
  discordIcon: { width: 22, height: 15 },
  discordLabel: {
    flex: 1,
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
