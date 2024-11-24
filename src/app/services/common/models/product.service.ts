import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../Contracts/create_product';
import { ToastrModule } from 'ngx-toastr';
import { error } from 'node:console';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService,private tostr:ToastrModule) { }

  create(product:Create_Product,errorCallBack?:any){
    debugger
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(data=>{
      alert("başarılı");
    },(errorResponse:HttpErrorResponse)=>{
      const _error:Array<{key:string,value:Array<string>}>=errorResponse.error;
      let message="";
      _error.forEach((v,index)=>{
        v.value.forEach((_v,_index)=>{
          message+=`${_v}<br>`
          debugger
        })
      });
      errorCallBack(message);
    });
  }

}
