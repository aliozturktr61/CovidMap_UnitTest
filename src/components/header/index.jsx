import { FaVirusCovid } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./form";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex bg-zinc-900 text-white p-5 md:px-20 justify-between items-center">
      <Link className="flex items-center gap-2" to="/">
        <FaVirusCovid className="text-red-500 text-xl" />
        <h1>Covid Salgını Takip Ekranı</h1>
      </Link>

      <Form />

      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Bugün Aşı Olanlar</span>
          <span>(....,......)</span>
        </p>

        <TbVaccine className="text-xl text-red-500" />
      </div>
    </header>
  );
};

export default Header;
