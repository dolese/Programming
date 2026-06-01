import './globals.css'

export const metadata = {
  title: 'CodePath — Learn Programming with Clear Roadmaps',
  description: 'Step-by-step programming courses with visual roadmaps, real-world projects, and curated resources. Go from zero to hired.',
  keywords: 'programming courses, coding roadmap, learn javascript, react course, python tutorial',
  openGraph: {
    title: 'CodePath — Learn Programming with Clear Roadmaps',
    description: 'Step-by-step paths, curated resources, and real-world projects to get you job-ready.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
