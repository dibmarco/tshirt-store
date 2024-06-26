import { useState } from "react";

const shirts = [
  {
    id: 1,
    band: "Faith No More",
    CSQ: [
      {
        color: "white",
        img: "./imgs/fnm_white.jpg",
        SQ: [
          { size: "s", quantity: 3 },
          { size: "m", quantity: 3 },
          { size: "l", quantity: 2 },
          { size: "xl", quantity: 1 },
        ],
      },
      {
        color: "black",
        img: "./imgs/fnm_black.jpg",
        SQ: [
          { size: "s", quantity: 2 },
          { size: "m", quantity: 3 },
          { size: "l", quantity: 4 },
        ],
      },
    ],
    price: 12.49,
  },

  {
    id: 2,
    band: "Metallica",
    CSQ: [
      {
        color: "white",
        img: "./imgs/metallica_white.jpg",
        SQ: [
          { size: "s", quantity: 2 },
          { size: "m", quantity: 4 },
          { size: "l", quantity: 3 },
        ],
      },
      {
        color: "black",
        img: "./imgs/metallica_black.jpg",
        SQ: [
          { size: "s", quantity: 2 },
          { size: "m", quantity: 3 },
          { size: "l", quantity: 4 },
          { size: "xl", quantity: 2 },
        ],
      },
      {
        color: "gray",
        img: "./imgs/metallica_gray.jpg",
        SQ: [
          /* { size: "s", quantity: 1 }, */
          { size: "m", quantity: 3 },
          { size: "l", quantity: 2 },
        ],
      },
    ],
    price: 15.49,
  },

  {
    id: 3,
    band: "Motörhead",
    CSQ: [
      {
        color: "white",
        img: "./imgs/motorhead_white.jpg",
        SQ: [
          { size: "s", quantity: 2 },
          { size: "m", quantity: 4 },
          { size: "l", quantity: 3 },
        ],
      },
      {
        color: "black",
        img: "./imgs/motorhead_black.jpg",
        SQ: [
          { size: "s", quantity: 2 },
          { size: "m", quantity: 3 },
          { size: "l", quantity: 4 },
        ],
      },
      {
        color: "red",
        img: "./imgs/motorhead_red.jpg",
        SQ: [
          /* { size: "s", quantity: 3 }, */
          { size: "m", quantity: 2 },
          /* { size: "l", quantity: 5 }, */
          { size: "xl", quantity: 5 },
        ],
      },
    ],
    price: 15.49,
  },
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
          <ShirtContent band={shirt.band} CSQ={shirt.CSQ} price={shirt.price} />
        </div>
      ))}
    </main>
  );
}

function ShirtContent({ band, CSQ, price }) {
  const [selectColorIndex, setSelectColorIndex] = useState(0);
  const [selectQuantity, setSelectQuantity] = useState(1);

  function handleSelectColor(index) {
    setSelectColorIndex(index);
  }

  function handleSelectQuantity(newQuantity) {
    setSelectQuantity(newQuantity);
  }

  const selectedColor = CSQ[selectColorIndex];

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
      <img
        className="shirt-image"
        src={selectedColor.img}
        alt={`${band} Shirt`}
      />
      <div className="shirt-price">${price}</div>
      {price < 15 && <div className="sale">Sale</div>}
      <ShirtDrawer
        quantity={selectQuantity}
        onSelectQuantity={handleSelectQuantity}
        sizes={selectedColor.SQ}
      />
      <div className="color-selection">
        {CSQ.map((colorItem, index) => (
          <div
            key={index}
            style={{
              backgroundColor: colorItem.color,
              color: getTextColor(colorItem.color),
            }}
            onClick={() => handleSelectColor(index)}
          >
            {selectColorIndex === index ? "✓" : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShirtDrawer({ sizes, quantity, onSelectQuantity }) {
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

  // Helper function to display size in full
  function sizeInitial(sizeInitial) {
    if (sizeInitial === "s") return "Small";
    if (sizeInitial === "m") return "Medium";
    if (sizeInitial === "l") return "Large";
    if (sizeInitial === "xl") return "X Large";
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
          {sizes.map((sizeItem, index) => (
            <option key={index} value={sizeItem.size}>
              {sizeInitial(sizeItem.size)}
            </option>
          ))}
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
