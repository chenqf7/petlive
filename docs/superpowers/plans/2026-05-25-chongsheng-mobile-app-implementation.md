# Chongsheng Mobile App Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-fidelity mobile App prototype for 宠生 that demonstrates the pet room, progressive pet profile creation, photo/video upload simulation, behavior insights, lightweight MCP trace visualization, and UE-style motion responses.

**Architecture:** Use an Expo React Native app with local mock data and a small state machine. Keep prototype content in focused files so simulated AI, UE, and MCP outputs can later be replaced by real adapters without rewriting the UI.

**Tech Stack:** Expo, React Native, TypeScript, React state hooks, local mock data, built-in React Native components, no backend for the first implementation.

---

## File Structure

- Create: `package.json`  
  Defines Expo scripts and dependencies.
- Create: `app.json`  
  Defines the Expo app name, slug, orientation, and presentation metadata.
- Create: `tsconfig.json`  
  Enables TypeScript for the Expo app.
- Create: `App.tsx`  
  App shell, screen routing state, main layout composition.
- Create: `src/data/prototypeData.ts`  
  Mock pet profile, media assets, behavior insights, interaction traces, and UI copy.
- Create: `src/types/prototype.ts`  
  Shared TypeScript types for pet profile, media, behavior, MCP trace, and navigation.
- Create: `src/theme/tokens.ts`  
  Color, spacing, typography, shadow, and radius tokens for the daily-companion visual direction.
- Create: `src/components/PhoneFrame.tsx`  
  Presentation wrapper for the mobile prototype when previewed on desktop.
- Create: `src/components/PetRoomScene.tsx`  
  UE-style room and pet motion simulation.
- Create: `src/components/ProgressStepper.tsx`  
  Upload and analysis progress UI.
- Create: `src/components/McpTrace.tsx`  
  Lightweight MCP call chain visualization.
- Create: `src/components/PrimaryButton.tsx`  
  Shared button with active and disabled states.
- Create: `src/screens/PetRoomScreen.tsx`  
  Home screen with pet room, mood, interaction shortcuts, and progressive task entry.
- Create: `src/screens/CreatePetScreen.tsx`  
  Initial profile creation screen.
- Create: `src/screens/PhotoUploadScreen.tsx`  
  Photo upload simulation and avatar draft generation.
- Create: `src/screens/VideoUploadScreen.tsx`  
  Video upload and frame extraction simulation.
- Create: `src/screens/BehaviorInsightsScreen.tsx`  
  Behavior timeline, confidence tags, and habit cards.
- Create: `src/screens/InteractionScreen.tsx`  
  Text, voice, and scene-button interaction demo with MCP trace and motion response.
- Create: `src/screens/MemoryDetailScreen.tsx`  
  Habit memory detail and provenance screen.
- Create: `README.md`  
  Local setup, scripts, prototype scope, and simulation boundaries.

## Task 1: Scaffold Expo React Native App

**Files:**
- Create: `package.json`
- Create: `app.json`
- Create: `tsconfig.json`
- Create: `App.tsx`
- Modify: `.gitignore`

- [ ] **Step 1: Create package manifest**

Create `package.json` with the Expo mobile app scripts and dependency versions:

```json
{
  "name": "petlive-chongsheng-mobile",
  "version": "0.1.0",
  "private": true,
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.0.4",
    "expo": "~52.0.47",
    "expo-status-bar": "~2.0.1",
    "react": "18.3.1",
    "react-native": "0.76.9",
    "react-native-safe-area-context": "4.12.0"
  },
  "devDependencies": {
    "@types/react": "~18.3.12",
    "typescript": "^5.3.3"
  }
}
```

- [ ] **Step 2: Create Expo app config**

Create `app.json`:

```json
{
  "expo": {
    "name": "宠生",
    "slug": "petlive-chongsheng",
    "version": "0.1.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "backgroundColor": "#F7F4EA"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": false
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#F7F4EA"
      }
    },
    "web": {
      "bundler": "metro"
    }
  }
}
```

- [ ] **Step 3: Create TypeScript config**

