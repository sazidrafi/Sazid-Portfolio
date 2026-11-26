// SAMPLE DATA to demonstrate the layout. Replace with your real projects.
// `demo: true` shows a "Sample" badge. Remove it (and the sample images) for real projects.
// Images: public/projects/<slug>/<file>. Leave liveUrl or repoUrl as "" to hide that button.
const projects = [
  {
    slug: "recipe-finder-demo",
    demo: true,
    title: "Recipe Finder",
    summary: "Search recipes by the ingredients you already have, filter by diet, and save favorites.",
    status: "Completed",
    featured: true,
    role: "Solo developer",
    date: "Mar 2026",
    tags: ["Web", "API"],
    tech: ["Next.js", "Tailwind CSS", "REST API", "Vercel"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/sazidrafi",
    thumbnail: "/projects/recipe-finder-demo/home.svg",
    problem:
      "People often have a few ingredients at home and no idea what to cook. Most recipe sites make them scroll through long, unfiltered lists.",
    solution:
      "A search-first interface that matches ingredients to recipes, shows results instantly, and keeps filters visible so the list stays easy to narrow down.",
    screenshots: [
      { src: "/projects/recipe-finder-demo/home.svg", alt: "Home page", caption: "Home page with ingredient search" },
      { src: "/projects/recipe-finder-demo/search.svg", alt: "Search results", caption: "Search results with diet filters" },
      { src: "/projects/recipe-finder-demo/detail.svg", alt: "Recipe details", caption: "Recipe details and save button" },
    ],
    features: [
      { title: "Ingredient search", text: "Type what you have and get matching recipes as you type." },
      { title: "Diet filters", text: "Vegetarian, low-carb and more, combined with search." },
      { title: "Favorites", text: "Save recipes and find them again on the same device." },
      { title: "Responsive layout", text: "Works the same on phones, tablets and desktops." },
    ],
    challenges: [
      {
        challenge: "The API rate limit was reached during fast typing.",
        solution: "Added a short debounce on the search box and cached recent results in memory, which cut requests sharply.",
      },
      {
        challenge: "Images made the results page jump while loading.",
        solution: "Reserved the image space with fixed aspect ratios and lazy loaded images below the fold.",
      },
    ],
    learnings: [
      "Planning data flow before building the UI saved a lot of rework.",
      "Small details like debounce and fixed image sizes change how the app feels.",
      "Writing the README early made the project easier to explain.",
    ],
  },
  {
    slug: "leaf-classifier-demo",
    demo: true,
    title: "Leaf Classifier",
    summary: "Upload a leaf photo and get a predicted plant disease from a trained image model.",
    status: "In progress",
    featured: true,
    role: "Model training and web interface",
    date: "Ongoing",
    tags: ["AI/ML", "Web"],
    tech: ["PyTorch", "timm", "Python", "Next.js"],
    liveUrl: "",
    repoUrl: "https://github.com/sazidrafi",
    thumbnail: "/projects/leaf-classifier-demo/upload.svg",
    problem: "Farmers and students need a quick first check for plant leaf problems without waiting for an expert.",
    solution: "A web page where a photo is uploaded and the model returns the most likely class with a confidence score.",
    screenshots: [
      { src: "/projects/leaf-classifier-demo/upload.svg", alt: "Upload page", caption: "Upload page" },
      { src: "/projects/leaf-classifier-demo/result.svg", alt: "Prediction result", caption: "Prediction with confidence" },
    ],
    features: [
      { title: "Image upload", text: "Drag and drop or choose a photo." },
      { title: "Confidence score", text: "Shows how sure the model is, not only the label." },
    ],
    challenges: [
      {
        challenge: "The model overfit on a small dataset.",
        solution: "Used augmentation and a pretrained backbone, then compared validation scores before choosing a model.",
      },
    ],
    learnings: ["Validation results matter more than training accuracy."],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const getTags = () => ["All", ...new Set(projects.flatMap((p) => p.tags))];
export default projects;
