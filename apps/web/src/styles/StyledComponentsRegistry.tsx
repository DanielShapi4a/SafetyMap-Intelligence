"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider
} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";

type StyledComponentsRegistryProps = {
  children: ReactNode;
};

export function StyledComponentsRegistry({
  children
}: StyledComponentsRegistryProps) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const themedApp = (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );

  if (typeof window !== "undefined") {
    return themedApp;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {themedApp}
    </StyleSheetManager>
  );
}
