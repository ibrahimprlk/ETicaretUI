import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { AlertifyService, MessageType, Position } from './services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from './services/common/http-client.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ETicaretUI';
  constructor(private toastr:ToastrService,
              private alertify:AlertifyService,
              private spinner: NgxSpinnerService,
              private httpService:HttpClientService
            ){

  }
  ngOnInit(): void {
    // this.httpService.get({      controller:"products"
    //  }).subscribe(data=>console.log(data));
  }


}
