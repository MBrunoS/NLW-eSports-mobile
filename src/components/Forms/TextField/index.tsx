import { Text, TextInput, TextInputProps, View } from "react-native";
import { THEME } from "../../../theme";

import { styles } from "./styles";

interface Props extends TextInputProps {
  label: string;
}

export const TextField = ({ label, ...inputProps }: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>

    <TextInput
      style={styles.input}
      {...inputProps}
      placeholderTextColor={THEME.COLORS.CAPTION_500}
    />
  </View>
);
