"use strict";
var r = n(308227),
    a = n(145595),
    o = n(309270),
    i = n(800403),
    s = n(84475),
    l = n(61748),
    c = n(45388),
    u = n(780940),
    d = n(738538),
    p = a && a.prototype,
    h = l("species"),
    f = !1,
    m = o(r.PromiseRejectionEvent);
e.exports = {
    CONSTRUCTOR: i("Promise", function () {
        var e = s(a),
            t = e !== String(a);
        if ((!t && 66 === d) || (u && !(p.catch && p.finally))) return !0;
        if (!d || d < 51 || !/native code/.test(e)) {
            var n = new a(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {},
                    );
                };
            if ((((n.constructor = {})[h] = r), !(f = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && ("BROWSER" === c || "DENO" === c) && !m;
    }),
    REJECTION_EVENT: m,
    SUBCLASSING: f,
};
