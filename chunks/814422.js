var n = r(988231),
    i = r(470427),
    o = r(940660),
    a = r(656367),
    u = r(439000),
    s = r(740336),
    c = r(65183),
    l = r(817690),
    f = c.List,
    p = c.Repeat,
    h = s("draft_tree_data_support"),
    d = h ? i : n;
t.exports = {
    processHTML: function (t, e) {
        return o(t, u, e);
    },
    processText: function (t, e, r) {
        return t.reduce(function (t, n, i) {
            n = l(n);
            var o = a(),
                u = {
                    key: o,
                    type: r,
                    text: n,
                    characterList: f(p(e, n.length)),
                };
            if (h && 0 !== i) {
                var s = i - 1;
                u = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                }),
                            )),
                            n.forEach(function (e) {
                                var n, i, o;
                                (n = t),
                                    (i = e),
                                    (o = r[e]),
                                    i in n
                                        ? Object.defineProperty(n, i, {
                                              value: o,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (n[i] = o);
                            });
                    }
                    return t;
                })({}, u, { prevSibling: (t[s] = t[s].merge({ nextSibling: o })).getKey() });
            }
            return t.push(new d(u)), t;
        }, []);
    },
};
