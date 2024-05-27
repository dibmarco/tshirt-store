const shirts = [
  {
    id: 1,
    band: "Faith No More",
    color: "black",
  },

  {
    id: 2,
    band: "Metallica",
    color: "black",
  },

  {
    id: 1,
    band: "Motorhead",
    color: "black",
  },

  /* {
    id: 2,
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
      {shirts.map((shirt) => <div className="shirt-container" key={shirt.id}>{shirt.band}</div>)}
    </main>
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
