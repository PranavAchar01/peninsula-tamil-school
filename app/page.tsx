import Hero from "@/components/ui/Hero";
import StatsSection from "@/components/ui/StatsSection";
import ProgramsSection from "@/components/ui/ProgramsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProgramsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Tamil Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of families preserving Tamil language and culture in the Bay Area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/enrollment"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Enroll Your Child Today
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}