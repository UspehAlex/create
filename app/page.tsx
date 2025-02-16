import Link from "next/link"

export default function Home() {
  const pages = [
    { name: "Image Creation", href: "/image-creation" },
    { name: "Video Creation", href: "/video-creation" },
    { name: "Text Writing", href: "/text-writing" },
    { name: "Website Creation", href: "/website-creation" },
    { name: "Fonts and Tools", href: "/fonts-and-tools" },
    { name: "Analysis", href: "/analysis" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Modern Website Creator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{page.name}</h2>
            <p className="text-gray-600">Manage and create content for {page.name.toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

