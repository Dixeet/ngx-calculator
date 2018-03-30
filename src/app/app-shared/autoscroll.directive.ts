import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appAutoscroll]'
})
export class AutoscrollDirective{
    private _triggered = false;

    constructor(private element: ElementRef) {
    }

    public autoscroll(){
        this._triggered = true;
    }

    private _process(){
        if(this._triggered){
            this.element.nativeElement.scrollTop = this.element.nativeElement.scrollHeight - this.element.nativeElement.clientHeight;
            this._triggered = false;
        }
    }

    ngAfterViewChecked() {
        this._process();
    }
}
