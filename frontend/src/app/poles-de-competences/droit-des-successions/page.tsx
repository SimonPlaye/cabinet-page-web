import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Briefcase, Phone } from "lucide-react";
import { MobileMenu } from "@/components/ui/MobileMenu";

export default function DroitDesSuccessions() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <MobileMenu />
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">
            Droit des successions
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
            <Briefcase className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Droit des successions
            </h2>
            <p className="text-gray-700 mb-4">
              Notre cabinet offre une expertise approfondie en droit des
              successions, couvrant tous les aspects de la planification
              successorale et du règlement des successions, notamment :
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Rédaction et contestation de testaments</li>
              <li>Planification successorale</li>
              <li>Administration de successions</li>
              <li>Règlement des litiges successoraux</li>
              <li>Donations et legs</li>
              <li>Fiscalité successorale</li>
            </ul>
            <p className="text-gray-700">
              Nous nous engageons à guider nos clients à travers les complexités
              du droit des successions, en veillant à ce que leurs volontés
              soient respectées et que leurs héritiers soient protégés.
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
