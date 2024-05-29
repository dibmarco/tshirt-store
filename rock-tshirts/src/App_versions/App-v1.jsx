import { useState } from "react";

const shirts = [
  {
    id: 1,
    band: "Faith No More",
    color: "blue",
  },
  {
    id: 2,
    band: "Metallica",
    color: "grey",
  },
  {
    id: 3,
    band: "Motorhead",
    color: "orangered",
  },
  /* {
    id: 4,
    band: "Anthrax",
    color: "black",
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
          <ShirtContent band={shirt.band} color={shirt.color} />
        </div>
      ))}
    </main>
  );
}

function ShirtContent({ band, color }) {
  const [bgColor, setBgColor] = useState("white");

  function handleBgColor(color) {
    /* if (bgColor !== "white") {
      setBgColor("white");
    } else {
      setBgColor(color);
      console.log(color);
    } */

    setBgColor((bgColor) => bgColor === "white" ? color : "white");
  }

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="shirt-content"
      onClick={() => handleBgColor(color)}
    >
      {band}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Social Media</p>
    </footer>
  );
}

export default App;
