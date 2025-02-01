var t = Math.floor;
e.exports = function (e, n) {
    var i = e % n;
    return t(i >= 0 ? i : i + n);
};
