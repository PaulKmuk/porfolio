import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaShoppingCart, FaCashRegister, FaNewspaper, FaCalendarAlt, FaFilter } from "react-icons/fa";
import { MdLogin, MdWeb, MdPhoto } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import htmlIcon from "./img/icons/html_icon.png"
import cssIcon from "./img/icons/css_icon.png"
import javascriptIcon from "./img/icons/javascript_icon.png"
import reactIcon from "./img/icons/react_icon.png"
import tailwindIcon from "./img/icons/tailwind_icon.png"
import nodeIcon from "./img/icons/node_icon.png"
import gitIcon from "./img/icons/git_icon.png"
import mysqlIcon from "./img/icons/mysql_icon.png"
import reduxIcon from "./img/icons/redux_icon.png"
import reactRouterIcon from "./img/icons/react_router_icon.png"


import { projekt1_1, projekt1_2, projekt1_3, projekt1_4, projekt1_5, projekt1_responsive1, projekt1_responsive2, projekt1_responsive3, } from "./img/projects/project1/index"

import { projekt3_1, projekt3_2, projekt3_3, projekt3_4, projekt3_5, projekt3_responsive1, projekt3_responsive2, projekt3_responsive3 } from "./img/projects/project3/index"

import projekt2 from "./img/projects/project2/projekt2.PNG"
import projekt2_shop from "./img/projects/project2/projekt2_2.PNG"
import projekt2_box from "./img/projects/project2/projekt2_3.PNG"
import projekt2_blog from "./img/projects/project2/projekt2_4.PNG"
import projekt2_responsive1 from "./img/projects/project2/projekt2_responsive.PNG"
import projekt2_responsive2 from "./img/projects/project2/projekt2_responsive2.PNG"
import projekt2_responsive3 from "./img/projects/project2/projekt2_responsive3.PNG"

import projekt3 from "./img/projects/project3/projekt3.PNG"

export const icons = [
   {
      label: "GitHub",
      icon: FaGithub,
      link: "https://github.com/PaulKmuk",
   },
   {
      label: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/pawe%C5%82-kmuk-7907692a8/",
   },
   {
      label: "Facebook",
      icon: FaFacebookSquare,
      link: "https://www.facebook.com/profile.php?id=100002062328910",
   },
   {
      label: "GitHub",
      icon: FaInstagramSquare,
      link: "https://www.instagram.com/kmukpawel/",
   },
]

export const iconsTechnology = [
   {
      label: "HTML",
      icon: htmlIcon,
   },
   {
      label: "CSS",
      icon: cssIcon,
   },
   {
      label: "JavaScript",
      icon: javascriptIcon,
   },
   {
      label: "React.js",
      icon: reactIcon,
   },
   {
      label: "Tailwind",
      icon: tailwindIcon,
   },
   {
      label: "git",
      icon: gitIcon,
   },
   {
      label: "Node.js",
      icon: nodeIcon,
   },
   {
      label: "MySQL",
      icon: mysqlIcon,
   },
]

