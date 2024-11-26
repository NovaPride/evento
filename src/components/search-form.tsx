"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="ring-accent/50 h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none transition focus:bg-white/10 focus:ring-2"
        value={searchText}
        type="text"
        placeholder="Search events in any city..."
        spellCheck="false"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
