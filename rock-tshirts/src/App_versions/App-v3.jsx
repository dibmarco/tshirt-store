import { useState } from "react";

const shirts = [
  {
    id: 1,
    band: "Faith No More",
    colors: ["white", "black"],
    sizes: ["s", "m", "l"],
    imgs: ["./imgs/fnm_white.jpg", "./imgs/fnm_black.jpg"],
    price: [12.49],
  },
  {
    id: 2,
    band: "Metallica",
    colors: ["white", "black"],
    sizes: ["s", "m", "l", "xl"],
    imgs: ["./imgs/metallica_white.jpg", "./imgs/metallica_black.jpg"],
    price: [15.49],
  },
  {
    id: 3,
    band: "Motörhead",
    colors: ["white", "black"],
    sizes: ["s", "m"],
    imgs: ["./imgs/motorhead_white.jpg", "./imgs/motorhead_black.jpg"],
    price: [15.49],
  },
  /* {
    id: 4,
    band: "Anthrax",
    colors: ["black"],
    sizes: ["s", "m", "l"],
    imgs: [],
    price: [12.49],
  }, */
];

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Rock T-Shirts</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      {shirts.map((shirt) => (
        <div className="shirt-container" key={shirt.id}>
          <ShirtContent
            band={shirt.band}
            imgs={shirt.imgs}
            price={shirt.price}
          />
        </div>
      ))}
    </main>
  );
}

function ShirtContent({ band, imgs, price }) {
  const [selectShirt, setSelectShirt] = useState(imgs[0]);

  function handleSelectShirt(shirtColor) {
    setSelectShirt(shirtColor);
  }

  return (
    <div className="shirt-content">
      <img className="shirt-image" src={selectShirt} alt={`${band} Shirt`} />
      <div className="shirt-price">${price}</div>
      {price < 15 && <div className="sale">Sale</div>}
      <ShirtDrawer />
      <div className="color-selection">
        <div className="color0" onClick={() => handleSelectShirt(imgs[0])}>{selectShirt === imgs[0] ? "✓" : ""}</div>
        <div className="color1" onClick={() => handleSelectShirt(imgs[1])}>{selectShirt === imgs[1] ? "✓" : ""}</div>
      </div>
    </div>
  );
}

function ShirtDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleOpenDrawer() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <div
      className="shirt-drawer"
      style={{ bottom: openDrawer ? "0" : "-11.5rem" }}
    >
      <p className="bag-icon" onClick={() => handleOpenDrawer()}>
        <i className="fa-solid fa-bag-shopping"></i>
      </p>

      <div className="shirt-selections">
        <label for="size" className="label-size">
          Size:
        </label>
        <select id="size" className="tshirt-size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label for="quantity" className="label-quantity">
          Quantity:
        </label>
        <input
          id="quantity"
          class="tshirt-quantity"
          type="number"
          min="1"
          value="1"
        />

        <button className="addtocart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://pinterest.com/" target="_blank">
          <i className="fa-brands fa-pinterest"></i>
        </a>
        <a href="https://tiktok.com/" target="_blank">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </footer>
  );
}

export default App;
