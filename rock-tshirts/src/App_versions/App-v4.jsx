import { useState } from "react";

const shirts = [
  {
    id: 1,
    band: "Faith No More",
    colors: ["white", "black"],
    sizes: ["s", "m", "l"],
    imgs: ["./imgs/fnm_white.jpg", "./imgs/fnm_black.jpg"],
    price: 12.49,
  },
  {
    id: 2,
    band: "Metallica",
    colors: ["white", "black", "gray"],
    imgs: [
      "./imgs/metallica_white.jpg",
      "./imgs/metallica_black.jpg",
      "./imgs/metallica_gray.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    price: 15.49,
  },
  {
    id: 3,
    band: "Motörhead",
    colors: ["white", "black", "red"],
    imgs: [
      "./imgs/motorhead_white.jpg",
      "./imgs/motorhead_black.jpg",
      "./imgs/motorhead_red.jpg",
    ],
    sizes: ["s", "m"],
    price: 15.49,
  },
  /* {
    id: 4,
    band: "Anthrax",
    colors: ["black"],
    imgs: [],
    sizes: ["s", "m", "l"],
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
            colors={shirt.colors}
            imgs={shirt.imgs}
            sizes={shirt.sizes}
            price={shirt.price}
          />
        </div>
      ))}
    </main>
  );
}

function ShirtContent({ band, colors, imgs, sizes, price }) {
  const [selectColor, setSelectColor] = useState(imgs[0]);
  const [selectQuantity, setSelectQuantity] = useState(1);

  function handleSelectColor(colorIndex) {
    setSelectColor(imgs[colorIndex]);
  }

  function handleSelectQuantity(newQuantity) {
    setSelectQuantity(newQuantity);
  }

  // Helper function to determine text color based on background color
  function getTextColor(backgroundColor) {
    const color = backgroundColor.toLowerCase();
    if (color === "black") {
      return "white";
    }
    return "black";
  }

  return (
    <div className="shirt-content">
      <img className="shirt-image" src={selectColor} alt={`${band} Shirt`} />
      <div className="shirt-price">${price}</div>
      {price < 15 && <div className="sale">Sale</div>}
      <ShirtDrawer
        quantity={selectQuantity}
        onSelectQuantity={handleSelectQuantity}
      />
      <div className="color-selection">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color${index}`}
            style={{ backgroundColor: color, color: getTextColor(color) }}
            onClick={() => handleSelectColor(index)}
          >
            {selectColor === imgs[index] ? "✓" : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShirtDrawer({ quantity, onSelectQuantity }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleOpenDrawer() {
    setOpenDrawer(!openDrawer);
  }

  function handleIncreaseQuantity() {
    onSelectQuantity(quantity + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      onSelectQuantity(quantity - 1);
    }
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
        <label htmlFor="size" className="label-size">
          Size:
        </label>
        <select id="size" className="tshirt-size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label htmlFor="quantity" className="label-quantity">
          Quantity:
        </label>
        <div className="tshirt-quantity">
          <div className="minus-shirt" onClick={() => handleDecreaseQuantity()}>
            -
          </div>
          <div className="quantity-value">{quantity}</div>
          <div className="plus-shirt" onClick={() => handleIncreaseQuantity()}>
            +
          </div>
        </div>
        <button className="addtocart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-pinterest"></i>
        </a>
        <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </footer>
  );
}

export default App;
