import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  message(message: string, options: Partial<AlertifyOptions>) {
    // Opsiyonel parametreler için varsayılan değerler sağlıyoruz
    const position = options.position ?? Position.TopLeft;  // Eğer position undefined ise, varsayılan olarak TopLeft
    const delay = options.delay ?? 3;  // Eğer delay undefined ise, varsayılan olarak 3 saniye
    const messageType = options.messageType ?? MessageType.Message;  // Eğer messageType undefined ise, varsayılan olarak Message

    // alertify seçeneklerini ayarlıyoruz
    alertify.set('notifier', 'position', position);
    alertify.set('notifier', 'delay', delay);

    // alertify fonksiyonunu kullanırken messageType değerini kontrol ediyoruz
    alertify[messageType](message).dismissOthers();  // messageType: error, message, notify, vb.
  }
}

export class AlertifyOptions {
  messageType?: MessageType = MessageType.Message;  // Default değer atanmış
  position?: Position = Position.TopLeft;  // Default değer atanmış
  delay: number = 3;  // Default delay değeri
}

export enum MessageType {
  Error = 'error',
  Message = 'message',
  Notify = 'notify',
  Success = 'success',
  Warning = 'warning'
}

export enum Position {
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
  TopRight = 'top-right',
  TopCenter = 'top-center',
  TopLeft = 'top-left'
}
