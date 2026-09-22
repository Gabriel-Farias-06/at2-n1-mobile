import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const categories = [
  { label: "Ranqueada", image: require("../../assets/images/champion.png") },
  { label: "Duelo 1x1", image: require("../../assets/images/sword.png") },
  { label: "Diversão", image: require("../../assets/images/happy-face.png") },
];

const games = [
  {
    title: "Valorosos",
    subtitle: "Valorant",
    image: require("../../assets/images/valorant.png"),
  },
  {
    title: "Lendários",
    subtitle: "League of Legends",
    image: require("../../assets/images/lendarios.png"),
  },
  {
    title: "Yeah, boy",
    subtitle: "Red Dead Redemption",
    image: require("../../assets/images/red-dead.png"),
  },
];

export default function ScheduleScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Ranqueada");
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const selectedGame = games[selectedGameIndex];

  function selectNextGame() {
    setSelectedGameIndex((currentIndex) => (currentIndex + 1) % games.length);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
          accessibilityLabel="Voltar"
        >
          <Image
            source={require("../../assets/images/back-icon.png")}
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.headerTitle}>Agendar partida</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>Categoria</Text>
        <View style={styles.categoryRow}>
          {categories.map((category) => {
            const isSelected = selectedCategory === category.label;
            return (
              <Pressable
                key={category.label}
                onPress={() => setSelectedCategory(category.label)}
                style={({ pressed }) => [
                  styles.categoryCard,
                  isSelected && styles.categoryCardSelected,
                  pressed && styles.pressed,
                ]}
              >
                {isSelected && <View style={styles.selectedMarker} />}
                <Image
                  source={category.image}
                  style={styles.categoryImage}
                  resizeMode="contain"
                />
                <Text style={styles.categoryText}>{category.label}</Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={selectNextGame}
          style={({ pressed }) => [styles.gameCard, pressed && styles.pressed]}
          accessibilityLabel="Selecionar jogo"
        >
          <Image
            source={selectedGame.image}
            style={styles.gameImage}
            resizeMode="cover"
          />
          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>{selectedGame.title}</Text>
            <Text style={styles.gameSubtitle}>{selectedGame.subtitle}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </Pressable>

        <View style={styles.fieldRow}>
          <View style={styles.dateField}>
            <Text style={styles.label}>Dia e mês</Text>
            <View style={styles.inputPair}>
              <TextInput
                value={date.slice(0, 2)}
                onChangeText={(value) => setDate(`${value}/${date.slice(3)}`)}
                placeholder=""
                keyboardType="number-pad"
                maxLength={2}
                style={styles.smallInput}
              />
              <Text style={styles.separator}>/</Text>
              <TextInput
                value={date.slice(3, 5)}
                onChangeText={(value) =>
                  setDate(`${date.slice(0, 2)}/${value}`)
                }
                placeholder=""
                keyboardType="number-pad"
                maxLength={2}
                style={styles.smallInput}
              />
            </View>
          </View>
          <View style={styles.timeField}>
            <Text style={styles.label}>Horário</Text>
            <View style={styles.inputPair}>
              <TextInput
                value={time.slice(0, 2)}
                onChangeText={(value) => setTime(`${value}:${time.slice(3)}`)}
                placeholder=""
                keyboardType="number-pad"
                maxLength={2}
                style={styles.smallInput}
              />
              <Text style={styles.separator}>:</Text>
              <TextInput
                value={time.slice(3, 5)}
                onChangeText={(value) =>
                  setTime(`${time.slice(0, 2)}:${value}`)
                }
                placeholder=""
                keyboardType="number-pad"
                maxLength={2}
                style={styles.smallInput}
              />
            </View>
          </View>
        </View>

        <View style={styles.descriptionHeader}>
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.counter}>Máx 100 caracteres</Text>
        </View>
        <TextInput
          value={description}
          onChangeText={setDescription}
          maxLength={100}
          multiline
          textAlignVertical="top"
          style={styles.descriptionInput}
        />
      </ScrollView>

      <Pressable
        style={({ pressed }) => [
          styles.scheduleButton,
          pressed && styles.pressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Agendar partida"
      >
        <Text style={styles.scheduleButtonText}>Agendar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0e1647", paddingTop: 24 },
  topBar: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    backgroundColor: "#182567",
  },
  backButton: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 40,
    height: 42,
  },
  backIcon: { width: 28, height: 28 },
  headerTitle: { color: "#e7eaf4", fontSize: 18, fontWeight: "800" },
  headerSpacer: { width: 40 },
  scrollContent: { paddingHorizontal: 18, paddingTop: 27, paddingBottom: 115 },
  label: { color: "#e2e5ef", fontSize: 12, fontWeight: "800" },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryCard: {
    alignItems: "center",
    justifyContent: "center",
    width: "31.8%",
    height: 104,
    borderWidth: 1,
    borderColor: "#263582",
    borderRadius: 7,
    backgroundColor: "#17225b",
  },
  categoryCardSelected: { borderColor: "#34499c", backgroundColor: "#202d70" },
  selectedMarker: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 6,
    height: 6,
    borderRadius: 1,
    backgroundColor: "#ed1745",
  },
  categoryImage: { width: 48, height: 48, marginBottom: 7 },
  categoryText: { color: "#e2e5ef", fontSize: 11, fontWeight: "700" },
  gameCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    marginTop: 22,
    borderWidth: 1,
    borderColor: "#263582",
    borderRadius: 7,
    backgroundColor: "#111b50",
  },
  gameImage: { width: 48, height: 51, borderRadius: 6 },
  gameInfo: { flex: 1, paddingLeft: 14 },
  gameTitle: { color: "#e2e5ef", fontSize: 13, fontWeight: "800" },
  gameSubtitle: { marginTop: 4, color: "#a0a5c0", fontSize: 10 },
  chevron: { paddingRight: 15, color: "#cdd2e2", fontSize: 21 },
  fieldRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  dateField: { width: "46%" },
  timeField: { width: "36%" },
  inputPair: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  smallInput: {
    width: 36,
    height: 37,
    borderRadius: 6,
    backgroundColor: "#202d70",
    color: "#e2e5ef",
    fontSize: 15,
    textAlign: "center",
  },
  separator: { marginHorizontal: 4, color: "#a0a5c0", fontSize: 14 },
  descriptionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
  },
  counter: { color: "#a0a5c0", fontSize: 10 },
  descriptionInput: {
    height: 72,
    marginTop: 10,
    padding: 12,
    borderRadius: 7,
    backgroundColor: "#202d70",
    color: "#e2e5ef",
    fontSize: 13,
  },
  scheduleButton: {
    position: "absolute",
    right: 18,
    bottom: 24,
    left: 18,
    alignItems: "center",
    justifyContent: "center",
    height: 57,
    borderRadius: 8,
    backgroundColor: "#ed1745",
  },
  scheduleButtonText: { color: "#fff", fontSize: 16, fontWeight: "500" },
  pressed: { opacity: 0.72 },
});
