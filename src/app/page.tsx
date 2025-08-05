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
    <div className="min-h-screen bg-black text-white p-8" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* Navigation */}
      <nav className="mb-16">
        <div className="flex space-x-8 text-lg">
          <Link href="/" className="text-white hover:text-gray-300 underline">
            home
          </Link>
          <Link href="/ledger" className="text-white hover:text-gray-300 underline">
            ledger
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 underline">
            about me
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl space-y-8">
        {/* Title */}
        <h1 className="text-4xl font-bold underline mb-8">
          Abhay Jain
        </h1>

        {/* Basic Info */}
        <p className="text-xl">
          19, new delhi
        </p>

        {/* Current Work */}
        <p className="text-lg leading-relaxed">
          currently running{" "}
          <a 
            href="https://www.lindygeo.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white underline hover:text-gray-300"
          >
            Lindy GEO
          </a>
          , the first agency scaling brands by<br/>
          ensuring that they rank first in LLM-Generated Answers.
        </p>

        {/* Social Links */}
        <div className="space-y-2">
          <p className="inline">
            <span className="bg-purple-500 text-black px-2 py-1 rounded mr-2">
              connect with me on socials:
            </span>
            <a 
              href="https://x.com/abhayadityajain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline hover:text-gray-300 mr-2"
            >
              x
            </a>
            ,{" "}
            <a 
              href="https://www.linkedin.com/in/abhayadityajain/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline hover:text-gray-300 mr-2"
            >
              linkedin
            </a>
            ,{" "}
            <a 
              href="https://onfel1000.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline hover:text-gray-300"
            >
              substack
            </a>
          </p>
        </div>

        {/* Email */}
        <p className="text-lg">
          email:{" "}
          <a 
            href="mailto:abhayadityajain@gmail.com"
            className="text-white underline hover:text-gray-300"
          >
            abhayadityajain@gmail.com
          </a>
          {" | "}
          <a 
            href="mailto:abhay@lindygeo.com"
            className="text-white underline hover:text-gray-300"
          >
            abhay@lindygeo.com
          </a>
        </p>

        {/* CTA */}
        <p className="text-lg">
          wanna chat?{" "}
          <a 
            href="mailto:abhay@lindygeo.com"
            className="text-white underline hover:text-gray-300"
          >
            lets do it
          </a>
        </p>

        {/* Sitemap */}
        <p className="text-lg pt-8">
          <Link href="/sitemap.xml" className="text-white underline hover:text-gray-300">
            sitemap
          </Link>
        </p>
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
            "jobTitle": "CEO",
            "knowsAbout": ["AI", "SEO", "Digital Media", "GEO"],
            "sameAs": [
              "https://www.linkedin.com/in/abhayadityajain/",
              "https://x.com/abhayadityajain",
              "https://ratings.fide.com/profile/45082510",
              "https://www.instagram.com/abhay.aditya.jain/",
              "https://onfel1000.substack.com/"
            ],
            "description": "Writer, investor, and entrepreneur who pivoted from fundamental equity research to build a digital media business for the AI-native web. Founder of Lindy GEO.",
            "award": [
              "LinkedIn Featured",
              "Apple News Featured", 
              "Product Hunt Featured",
              "Amazon Kindle Best-seller"
            ],
            "brand": {
              "@type": "Brand",
              "name": "Lindy GEO"
            },
            "nationality": {
              "@type": "Country",
              "name": "Indian"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Lindy GEO",
              "url": "https://www.lindygeo.com/"
            },
            "alumniOf": {
              "@type": "Organization",
              "name": "The Doon School"
            }
          })
        }}
      />
    </div>
  );
}