import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const collaborateurs = [
  { name: "Me. Laetitia QUINTARD-PLAYE", description: "Spécialiste en droit de la famille." },
  { name: "Me. Marie-Charlotte JUILLAN", description: "Experte en droit civil." },
]

export default function Collaborateurs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nos Collaborateurs</h1>
          <Button asChild variant="outline">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborateurs.map((collaborateur, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{collaborateur.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{collaborateur.description}</p>
              </CardContent>
            </Card>
          ))}
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

