var display = document.getElementById("display")
fetch("https://rickandmortyapi.com/api/character").then (response=>{
    return response.json()
}).then(data=>{
    console.log(data.results)
    var Html= "";
    data.results.forEach(items=>{
        const div =`
       <div class="col-md-3">
    <div class="card mb-4 shadow-sm">
        <img id="image" src="${items.image}
        " class="bd-placeholder-img card-img-top" width="200px" height="200px"/>   
    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>species: ${items.species}</strong>
         </div>

    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>created: ${items.created}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>gender ${items.gender}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>origin: ${items.origin}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>location: ${items.location}</strong>
         </div>

    </div>
    </div>
    </div>
        
        `;


    Html += div;

          
    })
    display.innerHTML= Html;

        
})

function next(){
var next= document.getElementById("next")
fetch("https://rickandmortyapi.com/api/character/?page=2").then (response=>{
    return response.json()
}).then(data=>{
    console.log(data.results)
    var Html= "";
    data.results.forEach(items=>{
        const div =`
       <div class="col-md-3">
    <div class="card mb-4 shadow-sm">
        <img id="image" src="${items.image}
        " class="bd-placeholder-img card-img-top" width="200px" height="200px"/>   
    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>species: ${items.species}</strong>
         </div>

    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>created: ${items.created}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>gender ${items.gender}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>origin: ${items.origin}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>location: ${items.location}</strong>
         </div>

    </div>
    </div>
    </div>
        
        `;


    Html += div;

          
    })
    display.innerHTML= Html;

        
})
}


function previous(){
var previous= document.getElementById("previous")
fetch("https://rickandmortyapi.com/api/character/?page=1").then (response=>{
    return response.json()
}).then(data=>{
    console.log(data.results)
    var Html= "";
    data.results.forEach(items=>{
        const div =`
       <div class="col-md-3">
    <div class="card mb-4 shadow-sm">
        <img id="image" src="${items.image}
        " class="bd-placeholder-img card-img-top" width="200px" height="200px"/>   
    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>species: ${items.species}</strong>
         </div>

    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>created: ${items.created}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>gender ${items.gender}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>origin: ${items.origin}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>location: ${items.location}</strong>
         </div>

    </div>
    </div>
    </div>
        
        `;


    Html += div;

          
    })
    display.innerHTML= Html;

        
})
}


