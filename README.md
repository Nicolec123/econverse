# Econverse — Teste Front-end

Página da loja Econverse desenvolvida em **React**, **TypeScript** e **Sass**, seguindo o layout do [Figma Teste Front-End Jr](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1).

A vitrine consome o JSON público de produtos. Ao clicar em um produto, um modal exibe foto, nome, preço, descrição e quantidade.

## Pré-requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Instalar

```bash
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

Abra o endereço indicado no terminal (em geral `http://localhost:5173`).

O arquivo `vite.config.ts` faz proxy de `/econverse-api` para `https://app.econverse.com.br`. Isso contorna o bloqueio de CORS do navegador, porque a API de produtos não envia `Access-Control-Allow-Origin`.

## Testar

```bash
npm test
```

Os testes cobrem formatação de preço, filtro da busca, leitura do JSON e a interação do card e do modal. Para executá-los em modo watch:

```bash
npm run test:watch
```

## Compilar

```bash
npm run build
```

O TypeScript é checado e o bundle de produção é gerado em `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

O preview também usa o proxy da API. Em uma hospedagem estática, é preciso repetir esse proxy no servidor. Sem ele, o navegador bloqueia o JSON por CORS.

## O que a página faz

A vitrine lista os produtos do JSON. Clicar no produto abre o modal com foto, nome, preço e descrição. Dá para fechar no X, fora do modal ou com Esc.

A busca filtra pelo nome. As abas do layout não separam a lista porque o JSON não traz categoria.

## Preços

O campo `price` vem em reais: `15000` aparece como `R$ 15.000,00`. O valor riscado é 10% acima, só para repetir o card do layout. A parcela é o preço dividido por 2.

## Estrutura

```text
src/
├── components/    # seções e peças de interface
├── data/          # conteúdo estático do layout
├── hooks/         # carregamento dos produtos
├── services/      # acesso ao JSON
├── styles/        # variáveis, mixins e estilo global
├── types/         # contratos TypeScript
└── utils/         # moeda e filtro
```

Não há bibliotecas de UI. Ícones, carrossel, modal e formulário foram feitos no projeto.
