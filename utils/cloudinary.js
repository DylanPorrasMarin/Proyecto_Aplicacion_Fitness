
const cloudinary = require('cloudinary').v2


//CUENTA DE CLOUDINARY
cloudinary.config({
    cloud_name: 'name',
    api_key: 'key',
    api_secret: 'secret',
    secure: true
});

// FUNCION QUE VA CARGANDO LAS IMAGENES EN EL FOLDER: imagenesUsuarios
async function uploadImage(filePath){
  return await cloudinary.uploader.upload(filePath,{
    folder:'imagenesUsuario'
  })
}

module.exports = uploadImage
