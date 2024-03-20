import Image from 'next/future/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author.jpg'

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 72 72" width="36"><g fill="none"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g><script xmlns="" id="bw-fido2-page-script"/></svg>
  )
}

export function Author() {
  const text = `Fort de plus de 5 ans d'expérience en développement web,
  j'ai évolué au sein d'entreprises confrontées à des défis majeurs tels que le SEO et l'optimisation de la conversion,
  notamment sur des plateformes telles que le site e-commerce Back Market.
  Ma curiosité m'a poussé à me plonger activement dans les enjeux immobiliers pendant une année de crise,
  et mes échanges approfondis avec des agents immobiliers m'ont révélé un besoin criant non satisfait pendant cette période tumultueuse.
  C'est ainsi que j'ai fondé une agence spécialisée dans la création de sites web immobiliers sur mesure,
  mettant l'accent sur l'optimisation de la conversion. Mon expertise vise à offrir des solutions adaptées,
  reflétant l'identité de chaque agence et répondant aux exigences spécifiques du secteur immobilier.`
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="author-title">
              CEO
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Evan Sende</span></p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {text}
            </p>
            <p className="mt-8">
              <Link
                href="https://www.linkedin.com/in/evan-sende/"
                target="_blank"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
              >
                <LinkedinIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Suivez moi sur Linkedin</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
