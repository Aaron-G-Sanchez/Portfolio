let resumeButton = document.querySelector('.show-resume')

resumeButton.addEventListener('click', (e) => {
  e.preventDefault()
  window.open(
    'https://docs.google.com/document/d/1jG9x4AWfc-yWmlaXVUjVm3s2txJSO6YqmVe9m-rYV4c/edit?usp=sharing'
  )
})
