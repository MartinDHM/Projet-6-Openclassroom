// /* recupération des données par l'api */
// fetch('http://localhost:5678/api/works')
//   .then(response => response.json())
//   .then(data => {
//     afficherGallery(data);
//     console.log(data[0]);
//   })

// /* fonction qui permet affiche la gallery*/
// function afficherGallery(data){
//   for(i =0 ; i < data.length ; i++)
//   {
//     const gallery = document.querySelector('.gallery');

//     const figure  = document.createElement("figure");

//     const imageElement = document.createElement("img");
//     imageElement.src = data[i].imageUrl;

//     const nomElement = document.createElement("p");
//     nomElement.innerText = data[i].title;

//     gallery.appendChild(figure)
//     figure.appendChild(imageElement)
//     figure.appendChild(nomElement)
//   }
// }
// /*recupération des catégorie des filtre de l'api */
// fetch('http://localhost:5678/api/categories')
//     .then(response => response.json())
//     .then(category => {
//       filtersBtn(category);
//       console.log(category[i]);
//     })
//     .catch(error => {
//       console.error('Une erreur s\'est produite', error);
//     });
// function filters (category){

//   category.unshift({ name: "Tous" });

//   for(i = 0; i < category.length; i++)
//   {
//     const filterbtn = document.querySelector(".filtersBtn")
//     const filter = document.createElement("button");
//     filter.innerText = category[i].name;

//     filterbtn.appendChild(filter);
//   }

// const filterBtnEvent = document.querySelectorAll(".filterBtn button");

// filterBtnEvent.forEach(button => {
//   button.addEventListener("click", function() {
//     // Efface le contenu de la galerie
//     document.querySelector(".gallery").innerHTML = '';

//     // Filtrage des projets en fonction de la catégorie sélectionnée
//     let filteredData = data.filter((item) => {
//       return item.category.name === button.textContent || button.textContent === "Tous";
//     });

//     console.log(filteredData);

//     // Utilisation des projets filtrés pour afficher la galerie mise à jour
//     genererWorks(filteredData);
//   });
// });
// }

let worksData, categoriesData;

/* recupération des données par l'api */
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    worksData = data;
    afficherGallery(data);
    console.log(data[0]);
    return fetch('http://localhost:5678/api/categories');
  })
  .then(response => response.json())
  .then(category => {
    categoriesData = category;
    filters(category);
    console.log(category[0]);
  })
  .catch(error => {
    console.error('Une erreur s\'est produite', error);
  });

/* fonction qui permet affiche la gallery */
function afficherGallery(data){
  for(i =0 ; i < data.length ; i++)
  {
    const gallery = document.querySelector('.gallery');

    const figure  = document.createElement("figure");

    const imageElement = document.createElement("img");
    imageElement.src = data[i].imageUrl;

    const nomElement = document.createElement("p");
    nomElement.innerText = data[i].title;

    gallery.appendChild(figure);
    figure.appendChild(imageElement);
    figure.appendChild(nomElement);
  }
}

function filters (category){
  category.unshift({ name: "Tous" });

  for(i = 0; i < category.length; i++)
  {
    const filterbtn = document.querySelector(".filtersBtn");
    const filter = document.createElement("button");
    filter.innerText = category[i].name;

    filterbtn.appendChild(filter);
  }

  const filterBtnEvent = document.querySelectorAll(".filtersBtn button");

  filterBtnEvent.forEach(button => {
    button.addEventListener("click", function() {
      // Efface le contenu de la galerie
      document.querySelector(".gallery").innerHTML = '';

      // Filtrage des projets en fonction de la catégorie sélectionnée
      let filteredData = worksData.filter((item) => {
        return item.category.name === button.textContent || button.textContent === "Tous";
      });

      console.log(filteredData);

      // Utilisation des projets filtrés pour afficher la galerie mise à jour
      afficherGallery(filteredData);
    });
  });
}
  
  
  

