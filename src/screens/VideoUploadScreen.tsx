import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ProgressStepper } from '../components/ProgressStepper';
import { mediaAssets } from '../data/prototypeData';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

const video = mediaAssets.find((asset) => asset.type === 'video');

export function VideoUploadScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>行为视频</Text>
      <Text style={styles.title}>从日常视频里提取习惯</Text>
      <Text style={styles.subtitle}>半技术展示让用户看到分析过程，但保持消费级表达。</Text>

      <View style={styles.videoCard}>
        <Text style={styles.videoTitle}>日常片段 · {video?.durationSeconds ?? 18}s</Text>
        <Text style={styles.videoText}>客厅、晚间、轻声呼唤、靠近镜头</Text>
      </View>

      <ProgressStepper activeIndex={3} steps={['上传日常视频', '抽取代表帧', '识别行为片段', '生成习惯档案']} />
      <View style={styles.frames}>
        {(video?.representativeFrames ?? ['抬头', '靠近', '摇尾']).map((frame) => (
          <View key={frame} style={styles.frame}>
            <Text style={styles.frameText}>{frame}</Text>
          </View>
        ))}
      </View>

      <PrimaryButton label="查看行为档案" onPress={() => navigate('behavior-insights')} />
      <PrimaryButton label="返回照片" variant="light" onPress={() => navigate('photo-upload')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    gap: spacing.lg,
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
  videoCard: {
    borderRadius: radius.xl,
    backgroundColor: colors.ink,
    padding: spacing.xl,
    gap: spacing.sm
  },
  videoTitle: {
    color: colors.white,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  videoText: {
    color: '#C8D8D3',
    fontSize: typography.body,
    lineHeight: 22
  },
  frames: {
    flexDirection: 'row',
    gap: spacing.sm
  },
  frame: {
    flex: 1,
    height: 96,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceWarm,
    alignItems: 'center',
    justifyContent: 'center'
  },
  frameText: {
    color: colors.ink,
    fontSize: typography.body,
    fontWeight: '900'
  }
});

