let myData = new XMLHttpRequest();
myData.onload = function () {
  if (this.status === 200 && this.readyState === 4) {
    let mainData = JSON.parse(myData.responseText);

    updateData = ["Science", "Science", "Education", "Science", "Art"];
    mainData.forEach((element,i) => {
        element.category = updateData[i];
    });
    
    console.log(mainData);

    let divArticle = document.createElement("div");
divArticle.id="article"
    for (let i = 0; i < mainData.length; i++) {
      let title = document.createElement("h2");
      let des = document.createElement("p");
      let author = document.createElement("p");
      let category = document.createElement("p");
      title.innerHTML = mainData[i].title;
      des.innerHTML = mainData[i].body;
      author.innerHTML = `author: ${mainData[i].author}`;
      category.innerHTML = `category: ${mainData[i].category}`;
      divArticle.appendChild(title);
      divArticle.appendChild(des);
      divArticle.appendChild(author);
      divArticle.appendChild(category);
      document.body.appendChild(divArticle);
    }
    console.log("JSON Object Content Here");
  }
  console.log("Data Loaded");
};
myData.open("get", "article.json");
myData.send();