Create `tsconfig.json`:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "."
  }
}
```

- [ ] **Step 4: Create minimal App shell**

Create `App.tsx`:

```tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>宠生</Text>
      <Text style={styles.subtitle}>手机 App 高保真原型启动中</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F4EA',
    padding: 24
  },
  title: {
    color: '#1C2A28',
    fontSize: 34,
    fontWeight: '800'
  },
  subtitle: {
    color: '#5C6F69',
    fontSize: 16,
    marginTop: 8
  }
});
```

- [ ] **Step 5: Update git ignore**

Add these lines to `.gitignore` below `.superpowers/`:

```gitignore
node_modules/
.expo/
dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

- [ ] **Step 6: Install dependencies**

Run:

```bash
npm install
```

Expected: `node_modules/` and `package-lock.json` are created without dependency resolution errors.

- [ ] **Step 7: Typecheck the minimal app**

Run:

```bash
npm run typecheck
```

Expected: TypeScript finishes with no errors.

- [ ] **Step 8: Commit scaffold**

```bash
git add .gitignore App.tsx app.json package.json package-lock.json tsconfig.json
git commit -m "feat: scaffold mobile app prototype"
```

## Task 2: Add Prototype Types, Theme, And Mock Data

**Files:**
- Create: `src/types/prototype.ts`
- Create: `src/theme/tokens.ts`
- Create: `src/data/prototypeData.ts`

- [ ] **Step 1: Define prototype types**

Create `src/types/prototype.ts`:

```ts
export type ScreenName =
  | 'pet-room'
  | 'create-pet'
  | 'photo-upload'
  | 'video-upload'
  | 'behavior-insights'
  | 'interaction'
  | 'memory-detail';

export type CompanionshipMode = 'daily' | 'memorial';

export type PetProfile = {
  id: string;
  name: string;
  species: string;
  displayName: string;
  companionshipMode: CompanionshipMode;
  traits: string[];
  avatarAssetId: string;
};

export type MediaAsset = {
  id: string;
  petId: string;
  type: 'photo' | 'video';
  status: 'new' | 'processing' | 'analyzed';
  representativeFrames: string[];
  durationSeconds?: number;
};

export type BehaviorTimelineItem = {
  start: number;
  end: number;
  behavior: string;
};

export type BehaviorInsight = {
  id: string;
  petId: string;
  label: string;
  confidence: number;
  source: string;
  summary: string;
  timeline: BehaviorTimelineItem[];
};

export type McpStep = {
  id: string;
  tool: string;
  label: string;
  detail: string;
};

export type InteractionTrace = {
  id: string;
  petId: string;
  userInput: string;
  steps: McpStep[];
  motion: string;
  response: string;
};
```

- [ ] **Step 2: Create theme tokens**

Create `src/theme/tokens.ts`:

```ts
export const colors = {
  background: '#F7F4EA',
  surface: '#FFFDF6',
  surfaceWarm: '#FFF3D7',
  ink: '#1C2A28',
  muted: '#63746E',
  softMuted: '#DDE7DF',
  mint: '#98D6C8',
  mintDark: '#277B6A',
  gold: '#E2BE65',
  blue: '#7FA6D9',
  danger: '#B85A4A',
  white: '#FFFFFF'
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  xxl: 40
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 22,
  xl: 30
};

export const typography = {
  title: 30,
  h1: 24,
  h2: 19,
  body: 15,
  caption: 12,
  tiny: 10
};
```

- [ ] **Step 3: Create mock data**

Create `src/data/prototypeData.ts`:

