export type TipoCasta = "tinto" | "branco" | "rosé";

export interface Harmonizacao {
  icone: string;
  prato: string;
  nota: string;
}

export interface Vinho {
  nome: string;
  produtor: string;
}

export interface Casta {
  id: string;
  nome: string;
  tipo: TipoCasta;
  regioes: string[];
  aromas: string[];
  taninos: number;
  acidez: number;
  corpo: number;
  aroma: number;
  harmonizacao: Harmonizacao[];
  vinhos: Vinho[];
}
