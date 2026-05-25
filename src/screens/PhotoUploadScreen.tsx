import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PetRoomScene } from '../components/PetRoomScene';
import { PrimaryButton } from '../components/PrimaryButton';
import { ProgressStepper } from '../components/ProgressStepper';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function PhotoUploadScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>照片形象</Text>
      <Text style={styles.title}>生成一个 3D 形象草稿</Text>
      <Text style={styles.subtitle}>这里是高保真模拟，不承诺真实照片转 3D 已完成。</Text>

      <View style={styles.preview}>
        <Text style={styles.previewText}>照片样例</Text>
      </View>
      <ProgressStepper activeIndex={2} steps={['读取照片', '提取毛色', '识别脸型和体态']} />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>提取结果</Text>
        <Text style={styles.body}>毛色：奶油白 · 脸型：圆润 · 体态：小型犬偏柔软</Text>
      </View>
      <PetRoomScene motion="tail_wag" />

      <PrimaryButton label="继续上传日常视频" onPress={() => navigate('video-upload')} />
      <PrimaryButton label="返回资料" variant="light" onPress={() => navigate('create-pet')} />
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
  preview: {
    height: 210,
    borderRadius: radius.xl,
    backgroundColor: colors.surfaceWarm,
    alignItems: 'center',
    justifyContent: 'center'
  },
  previewText: {
    color: colors.ink,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.xs
  },
  cardTitle: {
    color: colors.ink,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  body: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22
  }
});

