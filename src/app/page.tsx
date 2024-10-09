import Image from 'next/image';

const purpleButtonClass = "bg-light-purple hover:bg-purple-hover text-white font-bold py-2 px-4 rounded transition-colors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-8 custom-spin">
        <Image
          src="/outline.png" // Make sure this path is correct
          alt="Insert Russian Doll Here"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-4xl font-bold mb-8">Welcome to Selfdesk 3</h1>
      <p className="text-xl mb-8">Manage your goals efficiently</p>
    </main>
  )
}
