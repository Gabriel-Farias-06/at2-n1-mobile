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

type Match = {
  image: number;
  title: string;
  mode: string;
  date: string;
  role: "Anfitrião" | "Visitante";
  roleColor: string;
};

const categories = [
  { label: "Ranqueada", image: require("../../assets/images/champion.png") },
  { label: "Duelo 1x1", image: require("../../assets/images/sword.png") },
  { label: "Diversão", image: require("../../assets/images/happy-face.png") },
];

const matches: Match[] = [
  {
    image: require("../../assets/images/legenders.png"),
    title: "Lendários",
    mode: "Ranqueada",
    date: "18/06 às 21:00h",
    role: "Anfitrião",
    roleColor: "#ed1745",
  },
  {
    image: require("../../assets/images/red-dead.png"),
    title: "Yeah, boy",
    mode: "Diversão",
    date: "23/06 às 19:00h",
    role: "Visitante",
    roleColor: "#23c76b",
  },
  {
    image: require("../../assets/images/csgo.png"),
    title: "Rumo ao topo",
    mode: "1x1",
    date: "20/06 às 09:00h",
    role: "Anfitrião",
    roleColor: "#ed1745",
  },
  {
    image: require("../../assets/images/apex.png"),
    title: "Bora queimar tudo",
    mode: "Ranqueada",
    date: "20/06 às 14:20h",
    role: "Anfitrião",
    roleColor: "#ed1745",
  },
  {
    image: require("../../assets/images/valorant.png"),
    title: "Valorosos",
    mode: "Diversão",
    date: "21/06 às 18:00h",
    role: "Anfitrião",
    roleColor: "#ed1745",
  },
];

function CategoryCard({ label, image }: (typeof categories)[number]) {
  return (
    <Pressable
      style={({ pressed }) => [styles.categoryCard, pressed && styles.pressed]}
    >
      <Image source={image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryLabel}>{label}</Text>
    </Pressable>
  );
}

function MatchRow({ match }: { match: Match }) {
  const roleIcon =
    match.role === "Anfitrião"
      ? require("../../assets/images/anfitriao.png")
      : require("../../assets/images/visitor-icon.png");

  return (
    <Pressable
      onPress={
        match.title === "Lendários" ? () => router.push("/details") : undefined
      }
      style={({ pressed }) => [styles.matchRow, pressed && styles.pressed]}
    >
      <Image
        source={match.image}
        style={styles.matchImage}
        resizeMode="cover"
      />
      <View style={styles.matchDetails}>
        <Text style={styles.matchTitle} numberOfLines={1}>
          {match.title}
        </Text>
        <View style={styles.dateLine}>
          <Image
            source={require("../../assets/images/calendar-icon.png")}
            style={styles.calendarIcon}
          />
          <Text style={styles.dateText}>{match.date}</Text>
        </View>
      </View>
      <View style={styles.matchMeta}>
        <Text style={styles.modeText}>{match.mode}</Text>
        <View style={styles.roleLine}>
          <Image source={roleIcon} style={styles.roleIcon} />
          <Text style={[styles.roleText, { color: match.roleColor }]}>
            {match.role}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.profileArea}>
            <Image
              source={require("../../assets/images/thiago.png")}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.greeting}>
                Olá, <Text style={styles.greetingName}>Tiago</Text>
              </Text>
              <Text style={styles.victoryText}>Hoje é dia de vitória</Text>
            </View>
          </View>
          <Pressable
            onPress={() => router.push("/schedule")}
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.pressed,
            ]}
            accessibilityLabel="Criar partida"
          >
            <Text style={styles.addText}>+</Text>
          </Pressable>
        </View>

        <View style={styles.categoriesRow}>
          {categories.map((category) => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Partidas agendadas</Text>
          <Text style={styles.totalText}>Total 6</Text>
        </View>
        <View style={styles.matchesList}>
          {matches.map((match) => (
            <MatchRow key={match.title} match={match} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0e1647" },
  scrollContent: { paddingTop: 50, paddingBottom: 26 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingBottom: 36,
  },
  profileArea: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 42, height: 42, marginRight: 16, borderRadius: 7 },
  greeting: { color: "#dce1ee", fontSize: 17, fontWeight: "400" },
  greetingName: { fontWeight: "800" },
  victoryText: { marginTop: 4, color: "#8f96b7", fontSize: 11 },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    borderRadius: 7,
    backgroundColor: "#ed1745",
  },
  addText: { color: "#fff", fontSize: 27, fontWeight: "300", lineHeight: 29 },
  categoriesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
  },
  categoryCard: {
    alignItems: "center",
    justifyContent: "center",
    width: "31.5%",
    height: 104,
    borderWidth: 1,
    borderColor: "#263582",
    borderRadius: 7,
    backgroundColor: "#19245e",
  },
  categoryImage: { width: 48, height: 48, marginBottom: 7 },
  categoryLabel: { color: "#dce1ee", fontSize: 11, fontWeight: "700" },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginTop: 36,
    marginBottom: 12,
  },
  sectionTitle: { color: "#dce1ee", fontSize: 14, fontWeight: "800" },
  totalText: { color: "#8f96b7", fontSize: 12 },
  matchesList: { paddingHorizontal: 14 },
  matchRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 88,
    borderBottomWidth: 1,
    borderBottomColor: "#1a255b",
  },
  matchImage: {
    width: 56,
    height: 56,
    borderRadius: 7,
    backgroundColor: "#152052",
  },
  matchDetails: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
  },
  matchTitle: { color: "#dce1ee", fontSize: 14, fontWeight: "800" },
  dateLine: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  calendarIcon: { width: 13, height: 13, marginRight: 6 },
  dateText: { color: "#dce1ee", fontSize: 11 },
  matchMeta: { alignItems: "flex-end", width: 82 },
  modeText: { color: "#8f96b7", fontSize: 11 },
  roleLine: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  roleIcon: { width: 12, height: 12, marginRight: 4 },
  roleText: { fontSize: 11 },
  pressed: { opacity: 0.72 },
});
