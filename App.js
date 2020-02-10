function chuckNorris() {
  const url = "https://api.chucknorris.io/jokes/random";
  axios.get(url).then(response => {
    {
      console.log(
        "data decoded from JSON:",
        response.data.value,
        response.data.icon_url
      );

      const chuckHtml = `
        <p><strong>${response.data.value}</strong></p>
        <img src="${response.data.icon_url}">
        
      `;
      document.querySelector("#chuck-norris").innerHTML = chuckHtml;
    }
  });
}
