import { Text, TextInput, TextInputProps, View } from "react-native";

import { styles } from "./styles";

interface Props extends TextInputProps {
  label: string;
}

export const TextField = ({ label, ...inputProps }: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} {...inputProps} />
  </View>
);
