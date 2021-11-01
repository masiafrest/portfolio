export const sectionDatas = [
  {
    type: "About me",
    title: "Sobre mi",
    description: "Programacion autodidacta",
  },
  {
    type: "Proyects",
    title: "Proyecto",
    description: "proyecto que he hecho",
  },
  {
    type: "Contact us",
    title: "Contactame",
    description: "hello world",
  },
];

export const mockSectionDatas = Array(5)
  .fill(null)
  .map((e, i) => ({
    title: `Seccion ${i + 1}`,
    description: "hello world",
    github: "github",
    link: "link",
  }));
