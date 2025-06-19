export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-zinc-400 max-w-2xl text-lg mb-8 text-center">
        I&apos;m Harikrishnan K, a developer and founder of <strong className="text-cyan-400">Wisplet</strong>. I build clean, scalable systems with a passion for speed, efficiency, and creative automation.
      </p>
      
      <div className="max-w-3xl text-zinc-300 space-y-6 leading-relaxed">
        <p>
          At 16, I built and managed my own GPU crypto mining rig using RTX 3080, 3060, and more — exploring the cutting edge of decentralized systems before most peers had opened a terminal.
        </p>
        <p>
          I later engineered a <strong>custom x86 operating system</strong> from scratch, bootstrapping a 64-bit kernel using NASM and C. This deepened my understanding of how machines truly work.
        </p>
        <p>
          In 2025, I launched <strong>Wisplet</strong> — an AI character platform integrating Claude 3, Midjourney, XTTS, and Supabase. It&apos;s built to let anyone explore limitless imagination through SFW/NSFW interactions with realistic AI personas.
        </p>
        <p>
          Alongside, I built <strong>GeMBot</strong> — an automation platform that reduces 30-minute government tender workflows to <span className="text-green-400">just 5 seconds</span> using Puppeteer and Supabase.
        </p>
        <p>
          I believe in building tools that <em>work without asking for attention</em> — silent, powerful, and elegant.
        </p>
      </div>
    </main>
  )
}
