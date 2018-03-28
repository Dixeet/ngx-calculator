import {Component, OnInit} from '@angular/core';
import {mathjs as math} from '../../shared/mathjs';
import {CalculatorService} from '../core/calculator.service';
import {logger} from 'codelyzer/util/logger';
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
    options: KatexOptions = {
        displayMode: false,
    };

    constructor(private _calcService: CalculatorService) {
        this.parser = this._calcService.parser;
        this.history = this._calcService.history;
    }

    onSubmit() {
        console.log('submit');
        this._compute(this.inputValue);
        this.inputValue = '';
    }

    onAns() {
        this.inputValue = 'ans';
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
            resultSet.formula = node.toTex();
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
