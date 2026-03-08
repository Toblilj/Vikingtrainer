//Här renderas UI för mina knappar.

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { RusticButtonProps } from "../types/RusticButtonProps";

export default function RusticButton({
  children,
  onPress,
  style,
}: RusticButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        style,
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "relative",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "rgba(45, 74, 107, 0.6)",
    borderRadius: 2,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonPressed: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
    transform: [{ translateY: 1 }],
  },
  content: {
    position: "relative",
    zIndex: 10,
  },
  text: {
    color: "#e8dcc4",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});

<RusticButton onPress={handlestart}>Interval Running</RusticButton>;
function handlestart(): void {
  throw new Error("Function not implemented.");
}
