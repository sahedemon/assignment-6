const loedData = (isSlice)=>{
    const url = (' https://openapi.programming-hero.com/api/ai/tools');
    fetch(url)
    .then(response => response.json())
    .then(data =>displayUserData(data.data.tools,isSlice))

 };

 const displayUserData = (users,isSlice)=>{
        const userDataContainer = document.getElementById('user-container');
        userDataContainer.textContent = '';
        //display data 6 only
        const showAll = document.getElementById('Show-all');
        if( isSlice && users.length > 6 ){
            users = users.slice(0,6);
            showAll.classList.remove('d-none')
        }
        else{
            showAll.classList.add('d-none');
        }
       
    users.forEach(user => {
       console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
   
   
        userDiv.innerHTML =`
        <div class="card h-100">
        <img src="${user.image}" class="card-img-top px-3 rounded-5 py-3" alt="...">
        <div class="card-body">
        <h5 class="card-title px-2">features</h5>
        <ol class="">
        ${user.features.map(feature => `<li>${feature}</li>`).join('')}
        </ol>
        <div>
        <h5 class="px-2">${user.name} </h5>
     <div class="d-flex justify-content-between">   
        <div>
       <p> <i class="fas fa-calendar-alt"></i>${user.published_in}</p>
        </div>
        <div>
        <button type="button" onclick="loadSingleData('${user.id}')"  data-bs-toggle="modal" data-bs-target="#usersDetails"><i class="fas fa-arrow-right "></i></button> 
        </div>  
      </div>  
        </div>
        </div>
      </div>
    </div>
        `
        userDataContainer.appendChild(userDiv);
    });
 }

//showall button click to show all data
 document.getElementById('btn-ShowAll').addEventListener('click',function(){
    loedData(false);
 });
 
//  const loadSingleData =async (singleId) =>{
//     const url = ('https://openapi.programming-hero.com/api/ai/tool/01')
//     const res =await fetch(url);
//     const data = await res.json();
//     data(data.data);
   
//  };

 const loadSingleData = (id)=>{
    console.log(id)
    const url = (`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.data))
 }
 const display = user=>{
       console.log(user)
      
 }









 //loadSingleData();
 loedData(true);
