import Project from "interfaces/Project";

export const projects: Project[] = [
  {
    title: "HelloPeople",
    date: "2018-2020",
    image: "/assets/HelloPeople.png",
    width: 622,
    height: 350,
    description:
      "Consulted on the user interface and user experience of HelloPeople, a social media startup. I was responsible for developing a friendly brand and interface that translated well into web and mobile.",
    subtitleDescription: "Design consultant",
    links: [{ name: "Company site", url: "https://hellopeople.io" }],
    isWide: true,
    titleColor: "#0069c0",
  },
  {
    title: "Web design",
    date: "2018-2020",
    image: "/assets/HelloStudios.png",
    width: 700,
    height: 350,
    description:
      "Worked for HelloStudios LLC to create modern website designs for small businesses and high-profile clients. My work reached over two million unique users over one year.",
    subtitleDescription: "Design specialist",
    links: [{ name: "One of my sites", url: "https://lensfirefilms.com/" }],
    isWide: false,
    titleColor: "#0069c0",
  },
];
