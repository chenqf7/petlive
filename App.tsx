import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { PhoneFrame } from './src/components/PhoneFrame';
import { BehaviorInsightsScreen } from './src/screens/BehaviorInsightsScreen';
import { CreatePetScreen } from './src/screens/CreatePetScreen';
import { InteractionScreen } from './src/screens/InteractionScreen';
import { MemoryDetailScreen } from './src/screens/MemoryDetailScreen';
import { PetRoomScreen } from './src/screens/PetRoomScreen';
import { PhotoUploadScreen } from './src/screens/PhotoUploadScreen';
import { VideoUploadScreen } from './src/screens/VideoUploadScreen';
import type { ScreenName } from './src/types/prototype';

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

