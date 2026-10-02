import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Facebook, FileImage, Instagram, Menu, Music2, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import koncerty from "@/data/koncerty.json";
import galerie from "@/data/galerie.json";
import novinky from "@/data/novinky.json";
import texty from "@/data/texty.json";
import clenove from "@/data/clenove.json";
import historie from "@/data/historie.json";
import heroAsset from "@/assets/koncert-vykop.jpg";
import bandAsset from "@/assets/koncert-basa.jpg";
import backstageAsset from "@/assets/koncert-kytara.jpg";
import albumAsset from "@/assets/styl-album-cover.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spirit Divočiny — Pražskej cock’n’roll" },
      { name: "description", content: "Oficiální web pražské rock’n’rollové kapely Spirit Divočiny. Hudba, koncerty, texty a kontakt." },
      { property: "og:title", content: "Spirit Divočiny — Pražskej rock’n’roll" },
      { property: "og:description", content: "Rock’n’roll z nás dělá divočáky, a z Tebe taky, bráško!" },
      { property: "og:image", content: "https://spiritdivociny.cz/og-image.png" },
      { property: "og:url", content: "https://spiritdivociny.cz/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://spiritdivociny.cz/og-image.png" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Novinky", "novinky"], ["Kapela", "kapela"], ["Hudba", "hudba"], ["Koncerty", "koncerty"], ["Galerie", "galerie"], ["Texty", "texty"], ["Kontakt", "kontakt"], ["Pro pořadatele", "poradatele"],
];

const spotifyAlbum = "https://open.spotify.com/album/4BGzsuFGCm2NjSCeLtaoUr?si=366bFKPYRM-Jlsy-GjHz6Q";
const youtubeAlbum = "https://youtube.com/playlist?list=OLAK5uy_nYHR4MxPn09bZds-qo2_nz0UNThu4ahys&si=y8ZdCgBqSzaLHLTq";
const tracks = ["Sypej", "Svině", "Styl", "Migranti", "Lítat", "Foglarovka", "Dezinformace", "Bjørndalen", "Hentai", "Růže", "Ivana"];
const organizerFiles = [
  { label: "Stageplan", format: "JPG", href: "/stageplan.jpg" },
  { label: "Prasorožec", format: "SVG", href: "/PRASOROZEC.svg" },
  { label: "Logo — bílá verze", format: "SVG", href: "/NAPIS-BILY.svg" },
  { label: "Logo — černá verze", format: "SVG", href: "/NAPIS-CERNY.svg" },
  { label: "Samolepková verze", format: "SVG", href: "/verze-sticker.svg" },
];

const songLinks: Record<string, { spotify: string; youtube: string }> = {
  Sypej: { spotify: "https://open.spotify.com/track/3IxzNScjQRZAA1cRtyOjcc", youtube: "https://www.youtube.com/watch?v=hYyuh5nRtfQ" },
  Svině: { spotify: "https://open.spotify.com/track/40bkElRi18EBFJYsP5dkaM", youtube: "https://www.youtube.com/watch?v=JgVMUTy_Txg" },
  Styl: { spotify: "https://open.spotify.com/track/7fAWNDjECDQN2bBoGZVwdu", youtube: "https://www.youtube.com/watch?v=ns3G3qpAkSY" },
  Migranti: { spotify: "https://open.spotify.com/track/3Fw8usdt3UpOWZBynOhtLD", youtube: "https://www.youtube.com/watch?v=GxHHtgyKpcE" },
  Lítat: { spotify: "https://open.spotify.com/track/4Fl4uVavpNYCEmBbNs8EPR", youtube: "https://www.youtube.com/watch?v=BJgqGJlUPcU" },
  Foglarovka: { spotify: "https://open.spotify.com/track/1iLJ3RN5Ep17D109mfgdWs", youtube: "https://www.youtube.com/watch?v=NJaNRkMmIwA" },
  Dezinformace: { spotify: "https://open.spotify.com/track/1KwEkQIqRPFlPj9ittHR0M", youtube: "https://www.youtube.com/watch?v=J9gg95lWnDs" },
  Bjørndalen: { spotify: "https://open.spotify.com/track/2BK1fMvK6BbH4egTOwEKKn", youtube: "https://www.youtube.com/watch?v=uBNDddMB9sQ" },
  Hentai: { spotify: "https://open.spotify.com/track/7iKnaTTFMAcMVjNEgoJADY", youtube: "https://www.youtube.com/watch?v=bWp1bwxehqY" },
  Růže: { spotify: "https://open.spotify.com/track/7iANYTBurWJbSv75ox9Rmd", youtube: "https://www.youtube.com/watch?v=qlE8W4uzqYE" },
  Ivana: { spotify: "https://open.spotify.com/track/3KnPTrXmQN54uhkyCAUmtA", youtube: "https://www.youtube.com/watch?v=O8wTcfUGDhY" },
};

