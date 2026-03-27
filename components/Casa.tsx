import {View, Text, Pressable} from "react-native";
interface ITicTacToe {
    tabuleiro: string[][];
    settabuleiro: (tabuleiro: string[][]) => void;
    linha: number;
    coluna: number;
    vez: string;
    setvez: (vez: string) => void;
}
export default function Casa({tabuleiro, linha, coluna, vez, setvez, settabuleiro}: ITicTacToe) {
    
    return (
        <Pressable
            style={{
                width: 100,
                height: 100,
                backgroundColor: "lightgray",
                borderWidth: 1,
                borderColor: "black",
            }}
            onPress={() => {
                setvez(vez=="x"?"o":"x");
                let novoTabuleiro = [...tabuleiro];
                novoTabuleiro[linha][coluna] = vez?tabuleiro[linha][coluna]==null?vez:"":"";
                settabuleiro(novoTabuleiro);
            }}
        >
            {tabuleiro[linha][coluna] == "x" ? 
                <Text style={{fontSize: 100, color: "red"}}>X</Text> :
                tabuleiro[linha][coluna] == "o" ? 
                <Text style={{fontSize: 100, color: "blue"}}>O</Text> :
                null
            }
        </Pressable>
    );
}