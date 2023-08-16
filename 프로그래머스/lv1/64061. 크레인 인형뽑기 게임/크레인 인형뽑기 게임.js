function solution(board, moves) {
    var answer = 0;
    const basket = [];
    moves.forEach((v, i) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][v - 1] !== 0) {
                basket.push(board[i][v - 1]);
                board[i][v - 1] = 0;
                break;
            }
        }
    })
    
    const getResult = (basket) => {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i] === basket[i + 1]) {
                basket.splice(i, 2);
                getResult(basket);
                answer += 2;
            }
        }
    }
    getResult(basket);
    
    return answer;
}