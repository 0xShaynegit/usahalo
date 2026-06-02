import LogoIcon from './LogoIcon';

const navLinks = ['Network', 'Ecosystem', 'Rewards', 'Help', 'News'];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="flex items-center justify-between max-w-[88rem] mx-auto">
        <div className="flex items-center gap-2.5">
          <LogoIcon className="w-7 h-7 text-black" />
          <span className="text-2xl font-medium tracking-tight text-black">Halo</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
          Open Wallet
        </button>
      </div>
    </nav>
  );
}
