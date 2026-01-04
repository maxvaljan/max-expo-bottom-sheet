declare module '@expo/ui/jetpack-compose' {
  import * as React from 'react';

  // BottomSheet typing shim for versions of @expo/ui that don't export it yet.
  export const BottomSheet: React.ComponentType<any>;
}
