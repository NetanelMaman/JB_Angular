import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

private notification = new Notyf({
    duration : 3000,
    position: { x : "center", y: "top"},
    dismissible : true
});



public success(message: string): void {
this.notification.success(message);

}

public error(message: string): void {
this.notification.error(message);
}

private extractErrorMessage(err: any): string {
if(typeof err === 'string') return err;
if(typeof err.error === 'string') return err.error;
if(Array.isArray(err.error)) return err.error[0];
if(typeof err.message === 'string') return err.message;
return "Some error";

}
}


