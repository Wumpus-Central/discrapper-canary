var r = n(675769),
    i = 1 / 0,
    a = 1.7976931348623157e308;
e.exports = function (e) {
    return e ? ((e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * a : e == e ? e : 0) : 0 === e ? e : 0;
};
