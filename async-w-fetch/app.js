(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
          headers: {
            'Authorization': 'Client-ID <YOUR CLIENT-ID>'
          },
        }).then(response => response.json())
        .then(addImage)
        .catch(err => requestError(err, 'image'));

        fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<YOUR API_KEY>`)
        .then(response => response.json())
        .then(addArticles)
        .catch(err => requestError(err, 'articles'));

        function addImage(images){
          let htmlContent = '';
          const firstImage = images.results[0];

          if (firstImage) {
            htmlContent = `<figure>
              <img src="${firstImage.urls.regular} alt="${searchedForText}">
              <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`;
          } else {
            htmlContent = '<div class="error-no-image">No images available</div>';
          }

          responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        }

        function addArticles(articles) {
          let htmlContent = '';

          if(articles && articles.response && articles.response.docs.length > 1) {
            htmlContent = '<ul>' + articles.response.docs.map(article => `<li class="article">
                    <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
                    <p>${article.snippet}</p>
                </li>`
            ).join('') + '<ul>';
          } else {
            htmlContent = '<div clss="error-no-article">No articles available</div>';
          }

          responseContainer.insertAdjacentHTML('beforeend', htmlContent);
        }

        function requestError(e, part){
          console.log(e);
          responseContainer.insertAdjacentHTML(
            'beforeend',
            `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
        }
    });
})();
