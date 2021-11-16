export const sectionDatas = [
  {
    type: "About me",
    title: "Sobre mi",
    description:
      "Soy nuevo en esta industria de programacion, mientras he tenido trabajo mayormente como vendedor y logistica, pero siempre he tenido una inclinacion a la informatica, he aprendido varias tecnologia de desarollo empezando por un curso online de la Universidad de Hardvard, <a href='https://cs50.harvard.edu/college/2021/fall/'>Ciencia Computacional CS50</a>, donde el estudiante aprende lenguaje C, JavaScript y Python pero lo mas importante son los concepto y metodologia en el desarollo para resolver un problema en especifico, de alli algunos cursos de curiosidad en Coursera.",
    links: {
      cs50: "",
    },
  },
  {
    type: "Projects",
    title: "Projecto",
    description: "proyecto que he hecho",
    projects: [
      {
        title: "Creacion de Nft",
        description: "aplicacion para mintear NFT en blockchain de ethereum",
        caracteristicas: [
          "Creacion y deploy de contrato inteligente en la red de ethereum",
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
          "aplicacion totalmente responsivo para hacer registro de venta e inventario",
        caracteristicas: [
          "implementacion de busqueda con autocompletado",
          "React Hooks como useState, useEffect, useLocation y alguno Hooks propio",
          "llamada a servidor con Grapqhl usando Apollo",
          "uso de ORM como Prisma",
          "base de dato y servidor persitente con docker",
          "Autenticacion de usuario para hacer recibo, borrar y editar",
          "Creacion y validacion de formulario ",
          "Estado guardado y persitido usando Redux y local storage",
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
          "Autenticacion de usuario para hacer recibo, borrar y editar",
          "Creacion y validacion de formulario ",
          "Estado guardado y persitido usando Redux y local storage",
          "Multiplo llamada API a Firebase para CRUD",
          "Implemetancion de scroll infinito",
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
    type: "Contact us",
    title: "Contactame",
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
    title: `Seccion ${i + 1}`,
    description: "hello world",
    github: "github",
    link: "link",
  }));
