"use client";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Select from "react-select";

const fetchPokemonNames = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000");
  const data = await res.json();
  return data.results.map((pokemon) => ({
    label: pokemon.name,
    value: pokemon.name,
  }));
};

const Search = () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  useEffect(() => {
    fetchPokemonNames().then(setOptions);
  }, []);
  useEffect(() => {
    if (selected?.value) {
      router.push(`/pokemon/${selected.value}`);
    } else {
      router.push(`/`);
    }
  }, [selected]);

  return (
    <Select
      options={options}
      placeholder="Search Pokémon..."
      onChange={(option) => setSelected(option)}
      isClearable
    />
  );
};

export default Search;
