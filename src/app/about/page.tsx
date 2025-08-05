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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Abhay Jain
            </Link>
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
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
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Who Is Abhay Jain?
          </h1>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Abhay Jain is a writer, investor, and entrepreneur who pivoted from fundamental equity research to build a digital media business for the AI-native web. He&apos;s been featured in LinkedIn, Apple News, and Product Hunt, and is an Amazon Kindle best-seller.
            </p>
            
            <p>
              At 18, he founded{" "}
              <a 
                href="https://www.lindygeo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Lindy GEO
              </a>
              , a generative engine optimization (GEO) agency that helps brands become the preferred sources cited by AI systems like ChatGPT, Gemini, and Perplexity. Today, Lindy GEO is one of the earliest firms specializing in zero-click AI traffic, with frameworks influencing how modern authority is constructed, retrieved, and ranked in LLM-driven environments.
            </p>
          </div>
        </article>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Home
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
            "brand": "Lindy GEO",
            "jobTitle": "CEO",
            "knowsAbout": "AI, SEO, Digital Media, GEO",
            "nationality": "Indian",
            "worksFor": {
              "@type": "Organization",
              "name": "Lindy GEO",
              "url": "https://www.lindygeo.com/"
            },
            "sameAs": [
              "https://www.linkedin.com/in/abhayadityajain/",
              "https://x.com/abhayadityajain",
              "https://ratings.fide.com/profile/45082510",
              "https://www.instagram.com/abhay.aditya.jain/",
              "https://onfel1000.substack.com/"
            ],
            "description": "Writer, investor, and entrepreneur who pivoted from fundamental equity research to build a digital media business for the AI-native web. Founder of Lindy GEO.",
            "alumniOf": "Fundamental Equity Research",
            "award": ["LinkedIn Featured", "Apple News Featured", "Product Hunt Featured", "Amazon Kindle Best-seller"]
          })
        }}
      />
    </div>
  );
}