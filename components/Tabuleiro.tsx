import { View, Text } from "react-native";
import Casa from "../components/Casa";

interface ITabuleiro {
    tabuleiro: string[][];
    settabuleiro: (tabuleiro: string[][]) => void;
    vez: string;
    setvez: (vez: string) => void;
} 
export default function Tabuleiro({tabuleiro, settabuleiro, vez, setvez}: ITabuleiro) {

  return (
    <View>
      {tabuleiro.map((linha, i) => (
        <View key={i} style={{ flexDirection: "row" }}>
          {linha.map((celula, j) => (
            <Casa
              key={`${i}-${j}`}
              tabuleiro={tabuleiro}
              linha={i}
              coluna={j}
              vez={vez}
              setvez={setvez}
              settabuleiro={settabuleiro}
            />
          ))}
        </View>
      ))}
    </View>
  );
}