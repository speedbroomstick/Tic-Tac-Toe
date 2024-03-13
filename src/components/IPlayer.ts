export default interface IPlayer{
    name:string;
    gameBoard: number|null[][];
    doStep():void;
}