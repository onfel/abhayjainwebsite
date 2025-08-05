import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ledger - Financial Theses by Abhay Jain",
  description: "Investment insights and financial theses by Abhay Jain. Deep analysis on companies and market opportunities in the AI-native economy.",
  keywords: "Abhay Jain investment, financial thesis, equity research, investment insights, ledger",
  openGraph: {
    title: "The Ledger - Financial Theses by Abhay Jain",
    description: "Investment insights and financial theses by Abhay Jain. Deep analysis on companies and market opportunities.",
    type: "website",
  },
};

export default function Ledger() {
  return (
    <div className="min-h-screen bg-black text-purple-500 p-8 font-mono">
      {/* Navigation */}
      <nav className="mb-16">
        <div className="flex space-x-8 text-lg">
          <Link href="/" className="underline">
            home
          </Link>
          <Link href="/ledger" className="underline font-bold">
            ledger
          </Link>
          <Link href="/about" className="underline">
            about me
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl space-y-12">
        <div>
          <h1 className="text-4xl font-bold underline mb-8">
            The Ledger
          </h1>
          <p className="text-xl mb-8">
            financial theses and investment insights
          </p>
        </div>

        {/* Blog Posts Index */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">investment theses</h2>
          
          {/* Laurus Labs Post */}
          <article className="border border-purple-500 p-6 space-y-4">
            <header>
              <h3 className="text-xl font-bold">
                <Link href="/ledger/laurus-labs-metamorphosis" className="underline hover:text-purple-300">
                  The Laurus Labs Metamorphosis: An Exercise in Antifragility
                </Link>
              </h3>
              <div className="text-sm text-purple-400 space-y-1">
                <p>10 Feb 2025 • 12 min read</p>
                <p className="text-purple-300">
                  Investment thesis on Laurus Labs transformation from ARV company to high-end CDMO partner, analyzing antifragility in capital allocation.
                </p>
              </div>
            </header>
            
            {/* Brief Company Info Box */}
            <div className="bg-purple-500 text-black p-4 text-sm">
              <strong>Laurus Labs (NSE: LAURUSLABS)</strong><br/>
              Indian pharmaceutical company specializing in Active Pharmaceutical Ingredients (APIs) and Contract Development & Manufacturing Organization (CDMO) services. Founded in 2005, headquartered in Hyderabad. Previously focused on antiretroviral drugs, now expanding into high-complexity molecules and biocatalysis.
            </div>

            <p className="text-purple-300 leading-relaxed">
              If your investment thesis fits neatly on a quarterly earnings summary, you&apos;re not investing; you&apos;re participating in a mimetic fiction. Laurus is building a machine the market is structurally incapable of pricing...
            </p>
            
            <Link 
              href="/ledger/laurus-labs-metamorphosis" 
              className="inline-block underline hover:text-purple-300"
            >
              read full thesis →
            </Link>
          </article>

          {/* Placeholder for future posts */}
          <div className="text-purple-400 italic">
            more theses coming soon...
          </div>
        </div>

        {/* Back to Home */}
        <div className="pt-8 border-t border-purple-500">
          <Link 
            href="/"
            className="underline hover:text-purple-300"
          >
            ← back to home
          </Link>
        </div>
      </main>
    </div>
  );
}