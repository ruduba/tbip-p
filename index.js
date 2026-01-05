function fetchHtml(fileName) {
  fetch(fileName)
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    document.body.innerHTML = html     
  });
}
