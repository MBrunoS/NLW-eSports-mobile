import React, { cloneElement } from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  icon?: JSX.Element;
}

export function Button({ children, onPress, icon }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon && cloneElement(icon, { color: THEME.COLORS.TEXT, size: 20 })}

      <Text style={styles.buttonTitle}>{children}</Text>
    </TouchableOpacity>
  );
}
