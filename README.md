# Search Image and Articles 

This app is an learning project of AJAX using 3 different way to do it: 
1) XHR,
2) JQuery,
3) Fetch

## Instalation

1) Clone or download files
2) Open index.html in located in folder async-w-* [hxr | jquery | fetch]

## Prerequisits

### Create Your Accounts on Unsplash and The New York Times.

* Unsplash

    Create a developer account here - https://unsplash.com/developers <br />
    Next, create an application and you will receive an "Application ID" that you'll need to make requests

* The New York Times

    Create a developer account here - https://developer.nytimes.com/ <br />
    Create an application and you will receive an api-key

Insert the Unsplash "Application ID" in url: <b>'Client-ID <YOUR CLIENT-ID>'</b>
Insert The New York Times api-key in the url:  `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<b><YOUR API-KEY></b>`

## Built With

* [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) - Async JavaScript
