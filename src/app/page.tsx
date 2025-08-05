import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhay Jain - Entrepreneur, Investor & Writer | CEO of Lindy GEO",
  description: "Abhay Jain is a 19-year-old entrepreneur from New Delhi, running Lindy GEO - the first agency scaling brands by ensuring they rank first in LLM-Generated Answers.",
  keywords: "Abhay Jain, Lindy GEO, entrepreneur, investor, writer, AI, SEO, GEO, Delhi",
  authors: [{ name: "Abhay Jain" }],
  openGraph: {
    title: "Abhay Jain - Entrepreneur, Investor & Writer",
    description: "19-year-old entrepreneur running Lindy GEO, the first agency scaling brands by ensuring they rank first in LLM-Generated Answers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Jain - Entrepreneur, Investor & Writer",
    description: "19-year-old entrepreneur running Lindy GEO, the first agency scaling brands by ensuring they rank first in LLM-Generated Answers.",
    creator: "@abhayadityajain",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Abhay Jain
            </Link>
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/ledger" className="text-gray-600 hover:text-gray-900 transition-colors">
                Ledger
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Abhay Jain
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            19, New Delhi
          </p>
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Currently running{" "}
            <a 
              href="https://www.lindygeo.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Lindy GEO
            </a>
            , the first agency scaling brands by ensuring that they rank first in LLM-Generated Answers.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://x.com/abhayadityajain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  X (Twitter)
                </a>
                <a 
                  href="https://www.linkedin.com/in/abhayadityajain/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://onfel1000.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Substack
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Email</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:abhayadityajain@gmail.com"
                  className="block text-blue-600 hover:text-blue-800 underline"
                >
                  abhayadityajain@gmail.com
                </a>
                <a 
                  href="mailto:abhay@lindygeo.com"
                  className="block text-blue-600 hover:text-blue-800 underline"
                >
                  abhay@lindygeo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Wanna chat? Let&apos;s do it
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out via any of the channels above or drop me a line.
          </p>
          <a 
            href="mailto:abhay@lindygeo.com"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Person",
            "name": "Abhay Jain",
            "alternateName": "Abhay Aditya Jain",
            "familyName": "Jain",
            "email": "abhay@lindygeo.com",
            "birthDate": "2005-12-17",
            "brand": "Lindy GEO",
            "jobTitle": "CEO",
            "knowsAbout": "AI, SEO, Digital Media, GEO",
            "nationality": "Indian",
            "worksFor": "Lindy GEO",
            "sameAs": [
              "https://www.linkedin.com/in/abhayadityajain/",
              "https://x.com/abhayadityajain",
              "https://ratings.fide.com/profile/45082510",
              "https://www.instagram.com/abhay.aditya.jain/",
              "https://onfel1000.substack.com/"
            ]
          })
        }}
      />
    </div>
  );
}