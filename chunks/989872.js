var i = n(794399),
    r = n(741346),
    a = n(956656),
    s = n(900013),
    o = a(function (e, t) {
        if (null == e) return [];
        var n = t.length;
        return n > 1 && s(e, t[0], t[1]) ? (t = []) : n > 2 && s(t[0], t[1], t[2]) && (t = [t[0]]), r(e, i(t, 1), []);
    });
e.exports = o;
