import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="space-x-4">
          <Button variant="outline" asChild>
              <Link href="/collaborateurs">Nos collaborateurs</Link>
            </Button>
            <Button variant="outline">Nos champs d&apos;expertise</Button>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact</Button>
        </div>
      </header>

      <main className="flex-grow">
        <div className="relative">
          <Image
            src="/assets/balance.jpg"
            alt="Balance de la justice"
            width={1920}
            height={1080}
            className="w-full h-[75vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Cabinet d&apos;avocat QUINTARD-PLAYE - JUILLAN</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-xl text-center">
            Nous sommes un cabinet d&apos;avocat situé à Guingamp spécialisé en droit civil, droit processuel et droit de la famille, des personnes et de leur patrimoine.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">1 rue du Général de Gaulle</p>
        <p className="mb-2">22200 Guingamp</p>
          <p>Téléphone: 02 96 43 84 52 | Email: ????</p>
        </div>
      </footer>
    </div>
  )
}

