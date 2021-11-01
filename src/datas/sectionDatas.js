export const sectionDatas = [
  {
    title: "Sobre mi",
    description: "Programacion autodidacta",
  },
  {
    title: "Proyecto",
    description: "proyecto que he hecho",
  },
  {
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
