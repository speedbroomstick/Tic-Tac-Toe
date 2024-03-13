export default interface IGameBoard{
    board: number|null[][];
    turn:string;
    checkWiner():void;
    changeTurn():void;
}