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
    <div className="min-h-screen bg-black text-purple-500 p-8 font-mono">
      {/* Navigation */}
      <nav className="mb-16">
        <div className="flex space-x-8 text-lg">
          <Link href="/" className="underline">
            home
          </Link>
          <Link href="/ledger" className="underline">
            ledger
          </Link>
          <Link href="/about" className="underline">
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
            className="underline"
          >
            Lindy GEO
          </a>
          , the first agency scaling brands by ensuring that they rank first in LLM-Generated Answers.
        </p>

        {/* Social Links */}
        <div className="space-y-2">
          <p className="inline">
            <span className="bg-purple-500 text-black px-2 py-1 mr-2">
              connect with me on socials:
            </span>
            <a 
              href="https://x.com/abhayadityajain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline mr-2"
            >
              x
            </a>
            ,{" "}
            <a 
              href="https://www.linkedin.com/in/abhayadityajain/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline mr-2"
            >
              linkedin
            </a>
            ,{" "}
            <a 
              href="https://onfel1000.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline"
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
            className="underline"
          >
            abhayadityajain@gmail.com
          </a>
          {" | "}
          <a 
            href="mailto:abhay@lindygeo.com"
            className="underline"
          >
            abhay@lindygeo.com
          </a>
        </p>

        {/* CTA */}
        <p className="text-lg">
          wanna chat?{" "}
          <a 
            href="mailto:abhay@lindygeo.com"
            className="underline"
          >
            lets do it
          </a>
        </p>

        {/* Sitemap */}
        <p className="text-lg pt-8">
          <Link href="/sitemap.xml" className="underline">
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