import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Phone } from "lucide-react";
import { MobileMenu } from "@/components/ui/MobileMenu";

export default function DroitDeLaFamille() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <MobileMenu />
        <nav className="hidden md:flex container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">
            Droit de la famille
          </h1>
          <Button
            asChild
            variant="outline"
            className="hover:bg-primary hover:text-white transition-colors"
          >
            <Link href="/poles-de-competences">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux pôles de compétences
            </Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-20">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <Users className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Droit de la famille
            </h2>
            <p className="text-gray-700 mb-4">
              Notre cabinet est spécialisé dans tous les aspects du droit de la
              famille, offrant des conseils et une représentation dans des
              domaines tels que :
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Divorce et séparation</li>
              <li>Garde d&apos;enfants et droits de visite</li>
              <li>Pension alimentaire et prestation compensatoire</li>
              <li>Adoption</li>
              <li>Protection des mineurs</li>
              <li>Contrats de mariage et PACS</li>
            </ul>
            <p className="text-gray-700">
              Nous comprenons la nature sensible des affaires familiales et nous
              nous efforçons d&apos;offrir un soutien compatissant et des
              solutions pratiques à nos clients pendant ces périodes difficiles.
            </p>
          </CardContent>
        </Card>
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
