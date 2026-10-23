/* ============ EDIT YOUR CONTENT HERE ============ */

/* PROJECTS — each project is a gallery.
   dir: folder inside assets/img/projects/ containing cover.webp, 01.webp, 01-t.webp, 02.webp, 02-t.webp ...
   count: number of images in the gallery. size: "", "tall" or "lg" (grid tile size). */
const PROJECTS = [
 {
  "title": "Social Media Posts",
  "category": "Social Media",
  "size": "tall",
  "dir": "assets/img/projects/social-media",
  "count": 14,
  "description": "A set of 14 social media post designs."
 },
 {
  "title": "SuprVC Website UI",
  "category": "Web & App UI",
  "size": "lg",
  "dir": "assets/img/projects/suprvc-website",
  "count": 27,
  "description": "Website UI screens including home, login, blog and resources pages."
 },
 {
  "title": "OncoSakhi Website UI",
  "category": "Web & App UI",
  "size": "",
  "dir": "assets/img/projects/oncosakhi-website",
  "count": 14,
  "description": "Website UI design shown across 14 page views."
 },
 {
  "title": "Habit & Routine App UI",
  "category": "Web & App UI",
  "size": "tall",
  "dir": "assets/img/projects/habit-app",
  "count": 25,
  "description": "App UI screens covering onboarding, home, habits, courses, stats and rewards."
 },
 {
  "title": "Knowledge & Networking App UI",
  "category": "Web & App UI",
  "size": "",
  "dir": "assets/img/projects/networking-app",
  "count": 9,
  "description": "Nine app screens including home, AI co-pilot, events and networking."
 },
 {
  "title": "AI Generated Mood Cards",
  "category": "Web & App UI",
  "size": "",
  "dir": "assets/img/projects/mood-cards",
  "count": 10,
  "description": "Ten AI-generated character cards, one for each mood."
 },
 {
  "title": "AI Generated Focus Cards",
  "category": "Web & App UI",
  "size": "",
  "dir": "assets/img/projects/focus-cards",
  "count": 3,
  "description": "Three AI-generated focus card visuals."
 },
 {
  "title": "Meenaxi Research Inc.",
  "category": "Pitch Decks",
  "size": "",
  "dir": "assets/img/projects/meenaxi-research-inc",
  "count": 1,
  "description": "Pitch deck design."
 },
 {
  "title": "SuprVC Brand Guide",
  "category": "Pitch Decks",
  "size": "",
  "dir": "assets/img/projects/suprvc-brand-guide",
  "count": 1,
  "description": "Pitch deck design."
 },
 {
  "title": "Publiq Company Profile",
  "category": "Pitch Decks",
  "size": "",
  "dir": "assets/img/projects/publiq-company-profile",
  "count": 1,
  "description": "Pitch deck design."
 },
 {
  "title": "Admott Presentation Design",
  "category": "Pitch Decks",
  "size": "",
  "dir": "assets/img/projects/admott-presentation-design",
  "count": 1,
  "description": "Pitch deck design."
 },
 {
  "title": "Asli Ayurveda Pitch Deck",
  "category": "Pitch Decks",
  "size": "",
  "dir": "assets/img/projects/asli-ayurveda-pitch-deck",
  "count": 1,
  "description": "Pitch deck design."
 },
 {
  "title": "Pitch Deck Cover",
  "category": "Pitch Decks",
  "size": "",
  "dir": "assets/img/projects/pitch-deck-cover",
  "count": 1,
  "description": "Pitch deck design."
 },
 {
  "title": "SuprVC Logo",
  "category": "Logos",
  "size": "",
  "dir": "assets/img/projects/logo-suprvc-logo",
  "count": 1,
  "description": "Logo design."
 },
 {
  "title": "Success Routine Logo",
  "category": "Logos",
  "size": "",
  "dir": "assets/img/projects/logo-success-routine-logo",
  "count": 1,
  "description": "Logo design."
 },
 {
  "title": "PitchStories Logo",
  "category": "Logos",
  "size": "",
  "dir": "assets/img/projects/logo-pitchstories-logo",
  "count": 1,
  "description": "Logo design."
 }
];
const FILTERS = ["All", "Social Media", "Web & App UI", "Pitch Decks", "Logos"];

const SERVICES = [
  ["Graphic Design & Brand Identity", "Cohesive visuals that make a brand recognisable.", "M12 3l8 4.5v9L12 21l-8-4.5v-9z"],
  ["Pitch Deck Design", "Clear slides that tell the story behind the idea.", "M3 5h18v11H3zM8 21l4-5 4 5"],
  ["Social Media Creatives", "Campaign posts and graphics built for the feed.", "M4 4h16v16H4zM9 9h6v6H9z"],
  ["UI/UX Design", "App and product screens focused on usability.", "M7 3h10v18H7zM11 18h2"],
  ["Web & Landing Page Design", "Responsive page layouts with clean structure.", "M3 4h18v16H3zM3 9h18"],
  ["Logo & Visual Identity", "Marks and systems with a clear point of view.", "M12 4a8 8 0 100 16 8 8 0 000-16zM12 8v8M8 12h8"],
  ["Typography & Layout Design", "Hierarchy and spacing that guide the eye.", "M5 6h14M12 6v13M9 19h6"],
  ["Digital & Marketing Visuals", "Design-driven content for brand communication.", "M4 14l4-9 4 6 3-4 5 7z"]
];
const TOOLS = ["Figma", "Framer", "Canva", "WordPress"];
const SKILLS = ["Graphic Design & Brand Identity", "Social Media Creatives", "UI/UX Design", "Web & Landing Page Design", "Typography & Layout Design"];
const PROCESS = [
  ["Understand", "Research the brief, audience, goals, and requirements."],
  ["Concept", "Develop visual directions and design concepts."],
  ["Design", "Create polished visual solutions with attention to detail."],
  ["Refine", "Review, iterate, and improve the design."],
  ["Deliver", "Prepare and deliver final design assets."]
];
const CONTACT = { email: "sameermaravi241@gmail.com", whatsapp: "919302212818" };
