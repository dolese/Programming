export const courses = [
  {
    id: "html-css",
    title: "HTML & CSS",
    icon: "🌐",
    color: "#FF6B35",
    accent: "#FF8C5A",
    level: "Beginner",
    duration: "4 weeks",
    projects: 6,
    students: "124k",
    description: "Master the building blocks of the web — structure, style, and layout.",
    roadmap: [
      { week: 1, title: "HTML Foundations", topics: ["Document structure", "Semantic tags", "Forms & inputs", "Accessibility basics"], done: true },
      { week: 2, title: "CSS Core", topics: ["Selectors & specificity", "Box model", "Colors & typography", "Flexbox"], done: true },
      { week: 3, title: "Layouts & Responsive", topics: ["CSS Grid", "Media queries", "Mobile-first design", "Viewport units"], done: false },
      { week: 4, title: "Polish & Deploy", topics: ["Animations & transitions", "CSS variables", "Normalize & reset", "GitHub Pages"], done: false },
    ],
    resources: [
      { type: "Docs", title: "MDN HTML Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "📖" },
      { type: "Docs", title: "CSS Tricks Complete Guide", url: "https://css-tricks.com/guides/", icon: "📖" },
      { type: "Tool", title: "CodePen Playground", url: "https://codepen.io", icon: "🛠" },
      { type: "Video", title: "Flexbox in 15 minutes", url: "https://www.youtube.com/watch?v=fYq5PXgSsbE", icon: "▶" },
    ],
    projects_list: [
      { name: "Personal Portfolio Page", difficulty: "Easy", tags: ["HTML", "CSS"] },
      { name: "Responsive Landing Page", difficulty: "Medium", tags: ["Grid", "Flexbox"] },
      { name: "CSS Art Component", difficulty: "Fun", tags: ["Animation", "CSS"] },
    ],
    snippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Page</title>
  <style>
    body {
      font-family: Georgia, serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    .hero {
      background: linear-gradient(135deg, #FF6B35, #FF8C5A);
      color: white;
      padding: 3rem;
      border-radius: 16px;
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>Hello, World!</h1>
    <p>My first HTML & CSS page.</p>
  </section>
</body>
</html>`,
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "⚡",
    color: "#F7DF1E",
    accent: "#E6C800",
    level: "Beginner → Advanced",
    duration: "8 weeks",
    projects: 10,
    students: "218k",
    description: "From variables to async/await — the complete JavaScript journey.",
    roadmap: [
      { week: 1, title: "JS Basics", topics: ["Variables & types", "Functions", "Arrays & objects", "Control flow"], done: true },
      { week: 2, title: "DOM & Events", topics: ["querySelector", "Event listeners", "DOM manipulation", "Forms"], done: true },
      { week: 3, title: "Modern JS (ES6+)", topics: ["Arrow functions", "Destructuring", "Spread/rest", "Modules"], done: false },
      { week: 4, title: "Async JavaScript", topics: ["Callbacks", "Promises", "Async/Await", "Fetch API"], done: false },
      { week: 5, title: "OOP & Patterns", topics: ["Classes", "Prototypes", "Closures", "Design patterns"], done: false },
      { week: 6, title: "Error Handling", topics: ["Try/catch", "Custom errors", "Debugging", "Dev tools"], done: false },
      { week: 7, title: "Browser APIs", topics: ["LocalStorage", "Web workers", "Canvas", "Geolocation"], done: false },
      { week: 8, title: "Testing & Tools", topics: ["Jest basics", "ESLint", "Webpack intro", "npm scripts"], done: false },
    ],
    resources: [
      { type: "Docs", title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "📖" },
      { type: "Book", title: "You Don't Know JS", url: "https://github.com/getify/You-Dont-Know-JS", icon: "📚" },
      { type: "Tool", title: "JS Visualizer", url: "https://www.jsv9000.app/", icon: "🛠" },
      { type: "Video", title: "Event Loop Explained", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ", icon: "▶" },
    ],
    projects_list: [
      { name: "To-Do App with localStorage", difficulty: "Easy", tags: ["DOM", "Storage"] },
      { name: "Weather App using Fetch API", difficulty: "Medium", tags: ["API", "Async"] },
      { name: "Quiz Game", difficulty: "Medium", tags: ["OOP", "DOM"] },
      { name: "Drag & Drop Kanban Board", difficulty: "Hard", tags: ["Events", "CSS"] },
    ],
    snippet: `// Async/Await + Fetch API
async function getWeather(city) {
  try {
    const res = await fetch(
      \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=YOUR_KEY\`
    );
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    return {
      city: data.name,
      temp: Math.round(data.main.temp - 273.15),
      desc: data.weather[0].description,
    };
  } catch (err) {
    console.error("Error:", err.message);
  }
}

getWeather("London").then(console.log);`,
  },
  {
    id: "react",
    title: "React",
    icon: "⚛",
    color: "#61DAFB",
    accent: "#21C3E8",
    level: "Intermediate",
    duration: "6 weeks",
    projects: 8,
    students: "189k",
    description: "Build dynamic, component-driven UIs with the world's most popular library.",
    roadmap: [
      { week: 1, title: "React Foundations", topics: ["JSX syntax", "Components", "Props", "Rendering"], done: true },
      { week: 2, title: "State & Events", topics: ["useState", "Event handlers", "Conditional render", "Lists & keys"], done: true },
      { week: 3, title: "Hooks Deep Dive", topics: ["useEffect", "useRef", "useCallback", "useMemo"], done: false },
      { week: 4, title: "State Management", topics: ["useContext", "useReducer", "Zustand", "Prop drilling"], done: false },
      { week: 5, title: "Data & APIs", topics: ["Fetch in useEffect", "React Query", "Loading states", "Error boundaries"], done: false },
      { week: 6, title: "Performance & Deploy", topics: ["Code splitting", "Lazy loading", "Vite setup", "Vercel deploy"], done: false },
    ],
    resources: [
      { type: "Docs", title: "React Official Docs", url: "https://react.dev", icon: "📖" },
      { type: "Video", title: "React in 100 Seconds", url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM", icon: "▶" },
      { type: "Tool", title: "React DevTools", url: "https://react.dev/learn/react-developer-tools", icon: "🛠" },
      { type: "Course", title: "Scrimba React Course", url: "https://scrimba.com/learn/learnreact", icon: "🎓" },
    ],
    projects_list: [
      { name: "GitHub Profile Viewer", difficulty: "Medium", tags: ["API", "Hooks"] },
      { name: "Movie Search App", difficulty: "Medium", tags: ["React Query", "API"] },
      { name: "E-commerce Cart", difficulty: "Hard", tags: ["Context", "Reducer"] },
      { name: "Real-time Chat UI", difficulty: "Hard", tags: ["WebSocket", "State"] },
    ],
    snippet: `// Custom Hook + React Query pattern
import { useQuery } from "@tanstack/react-query";

function useGitHubUser(username) {
  return useQuery({
    queryKey: ["github-user", username],
    queryFn: () =>
      fetch(\`https://api.github.com/users/\${username}\`)
        .then(r => r.json()),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
}

export function Profile({ username }) {
  const { data, isLoading, error } = useGitHubUser(username);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
    </div>
  );
}`,
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: "🟢",
    color: "#68A063",
    accent: "#4CAF50",
    level: "Intermediate",
    duration: "5 weeks",
    projects: 7,
    students: "97k",
    description: "Build fast, scalable server-side applications with JavaScript.",
    roadmap: [
      { week: 1, title: "Node Fundamentals", topics: ["Event loop", "Modules (CommonJS/ESM)", "File system", "Path & OS"], done: true },
      { week: 2, title: "Express.js", topics: ["Routing", "Middleware", "Request & Response", "Static files"], done: false },
      { week: 3, title: "Databases", topics: ["PostgreSQL + pg", "Prisma ORM", "CRUD operations", "Migrations"], done: false },
      { week: 4, title: "Auth & Security", topics: ["JWT tokens", "bcrypt", "Helmet.js", "CORS"], done: false },
      { week: 5, title: "Deploy & Scale", topics: ["Railway/Render", "Environment vars", "PM2", "Logging"], done: false },
    ],
    resources: [
      { type: "Docs", title: "Node.js Official Docs", url: "https://nodejs.org/en/docs", icon: "📖" },
      { type: "Docs", title: "Express.js Guide", url: "https://expressjs.com/en/guide/routing.html", icon: "📖" },
      { type: "Tool", title: "Postman API Testing", url: "https://www.postman.com", icon: "🛠" },
      { type: "Video", title: "Node.js Crash Course", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", icon: "▶" },
    ],
    projects_list: [
      { name: "REST API for a Blog", difficulty: "Medium", tags: ["Express", "CRUD"] },
      { name: "Auth System with JWT", difficulty: "Hard", tags: ["JWT", "bcrypt"] },
      { name: "Real-time Chat Server", difficulty: "Hard", tags: ["Socket.io", "Node"] },
    ],
    snippet: `// Express REST API with Prisma
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// GET all posts
app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });
  res.json(posts);
});

// POST create a post
app.post("/posts", async (req, res) => {
  const { title, content, authorId } = req.body;
  const post = await prisma.post.create({
    data: { title, content, authorId },
  });
  res.status(201).json(post);
});

app.listen(3000, () => console.log("Server on :3000"));`,
  },
  {
    id: "python",
    title: "Python",
    icon: "🐍",
    color: "#3776AB",
    accent: "#FFD43B",
    level: "Beginner → Advanced",
    duration: "7 weeks",
    projects: 9,
    students: "301k",
    description: "Versatile, readable, powerful — Python for web, data, and automation.",
    roadmap: [
      { week: 1, title: "Python Basics", topics: ["Variables & types", "Lists & dicts", "Functions", "Loops & conditions"], done: true },
      { week: 2, title: "OOP in Python", topics: ["Classes & objects", "Inheritance", "Dunder methods", "Dataclasses"], done: true },
      { week: 3, title: "File & Data", topics: ["File I/O", "JSON & CSV", "Regular expressions", "Pathlib"], done: false },
      { week: 4, title: "Django Basics", topics: ["MVC pattern", "Models & ORM", "Views & URLs", "Templates"], done: false },
      { week: 5, title: "Django Advanced", topics: ["Authentication", "REST Framework", "Forms", "Admin panel"], done: false },
      { week: 6, title: "Scripting & Automation", topics: ["Requests", "BeautifulSoup", "Selenium", "Schedule"], done: false },
      { week: 7, title: "Deploy & DevOps", topics: ["Docker basics", "Gunicorn", "Nginx", "PostgreSQL"], done: false },
    ],
    resources: [
      { type: "Docs", title: "Python Official Tutorial", url: "https://docs.python.org/3/tutorial/", icon: "📖" },
      { type: "Docs", title: "Django Documentation", url: "https://docs.djangoproject.com", icon: "📖" },
      { type: "Book", title: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com", icon: "📚" },
      { type: "Tool", title: "Replit Python", url: "https://replit.com", icon: "🛠" },
    ],
    projects_list: [
      { name: "Web Scraper", difficulty: "Easy", tags: ["requests", "BeautifulSoup"] },
      { name: "Django Blog Platform", difficulty: "Medium", tags: ["Django", "ORM"] },
      { name: "REST API with DRF", difficulty: "Hard", tags: ["DRF", "JWT"] },
      { name: "Automation Dashboard", difficulty: "Hard", tags: ["Selenium", "Schedule"] },
    ],
    snippet: `# Django REST Framework — Serializer + ViewSet
from rest_framework import serializers, viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(
        source="author.username", read_only=True
    )
    class Meta:
        model = Post
        fields = ["id", "title", "content",
                  "author_name", "created_at"]

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Post.objects.filter(
            author=self.request.user
        ).order_by("-created_at")

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)`,
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "▲",
    color: "#e2e8f0",
    accent: "#94a3b8",
    level: "Advanced",
    duration: "6 weeks",
    projects: 7,
    students: "76k",
    description: "Full-stack React framework with SSR, SSG, API routes, and App Router.",
    roadmap: [
      { week: 1, title: "Next.js Setup", topics: ["App Router", "File-based routing", "Layouts", "Metadata API"], done: true },
      { week: 2, title: "Data Fetching", topics: ["Server components", "fetch with cache", "generateStaticParams", "Streaming"], done: false },
      { week: 3, title: "Server Actions", topics: ["Form actions", "Mutations", "Optimistic UI", "Revalidation"], done: false },
      { week: 4, title: "Auth & DB", topics: ["NextAuth.js", "Prisma + PostgreSQL", "Middleware", "Protected routes"], done: false },
      { week: 5, title: "Styling & UI", topics: ["Tailwind CSS", "shadcn/ui", "Dark mode", "CSS modules"], done: false },
      { week: 6, title: "Deploy", topics: ["Vercel deploy", "Edge functions", "Image optimization", "Analytics"], done: false },
    ],
    resources: [
      { type: "Docs", title: "Next.js Official Docs", url: "https://nextjs.org/docs", icon: "📖" },
      { type: "Video", title: "Next.js App Router Course", url: "https://nextjs.org/learn", icon: "▶" },
      { type: "Tool", title: "Vercel Dashboard", url: "https://vercel.com/dashboard", icon: "🛠" },
      { type: "Course", title: "Next.js by Lee Robinson", url: "https://leerob.io", icon: "🎓" },
    ],
    projects_list: [
      { name: "SaaS Landing Page", difficulty: "Medium", tags: ["Static", "Tailwind"] },
      { name: "Full-Stack Blog", difficulty: "Hard", tags: ["Prisma", "NextAuth"] },
      { name: "E-commerce Store", difficulty: "Hard", tags: ["Stripe", "DB"] },
    ],
    snippet: `// Next.js 14 App Router — Server Component + Action
// app/posts/page.tsx
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function PostsPage() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  async function createPost(formData) {
    "use server";
    const title = formData.get("title");
    await db.post.create({ data: { title } });
    revalidatePath("/posts");
  }

  return (
    <main>
      <form action={createPost}>
        <input name="title" placeholder="Post title" />
        <button type="submit">Create</button>
      </form>
      {posts.map(p => (
        <article key={p.id}><h2>{p.title}</h2></article>
      ))}
    </main>
  );
}`,
  },
];

export const learningPaths = [
  {
    name: "Frontend Developer",
    emoji: "🎨",
    color: "#FF6B35",
    steps: ["HTML & CSS", "JavaScript", "React", "Next.js"],
    desc: "Build beautiful, interactive web interfaces",
    duration: "5-7 months",
  },
  {
    name: "Backend Developer",
    emoji: "⚙️",
    color: "#68A063",
    steps: ["JavaScript", "Node.js", "Python", "Databases"],
    desc: "Build APIs, servers, and robust systems",
    duration: "6-8 months",
  },
  {
    name: "Full-Stack Developer",
    emoji: "🚀",
    color: "#61DAFB",
    steps: ["HTML & CSS", "JavaScript", "React", "Node.js", "Next.js"],
    desc: "Master both frontend and backend development",
    duration: "9-12 months",
  },
  {
    name: "Python / Django Dev",
    emoji: "🐍",
    color: "#3776AB",
    steps: ["Python", "Django", "REST APIs", "PostgreSQL"],
    desc: "Build web apps and automate with Python",
    duration: "5-6 months",
  },
];

export const resources = [
  // ── Documentation & References ──
  { category: "Docs", title: "MDN Web Docs", desc: "The definitive reference for HTML, CSS & JavaScript.", url: "https://developer.mozilla.org", icon: "📖", free: true, tags: ["html", "css", "javascript", "web", "reference"] },
  { category: "Docs", title: "DevDocs", desc: "Fast, searchable, offline-ready docs for 100+ APIs.", url: "https://devdocs.io", icon: "📑", free: true, tags: ["javascript", "python", "react", "node", "reference", "api"] },
  { category: "Docs", title: "roadmap.sh", desc: "Community-built roadmaps for every developer role.", url: "https://roadmap.sh", icon: "🗺", free: true, tags: ["frontend", "backend", "career", "roadmap", "devops"] },

  // ── Practice & Challenges ──
  { category: "Practice", title: "freeCodeCamp", desc: "Full free curriculum with verified certifications.", url: "https://www.freecodecamp.org", icon: "🔥", free: true, tags: ["javascript", "react", "python", "html", "css", "certification", "beginner"] },
  { category: "Practice", title: "LeetCode", desc: "Sharpen algorithms & ace coding interviews.", url: "https://leetcode.com", icon: "🧩", free: true, tags: ["algorithms", "data structures", "interview", "python", "java"] },
  { category: "Practice", title: "Exercism", desc: "Mentored coding practice in 70+ languages.", url: "https://exercism.org", icon: "💪", free: true, tags: ["python", "javascript", "rust", "go", "mentorship"] },
  { category: "Practice", title: "Frontend Mentor", desc: "Build real-world UIs from professional designs.", url: "https://www.frontendmentor.io", icon: "🎯", free: true, tags: ["html", "css", "javascript", "react", "frontend", "ui"] },

  // ── Video & Courses ──
  { category: "Video", title: "Fireship", desc: "Fast-paced, high-signal videos on modern web dev.", url: "https://www.youtube.com/@Fireship", icon: "⚡", free: true, tags: ["javascript", "react", "nextjs", "firebase", "web"] },
  { category: "Video", title: "The Net Ninja", desc: "Clear, structured playlists for every framework.", url: "https://www.youtube.com/@NetNinja", icon: "🥷", free: true, tags: ["react", "node", "vue", "javascript", "css", "tutorial"] },
  { category: "Video", title: "freeCodeCamp YouTube", desc: "Full-length, free crash courses on everything.", url: "https://www.youtube.com/@freecodecamp", icon: "▶", free: true, tags: ["python", "javascript", "react", "node", "course"] },

  // ── Tools & Playgrounds ──
  { category: "Tools", title: "CodePen", desc: "Frontend playground for HTML, CSS & JS demos.", url: "https://codepen.io", icon: "🛠", free: true, tags: ["html", "css", "javascript", "frontend", "playground"] },
  { category: "Tools", title: "StackBlitz", desc: "Instant full-stack IDE that runs in your browser.", url: "https://stackblitz.com", icon: "⚙️", free: true, tags: ["react", "node", "nextjs", "javascript", "ide"] },
  { category: "Tools", title: "Regex101", desc: "Build, test & debug regular expressions live.", url: "https://regex101.com", icon: "🔣", free: true, tags: ["regex", "javascript", "python", "debugging"] },
  { category: "Tools", title: "Can I Use", desc: "Up-to-date browser support tables for web features.", url: "https://caniuse.com", icon: "📊", free: true, tags: ["css", "html", "browser", "compatibility", "web"] },

  // ── Books & Long-form ──
  { category: "Books", title: "Eloquent JavaScript", desc: "A modern, free book to truly learn JavaScript.", url: "https://eloquentjavascript.net", icon: "📚", free: true, tags: ["javascript", "book", "beginner", "fundamentals"] },
  { category: "Books", title: "The Odin Project", desc: "Free, project-based full-stack curriculum.", url: "https://www.theodinproject.com", icon: "🛡", free: true, tags: ["javascript", "ruby", "html", "css", "node", "full-stack"] },
  { category: "Books", title: "Refactoring Guru", desc: "Design patterns & refactoring, beautifully explained.", url: "https://refactoring.guru", icon: "🧠", free: true, tags: ["design patterns", "refactoring", "oop", "architecture"] },

  // ── Community ──
  { category: "Community", title: "Stack Overflow", desc: "Q&A for nearly every bug you'll ever hit.", url: "https://stackoverflow.com", icon: "💬", free: true, tags: ["qa", "debugging", "help", "community"] },
  { category: "Community", title: "DEV Community", desc: "Read & write developer blog posts and guides.", url: "https://dev.to", icon: "👥", free: true, tags: ["blog", "articles", "community", "javascript", "react"] },
  { category: "Community", title: "GitHub", desc: "Host code, collaborate & build in the open.", url: "https://github.com", icon: "🐙", free: true, tags: ["git", "open source", "collaboration", "version control"] },
]

export const resourceCategoryColor = {
  Docs: "#61DAFB",
  Practice: "#FF6B35",
  Video: "#F44336",
  Tools: "#68A063",
  Books: "#FFD43B",
  Community: "#9C27B0",
}

export const tips = [
  { icon: "🧱", title: "Build every day", text: "Even 30 minutes of coding beats 4-hour weekend binges. Consistency compounds." },
  { icon: "📖", title: "Read error messages", text: "Errors are teachers, not failures. Read them top to bottom. The answer is usually right there." },
  { icon: "🚀", title: "Ship something broken", text: "A deployed imperfect project teaches more than a perfect project that never ships." },
  { icon: "🔍", title: "Use the docs first", text: "MDN, official docs, and source code are your best friends. Google second." },
  { icon: "🛠", title: "Debug with intention", text: "Add console.log strategically. Use breakpoints. Reproduce the bug before you fix it." },
  { icon: "💬", title: "Teach what you learn", text: "Write a blog post, explain to a friend. If you can teach it, you understand it." },
];
