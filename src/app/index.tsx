
import { memo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 1. Reusable Card component
type CardProps = {
  name: string;
  role: string;
  emoji: string;
};

const Card = memo(function Card({
  name,
  role,
  emoji,
}: CardProps) {
  console.log(`Rendering Card: ${name}`);

  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
});

// 2. Team data
const PEOPLE = [
  {
    id: '1',
    name: 'Matlo',
    role: 'React Native learner',
    emoji: '🚀',
  },
  {
    id: '2',
    name: 'Ada',
    role: 'First programmer',
    emoji: '👩‍💻',
  },
  {
    id: '3',
    name: 'Linus',
    role: 'Linux creator',
    emoji: '🐧',
  },
  {
    id: '4',
    name: 'Grace',
    role: 'COBOL pioneer',
    emoji: '⭐',
  },
];

// 3. Home screen
export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Team</Text>

      <Pressable
        onPress={() =>
          setCount((previousCount) => previousCount + 1)
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Tapped {count} times
        </Text>
      </Pressable>

      <FlatList
        data={PEOPLE}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            role={item.role}
            emoji={item.emoji}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

// 4. Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 20,
  },
  button: {
    backgroundColor: '#3b82f6',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  emoji: {
    fontSize: 32,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  role: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 2,
  },
});
