import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { McpTrace } from '../components/McpTrace';
import { PetRoomScene } from '../components/PetRoomScene';
import { PrimaryButton } from '../components/PrimaryButton';
import { interactionTrace } from '../data/prototypeData';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function InteractionScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>互动回应</Text>
      <Text style={styles.title}>“{interactionTrace.userInput}”</Text>
      <Text style={styles.subtitle}>文字、语音和场景按钮都会触发同一套回应链路。</Text>

      <View style={styles.inputMock}>
        <Text style={styles.inputText}>语音识别：过来陪我一下</Text>
      </View>
      <View style={styles.waveform}>
        {[24, 42, 30, 54, 34, 46, 28].map((height, index) => (
          <View key={index} style={[styles.bar, { height }]} />
        ))}
      </View>
      <View style={styles.actionRow}>
        {['叫 TA 过来', '一起玩球', '睡前陪伴'].map((label) => (
          <Text key={label} style={styles.chip}>
            {label}
          </Text>
        ))}
      </View>

      <McpTrace steps={interactionTrace.steps} />
      <PetRoomScene motion={interactionTrace.motion} />
      <View style={styles.response}>
        <Text style={styles.responseText}>{interactionTrace.response}</Text>
      </View>

      <PrimaryButton label="回到宠物房间" onPress={() => navigate('pet-room')} />
      <PrimaryButton label="查看记忆来源" variant="light" onPress={() => navigate('memory-detail')} />
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
  inputMock: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg
  },
  inputText: {
    color: colors.ink,
    fontSize: typography.body,
    fontWeight: '800'
  },
  waveform: {
    height: 70,
    backgroundColor: colors.surfaceWarm,
    borderRadius: radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm
  },
  bar: {
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.mintDark
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  chip: {
    color: colors.ink,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontWeight: '800'
  },
  response: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    padding: spacing.lg
  },
  responseText: {
    color: colors.white,
    fontSize: typography.body,
    lineHeight: 22,
    fontWeight: '800'
  }
});

