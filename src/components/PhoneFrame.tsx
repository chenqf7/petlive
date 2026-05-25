import type { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors, radius } from '../theme/tokens';

type PhoneFrameProps = {
  children: ReactNode;
};

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.frame}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center'
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    backgroundColor: colors.background,
    borderRadius: radius.xl,
    overflow: 'hidden'
  }
});

