---
title: "BMAD na Prática — Tutorial Guiado com case real"
description: "Siga junto enquanto construímos o agenda-clean do zero usando BMAD, passo a passo, conversa a conversa."
---

Neste tutorial vamos explorar o uso de **agentes de IA personalizados** — agentes de IA configurados para assumir papéis específicos e te ajudar em tarefas concretas de desenvolvimento. Para isso, vamos usar o **BMAD**, uma metodologia, um framework para desenvolvimento impulsionada por conjunto de agentes prontos que cobrem todo o ciclo de criação de um software: da ideia ao código. Como exemplo prático, vamos acompanhar a construção do **agenda-clean**, um sistema real de agendamento para uma empresa de limpeza de sofá, construído do zero com esses agentes — para que você veja cada conversa, cada decisão e cada artefato gerado ao longo do caminho.

---

## Sumário

- [Sumário](#sumário)
- [Preparação: Ambiente e Instalação](#preparação-ambiente-e-instalação)
  - [Mas o que um agente de IA?](#mas-o-que-um-agente-de-ia)
  - [E o BMAD?](#e-o-bmad)
  - [Instalando o BMAD](#instalando-o-bmad)
- [Entendendo as Fases do Processo](#entendendo-as-fases-do-processo)
  - [Fase 1 — Analysis *(opcional)*](#fase-1--analysis-opcional)
  - [Fase 2 — Planning *(obrigatório)*](#fase-2--planning-obrigatório)
  - [Fase 3 — Solutioning *(obrigatório no BMAD Method)*](#fase-3--solutioning-obrigatório-no-bmad-method)
  - [Fase 4 — Implementation *(obrigatório)*](#fase-4--implementation-obrigatório)
  - [Resumo visual](#resumo-visual)
- [Etapa 0 - Inicio + Bônus (bmad-help)](#etapa-0---inicio--bônus-bmad-help)

---

## Preparação: Ambiente e Instalação

Antes de qualquer coisa, abra o terminal da na sua máquina.
Em windows acionar no teclado a tecla `windows` e digitar cmd, vai aparecer o app prompt de comando.
No Linux e MacOS abrir o aplicativo terminal

Agora verifique se as ferramentas necessárias estão instaladas:

**Ver se o nodeJS está instalado**

```bash
node -v        # precisa ser v18 ou superior
```

Se não aparecer `node v.XX.x.x`, instalar em [nodejs.org](https://nodejs.org). Escolher a versão **v24.x.x(LTS)**. Após a instação completa, rodar `node -v` novamente e ver se retornou algo tipo `v24.14.10`.

**Com o nodejs instalado, vamos ver agora o npm.**

```bash
npm -v         # vem junto com o Node
```

Deve aparecer algo como `npm v.11.9.0`, se não aparecer, conferir a instação no nodejs no passo anterior.

**Agora o git, nosso controle de versão. Vamos testar se já está instalado**

```bash
git --version
```

Deve aparecer algo como `git version 2.43.0`, se não aparecer, instalar em [git-scm.com](https://git-scm.com/install/), escolher versão x64 e fazer novamente o teste.

**Vamos ver se o Docker está instalado.**

```bash
docker -v      # precisa estar rodando
docker ps      # confirma que o Docker está ativo
```

Se algum desses falhar, instale antes de continuar. Docker Desktop em [docker.com](https://www.docker.com/products/docker-desktop).

**Tem uma IDE instalada?** Vscode, Cursor, Visual Studio, etc? Caso não tenha, instalar o Vscode em [code.visualstudio.com](https://code.visualstudio.com/download).

Após essa ferramentas instaladas, temos as ferramentas básicas para continuarmos o processo.

### Mas o que um agente de IA?

 **agente de IA**. Um agente é uma instância de um modelo de linguagem (como o GitHub Copilot) que recebe um conjunto de instruções específicas — um papel, um objetivo, um jeito de trabalhar — e age de acordo com elas. Em vez de conversar com um assistente genérico que faz de tudo, você conversa com um especialista configurado para aquela função: ele sabe o que perguntar, o que produzir e quando parar. No contexto do BMAD, cada agente é acionado por um comando no Copilot Chat e assume um papel diferente conforme a etapa do projeto.

 ### E o BMAD?

Pense no BMAD como um **time virtual de especialistas** que vai te acompanhar durante todo o desenvolvimento do projeto. Em vez de você tentar resolver tudo sozinho — o problema de negócio, o design, a arquitetura, o código — o BMAD coloca um especialista diferente em cada etapa: tem o analista que te ajuda a entender o problema, o designer que define como o app vai parecer, o arquiteto que decide a tecnologia, e o dev que realmente escreve o código. Cada um desses "especialistas" é um agente de IA que você aciona pelo GitHub Copilot, e eles conversam com você em linguagem natural, fazem perguntas, tomam decisões e produzem documentos reais que ficam salvos no seu projeto.

Próximo passo é instalar o BMAD

### Instalando o BMAD

No terminal do seu sistema, crie uma pasta para o agenda clean. Onde todo projeto será armazenado, e BMAD será instalado.

```bash
mkdir agenda-clean
cd agenda-clean
```

Pasta criada vamos abrir o vscode já na pasta atual (agenda-clean)

```bash
code . 
```

Agora dentro do vscode abra uma janela do terminal usando o atalho `ctrl+'`

Dentro deste terminal digite o comando

```bash
npx bmad-method@latest install
```

O instalador vai fazer algumas perguntas. Responda assim:

```bash
? Ok to proceed? Y
? Instalation directory: aceitar padrão (Enter)
? Install to this directory Y
? Select models to install: 
#Para selecionar utiliza barra de espaço e para confirmar Enter
# Escolher 
[x] Bmad Core Module
[x] Bmad agile IA drive Development. 
? add custom modules agents or workflows from your computer? N
? Integrate with 
#Para selecionar utiliza barra de espaço e para confirmar Enter
# Escolher 
[x]Claude 
[x]Github copilot 

? What is your project name?  → agenda-clean
? What Should agents call you?   → (seu nome)
? What languages should agnets use when chatting with you?  → Portugues Brazil
? Prefered document output language?  → Portugues Brazil
? Where should output files be saved? aceitar padrão (Enter)
? Model integrations? Express
```

O processo vai iniciar.

Quando terminar, você vai ver uma pasta `_bmad/` criada no projeto.

Reiniciar o vscode.
Abrir uma janela do copilot chat ```Vou colcoar um colocar print aqui```
Selecionar o modo agent no copilot chat```Vou colcoar um colocar print aqui```

Se tudo funcionou bem e você esta na janela do copilot chat...

Abra a janela do Copilot Chat do VS Code e digite `/bmad:DITA:agent:analyst`. Se o agente responder algo semelhantes a isso.

`Olá, {{seu nome}}! 📊 Sou a Mary, sua Analista de Negócios. Estou aqui para transformar ideias vagas em insights concretos — adoro um bom mistério de negócio para desvendar!`

>Sucesso!! O BMAD está instalado e pronto para uso!

---

## Entendendo as Fases do Processo

O BMAD organiza o desenvolvimento em **4 fases**. Nem tudo é obrigatório — o que você precisa executar depende do tamanho e complexidade do projeto.

### Fase 1 — Analysis *(opcional)*

A fase de análise existe para você entender bem o problema **antes** de escrever qualquer requisito. Tudo aqui é opcional, mas o Product Brief é recomendado como ponto de partida para qualquer projeto que não seja trivial.

- **Brainstorming** *(opcional)* — Sessão facilitada de geração de ideias. Agente: Mary (Analyst)
- **Research** *(opcional)* — Pesquisa de mercado, concorrência e viabilidade técnica. Agente: Mary (Analyst)
- **Product Brief** *(recomendado)* — Documento-base que resume o problema, as personas e a proposta de valor. Agente: Mary (Analyst)

### Fase 2 — Planning *(obrigatório)*

Aqui os requisitos são formalizados. Sem essa fase, o Dev não tem base para implementar nada.

- **PRD** *(obrigatório)* — Lista todos os requisitos funcionais e não-funcionais do produto. Agente: John (PM)
- **UX Design** *(obrigatório se o projeto tiver interface)* — Define identidade visual, design system e fluxos de tela. Agente: Sally (UX Designer)

### Fase 3 — Solutioning *(obrigatório no BMAD Method)*

As decisões técnicas são tomadas aqui. O código só começa depois que essa fase estiver completa.

- **Arquitetura** *(obrigatório)* — Stack, banco de dados, estrutura de pastas, padrões de API. Agente: Winston (Architect)
- **Épicos e Stories** *(obrigatório)* — Quebra do trabalho em unidades implementáveis com critérios de aceitação. Agente: John (PM) + Bob (SM)
- **Implementation Readiness Check** *(altamente recomendado)* — Valida que todos os documentos de planejamento estão coerentes entre si antes de começar a codar. Agente: Winston (Architect)

### Fase 4 — Implementation *(obrigatório)*

O código é escrito story a story, seguindo o que foi planejado nas fases anteriores.

- **Sprint Planning** *(obrigatório)* — Inicializa o arquivo de rastreamento do sprint. Agente: Bob (SM)
- **Dev Story** *(obrigatório, por story)* — Implementa cada story com testes. Agente: Amelia (Dev)
- **Code Review** *(recomendado, por story)* — Valida a qualidade do código implementado. Agente: Amelia (Dev)
- **Retrospectiva** *(recomendado, por épico)* — Revisão ao final de cada épico. Agente: Bob (SM)

---

### Resumo visual

```
Fase 1 — Analysis      [OPCIONAL]
  └── Product Brief    ← recomendado
  └── Brainstorming    ← opcional
  └── Research         ← opcional

Fase 2 — Planning      [OBRIGATÓRIO]
  └── PRD              ← obrigatório
  └── UX Design        ← obrigatório se tiver interface

Fase 3 — Solutioning   [OBRIGATÓRIO no BMAD Method]
  └── Arquitetura      ← obrigatório
  └── Épicos + Stories ← obrigatório
  └── Readiness Check  ← altamente recomendado

Fase 4 — Implementation [OBRIGATÓRIO]
  └── Sprint Planning  ← obrigatório
  └── Dev Story        ← obrigatório (repetir por story)
  └── Code Review      ← recomendado
  └── Retrospectiva    ← recomendado (por épico)
```

> **No agenda-clean**, Para o nosso curso, **todas** as **4 fases** serão executadas na ordem. É esse percurso completo que vamos acompanhar nas etapas a seguir.

---

## Etapa 0 - Inicio + Bônus (bmad-help)

Agora que entemos quais etapas vamos passar e que representa cada uma delas, vamos começar a usar de fato o BMAD.

Antes de entrar nas etapas, é importante conhecer o `/bmad-help`. Ele é um assistente de orientação que você pode usar a qualquer momento, de dentro de qualquer agente, para perguntar o que fazer a seguir.

```bash
#Você pode usá-lo de forma genérica
/bmad-help

#ou combinado com o que está tentando resolver, por exemplo:
/bmad-help tenho um brief pronto, qual é o próximo passo?

/bmad-help não sei se minha ideia precisa de análise de mercado`. O agente ativo vai responder com uma orientação contextual baseada na fase em que você está, ajudando você a não se perder no processo.
```

Então, vamos colocar a mão na massa!