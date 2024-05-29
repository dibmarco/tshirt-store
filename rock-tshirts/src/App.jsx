import { useState } from "react";

const shirts = [
  {
    id: 1,
    band: "Faith No More",
    colors: ["white", "black"],
    imgs: ["./imgs/fnm_white.jpg", "./imgs/fnm_black.jpg"],
    prices: [15.99, 12.99],
  },
  {
    id: 2,
    band: "Metallica",
    colors: ["white", "black"],
    imgs: ["./imgs/metallica_white.jpg", "./imgs/metallica_black.jpg"],
    prices: [17.99, 15.99],
  },
  {
    id: 3,
    band: "Motörhead",
    colors: ["white", "black"],
    imgs: ["./imgs/motorhead_white.jpg", "./imgs/motorhead_black.jpg"],
    prices: [14.99, 17.99],
  },
  /* {
    id: 4,
    band: "Anthrax",
    colors: ["black"],
    imgs: [],
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
          <ShirtContent band={shirt.band} imgs={shirt.imgs} />
        </div>
      ))}
    </main>
  );
}

function ShirtContent({ band, imgs }) {
  const hasImages = imgs && imgs.length > 0;
  const initialImgSrc = hasImages ? imgs[0] : null;

  const [selectShirt, setSelectShirt] = useState(initialImgSrc);

  function handletoggleShirt() {
    if (imgs.length > 1) {
      setSelectShirt((shirtImg) => (shirtImg === imgs[0] ? imgs[1] : imgs[0]));
    }
  }

  return (
    <div className="shirt-content" onClick={() => handletoggleShirt()}>
      {initialImgSrc && (
        <img className="shirt-image" src={selectShirt} alt={`${band} Shirt`} />
      )}
      <div className="shirt-description">{band}</div>
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
        <a href="https://tiktok.com/" target="_blank">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="https://pinterest.com/" target="_blank">
          <i className="fa-brands fa-pinterest"></i>
        </a>
      </div>
    </footer>
  );
}

export default App;
