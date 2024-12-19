import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Briefcase, Scale, Phone } from "lucide-react";
import { MobileMenu } from "@/components/ui/MobileMenu";

const competences = [
  {
    title: "Droit de la famille",
    icon: Users,
    href: "/poles-de-competences/droit-de-la-famille",
  },
  {
    title: "Droit des successions",
    icon: Briefcase,
    href: "/poles-de-competences/droit-des-successions",
  },
  {
    title: "Droit pénal",
    icon: Scale,
    href: "/poles-de-competences/droit-penal",
  },
];

export default function PolesDeCompetences() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <MobileMenu />
        <nav className="hidden md:flex container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">
            Nos pôles de compétences
          </h1>
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
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {competences.map((item, index) => (
            <Link href={item.href} key={index}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <item.icon className="w-16 h-16 text-primary mb-4" />
                  <h2 className="text-xl font-semibold text-center">
                    {item.title}
                  </h2>
                </CardContent>
              </Card>
            </Link>
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
