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
  motion: 'idle' | 'approach_camera' | 'tail_wag' | 'lie_down';
  response: string;
};

