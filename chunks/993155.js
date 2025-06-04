var r = n(98405),
    i = n(580983),
    o = n(896471),
    a = n(655745),
    s = n(555648),
    l = n(683385);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(168527)
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
