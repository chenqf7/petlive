import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../theme/tokens';

type PetRoomSceneProps = {
  motion?: 'idle' | 'approach_camera' | 'tail_wag' | 'lie_down';
};

export function PetRoomScene({ motion = 'idle' }: PetRoomSceneProps) {
  const motionLabel = {
    idle: '在客厅等你',
    approach_camera: '慢慢走近镜头',
    tail_wag: '看到球后摇尾',
    lie_down: '睡前靠近趴下'
  }[motion];

  return (
    <View style={styles.scene}>
      <View style={styles.windowGlow} />
      <View style={styles.backPanel} />
      <View style={[styles.petBody, motion === 'approach_camera' && styles.petClose, motion === 'lie_down' && styles.petDown]}>
        <View style={styles.petEarLeft} />
        <View style={styles.petEarRight} />
        <View style={styles.petFace}>
          <View style={styles.eyeRow}>
            <View style={styles.eye} />
            <View style={styles.eye} />
          </View>
          <View style={styles.nose} />
        </View>
        {motion === 'tail_wag' && <View style={styles.tail} />}
      </View>
      <View style={styles.floorShadow} />
      <Text style={styles.motionLabel}>{motionLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    height: 292,
    borderRadius: radius.xl,
    backgroundColor: colors.mint,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg
  },
  windowGlow: {
    position: 'absolute',
    top: 22,
    right: 24,
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#F6DC8B',
    opacity: 0.9
  },
  backPanel: {
    position: 'absolute',
    left: 22,
    top: 38,
    width: 108,
    height: 138,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(255,253,246,0.28)'
  },
  petBody: {
    width: 128,
    height: 92,
    borderRadius: 52,
    backgroundColor: '#FFF8EC',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#24433D',
    shadowOpacity: 0.22,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5
  },
  petClose: {
    transform: [{ scale: 1.16 }, { translateY: 10 }]
  },
  petDown: {
    transform: [{ scaleX: 1.18 }, { scaleY: 0.82 }, { translateY: 22 }]
  },
  petEarLeft: {
    position: 'absolute',
    left: 18,
    top: -13,
    width: 28,
    height: 34,
    borderRadius: 16,
    backgroundColor: '#F0D3A0',
    transform: [{ rotate: '-20deg' }]
  },
  petEarRight: {
    position: 'absolute',
    right: 18,
    top: -13,
    width: 28,
    height: 34,
    borderRadius: 16,
    backgroundColor: '#F0D3A0',
    transform: [{ rotate: '20deg' }]
  },
  petFace: {
    alignItems: 'center',
    gap: spacing.xs
  },
  eyeRow: {
    flexDirection: 'row',
    gap: spacing.lg
  },
  eye: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.ink
  },
  nose: {
    width: 12,
    height: 9,
    borderRadius: 6,
    backgroundColor: colors.ink
  },
  tail: {
    position: 'absolute',
    right: -26,
    top: 30,
    width: 44,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#F0D3A0',
    transform: [{ rotate: '-24deg' }]
  },
  floorShadow: {
    position: 'absolute',
    bottom: 74,
    width: 150,
    height: 20,
    borderRadius: 75,
    backgroundColor: 'rgba(28,42,40,0.14)'
  },
  motionLabel: {
    position: 'absolute',
    bottom: 18,
    color: colors.ink,
    backgroundColor: 'rgba(255,253,246,0.82)',
    borderRadius: radius.md,
    overflow: 'hidden',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: typography.caption,
    fontWeight: '900'
  }
});
