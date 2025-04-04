var e = n(505072),
    o = n(565130),
    i = n(717130),
    u = RangeError;
t.exports = function (t) {
    var r = o(i(this)),
        n = '',
        s = e(t);
    if (s < 0 || s === 1 / 0) throw new u('Wrong number of repetitions');
    for (; s > 0; (s >>>= 1) && (r += r)) 1 & s && (n += r);
    return n;
};
