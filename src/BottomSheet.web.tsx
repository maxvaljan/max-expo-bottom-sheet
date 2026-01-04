import React from 'react';
import { Dialog } from '@base-ui/react/dialog';

export interface BottomSheetProps {
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

const defaultBackdropStyle: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
};

const defaultViewportStyle: React.CSSProperties = {
  alignItems: 'flex-end',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
};

const defaultPopupStyle: React.CSSProperties = {
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  bottom: 0,
  boxShadow: '0 -12px 30px rgba(0, 0, 0, 0.2)',
  maxHeight: '85vh',
  position: 'relative',
  width: 'min(720px, 100vw)',
};

const defaultContentStyle: React.CSSProperties = {
  backgroundColor: '#0f0f12',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  color: '#f5f5f7',
  padding: '20px 20px 28px',
};

export function BottomSheet({
  children,
  isOpened,
  onIsOpenedChange,
  backdropStyle,
  viewportStyle,
  popupStyle,
  contentStyle,
  backdropClassName,
  viewportClassName,
  popupClassName,
  contentClassName,
}: BottomSheetProps) {
  return (
    <Dialog.Root open={isOpened} onOpenChange={onIsOpenedChange}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={backdropClassName}
          style={{ ...defaultBackdropStyle, ...backdropStyle }}
        />
        <Dialog.Viewport
          className={viewportClassName}
          style={{ ...defaultViewportStyle, ...viewportStyle }}>
          <Dialog.Popup
            className={popupClassName}
            style={{ ...defaultPopupStyle, ...popupStyle }}>
            <div
              className={contentClassName}
              style={{ ...defaultContentStyle, ...contentStyle }}>
              {children}
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default BottomSheet;