```ts
import type { BehaviorInsight, InteractionTrace, MediaAsset, PetProfile } from '../types/prototype';

export const petProfile: PetProfile = {
  id: 'pet_momo',
  name: 'Momo',
  species: 'dog',
  displayName: '毛毛',
  companionshipMode: 'daily',
  traits: ['亲人', '爱玩球', '睡前黏人'],
  avatarAssetId: 'avatar_momo_demo'
};

export const mediaAssets: MediaAsset[] = [
  {
    id: 'photo_001',
    petId: 'pet_momo',
    type: 'photo',
    status: 'analyzed',
    representativeFrames: ['正脸', '侧脸', '趴着']
  },
  {
    id: 'video_001',
    petId: 'pet_momo',
    type: 'video',
    status: 'analyzed',
    representativeFrames: ['抬头', '靠近', '摇尾'],
    durationSeconds: 18
  }
];

export const behaviorInsights: BehaviorInsight[] = [
  {
    id: 'behavior_approach_when_called',
    petId: 'pet_momo',
    label: '被轻声呼唤时会慢慢走近',
    confidence: 0.86,
    source: 'video_001',
    summary: '毛毛听到熟悉声音后会先抬头，再慢慢靠近镜头。',
    timeline: [
      { start: 4.2, end: 7.8, behavior: '听到名字后抬头' },
      { start: 8.1, end: 13.6, behavior: '朝用户靠近' }
    ]
  },
  {
    id: 'behavior_sleep_nearby',
    petId: 'pet_momo',
    label: '睡前喜欢靠在人旁边',
    confidence: 0.78,
    source: 'video_001',
    summary: '晚间环境里，毛毛更常选择贴近人的位置趴下。',
    timeline: [
      { start: 1.5, end: 5.9, behavior: '寻找靠近位置' },
      { start: 6.0, end: 12.4, behavior: '趴下停留' }
    ]
  }
];

export const interactionTrace: InteractionTrace = {
  id: 'trace_001',
  petId: 'pet_momo',
  userInput: '过来陪我一下',
  motion: 'approach_camera',
  response: '我记得你睡前喜欢让我靠近一点，我过来了。',
  steps: [
    {
      id: 'memory',
      tool: 'pet.memory.query',
      label: '读取习惯记忆',
      detail: '匹配到“睡前喜欢靠在人旁边”。'
    },
    {
      id: 'emotion',
      tool: 'pet.emotion.infer',
      label: '判断互动情绪',
      detail: '识别为需要安静陪伴。'
    },
    {
      id: 'motion',
      tool: 'pet.motion.play',
      label: '播放 UE 动作',
      detail: '动作：走近镜头并趴下。'
    },
    {
      id: 'response',
      tool: 'pet.response.compose',
      label: '生成短回应',
      detail: '回应保持温柔、短句、不过度拟人。'
    }
  ]
};
```

- [ ] **Step 4: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: no TypeScript errors.

- [ ] **Step 5: Commit data foundation**

```bash
git add src/types/prototype.ts src/theme/tokens.ts src/data/prototypeData.ts
git commit -m "feat: add prototype data foundation"
```

## Task 3: Build Shared Components

**Files:**
- Create: `src/components/PhoneFrame.tsx`
- Create: `src/components/PrimaryButton.tsx`
- Create: `src/components/ProgressStepper.tsx`
- Create: `src/components/McpTrace.tsx`
- Create: `src/components/PetRoomScene.tsx`

- [ ] **Step 1: Create shared button**

Create `src/components/PrimaryButton.tsx`:

```tsx
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
      <Text style={[styles.label, variant === 'light' && styles.lightLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg
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
    fontWeight: '700'
  },
  lightLabel: {
    color: colors.ink
  }
});
```

- [ ] **Step 2: Create phone frame**

Create `src/components/PhoneFrame.tsx`:

```tsx
import { ReactNode } from 'react';
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
```

- [ ] **Step 3: Create progress stepper**

Create `src/components/ProgressStepper.tsx`:

```tsx
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
          <View key={step} style={styles.row}>
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
    gap: spacing.sm
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
    fontWeight: '700'
  }
});
```

- [ ] **Step 4: Create MCP trace component**

Create `src/components/McpTrace.tsx`:

```tsx
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
    fontWeight: '800'
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
    fontWeight: '800'
  },
  stepText: {
    flex: 1
  },
  label: {
    color: colors.ink,
    fontSize: typography.body,
    fontWeight: '800'
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
```

- [ ] **Step 5: Create pet room scene**

Create `src/components/PetRoomScene.tsx`:

```tsx
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
      <View style={[styles.petBody, motion === 'approach_camera' && styles.petClose]}>
        <View style={styles.petEarLeft} />
        <View style={styles.petEarRight} />
        <View style={styles.petFace}>
          <View style={styles.eyeRow}>
            <View style={styles.eye} />
            <View style={styles.eye} />
          </View>
          <View style={styles.nose} />
        </View>
      </View>
      <View style={styles.floorShadow} />
      <Text style={styles.motionLabel}>{motionLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    height: 280,
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
    fontWeight: '800'
  }
});
```

