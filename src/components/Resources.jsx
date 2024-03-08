import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/seo.svg'
import figmaImage from '@/images/resources/ad.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Site web prenium',
    description:
      "Nous concevons des sites web avec pour objectif principal d'optimiser la conversion en transformant les visiteurs en prospects qualifiés.",
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Référencement SEO',
    description:
      "Nous optimisons les sites web pour les moteurs de recherche afin d'améliorer leur visibilité en ligne et d'attirer plus de trafic qualifié.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} className="h-full w-1/2" alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Campagnes publicitaires',
    description:
      'Nous concevons et exécutons des campagnes publicitaires, ciblant stratégiquement dans votre zone géographique des leads qualifiés.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-green-600">
          <Image src={figmaImage} className="h-full w-1/2" alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  const text = `Nous offrons des services de conception et d'intégration de sites web sur mesure pour les agences immobilières.
  Notre équipe d'experts travaille en étroite collaboration avec nos clients pour créer des sites web attrayants
  et fonctionnels qui répondent à leurs besoins spécifiques.`

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Solutions
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Conception et intégration de sites web personnalisés
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {text}
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
