console.log('hello')

const projects = [
  {
    name: 'Sines Ear Trainer',
    description:
      'An ear training game geared towards assisting audio engineers and music students in training their most important assets: their ears.',
    link: 'https://github.com/Aaron-G-Sanchez/SINES-EAR-TRAINER'
  },
  {
    name: 'BEERBOOK',
    description:
      'A full-stack PERN application that allows users to track and record their favorite brews.',
    link: 'https://github.com/Aaron-G-Sanchez/BeerBook-Frontend'
  },
  {
    name: 'Hogwarts Admin System',
    description:
      'A full-stack PERN application aimed towards helping the great Professor Albus Dumbledore in keeping track of his great many students.',
    link: 'https://github.com/EddieYuabov/Hogwarts_frontend'
  }
]

let projectsDisplay = document.querySelector('.projects-wrapper')

projects.forEach((project) => {
  let div = document.createElement('div')
  let heading = document.createElement('h2')
  let descriptionContainer = document.createElement('div')
  let description = document.createElement('p')

  projectsDisplay.appendChild(div)
  div.className = 'project-container'
  div.appendChild(heading)

  div.addEventListener('click', (e) => {
    e.preventDefault()
    window.open(`${project.link}`)
  })

  div.appendChild(descriptionContainer)
  descriptionContainer.appendChild(description)
  descriptionContainer.className = 'project-description'
  heading.innerHTML = `${project.name}`
  description.innerHTML = `${project.description}`
})
