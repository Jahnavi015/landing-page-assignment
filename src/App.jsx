import Products from "./components/Products"; 
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <header>
        <h1>Header Section</h1>
        <p>Welcome to Our Landing Page...</p>
      </header>

      <Products />

      <FAQ />

      <footer className="text-center py-4 text-sm text-gray-600">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
