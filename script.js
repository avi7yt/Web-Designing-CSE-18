// ===== AMAZON CLONE - app.js =====

// ====== PRODUCTS DATA ======
const products = [
  {
    id: 1,
    title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
    price: 29.99,
    original: 49.99,
    rating: 4.7,
    reviews: 142856,
    badge: "-40%",
    img: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=300&q=80",
  },
  {
    id: 2,
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
    price: 199.0,
    original: 249.0,
    rating: 4.8,
    reviews: 98432,
    badge: "-20%",
    img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&q=80",
  },
  {
    id: 3,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: 59.95,
    original: 99.95,
    rating: 4.6,
    reviews: 213045,
    badge: "-40%",
    img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&q=80",
  },
  {
    id: 4,
    title: "Kindle Paperwhite (16 GB) – The thinnest, lightest Kindle",
    price: 99.99,
    original: 139.99,
    rating: 4.7,
    reviews: 87234,
    badge: "-29%",
    img: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&q=80",
  },
  {
    id: 5,
    title: "Samsung 55-Inch Class QLED 4K Smart TV",
    price: 597.99,
    original: 799.99,
    rating: 4.5,
    reviews: 45231,
    badge: "-25%",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=300&q=80",
  },
  {
    id: 6,
    title: "Levi's Men's 501 Original Fit Jeans",
    price: 34.99,
    original: 59.5,
    rating: 4.4,
    reviews: 67890,
    badge: "-41%",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80",
  },
  {
    id: 7,
    title: "Ninja Air Fryer Pro 4-Qt with Remote Window",
    price: 89.99,
    original: 129.99,
    rating: 4.7,
    reviews: 34567,
    badge: "-31%",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&q=80",
  },
  {
    id: 8,
    title: "LEGO Star Wars: The Mandalorian Battle Pack",
    price: 15.99,
    original: 19.99,
    rating: 4.8,
    reviews: 23456,
    badge: "-20%",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&q=80",
  },
  {
    id: 9,
    title: "Neutrogena Hydro Boost Water Gel Moisturizer",
    price: 16.97,
    original: 21.99,
    rating: 4.5,
    reviews: 156789,
    badge: "-23%",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80",
  },
  {
    id: 10,
    title: "adidas Ultraboost Running Shoes for Men",
    price: 89.95,
    original: 190.0,
    rating: 4.6,
    reviews: 45678,
    badge: "-53%",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
  },
];

// ====== CART STATE ======
let cart = [];

// ====== RENDER PRODUCTS ======
function renderProducts(productList) {
  const grid = document.getElementById("dealsGrid");
  if (!grid) return;
  grid.innerHTML = productList
    .map(
      (p) => `
    <div class="product-card" data-id="${p.id}">
      <span class="product-badge">${p.badge}</span>
      <img class="product-img" src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="product-title">${p.title}</div>
      <div class="product-stars">${renderStars(p.rating)}</div>
      <div class="product-reviews">${p.reviews.toLocaleString()} ratings</div>
      <div class="product-price">$${p.price.toFixed(2)}</div>
      <div class="product-original">List: $${p.original.toFixed(2)}</div>
      <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
    </div>
  `,
    )
    .join("");

  // Add to cart listeners
  grid.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "★".repeat(full);
  if (half) stars += "½";
  return `${stars} <span style="color:#555;font-size:11px">${rating}</span>`;
}

// ====== CART LOGIC ======
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const existing = cart.find((i) => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`"${product.title.slice(0, 40)}..." added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.textContent = count;

  const itemsEl = document.getElementById("cartItems");
  const footerEl = document.getElementById("cartFooter");
  const totalEl = document.getElementById("cartTotal");

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    if (footerEl) footerEl.style.display = "none";
    return;
  }

  itemsEl.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.title}" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title.slice(0, 50)}${item.title.length > 50 ? "..." : ""}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
        <span class="remove-btn" data-id="${item.id}">Remove</span>
      </div>
    </div>
  `,
    )
    .join("");

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  if (footerEl) footerEl.style.display = "block";

  // Qty buttons
  itemsEl.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      changeQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
    });
  });
  // Remove buttons
  itemsEl.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () =>
      removeFromCart(parseInt(btn.dataset.id)),
    );
  });
}

// ====== CART OPEN/CLOSE ======
function openCart() {
  document.getElementById("cartSidebar")?.classList.add("open");
  document.getElementById("cartOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartSidebar")?.classList.remove("open");
  document.getElementById("cartOverlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

// ====== HERO SLIDER ======
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
let autoSlideInterval;

function goToSlide(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  document
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === index));
  currentSlide = index;
}

function initSlider() {
  const dotsContainer = document.getElementById("slideDots");
  if (!dotsContainer || slides.length === 0) return;
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => {
      goToSlide(i);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });

  document.getElementById("prevSlide")?.addEventListener("click", () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
    resetAutoSlide();
  });
  document.getElementById("nextSlide")?.addEventListener("click", () => {
    goToSlide((currentSlide + 1) % slides.length);
    resetAutoSlide();
  });

  autoSlideInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

// ====== SEARCH ======
function handleSearch() {
  const query = document
    .getElementById("searchInput")
    ?.value.trim()
    .toLowerCase();
  if (!query) {
    renderProducts(products);
    return;
  }
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query),
  );
  renderProducts(filtered.length ? filtered : products);

  // Scroll to deals
  document
    .querySelector(".deals-section")
    ?.scrollIntoView({ behavior: "smooth" });

  if (filtered.length === 0) showToast("No products found. Showing all deals.");
}

// ====== TOAST ======
let toastTimeout;
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ====== BACK TO TOP ======
document.getElementById("backToTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== MOBILE MENU ======
function openMobileMenu() {
  document.getElementById("mobileMenuDrawer")?.classList.add("open");
  document.getElementById("mobileMenuOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  document.getElementById("mobileMenuDrawer")?.classList.remove("open");
  document.getElementById("mobileMenuOverlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  initSlider();

  // Cart open/close
  document.getElementById("cartBtn")?.addEventListener("click", openCart);
  document.getElementById("cartClose")?.addEventListener("click", closeCart);
  document.getElementById("cartOverlay")?.addEventListener("click", closeCart);

  // Hamburger / mobile menu
  document
    .getElementById("hamburgerBtn")
    ?.addEventListener("click", openMobileMenu);
  document
    .getElementById("mobileMenuClose")
    ?.addEventListener("click", closeMobileMenu);
  document
    .getElementById("mobileMenuOverlay")
    ?.addEventListener("click", closeMobileMenu);

  // Desktop search
  document.getElementById("searchBtn")?.addEventListener("click", handleSearch);
  document.getElementById("searchInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  // Mobile search (synced with desktop)
  document.getElementById("searchBtnMobile")?.addEventListener("click", () => {
    const mq = document.getElementById("searchInputMobile")?.value;
    if (mq !== undefined) {
      const desktopInput = document.getElementById("searchInput");
      if (desktopInput) desktopInput.value = mq;
    }
    handleSearch();
  });
  document
    .getElementById("searchInputMobile")
    ?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const desktopInput = document.getElementById("searchInput");
        if (desktopInput) desktopInput.value = e.target.value;
        handleSearch();
      }
    });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeMobileMenu();
    }
  });
});
