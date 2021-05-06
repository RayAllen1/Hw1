$(function(){
    var currentQuiz = null;
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question);
            // 指的是 main.js中 question陣列中第1的個question 對上 data.js 中的 question的第1個陣列裡面的第一個question
            $("#options").empty();
            // 進行清空
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            // 找到問題後 開始對question裡面的answer進行尋訪
            $("#startButton").attr("value","Next");
            // 尋訪完畢後 使用atttr設定 將start中的value屬性變成next
            // 接下來!你的currentQuiz不會=null，反覆跳回 使用else 所以才會這樣
        }else{
            // 進入這裡代表已經開始作答 檢測尋訪到哪一個fuction
            $.each($(":radio"),function(i,val){
                // jQuery的尋訪語法 跟js依樣
                if(val.checked ){
                    // 上方 val.checked == true ，可以省略==true
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        // 使語法重新跑入迴圈
                        $("#startButton").attr("value","重新開始");
                        // 將startButton按鈕 將他的value改為重新開始
                    }else{
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        // 在if當中 若是數字 則會跳到else中， 進行else的answer判斷
                        // . answer[i][1] 代表第i個答案中的第2個數字 但對於電腦世界需要-1

                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            });
        }
    });
});