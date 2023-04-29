const loedData = ()=>{
    const url = (' https://openapi.programming-hero.com/api/ai/tools');
    fetch(url)
    .then(response => response.json())
    .then(data =>displayUserData(data.data.tools))

 };

 const displayUserData = users=>{
        const userDataContainer = document.getElementById('user-container');
    users.forEach(user => {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
   
   
        userDiv.innerHTML =`
        <div class="card h-100">
        <img src="${user.image}" class="card-img-top px-3 rounded-5 py-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">features</h5>
          <ol class="">
            ${user.features.map(feature => `<li>${feature}</li>`).join('')}
        </ol>
        </div>
      </div>
    </div>
        `
        userDataContainer.appendChild(userDiv);
    });
 }

  
 

 loedData();
