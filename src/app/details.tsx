import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const players = [
  {
    name: "Tiago Luchtenberg",
    status: "Disponível",
    color: "#23c76b",
    image: require("../../assets/images/tiago.png"),
  },
  {
    name: "Rodrigo Gonçalves",
    status: "Ocupado",
    color: "#ed1745",
    image: require("../../assets/images/rodrigo.png"),
  },
  {
    name: "Diego Fernandes",
    status: "Ocupado",
    color: "#ed1745",
    image: require("../../assets/images/diego.png"),
  },
];

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <Pressable
          onPress={() => router.back()}
          style={styles.headerButton}
          accessibilityLabel="Voltar"
        >
          <Image
            source={require("../../assets/images/back-icon.png")}
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.headerTitle}>Detalhes</Text>
        <Pressable
          style={styles.headerButton}
          accessibilityLabel="Compartilhar partida"
        >
          <Image
            source={require("../../assets/images/share-icon.png")}
            style={styles.shareIcon}
          />
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Image
            source={require("../../assets/images/lendarios.png")}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <Image
            source={require("../../assets/images/fade-out-blue-lendarios.png")}
            style={styles.heroFade}
            resizeMode="stretch"
          />
          <View style={styles.heroCopy}>
            <Text style={styles.heroTitle}>Lendários</Text>
            <Text style={styles.description}>
              É hoje que vamos chegar ao challenger sem{"\n"}perder uma partida
              da md10
            </Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.matchInfo}>
            <Text style={styles.playersTitle}>Jogadores</Text>
            <Text style={styles.totalPlayers}>Total 3</Text>
          </View>
          <View style={styles.playersList}>
            {players.map((player) => (
              <View key={player.name} style={styles.playerRow}>
                <Image
                  source={player.image}
                  style={styles.playerImage}
                  resizeMode="cover"
                />
                <View style={styles.playerDetails}>
                  <Text style={styles.playerName}>{player.name}</Text>
                  <View style={styles.statusLine}>
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: player.color },
                      ]}
                    />
                    <Text style={styles.statusText}>{player.status}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <Pressable
        style={({ pressed }) => [styles.joinButton, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel="Entrar na partida"
      >
        <View style={styles.joinIconArea}>
          <Image
            source={require("../../assets/images/discord-icon.png")}
            style={styles.discordIcon}
          />
        </View>
        <Text style={styles.joinLabel}>Entrar na partida</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0e1647", paddingTop: 40 },
  scrollContent: { paddingBottom: 112 },
  hero: { height: 241, overflow: "hidden" },
  heroImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 241,
  },
  heroFade: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 241,
  },
  topBar: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#182567",
  },
  headerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 34,
  },
  backIcon: { width: 28, height: 28 },
  shareIcon: { width: 24, height: 24 },
  headerTitle: { color: "#e7eaf4", fontSize: 18, fontWeight: "800" },
  heroCopy: { position: "absolute", left: 19, right: 16, bottom: 26 },
  heroTitle: { color: "#f1f2f7", fontSize: 27, fontWeight: "800" },
  description: {
    marginTop: 14,
    color: "#e2e5ef",
    fontSize: 14,
    lineHeight: 21,
  },
  content: { paddingHorizontal: 19 },
  matchInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  playersTitle: { color: "#e2e5ef", fontSize: 16, fontWeight: "800" },
  totalPlayers: { color: "#a0a5c0", fontSize: 13 },
  playersList: { paddingTop: 3 },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 74,
    borderBottomWidth: 1,
    borderBottomColor: "#202a60",
  },
  playerImage: {
    width: 49,
    height: 49,
    borderRadius: 8,
    backgroundColor: "#1b275e",
  },
  playerDetails: { justifyContent: "center", paddingLeft: 16 },
  playerName: { color: "#e2e5ef", fontSize: 16, fontWeight: "800" },
  statusLine: { flexDirection: "row", alignItems: "center", marginTop: 7 },
  statusDot: { width: 8, height: 8, borderRadius: 4, marginRight: 9 },
  statusText: { color: "#a5abc4", fontSize: 13 },
  joinButton: {
    position: "absolute",
    right: 19,
    bottom: 30,
    left: 19,
    flexDirection: "row",
    alignItems: "center",
    height: 57,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#ed1745",
  },
  joinIconArea: {
    alignItems: "center",
    justifyContent: "center",
    width: 58,
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: "#a51c3d",
  },
  discordIcon: { width: 24, height: 17 },
  joinLabel: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  pressed: { opacity: 0.75 },
});
