import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ledger - Financial Theses by Abhay Jain",
  description: "Investment insights and financial theses by Abhay Jain. Deep analysis on companies and market opportunities in the AI-native economy.",
  keywords: "Abhay Jain investment, financial thesis, equity research, investment insights, ledger",
  alternates: {
    canonical: "/ledger",
  },
  openGraph: {
    title: "The Ledger - Financial Theses by Abhay Jain",
    description: "Investment insights and financial theses by Abhay Jain. Deep analysis on companies and market opportunities.",
    type: "website",
  },
};

export default function Ledger() {
  return (
    <div className="min-h-screen bg-black text-white p-8" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* Navigation */}
      <nav className="mb-16">
        <div className="flex space-x-8 text-lg">
          <Link href="/" className="underline text-purple-500 hover:text-purple-400">
            home
          </Link>
          <Link href="/ledger" className="underline text-purple-500 hover:text-purple-400 font-bold">
            ledger
          </Link>
          <Link href="/about" className="underline text-purple-500 hover:text-purple-400">
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
          
          {/* Solara Active Post */}
          <article className="border border-purple-500 p-6 space-y-4">
            <header>
              <h3 className="text-xl font-bold">
                <Link href="/ledger/solara-virtue-getting-wrecked" className="underline text-purple-500 hover:text-purple-400">
                  Solara: The Virtue of Getting Wrecked
                </Link>
              </h3>
              <div className="text-sm text-gray-400 space-y-1">
                <p>15 Feb 2025 • 15 min read</p>
                <p className="text-gray-300">
                  Investment thesis on Solara Active Pharma Sciences transformation from fragile Ibuprofen dependency to robust chemistry-driven platform.
                </p>
              </div>
            </header>
            
            {/* Brief Company Info Box */}
            <div className="bg-purple-500 text-black p-4 text-sm">
              <strong>Solara Active Pharma Sciences (NSE: SOLARA)</strong><br/>
              Indian pharmaceutical company specializing in Active Pharmaceutical Ingredients (APIs) and Contract Research & Manufacturing Services (CRAMS). Previously heavily dependent on Ibuprofen manufacturing, now transitioning to specialty chemicals and higher-value chemistries.
            </div>

            <p className="text-gray-300 leading-relaxed">
              There are two kinds of companies in this world: those that are fragile, and those that have been broken and forced to become something else. The market loves the former and misunderstands the latter...
            </p>
            
            <Link 
              href="/ledger/solara-virtue-getting-wrecked" 
              className="inline-block underline text-purple-500 hover:text-purple-400"
            >
              read full thesis →
            </Link>
          </article>

          {/* Laurus Labs Post */}
          <article className="border border-purple-500 p-6 space-y-4">
            <header>
              <h3 className="text-xl font-bold">
                <Link href="/ledger/laurus-labs-metamorphosis" className="underline text-purple-500 hover:text-purple-400">
                  The Laurus Labs Metamorphosis: An Exercise in Antifragility
                </Link>
              </h3>
              <div className="text-sm text-gray-400 space-y-1">
                <p>10 Feb 2025 • 12 min read</p>
                <p className="text-gray-300">
                  Investment thesis on Laurus Labs transformation from ARV company to high-end CDMO partner, analyzing antifragility in capital allocation.
                </p>
              </div>
            </header>
            
            {/* Brief Company Info Box */}
            <div className="bg-purple-500 text-black p-4 text-sm">
              <strong>Laurus Labs (NSE: LAURUSLABS)</strong><br/>
              Indian pharmaceutical company specializing in Active Pharmaceutical Ingredients (APIs) and Contract Development & Manufacturing Organization (CDMO) services. Founded in 2005, headquartered in Hyderabad. Previously focused on antiretroviral drugs, now expanding into high-complexity molecules and biocatalysis.
            </div>

            <p className="text-gray-300 leading-relaxed">
              If your investment thesis fits neatly on a quarterly earnings summary, you&apos;re not investing; you&apos;re participating in a mimetic fiction. Laurus is building a machine the market is structurally incapable of pricing...
            </p>
            
            <Link 
              href="/ledger/laurus-labs-metamorphosis" 
              className="inline-block underline text-purple-500 hover:text-purple-400"
            >
              read full thesis →
            </Link>
          </article>

          {/* Placeholder for future posts */}
          <div className="text-gray-400 italic">
            more theses coming soon...
          </div>
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
    </div>
  );
}