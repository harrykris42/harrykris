import Link from 'next/link'

const projects = [
  {
    title: 'Wisplet',
    description: 'AI character platform with chat, image, and voice generation. Uses Claude 3, Midjourney, and Supabase.',
    tech: ['Next.js', 'Supabase', 'Vercel', 'Stripe'],
    link: 'https://wisplet.com',
  },
  {
    title: 'GeMBot',
    description: 'Automates GeM bid scraping, CSV editing, and real-time monitoring. Integrated with Supabase and MUI.',
    tech: ['Supabase', 'Node.js', 'Next.js', 'MUI'],
    link: 'https://github.com/harrykris/gembot',
  },
  {
    title: 'Custom OS',
    description: 'An x86 OS written from scratch using bootloader and 64-bit kernel, built with NASM and C.',
    tech: ['Assembly', 'C', 'QEMU', 'GRUB'],
    link: 'https://github.com/harrykris/custom-os',
  },
  {
    title: 'Railway Ticket System',
    description: 'Terminal-based full-stack booking system with Python, MySQL, and HTML frontend.',
    tech: ['Python', 'MySQL', 'HTML'],
    link: 'https://github.com/harrykris/railway-ticket-system',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div key={proj.title} className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-zinc-300 mb-4">{proj.description}</p>
            <p className="text-sm text-zinc-400 mb-4">
              {proj.tech.join(' · ')}
            </p>
            <Link href={proj.link} target="_blank" className="text-blue-400 hover:underline">
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
