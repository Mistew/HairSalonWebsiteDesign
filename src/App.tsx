import { useState } from "react";
import salonInterior from "@/imports/545459843_1308773367925737_8398892775187115506_n.jpg";

const salonDetail =
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=88";
const salonService =
  "https://images.unsplash.com/photo-1695527081848-1e46c06e6458?auto=format&fit=crop&w=1200&q=88";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const MapPin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#alku" onClick={closeMenu}>
          <span>Tapiolan</span>
          <strong>Salonki</strong>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Avaa valikko"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Päävalikko">
          <a href="#palvelut" onClick={closeMenu}>
            Palvelut
          </a>
          <a href="#meista" onClick={closeMenu}>
            Meistä
          </a>
          <a href="#arviot" onClick={closeMenu}>
            Arviot
          </a>
          <a href="#yhteys" onClick={closeMenu}>
            Yhteystiedot
          </a>
          <a className="nav-cta" href="tel:+3589467313" onClick={closeMenu}>
            Varaa aika <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero" id="alku">
        <div className="hero-copy">
          <p className="eyebrow">Parturi-kampaamo Tapiolan sydämessä</p>
          <h1>
            Sinun hiuksesi.
            <br />
            <em>Meidän intohimomme.</em>
          </h1>
          <p className="hero-lead">
            Ajattomia leikkauksia, vivahteikkaita värejä ja lämmintä palvelua –
            ammattitaidolla, johon Tapiolassa luotetaan.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="tel:+3589467313">
              Varaa aika <Arrow />
            </a>
            <a className="text-link" href="#palvelut">
              Tutustu palveluihin
            </a>
          </div>
          <div className="rating" aria-label="4,7 tähteä, 89 Google-arvostelua">
            <span className="stars">★★★★★</span>
            <strong>4,7</strong>
            <span>89 Google-arvostelua</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img src={salonInterior} alt="Vaalea ja tunnelmallinen kampaamotila" />
          </div>
          <div className="hero-note">
            <span>Avoinna tänään</span>
            <strong>8–18</strong>
          </div>
          <span className="vertical-type">EST. TAPIOLA</span>
        </div>
      </section>

      <section className="intro" id="meista">
        <div className="section-index">01</div>
        <div className="intro-heading">
          <p className="eyebrow">Tervetuloa meille</p>
          <h2>
            Hyvä hiuspäivä
            <br />
            alkaa <em>kohtaamisesta.</em>
          </h2>
        </div>
        <div className="intro-body">
          <p>
            Olemme palvelleet Tapiolassa jo vuosien ajan. Meille tärkeintä on
            kuunnella, ymmärtää ja tehdä hiukset, jotka tuntuvat omilta myös
            salonkipäivän jälkeen.
          </p>
          <p>
            Asiakkaamme kiittävät erityisesti ammattitaitoista henkilökuntaa,
            onnistuneita värejä ja luotettavaa, mutkatonta palvelua.
          </p>
          <a className="text-link" href="#arviot">
            Lue asiakkaidemme kokemuksia <Arrow />
          </a>
        </div>
      </section>

      <section className="services" id="palvelut">
        <div className="services-top">
          <div>
            <p className="eyebrow eyebrow-light">Palvelut</p>
            <h2>Sinulle suunniteltu.</h2>
          </div>
          <p>
            Jokainen käynti alkaa keskustelulla. Valitaan yhdessä tyyli, sävy ja
            hoito, joka sopii juuri sinulle.
          </p>
        </div>

        <div className="service-list">
          {[
            ["01", "Leikkaukset", "Naiset, miehet ja lapset"],
            ["02", "Värjäykset", "Kokonaisvärit, tyvivärit ja sävytykset"],
            ["03", "Raidat & vaalennukset", "Luonnollisesta rohkeaan"],
            ["04", "Kampaukset", "Arkeen, juhlaan ja tärkeisiin hetkiin"],
            ["05", "Hiustenpidennykset", "Konsultaatio ja yksilöllinen toteutus"],
          ].map(([number, title, description]) => (
            <a className="service-row" href="tel:+3589467313" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Arrow />
            </a>
          ))}
        </div>
        <p className="price-note">
          Kysy ajantasainen hinta ja arvio palvelun kestosta ajanvarauksen yhteydessä.
        </p>
      </section>

      <section className="craft">
        <div className="craft-photo photo-main">
          <img src={salonService} alt="Kampaaja viimeistelee asiakkaan hiuksia" />
        </div>
        <div className="craft-copy">
          <p className="eyebrow">Väri. Muoto. Sinä.</p>
          <h2>
            Huolella tehty,
            <br />
            <em>kauniisti sinun.</em>
          </h2>
          <p>
            Hyvä lopputulos ei synny kiireessä. Ammattitaitomme, laadukkaat
            tuotteet ja tarkka kuuntelu tekevät jokaisesta käynnistä yksilöllisen.
          </p>
          <div className="craft-stat">
            <strong>10+ vuotta</strong>
            <span>Moni asiakkaamme on luottanut meihin jo yli vuosikymmenen.</span>
          </div>
        </div>
        <div className="craft-photo photo-detail">
          <img src={salonDetail} alt="Tyylikkään kampaamon työpisteet" />
        </div>
      </section>

      <section className="reviews" id="arviot">
        <div className="review-heading">
          <div>
            <p className="eyebrow">Asiakkaidemme sanoin</p>
            <h2>Luottamus näkyy.</h2>
          </div>
          <div className="google-rating">
            <span>Google</span>
            <strong>4,7 / 5</strong>
            <small>89 arvostelua</small>
          </div>
        </div>

        <div className="review-grid">
          <article className="review-card featured-review">
            <span className="quote-mark">“</span>
            <p>
              Miellyttävä ja tosi ammattitaitoinen henkilökunta sekä salonki.
              Erityisesti Hanna värjäsi hiukseni upealla tavalla. Supertyytyväinen
              tulokseen.
            </p>
            <footer>
              <strong>I like To mix it</strong>
              <span>Google-arvostelu</span>
            </footer>
          </article>
          <article className="review-card">
            <span className="stars">★★★★★</span>
            <p>
              Hiton hyvä! +10v käynyt, kertaakaan en ole pettynyt. Aina hyvin
              leikatut hiukset.
            </p>
            <footer>
              <strong>Risto</strong>
              <span>Google-arvostelu</span>
            </footer>
          </article>
          <article className="review-card">
            <span className="stars">★★★★★</span>
            <p>
              Paras parturi-kampaamo! Aina yhtä hyvä ja luotettava.
            </p>
            <footer>
              <strong>Alina Pesonen</strong>
              <span>Google-arvostelu</span>
            </footer>
          </article>
        </div>
      </section>

      <section className="contact" id="yhteys">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">Nähdään Tapiolassa</p>
          <h2>
            Valmis uuteen
            <br />
            <em>hiuspäivään?</em>
          </h2>
          <a className="button button-light" href="tel:+3589467313">
            Soita ja varaa aika <Arrow />
          </a>
        </div>
        <div className="contact-details">
          <div>
            <span>Osoite</span>
            <a
              href="https://maps.app.goo.gl/wRSgrJwZVpE5YcZW6"
              target="_blank"
              rel="noreferrer"
            >
              Tapiontori
              <br />
              02100 Espoo
            </a>
          </div>
          <div>
            <span>Puhelin</span>
            <a href="tel:+3589467313">09 467 313</a>
          </div>
          <div>
            <span>Aukioloajat</span>
            <p>
              Ma–Pe 8–18
              <br />
              La 9–15
              <br />
              Su suljettu
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#alku">
          <span>Tapiolan</span>
          <strong>Salonki</strong>
        </a>
        <p>Hiuksesi hyvissä käsissä, Tapiolan sydämessä.</p>
        <a
          className="social-link"
          href="https://maps.app.goo.gl/wRSgrJwZVpE5YcZW6"
          target="_blank"
          rel="noreferrer"
          aria-label="Tapiolan Salonki Google Mapsissa"
        >
          <MapPin />
        </a>
        <small>© {new Date().getFullYear()} Tapiolan Salonki</small>
      </footer>
    </main>
  );
}
