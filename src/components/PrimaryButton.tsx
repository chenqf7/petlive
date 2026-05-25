import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing, typography } from '../theme/tokens';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'dark' | 'light' | 'gold';
  disabled?: boolean;
};

export function PrimaryButton({ label, onPress, variant = 'dark', disabled = false }: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed
      ]}
    >
      <Text style={[styles.label, variant === 'light' && styles.lightLabel, variant === 'gold' && styles.goldLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm
  },
  dark: {
    backgroundColor: colors.ink
  },
  light: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.softMuted
  },
  gold: {
    backgroundColor: colors.gold
  },
  disabled: {
    opacity: 0.45
  },
  pressed: {
    transform: [{ scale: 0.98 }]
  },
  label: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '800'
  },
  lightLabel: {
    color: colors.ink
  },
  goldLabel: {
    color: colors.ink
  }
});

