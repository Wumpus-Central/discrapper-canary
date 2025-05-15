var r = n(98405),
    i = n(580983),
    a = n(896471),
    o = n(655745),
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
                n = o.f(t),
                r = n.resolve,
                c = n.reject,
                u = s(function () {
                    var n = a(t.resolve),
                        o = [],
                        s = 0,
                        c = 1;
                    l(e, function (e) {
                        var a = s++,
                            l = !1;
                        c++,
                            i(n, t, e).then(
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (o[a] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --c || r(o));
                                },
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (o[a] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --c || r(o));
                                }
                            );
                    }),
                        --c || r(o);
                });
            return u.error && c(u.value), n.promise;
        }
    }
);
