"use client";
import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

const ModalBottom = ({ children, open, setOpen }) => {
  function onDismiss() {
    setOpen(false);
  }
  return (
    <BottomSheet
      open={open}
      onDismiss={onDismiss}
      snapPoints={({ minHeight, maxHeight }) => [ maxHeight / 2, minHeight / 1.5 ]}
    >
      {children}
    </BottomSheet>
  );
};

export default ModalBottom;
