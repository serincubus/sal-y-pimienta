const productos=[
{       
        id:1, 
         nombre:"Carpaccio fresco",
         descripcion:"Carpaccio de salmón con cítricos",
         precio:65.50,
         imagen:"Carpaccio-de-salmon.jpg"  
},
{
    id:2,
    nombre:"Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra",
    precio:47.00,
    imagen:"Risotto-berenjena-queso-cabra.jpg"
},
{
    id:3,
    nombre:"Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    precio: 27.50,
    imagen:"Mousse-de-arroz-con-leche.jpg"
},
{
    id:4,
    nombre:"Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.50,
    imagen:"esparragos.png"
},
{
    id:5,
    nombre:"Milanesas con pure",
    descripcion:"",
    precio:"",
    imagen:""
}
]

const about = [
{
    imagen:"principal.jpg",
    descripcion1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use",
    descripcion2:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}    
]

const indexController={
    home:(req,res) => {
        res.render("home", {title:"Pimienta y Sal",productos,about})
    },
    detalle:(req,res) =>{
        const { id } = req.params;
        const producto = productos.find((producto)=>producto.id==id); 
        res.render('detalle', {title:producto.nombre, producto})
}
}

module.exports=indexController;