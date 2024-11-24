import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>) {
    const messageType = toastrOptions.messageType ?? ToastrMessageType.Info;
    const position = toastrOptions.position ?? ToastrPosition.TopLeft;
    const timeOut = toastrOptions.timeOut ?? 5000;  // Varsayılan zaman aşımı

    this.toastr[messageType](message, title, {
      positionClass: position,
     // timeOut: timeOut,
      //closeButton: true,  // Kapanma butonu ekle
     // extendedTimeOut: 1000  // Mouse ile üzerine gelindiğinde, kapanma süresi 1 saniye
    });
  }
}

export class ToastrOptions {
  messageType?: ToastrMessageType;
  position?: ToastrPosition;
  timeOut?: number;  // Zaman aşımı süresi
}

export enum ToastrMessageType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}
