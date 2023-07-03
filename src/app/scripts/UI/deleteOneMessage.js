import axios from "axios";
import Swal from 'sweetalert2';
import { deleteMessage} from '../services/deleteMessage'
const URL = "https://back-whatsapp.onrender.com/";

const deleteOneMessage = async (messageId) => {
    try {
      const url = 'https://example.com/api/messages'; // Reemplaza con la URL de tu API
      
      Swal.fire({
        title: 'Está seguro?',
        text: "Usted no va a poder revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Realizar la eliminación del mensaje
          const response = await axios.deleteMessage(url, messageId);
          // Realizar cualquier otra acción necesaria después de eliminar el mensaje
          console.log(response);
  
          // Mostrar Sweet Alert de éxito
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  
