import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, useColorScheme, Platform, } from 'react-native';

export default function App() {
  const theme = {
    background: '#F2F2F7',
    cardBg: '#FFFFFF',
    primaryText: '#000000',
    secondaryText: '#666666',
    accent: '#007AFF',
    border: '#E5E5EA',
  };

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.background} />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>AD</Text>
          </View>
          <Text style={styles.nameText}>Dungca, Allain Francois D.</Text>
          <Text style={styles.courseText}>BS Information System 3A</Text>
          
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Age: 20</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Marvel Fan</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bodyText}>
            I am a Bachelor of Science in Information System student who enjoys
            watching Marvel movies during my free time.
          </Text>
        </View>

        {/* Pet Peeves Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Classroom Pet Peeves</Text>
          
          {[
            "Not being participative in group activities",
            "Not listening to suggestions",
            "Not being accountable for their mistakes"
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bulletPoint} />
              <Text style={styles.bodyText}>{item}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const getStyles = (theme) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: theme.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.primaryText,
    textAlign: 'center',
    marginBottom: 4,
  },
  courseText: {
    fontSize: 16,
    color: theme.secondaryText,
    fontWeight: '500',
    marginBottom: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  tag: {
    backgroundColor: theme.cardBg,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.border,
  },
  tagText: {
    color: theme.primaryText,
    fontSize: 14,
    fontWeight: '600',
  },
  card: {
    backgroundColor: theme.cardBg,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.border,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 16,
    color: theme.primaryText,
    lineHeight: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.accent,
    marginRight: 12,
    marginTop: 2,
  },
});