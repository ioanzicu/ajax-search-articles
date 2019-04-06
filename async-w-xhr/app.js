(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        const imgRequest = new XMLHttpRequest();
        imgRequest.onload = addImage;
        imgRequest.onerror = function (err) {
          requestsError(err, 'image');
        };
        imgRequest.open('GET',`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        imgRequest.setRequestHeader('Authorization','Client-ID <your client>');
        imgRequest.send();

        function addImage(){
          let htmlContent = '';
          const data = JSON.parse(this.responseText);

          if (data && data.results && data.results[0]) {
            const firstImage = data.results[0];
            htmlContent = `<figure>
              <img src="${firstImage.urls.regular} alt="${searchedForText}">
              <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`;
          } else {
            htmlContent = '<div class="error-no-image">No images available</div>';
          }

          responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        }


        const articleRequest = new XMLHttpRequest();
        articleRequest.onload = addArticles;
        articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<your-key>`);
        articleRequest.send();

        function addArticles () {
          let htmlContent = '';
          const data = JSON.parse(this.responseText);

          if(data && data.response && data.response.docs.length > 1) {
            htmlContent = '<ul>' + data.response.docs.map(article => `<li class="article">
                    <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
                    <p>${article.snippet}</p>
                </li>`
            ).join('') + '<ul>';
          } else {
            htmlContent = '<div clss="error-no-article">No articles available</div>';
          }

          responseContainer.insertAdjacentHTML('beforeend', htmlContent);
        }
    });
})();
