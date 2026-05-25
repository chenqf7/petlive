import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../theme/tokens';

type ProgressStepperProps = {
  steps: string[];
  activeIndex: number;
};

export function ProgressStepper({ steps, activeIndex }: ProgressStepperProps) {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const active = index <= activeIndex;
        return (
          <View key={step} style={[styles.row, active && styles.activeRow]}>
            <View style={[styles.dot, active && styles.activeDot]} />
            <Text style={[styles.text, active && styles.activeText]}>{step}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderRadius: radius.md,
    padding: spacing.md,
    backgroundColor: colors.surface
  },
  activeRow: {
    backgroundColor: '#EDF8F4'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.softMuted
  },
  activeDot: {
    backgroundColor: colors.mintDark
  },
  text: {
    color: colors.muted,
    fontSize: typography.caption
  },
  activeText: {
    color: colors.ink,
    fontWeight: '800'
  }
});

