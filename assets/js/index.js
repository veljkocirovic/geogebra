var consts = {
  viewsPath: "views/",
  partialsPath: "views/partials/",
  assetsPath: "assets/"
};

app.loadPartials([
  {
    id: "#nav",
    path: consts.partialsPath + "navigation.partial.html",
    script: consts.assetsPath + "js/navigation.js"
  },
  {
    id: "#footer",
    path: consts.partialsPath + "footer.partial.html",
    script: consts.assetsPath + "js/footer.js"
  }
]);

app.addStates([
  {
    name: "home",
    path: consts.viewsPath + "home.html",
    title: "GeoGebra Centar Beograd::Početna",
    script: consts.assetsPath + "js/home.js"
  },
  {
    name: "activities",
    path: consts.viewsPath + "activities.html",
    title: "GeoGebra Centar Beograd::Aktivnosti",
    script: consts.assetsPath + "js/activities.js"
  },
  {
    name: "members",
    path: consts.viewsPath + "members.html",
    title: "GeoGebra Centar Beograd::Članovi",
    script: consts.assetsPath + "js/members.js"
  },
  {
    name: "materials",
    path: consts.viewsPath + "materials.html",
    title: "GeoGebra Centar Beograd::Materijali",
    script: consts.assetsPath + "js/materials.js"
  },
  {
    name: "contact",
    path: consts.viewsPath + "contact.html",
    title: "GeoGebra Centar Beograd::Kontakt",
    script: consts.assetsPath + "js/contact.js"
  },
  {
    name: "news",
    path: consts.viewsPath + "news.html",
    title: "GeoGebra Centar Beograd::Novosti",
    script: consts.assetsPath + "js/news.js"
  },
  {
    name: "labors",
    path: consts.viewsPath + "labors.html",
    title: "GeoGebra Centar Beograd::Objavljeni i prezentovani radovi",
    script: consts.assetsPath + "js/labors.js"
  },
  {
    name: "courses",
    path: consts.viewsPath + "courses.html",
    title: "GeoGebra Centar Beograd::Kursevi",
    script: consts.assetsPath + "js/courses.js"
  }
]);

var stateToLoad = location.hash.substr(1) || "home";

app.loadState(stateToLoad);
