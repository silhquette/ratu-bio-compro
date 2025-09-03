import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Products } from '@/components/products'
import { Heading, Lead, Subheading } from '@/components/text'
import { AnimatedNumber } from '@/components/animated-number'
import type { Metadata } from 'next'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import SplashScreen from '@/components/splash-logo'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Innovation in <br /> Hygiene
          </h1>
          <p className="mt-8 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            We empower your brand with effective hand sanitizers and disinfectants tailored to your needs.
          </p>
        </div>
      </Container>
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Empowering Hygiene Brands to Thrive.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Our mission is to revolutionize the hygiene industry by providing innovative, high-quality hand sanitizers and disinfectants that elevate your brand.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Behind the Brand</h2>
          <p className="mt-6 text-md/6 text-gray-600">
            PT Ratu Bio Indonesia was established in January 2015 in Bandung, Indonesia, with a commitment to high-quality hygiene product manufacturing solutions tailored to our clients needs. Starting with a passionate team, we have successfully launched numerous hand sanitizers and disinfectants, growing into a reputable partner in the hygiene industry. Our advanced facility ensures quality and compliance while we work closely with clients to bring their visions to life. With a focus on sustainability and ethical practices, we aim to lead the industry in creating effective and responsible hygiene products.
          </p>
        </div>
        <div className="lg:pt-0 pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Results That Matter</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Products Launched</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={100} end={150} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Units Produced Annually</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={9000} end={10000} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Clients Served</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={50} decimals={1} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Global Sales</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={1} end={5} />M
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Commitments() {
  return (
    <div className="overflow-hidden pt-32 pb-16">
      <Container>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='grid grid-cols-5 gap-4'>
            <div className="col-span-3 h-64 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="col-span-2 h-64 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="col-span-2 h-64 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="col-span-3 h-64 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
          <div>
            <Subheading>Our Commitment to Social Responsibility</Subheading>
            <Heading as="h3" className="mt-2">
              Making a Difference in Our Community.
            </Heading>
            <p className="mt-6 text-md/6 text-gray-600">
              At PT Ratu Bio Indonesia, we believe in giving back to the community. Our commitment to social responsibility drives us to engage in various initiatives aimed at supporting local health and environmental sustainability. From distributing hand sanitizers to those in need to participating in clean-up drives and educational programs, we strive to make a positive impact wherever we operate.
            </p>
            <p className=" text-md/6 text-gray-600 mt-8">
              Explore some of our recent CSR activities below, showcasing our dedication to creating healthier and safer environments for all. To learn more about our ongoing initiatives and commitments, visit our <Link href="/commitments" className="text-amber-500">Commitments</Link> page.
            </p>
            <div className="mt-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm/6 font-medium text-amber-500"
              >
                Learn More
                <ArrowLongRightIcon className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <SplashScreen /> */}
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className='pt-12'>
          <Header />
        </div>
      </main>
      <Products />
      <Commitments />
      <Footer />
    </div>
  )
}
