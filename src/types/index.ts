export interface PubProps {
  nome_publicador: string;
  data_nascimento: number;
  data_batismo: string;
  genero: number;
  designacao: number;
  ungido_ovelha: string;
  password: string;
  telefone: number;
  endereco: string;
  nome: string;
}
export interface GrupoData {
  nome_publicador: string;
  grupo: string | null;
  mes: number;
  ano: number;
  obs: string;
  estudos: number | null;
  participacao_ministerio: boolean | null;
}

export interface GrupoItemState {
  obs: string;
  estudos: number;
  participacaoMinisterio: string;
}
