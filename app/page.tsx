import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="https://owenlinkworld.com/wp-content/uploads/2024/11/OwenLinkWorld.jpg-e1731699492992.webp"
                alt="Owenlinkworld Limited"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-green-500 font-medium border-b-2 border-green-500 pb-1">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-500">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-500">
                Services
              </Link>
              <Link href="/contacts" className="text-gray-700 hover:text-green-500">
                Contacts
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="bg-cyan-500 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">(+234) 903 760 3054</span>
              </div>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6">Let's Talk</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://owenlinkworld.com/wp-content/uploads/2024/11/seaport1-1.png"
            alt="Offshore oil platform"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Navigation arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 hover:bg-black/70 transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 hover:bg-black/70 transition-colors">
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-lg mb-4 opacity-90">Timely and effective delivery</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Environmental and
              <br />
              <span className="text-gray-300">Sustainability</span> Company
            </h1>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">Our Services</Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 border-2 border-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Value Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on delivering efficient, safe, and innovative solutions that enhance operational performance
                while minimizing environmental impact.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 border-2 border-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Result Oriented</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize efficiency, safety, and innovation to achieve measurable outcomes in exploration,
                production, and delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 border-2 border-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Clients Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide 24/7 assistance and solutions to ensure that our clients' needs are met throughout the
                lifecycle of a project or service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://owenlinkworld.com/wp-content/uploads/2024/11/pipe-1.png"
                alt="Oil and gas pipes"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gray-900/80 rounded-lg flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    We provide innovative solutions in the oil and gas industry
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">OIL AND GAS SERVICES</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                We deliver products efficiently while meeting global energy demands.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experts is committed to delivering quality services that exceed your expectations.
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12">
            <Image
              src="https://owenlinkworld.com/wp-content/uploads/2024/11/seepcologo.png"
              alt="SEEPCO"
              width={120}
              height={60}
              // className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://owenlinkworld.com/wp-content/uploads/2024/11/chevron-logo.png"
              alt="Chevron"
              width={120}
              height={60}
              // className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://owenlinkworld.com/wp-content/uploads/2024/11/NLNG-logo1.png"
              alt="LNG"
              width={120}
              height={60}
              // className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://owenlinkworld.com/wp-content/uploads/2024/11/Shell-logo.png"
              alt="Shell"
              width={120}
              height={60}
              // className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Image
                src="https://owenlinkworld.com/wp-content/uploads/2024/11/OwenLinkWorld.jpg-e1731699492992.webp"
                alt="Owenlinkworld Limited"
                width={200}
                height={60}
                className="mb-6"
              />
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
                <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Office</h3>
              <div className="space-y-4 text-gray-300">
                <p>Cottage 19, Nnewi Building, Apapa, Lagos State.</p>
                <p>info@owenlinkworld.com</p>
                <p>(+234) 903 760 3054</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Links</h3>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/contacts" className="block text-gray-300 hover:text-white transition-colors">
                  Contacts
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>Copyright © 2024 Owenlinkworld LIMITED – All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
