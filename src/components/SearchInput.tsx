interface SearchInputProps {
  inputText: string;
  setInputText: (inputText: string) => void;
}

const SearchInput = ({ inputText, setInputText }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder="Find your Pokémon"
      className="input input-bordered w-full max-w-xs p-4 text-lg"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );
};

export default SearchInput;
