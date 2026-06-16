"use strict";
var r = n(834647),
    a = n(664886),
    o = n(999843),
    i = n(794938),
    s = n(564904),
    l = n(554987);
r(
    { target: "Promise", stat: !0, forced: n(655246) },
    {
        race: function (e) {
            var t = this,
                n = i.f(t),
                r = n.reject,
                c = s(function () {
                    var i = o(t.resolve);
                    l(e, function (e) {
                        a(i, t, e).then(n.resolve, r);
                    });
                });
            return c.error && r(c.value), n.promise;
        },
    },
);
