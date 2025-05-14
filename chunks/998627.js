var e = r(154028),
    o = r(46015),
    i = r(264750),
    u = r(245),
    c = r(179122),
    a = o([].concat);
t.exports =
    e('Reflect', 'ownKeys') ||
    function (t) {
        var n = i.f(c(t)),
            r = u.f;
        return r ? a(n, r(t)) : n;
    };
