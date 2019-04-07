# Search Image and Articles 

This app is an learning project of AJAX using 3 different way to do it: 
1) XHR,
2) JQuery,
3) Fetch

## Instalation

1) Clone or download files
2) Open index.html in located in folder async-w-* [hxr | jquery | fetch]

## Prerequisits

###Create Your Accounts on Unsplash and The New York Times.
Unsplash

    Create a developer account here - https://unsplash.com/developers
    Next, create an application and you will receive an "Application ID" that you'll need to make requests

###The New York Times

    Create a developer account here - https://developer.nytimes.com/
    Create an application and you will receive an api-key

Insert the Unsplash "Application ID" in url: 'Client-ID <YOUR CLIENT-ID>'
Insert The New York Times api-key in the url:  `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<YOUR API-KEY>`

## Built With

* [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) - Async JavaScript
