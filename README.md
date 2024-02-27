<a name="readme-top" id="readme-top"></a>

**_TODO_**

- [ ] Update policy files with your tenant
- [ ] Update policy file(s) with your function app (or other external routine) configuration
- [ ] Update function app with connection and table configuration items
- [ ] Update files with your IEF Client ID
- [ ] Update files with your Proxy IEF Client ID
- [ ] Update progressive profile policy files with your AAD B2C Object ID
- [ ] Update progressive profile policy files with your AAD B2C Appliction (client) ID

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mach11co/M365CD032024">
    <img src="src/assets/img/logo-full.png" alt="MACH11 LLC Logo" width="200" height="auto">
  </a>
<br />
  <a href="https://www.communitydays.org/event/2024-02-29/knoxville-microsoft-365-community-day">
    <img src="src/assets/img/km365.jpg" alt="Knoxville M365 Community Day Logo">
  </a>

<h3 align="center">Session resources for M365 Community Days Talk: Simplify CIAM with AAD B2C</h3>

  <p align="center">
    AAD B2C Community Day Session
    <br />
    <a href="https://github.com/mach11co/M365CD032024/issues">Report Bug</a>
    ·
    <a href="https://github.com/mach11co/M365CD032024/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#directories">Directories</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

These are the resources for the [Knoxville M365 Community Day](https://communitydays.org/event/2024-02-29/knoxville-microsoft-365-community-day) Session on Simplifying CIAM with AAD B2C

[![Presentation Screen Shot][presentation-screenshot]](https://github.com/mach11co/M365CD032024/tree/main/presentation/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Azure][Azure.com]][Azure-url]
- [![HTML5][html5.com]][HTML5-url]
- [![Node.js][nodedotjs.com]][nodedotjs-url]
- [![Tailwind][tailwindcss.com]][Tailwind-url]
- [![JavaScript][JavaScript.com]][JavaScript-url]
- [![XML][xml.com]][XML-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Directories

```
|-M365CD032024
| |-custom-pages
| | |-css
| | | |-style.css
| | |-images
| | | |-image.jpg
| | |-unified.html
| |-custom-policy
| | |-ProgressivProfilePolicy
| | | |-B2C_1A_ProgressiveProfileTrustFrameworkBase.xml
| | | |-ProgressiveProfileSignUpOrSignin.xml
| | | |-ProgressiveProfileTrustFrameworkExtensions.xml
| | |-SignUpOrSignin.xml
| | |-TrustFrameworkBase.xml
| | |-TrustFrameworkExtensions.xml
| |-function-app
| | |-AddUserToTableStorage.js
| |-presentation
| | |-Simplify Customer Identity Access Management (CIAM).pptx

```

### custom-pages

- source files for the custom sign in/sing up unified page layout

### custom-policy

- custom policies for the Identity Experience Framework
- Marketing opt-in policy
- Coffee preference progressive profile attribute

### function-app

- funciton app Javascript code that writes markeing opt-in selection to table storage

### presentation

- the session presentation

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## GitFlow

Desired changes to the repo should be done with a feature branch and an associated PR:

1. Clone the Project
2. Create your Feature Branch (e.g. `git checkout -b feature/AmazingNewFeature`)
3. Commit your Changes (e.g. `git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (e.g. `git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

MACH11, LLC - info@mach11.co

Project Link: [https://github.com/mach11co/M365CD032024](https://github.com/mach11co/M365CD032024)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[presentation-screenshot]: /src/assets/img/presentation-screenshot.png
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&labelColor=gray
[Tailwind-url]: https://tailwindcss.com
[JavaScript.com]: https://img.shields.io/badge/javascript-blue?logo=javascript
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
[XML.com]: https://img.shields.io/badge/W3C-XML-005a9c
[XML-url]: https://www.w3.org/XML/
[nodedotjs.com]: https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white
[nodedotjs-url]: https://nodejs.org/en
[Azure.com]: https://img.shields.io/badge/Microsoft-Azure-0078D4?logo=microsoftazure&logoColor=0078D4&labelColor=ccc
[Azure-url]: https://portal.azure.com
[HTML5.com]: https://img.shields.io/badge/WHATWG-HTML5-E34F26?logo=html5
[HTML5-url]: https://html.spec.whatwg.org/
