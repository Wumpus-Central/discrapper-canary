var r = n(834647),
    a = n(664886),
    o = n(999843),
    i = n(683570),
    s = n(794938),
    l = n(564904),
    c = n(554987),
    u = n(655246),
    d = "No one promise resolved";
r(
    {
        target: "Promise",
        stat: !0,
        forced: u,
    },
    {
        any: function (e) {
            var t = this,
                n = i("AggregateError"),
                r = s.f(t),
                u = r.resolve,
                p = r.reject,
                h = l(function () {
                    var r = o(t.resolve),
                        i = [],
                        s = 0,
                        l = 1,
                        h = !1;
                    c(e, function (e) {
                        var o = s++,
                            c = !1;
                        l++,
                            a(r, t, e).then(
                                function (e) {
                                    c || h || ((h = !0), u(e));
                                },
                                function (e) {
                                    !c && !h && ((c = !0), (i[o] = e), --l || p(new n(i, d)));
                                },
                            );
                    }),
                        --l || p(new n(i, d));
                });
            return h.error && p(h.value), r.promise;
        },
    },
);
