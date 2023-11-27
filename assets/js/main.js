import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".Fadepe",
  `Trabalhei como Jovem Aprendiz! Faço questão de usar como referência nas minhas experiências, porque, 
  além de ter sido meu primeiro emprego, foi onde tive grandes mestres, que me fizeram adquirir habilidades
  empresariais, analíticas, de comunicação precisa e trabalho em grupo.`,
  "Jovem Aprendiz",
  "Fadepe",
  "Nov 2016 - Mai 2017 (6 meses)"
);

hoverChangeExperience(
  ".Corretora_Seguros",
  `Nessa empresa foi onde assumi meu primeiro grande cargo de responsabilidade, lidando com cobranças,
  metas e assertividade. Nela participei ativamente do setor financeiro, secretariado, cotações e 
  negociações, ampliando grandemente minhas habilidades emocionais, profissionais e empresariais!`,
  "Gerente Financeira",
  "Corretora de Seguros",
  "Jun 2017 - Jun 2018 (1 ano)"
);

hoverChangeExperience(
  ".Santana_Odontologia",
  `Nessa clínica odontologica fui responsável pela gerência. Fui responsável pelo marketing digital e organico,
  vendas, e construi meu primeiro site com programação e também com WordPress!`,
  "Gerente geral",
  "Santana Odontologia",
  "Out 2022 - Jun 2023 (8 meses)"
);

hoverChangeExperience(
  ".Viver360",
  `Sou desenvolvedora FullStack do projeto atualmente, também sou responsável pelas redes sociais,
  tanto no marketing, como no design. `,
  "Freelancer Desenvolvedora/Design/Maketing",
  "Viver360",
  "Set 2023 - Nov 2023 (3 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
