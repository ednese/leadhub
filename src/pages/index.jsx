import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/feedback.jpg'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Leadhub - Boostez votre agence immobilière
        </title>
        <meta
          name="description"
          content="Obtenez de 5 à 10 prospects en moins de 48 heures dans votre zone géographique grace à des estimations personnalisées en ligne."
        />
      </Head>
      <Hero />
      <Resources />
      {/* <Introduction />
      <NavBar />
      <TableOfContents /> */}
      <Author />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Alexandre Gerez',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “La stratégie de conversion mise en place par cette agence a boosté notre activité. Des leads qualifiés en abondance, un impact immédiat sur notre croissance. Une expertise inestimable!”
        </p>
      </Testimonial>
      {/* <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial> */}
      <FreeChapters />
      <Pricing />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}
