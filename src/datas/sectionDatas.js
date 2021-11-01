export const sectionDatas = [
  {
    title: "Seccion 1",
    description: "hello world",
    github: "github",
    link: "link",
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
