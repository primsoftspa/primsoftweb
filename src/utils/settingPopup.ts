const customClass = {
  // container: 'bg-dark bg-gradient', // Opcional con fondo 
  title: 'text-dark fs-4',
  image: 'w-25 filter',
  popup: 'bg-light bg-gradient border p-0 col-12 col-md-6 col-lg-6 col-xl-5',
  footer: 'bg-dark p-2',
  confirmButton: 'bg-danger fs-5 p-2',
}


export const popupConfig = {
  customClass: customClass,
  showConfirmButton: false, // => confirmButtonText: en caso de cambiarlo a true
  color: '#666',
  showCloseButton: true,
  showClass: {
    popup: ''
  }
}