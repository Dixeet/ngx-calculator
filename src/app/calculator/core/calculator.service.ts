import {Injectable} from '@angular/core';
import {mathjs as math} from '../../app-shared/mathjs';
@Injectable()
export class CalculatorService {

    public history = [];
    public parser;

    constructor() {
        this.parser = math.parser();
        this.parser.parse = math.parse;
    }

    public getNumberOfDivide(node){
        let divideCount = 0;
        if(node.type === 'OperatorNode' && node.fn === 'divide') {
            divideCount = 1;
        }
        divideCount = this._recursiveNumberOfDivide(node, divideCount);
        return divideCount
    }

    public handleAns(value) {
        if (value.indexOf('*') == 0 || value.indexOf('/') == 0 || value.indexOf('+') == 0 || value.indexOf('-') == 0){
            return `ans${value}`;
        }
        return value;
    }

    private _recursiveNumberOfDivide(node, divideCount){
        let divideAlreadyFound = false;
        node.forEach((node, path, parent) => {
            if (node.type === 'OperatorNode' && node.fn === 'divide' && !divideAlreadyFound){
                divideCount++;
                divideAlreadyFound = true;
            }
            divideCount = this._recursiveNumberOfDivide(node, divideCount);
        });
        return divideCount;
    }


}