- [ ] **Step 6: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: no TypeScript errors.

- [ ] **Step 7: Commit shared components**

```bash
git add src/components/PhoneFrame.tsx src/components/PrimaryButton.tsx src/components/ProgressStepper.tsx src/components/McpTrace.tsx src/components/PetRoomScene.tsx
git commit -m "feat: add shared prototype components"
```

## Task 4: Implement Screen Routing And Core Screens

**Files:**
- Modify: `App.tsx`
- Create: `src/screens/PetRoomScreen.tsx`
- Create: `src/screens/CreatePetScreen.tsx`
- Create: `src/screens/PhotoUploadScreen.tsx`
- Create: `src/screens/VideoUploadScreen.tsx`
- Create: `src/screens/BehaviorInsightsScreen.tsx`
- Create: `src/screens/InteractionScreen.tsx`
- Create: `src/screens/MemoryDetailScreen.tsx`

- [ ] **Step 1: Replace App shell with local screen routing**

Update `App.tsx`:

```tsx
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import type { ScreenName } from './src/types/prototype';
import { PhoneFrame } from './src/components/PhoneFrame';
import { PetRoomScreen } from './src/screens/PetRoomScreen';
import { CreatePetScreen } from './src/screens/CreatePetScreen';
import { PhotoUploadScreen } from './src/screens/PhotoUploadScreen';
import { VideoUploadScreen } from './src/screens/VideoUploadScreen';
import { BehaviorInsightsScreen } from './src/screens/BehaviorInsightsScreen';
import { InteractionScreen } from './src/screens/InteractionScreen';
import { MemoryDetailScreen } from './src/screens/MemoryDetailScreen';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('pet-room');

  return (
    <PhoneFrame>
      {screen === 'pet-room' && <PetRoomScreen navigate={setScreen} />}
      {screen === 'create-pet' && <CreatePetScreen navigate={setScreen} />}
      {screen === 'photo-upload' && <PhotoUploadScreen navigate={setScreen} />}
      {screen === 'video-upload' && <VideoUploadScreen navigate={setScreen} />}
      {screen === 'behavior-insights' && <BehaviorInsightsScreen navigate={setScreen} />}
      {screen === 'interaction' && <InteractionScreen navigate={setScreen} />}
      {screen === 'memory-detail' && <MemoryDetailScreen navigate={setScreen} />}
      <StatusBar style="dark" />
    </PhoneFrame>
  );
}
```

- [ ] **Step 2: Create pet room screen**

Create `src/screens/PetRoomScreen.tsx`:

```tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PetRoomScene } from '../components/PetRoomScene';
import { PrimaryButton } from '../components/PrimaryButton';
import { petProfile } from '../data/prototypeData';
import { colors, spacing, typography } from '../theme/tokens';
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
        <Text style={styles.panelTitle}>让 TA 更像自己</Text>
        <Text style={styles.panelText}>补充照片和日常视频后，宠生会提取外形与习惯记忆。</Text>
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
    fontWeight: '800'
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
    borderRadius: 22,
    padding: spacing.lg,
    gap: spacing.sm
  },
  panelTitle: {
    color: colors.ink,
    fontSize: typography.h2,
    fontWeight: '900'
  },
  panelText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  }
});
```

- [ ] **Step 3: Create profile creation screen**

Create `src/screens/CreatePetScreen.tsx`:

```tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function CreatePetScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>完善 TA</Text>
      <Text style={styles.title}>先记录最像 TA 的部分</Text>
      <Text style={styles.subtitle}>第一版只收集会影响陪伴感的信息，后面可以慢慢补充。</Text>
      {['名字：毛毛', '常用称呼：Momo、小毛', '物种：狗', '陪伴模式：日常陪伴', '性格线索：亲人、爱玩球、睡前黏人'].map((item) => (
        <View key={item} style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
        </View>
      ))}
      <PrimaryButton label="上传照片生成形象草稿" onPress={() => navigate('photo-upload')} />
      <PrimaryButton label="回到房间" variant="light" onPress={() => navigate('pet-room')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.md, backgroundColor: colors.background },
  kicker: { color: colors.mintDark, fontSize: typography.caption, fontWeight: '800' },
  title: { color: colors.ink, fontSize: typography.title, fontWeight: '900' },
  subtitle: { color: colors.muted, fontSize: typography.body, lineHeight: 22 },
  row: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg },
  rowText: { color: colors.ink, fontSize: typography.body, fontWeight: '700' }
});
```

