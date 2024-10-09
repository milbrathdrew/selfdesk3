import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Ticket Manager
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/tickets" className="text-white hover:text-gray-300">
            My Queue
          </Link>
          {/* Add more navigation items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