export const projects = [
   {
      id: 1,
      name: "Football Manager",
      img: projekt1_2,
      title: "Aplikacja dla trenerów piłkarskich",
      technology: [
         { label: "React.js", img: reactIcon },
         { label: "Tailwind", img: tailwindIcon },
         { label: "React Router", img: reactRouterIcon },
         { label: "Node.js", img: nodeIcon },
         { label: "MySQL", img: mysqlIcon },
      ],
      description : '"Football Manager" to kompleksowe narzędzie przeznaczone dla trenerów do zarządzania swoimi zawodnikami oraz organizacją treningami i meczami. Frontend został zbudowana przy użyciu React.js oraz biblioteki CSS, Tailwind. Aplikacja umożliwiając efektywne planowanie, śledzenie oraz analizę działań związanych z treningami i meczami sportowymi. Backend napisany jest w Node.js/Express, który obsługuje zapytania i interakcje z bazą danych MySQL. Biblioteka Axios umożliwia komunikacja między frontendem a backendem poprzez REST API',
      paragraphs: [
         {
            title: "Kalendarz",
            icon: FaCalendarAlt,
            text: "W aplikacji znajduje się interaktywny kalendarz, który umożliwia planowanie treningów i meczów. Cała funkcjonalność została zaimplementowana przy użyciu czystego JavaScriptu, bez korzystania z zewnętrznych bibliotek.",
            img: projekt1_1
         },
         {
            title: "Logowanie/Rejestracja",
            icon: MdLogin,
            text: "Projekt posiada system logowania oparty na kontekście w React, polączony z bazą danych. Zapewnia to sprawną komunikację między komponentami, co umożliwia efektywne zarządzanie stanem aplikacji. Wykorzystując useContext, użytkownicy mogą łatwo autoryzować się i uzyskiwać dostęp do funkcji oraz danych swojego konta w aplikacji.",
            img: projekt1_5
         },
         {
            title: "Baza danych",
            icon: SiMysql,
            text: "Aplikacja wykorzystuje bazę danych MySQL do przechowywania wszystkich informacji, takich jak dane zawodników, plan treningów, czy harmonogram meczów.",
            img: projekt1_3
         },
      ],
      responsive: true,
      responsiveImg: [projekt1_responsive1, projekt1_responsive2, projekt1_responsive3],
      linkGitHub: "https://github.com/PaulKmuk/footballManager",
      linkDemo: null
   },
   {
      id: 2,
      name: "Furniture",
      img: projekt2,
      title: "Sklep internetowy z meblami",
      technology: [
         { label: "React.js", img: reactIcon },
         { label: "Tailwind", img: tailwindIcon },
         { label: "Redux", img: reduxIcon },
         { label: "React Router", img: reactRouterIcon },
      ],
      description : '"Furniture" to strona internetowa firmy z meblami wraz z sklepem internetowy, który umożliwia użytkownikom łatwe i wygodne zakupy mebli online. Aplikacja została stworzona przy użyciu technologii React.js i wykorzystuje framework CSS, Tailwind CSS, dla responsywnego i estetycznego interfejsu użytkownika, oraz koszykiem zakupupowym umoieszczonym w stanie aplikacji zarządzanym za pomąca biblioteki Readux.',
      paragraphs: [
         {
            title: "Sklep online",
            icon: FaCashRegister,
            text: "Strona prezentuje liste mebli do wyboru z możliwością kilku filtrów które ułatwiają obsługę. Każdy produkt na stronie posiada swoje zdjęcie, opis, cena oraz przycisk z możliwością dodania do koszyka.",
            img: projekt2_shop
         },
         {
            title: "Koszyk zakupów",
            icon: FaShoppingCart,
            text: "Użytkownicy mogą przeglądać zawartość swojego koszyka w dowolnym momencie. Każdy produkt w koszyku jest przedstawiony z jego zdjęciem, nazwą, ceną i ilością. Aplikacja ma możliwość zwiększania lub zmniejszania ilości produktów.",
            img: projekt2_box
         },
         {
            title: "Blog",
            icon: FaNewspaper,
            text: "Dodatkową funkcją aplikacji jest możliwość prowadzenia blogu z własnymi artykułami sprzedażowymi.",
            img: projekt2_blog
         },
      ],
      responsive: true,
      responsiveImg: [projekt2_responsive1, projekt2_responsive2, projekt2_responsive3],
      linkGitHub: "https://github.com/PaulKmuk/furniture",
      linkDemo: "https://precious-rugelach-16efa9.netlify.app"
   },
   {
      id: 3,
      name: "Properties",
      img: projekt3_5,
      title: "Strona internetowa biura nieruchomości ",
      technology: [
         { label: "React.js", img: reactIcon },
         { label: "Tailwind", img: tailwindIcon },
         { label: "React Router", img: reactRouterIcon },
      ],
      description : '"Properties" to strona internetowa biura nieruchomości umożliwiająca łatwe przeglądanie i zakup nieruchomości. Aplikacja została stworzona przy użyciu technologii React.js, wykorzystując framework CSS, Tailwind CSS, dla responsywnego i estetycznego interfejsu użytkownika. Dodatkowo, aplikacja korzysta z React Router do płynnej nawigacji między stronami.',
      paragraphs: [
         {
            title: "Strona internetowa",
            icon: MdWeb,
            text: "Klasyczna strona firmy, która zajmuję się sprzedażą nieruchomości.",
            img: projekt3_2
         },
         {
            title: "Filtr wyszukiwania",
            icon: FaFilter,
            text: "W aplikacji znajduje się zróżnicowana lista nieruchomości, a prosty i intuicyjny filtr umożliwia łatwe wyszukiwanie, dostosowane do różnych preferencji.",
            img: projekt3_3
         },
         {
            title: "Galeria zdjęć",
            icon: MdPhoto,
            text: "Aplikacja zapewnia pełen podgląd każdej nieruchomości, w której znajduje się szczegółowy opisu oraz krótka galeria zdjęć. Na końcu każdej strony możemy znaleźć kontakt do odpowiedniego agenta i możliwość wysłania wiadomości lub zapytania.",
            img: projekt3_4
         },
      ],
      responsive: true,
      responsiveImg: [projekt3_responsive1, projekt3_responsive2, projekt3_responsive3],
      linkGitHub: "https://github.com/PaulKmuk/properties",
      linkDemo: "https://stupendous-cuchufli-ae1317.netlify.app"
   },
]

export const linksNavbar = [
   {
      label: "Home",
      path: "/#"
   },
   {
      label: "O mnie",
      path: "/#o-mnie"
   },
   {
      label: "Technologie",
      path: "/#technologie"
   },
   {
      label: "Projekty",
      path: "/#projekty"
   },
   {
      label: "Kontakt",
      path: "/#kontakt"
   },
]