function Stamp({ className = "" }: { className?: string }) {
  return <div className={`relative grid place-items-center rounded-full border-[3px] border-mascot-orange bg-background/80 p-5 shadow-[0_0_0_2px_rgba(0,0,0,0.55)] backdrop-blur-sm ${className}`}>
    <svg viewBox="0 0 200 200" className="absolute inset-0 size-full" aria-hidden="true">
      <defs>
        <path id="stamp-arc" d="M 38.3,154 A 82,82 0 1 1 161.7,154" fill="none"/>
        <path id="stamp-arc-bottom" d="M 58.8,184.5 A 94,94 0 0 0 141.2,184.5" fill="none"/>
      </defs>
      <text textAnchor="middle" className="fill-foreground font-display text-[16.5px] uppercase tracking-[0.05em]"><textPath href="#stamp-arc" startOffset="50%">Rock’n’roll z nás dělá divočáky</textPath></text>
      <text textAnchor="middle" className="fill-mascot-orange font-display text-[14px] uppercase tracking-[0.08em]"><textPath href="#stamp-arc-bottom" startOffset="50%">Od 2022</textPath></text>
    </svg>
    <img src="/favicon.svg" alt="" aria-hidden="true" className="aspect-square w-[90%] object-contain" />
  </div>;

}

function Lyrics({ text }: { text: string }) {
  const stanzas: string[][] = [];
  let current: string[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (/^ref[:.]?$/i.test(line)) { if (current.length) { stanzas.push(current); current = []; } continue; }
    current.push(line);
  }
  if (current.length) stanzas.push(current);
  return <div className="font-lyrics space-y-6 text-[1.05rem] leading-[1.55] text-foreground/85">
    {stanzas.map((stanza, i) => <p key={i}>
      {stanza.map((line, j) => <span key={j} className="block">{line}</span>)}
    </p>)}
  </div>;
}

function SectionTitle({ children }: { children: string }) {
  return <div className="mb-12 border-b border-border pb-5"><h2 className="font-display text-4xl uppercase md:text-6xl">{children}</h2></div>;
}


