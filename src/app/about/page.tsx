import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Abhay Jain - Writer, Investor & Entrepreneur",
  description: "Learn about Abhay Jain, the 18-year-old founder of Lindy GEO who pivoted from fundamental equity research to build a digital media business for the AI-native web.",
  keywords: "Abhay Jain about, biography, entrepreneur, Lindy GEO founder, AI SEO",
  openGraph: {
    title: "About Abhay Jain - Writer, Investor & Entrepreneur",
    description: "Learn about Abhay Jain, the 18-year-old founder of Lindy GEO who pivoted from fundamental equity research to build a digital media business for the AI-native web.",
    type: "profile",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* Navigation */}
      <nav className="mb-16">
        <div className="flex space-x-8 text-lg">
          <Link href="/" className="underline text-purple-500 hover:text-purple-400">
            home
          </Link>
          <Link href="/ledger" className="underline text-purple-500 hover:text-purple-400">
            ledger
          </Link>
          <Link href="/about" className="underline text-purple-500 hover:text-purple-400 font-bold">
            about me
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold underline mb-8">
          Who Is Abhay Jain?
        </h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>
            Abhay Jain is a writer, investor, and entrepreneur who pivoted from fundamental equity research to build a digital media business for the AI-native web. He&apos;s been featured in LinkedIn, Apple News, and Product Hunt, and is an Amazon Kindle best-seller.
          </p>
          
          <p>
            At 18, he founded{" "}
            <a 
              href="https://www.lindygeo.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline text-purple-500 hover:text-purple-400"
            >
              Lindy GEO
            </a>
            , a generative engine optimization (GEO) agency that helps brands become the preferred sources cited by AI systems like ChatGPT, Gemini, and Perplexity. Today, Lindy GEO is one of the earliest firms specializing in zero-click AI traffic, with frameworks influencing how modern authority is constructed, retrieved, and ranked in LLM-driven environments.
          </p>
        </div>

        {/* Back to Home */}
        <div className="pt-8 border-t border-purple-500">
          <Link 
            href="/"
            className="underline text-purple-500 hover:text-purple-400"
          >
            ← back to home
          </Link>
        </div>
      </main>

      {/* Enhanced Structured Data for About Page */}
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