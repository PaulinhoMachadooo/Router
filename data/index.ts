import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
  categories: Category[];
  products: Product[];
};
export const data: Data = {
  categories: [
    {
      id: 1,
      title: "Acadêmias",
    },
    {
      id: 2,
      title: "Açougues",
    },
    {
      id: 3,
      title: "Advogados",
    },
    {
      id: 4,
      title: "Agências de Turismos",
    },
    {
      id: 5,
      title: "Água e Gás",
    },
    {
      id: 6,
      title: "Alarmes e Seguranças",
    },
    {
      id: 7,
      title: "Aluguel de Equipamentos",
    },
    {
      id: 8,
      title: "Arquitetos",
    },
    {
      id: 9,
      title: "Arte e Cultura",
    },
    {
      id: 10,
      title: "Artigos de Festa",
    },
    {
      id: 11,
      title: "Associações e Cooperativas",
    },
    {
      id: 12,
      title: "Auto Elétricas",
    },
    {
      id: 13,
      title: "Auto Escolas",
    },
    {
      id: 14,
      title: "Auto Peças",
    },
    {
      id: 15,
      title: "Barbearias",
    },
    {
      id: 16,
      title: "Bares e Restaurantes",
    },
    {
      id: 17,
      title: "Beleza e Estéticas",
    },
    {
      id: 18,
      title: "Borracharias",
    },
    {
      id: 19,
      title: "Buffet",
    },
    {
      id: 20,
      title: "Cabeleireiros",
    },
    {
      id: 21,
      title: "Cama Mesa e Banho",
    },
    {
      id: 22,
      title: "Cartórios",
    },
    {
      id: 23,
      title: "Casa e Decoração",
    },
    {
      id: 24,
      title: "Chaveiros",
    },
    {
      id: 25,
      title: "Clínicas e Laboratórios",
    },
    {
      id: 26,
      title: "Clínicas Veterinárias",
    },
    {
      id: 27,
      title: "Colégios e Escolas",
    },
    {
      id: 28,
      title: "Contabilidade",
    },
    {
      id: 29,
      title: "Dentistas",
    },
    {
      id: 30,
      title: "Despachantes",
    },
    {
      id: 31,
      title: "Doces e Salgados",
    },
    {
      id: 32,
      title: "Educação",
    },
    {
      id: 33,
      title: "Eletro Domésticos",
    },
    {
      id: 34,
      title: "Encanador",
    },
    {
      id: 35,
      title: "Escola de Idiomas",
    },
    {
      id: 36,
      title: "Faculdade",
    },
    {
      id: 37,
      title: "Farmácia",
    },
    {
      id: 38,
      title: "Fisioterapeuta",
    },
    {
      id: 39,
      title: "Floricultura",
    },
    {
      id: 40,
      title: "Foto e Filmagens",
    },
    {
      id: 41,
      title: "Fretes e Mudanças",
    },
    {
      id: 42,
      title: "Funerárias",
    },
    {
      id: 43,
      title: "Funilaria e Pintura",
    },
    {
      id: 44,
      title: "Gráfica",
    },
    {
      id: 45,
      title: "Hotel e Pousada",
    },
    {
      id: 46,
      title: "Imobiliária",
    },
    {
      id: 47,
      title: "Internet",
    },
    {
      id: 48,
      title: "Jardinagem",
    },
    {
      id: 49,
      title: "Lanches",
    },
    {
      id: 50,
      title: "Lava Rápido",
    },
    {
      id: 51,
      title: "Loja de Calçados",
    },
    {
      id: 52,
      title: "Loja de Informática",
    },
    {
      id: 53,
      title: "Loja de Presentes e Ultensílios",
    },
    {
      id: 54,
      title: "Loja de Roupas",
    },
    {
      id: 55,
      title: "Marcenaria",
    },
    {
      id: 56,
      title: "Materiais de Construção",
    },
    {
      id: 57,
      title: "Médicos e Saúde",
    },
    {
      id: 58,
      title: "Noivas e Casamentos",
    },
    {
      id: 59,
      title: "OAB",
    },
    {
      id: 60,
      title: "Oficina de Carro",
    },
    {
      id: 61,
      title: "Oficina de Moto",
    },
    {
      id: 62,
      title: "Ôtica e Relojoaria",
    },
    {
      id: 63,
      title: "Padaria",
    },
    {
      id: 64,
      title: "Papelaria",
    },
    {
      id: 65,
      title: "Peixaria",
    },
    {
      id: 66,
      title: "Perfumes e Cosméticos",
    },
    {
      id: 67,
      title: "Pet Shop",
    },
    {
      id: 68,
      title: "Piscina e Jardim",
    },
    {
      id: 69,
      title: "Pizzaria",
    },
    {
      id: 70,
      title: "Posto de Conbustível",
    },
    {
      id: 71,
      title: "Restaurante",
    },
    {
      id: 72,
      title: "Salão de Beleza",
    },
    {
      id: 73,
      title: "Supermercado",
    },
    {
      id: 74,
      title: "Tatuagens",
    },
  ],
  products: [
    {
      id: 4 /*Produto*/,
      idCategory: 1 /*Categoria */,
      image: "https://encurtador.com.br/muW2y",
      title: "Exemplo",
      description: "Gravação ultra HD, qualidade profissional.",
    },
    /* {
      id: 9,
      idCategory: 1,
      image: "https://picsum.photos/id/8/200/200",
      title: "Roteador Wi-Fi",
      description: "Conexão estável, cobertura ampla, múltiplos dispositivos.",
    },
    {
      id: 6,
      idCategory: 1,
      image: "https://picsum.photos/id/5/200/200",
      title: 'Tablet 10"',
      description: "Tela brilhante, ideal para entretenimento e produtividade.",
    },
    {
      id: 5,
      idCategory: 1,
      image: "https://picsum.photos/id/4/200/200",
      title: "Smartwatch",
      description: "Monitoramento de saúde e notificações inteligentes.",
    },
    {
      id: 8,
      idCategory: 1,
      image: "https://picsum.photos/id/7/200/200",
      title: "Console X",
      description: "Gráficos avançados, ampla biblioteca de jogos.",
    },
    {
      id: 3,
      idCategory: 1,
      image: "https://picsum.photos/id/2/200/200",
      title: "Fone Bluetooth",
      description: "Som cristalino, cancelamento de ruído ativo.",
    },
    {
      id: 1,
      idCategory: 1,
      image: "https://picsum.photos/id/0/200/200",
      title: "Smartphone X1",
      description: "Alta performance, tela AMOLED e câmera avançada.",
    },
    {
      id: 2,
      idCategory: 1,
      image: "https://picsum.photos/id/1/200/200",
      title: "Laptop Pro",
      description: "Design elegante, processador i7, 16GB RAM.",
    },
    {
      id: 7,
      idCategory: 1,
      image: "https://picsum.photos/id/6/200/200",
      title: 'TV LED 50"',
      description: "Imagem vívida, resolução 4K, serviços de streaming.",
    },
    {
      id: 10,
      idCategory: 1,
      image: "https://picsum.photos/id/9/200/200",
      title: "Drone Pro",
      description: "Voo preciso, câmera HD, controle intuitivo.",
    },*/
  ],
};
