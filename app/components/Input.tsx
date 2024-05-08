"use client";
// import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineSearch } from "react-icons/ai";


interface InputProps {
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
  }

const Input = ({handleSearch, setLocation}: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        className="w-full rounded-sm p-1 outline-none text-black"
        // placeholder="Search..."
        placeholder="Search City"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] text-black cursor-pointer">
        <AiOutlineSearch />
      </div>
    </form>
  )
}

export default Input
