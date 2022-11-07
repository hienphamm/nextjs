import React from "react";
import { SideSheet as EvSideSheet } from "evergreen-ui";

type Props = {
  isVisible: boolean;
  onClose: VoidFunction;
};

function SideSheet({ isVisible, onClose }: Props) {
  return (
    <EvSideSheet isShown={isVisible} onCloseComplete={onClose}>
      <div>Hello world</div>
    </EvSideSheet>
  );
}

export default SideSheet;
