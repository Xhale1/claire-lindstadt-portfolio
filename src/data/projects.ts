import Project from "interfaces/Project";

export const projects: Project[] = [
  {
    title: "UX design for startup",
    date: "2021",
    image: "/assets/locals.png",
    width: 622,
    height: 350,
    description: "Currently doing UX work for a startup called Locals.",
    subtitleDescription: "Mobile app UX",
    links: [
      { name: "Screenshot 1", url: "/assets/locals1.png" },
      { name: "Screenshot 2", url: "/assets/locals2.png" },
      { name: "Screenshot 3", url: "/assets/locals3.png" },
    ],
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
  {
    title: "UX internship",
    date: "2018",
    image: "/assets/scu.png",
    width: 700,
    height: 350,
    description:
      "Researched and designed new UI/UX for Santa Clara University's official website.",
    subtitleDescription: "Design specialist",
    links: [{ name: "Screenshot of my work", url: "/assets/scu-writing.png" }],
    isWide: false,
    titleColor: "#0069c0",
  },
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
    title: "Graphic design",
    date: "2018",
    image: "/assets/ffacoalition.png",
    width: 700,
    height: 492,
    description:
      "Designed graphics for Factory Farming Awareness Coalition's outreach curriculum.",
    subtitleDescription: "Design specialist",
    links: [{ name: "Website", url: "https://www.ffacoalition.org/" }],
    isWide: false,
    isWebScreenshot: true,
    titleColor: "#0069c0",
  },
  {
    title: "Seaside sustainability",
    date: "2018",
    image: "/assets/seaside-sustainability.png",
    width: 700,
    height: 492,
    description: "Provided web design services.",
    subtitleDescription: "Web design",
    links: [{ name: "Website", url: "https://www.seasidesustainability.org/" }],
    isWide: false,
    isWebScreenshot: true,
    titleColor: "#0069c0",
  },
  {
    title: "Network Organizer",
    date: "2018",
    image: "/assets/lgbteaq.png",
    width: 700,
    height: 350,
    description: "Hosted several talks with an LGBTQ group.",
    subtitleDescription: "Design specialist",
    links: [{ name: "Substack", url: "https://teatime.substack.com/" }],
    isWide: false,
    titleColor: "#0069c0",
  },
];
