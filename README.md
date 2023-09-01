# Ferramenta de ordenação de propriedades CSS 📋

Projeto individual do curso de Desenvolvedor Full Stack Resilia. Criação de uma ferramenta que recebe as propriedades do CSS e as ordena em ordem alfabética.

## Apresentação 🚀

Sistema desenvolvido para organizar em ordem alfabética as propriedades do CSS. Para esse projeto foi utilizado o [NodeJS](https://nodejs.org/en) (versão 18.17.1) juntamente com o [VSCode](https://code.visualstudio.com/) para criar a lógica e a biblioteca [Readline-Sync](https://www.npmjs.com/package/readline-sync) que permite que sejam informados dados ao sistema atráves da linha de comando.

## Requisitos ⚠️

Para que o sistema funcione perfeitamente tenha o **[NodeJS](https://nodejs.org/en)** instalado em seu computador.

## Funcionalidades 📚

- Ordena as propriedades CSS em ordem alfabética.

**_ENTRADA_**

```bash
Digite pelo menos 2 propriedades do CSS.
Para ordenar digite 'sair'

Digite a propriedade: font-size
Digite a propriedade: color
Digite a propriedade: padding
Digite a propriedade: border-block
Digite a propriedade: animation-name
Digite a propriedade: sair
```

**_SAÍDA_**

```bash
LISTA DOS ELEMENTOS ORDENADOS:
animation-name
border-block
color
font-size
padding
```

***OBS.:*** *Não esquecer de digitar o 'sair' para o sistema retornar a lista ordenada.*

- Tratamento de erros

Caso o usuário não digite nada ou digite um número na entrada de dados, o sistema acusa a mensagem de erro `Entrada inválida` e não insere a respectiva entrada na lista como mostra o exemplo:

**_ENTRADA_**

```bash
Digite pelo menos 2 propriedades do CSS.
Para ordenar digite 'sair'

Digite a propriedade: font-size
Digite a propriedade:
Entrada inválida
Digite a propriedade: padding
Digite a propriedade: 123456
Entrada inválida
Digite a propriedade: animation-name
Digite a propriedade: sair
```

**_SAÍDA_**

```bash
LISTA DOS ELEMENTOS ORDENADOS:
animation-name
font-size
padding
```

## Instalação 🔧

Depois de instalado o NodeJS em sua máquina:

1. Clone o repositório usando a `URL` do projeto **OU** a chave `SSH` no terminal:

```bash
URL: git clone https://github.com/Thzzao/OrdenaCSSResilia.git

SSH: git clone git@github.com:Thzzao/OrdenaCSSResilia.git
```

2. Depois entre na pasta `OrdenaCSSResilia` usando o comando:

```bash
cd OrdenaCSSResilia
```

3. Depois de chegar com o terminal na pasta correspondente, use o comando para instalar as dependências necessárias da ferramenta (no caso o `Readline-sync`):

```bash
npm install
```

**OU**

```bash
npm install readline-sync
```

4. Depois de feita a instalação, para `iniciar o sistema` digite no terminal:

```bash
npm start
```

#### GIF da instalação

![GIF instalação](https://github.com/Thzzao/OrdenaCSSResilia/assets/95200381/200e6dd0-017b-41dc-afef-d118523465d5)

## Contribuição 💡

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Referências 🔍

[Documentação do NodeJS](https://nodejs.org/en/docs) - Sistema desenvolvido usando a versão 18.17.1 LTS do NodeJS.

[Documentação do Readline-sync](https://www.npmjs.com/package/readline-sync)

## Autor 🖌

<p align="center">Projeto desenvolvido por Thiago Souza 🤙

Para mais informações sobre o projeto, entre em contato comigo através do email: thiago.santos1160@gmail.com

</p>
