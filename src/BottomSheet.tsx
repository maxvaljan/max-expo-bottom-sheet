import React from 'react';
import {
  Platform,
  type StyleProp,
  useWindowDimensions,
  type ViewStyle,
} from 'react-native';

type SwiftBottomSheetProps = React.ComponentProps<
  typeof import('@expo/ui/swift-ui').BottomSheet
>;

type JetpackBottomSheetProps = React.ComponentProps<
  typeof import('@expo/ui/jetpack-compose').BottomSheet
>;

type IosBottomSheetProps = SwiftBottomSheetProps & {
  hostStyle?: StyleProp<ViewStyle>;
};

export type BottomSheetProps = IosBottomSheetProps | JetpackBottomSheetProps;

const getSwiftUI = () =>
  require('@expo/ui/swift-ui') as typeof import('@expo/ui/swift-ui');

const getJetpackCompose = () =>
  require('@expo/ui/jetpack-compose') as typeof import('@expo/ui/jetpack-compose');

export function BottomSheet(props: BottomSheetProps) {
  const { width } = useWindowDimensions();

  if (Platform.OS === 'ios') {
    const { BottomSheet: SwiftBottomSheet, Host } = getSwiftUI();
    const { hostStyle, ...rest } = props as IosBottomSheetProps;

    return (
      <Host style={[{ position: 'absolute', width }, hostStyle]}>
        <SwiftBottomSheet {...rest} />
      </Host>
    );
  }

  if (Platform.OS === 'android') {
    const { BottomSheet: ComposeBottomSheet } = getJetpackCompose();

    return <ComposeBottomSheet {...(props as JetpackBottomSheetProps)} />;
  }

  return null;
}

export default BottomSheet;
