const links = {
  github: 'emillyperin',
  youtube: 'UCXoxJvNNk0o8XXE2Roxqzlw',
  facebook: 'emillyperin5',
  instagram: 'emillyperin',
  twitter: 'EmillyPerin'
}

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${links[social]}` //usar crase em vez de aspas quando no meio do texto tiver uma classe ou atributo
  }
}

changeLinks()

function getProfile() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    //then: forma comprimida da function
    .then(response => response.json()) //pega o arquivo da url e transforma em json
    .then(data => {
      //data é onde está guardado o arquivo JSON agora
      //ID do campo no html.textContent que fz a substituição = procurar no JSON, local data.name
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userlogin.textContent = data.login
    })
}

getProfile()
