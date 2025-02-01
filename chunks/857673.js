var i = n(675769),
    r = 1 / 0,
    a = 1.7976931348623157e308;
function s(e) {
    return e ? ((e = i(e)) === r || e === -r ? (e < 0 ? -1 : 1) * a : e == e ? e : 0) : 0 === e ? e : 0;
}
e.exports = s;
