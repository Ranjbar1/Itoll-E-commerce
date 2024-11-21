import Image from "next/image";

export default function Navbar() {
  const navItems = [
    { name: "Home", icon: "🏠", href: "/" },
    { name: "Notifications", icon: "🔔", href: "/notifications" },
    { name: "Profile", icon: "👨‍💼", href: "/profile" },
  ];

  return (
    <header className="bg-blue-600 text-white">
      <nav className="hidden lg:block container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            Logo
          </a>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-blue-200 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
            <Image
              src="/maskable_icon_x192.png"
              alt="User avatar"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      <nav className="lg:hidden fixed z-10  bottom-0 left-0 right-0 bg-blue-600 shadow-lg">
        <ul className="flex justify-around py-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex flex-col items-center text-center hover:text-blue-200 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