- [ ] **Step 4: Create photo upload screen**

Create `src/screens/PhotoUploadScreen.tsx`:

```tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
      <PrimaryButton label="继续上传日常视频" onPress={() => navigate('video-upload')} />
      <PrimaryButton label="返回资料" variant="light" onPress={() => navigate('create-pet')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.md, backgroundColor: colors.background },
  kicker: { color: colors.mintDark, fontSize: typography.caption, fontWeight: '800' },
  title: { color: colors.ink, fontSize: typography.title, fontWeight: '900' },
  subtitle: { color: colors.muted, fontSize: typography.body, lineHeight: 22 },
  preview: { height: 210, borderRadius: radius.xl, backgroundColor: colors.surfaceWarm, alignItems: 'center', justifyContent: 'center' },
  previewText: { color: colors.ink, fontSize: typography.h2, fontWeight: '900' },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.xs },
  cardTitle: { color: colors.ink, fontSize: typography.h2, fontWeight: '900' },
  body: { color: colors.muted, fontSize: typography.body, lineHeight: 22 }
});
```

- [ ] **Step 5: Create video upload screen**

Create `src/screens/VideoUploadScreen.tsx`:

```tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ProgressStepper } from '../components/ProgressStepper';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function VideoUploadScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>行为视频</Text>
      <Text style={styles.title}>从日常视频里提取习惯</Text>
      <Text style={styles.subtitle}>半技术展示让用户看到分析过程，但保持消费级表达。</Text>
      <ProgressStepper activeIndex={3} steps={['上传日常视频', '抽取代表帧', '识别行为片段', '生成习惯档案']} />
      <View style={styles.frames}>
        {['抬头', '靠近', '摇尾'].map((frame) => (
          <View key={frame} style={styles.frame}><Text style={styles.frameText}>{frame}</Text></View>
        ))}
      </View>
      <PrimaryButton label="查看行为档案" onPress={() => navigate('behavior-insights')} />
      <PrimaryButton label="返回照片" variant="light" onPress={() => navigate('photo-upload')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.lg, backgroundColor: colors.background },
  kicker: { color: colors.mintDark, fontSize: typography.caption, fontWeight: '800' },
  title: { color: colors.ink, fontSize: typography.title, fontWeight: '900' },
  subtitle: { color: colors.muted, fontSize: typography.body, lineHeight: 22 },
  frames: { flexDirection: 'row', gap: spacing.sm },
  frame: { flex: 1, height: 96, borderRadius: radius.lg, backgroundColor: colors.surfaceWarm, alignItems: 'center', justifyContent: 'center' },
  frameText: { color: colors.ink, fontSize: typography.body, fontWeight: '900' }
});
```

- [ ] **Step 6: Create behavior insights screen**

Create `src/screens/BehaviorInsightsScreen.tsx`:

```tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { behaviorInsights } from '../data/prototypeData';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function BehaviorInsightsScreen({ navigate }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>行为档案</Text>
      <Text style={styles.title}>这些习惯会参与互动回应</Text>
      <Text style={styles.subtitle}>每条结果都带有来源和置信度，避免让分析看起来像黑箱。</Text>
      {behaviorInsights.map((insight) => (
        <View key={insight.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{insight.label}</Text>
            <Text style={styles.confidence}>{Math.round(insight.confidence * 100)}%</Text>
          </View>
          <Text style={styles.body}>{insight.summary}</Text>
          {insight.timeline.map((item) => (
            <Text key={`${item.start}-${item.end}`} style={styles.timeline}>
              {item.start.toFixed(1)}s - {item.end.toFixed(1)}s · {item.behavior}
            </Text>
          ))}
        </View>
      ))}
      <PrimaryButton label="用这些习惯和 TA 互动" onPress={() => navigate('interaction')} />
      <PrimaryButton label="返回视频" variant="light" onPress={() => navigate('video-upload')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.md, backgroundColor: colors.background },
  kicker: { color: colors.mintDark, fontSize: typography.caption, fontWeight: '800' },
  title: { color: colors.ink, fontSize: typography.title, fontWeight: '900' },
  subtitle: { color: colors.muted, fontSize: typography.body, lineHeight: 22 },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.sm },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.md },
  cardTitle: { flex: 1, color: colors.ink, fontSize: typography.h2, fontWeight: '900' },
  confidence: { color: colors.mintDark, fontSize: typography.h2, fontWeight: '900' },
  body: { color: colors.muted, fontSize: typography.body, lineHeight: 22 },
  timeline: { color: colors.ink, fontSize: typography.caption, fontWeight: '700' }
});
```

