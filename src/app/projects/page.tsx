import Link from 'next/link'
import Image from 'next/image'

const categorizedProjects = {
  Startups: [
    {
      title: 'Wisplet',
      description:
        'Wisplet Inc. is a U.S.-registered software company building secure, cloud-based AI tools for communication, collaboration, and productivity. Users can create and share intelligent virtual agents in customizable, multi-user chat environments.',
      tech: ['Next.js', 'Supabase', 'Vercel', 'Stripe'],
      link: 'https://wisplet.com',
      thumbnail: '/wisplet.svg',
    },
  ],
  Automation: [
    {
      title: 'GeMBot',
      description:
        'Automates GeM bid scraping, CSV editing, and real-time monitoring. Integrated with Supabase and MUI.',
      tech: ['Supabase', 'Node.js', 'Next.js', 'MUI'],
      link: 'https://github.com/harrykris42/gembot',
      thumbnail: '/default-thumbnail.png', // Add a default image or leave it empty
    },
  ],
  Systems: [
    {
      title: 'Custom OS',
      description:
        'An x86 OS written from scratch using bootloader and 64-bit kernel, built with NASM and C.',
      tech: ['Assembly', 'C', 'QEMU', 'GRUB'],
      link: 'https://github.com/harrykris42/custom_os',
      thumbnail: '/default-thumbnail.png', // Add a default image or leave it empty
    },
  ],
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
      <p className="text-zinc-500 text-center mb-12 text-sm italic">
        A glimpse into the systems I&apos;ve built — from AI SaaS to OS kernels.
      </p>

      {Object.entries(categorizedProjects).map(([category, projects]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400">{category}</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {proj.thumbnail && (
                  <Image
  src={proj.thumbnail}
  alt={proj.title}
  width={400}
  height={128}
  className="rounded-lg mb-4 w-full h-32 object-contain"
/>
                )}
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-zinc-300 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-800 text-xs px-2 py-1 rounded-full text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={proj.link}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
