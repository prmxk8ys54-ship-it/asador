const navbar = document.getElementById("navbar");
const content = document.getElementById("content");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("backdrop-blur-md", "bg-black/40", "border-b", "border-black/30");
  } else {
    navbar.classList.remove("backdrop-blur-md", "bg-black/40", "border-b", "border-black/30");
  }
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

const pages = {
 home: `
    <section class="relative h-screen flex items-center justify-center">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <video autoplay muted loop playsinline class="w-full h-full object-cover brightness-75"
          poster="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80">
          <source src="https://player.vimeo.com/external/352602814.sd.mp4?s=3d1f4f3b2f1e3f6a4b9bde6b0f0f6ef1a3e2c6e7&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>

      <div class="text-center px-6 md:px-0 max-w-3xl">
        <h1 class="font-playfair text-gold text-5xl md:text-7xl mb-4 tracking-tight">Asador Martínez</h1>
        <p class="text-gray-300 text-lg md:text-xl mb-8">La excelencia de la carne madurada — donde la técnica se une al arte.</p>
        <div class="flex items-center justify-center gap-4">
          <button onclick="navigate('reservas')" class="px-8 py-3 rounded-full border border-gold text-gold hover:bg-gold/10 transition">Reservar mesa</button>
          <button onclick="navigate('experiencia')" class="px-6 py-3 rounded-full bg-white/5 text-gray-200 hover:brightness-110 transition">Nuestra experiencia</button>
        </div>
      </div>
    </section>
  `,
  carta: `
   <div class="min-h-screen pt-24 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
  <h1 class="font-playfair text-4xl text-gold mb-8 border-b border-gold/20 pb-2">La Carta</h1>
  <p>Descubre nuestros asados y cortes a la parrilla, preparados con precisión y pasión.</p>
  <ul class="divide-y divide-gray-800 mt-6">
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Ribeye Dry-Aged 45 días</h3>
        <p class="text-gray-400 text-sm max-w-lg">Corte seleccionado, madurado en cava controlada, servido con mantequilla de hueso y sal en escamas.</p>
        <img src="https://beluagourmet.es/wp-content/uploads/2022/05/Chuleton-180-scaled-350x350.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
      </div>
      <span class="text-gold font-medium">€58</span>
    </li>
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Solomillo Prime</h3>
        <p class="text-gray-400 text-sm max-w-lg">Filete de primera calidad a la brasa con puré de apionabo y reducción de vino tinto.</p>
        <img src="https://media.timeout.com/images/106310622/image.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€64</span>
    </li>
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Chuletón de Buey</h3>
        <p class="text-gray-400 text-sm max-w-lg">Chuletón madurado, asado a la parrilla con patatas asadas y pimientos del piquillo.</p>
        <img src="https://tienda.bodegaelcapricho.com/modules/ph_simpleblog/covers/1.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€52</span>
    </li>
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Burrata Di Mare</h3>
        <p class="text-gray-400 text-sm max-w-lg">Burrata con salsa pesto y pistacho molido acompañado con tomate del perelló.</p>
        <img src="https://www.cafedelacruz.es/wp-content/uploads/2022/10/ensalada-de-burrata.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€22</span>
    </li>
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Costillas BBQ</h3>
        <p class="text-gray-400 text-sm max-w-lg">Costillas de cerdo glaseadas con salsa BBQ casera, acompañadas de ensalada coleslaw.</p>
        <img src="https://media.timeout.com/images/106310622/image.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€38</span>
    </li>
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Entrecot Argentino</h3>
        <p class="text-gray-400 text-sm max-w-lg">Entrecot importado, grilled a la perfección con chimichurri y verduras asadas.</p>
        <img src="https://thumbs.dreamstime.com/b/exquisitely-grilled-beef-steak-gourmet-steakhouse-masterpiece-captured-stunning-detail-your-restaurant-menu-indulge-384264469.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€48</span>
    </li>
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Pollo Asado</h3>
        <p class="text-gray-400 text-sm max-w-lg">Pollo marinado con hierbas, asado lentamente con arroz pilaf y salsa de limón.</p>
        <img src="https://media.traveler.es/photos/613766f7d7c7024f9175e39c/1:1/w_945,h_945,c_limit/175999.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€32</span>
    </li>
    <li class="py-6 flex justify-between">
      <div>
        <h3 class="font-playfair text-xl text-white">Ensalada Fresca</h3>
        <p class="text-gray-400 text-sm max-w-lg">Mezcla de verdes con tomates cherry, queso feta y vinagreta balsámica.</p>
        <img src="https://i.blogs.es/694b41/ensalada-de-tomate-sandia-y-feta-con-aceite-de-curcuma-portada-horizontal/840_560.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€18</span>
    </li>
    <li class="py-6 flex justify-between"> 
    <div>
        <h3 class="font-playfair text-xl text-white">Tarta de Queso</h3>
        <p class="text-gray-400 text-sm max-w-lg">Tarta casera con base de galleta y topping de frutos rojos.</p>
        <img src="https://imag.bonviveur.com/tarta-de-queso-del-restaurante-fismuler-en-madrid.jpg" 
             class="rounded-lg object-cover w-48 md:w-64 aspect-video mt-2" 
             alt="Ribeye Dry-Aged" />
        </div>
      <span class="text-gold font-medium">€12</span>
    </li>
  </ul>
</div>
  `,
  experiencia: `
    <div class="min-h-screen pt-24 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h1 class="font-playfair text-4xl text-gold mb-8 border-b border-gold/20 pb-2">Nuestra Experiencia</h1>
      <p>En ASADOR MARTÍNEZ, el asado es una ceremonia. Cada pieza se prepara en nuestra parrilla, desarrollando sabores intensos y una textura incomparable.</p>
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/eb/73/69/a-busy-night-at-rube.jpg?w=1200&h=-1&s=1" alt="Parrilla en acción" class="rounded-xl shadow-lg my-8" />
    </div>
  `,
  galeria: `
    <div class="min-h-screen pt-24 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h1 class="font-playfair text-4xl text-gold mb-8 border-b border-gold/20 pb-2">Galería</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/NUXZ9gQb-wU1TYyBa44P-w/o.jpg" class="rounded-lg object-cover aspect-video" />
        <img src="https://tienda.bodegaelcapricho.com/modules/ph_simpleblog/covers/1.jpg" class="rounded-lg object-cover aspect-video" />
        <img src="https://thumbs.dreamstime.com/b/exquisitely-grilled-beef-steak-gourmet-steakhouse-masterpiece-captured-stunning-detail-your-restaurant-menu-indulge-384264469.jpg" class="rounded-lg object-cover aspect-video" />
        <img src="https://beluagourmet.es/wp-content/uploads/2022/05/Chuleton-180-scaled-350x350.jpg" class="rounded-lg object-cover aspect-video" />
        <img src="https://rubiatoparedes.com/tienda/media/catalog/product/cache/e8684134a39f12079caed0ca575ad397/c/h/chuleta-extra_700x700.jpg" class="rounded-lg object-cover aspect-video" />
        <img src="https://media.timeout.com/images/106310622/image.jpg" class="rounded-lg object-cover aspect-video" />
      </div>
    </div>
  `,
  reservas: `
   <div class="min-h-screen pt-24 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
    <h1 class="font-playfair text-4xl text-gold mb-8 border-b border-gold/20 pb-2 text-center">Reservas</h1>

    <!-- Imagen centrada y más grande -->
    <div class="flex justify-center mb-8">
      <img src="https://beluarestaurante.es/wp-content/uploads/2024/05/4a4dc968-7efa-4e71-81a9-bf36582882ef-2.jpg" 
           class="rounded-lg object-cover w-full md:w-3/4 lg:w-2/3 aspect-video" 
           alt="Imagen Restaurante" />
    </div>

    <form onsubmit="event.preventDefault();alert('Reserva enviada correctamente.');" 
          class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/40 p-8 rounded-2xl border border-black/30">
      <input placeholder="Nombre" class="p-3 rounded bg-transparent border border-black/20 text-gray-100" required>
      <input type="email" placeholder="Correo" class="p-3 rounded bg-transparent border border-black/20 text-gray-100" required>
      <input placeholder="Teléfono" class="p-3 rounded bg-transparent border border-black/20 text-gray-100" required>
      
      <!-- Select con texto negro -->
      <select class="p-3 rounded bg-white border border-black/20 text-black">
        <option>1 persona</option>
        <option>2 personas</option>
        <option>3 personas</option>
        <option>4 personas</option>
        <option>5 personas</option>
      </select>
      
      <!-- Fecha con texto negro -->
      <input type="date" class="p-3 rounded bg-white border border-black/20 text-black" required>
      
      <!-- Hora con texto negro -->
      <input type="time" class="p-3 rounded bg-white border border-black/20 text-black" required>
      
      <button type="submit" class="md:col-span-2 mt-4 px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold/10 transition">
        Enviar reserva
      </button>
    </form>
  </div>
  `,
  contacto: `
    <div class="min-h-screen pt-24 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h1 class="font-playfair text-4xl text-gold mb-8 border-b border-gold/20 pb-2">Contacto</h1>
      <p>ASADOR MARTÍNEZ — Calle El merlero 4, Valencia, España</p>
      <p>Tel: +34 611 111 111 · reservas@asadormartinez.com</p>
      <iframe class="rounded-xl mt-6" width="100%" height="400" loading="lazy" style="border:0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.123456789!2d2.1744!3d41.4036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac5bc3ebe4e!2sSagrada%20Fam%C3%ADlia!5e0!3m2!1ses!2ses!4v1697040000000"></iframe>
    </div>
  `
};

function navigate(page) {
  content.innerHTML = pages[page] || pages.home;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (!mobileMenu.classList.contains('hidden')) toggleMobileMenu();
}

navigate("home");