- [ ] **Step 7: Create interaction screen**

Create `src/screens/InteractionScreen.tsx`:

```tsx
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
      <View style={styles.inputMock}><Text style={styles.inputText}>语音识别：过来陪我一下</Text></View>
      <View style={styles.waveform}>{[24, 42, 30, 54, 34, 46, 28].map((height, index) => <View key={index} style={[styles.bar, { height }]} />)}</View>
      <View style={styles.actionRow}>
        {['叫 TA 过来', '一起玩球', '睡前陪伴'].map((label) => <Text key={label} style={styles.chip}>{label}</Text>)}
      </View>
      <McpTrace steps={interactionTrace.steps} />
      <PetRoomScene motion="approach_camera" />
      <View style={styles.response}><Text style={styles.responseText}>{interactionTrace.response}</Text></View>
      <PrimaryButton label="回到宠物房间" onPress={() => navigate('pet-room')} />
      <PrimaryButton label="查看记忆来源" variant="light" onPress={() => navigate('memory-detail')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.md, backgroundColor: colors.background },
  kicker: { color: colors.mintDark, fontSize: typography.caption, fontWeight: '800' },
  title: { color: colors.ink, fontSize: typography.title, fontWeight: '900' },
  subtitle: { color: colors.muted, fontSize: typography.body, lineHeight: 22 },
  inputMock: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg },
  inputText: { color: colors.ink, fontSize: typography.body, fontWeight: '800' },
  waveform: { height: 70, backgroundColor: colors.surfaceWarm, borderRadius: radius.lg, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm },
  bar: { width: 8, borderRadius: 4, backgroundColor: colors.mintDark },
  actionRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: { color: colors.ink, backgroundColor: colors.surface, borderRadius: radius.md, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, fontWeight: '800' },
  response: { backgroundColor: colors.ink, borderRadius: radius.lg, padding: spacing.lg },
  responseText: { color: colors.white, fontSize: typography.body, lineHeight: 22, fontWeight: '700' }
});
```

- [ ] **Step 8: Create memory detail screen**

Create `src/screens/MemoryDetailScreen.tsx`:

```tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { behaviorInsights } from '../data/prototypeData';
import { colors, radius, spacing, typography } from '../theme/tokens';
import type { ScreenName } from '../types/prototype';

type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};

export function MemoryDetailScreen({ navigate }: ScreenProps) {
  const memory = behaviorInsights[1];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>记忆详情</Text>
      <Text style={styles.title}>{memory.label}</Text>
      <Text style={styles.subtitle}>这里说明某个习惯如何影响回应，同时保持来源透明。</Text>
      {['来源：视频识别 video_001', '用户补充：睡前它常靠在右边', '历史互动：最近 3 次睡前陪伴都触发靠近动作'].map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      ))}
      <View style={styles.note}>
        <Text style={styles.noteText}>边界：这是习惯记忆和动作模拟，不代表真实意识或真实情感。</Text>
      </View>
      <PrimaryButton label="发起一次陪伴互动" onPress={() => navigate('interaction')} />
      <PrimaryButton label="回到房间" variant="light" onPress={() => navigate('pet-room')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.md, backgroundColor: colors.background },
  kicker: { color: colors.mintDark, fontSize: typography.caption, fontWeight: '800' },
  title: { color: colors.ink, fontSize: typography.title, fontWeight: '900' },
  subtitle: { color: colors.muted, fontSize: typography.body, lineHeight: 22 },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg },
  cardText: { color: colors.ink, fontSize: typography.body, fontWeight: '800', lineHeight: 22 },
  note: { backgroundColor: colors.surfaceWarm, borderRadius: radius.lg, padding: spacing.lg },
  noteText: { color: colors.muted, fontSize: typography.caption, lineHeight: 18 }
});
```

