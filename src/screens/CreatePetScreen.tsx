import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors, radius, shadows, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

const profileRows = ['名字：毛毛', '常用称呼：Momo、小毛', '物种：狗', '陪伴模式：日常陪伴', '性格线索：亲人、爱玩球、睡前黏人'];

export function CreatePetScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>完善 TA</Text>
      <Text style={styles.title}>先记录最像 TA 的部分</Text>
      <Text style={styles.subtitle}>第一版只收集会影响陪伴感的信息，后面可以慢慢补充。</Text>

      {profileRows.map((item) => (
        <View key={item} style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
        </View>
      ))}

      <View style={styles.boundary}>
        <Text style={styles.boundaryText}>宠生会保存习惯记忆，但不会把数字分身描述成真实意识。</Text>
      </View>

      <PrimaryButton label="上传照片生成形象草稿" onPress={() => navigate('photo-upload')} />
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
  row: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.card
  },
  rowText: {
    color: colors.ink,
    fontSize: typography.body,
    fontWeight: '800'
  },
  boundary: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    backgroundColor: colors.surfaceWarm
  },
  boundaryText: {
    color: colors.muted,
    fontSize: typography.caption,
    lineHeight: 18
  }
});

