import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Scale, Phone } from "lucide-react";
import { MobileMenu } from "@/components/ui/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left Section: Title in a Rectangular Box */}
          <div className="border-2 border-primary bg-white px-6 py-3 rounded-lg transition-all hover:shadow-md">
            <Link
              href="/"
              className="text-lg font-bold text-primary text-center block"
            >
              <span className="block">Cabinet d&apos;avocat</span>
              <span className="block">QUINTARD-PLAYE - JUILLAN</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              asChild
              className="hover:bg-primary hover:text-white transition-colors"
            >
              <Link href="/poles-de-competences">Nos pôles de compétences</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="hover:bg-primary hover:text-white transition-colors"
            >
              <Link href="/collaborateurs">Nos collaborateurs</Link>
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

      <main className="flex-grow pt-20">
        <section className="relative">
          <Image
            src="/assets/balance.jpg"
            alt="Balance de la justice"
            width={1920}
            height={1080}
            className="w-full h-[50vh] md:h-[75vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Card className="bg-white/90 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-4 md:p-6">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-primary">
                  <span className="block">Cabinet d&apos;avocat</span>
                  <span className="block">QUINTARD-PLAYE - JUILLAN</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700">
                  Expertise juridique à votre service
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            NOTRE CABINET
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
            Nous sommes un cabinet d&apos;avocat situé à Guingamp spécialisé en
            droit civil, droit processuel et droit de la famille, des personnes
            et de leur patrimoine.
          </p>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">
              NOS PÔLES DE COMPÉTENCES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
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
              ].map((item, index) => (
                <Link href={item.href} key={index}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <item.icon className="w-16 h-16 text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-center">
                        {item.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            NOS COLLABORATEURS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Laetitia Quintard",
                image: "/assets/lawyer_1.jpeg",
                description: "Spécialiste en droit de la famille.",
              },
              {
                name: "Marie-Charlotte Juillan",
                image: "/assets/lawyer_2.jpeg",
                description: "Experte en droit civil.",
              },
            ].map((collaborator, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={collaborator.image}
                    alt={collaborator.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {collaborator.name}
                    </h3>
                    <p className="text-gray-600">{collaborator.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            NOUS CONTACTER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Horaires d&apos;ouverture
                </h3>
                <p className="mb-2">
                  Nous recevons sur rendez-vous du lundi au vendredi.
                </p>
                <p>Le Cabinet est ouvert de 8h30 à 12h et de 13h30 à 19h.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
                <p className="mb-2">
                  Cabinet d&apos;avocat QUINTARD-PLAYE - JUILLAN
                </p>
                <p className="mb-2">1 rue du Général de Gaulle</p>
                <p className="mb-2">22200 Guingamp</p>
                <p>Téléphone: 02 96 43 84 52</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-dark py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm md:text-base">
            Cabinet d&apos;avocat QUINTARD-PLAYE - JUILLAN
          </p>
          <p className="mb-2 text-sm md:text-base">
            1 rue du Général de Gaulle, 22200 Guingamp
          </p>
          <p className="flex items-center justify-center text-sm md:text-base">
            <Phone className="w-4 h-4 mr-2" />
            02 96 43 84 52
          </p>
        </div>
      </footer>
    </div>
  );
}
