var r = n(143500);
e.exports = function (e, t) {
    var n = e % t;
    return r(n >= 0 ? n : n + t);
};
