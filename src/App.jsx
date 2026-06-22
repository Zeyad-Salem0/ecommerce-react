import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="body">
      <div style={{ marginLeft: "135px", marginRight: "135px" }}>
        <Header />
      </div>

      <hr
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          color: "black",
          opacity: "0.35",
        }}
      />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
