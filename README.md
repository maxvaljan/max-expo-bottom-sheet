# max-expo-bottom-sheet

Cross-platform BottomSheet for Expo using native Expo UI on iOS/Android and Base UI Dialog on web.

- iOS: `@expo/ui/swift-ui` BottomSheet (SwiftUI)
- Android: `@expo/ui/jetpack-compose` BottomSheet (Compose)
- Web: `@base-ui/react` Dialog

> Expo UI is still beta and **not available in Expo Go**. Use a development build to test on device/simulator.

## Installation

### 1) Add package

```bash
# bun
bun add max-expo-bottom-sheet

# npm
npm install max-expo-bottom-sheet

# pnpm
pnpm add max-expo-bottom-sheet
```

### 2) Expo UI (native)

```bash
npx expo install @expo/ui
```

### 3) Base UI (web)

```bash
# bun
bun add @base-ui/react

# npm
npm install @base-ui/react

# pnpm
pnpm add @base-ui/react
```

If you don't target web, `@base-ui/react` is optional.

## Usage

### iOS (SwiftUI)

```tsx
import { BottomSheet } from 'max-expo-bottom-sheet';
import { Text } from '@expo/ui/swift-ui';
import { useWindowDimensions } from 'react-native';

export function Example({ isOpened, setIsOpened }) {
  const { width } = useWindowDimensions();

  return (
    <BottomSheet
      isOpened={isOpened}
      onIsOpenedChange={setIsOpened}
      hostStyle={{ position: 'absolute', width }}
      presentationDetents={['medium', 'large']}
      presentationDragIndicator="visible">
      <Text>Hello, world!</Text>
    </BottomSheet>
  );
}
```

### Android (Jetpack Compose)

```tsx
import { BottomSheet } from 'max-expo-bottom-sheet';
import { Text } from 'react-native';

export function Example({ isOpened, setIsOpened }) {
  return (
    <BottomSheet
      isOpened={isOpened}
      onIsOpenedChange={setIsOpened}
      style={{ minHeight: 200 }}>
      <Text>Hello from bottom sheet!</Text>
    </BottomSheet>
  );
}
```

### Web (Base UI Dialog)

```tsx
import { BottomSheet } from 'max-expo-bottom-sheet';

export function Example({ isOpened, setIsOpened }) {
  return (
    <BottomSheet isOpened={isOpened} onIsOpenedChange={setIsOpened}>
      <div>Hello from web bottom sheet!</div>
    </BottomSheet>
  );
}
```

## API

### Native (iOS/Android)

- **iOS:** Props match `@expo/ui/swift-ui` `BottomSheet` with one addition:
  - `hostStyle?: StyleProp<ViewStyle>` — applied to the `Host` wrapper
- **Android:** Props match `@expo/ui/jetpack-compose` `BottomSheet`

### Web

```ts
interface BottomSheetProps {
  children: React.ReactNode;
  isOpened: boolean;
  onIsOpenedChange: (isOpened: boolean) => void;
  backdropStyle?: React.CSSProperties;
  viewportStyle?: React.CSSProperties;
  popupStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  backdropClassName?: string;
  viewportClassName?: string;
  popupClassName?: string;
  contentClassName?: string;
}
```

## Notes

- iOS SwiftUI components must be wrapped in `Host`. This component does that for you.
- Base UI Dialog is unstyled by default; this package provides a simple default sheet layout you can override via style/className props.

## License

MIT
