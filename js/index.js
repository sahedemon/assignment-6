// load all api 
const loedData = (isSlice)=>{
   
    const url = (' https://openapi.programming-hero.com/api/ai/tools');
    fetch(url)
    .then(response => response.json())
    .then(data => displayUserData(data.data.tools,isSlice,))

 };
 
 //displayUserData==========
 
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
        <button  type="button" onclick="loadSingleData('${user.id}')"  data-bs-toggle="modal" data-bs-target="#usersDetails"><i class="fas fa-arrow-right "></i></button> 
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


 //loadSingleData-------------------------------------------
 const loadSingleData =async (id) =>{
    const url = (`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const res =await fetch(url);
    const data = await res.json();
    display(data.data);
   
 };

//  const loadSingleData = (id)=>{
//     // console.log(id)
//     const url = (`https://openapi.programming-hero.com/api/ai/tool/${id}`);
//     //console.log(url)
//     fetch(url)
//     .then(res => res.json())
//     .then(data => display(data.data))
//  };

// id by userSingleData----------------------------------------------//
 const display = user=>{
       console.log(user,'hello')
       const  userSingleData = document.getElementById('userSingleData');
       userSingleData.innerHTML=`
       <p id ="accuracy" class="text-end ">${user.accuracy.score}% accuracy</p>
        <img src="${user.image_link[0]}" class="card-img-top p-2 rounded-5" alt="...">
       <h5>${user.input_output_examples[0].input ? user.input_output_examples[0].input: 'can you giveme any exsample'}</h5>
       <p>${user.input_output_examples[0].output ? user.input_output_examples[0].output: 'No! Not Yet! Take a break!!!'}</p>
       
       `
       //user single Description ---------------------------//
    const userDescription = document.getElementById('userDescription');
    userDescription.innerHTML = `
    <h5 class"p-3">${user.description}</h5>
    <div class="d-flex gap-2  align-items-center justify-content-between">
    <div id="price0" class="border bg-white rounded-5 p-2">
    <h5>${user.pricing[0].price}</h5>
    <h5>${user.pricing[0].plan}</h5>
    </div>
    <div id="price1" class=" border bg-white rounded-5 p-2">
    <h5>${user.pricing[1].price}</h5>
    <h5>${user.pricing[1].plan}</h5>
    </div>
    <div id="price2" class="border bg-white rounded-5 p-3">
    <h6>${user.pricing[2].price}</h6>
    <h6>${user.pricing[2].plan}</h6>
    </div>
   </div>
   
   <div class="d-flex justify-content-between">
   <div class=""> 
   <h4 class="py-3">features</h4>
   <li>${user.features['1'].feature_name}</li>
   <li>${user.features['2'].feature_name}</li>
   <li>${user.features['3'].feature_name}</li>
   </div>
   <div class="">
   <h4 class="py-3">integrations</h4>
   ${user.integrations.map(integration =>`<li>${integration}</li>`).join('')}
   </div>
   
   </div>
    `

 };







 loedData(true);
