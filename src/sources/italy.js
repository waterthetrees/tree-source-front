export default [
  {
    country: "Italy",
    city: "Bologna",
    short: "Bologna",
    long: "Comune di Bologna",
    id: "bologna_it",
    id_city_name: "bologna_it",
    primary: "bologna_it",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://opendata.comune.bologna.it/explore/dataset/alberi-manutenzioni/information/?disjunctive.classe&disjunctive.cl_h&disjunctive.dimora&disjunctive.d_edif",
    srs: null,
    brokenDownload: true,
    brokenNotes: "Data has Specie arborea field but no common field",
    download: "https://opendata.comune.bologna.it/explore/dataset/alberi-manutenzioni/download/?format=geojson&timezone=Europe/Rome&lang=it",
    format: "geojson",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      scientific: "Specie arborea",
      height: "Classe di altezza",
      updated: "Data ultimo aggiornamento",
      planted: "Data Impianto",
    },
  },
  {
    country: "Italy",
    city: "Villa_Manin",
    short: "Villa_Manin",
    long: "Villa_Manin",
    id: "villa_manin_it",
    id_city_name: "villa_manin_it",
    primary: "villa_manin_it",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://www.dati.friuliveneziagiulia.it/dataset/Alberi-di-Villa-Manin/uqpq-dr8x",
    srs: null,
    brokenDownload: false,
    download:
      "https://www.dati.friuliveneziagiulia.it/api/views/uqpq-dr8x/rows.csv?accessType=DOWNLOAD",
    format: null,
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      location: "dove",
      scientific: "specie",
      family: "familia",
      updated: "data rilievo",
    },
  },
];