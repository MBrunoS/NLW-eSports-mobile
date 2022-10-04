import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: 24,
  },
  label: {
    color: THEME.COLORS.TEXT,
    marginBottom: 8,
  },
  input: {
    color: THEME.COLORS.TEXT,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    paddingHorizontal: 12,
  },
});
