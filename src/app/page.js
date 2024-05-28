'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import ComicCard from '../components/ComicCard';
import ComicModal from '../components/ComicModal';
import CryptoJS from 'crypto-js';
import ComicSkeleton from '../components/ComicSkeleton';

const publicKey = '55fac8faea503d43fc8c777f381767c9';
const privateKey = '6d93b2d04e1655a61ab7eef2b5c29ef8368de76f';

export default function Home() {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      const ts = new Date().getTime();
      const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
      const url = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await axios.get(url);
        setComics(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchComics();

  }, []);

  useEffect(() => {
    setSelectedComic(null);
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-8 text-center">Marvel Comics</h1>
      <div className="grid-view">
        {loading ? (
          // Renderizar el esqueleto mientras se carga
          Array.from({ length: 10 }).map((_, index) => (
            <ComicSkeleton key={index} />
          ))
        ) : (
          // Renderizar las tarjetas de cómics cuando los datos estén disponibles
          comics.map(comic => (
            <ComicCard
              key={comic.id}
              comic={comic}
              onClick={() => setSelectedComic(comic)}
            />
          ))
        )}
      </div>
      {selectedComic && (
        <ComicModal
          comic={selectedComic}
          onClose={() => setSelectedComic(null)}
        />
      )}
    </div>
  );
}