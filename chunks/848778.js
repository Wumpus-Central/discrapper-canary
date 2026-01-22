var r = n(557939),
    i = n(446474),
    a = n(514575),
    s = n(560062),
    o = n(742388),
    l = n(2871);
r(
    {
        target: "Promise",
        stat: !0,
        forced: n(980210),
    },
    {
        allSettled: function (e) {
            var t = this,
                n = s.f(t),
                r = n.resolve,
                c = n.reject,
                u = o(function () {
                    var n = a(t.resolve),
                        s = [],
                        o = 0,
                        c = 1;
                    l(e, function (e) {
                        var a = o++,
                            l = !1;
                        c++,
                            i(n, t, e).then(
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (s[a] = {
                                            status: "fulfilled",
                                            value: e,
                                        }),
                                        --c || r(s));
                                },
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (s[a] = {
                                            status: "rejected",
                                            reason: e,
                                        }),
                                        --c || r(s));
                                },
                            );
                    }),
                        --c || r(s);
                });
            return u.error && c(u.value), n.promise;
        },
    },
);
