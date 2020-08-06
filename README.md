Call & Collect Service from Dublin City Libraries
======


Overview
------

The [Call & Collect](https://stefcruz.github.io/ci_milestone1/index.html) is an existing service offered by the Dublin City Libraries in response to the pandemic as part of the phased re-opening of the libraries. As this service did not have a dedicated website, I decided to create one for my first milestone project. 

This website's main purpose is to promote the service, explanining how library users can avail of this new initiative and which branches have taken part of the service. 

Library users can check if a particular book is available on the shelf in one of the 10 branches they want to collect from, and then contact the branch by phone or email or ask-a-librarian to hold the book for them. Library staff will then organise a date and time for the library user to go to their preferred library for collection.  

Table of Contents
------

- [UX](#ux)
    - [User stories](#user-stories)
- [Wireframes](#wireframes)
    - [Home page](#home-page)
    - [How it Works page](#how-it-works-page)
    - [Library Catalogue page](#library-catalogue-page)
    - [Find your Local Library page](#find-your-local-library-page)
- [Technologies](#technologies)
    - [Programming Languages](#programming-languages)
    - [Other Tools](#other-tools)
- [Testing](#testing)
    - [W3C HTML Validator](#w3c-html-validator)
    - [W3C CSS Validator](#w3c-css-validator)
    - [Browser and Device Testing](#browser-and-device-testing)
    - [Testing plan](#testing-plan)
- [Deployment](#deployment)
- [Credits](#credits)
    - [Content](#content)
    - [Images](#images)
- [Acknowledgements](#acknowledgements)
    - [Design](#design)
    - [Code](#code)
 
UX
------

#### User stories

As a library user...

 - I want to know how the Call & Collect service works so that I can avail of the service.
 - I want to see the library catalogue online so that I can pick the book I’m interested in.
 - I want to know which number I should call so that I can arrange the collection.
 - I want to know which libraries are near me and the working hours so that I can arrange the collection.  


 
Wireframes
------

#### Home page

![Home page](https://github.com/stefcruz/ci_milestone1/blob/master/assets/images/readme-images/home-page.png)

#### How It Works page

![How it works page](https://github.com/stefcruz/ci_milestone1/blob/master/assets/images/readme-images/how-it-works-page.png)

#### Library Catalogue page

![Library Catalogue page](https://github.com/stefcruz/ci_milestone1/blob/master/assets/images/readme-images/catalogue-page.png)


#### Find Your Local Library page

![Find your Local Library page](https://github.com/stefcruz/ci_milestone1/blob/master/assets/images/readme-images/local-library-page.png)


#### Footer

![Footer](https://github.com/stefcruz/ci_milestone1/blob/master/assets/images/readme-images/footer.png)  


 
Technologies
------

This project goes above and beyond the two foundation programming languages required for the Milestone 1, which are HTML and CSS. It also utilised the framework Bootstrap and the preprocessor SASS. 

#### Programming Languages

- HTML5  
Main language used across the website

- CSS3  
Page style

- Bootstrap v4.5  
This project used Bootstrap elements such as navbar, grid, cards, etc.

- SASS  
Preprocessor used to make CSS more fun and powerful

- JavaScript  
Some front end functionalities such as smooth scroll, search bar, etc.


#### Other Tools

- GitHub  
Used to store this project's source code

- VS Code  
Main IDE

- Balsamiq  
Used to create wireframes for the website

- [AOS Animation](https://michalsnik.github.io/aos/)  
Animate on scroll library


 
Testing
------


#### W3C HTML Validator

The HTML code passed the W3C validator without errors. 

![Footer](https://github.com/stefcruz/ci_milestone1/blob/master/assets/images/readme-images/w3c-markup-validator.png)

#### W3C CSS Validator

Likewise, the CSS code passed the W3C CSS validator without errors.

![Footer](https://github.com/stefcruz/ci_milestone1/blob/master/assets/images/readme-images/w3c-css-validator.png)

#### Browser and Device Testing

|Browser|OS|Device|Compatibility|
|---|---|---|---|
|Chrome|Windows|PC|Excellent|
|Firefox|Windows|PC|Excellent|
|Microsoft Edge|Windows|PC|Good - smooth scroll to top not working when clicking on arrow up |
|Internet Explorer|Windows|PC|Good - smooth scroll to top not working when clicking on arrow up, arrow up flickering, library images streched|
|Chrome|Linux|PC|Excellent|
|Firefox|Linux|PC|Excellent|
|Chrome|Mac|PC|Excellent|
|Firefox|Mac|PC|Excellent|
|Safari|Mac|PC|Good - smooth scroll to top not working when clicking on arrow up|
|Chrome|Samsung S8 Android 9|Mobile|Excellent|

#### Testing plan

- [X] Links on navbar
- [X] Click at arrow on home page
- [X] Perform search on library catalogue pressing enter
- [X] Perform search on library catalogue clicking on search icon
- [X] Click on 'Advanced Search'
- [X] Select branches on dropdown
- [X] Click on 'View Larger Map'
- [X] Links on footer
- [X] Social media links on footer
- [X] Click arrow up
- [X] Navbar toggle - check links and ensure it is collapsing after click  

 
Deployment
------

This project's repository is hosted on GitHub and was coded using the Visual Studio Code IDE. The following extensions were enabled to make the work easier:

- Live Sass Compiler 
- SCSS Formatter
- GitHub Pull Requests and Issues
- Bootstrap 4 CDN Snippet

A clone of this repository was made locally, and the changes were deployed directly in the master branch. The commands used to push the changes were ```git add .```, ```git commit -m "message"``` and ```git push```. All the commits can be clearly identified by a concise and meaningful message. The deployment consisted of publishing the GitHub Page in this repo's Settings > GitHub Pages. The link is https://stefcruz.github.io/ci_milestone1/.


Credits
------

#### Content

* [Call & Collect Service launch](http://www.dublincity.ie/dublin-city-libraries-launches-new-%E2%80%98call-and-collect%E2%80%99-service)
* [FAQ Call & Collect Service](https://www.dublincity.ie/story/call-and-collect)
* [Libraries Ireland](https://www.librariesireland.ie/)

#### Images

* [Unplash](https://unsplash.com/)  

 
Acknowledgements
------

#### Design

* [Leap Bootstrap Template](https://leap.mediumra.re/) 
* [Tavi Bakery](https://www.tavi.pt/) 

#### Code

Below are the pieces of code which help creating this project. The references were made throughout the code as well.

* [Solution to fixed top navbar stop covering the content underneath](http://nicolasgallagher.com/jump-links-and-viewport-positioning/)
* [Animation up and down arrow hero image](https://stackoverflow.com/questions/59135939/how-to-make-an-icon-move-up-and-down-with-css-animation)
* [Cards on How It Works page](https://getbootstrap.com/docs/4.5/examples/carousel/)
* [Google Maps](http://www.dublincity.ie/main-menu-services-recreation-culture-dublin-city-public-libraries-and-archive-locations-hours-3)
* [Idea of arrow to scroll to top](https://www.tavi.pt/)
* [Search box section](https://www.librariesireland.ie/)

JS and jQuery Scripts

* [Smooth scroll on all links](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll)
* [Navbar colour change on scroll](https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling)
* [Hide and show content based on drop down selection](https://stackoverflow.com/questions/12684677/how-to-hide-and-show-content-based-on-drop-down-selection)
* [Script scroll to top button](https://www.youtube.com/watch?v=Pd71ZZeIhaI )
* [Search box script](https://www.librariesireland.ie/)
