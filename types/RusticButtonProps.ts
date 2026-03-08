import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type RusticButtonProps = {
  children: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
