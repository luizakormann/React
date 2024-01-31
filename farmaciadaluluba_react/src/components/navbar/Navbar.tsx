import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="w-full bg-sky-800 text-amber-100
                flex justify-center py-4"
    >
      <div className="container flex justify-between text-lg font-semibold">
        <Link to="/home" className="text-2xl font-bold">
          Farmácia da Luluba
        </Link>

        <div className="flex gap-8">
          <Link to="/produtos" className="hover:underline">
            Produtos
          </Link>
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;