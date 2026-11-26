// All personal content lives here. Replace every [PLACEHOLDER] before launch.
const profile = {
  name: "Md. Sazidul Islam",
  shortName: "Sazid",
  title: "Frontend Developer | Enthusiastic in Tech & Gaming",
  tagline: "Frontend developer and CSE graduate, open to junior roles.",
  intro:
    "I am looking for an opportunity to start my professional career in web development, with a focus on frontend work. I want to apply what I have learned, sharpen my problem-solving skills, and learn from real-world projects. I enjoy exploring new technologies and work comfortably both independently and in a team.",
  availability: "Open to junior roles", // leave empty to hide
  location: "Rajshahi, Bangladesh",
  email: "sazidrafi1234@gmail.com",
  github: "https://github.com/sazidrafi",
  linkedin: "https://www.linkedin.com/in/md-sazidul-islam39/",
  resumePath: "/resume.pdf", // put your PDF at public/resume.pdf
  languages: "", // e.g. "Bangla, English" (leave empty to hide)
};

// About content. Drafted only from details you shared; edit freely.
export const about = {
  summary:
    "I graduated in Computer Science and Engineering from Varendra University in July 2026 and I am focusing on frontend web development. I enjoy exploring new technologies and work comfortably both on my own and in a team. My thesis focused on deep learning for detecting liver tumors in CT images, so I also have hands-on experience with PyTorch and model training. Outside of code, I am into tech and gaming. I am looking for a junior role where I can apply what I have learned, sharpen my problem-solving, and learn from real projects.",
  story: [
    "I graduated in Computer Science and Engineering from Varendra University in July 2026. I want to start my career in web development, with a focus on frontend work.",
    "Alongside web development, my thesis focused on deep learning for detecting liver tumors in CT images. I trained models in PyTorch with the timm library on Kaggle notebooks, which keeps me close to machine learning as well.",
    "I enjoy exploring new technologies, and I am comfortable working independently or in a team. Outside of work, I am into tech and gaming.",
  ],
  education: {
  university: "Varendra University",
  degree: "Computer Science & Engineering",
  graduated: "July 2026",
  relevantCourses: [],
  certificates: [
    {
      title: "GALACTIC PROBLEM SOLVER",
      organizer: "NASA INTERNATIONAL SPACE APPS CHALLENGE",
      description:
        "The 2024 NASA International Space Apps Challenge proudly presents this certificate to Md. Sazidul Islam for outstanding participation and efforts to address challenges we face on Earth and in space",
    },
    {
      title: "Certificate of Accomplishment SQL (Basic)",
      organizer: "HackerRank",
      description:
        "PRESENTED TO Md. Sazidul Islam The bearer of this certificate has passed the HackerRank skill certification test.",
    },
  ],
  notes: "", // optional: academic highlight (leave empty to hide)
  earlierEducation: [
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Shah Makhdum College, Rajshahi",
      group: "Science",
      year: "2020",
      gpa: "5.00 / 5.00",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Masjid Mission Academy School and College",
      group: "Science",
      year: "2018",
      gpa: "5.00 / 5.00",
    },
  ],
},
  interests: ["Frontend development", "New web technologies", "Database Engineering", "Gaming"],
  currentlyLearning: "TypeScript, PostgreSQL",
  careerGoals:
    "I want to start my professional career in web development, with a focus on frontend work. My goal is to join a team where I can apply what I have learned, sharpen my problem-solving skills, and learn from real-world projects.",
};

// Contact copy
export const contact = {
  intro:
    "I am open to junior frontend roles and happy to talk about opportunities, projects, or collaboration. Send a message and I will get back to you.",
  ctaTitle: "Get in touch",
  ctaText: "Looking for a junior frontend developer, or have a project in mind? I would be glad to hear from you.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default profile;
