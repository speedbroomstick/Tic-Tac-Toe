import { gameBoard } from "./GameBoard"
import IPlayer from "./IPlayer"

export default function createPlayer(name:string){
    return {name,gameBoard:gameBoard.board,doStep} as IPlayer
}
function doStep(){

}