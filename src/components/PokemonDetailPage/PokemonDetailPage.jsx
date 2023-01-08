import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from './PokemonDetailPage.module.scss';

export const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState(null);
  const url = window.location.href;
  const name = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ maxWidth: "400px", margin: "0 auto" }}>
      <CardContent>
        <img
        className={styles.detailPageImage}
          style={{ width: "100%", aspectRatio: 1, padding: "4px" }}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <Typography gutterBottom variant="h5" component="h2">
          {pokemon.name}
        </Typography>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
