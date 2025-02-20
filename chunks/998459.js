var r = n(147018),
    i = n(926515),
    o = n(526988),
    a = n(213897),
    s = n(532055),
    l = n(71480);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(246582)
    },
    {
        allSettled: function (e) {
            var t = this,
                n = a.f(t),
                r = n.resolve,
                c = n.reject,
                u = s(function () {
                    var n = o(t.resolve),
                        a = [],
                        s = 0,
                        c = 1;
                    l(e, function (e) {
                        var o = s++,
                            l = !1;
                        c++,
                            i(n, t, e).then(
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (a[o] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --c || r(a));
                                },
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (a[o] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --c || r(a));
                                }
                            );
                    }),
                        --c || r(a);
                });
            return u.error && c(u.value), n.promise;
        }
    }
);
