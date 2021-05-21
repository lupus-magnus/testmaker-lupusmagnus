<h1 align="center">
  📝 TestMakrr | Lupus Magnus
</h1>

<br>
<h1 align="center">
  <img align="center" src="https://cdn.dribbble.com/users/1857592/screenshots/3848396/character-typing.gif"/>  
</h1>


<br>

<br>

<p>
Cansado de perder tempo precioso com a formatação das suas provas? Não se preocupe mais! Esse app é para você, profissional da educação. O TestMakrr é a solução dos seus problemas. Adicione suas questões com a nossa ferramenta e tenha uma prova imediatamente disponível para imprimir e aplicar.

Nessa versão, temos um MVP disponível onde você pode conferir e aprovar por si mesmo!

</p>

## 🌐 Live Version

https://example.com/

<br>

## 📌 Objetivos e desafios

O projeto TestMakrr foi desenvolvido para suprir uma necessidade de automação de processos, e foi proposto como desafio técnico de um processo seletivo muito especial para mim. Foram utilizadas tecnologias de banco de dados não relacional, inúmeras bibliotecas de Node, e uma arquitetura de projeto MVC. O front-end da aplicação foi feito em React.js.

## 🎯 Pré-requisitos

### Provas:

- Campos:
  - Título
- Tela de impressão da prova com todas as questões e alternativas.

### Questões:

- Campos:
  - Número da questão
  - Descrição

### Alternativas:

- Campos:
  - Texto
  - Alternativa correta?

### Stack

- Javascript / Node.js
- Frameworks a sua escolha.
- Banco de dados a sua escolha.

<br>

<br>

## 🚀 Tecnologias

- Javascript
- NodeJs
- Npm
- MongoDB
- HTML5
- CSS3
- ReactJs
- Heroku
- Cafézinho ☕

## Dependências

### Front:

- react
- react-dom
- react-router-dom

### Back:

- axios
- cors
- express
- mongoose
- concurrently (Usado para o desenvolvimento, rodar front e back juntos)

<hr>

## Como usar

### Via Web:
Na página inicial, basta adicionar o titulo da questão e enviar. Em seguida, adicione cada questão que desejar preenchendo o formulário e clicando em "Adicionar questão". Quando estiver satisfeito, basta clicar em "Pronto!". A aplicação o redirecionará para o link de sua prova formatada. Esse link pode ser usado depois, visto que essa prova ficou registrada em nosso banco de dados.

### Localmente:
Se você está rodando esse programa localmente, basta utilizar o comando `npm run dev`.

A biblioteca concurrently se encarregará de abrir cada aplicação (o front e o back) em portas diferentes. Entretanto, ficarão faltando as variáveis de ambiente, que terei o prazer de passar por e-mail. Mas o projeto também está disponível somente como backend por meio [desta api](www.api.colocarei-aqui.com).
