document.addEventListener("DOMContentLoaded", () => {
    let g = document.querySelector('form')
    // console.log(g);
    g.addEventListener('submit', (e) => {
      e.preventDefault()
      addTask(e.target.task.value);
    
    })
  });

  function addTask(e){
    let p = document.createElement('p')
    p.textContent = e
    document.querySelector('#list').appendChild(p)
    
    
  }
