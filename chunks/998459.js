var i = n(147018),
    r = n(926515),
    a = n(526988),
    s = n(213897),
    o = n(532055),
    l = n(71480);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: n(246582)
    },
    {
        allSettled: function (e) {
            var t = this,
                n = s.f(t),
                i = n.resolve,
                u = n.reject,
                c = o(function () {
                    var n = a(t.resolve),
                        s = [],
                        o = 0,
                        u = 1;
                    l(e, function (e) {
                        var a = o++,
                            l = !1;
                        u++,
                            r(n, t, e).then(
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (s[a] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --u || i(s));
                                },
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (s[a] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --u || i(s));
                                }
                            );
                    }),
                        --u || i(s);
                });
            return c.error && u(c.value), n.promise;
        }
    }
);
