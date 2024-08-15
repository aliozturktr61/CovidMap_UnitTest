import { CiSearch } from "react-icons/ci";

const Form = () => {
  return (
    <form className="flex items-center border rounded">
      <input
        className="bg-transparent p-1 px-2 md:px-5 outline-none"
        type="text"
        placeholder="Aranacak ülke ..."
      />

      <button className="bg-red-500 p-[6px] text-xl w-full h-full rounded transition hover:bg-red-800">
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
