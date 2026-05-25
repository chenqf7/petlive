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
  },
  {
    id: 'behavior_ball_excitement',
    petId: 'pet_momo',
    label: '看到球会明显兴奋',
    confidence: 0.82,
    source: 'video_001',
    summary: '球出现后，毛毛会快速看向镜头并开始摇尾。',
    timeline: [
      { start: 2.4, end: 4.8, behavior: '注意玩具' },
      { start: 5.0, end: 9.2, behavior: '摇尾并靠近' }
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
