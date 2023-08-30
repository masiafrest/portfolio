export const sectionDatas = [
  {
    type: "About me",
    title: "Sobre mi",
    description:
      "Soy nuevo en esta industria de programación, mientras he tenido trabajo mayormente como vendedor y logística, pero siempre he tenido una inclinación a la informática, he aprendido varias tecnología de desarollo empezando por un curso online de la Universidad de Hardvard, <a href='https://cs50.harvard.edu/college/2021/fall/'>Ciencia Computacional CS50</a>, donde el estudiante aprende lenguaje C, JavaScript y Python pero lo mas importante son los concepto y metodologia en el desarollo para resolver un problema en especifico, de allí algunos cursos de curiosidad en Coursera.",
  },
  {
    type: "Projects",
    title: "Proyectos",
    description: "proyecto que he hecho",
    projects: [
      {
        title: "Creación de Nft",
        description: "aplicación para mintear NFT en blockchain de ethereum",
        caracteristicas: [
          "Creación y deploy de contrato inteligente en la red de ethereum",
          "acceder a metamask desde el navegador",
        ],
        img: "",
        link: "https://nft-starter-repo-final.masiafmasiaf.repl.co/",
        github: "https://github.com/masiafrest/NFT-web3-BuildSpace",
        stack: ["react", "solidity"],
      },
      {
        title: "Sistema de POS e inventario",
        description:
          "aplicación totalmente responsivo para hacer registro de venta e inventario",
        caracteristicas: [
          "implementación de búsqueda con autocompleted",
          "React Hooks como useState, useEffect, useLocation y alguno Hooks propio",
          "llamada a servidor con Grapqhl usando Apollo",
          "uso de ORM como Prisma",
          "base de dato y servidor persistente con docker",
          "Autenticación de usuario para hacer recibo, borrar y editar",
          "Creación y validación de formulario ",
          "Estado guardado y persistido usando Redux y local storage",
        ],
        img: "",
        link: "",
        github: "https://github.com/masiafrest/posNodeReact",
        stack: ["docker", "react", "graphql", "nodejs"],
      },
      {
        title: "FixDrop",
        description: "Segundo Proyecto de un sistema para hacer y ver registro",
        caracteristicas: [
          "Autenticación de usuario para hacer recibo, borrar y editar",
          "Creación y validación de formulario ",
          "Estado guardado y persistido usando Redux y local storage",
          "Múltiplo llamada API a Firebase para CRUD",
          "Implementación de scroll infinito",
        ],
        img: "",
        link: "https://repairworkshop-48385.web.app/",
        github: "https://github.com/masiafrest/repairworkshop",
        stack: ["react", "materialui", "firebase"],
      },
      {
        title: "BugTracker",
        description:
          "Primer pequeño proyecto responsivo de tablero kamban para dar seguimiento estilo trello",
        caracteristicas: [
          "React Hooks como useState, useEffect",
          "multiple llamada a API con axios para CRUD con Express y MongoDb ",
          "subir a un servidor con Heroku y gestionar desde terminal",
        ],
        img: "",
        link: "https://bugtracker-mern.herokuapp.com/",
        github: "https://github.com/masiafrest/bugtracker-mern",
        stack: ["react", "boostrap", "nodejs", "heroku", "mongodb"],
      },
    ],
  },
  {
    type: "Blogs",
    title: "Blogs",
    description: "Algunos Blog que he publicado",
    links: [
      {
        href: "https://dev.to/masiafrest/0-en-react-ui-1mio",
        label: "Operadores lógico vs ternario en react",
      },
      {
        href: "https://dev.to/masiafrest/inferir-tipado-de-objetos-2af5",
        label: "Inferir Tipado de Objetos",
      },
    ],
  },
  {
    type: "Contact us",
    title: "Contácteme",
    description: "hello world",
  },
];
// {
//       title: "1",
//       description: "proyecto que he hecho",
//       img: "https://via.placeholder.com/200",
//       link: "https://www.google.com",
//       github: "https://www.github.com",
//     },
export const mockSectionDatas = Array(5)
  .fill(null)
  .map((e, i) => ({
    title: `Sección ${i + 1}`,
    description: "hello world",
    github: "github",
    link: "link",
  }));
