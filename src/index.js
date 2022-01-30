// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    } else {
        const result = matrix.reduce((prev, cur, i) => {
            return prev.concat(i % 2 == 0 ? cur : cur.reverse());
        }, []);
        return result;
    }
};
