
import { useState } from "react";
import { Input } from "./ui/input";
import { searchDocs } from "../utils/searchIndex";
import { Search } from "lucide-react";

export function GlobalSearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    searchDocs(newQuery);
  };

  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search documentation..."
        className="w-full pl-9"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}
