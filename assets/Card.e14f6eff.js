import{C as o}from"./Card.0f2d6794.js";import{j as i,a,w as d,m,S as p}from"./index.aa066066.js";const g={title:"text-gray fs-4",image:"w-25 filter",popup:"bg-light bg-gradient border p-0 col-10 col-md-6 col-lg-6 col-xl-5",footer:"bg-dark p-2",confirmButton:"bg-danger fs-5 p-2"},b={customClass:g,showConfirmButton:!1,color:"#ccc",showCloseButton:!0,showClass:{popup:""}},w=({image:t,image2:s,title:r,description:e,light:c=!1})=>{const l=d(p);return i(o,{className:c?"h-100 pointer bg-light text-dark border-0":"h-100 pointer bg-secondary text-gray border-0 hover-card",onClick:()=>{const n=m("contacto@primsoft.cl",`Cotizar ${r}`);l.fire({...b,imageUrl:s,title:r,html:`
      <p>${e}</p>
      <a href="${n}"
        target="_blank"
        class="btn btn-gray w-100 my-3">
        Cotizar 
      </a>
    `})},children:[a(o.Img,{variant:"top",src:t,className:"d-block card-img-service rounded-circle border border-2 w-75 mx-auto m-3"}),a(o.Body,{children:a(o.Title,{className:"text-center fs-5",children:r})})]})};export{w as C};
