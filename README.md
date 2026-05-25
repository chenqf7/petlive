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

## Current Boundaries

- Photo-to-3D is represented as a draft generation experience, not a real production pipeline.
- Video behavior extraction is a semi-technical simulation with frames, progress, confidence, and timeline.
- MCP appears as a lightweight user-facing trace, not a developer console.
- UE behavior is simulated through React Native scene states.
