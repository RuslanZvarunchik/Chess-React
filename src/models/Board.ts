import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Queen} from "./figures/Queen";

export class Board {
    cells: Cell[][] = []

    public initCells(){
        for(let i=0;i<8;i++) {
            const row: Cell[] = [];
            for(let j=0;j<8;j++) {
                if((i + j)%2 !== 0) {
                    row.push(new Cell(j,i,Colors.BLACK, null,this));
                } else {
                    row.push(new Cell(j,i,Colors.WHITE, null,this));
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    private addPawns() {

    }

    private addRooks() {

    }

    private addKnights() {

    }

    private addBishops() {

    }

    private addQueens() {

    }

    private addKings() {

    }

    public addFigures() {
        this.addPawns();
        this.addBishops();
        this.addKings();
        this.addQueens();
        this.addKnights();
        this.addRooks();
    }
}
