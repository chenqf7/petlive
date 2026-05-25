import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { behaviorInsights } from '../data/prototypeData';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function BehaviorInsightsScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>行为档案</Text>
      <Text style={styles.title}>这些习惯会参与互动回应</Text>
      <Text style={styles.subtitle}>每条结果都带有来源和置信度，避免让分析看起来像黑箱。</Text>

      {behaviorInsights.map((insight) => (
        <View key={insight.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{insight.label}</Text>
            <Text style={styles.confidence}>{Math.round(insight.confidence * 100)}%</Text>
          </View>
          <Text style={styles.body}>{insight.summary}</Text>
          {insight.timeline.map((item) => (
            <Text key={`${item.start}-${item.end}`} style={styles.timeline}>
              {item.start.toFixed(1)}s - {item.end.toFixed(1)}s · {item.behavior}
            </Text>
          ))}
        </View>
      ))}

      <PrimaryButton label="用这些习惯和 TA 互动" onPress={() => navigate('interaction')} />
      <PrimaryButton label="返回视频" variant="light" onPress={() => navigate('video-upload')} />
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
    padding: spacing.lg,
    gap: spacing.sm
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md
  },
  cardTitle: {
    flex: 1,
    color: colors.ink,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  confidence: {
    color: colors.mintDark,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  body: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22
  },
  timeline: {
    color: colors.ink,
    fontSize: typography.caption,
    fontWeight: '800'
  }
});

