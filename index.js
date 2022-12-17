console.log('hello')

const projects = [
  {
    name: 'Sines Ear Trainers'
  },
  {
    name: 'BEERBOOK'
  },
  {
    name: 'Hogwarts Admin System'
  }
]

let projectsDisplay = document.querySelector('.projects-wrapper')

projects.forEach((project) => {
  let div = document.createElement('div')
  let heading = document.createElement('h2')
  projectsDisplay.appendChild(div)
  div.appendChild(heading)
  heading.innerHTML = `${project.name}`
})
