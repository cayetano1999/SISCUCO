import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertIcon, SweetAlertCustomClass } from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  show(titlemsg: string, message: string, typealert: SweetAlertIcon){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      
    })
    
    Toast.fire({
      icon: typealert,
      title: titlemsg,
      text: message,
      background: "#fff",
      showCancelButton: true,
      confirmButtonColor: "white",
    })
  }

   serColorToast(typealert: SweetAlertIcon){
    var color = "#fff";
    switch (typealert){
      case "error":
          color =  "#F44336"
        break;
        case "success":
          color="#009688"
          break;
          case "info":
            color= "#2196F3"
          break; 

          case "warning":
            color= "#FFEB3B"
          break; 

    }
    return color;
  }
}
