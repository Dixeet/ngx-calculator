import {Component, OnInit} from '@angular/core';
import {CalculatorService} from '../core/calculator.service';
import {KatexOptions} from 'ng-katex';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    public inputValue: string = '';
    public parser;
    public history = [];
    public options: KatexOptions = {
        displayMode: false,
    };
    public historyState = {
        tempValue: '',
        currentIndex: 0
    };

    constructor(private _calcService: CalculatorService) {
        this.parser = this._calcService.parser;
        this.history = this._calcService.history;
        this.parser.set('ans', 0);
        this._resetHistoryState();
    }

    onSubmit() {
        this._compute(this.inputValue);
        this.inputValue = '';
        this._resetHistoryState();
    }

    onAns() {
        this.inputValue = 'ans';
    }

    onKey(event: any){
        if(event.code === "ArrowUp" || event.code === "ArrowDown"){
            event.stopPropagation();
            event.preventDefault();
            if (event.code === "ArrowUp"){
                this.onArrowUp();
            } else {
                this.onArrowDown();
            }
        }
    }

    onArrowUp(){
        if(this.historyState.currentIndex > 0){
            if(this.historyState.currentIndex === this.history.length) {
                this.historyState.tempValue = this.inputValue;
            }
            this.historyState.currentIndex--;
            this.inputValue = this.history[this.historyState.currentIndex].rawValue;
        }
    }

    onArrowDown(){
        if(this.historyState.currentIndex < this.history.length){
            this.historyState.currentIndex++;
            if (this.historyState.currentIndex < this.history.length) {
                this.inputValue = this.history[this.historyState.currentIndex].rawValue;
            } else {
                this.inputValue = this.historyState.tempValue;
            }
        }
    }

    private _resetHistoryState(){
        this.historyState.tempValue = '';
        this.historyState.currentIndex = this.history.length;
    }

    private _compute(value) {
        if(!!value) {
            const resultSet = this._getResultSet(value);
            this.history.push(resultSet);
        }
    }

    private _getResultSet(value){
        value = this._calcService.handleAns(value);
        const resultSet = {
            rawValue: value,
            formula: '',
            value: '',
            formulaFontSize: 1
        };
        try {
            const node = this.parser.parse(value);
            resultSet.formula = node.toTex({
                    parenthesis: 'auto',
                    implicit: 'show'
                }
            );
            resultSet.formulaFontSize += Math.min((0.5 * this._calcService.getNumberOfDivide(node)), 3);
        } catch (e) {
            resultSet.formula = '#Error computing formula';
            console.log(e);
            return resultSet;
        }
        try {
            resultSet.value = this.parser.eval(value).toString();
            this.parser.set('ans', resultSet.value);
        } catch (e) {
            resultSet.value = '#Error evaluating formula';
            console.log(e);
        }
        return resultSet;
    }

    ngOnInit() {

    }

}
