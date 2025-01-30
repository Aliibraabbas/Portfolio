# Portfolio

Portfolio est un site web personnel permettant de présenter mes projets, mes compétences, et de faciliter la prise de contact avec les visiteurs. Construit avec **Next.js**, il offre une navigation fluide et une performance optimale grâce à l’utilisation des **React Server Components (RSC)**.

---

## Description du projet

Portfolio est une plateforme où je peux exposer mes réalisations professionnelles, avec des détails sur chaque projet, les technologies utilisées, les résultats obtenus, et des témoignages clients (facultatifs). Le projet inclut également des fonctionnalités de filtrage des projets par catégorie ou technologie, ainsi qu'un formulaire de contact permettant aux visiteurs de me joindre facilement.

---

## Instructions d'installation et de lancement

### Prérequis
Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine. Vous pouvez télécharger Node.js ici : https://nodejs.org/

### 1. Cloner le projet
Cloner le dépôt depuis GitHub :
```bash
git clone https://github.com/your-username/space-portfolio.git


cd portfolio
npm install
npm run dev



Voici un autre modèle de README détaillé en format de code, en respectant le plan demandé :

markdown
Copy
Edit
# Space Portfolio

Space Portfolio est un site web personnel permettant de présenter mes projets, mes compétences, et de faciliter la prise de contact avec les visiteurs. Construit avec **Next.js**, il offre une navigation fluide et une performance optimale grâce à l’utilisation des **React Server Components (RSC)**.

---

## Description du projet

Space Portfolio est une plateforme où je peux exposer mes réalisations professionnelles, avec des détails sur chaque projet, les technologies utilisées, les résultats obtenus, et des témoignages clients (facultatifs). Le projet inclut également des fonctionnalités de filtrage des projets par catégorie ou technologie, ainsi qu'un formulaire de contact permettant aux visiteurs de me joindre facilement.

---

## Instructions d'installation et de lancement

### Prérequis
Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine. Vous pouvez télécharger Node.js ici : https://nodejs.org/

### 1. Cloner le projet
Cloner le dépôt depuis GitHub :
```bash
git clone https://github.com/your-username/space-portfolio.git
2. Installer les dépendances
Accédez au répertoire du projet et installez les dépendances nécessaires :

bash
Copy
Edit
cd space-portfolio
npm install
3. Démarrer le projet en mode développement
Lancez l'application en mode développement pour voir le résultat sur votre navigateur local :

bash
Copy
Edit
npm run dev
L'application sera disponible à l'adresse : http://localhost:3000

Technologies utilisées
Ce projet utilise les technologies suivantes :

Next.js 13 : Framework React permettant le rendu côté serveur, la génération statique et l’optimisation des performances.
React : Bibliothèque JavaScript pour la construction de l’interface utilisateur.
React Server Components (RSC) : Approche pour le rendu côté serveur des composants, afin de minimiser le JavaScript envoyé au client et d'améliorer les performances.
Tailwind CSS : Framework CSS utilitaire pour une personnalisation rapide du design.
TypeScript : Langage JavaScript avec typage statique pour une meilleure sécurité du code.
Node.js : Environnement d'exécution JavaScript côté serveur.
Image Optimization : Composant Image de Next.js pour optimiser le chargement des images et améliorer la performance.
Vercel ou Netlify : Plateforme de déploiement de l’application.


Fonctionnalités implémentées
Les principales fonctionnalités de Space Portfolio incluent :

Page d'accueil : Affichage d'une vue d'ensemble des projets réalisés avec des liens vers les pages de détails.
Filtrage des projets : Permet de filtrer les projets en fonction de leur catégorie ou des technologies utilisées.
Pages de projets : Chaque projet dispose d’une page dédiée présentant sa description, les technologies utilisées, les objectifs, les résultats, et des images.
Page de contact : Formulaire permettant aux utilisateurs de m’envoyer un message.
Responsive Design : L'application est entièrement responsive et s'adapte à toutes les tailles d'écran (mobile, tablette, desktop).
Optimisation des images : Les images sont automatiquement optimisées grâce à l’utilisation du composant Image de Next.js.
Navigation fluide : Navigation simple et claire entre les différentes sections du site, avec des liens ancrés et des pages dédiées.


Choix de conception et justification de l'utilisation des RSC
Choix de conception
Le projet a été conçu pour être à la fois minimaliste et fonctionnel, avec une expérience utilisateur fluide et agréable. L’objectif est de présenter de manière claire mes projets et compétences tout en offrant une navigation simple. Le design se veut moderne, avec une interface intuitive et bien structurée.

Justification de l’utilisation des React Server Components (RSC)
Les React Server Components ont été choisis pour plusieurs raisons :

Performance améliorée : RSC permet de minimiser le JavaScript envoyé au client. Les composants sont rendus côté serveur, réduisant ainsi la charge sur le navigateur de l'utilisateur, ce qui améliore le temps de chargement de la page.

Rendu côté serveur : Grâce aux RSC, le rendu de l'interface peut être effectué directement sur le serveur, réduisant la latence et rendant l’application plus rapide et réactive.

Optimisation du rendu initial : Avec Next.js et les RSC, l'application bénéficie d'un rendu côté serveur (SSR), permettant une génération statique des pages et donc une meilleure performance au niveau du SEO.

Séparation du code côté serveur et côté client : Cette approche facilite la gestion du code, en séparant ce qui doit être rendu côté client de ce qui peut être généré côté serveur. Cela permet un contrôle plus fin sur l'expérience utilisateur et la gestion des données.