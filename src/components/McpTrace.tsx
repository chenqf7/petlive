import { StyleSheet, Text, View } from 'react-native';
import type { McpStep } from '../types/prototype';
import { colors, radius, spacing, typography } from '../theme/tokens';

type McpTraceProps = {
  steps: McpStep[];
};

export function McpTrace({ steps }: McpTraceProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>回应链路</Text>
      {steps.map((step, index) => (
        <View key={step.id} style={styles.step}>
          <View style={styles.indexBadge}>
            <Text style={styles.indexText}>{index + 1}</Text>
          </View>
          <View style={styles.stepText}>
            <Text style={styles.label}>{step.label}</Text>
            <Text style={styles.tool}>{step.tool}</Text>
            <Text style={styles.detail}>{step.detail}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md
  },
  title: {
    color: colors.ink,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  step: {
    flexDirection: 'row',
    gap: spacing.md
  },
  indexBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mint
  },
  indexText: {
    color: colors.ink,
    fontSize: typography.caption,
    fontWeight: '900'
  },
  stepText: {
    flex: 1
  },
  label: {
    color: colors.ink,
    fontSize: typography.body,
    fontWeight: '900'
  },
  tool: {
    color: colors.blue,
    fontSize: typography.caption,
    marginTop: 2
  },
  detail: {
    color: colors.muted,
    fontSize: typography.caption,
    marginTop: 3,
    lineHeight: 18
  }
});

