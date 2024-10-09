import Link from 'next/link';

const purpleButtonClass = "bg-light-purple hover:bg-purple-hover text-white font-bold py-2 px-4 rounded transition-colors";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-text-black font-bold text-xl">
          Ticket Manager
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-text-black hover:text-light-purple transition-colors">
            Home
          </Link>
          <Link href="/tickets" className="text-text-black hover:text-light-purple transition-colors">
            My Queue
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
