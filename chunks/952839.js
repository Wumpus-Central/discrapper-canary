e.exports = function (e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff;
};
