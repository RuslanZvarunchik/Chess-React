import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureNames.PAWN;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }
}
