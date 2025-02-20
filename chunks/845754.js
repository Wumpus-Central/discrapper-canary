var t = Math.floor;
e.exports = function (e, n) {
    var r = e % n;
    return t(r >= 0 ? r : r + n);
};