- [ ] **Step 9: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: no TypeScript errors.

- [ ] **Step 10: Commit screens**

```bash
git add App.tsx src/screens
git commit -m "feat: implement prototype screen flow"
```

## Task 5: Polish High-Fidelity Mobile Experience

**Files:**
- Modify: `src/screens/PetRoomScreen.tsx`
- Modify: `src/screens/CreatePetScreen.tsx`
- Modify: `src/screens/PhotoUploadScreen.tsx`
- Modify: `src/screens/VideoUploadScreen.tsx`
- Modify: `src/screens/BehaviorInsightsScreen.tsx`
- Modify: `src/screens/InteractionScreen.tsx`
- Modify: `src/screens/MemoryDetailScreen.tsx`
- Modify: `src/components/PetRoomScene.tsx`
- Modify: `README.md`

- [ ] **Step 1: Verify interaction-specific UI polish**

Inspect the implemented screens and confirm the prototype visibly contains:

- Photo upload simulation with three extracted visual attributes: 毛色、脸型、体态.
- Video upload simulation with these progress steps: 上传日常视频、抽取代表帧、识别行为片段、生成习惯档案.
- Behavior insights with confidence percentages.
- Interaction screen with text input mock, voice waveform mock, three scene buttons, MCP trace, and UE motion response.
- Memory detail with source provenance: 视频识别、用户补充、历史互动.

- [ ] **Step 2: Add README**

Create `README.md`:

```md
# 宠生 PetLive Mobile Prototype

宠生是一款手机 App 高保真原型，演示宠物数字分身、行为习惯提取、UE 风格动作互动和 MCP 调用链可视化。

## Scope

This repository currently implements a prototype. AI analysis, UE motion, MCP tools, and upload processing are simulated with local mock data. The UI avoids promising pet resurrection or real consciousness.

## Run Locally

```bash
npm install
npm run typecheck
npm start
```

Use Expo Go or a simulator to preview the mobile app.

## Prototype Flow

1. Pet room opens first.
2. User progressively creates a pet profile.
3. Photo upload simulates avatar draft generation.
4. Video upload simulates behavior analysis.
5. Behavior insights show confidence and timeline.
6. Interaction shows MCP trace and UE-style motion response.
```

- [ ] **Step 3: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: no TypeScript errors.

- [ ] **Step 4: Run Expo start smoke test**

Run:

```bash
npm start
```

Expected: Expo starts and prints a local development URL or QR code. Stop the server after confirming startup.

- [ ] **Step 5: Commit polish**

```bash
git add README.md src
git commit -m "feat: polish mobile prototype experience"
```

## Task 6: Verify And Publish Development State

**Files:**
- No new files unless verification reveals a defect.

- [ ] **Step 1: Verify clean typecheck**

Run:

```bash
npm run typecheck
```

Expected: no TypeScript errors.

- [ ] **Step 2: Verify Git status**

Run:

```bash
git status -sb
```

Expected: branch is ahead of `origin/main` only by the new development commits, with no untracked source files.

- [ ] **Step 3: Push development commits**

Run:

```bash
git push
```

Expected: `origin/main` receives the mobile prototype commits.

- [ ] **Step 4: Summarize completion**

Report:

- GitHub branch and latest commit.
- Commands run.
- Whether Expo startup was verified.
- Any remaining limitations, especially simulated AI, UE, MCP, and upload processing.

## Self-Review

Spec coverage:

- Mobile App high-fidelity prototype: covered by Tasks 1, 4, and 5.
- Pet room first: covered by Task 4.
- Daily companion visual direction: covered by Task 2 theme tokens and Task 5 polish.
- Progressive pet profile creation: covered by Task 4.
- Photo upload simulation: covered by Tasks 4 and 5.
- Semi-technical video behavior extraction: covered by Tasks 4 and 5.
- UE-style action control: covered by Tasks 3, 4, and 5.
- MCP lightweight trace visualization: covered by Tasks 3, 4, and 5.
- Data and simulation boundaries: covered by Tasks 2 and 5 README.
- Verification and publish: covered by Task 6.

No placeholders are intentionally left in this plan. Each screen has a concrete file path, route, visible content, and navigation contract.
