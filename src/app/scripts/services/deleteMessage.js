// import axios from "axios";

// export const deleteMessage = async (url, id) => {
//   try {
//     const urlMessage = `${url}/${id}`;
//     //const response = await axios.delete(urlMessage);

//     Swal.fire({
//       title: "Está seguro?",
//       text: "Usted no va a poder revertir esto!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
        
//         const response = await axios.delete(urlMessage);
//         console.log(response);

//         // Mostrar Sweet Alert de éxito
//         Swal.fire("Deleted!", "Su mensaje ha sido eliminado", "success");
//       }
//     });

//     //return response
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };



//patch
