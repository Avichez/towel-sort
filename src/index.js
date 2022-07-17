// You should implement your task here.

module.exports = function towelSort(matrix) {
    correctMatrix = [];
    if (!matrix) {
        return correctMatrix;
    }
    correctMatrix = matrix.map((el, index) =>
        index % 2 === 0 ? el : el.reverse()
    );
    return correctMatrix.flat(1);
};
