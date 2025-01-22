var i = r(147018),
    a = r(926515),
    o = r(526988),
    s = r(213897),
    l = r(532055),
    u = r(71480);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: r(246582)
    },
    {
        allSettled: function (e) {
            var n = this,
                r = s.f(n),
                i = r.resolve,
                c = r.reject,
                d = l(function () {
                    var r = o(n.resolve),
                        s = [],
                        l = 0,
                        c = 1;
                    u(e, function (e) {
                        var o = l++,
                            u = !1;
                        c++,
                            a(r, n, e).then(
                                function (e) {
                                    !u &&
                                        ((u = !0),
                                        (s[o] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --c || i(s));
                                },
                                function (e) {
                                    !u &&
                                        ((u = !0),
                                        (s[o] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --c || i(s));
                                }
                            );
                    }),
                        --c || i(s);
                });
            return d.error && c(d.value), r.promise;
        }
    }
);
