import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/**
 * Cárdenas Prime v2 - Versión mejorada con enrutamiento completo
 * - Cada sección principal (Inicio, Carta, Experiencia, Galería, Reservas, Contacto) tiene su propia página.
 * - Diseño más modular, elegante y con navegación tipo luxury restaurant.
 * - Utiliza TailwindCSS y React Router.
 * - Hero es la única sección visible en la página principal.
 */

const Navbar = ({ scrolled }) => (
  <header
    className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "backdrop-blur-md bg-black/40 border-b border-black/30" : "bg-transparent"
    }`}
  >
    <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl">
            <span className="text-gold text-xl font-playfair tracking-wide">CP</span>
          </div>
          <span className="hidden md:block font-playfair text-gold text-lg tracking-wider">Cárdenas Prime</span>
        </Link>
      </div>

      <ul className="hidden md:flex gap-8 uppercase text-sm tracking-widest text-gray-300">
        <li><Link to="/" className="hover:text-white transition">Inicio</Link></li>
        <li><Link to="/carta" className="hover:text-white transition">Carta</Link></li>
        <li><Link to="/experiencia" className="hover:text-white transition">Experiencia</Link></li>
        <li><Link to="/galeria" className="hover:text-white transition">Galería</Link></li>
        <li><Link to="/reservas" className="hover:text-white transition">Reservas</Link></li>
        <li><Link to="/contacto" className="hover:text-white transition">Contacto</Link></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover brightness-75"
        poster="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
      >
        <source src="https://player.vimeo.com/external/352602814.sd.mp4?s=3d1f4f3b2f1e3f6a4b9bde6b0f0f6ef1a3e2c6e7&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
    </div>

    <div className="text-center px-6 md:px-0 max-w-3xl">
      <h1 className="font-playfair text-gold text-5xl md:text-7xl leading-tight mb-4 tracking-tight">
        Cárdenas Prime
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-8">
        La excelencia de la carne madurada — donde la técnica se une al arte.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          to="/reservas"
          className="px-8 py-3 rounded-full border border-gold text-gold font-medium hover:bg-gold/10 transition"
        >
          Reservar mesa
        </Link>
        <Link
          to="/experiencia"
          className="px-6 py-3 rounded-full bg-white/5 text-gray-200 font-medium hover:brightness-110 transition"
        >
          Nuestra experiencia
        </Link>
      </div>
    </div>
  </section>
);

// Reusable page wrapper
const PageLayout = ({ title, children }) => (
  <div className="min-h-screen bg-black text-gray-100 font-montserrat pt-24 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
    <h1 className="font-playfair text-4xl text-gold mb-8 border-b border-gold/20 pb-2">{title}</h1>
    <div className="text-gray-300 leading-relaxed space-y-6">{children}</div>
  </div>
);

const Carta = () => (
  <PageLayout title="La Carta">
    <p>Descubre nuestros cortes de carne madurada, preparados con precisión y pasión.</p>
    <ul className="divide-y divide-gray-800 mt-6">
      {[{
        name: "Ribeye Dry-Aged 45 días",
        desc: "Corte seleccionado, madurado en cava controlada, servido con mantequilla de hueso y sal en escamas.",
        price: "€58",
      }, {
        name: "Solomillo Prime",
        desc: "Filete de primera calidad a la brasa con puré de apionabo y reducción de vino tinto.",
        price: "€64",
      }].map((dish, i) => (
        <li key={i} className="py-6 flex justify-between">
          <div>
            <h3 className="font-playfair text-xl text-white">{dish.name}</h3>
            <p className="text-gray-400 text-sm max-w-lg">{dish.desc}</p>
          </div>
          <span className="text-gold font-medium">{dish.price}</span>
        </li>
      ))}
    </ul>
  </PageLayout>
);

const Experiencia = () => (
  <PageLayout title="Nuestra Experiencia">
    <p>
      En Cárdenas Prime, la maduración de la carne es una ceremonia. Cada pieza reposa en nuestras cavas durante semanas, desarrollando aromas intensos y una textura incomparable.
    </p>
    <img
      src="https://images.unsplash.com/photo-1543352634-2e6c1a89b9d3?auto=format&fit=crop&w=1200&q=80"
      alt="Cava de maduración"
      className="rounded-xl shadow-lg my-8"
    />
  </PageLayout>
);

const Galeria = () => (
  <PageLayout title="Galería">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[1,2,3,4,5,6].map(i => (
        <img key={i} src={`https://source.unsplash.com/800x600/?steak,restaurant,${i}`} alt="Galería" className="rounded-lg object-cover" />
      ))}
    </div>
  </PageLayout>
);

const Reservas = () => (
  <PageLayout title="Reservas">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Reserva enviada correctamente.");
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/40 p-8 rounded-2xl border border-black/30"
    >
      <input name="name" placeholder="Nombre" className="p-3 rounded bg-transparent border border-black/20 outline-none text-gray-100" />
      <input name="email" type="email" placeholder="Correo" className="p-3 rounded bg-transparent border border-black/20 outline-none text-gray-100" />
      <input name="phone" placeholder="Teléfono" className="p-3 rounded bg-transparent border border-black/20 outline-none text-gray-100" />
      <select name="people" className="p-3 rounded bg-transparent border border-black/20 outline-none text-gray-100">
        <option>1 persona</option>
        <option>2 personas</option>
        <option>3 personas</option>
        <option>4 personas</option>
      </select>
      <input name="date" type="date" className="p-3 rounded bg-transparent border border-black/20 outline-none text-gray-100" />
      <input name="time" type="time" className="p-3 rounded bg-transparent border border-black/20 outline-none text-gray-100" />
      <button type="submit" className="md:col-span-2 mt-4 px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold/10 transition">Enviar reserva</button>
    </form>
  </PageLayout>
);

const Contacto = () => (
  <PageLayout title="Contacto">
    <p>Cárdenas Prime — Calle Falsa 123, Madrid, España</p>
    <p>Tel: +34 600 000 000 · reservas@cardenasprime.com</p>
    <iframe
      title="mapa"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1234567890123!2d-3.7037904846065!3d40.4167753793633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229a2b2b2b2b%3A0x123456789abcdef!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1697040000000"
      width="100%" height="400" style={{ border: 0 }} loading="lazy"
      className="rounded-xl mt-6"
    />
  </PageLayout>
);

const Footer = () => (
  <footer className="border-t border-black/20 py-8 text-center text-sm text-gray-400 bg-black/50">
    © {new Date().getFullYear()} Cárdenas Prime. Todos los derechos reservados.
  </footer>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <div className="bg-black min-h-screen text-gray-100">
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
      <style>{`
        :root { --gold: #c59d5f; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .text-gold { color: var(--gold); }
        .border-gold { border-color: rgba(197,157,95,0.85); }
      `}</style>
    </Router>
  );
}
