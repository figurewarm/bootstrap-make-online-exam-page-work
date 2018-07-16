function allTheAnswer() {
    return {
        gapFillingAnswer: [
            ['统一建模语言'],
            ['封装性', '继承性', '多态性']
        ],
        choiceQuestionAnswer: ['B', 'A'],
        multipleChoiceQuestionAnswer: ['ABD', 'ABC'],
        trueOrFalseQuestionsAnswer: ['wrong', 'right'],
        shortAnswerQuestionAnswer: '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达方式。可以是物理实体；可以是某种图形；或者是一种数学表达式'
    }
}

function gapFillingScore() {
    var socre1 = 0;
    var rightAnswer = allTheAnswer();
    if ($("#question1").val() == rightAnswer.gapFillingAnswer[0][0])
        socre1 += 5;
    for (let i = 0; i < 3; i++) {
        if ($("#question2FirstFilling").val() == rightAnswer.gapFillingAnswer[1][i]) {
            socre1 += 5;
            rightAnswer.gapFillingAnswer[1].splice(i, 1)
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        if ($("#question2SecondFilling").val() == rightAnswer.gapFillingAnswer[1][i]) {
            socre1 += 5;
            rightAnswer.gapFillingAnswer[1].splice(i, 1)
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        if ($("#question2ThirdFilling").val() == rightAnswer.gapFillingAnswer[1][i]) {
            socre1 += 5;
            rightAnswer.gapFillingAnswer[1].splice(i, 1)
            break;
        }
    }
    return socre1;
}

function choiceQuestionScore() {
    var score2 = 0;
    var rightAnswer = allTheAnswer();
    var answer1 = $("input[name='question3']");
    for (let i = 0; i < answer1.length; i++) {
        if (answer1[i].checked) {
            if (answer1[i].value == rightAnswer.choiceQuestionAnswer[0])
                score2 += 10;
        }
    }
    var answer2 = $("input[name='question4']");
    for (let i = 0; i < answer2.length; i++) {
        if (answer2[i].checked) {
            if (answer2[i].value == rightAnswer.choiceQuestionAnswer[1])
                score2 += 10;
        }
    }
    return score2;
}

function multipleChoiceQuestionScore() {
    var score3 = 0;

    var answer1 = $("input[name='question5']");
    var rightAnswer = allTheAnswer();
    var str1 = ''
    for (let i = 0; i < answer1.length; i++) {
        if (answer1[i].checked)
            str1 += answer1[i].value;
    }
    if (str1 == rightAnswer.multipleChoiceQuestionAnswer[0])
        score3 += 10;
    var str2 = ''

    var answer2 = $("input[name='question6']");
    for (let i = 0; i < answer2.length; i++) {
        if (answer2[i].checked)
            str2 += answer2[i].value;
    }
    if (str2 == rightAnswer.multipleChoiceQuestionAnswer[1])
        score3 += 10;
    return score3
}

function trueOrFalseQuestionsScore() {
    var score = 0
    var rightAnswer = allTheAnswer()
    var answer1 = $("input[name='judge1']");
    for (let i = 0; i < answer1.length; i++) {
        if (answer1[i].checked) {
            if (answer1[i].value == rightAnswer.trueOrFalseQuestionsAnswer[0])
                score += 10;

        }
    }

    var answer2 = $("input[name='judge2']");
    for (let i = 0; i < answer2.length; i++) {
        if (answer2[i].checked) {
            if (answer2[i].value == rightAnswer.trueOrFalseQuestionsAnswer[1])
                score += 10;
        }
    }
    return score;
}

function shortAnswerQuestion() {
    var score = 0;
    var rightAnswer = allTheAnswer();
    if ($("#lastQuestion").val() == rightAnswer.shortAnswerQuestionAnswer)
        score += 20;
    return score
}

function calculateScore() {
    var score = 0;
    score += gapFillingScore();
    score += choiceQuestionScore();
    score += multipleChoiceQuestionScore()
    score += trueOrFalseQuestionsScore();
    score += shortAnswerQuestion();
    var name = $(".name").val();
    var idNumber = $(".idNumber").val();
    var theClass = $(".class").val();
    var str = '';
    str += '班级：' + theClass + '\n学号：' + idNumber + '\n姓名：' + name + '\n成绩为：' + score;
    alert(str)
}