import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="bg-[#18181B] border-t border-zinc-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <T>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mb-8 text-sm text-zinc-400 text-center">
            This is an example application built with General Translation to demonstrate internationalization. It is not a real coworking space or service.
          </div>
        </T>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <T>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">General Translation</a>
              <a href="https://www.coworkingresources.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">Coworking Resources</a>
              <a href="https://gcuc.co" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">GCUC</a>
              <a href="https://www.deskmag.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">Deskmag</a>
            </div>
          </T>
          <T>
            <p>Built with General Translation for Next.js</p>
          </T>
        </div>
      </div>
    </footer>
  );
}
