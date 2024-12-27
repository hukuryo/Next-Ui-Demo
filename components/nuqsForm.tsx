"use client";

import { useQueryState } from "nuqs";
import { ChangeEvent } from "react";

export function NuqsForm() {
  const [query, setQuery] = useQueryState("q");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleClear() {
    setQuery(null);
  }

  return (
    <>
      <input value={query || ""} onChange={handleInputChange} />
      <button onClick={handleClear}>クリア</button>
      <p>{query}!</p>
    </>
  );
}
