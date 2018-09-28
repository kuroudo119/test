/*
 * じゃんけん関数
 * 
 * 引数に0～2の値を入れる。
 * 0：グー
 * 1：チョキ
 * 2：パー
 * 
 * 戻り値
 * -1：あなたの負け
 *  0：あいこ
 *  1：あなたの勝ち
 */
janken = function(you, opponent) {
    // ↓you / opp→  rock    scissors    paper
    // rock         draw    win         lose
    // scissors     lose    draw        win
    // paper        win     lose        draw
    var game = [[ 0,  1, -1],
                [-1,  0,  1],
                [ 1, -1,  0]];

    return game[you][opponent];
};

// テスト実行
console.log(janken(0, 0));
console.log(janken(1, 0));
console.log(janken(2, 0));
console.log(janken(0, 1));
console.log(janken(1, 1));
console.log(janken(2, 1));
console.log(janken(0, 2));
console.log(janken(1, 2));
console.log(janken(2, 2));
