import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src="https://i.ytimg.com/an_webp/UTky8eipUhA/mqdefault_6s.webp?du=3000&sqp=CICA2rwG&rs=AOn4CLBEWsjNcAmZQhCeXKbViImSJm-saQ" />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6dqAwh2MCg0?si=gDNK7Cei0I648FMT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;

// crossorigin="anonymous"
