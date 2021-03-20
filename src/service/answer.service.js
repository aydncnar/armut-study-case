/*
 * Aydin Cinar <cinar.aydinn@gmail.com>
 * Answers Service
 */


const ARMUT_ANSWERS = "armut-answers";
const answerList = window.localStorage.getItem(ARMUT_ANSWERS) || [];

export const AnswerService = {
    addOrUpdate: (answer) => {
        const answerIndex = answerList.findIndex(item => item.questionId == answer.questionId);
        if (answerIndex == -1) {
            answerList.push(answer)
        } else {
            answerList[answerIndex] = answer;
        }
        return answerList;
    },
    getValue(questionId) {
        const answerIndex = answerList.findIndex(item => item.questionId == questionId);
        return answerIndex == -1 ? false : answerList[answerIndex].answer;
    }
}