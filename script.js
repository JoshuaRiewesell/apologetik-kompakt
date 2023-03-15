function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }

  const navbar = document.querySelector('.nav');
  const content = document.getElementById('content');

  navbar.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
      const url = event.target.dataset.url;
      //content.setAttribute('src', url);
      //$("#content").load(document.URL + " #content");
      content.innerHTML = '<zero-md src="' + url + '"></zero-md>';
      //content.setAttribute('w3-include-html', url);
      //includeHTML();
    }
  });