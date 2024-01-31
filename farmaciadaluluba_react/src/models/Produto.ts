import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    preco: string;
    categoria:  Categoria | null;
}
