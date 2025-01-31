import { useState, useMemo } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import type { ISearchInput, TSearchInputItem } from "./search-input.types";
import {
  StyledInputContainer,
  StyledInputContent,
  StyledInput,
  StyledUl,
  StyledLi,
} from "./search-input.styles";

const SearchInput = ({ data, onSelect, placeholder }: ISearchInput) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    return data.filter((entry) =>
      entry.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  const handleSelect = (item: TSearchInputItem) => {
    setQuery(item.label);
    onSelect(item.value);
    onClear();
  };

  const onClear = () => {
    setShowResults(false);
    setQuery("");
  };

  return (
    <StyledInputContainer>
      <StyledInputContent direction="row" gap="5">
        <MdSearch size={24} color="#aaa" />

        <StyledInput
          data-testid="search-input"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
        />

        {query && (
          <MdClose
            size={24}
            color="#aaa"
            onClick={onClear}
            style={{ cursor: "pointer" }}
            data-testid="search-input-on-clear"
          />
        )}
      </StyledInputContent>

      <AnimatePresence>
        {showResults && filteredResults.length > 0 && (
          <StyledUl
            as={motion.ul}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {filteredResults.map((entry) => (
              <StyledLi key={entry.value} onClick={() => handleSelect(entry)}>
                {entry.label}
              </StyledLi>
            ))}
          </StyledUl>
        )}
      </AnimatePresence>
    </StyledInputContainer>
  );
};

export default SearchInput;
