import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector:'app-alert',
    templateUrl:'alert.component.html'
})
export class AlertComponent {
    // @Input() message:string
    // @Output() showErr = new EventEmitter<void>()


    // closeClick(){
    //     this.showErr.emit()
    //     setTimeout(()=>{
    //         console.log('error')
    //         this.message=null
    //     }, 1000);
    // }

    @Input() message: string;
    @Output() showErr = new EventEmitter<void>();
    
    closeClick() {
        this.showErr.emit();
         // Wait for 1 second before clearing the error message
}

}