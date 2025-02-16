import Link from "next/link"

const Navbar = () => {
  const pages = [
    { name: "Image Creation", href: "/image-creation" },
    { name: "Video Creation", href: "/video-creation" },
    { name: "Text Writing", href: "/text-writing" },
    { name: "Website Creation", href: "/website-creation" },
    { name: "Fonts and Tools", href: "/fonts-and-tools" },
    { name: "Analysis", href: "/analysis" },
  ]

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Modern Website
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

