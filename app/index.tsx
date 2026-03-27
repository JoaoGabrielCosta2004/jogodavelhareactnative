import { Text, View } from "react-native";
import Tabuleiro from "../components/Tabuleiro";
import {useState} from "react";

export default function Index() {
  const [tabuleiro, settabuleiro] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [vez, setvez] = useState("x");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Tabuleiro
      tabuleiro={tabuleiro}
      settabuleiro={settabuleiro}
      vez={vez}
      setvez={setvez}
      />
    </View>
  );
}

