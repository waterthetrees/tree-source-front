export default [
  {
    country: "Austria",
    city: "Vienna",
    short: "Vienna",
    long: "Vienna",
    id: "vienna",
    id_city_name: "vienna",
    primary: "vienna",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://www.data.gv.at/katalog/dataset/c91a4635-8b7d-43fe-9b27-d95dec8392a7",
    srs: null,
    brokenDownload: false,
    download:
      "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:BAUMKATOGD&srsName=EPSG:4326&outputFormat=csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "BAUM_ID",
      dbh: (x) => (x.STAMMUNGFANG / 3.14159) * 2,
      height: "BAUMHOEHE",
      scientific: "GATTUNG_ART",
      crown: "KRONENDURCHMESSER",
    },
  },
  {
    country: "Austria",
    city: "Linz",
    short: "Linz",
    long: "City of Linz",
    id: "linz",
    id_city_name: "linz",
    primary: "linz",
    center: null,
    latitude: null,
    longitude: null,
    info: "https://www.data.gv.at/katalog/dataset/baumkataster",
    srs: null,
    brokenDownload: true,
    download:
      "http://data.linz.gv.at/katalog/umwelt/baumkataster/2020/FME_BaumdatenBearbeitet_OGD_20200225.csv",
    format: "csv",
    filename: null,
    gdal_options: null,
    license: null,
    email: null,
    contact: null,
    crosswalk: {
      ref: "BaumNr",
      genus: "Gattung",
      species: (x) => (x.Art !== "0" ? x.Art : undefined),
      common: "NameDeutsch",
      height: "Hoehe",
      crown: "Schirmdurchmesser",
      dbh: "Stammumfang",
    },
  },
];