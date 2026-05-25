import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { behaviorInsights } from '../data/prototypeData';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function MemoryDetailScreen({ navigate }: ScreenProps) {
  const memory = behaviorInsights[1];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>记忆详情</Text>
      <Text style={styles.title}>{memory.label}</Text>
      <Text style={styles.subtitle}>这里说明某个习惯如何影响回应，同时保持来源透明。</Text>

      {['来源：视频识别 video_001', '用户补充：睡前它常靠在右边', '历史互动：最近 3 次睡前陪伴都触发靠近动作'].map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      ))}

      <View style={styles.note}>
        <Text style={styles.noteText}>边界：这是习惯记忆和动作模拟，不代表真实意识或真实情感。</Text>
      </View>

      <PrimaryButton label="发起一次陪伴互动" onPress={() => navigate('interaction')} />
      <PrimaryButton label="回到房间" variant="light" onPress={() => navigate('pet-room')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    gap: spacing.md,
    backgroundColor: colors.background
  },
  kicker: {
    color: colors.mintDark,
    fontSize: typography.caption,
    fontWeight: '900'
  },
  title: {
    color: colors.ink,
    fontSize: typography.title,
    fontWeight: '900'
  },
  subtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg
  },
  cardText: {
    color: colors.ink,
    fontSize: typography.body,
    fontWeight: '800',
    lineHeight: 22
  },
  note: {
    backgroundColor: colors.surfaceWarm,
    borderRadius: radius.lg,
    padding: spacing.lg
  },
  noteText: {
    color: colors.muted,
    fontSize: typography.caption,
    lineHeight: 18
  }
});
