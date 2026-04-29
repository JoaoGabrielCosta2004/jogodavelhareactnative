import { Text, View, Alert } from "react-native";
import Tabuleiro from "../components/Tabuleiro";
import { useState, useEffect } from "react";

export default function Index() {
  const [tabuleiro, settabuleiro] = useState<string[][]>([
    ["", "", ""], ["", "", ""], ["", "", ""],
  ]);
  const [vez, setvez] = useState<string>("x");
  const [placar, setPlacar] = useState({ player: 0, cpu: 0 });

  const checarVencedor = (t: string[][]) => {
    for (let i = 0; i < 3; i++) {
      if (t[i][0] && t[i][0] === t[i][1] && t[i][0] === t[i][2]) return t[i][0];
      if (t[0][i] && t[0][i] === t[1][i] && t[0][i] === t[2][i]) return t[0][i];
    }
    if (t[0][0] && t[0][0] === t[1][1] && t[0][0] === t[2][2]) return t[0][0];
    if (t[0][2] && t[0][2] === t[1][1] && t[0][2] === t[2][0]) return t[0][2];
    return null;
  };

  const reiniciar = () => {
    settabuleiro([["", "", ""], ["", "", ""], ["", "", ""]]);
    setvez("x");
  };

  const fazerJogada = (l: number, c: number, v: string) => {
    const novo = tabuleiro.map(row => [...row]);
    novo[l][c] = v;
    settabuleiro(novo);
    setvez(v === "x" ? "o" : "x");
  };

  useEffect(() => {
    const vencedor = checarVencedor(tabuleiro);
    if (vencedor) {
      Alert.alert("Fim de Jogo", `O ${vencedor.toUpperCase()} venceu!`);
      setPlacar(p => ({
        ...p,
        [vencedor === 'x' ? 'player' : 'cpu']: p[vencedor === 'x' ? 'player' : 'cpu'] + 1
      }));
      reiniciar();
    } else if (!tabuleiro.flat().includes("")) {
      Alert.alert("Empate", "Deu velha!");
      reiniciar();
    } else if (vez === "o") {
      setTimeout(() => {
        const vazias: { i: number; j: number }[] = [];

        tabuleiro.forEach((row, i) => row.forEach((cell, j) => {
          if (cell === "") vazias.push({ i, j });
        }));

        if (vazias.length > 0) {
          const sorteio = vazias[Math.floor(Math.random() * vazias.length)];
          fazerJogada(sorteio.i, sorteio.j, "o");
        }
      }, 600);
    }
  }, [tabuleiro, vez]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text style={{ fontSize: 20, marginHorizontal: 20 }}>Player: {placar.player}</Text>
        <Text style={{ fontSize: 20, marginHorizontal: 20 }}>CPU: {placar.cpu}</Text>
      </View>
      <Tabuleiro tabuleiro={tabuleiro} settabuleiro={settabuleiro} vez={vez} setvez={setvez} />
    </View>
  );
}
