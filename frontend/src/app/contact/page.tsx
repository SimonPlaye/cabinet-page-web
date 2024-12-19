import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowLeft } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Nous Contacter</h1>
          <Button asChild variant="outline" className="hover:bg-primary hover:text-white transition-colors">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l&apos;accueil
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-20">
        <section className="bg-gray-100 py-16 rounded-lg shadow-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">
              NOUS CONTACTER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Horaires d&apos;ouverture</h3>
                  <p className="mb-2">Nous recevons sur rendez-vous du lundi au vendredi.</p>
                  <p>Le Cabinet est ouvert de 8h30 à 12h et de 13h30 à 19h.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
                  <p className="mb-2">Cabinet d&apos;avocat QUINTARD-PLAYE - JUILLAN</p>
                  <p className="mb-2">1 rue du Général de Gaulle</p>
                  <p className="mb-2">22200 Guingamp</p>
                  <p>Téléphone: 02 96 43 84 52</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Cabinet d&apos;avocat QUINTARD-PLAYE - JUILLAN</p>
          <p className="mb-2">1 rue du Général de Gaulle, 22200 Guingamp</p>
          <p className="flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            02 96 43 84 52
          </p>
        </div>
      </footer>
    </div>
  )
}