function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastOpen, setPastOpen] = useState(false);
  const [openSong, setOpenSong] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % galerie.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + galerie.length) % galerie.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);


  return <main className="overflow-x-hidden bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mascot-blue/30 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="font-display text-xl uppercase leading-none md:text-2xl"><span className="text-primary">Spirit</span><br/><span className="text-mascot-orange">Divočiny</span></a>
        <nav className="hidden items-center gap-4 md:flex lg:gap-6">{nav.map(([label, id], index) => <a key={id} href={`#${id}`} className={`text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors lg:text-xs lg:tracking-[0.18em] ${index % 3 === 0 ? "hover:text-mascot-blue" : index % 3 === 1 ? "hover:text-primary" : "hover:text-mascot-orange"}`}>{label}</a>)}</nav>
        <button aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"} className="grid size-10 place-items-center text-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-5 py-6 md:hidden">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-4 font-display text-2xl uppercase">{label}</a>)}</nav>}
      <div className="mascot-stripe h-1 w-full" />
    </header>

    <section id="top" className="relative flex min-h-[92vh] items-end border-b border-border pt-20">
      <img src={heroAsset} width={2000} height={1333} alt="Spirit Divočiny na pódiu" className="absolute inset-0 size-full object-cover object-[55%_25%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/35 to-background/95" />
      <div className="absolute right-3 top-20 z-10 size-[7.5rem] rotate-[-9deg] sm:right-6 sm:top-24 sm:size-40 lg:right-10 lg:top-28 lg:size-52"><Stamp className="size-full" /></div>
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 lg:px-8 lg:pb-20">
        <div>
          <h1 className="font-display text-[clamp(3rem,13vw,9rem)] uppercase leading-[0.85] tracking-tight text-white">Spirit<br/>Divočiny</h1>
          <div className="mascot-stripe mt-6 h-1 w-40" />
          <Button asChild variant="stage" size="xl" className="mt-9"><a href="#koncerty">Nejbližší koncert <ArrowDown/></a></Button>
        </div>
      </div>
    </section>


    <section id="novinky" className="border-b border-border bg-surface"><div className="section-shell">
      <SectionTitle>Novinky</SectionTitle>
      <div className="border-t border-border">
        {novinky.map((novinka, index) => <article key={`${novinka.datum}-${novinka.nadpis}`} className="grid gap-5 border-b border-border py-8 md:grid-cols-[10rem_1fr_auto] md:items-start md:gap-8">
          <div className="flex items-center gap-3"><span className={`size-2 ${index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-mascot-blue" : "bg-mascot-orange"}`} aria-hidden="true"/><time className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{novinka.datum}</time></div>
          <div><h3 className="font-display text-2xl uppercase md:text-4xl">{novinka.nadpis}</h3><p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">{novinka.text}</p></div>
          {novinka.odkaz && <a href={novinka.odkaz} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-mascot-orange hover:text-primary">{novinka.odkazText}<ArrowDown className="size-4"/></a>}
        </article>)}
      </div>
    </div></section>


    <section id="kapela" className="section-shell">
      <SectionTitle>O nás</SectionTitle>
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="flex flex-col gap-6"><img src={bandAsset} width={2000} height={1333} loading="lazy" alt="Pavlík s baskytarou na pódiu" className="aspect-[4/5] w-full object-cover object-[60%_40%]"/></div>
        <div><p className="text-lg leading-[1.8] text-muted-foreground md:text-xl">Rock’n’roll z nás dělá divočáky! Stejně jako patnáctka zpočátku nečeká, že ji nevinná ruka pod sukní může dostat až na porodní sál v Podolí, tak ani v tomhle případě nikdo netušil, jaká nádherná rocknrollová jizda se chystá po nenápadný konverzaci mezi Vojtou, ultimátním megasamcem vládnoucím super skills, jako třeba skládat hudbu a texty kadencí kurvisek lovících sugar daddies, a ke všemu se tenhle geroj narodil předučenej se nevyhnutelně stát spektakulárním frontmanem ve vizuálu Thora, ale s kladivem namísto v rukou mezi nohama, a druhak Matoušem, vlčákem hladovým upíchnout svoje šuplíkový nápady ve všehoschopným rockovým orchestru, naštěští to tihle pasáci rychle správně pochopili, přizvali brášky Pavlíka, honosícím se tím neautentičtějším "raz-dva-kurwa" zvoláním, cos' kdy slyšel, přičemž navíc umí aj líbezně začarovat basovou linkou, a (většinou oblečenýho) Adama, kterej do toho umí s fortelem a precizně třísknout, a teďka tu máme bráško a sestřičko Tebe a chcem tě vidět se s náma svinsky radovat na koncertech či si to narvat do uší hnedle ve studiové nahrávce!</p><img src={backstageAsset} width={2000} height={1333} loading="lazy" alt="Kytarista Spirit Divočiny při koncertě" className="mt-8 aspect-[16/9] w-full object-cover"/><p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Foto: Honza Jirkovský</p></div>

      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl uppercase text-mascot-orange md:text-3xl">Sestava</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clenove.map((clen, index) => <article key={clen.id} className="border border-border bg-surface">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-background">
              {clen.foto
                ? <img src={clen.foto} loading="lazy" alt={`${clen.jmeno} — ${clen.role}`} className="size-full object-cover grayscale transition duration-500 hover:grayscale-0"/>
                : <div className="grid size-full place-items-center"><img src="/favicon.svg" alt="" aria-hidden="true" className="size-2/5 opacity-20"/></div>}
              <span className={`absolute inset-x-0 bottom-0 h-1 ${index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-mascot-blue" : "bg-mascot-orange"}`} aria-hidden="true"/>
            </div>
            <div className="p-5">
              <h4 className="font-display text-3xl uppercase">{clen.jmeno}</h4>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-mascot-orange">{clen.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{clen.bio || "Medailonek se chystá."}</p>
            </div>
          </article>)}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl uppercase text-mascot-blue md:text-3xl">Historie</h3>
        <ol className="mt-8 border-l border-border pl-6 md:pl-10">
          {historie.map((milnik, index) => <li key={milnik.rok} className="relative pb-10 last:pb-0">
            <span className={`absolute -left-[1.85rem] top-2 size-3 md:-left-[2.85rem] ${index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-mascot-blue" : "bg-mascot-orange"}`} aria-hidden="true"/>
            <p className="font-display text-3xl uppercase leading-none md:text-5xl">{milnik.rok}</p>
            <h4 className="mt-3 text-sm font-bold uppercase tracking-[0.15em]">{milnik.nadpis}</h4>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{milnik.text || "Doplníme brzy."}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section id="hudba" className="border-y border-border bg-surface"><div className="section-shell">
      <SectionTitle>Poslouchej</SectionTitle>
       <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
         <div><img src={albumAsset} width={1476} height={1476} loading="lazy" alt="Obal alba Styl" className="aspect-square w-full max-w-md object-cover"/><p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-mascot-orange">Album / 11 songů</p><h3 className="mt-2 font-display text-7xl uppercase md:text-8xl">Styl!</h3><p className="mt-4 max-w-md text-muted-foreground">Naše růžové děťátko. Odnes si ho z koncertu, nebo klikni a poslouchej online.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="stage" size="xl"><a href={spotifyAlbum} target="_blank" rel="noreferrer"><Music2/> Spotify</a></Button><Button asChild variant="outline" size="xl" className="border-mascot-blue text-mascot-blue hover:bg-mascot-blue hover:text-secondary-foreground"><a href={youtubeAlbum} target="_blank" rel="noreferrer"><Youtube/> YouTube</a></Button></div></div>
        <ol className="grid self-start border-t border-border sm:grid-cols-2">{tracks.map((track, i) => <li key={track} className="flex items-baseline gap-4 border-b border-border py-2.5 sm:px-4 sm:odd:border-r"><span className="w-6 text-[0.65rem] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span><span className="flex-1 text-sm font-bold uppercase tracking-wide">{track}</span></li>)}</ol>
      </div>
    </div></section>


    <section id="koncerty" className="border-y border-border bg-surface"><div className="section-shell">
      <SectionTitle>Koncerty</SectionTitle>
      <div className="divide-y divide-border border-y border-border">{koncerty.nadchazejici.map((show) => <article key={`${show.datum}-${show.misto}`} className="grid gap-5 py-7 md:grid-cols-[160px_100px_220px_1fr_100px] md:items-center"><strong className="font-display text-2xl uppercase text-primary">{show.datum}</strong><span className="text-sm font-bold">{show.cas}</span><div><p className="font-bold uppercase">{show.misto}</p><p className="text-sm text-muted-foreground md:hidden">S kým: {show.sKym}</p></div><p className="hidden text-sm text-muted-foreground md:block">S kým: {show.sKym}</p>{show.udalost ? <a href={show.udalost} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-primary">Událost <ArrowUpRight className="size-4"/></a> : <span className="text-xs font-bold uppercase text-muted-foreground">Brzy</span>}</article>)}</div>
      <button onClick={() => setPastOpen(!pastOpen)} className="mt-8 flex w-full items-center justify-between border-b border-border py-5 text-left font-display text-xl uppercase hover:text-primary" aria-expanded={pastOpen}>Proběhlé koncerty <span>{pastOpen ? "−" : "+"}</span></button>
      {pastOpen && <div className="divide-y divide-border">{koncerty.probehle.map((show) => <div key={`${show.datum}-${show.misto}`} className="grid gap-5 py-5 text-muted-foreground md:grid-cols-[160px_320px_1fr] md:items-center"><span>{show.datum}</span><span>{show.misto}</span><span>S kým: {show.sKym}</span></div>)}</div>}
    </div></section>

    <section id="galerie" className="section-shell">
      <SectionTitle>Galerie</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {galerie.map((foto, i) => <button key={foto.id} onClick={() => setLightbox(i)} className="group relative block overflow-hidden border border-border bg-surface text-left">
          <img src={foto.src} loading="lazy" alt={foto.caption} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        </button>)}
      </div>
      {galerie.length === 0 && <p className="text-muted-foreground">Fotky brzy přibudou.</p>}
    </section>

    {lightbox !== null && galerie[lightbox] && <div role="dialog" aria-modal="true" onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4">
      <button aria-label="Zavřít" onClick={() => setLightbox(null)} className="absolute right-5 top-5 grid size-11 place-items-center border border-border text-foreground hover:border-primary hover:text-primary"><X/></button>
      <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
        <img src={galerie[lightbox]!.src} alt={galerie[lightbox]!.caption} className="max-h-[85vh] w-auto max-w-full object-contain"/>
      </figure>
      {galerie.length > 1 && <>
        <button aria-label="Předchozí" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i - 1 + galerie.length) % galerie.length)); }} className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-border hover:border-primary hover:text-primary">‹</button>
        <button aria-label="Další" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i + 1) % galerie.length)); }} className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-border hover:border-primary hover:text-primary">›</button>
      </>}
    </div>}

    <section id="texty" className="section-shell">
      <SectionTitle>Texty</SectionTitle>
      <div className="border-t border-border">{texty.map((song) => { const open = openSong === song.nazev; const links = songLinks[song.nazev]; return <div key={song.nazev} className="border-b border-border"><button onClick={() => setOpenSong(open ? null : song.nazev)} className="flex w-full items-center gap-5 py-6 text-left hover:text-primary" aria-expanded={open}><span className="text-xs text-primary">{song.cislo}</span><span className="flex-1 font-display text-3xl uppercase md:text-5xl">{song.nazev}</span><span className="text-3xl">{open ? "−" : "+"}</span></button>{open && <div className="max-w-2xl pb-10 pl-11">
        {links && <div className="mb-6 flex items-center gap-4"><span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground">Poslechni si</span><a href={links.spotify} target="_blank" rel="noreferrer" aria-label={`${song.nazev} na Spotify`} className="text-muted-foreground transition-colors hover:text-primary"><Music2 className="size-4"/></a><a href={links.youtube} target="_blank" rel="noreferrer" aria-label={`${song.nazev} na YouTube`} className="text-muted-foreground transition-colors hover:text-mascot-orange"><Youtube className="size-4"/></a></div>}
        <Lyrics text={song.text}/>
      </div>}</div>})}</div>
    </section>

    <section id="kontakt" className="border-t border-border bg-surface"><div className="section-shell">
      <SectionTitle>Kontakt</SectionTitle>
      <div className="grid gap-14 lg:grid-cols-2">
        <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Booking / koncerty / média</p><a href="mailto:spiritdivociny@gmail.com" className="mt-4 block break-all font-display text-3xl uppercase hover:text-primary md:text-5xl">spiritdivociny@gmail.com</a><a href="tel:+420732757535" className="mt-5 block text-xl font-bold hover:text-primary">+420 732 757 535</a><div className="mt-12 flex gap-4">{[[Facebook,"Facebook","https://www.facebook.com/SpiritDivociny"],[Instagram,"Instagram","https://www.instagram.com/spiritdivocinyband"],[Music2,"Spotify",spotifyAlbum],[Youtube,"YouTube",youtubeAlbum]].map(([Icon,label,url]) => { const SocialIcon = Icon as typeof Facebook; return <a key={label as string} href={url as string} target="_blank" rel="noreferrer" aria-label={label as string} className="grid size-12 place-items-center border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"><SocialIcon/></a>})}</div></div>
        <form action="mailto:spiritdivociny@gmail.com" method="post" encType="text/plain" className="grid gap-5"><label className="grid gap-2 text-xs font-bold uppercase tracking-widest">Jméno<input name="name" required className="h-12 border-b border-border bg-transparent text-base font-normal outline-none focus:border-primary"/></label><label className="grid gap-2 text-xs font-bold uppercase tracking-widest">E-mail<input name="email" type="email" required className="h-12 border-b border-border bg-transparent text-base font-normal outline-none focus:border-primary"/></label><label className="grid gap-2 text-xs font-bold uppercase tracking-widest">Zpráva<textarea name="message" required rows={4} className="resize-none border-b border-border bg-transparent py-3 text-base font-normal outline-none focus:border-primary"/></label><Button type="submit" variant="stage" size="xl" className="mt-2 justify-self-start">Poslat zprávu <ArrowUpRight/></Button></form>
      </div>
    </div></section>
    <section id="poradatele" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[0.65fr_1.35fr] md:items-start lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-muted-foreground"><FileImage className="size-5 text-mascot-orange" aria-hidden="true"/><h2 className="font-display text-2xl uppercase md:text-3xl">Pro pořadatele</h2></div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">Stageplan a oficiální grafické podklady kapely ke stažení.</p>
        </div>
        <div className="grid border-t border-border sm:grid-cols-2">
          {organizerFiles.map((file, index) => <a key={file.label} href={file.href} target="_blank" rel="noreferrer" download className="group flex items-center gap-3 border-b border-border py-4 sm:px-4 sm:odd:border-r"><span className="flex-1 text-sm font-bold uppercase">{file.label}</span><span className={`text-[0.65rem] font-bold uppercase tracking-widest ${index % 3 === 0 ? "text-primary" : index % 3 === 1 ? "text-mascot-blue" : "text-mascot-orange"}`}>{file.format}</span><Download className="size-4 text-muted-foreground transition-transform group-hover:translate-y-0.5"/></a>)}
        </div>
      </div>
    </section>
    <footer className="border-t border-border px-5 py-8 text-center text-xs uppercase tracking-widest text-muted-foreground">© 2026 Spirit Divočiny · Punkrock z Indočíny</footer>
  </main>;
}
