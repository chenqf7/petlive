import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PetRoomScene } from '../components/PetRoomScene';
import { PrimaryButton } from '../components/PrimaryButton';
import { petProfile } from '../data/prototypeData';
import { colors, radius, shadows, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function PetRoomScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.kicker}>宠生</Text>
        <Text style={styles.title}>{petProfile.displayName}在客厅</Text>
        <Text style={styles.subtitle}>今天状态：想玩球，也有点想靠近你。</Text>
      </View>

      <PetRoomScene motion="idle" />

      <View style={styles.panel}>
        <View>
          <Text style={styles.panelTitle}>让 TA 更像自己</Text>
          <Text style={styles.panelText}>补充照片和日常视频后，宠生会提取外形与习惯记忆。</Text>
        </View>
        <PrimaryButton label="继续完善 TA" onPress={() => navigate('create-pet')} />
      </View>

      <View style={styles.actionGrid}>
        <PrimaryButton label="语音陪伴" variant="light" onPress={() => navigate('interaction')} />
        <PrimaryButton label="动作互动" variant="light" onPress={() => navigate('interaction')} />
        <PrimaryButton label="习惯档案" variant="light" onPress={() => navigate('behavior-insights')} />
        <PrimaryButton label="记忆详情" variant="light" onPress={() => navigate('memory-detail')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    gap: spacing.lg,
    backgroundColor: colors.background
  },
  header: {
    gap: spacing.xs
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
  panel: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
    ...shadows.card
  },
  panelTitle: {
    color: colors.ink,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  panelText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: spacing.xs
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  }
});

