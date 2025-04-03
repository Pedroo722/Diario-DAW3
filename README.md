# Diário

<img alt="Logo do Instituto Federal da Paraíba" width="80px" src="https://www.ifpb.edu.br/en/imagens/logotipos/ifpb.png" align="left" style="margin-left: 5px;" />

Projeto desenvolvido para a matéria de Desenvolvimento de Aplicações Web III. O objetivo principal do projeto é desenvolver um sistema de registro de atividades do dia a dia, como uma espécie de blog. 

<p align="right">Coordenador: Prof. Alvaro Magnum Barbosa Neto</p>


Membros do projeto:
- Vinicius Cavalcante Pequeno
- Pedro Henrique Alexandre da Rocha
- Thiago dos Santos Aráujo
- Raykkoner Dujhkkovick Silva de Farias

## Tecnologias Usadas


<div align="center">

![Javascript](https://img.shields.io/badge/javascript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

</div>

## Funcionalidades

O usuário do diário pode inserir postagens que contém:
- **DATA-HORA**: Corresponde a data e hora da postagem. Deve ser pego automaticamente pelo sistema no dia e hora da postagem.
- **TÍTULO**: Título da postagem. Deve ser algo curto com limitação de caracteres.
- **FOTO**: Imagem que representará a um determinado registro no diário. Cada postagem deve ser acompanhada de uma imagem.
- **TEXTO**: O texto que será inserido no diário. Corresponde a descrição daquele registro. O conteúdo principal de uma postagem

### 1. Página Inicial

Na página inicial do Diário, deverão ser encontradas todas as postagens, incluindo: data-hora, título, foto e resumo do texto da postagem. O resumo corresponde a apenas uma parte do texto principal. É o texto principal cortado/limitado a uma quantidade específica de caracteres.

Ainda na página principal, mais especificamente no rodapé da página, deverá haver um formulário para cadastro de nova entrada do usuário, incluindo campo de envio/upload da foto e os demais itens que compôem a entrada.

### 2. Páginas das Postagens

Ao clicar em cada postagem o usuário deverá ser levado a uma página contendo todas as informações referentes ao registro clicado, incluindo o texto completo.