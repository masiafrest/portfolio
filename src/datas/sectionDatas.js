export const sectionDatas = [
  {
    type: "About me",
    title: "Sobre mi",
    description: "Programacion autodidacta",
  },
  {
    type: "Projects",
    title: "Projecto",
    description: "proyecto que he hecho",
    projects: {
      title: "Sistema de POS e inventario",
      description:
        "Contiene autenticacion para acceder al sistema, crea, edita, elimina producto, cliente, ubicacion, categoria, recibo de ventas y un buscador con autocompletado",
      img: "https://via.placeholder.com/200",
      link: "localmente",
      github: "https://github.com/masiafrest/posNodeReact",
    },
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
