import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type FormEvent, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      custom={delay}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const links = [
    ["Pakalpojumi", "#pakalpojumi"],
    ["Klienti", "#klienti"],
    ["Process", "#process"],
    ["Licence", "#licence"],
    ["Kontakti", "#kontakti"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-background border-b border-hairline">
      <div className="mx-auto max-w-7xl h-full px-6 flex items-center justify-between">
        <a href="#top" className="font-mono text-bone tracking-[0.18em] text-sm">
          LAT&nbsp;SECURITY
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-bone/70 hover:text-amber transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+37126376336"
          className="hidden sm:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/80 hover:text-amber"
        >
          <span className="size-1.5 rounded-full bg-operational pulse-dot" />
          24/7&nbsp;DISPEČERIJA&nbsp;+371&nbsp;26&nbsp;376&nbsp;336
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 scanlines" />
      <div className="absolute inset-0 hero-vignette" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 min-h-[calc(100vh-4rem)] flex flex-col">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="flex flex-col gap-2"
        >
          <p className="eyebrow">LAT SECURITY // FIZISKĀ APSARDZE &amp; MONITORINGS</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/60 flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-operational pulse-dot" />
            OPERATIONAL · EST. 2008 · LATVIJA
          </p>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center max-w-5xl">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2.5}
            className="text-bone font-medium leading-[1.02] tracking-tight text-[clamp(3rem,8vw,5.75rem)]"
          >
            APSARDZE
            <br />
            INFRASTRUKTŪRAI<span className="text-amber">.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={5}
            className="mt-8 max-w-[540px] text-[17px] leading-[1.6] text-bone/75"
          >
            Fiziskā apsardze, attālinātais monitorings un drošības konsultācijas Latvijas
            ostu, loģistikas un rūpniecības objektiem. Bez kompromisiem. 24/7.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={7.5}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#kontakti"
              className="inline-flex items-center px-6 py-3.5 bg-amber hover:bg-amber-hover text-background font-mono text-[12px] uppercase tracking-[0.14em] rounded-[2px] transition-colors"
            >
              Pieteikt pakalpojumu
            </a>
            <a
              href="tel:+37126376336"
              className="inline-flex items-center px-6 py-3.5 border border-hairline hover:border-bone text-bone font-mono text-[12px] uppercase tracking-[0.14em] rounded-[2px] transition-colors"
            >
              +371 26 376 336
            </a>
          </motion.div>
        </div>

        <div className="flex items-end justify-between gap-8 flex-wrap">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={10}
            className="flex flex-col gap-3"
          >
            <span className="block w-px h-10 bg-bone/40 origin-top" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/50">
              Ritināt ↓
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={10}
            className="border border-hairline bg-ink/40 backdrop-blur-sm min-w-[280px]"
          >
            {[
              ["STATUS", "OPERATIONAL", true],
              ["ZONA", "LATVIJA"],
              ["KLIENTI", "50+"],
              ["ATBILDES LAIKS", "< 15 MIN"],
            ].map(([label, value, op], i, arr) => (
              <div
                key={label as string}
                className={`flex items-center justify-between px-5 py-3 font-mono text-[12px] ${
                  i < arr.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <span className="text-bone/50 uppercase tracking-[0.14em]">{label}</span>
                <span className="text-bone uppercase tracking-[0.1em] flex items-center gap-2">
                  {op && <span className="size-1.5 rounded-full bg-operational pulse-dot" />}
                  {value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AuthorityStrip() {
  const items = [
    ["LICENCĒTS", "IEKŠLIETU MINISTRIJA"],
    ["PIEREDZE", "15+ GADI"],
    ["KLIENTI", "OSTAS · LOĢISTIKA · RŪPNIECĪBA"],
    ["DISPEČERIJA", "24/7 OPERATĪVAIS CENTRS"],
  ];
  return (
    <section className="border-y border-hairline bg-ink">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-hairline">
        {items.map(([label, value]) => (
          <div key={label} className="px-6 py-6 flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {label}
            </span>
            <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-bone">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ index, title, sub }: { index: string; title: string; sub: string }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="eyebrow">/{index} — {title.split(" — ")[0]}</p>
    </Reveal>
  );
}

function SectionIntro({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-4 text-bone font-medium tracking-tight leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-5 text-bone/70 text-[17px] leading-[1.6] max-w-[600px]">{sub}</p>
      </Reveal>
    </div>
  );
}

function Services() {
  const services = [
    {
      n: "01",
      name: "Fiziskā apsardze",
      desc: "Pastāvīga objektu, kravu un personu fiziskā apsardze. Stacionārie posteņi, mobilās patruļas, miesassardze. Visi darbinieki sertificēti, ekipēti, apdrošināti.",
    },
    {
      n: "02",
      name: "Attālinātais monitorings",
      desc: "24/7 videonovērošanas centrs. Reālā laika kontrole, trauksmes apstrāde, ātrās reaģēšanas grupa. Integrācija ar esošajām sistēmām.",
    },
    {
      n: "03",
      name: "Pasākumu apsardze",
      desc: "Drošība un kārtība semināros, korporatīvajos pasākumos, koncertos un VIP tikšanās. Iepriekšēja riska analīze, koordinētas komandas, diskrēta klātbūtne.",
    },
    {
      n: "04",
      name: "Drošības konsultācijas",
      desc: "Objekta drošības audits, signalizācijas un piekļuves sistēmu projektēšana, riska novērtējums. Strādājam kopā ar Jūsu tehniskajām komandām.",
    },
  ];
  return (
    <section id="pakalpojumi" className="py-32 md:py-40 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="/01 — PAKALPOJUMI"
          title="Četri pakalpojumi. Viens standarts."
          sub="Strādājam visā Latvijas teritorijā. No vienas mašīnas līdz pilnam operatīvajam centram."
        />

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i}>
              <div className="group bg-background p-10 h-full flex flex-col border border-transparent hover:border-amber transition-colors duration-200 relative">
                <span className="font-mono text-amber text-[12px] tracking-[0.18em]">
                  / {s.n}
                </span>
                <h3 className="mt-6 text-bone text-[24px] font-medium leading-tight">
                  {s.name}
                </h3>
                <p className="mt-4 text-bone/65 text-[15px] leading-[1.6] flex-1">{s.desc}</p>
                <a
                  href="#kontakti"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/70 group-hover:text-amber transition-colors"
                >
                  <span>Uzzināt vairāk</span>
                  <span>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clients = [
    "VENTBUNKERS",
    "NORD NATIE",
    "BALTIC COAL TERMINAL",
    "KĀLIJA PARKS",
    "BALTIJAS EKSPRESIS",
    "SEASTAR",
  ];
  return (
    <section id="klienti" className="py-32 md:py-40 border-t border-hairline bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="/02 — KLIENTI"
          title="Apsargājam to, kas neapstājas."
          sub="Ostas, termināli, dzelzceļa loģistika, ražošana. Vidēji 8 gadi katras sadarbības."
        />

        <Reveal delay={2} className="mt-20">
          <div className="border-y border-hairline">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {clients.map((c) => (
                <div
                  key={c}
                  className="border-r last:border-r-0 border-hairline px-6 py-12 flex items-center justify-center text-center group"
                >
                  <span className="font-mono text-[13px] tracking-[0.16em] text-bone/55 group-hover:text-amber transition-colors">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            // 50+ AKTĪVI OBJEKTI · 6 ANKURKLIENTI · 15+ GADI
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "KONTAKTS", "Tālrunis vai e-pasts. Sākotnējais zvans līdz 15 minūtēm."],
    ["02", "AUDITS", "Objekta apskate, riska analīze, posteņu plāns. 24-48h."],
    ["03", "PIEDĀVĀJUMS", "Detalizēts piedāvājums ar grafiku, izmaksām, līguma projektu."],
    ["04", "PALAIŠANA", "Komandas pielāgošana, instruktāža, posteņa nodošana. Sākam strādāt."],
  ];
  return (
    <section id="process" className="py-32 md:py-40 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="/03 — PROCESS"
          title="No zvana līdz posteņa nodošanai — 72 stundas."
          sub="Standartizēts uzsākšanas process. Bez improvizācijas."
        />

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-[44px] left-0 right-0 h-px bg-hairline">
            <div className="absolute inset-0 bg-gradient-to-r from-amber/0 via-amber/40 to-amber/0" />
          </div>
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {steps.map(([n, title, desc], i) => (
              <Reveal key={n} delay={i}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-amber text-[56px] leading-none">{n}</span>
                    <span className="hidden md:block size-2 rounded-full bg-amber" />
                  </div>
                  <h3 className="text-bone text-[18px] font-medium tracking-wide">— {title}</h3>
                  <p className="mt-3 text-bone/65 text-[14px] leading-[1.6]">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tech() {
  const cols = [
    ["Signalizācijas sistēmas", "Bosch, Paradox, Ajax. Bezvadu un vadu risinājumi."],
    ["Piekļuves kontrole", "Karšu, koda un biometriskās sistēmas. Integrācija ar HR."],
    ["Videonovērošana", "IP kameras, NVR/VMS, attālinātā piekļuve, AI analītika."],
  ];
  return (
    <section className="py-32 md:py-40 border-t border-hairline bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="/04 — TEHNOLOĢIJAS"
          title="Aizsardzības sistēmas un integrācijas."
          sub="Signalizācija, piekļuves kontrole, videonovērošana. Projektēšana, uzstādīšana, apkalpošana."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-16">
          {cols.map(([title, desc], i) => (
            <Reveal key={title} delay={i}>
              <div className="border-t border-hairline pt-6">
                <h3 className="text-bone text-[20px] font-medium">{title}</h3>
                <p className="mt-3 text-bone/65 text-[15px] leading-[1.6]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <a
            href="#kontakti"
            className="mt-16 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-amber story-link"
          >
            Sazinieties par projektu →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function License() {
  return (
    <section id="licence" className="py-32 md:py-40 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="/05 — LICENCE"
          title="Licencēti. Apdrošināti. Pārbaudāmi."
          sub=""
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <p className="text-bone/75 text-[17px] leading-[1.7]">
              SIA "LAT Security" darbojas saskaņā ar Iekšlietu ministrijas izdoto apsardzes
              licenci. Visi darbinieki ir sertificēti, izgājuši pārbaudes, apdrošināti.
              Atbildība ir dokumentēta — ne tikai apsolīta.
            </p>

            <div className="mt-10 border border-hairline">
              {[
                ["LICENCES NR.", "Nr. xxxx"],
                ["IZDEVĒJS", "IEKŠLIETU MINISTRIJA"],
                ["REĢ. NR.", "4000xxxxxxx"],
                ["APDROŠINĀTĀJS", "BTA Baltic"],
              ].map(([k, v], i, arr) => (
                <div
                  key={k}
                  className={`flex items-center justify-between px-5 py-3.5 font-mono text-[12px] ${
                    i < arr.length - 1 ? "border-b border-hairline" : ""
                  }`}
                >
                  <span className="text-bone/50 uppercase tracking-[0.14em]">{k}</span>
                  <span className="text-bone uppercase tracking-[0.1em]">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="border border-hairline bg-ink p-8 md:p-10">
              <div className="flex items-center justify-between border-b border-hairline pb-4">
                <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  Document // 01
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-amber uppercase">
                  Verified
                </span>
              </div>

              <div className="mt-8">
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  Apsardzes licence
                </p>
                <h4 className="mt-3 text-bone text-[28px] font-medium leading-tight">
                  SIA LAT Security
                </h4>
                <p className="mt-2 font-mono text-[12px] text-bone/60 tracking-[0.1em]">
                  IEKŠLIETU MINISTRIJA · LATVIJA
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 font-mono text-[11px]">
                <div>
                  <p className="text-muted uppercase tracking-[0.16em]">Izdota</p>
                  <p className="mt-1 text-bone">2008</p>
                </div>
                <div>
                  <p className="text-muted uppercase tracking-[0.16em]">Statuss</p>
                  <p className="mt-1 text-operational flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-operational pulse-dot" />
                    AKTĪVA
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-hairline flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  Seal // LV-MOI
                </span>
                <div className="size-12 border border-hairline flex items-center justify-center font-mono text-[10px] text-amber tracking-[0.14em]">
                  LS
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="kontakti" className="py-32 md:py-40 border-t border-hairline bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="/06 — KONTAKTI"
          title="Vajag apsardzi? Zvanam."
          sub="Sākotnējais zvans līdz 15 minūtēm. Audits 24-48 stundu laikā."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
          <Reveal>
            <div className="border border-hairline p-10 md:p-12 bg-background">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Tālrunis · 24/7
              </p>
              <a
                href="tel:+37126376336"
                className="mt-2 block font-mono text-[24px] text-bone hover:text-amber transition-colors tracking-[0.04em]"
              >
                +371 26 376 336
              </a>

              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                E-pasts
              </p>
              <a
                href="mailto:info@latsecurity.lv"
                className="mt-2 block font-mono text-[16px] text-bone hover:text-amber transition-colors"
              >
                info@latsecurity.lv
              </a>

              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Adrese
              </p>
              <p className="mt-2 text-bone/80 text-[15px] leading-[1.6]">
                SIA "LAT Security"
                <br />
                Rīga, Latvija
              </p>

              <div className="mt-10 pt-6 border-t border-hairline grid grid-cols-2 gap-4 font-mono text-[11px]">
                <div>
                  <p className="text-muted uppercase tracking-[0.16em]">Dispečerija</p>
                  <p className="mt-1 text-bone flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-operational pulse-dot" />
                    24/7
                  </p>
                </div>
                <div>
                  <p className="text-muted uppercase tracking-[0.16em]">Ofiss</p>
                  <p className="mt-1 text-bone">P-P 9:00–18:00</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            {submitted ? (
              <div className="border border-amber/40 p-10 bg-background">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                  // Pieprasījums saņemts
                </p>
                <p className="mt-4 text-bone text-[20px] leading-tight">
                  Paldies. Atbildam 15 minūšu laikā darba dienās.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-7">
                {[
                  { name: "name", label: "Vārds, uzvārds *", type: "text", required: true },
                  { name: "company", label: "Uzņēmums", type: "text" },
                  { name: "phone", label: "Tālrunis *", type: "tel", required: true },
                  { name: "email", label: "E-pasts *", type: "email", required: true },
                ].map((f) => (
                  <div key={f.name} className="flex flex-col gap-2">
                    <label
                      htmlFor={f.name}
                      className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      className="bg-transparent border-0 border-b border-hairline focus:border-amber outline-none py-2 text-bone text-[16px] placeholder:text-muted transition-colors"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="msg"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    Īss apraksts
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    rows={3}
                    placeholder="Objekta tips, atrašanās vieta, aptuvenais apjoms"
                    className="bg-transparent border-0 border-b border-hairline focus:border-amber outline-none py-2 text-bone text-[16px] placeholder:text-muted/70 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full px-6 py-4 bg-amber hover:bg-amber-hover text-background font-mono text-[12px] uppercase tracking-[0.14em] rounded-[2px] transition-colors"
                >
                  Nosūtīt pieprasījumu
                </button>

                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  // Atbildam 15 minūšu laikā darba dienās
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-mono text-bone tracking-[0.18em]">LAT&nbsp;SECURITY</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Apsardze. Monitorings. Kopš 2008.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {[
            ["Pakalpojumi", "#pakalpojumi"],
            ["Klienti", "#klienti"],
            ["Process", "#process"],
            ["Licence", "#licence"],
            ["Kontakti", "#kontakti"],
          ].map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-bone/70 hover:text-amber transition-colors w-fit"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="tel:+37126376336"
            className="font-mono text-[13px] text-bone hover:text-amber transition-colors"
          >
            +371 26 376 336
          </a>
          <a
            href="mailto:info@latsecurity.lv"
            className="font-mono text-[13px] text-bone hover:text-amber transition-colors"
          >
            info@latsecurity.lv
          </a>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-alert">
            ● EMERGENCY 24/7
          </p>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          © 2026 SIA LAT SECURITY · LICENCĒTS · LATVIJA
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-bone">
      <Nav />
      <Hero />
      <AuthorityStrip />
      <Services />
      <Clients />
      <Process />
      <Tech />
      <License />
      <Contact />
      <Footer />
    </main>
  );
}
