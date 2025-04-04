var r = n(220159),
    o = n(517522),
    a = n(691593),
    i = n(602168),
    s = n(134546),
    c = n(795462);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(806414)
    },
    {
        allSettled: function (e) {
            var t = this,
                n = i.f(t),
                r = n.resolve,
                l = n.reject,
                u = s(function () {
                    var n = a(t.resolve),
                        i = [],
                        s = 0,
                        l = 1;
                    c(e, function (e) {
                        var a = s++,
                            c = !1;
                        l++,
                            o(n, t, e).then(
                                function (e) {
                                    !c &&
                                        ((c = !0),
                                        (i[a] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --l || r(i));
                                },
                                function (e) {
                                    !c &&
                                        ((c = !0),
                                        (i[a] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --l || r(i));
                                }
                            );
                    }),
                        --l || r(i);
                });
            return u.error && l(u.value), n.promise;
        }
    }
);
