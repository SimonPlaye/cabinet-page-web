import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowLeft } from "lucide-react";
import { MobileMenu } from "@/components/ui/MobileMenu";

const collaborateurs = [
  {
    name: "Me. Laetitia QUINTARD-PLAYE",
    description: "Spécialiste en droit de la famille.",
    image: "/assets/lawyer_1.jpeg",
  },
  {
    name: "Me. Marie-Charlotte JUILLAN",
    description: "Experte en droit civil.",
    image: "/assets/lawyer_2.jpeg",
  },
];

export default function Collaborateurs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">
            Nos Collaborateurs
          </h1>
          <MobileMenu />
          <nav className="hidden md:flex space-x-4">
            <Button
              asChild
              variant="outline"
              className="hover:bg-primary hover:text-white transition-colors"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l&apos;accueil
              </Link>
            </Button>
            <Button
              className="bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {collaborateurs.map((collaborateur, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  {collaborateur.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  src={collaborateur.image}
                  alt={collaborateur.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-700">{collaborateur.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-primary text-dark py-8">
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
  );
}
