import IGameBoard from "./IGameBoard"

export const gameBoard:IGameBoard = function(){
    const board = Array.from({length:3},()=>Array.from({length:3},()=>null))
    return {board,turn:"",checkWiner,changeTurn}
}();
function checkWiner(){

}
function changeTurn(){
    
}