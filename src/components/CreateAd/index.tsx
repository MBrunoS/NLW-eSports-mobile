import React, { useState } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { TextField } from "../Forms/TextField";

interface Props extends ModalProps {
  onClose: () => void;
}

export function CreateAd({ onClose, ...rest }: Props) {
  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <Heading
            title="Publique um anúncio"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <TextField
            label="Seu nome (ou nickname)"
            placeholder="Como te chamam dentro do game"
          />
        </View>
      </View>
    </Modal>
  );
}
