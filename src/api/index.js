const express = require('express');
const routes = require('./routes/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'animeflv API - 👋🌎🌍🌏',
    author: 'Chris Michael',
    entries: [
      {
        'LatestAnimeAdded': 'https://animeflv-zeta.vercel.app/api/v1/LatestAnimeAdded',
        'LatestEpisodesAdded': 'https://animeflv-zeta.vercel.app/api/v1/LatestEpisodesAdded',
        'GetAnimeServers': 'https://animeflv-zeta.vercel.app/api/v1/GetAnimeServers/:id',
        'Genres': 'https://animeflv-zeta.vercel.app/api/v1/Genres/:genre/:sortBy/:page',
        'Movies': 'https://animeflv-zeta.vercel.app/api/v1/Movies/:sortBy/:page',
        'Special': 'https://animeflv-zeta.vercel.app/api/v1/Special/:sortBy/:page',
        'Ova': 'https://animeflv-zeta.vercel.app/api/v1/Ova/:sortBy/:page',
        'TV': 'https://animeflv-zeta.vercel.app/api/v1/TV/:sortBy/:page',
        'AnimeByState': 'https://animeflv-zeta.vercel.app/api/v1/AnimeByState/:state/:order/:page',
        'Search': 'https://animeflv-zeta.vercel.app/api/v1/Search/:query',
        'AnimeCharacters': 'https://animeflv-zeta.vercel.app/api/v1/AnimeCharacters/:title',
        'AnimeTrailers': 'https://animeflv-zeta.vercel.app/api/v1/AnimeTrailers/:title',
        'GetAnimeInfo': 'https://animeflv-zeta.vercel.app/api/v1/GetAnimeInfo/:id/:title',
        'DownloadLinksByEpsId': 'https://animeflv-zeta.vercel.app/api/v1/DownloadLinksByEpsId/:epsId'
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;
