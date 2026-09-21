import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactRow from "@/components/contact/ContactRow";

const CONTACTS = [
  { label: "email", value: "root@#pNasim.me", href: "nsm.nasimpk@gmail.com" },
  { label: "linkedin", value: "in/@#pNasim","href": "https://www.linkedin.com/in/md-nasim-pk" },
  { label: "github", value: "@#pNasim", href: "https://github.com/Pnsmnasim/#pNasim" },
  { label: "twitter_x", value: "@#pNasim", href: "https://x.com/Nasim492800Md/#pNasim" },
  { label: "telegram", value: "@md_nasim_pk", href: "https://t.me/naSimPk909" },
 // { label: "youtube", value: "@#cNasim", href: "https://youtube.com/@#cNasim" },
  { label: "facebook", value: "@#pNasim", href: "https://www.facebook.com/share/19aekLQRD2/#pNasim" },
  //{ label: "blog", value: "blog.#cNasim.me", href: "https://blog.#cNasim.me" },
];

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="mx-auto max-w-4xl px-6 pb-10 pt-36 sm:pt-40">
        <p className="mb-3 font-mono text-[13px] text-ash">
          $ ./contact.sh --reach-out
        </p>
        <h1 className="text-glow text-3xl font-bold text-white sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-ash">
          Open to penetration testing engagements, red team collaborations,
          and security research opportunities. Based in Dhaka, Bangladesh,
          working worldwide.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-6">
        <div className="border-glow rounded-xl border border-matrix/20 bg-panel/80 p-4">
          <div className="mb-3 flex items-center gap-1.5 px-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-matrix/70" />
            <span className="ml-2 font-mono text-[11px] text-ash">
              root@#p.nasim:~/contact
            </span>
          </div>

          <div className="space-y-0.5">
            {CONTACTS.map((c) => (
              <ContactRow key={c.label} {...c} />
            ))}
          </div>

          <p className="px-3 pb-1 pt-3 font-mono text-[13.5px] text-white">
            $ <span className="animate-blink">▌</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-lg border border-matrix/30 bg-matrix/5 px-5 py-4 text-[13px] text-ash">
          <span className="mr-2 rounded border border-matrix/40 px-1.5 py-0.5 font-mono text-[11px] text-matrix">
            TIP
          </span>
          For time-sensitive engagement requests, telegram &amp; email is
          the fastest channel.
        </div>
      </section>

      <Footer />
    </main>
  );
}