// بيانات المنتجات
const products = {
  games: [
    {
      name: "PlayStation 4",
      price: 60000,
      oldPrice: 70000,
      img: "https://i.imgur.com/kA8YIku.png",
      insta: "https://www.instagram.com/arkham_neight"
    },
    {
      name: "لعبة FIFA 23",
      price: 3000,
      oldPrice: 3500,
      img: "https://i.imgur.com/fbWshCH.png",
      insta: "https://www.instagram.com/arkham_neight"
    }
  ],
  devices: [
    {
      name: "لابتوب HP",
      price: 120000,
      oldPrice: 130000,
      img: "https://i.imgur.com/YXEBVQ3.png",
      insta: "https://www.instagram.com/arkham_neight"
    }
  ],
  phones: [
    {
      name: "iPhone 13",
      price: 180000,
      oldPrice: 195000,
      img: "https://i.imgur.com/Jz2RGyj.png",
      insta: "https://www.instagram.com/arkham_neight"
    }
  ],
  accessories: [
    {
      name: "سماعة HyperX",
      price: 10000,
      oldPrice: 12000,
      img: "https://i.imgur.com/nFt7osG.png",
      insta: "https://www.instagram.com/arkham_neight"
    }
  ]
};

// تهيئة الصفحة
const productsContainer = document.getElementById("products-container");
const categoryButtons = document.querySelectorAll(".category-btn");

// دالة عرض المنتجات حسب القسم
function displayProducts(category) {
  productsContainer.innerHTML = "";

  if (!products[category]) {
    productsContainer.innerHTML = "<p class='text-center mt-8'>لا توجد منتجات لهذا القسم</p>";
    return;
  }

  products[category].forEach(product => {
    const productHTML = `
      <div class="product-card bg-gray-800 p-4 rounded-lg mb-5 shadow-lg">
        <img src="${product.img}" alt="${product.name}" class="w-full h-48 object-contain rounded-md mb-3" />
        <h3 class="text-lg font-semibold">${product.name}</h3>
        <p>
          <span class="text-green-400 font-bold">${product.price.toLocaleString()} دج</span>
          &nbsp;
          <span class="old-price">${product.oldPrice.toLocaleString()} دج</span>
        </p>
        <a href="${product.insta}" target="_blank" rel="noopener noreferrer">اطلب الآن</a>
      </div>
    `;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}

// تفعيل الزر النشط للأقسام
function setActiveCategory(button) {
  categoryButtons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

// ضبط الأحداث على أزرار الأقسام
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.getAttribute("data-cat");
    displayProducts(cat);
    setActiveCategory(btn);
  });
});

// عرض القسم الأول تلقائيًا عند فتح الموقع
categoryButtons[0].click();

// *** شريط التنقل السفلي ***
// (نقدر نضيف صفحات مختلفة لاحقاً، حالياً بس تأثير التنقل)

// أزرار الشريط السفلي
const bottomNavButtons = document.querySelectorAll(".nav-bottom-btn");

bottomNavButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    bottomNavButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    // نقدر نضيف تغيير المحتوى هنا لو في صفحات مختلفة
    alert(`صفحة "${btn.getAttribute("data-page")}" تحت التطوير 😉`);
  });
});
