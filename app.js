const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

// Configura nunjucks para que use .html
nunjucks.configure('.', {
  autoescape: true,
  express: app
});

app.set('view engine', 'html'); 
app.use(express.static('public'));


const habilidades = [
  {
    nombre: "Frontend",
    icon: "🖼️",
    color: "text-red-500",
    items: [
      { nombre: "React", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", nivel: "★★★★☆" },
      { nombre: "Angular", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", nivel: "★★★★★" },
      { nombre: "Svelte", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg", nivel: "★★★☆☆" },
      { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", nivel: "★★★★★" },
      { nombre: "TypeScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", nivel: "★★★★★" },
      { nombre: "HTML", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", nivel: "★★★★★" },
      { nombre: "CSS", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", nivel: "★★★★☆" },
      { nombre: "Bootstrap", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", nivel: "★★★★★" },
      { nombre: "Tailwind", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", nivel: "★★★★★" }
    ]
  },
  {
    nombre: "Backend",
    icon: "⚙️",
    color: "text-blue-600",
    items: [
      { nombre: "Python", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", nivel: "★★★★★" },
      { nombre: "Java", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", nivel: "★★★★☆" },
      { nombre: "PHP", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", nivel: "★★★☆☆" },
      { nombre: "C#", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", nivel: "★★★★★" },
      { nombre: "C++", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", nivel: "★★★★☆" },
      { nombre: "C", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", nivel: "★★★★☆" },
      { nombre: "Ruby", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", nivel: "★★☆☆☆" }
    ]
  },
  {
    nombre: "Bases de Datos",
    icon: "🗃️",
    color: "text-green-600",
    items: [
      { nombre: "MySQL", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", nivel: "★★★★☆" },
      { nombre: "PostgreSQL", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", nivel: "★★★★☆" },
      { nombre: "MongoDB", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", nivel: "★★★★★" },
      { nombre: "SQL Server", icono: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", nivel: "★★★★★" },
      { nombre: "Oracle", icono: "https://media.licdn.com/dms/image/v2/D4E12AQF64SYsV08fkA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1662093619580?e=2147483647&v=beta&t=uoidKIOEIH0ZlboxixU1Lfkg5rPnYoCizMrA7P-YVQ4", nivel: "★★★☆☆" }
    ]
  },
  {
    nombre: "Control de Versiones",
    icon: "🔧",
    color: "text-purple-600",
    items: [
      { nombre: "Git", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", nivel: "★★★★★" },
      { nombre: "GitHub", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", nivel: "★★★★★" },
      { nombre: "Azure DevOps", icono: "https://logos-world.net/wp-content/uploads/2024/10/Azure-DevOps-Logo.jpg", nivel: "★★★★★" }
    ]
  },
  {
    nombre: "Otras Tecnologías",
    icon: "🛠️",
    color: "text-indigo-600",
    items: [
      { nombre: "Docker", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", nivel: "★★★★☆" },
      { nombre: "Apache", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", nivel: "★★★☆☆" },
      { nombre: "VirtualBox", icono: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png", nivel: "★★★★★" }
    ]
  }
];

const proyectos = [
  {
    nombre: "PonteFit",
    imagen: "/images/ponteFit.png", 
    descripcion: "Plataforma web para monitorizar entrenamientos, progreso físico y dieta personalizada.", 
    linkedin: "https://linkedin.com/in/victor-nievas-heredia-914225320/details/projects/urn:li:fsd_profileProject:(ACoAAFEw4OABf5xHGJc3U2oRXSELtWRaxKVUKyI,1545425928)/treasury/", 
    github: "https://github.com/VictorNievas/ponteFit", 
    url: "http://pontefitweb.onrender.com/", 
    tecnologias: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    ]
  },
  {
    nombre: "SantiagoExplorer",
    imagen: "/images/santiago.webp", 
    descripcion: "Santiago Explorer es una aplicación web interactiva para seguir y compartir tu experiencia en el Camino de Santiago, con rutas, etapas, logros, fotos y una comunidad de peregrinos.", 
    linkedin: "https://www.linkedin.com/in/victor-nievas-heredia-914225320/details/projects/urn:li:fsd_profileProject:(ACoAAFEw4OABf5xHGJc3U2oRXSELtWRaxKVUKyI,1952292645)/treasury/", 
    github: "https://github.com/VictorNievas/SantiagoExplorer", 
    url: "https://santiago-explorer.onrender.com/", 
    tecnologias: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    ]
  },
];

const experiencias = [
  {
    nombre: "Ansotec",
    imagen: "https://media.licdn.com/dms/image/v2/C4D0BAQFxVHh1jH4pmw/company-logo_200_200/company-logo_200_200/0/1631342132984?e=2147483647&v=beta&t=Ajey-KXCmN8FkHHoRq6TGVBNoI0Kcs-BtO_2o5PD98U",
    descripcion: "Desarrollador Full Stack en proyectos de desarrollo web.",
    linkedin: "https://www.linkedin.com/company/ansotec-soluciones-tecnol%C3%B3gicas-sl/posts/?feedView=all",
    tecnologias: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    ],
    url: "https://www.ansotec.com/",
    fecha: "May 2024 - Oct 2024"
  }
];

const titulaciones = [
  {
    nombre: "Título de Ingeniería Informática",
    imagen: "https://secretariageneral.ugr.es/sites/webugr/secretariageneral/public/inline-files/UGR-MARCA-01-color.svg",
    institucion: "Universidad de Granada",
    fecha: "Sep 2020 - Jun 2025",
    credencial: "https://www.ugr.es/"
  },
  {
    nombre: "Certificado de nivel B2 en Inglés",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/British_Council_logo.svg/2560px-British_Council_logo.svg.png",
    institucion: "British Council",
    fecha: "Mar 2025",
    credencial: "https://credentials.britishcouncil.org/dc609b03-1aac-488b-b269-5387c30515ea?key=90f70cef1165372ce7933f2cf780a2f0b574699462d944fcc9f583599d62c4f9#acc.EdUB7sOt"
  }
];

app.get('/', (req, res) => {
  res.render('index.html', { habilidades, proyectos , experiencias, titulaciones});
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});