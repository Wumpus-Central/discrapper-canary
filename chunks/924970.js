var n = r(786064),
    i = r(41371);
t.exports = function (t) {
    for (var e = t; e && e !== n(t).documentElement; ) {
        var r = i(e);
        if (null != r) return r;
        e = e.parentNode;
    }
    return null;
};
