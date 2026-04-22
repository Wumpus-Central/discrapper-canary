"use strict";
n.d(t, { M: () => l });
var r = n(350723),
    i = n(860579),
    s = n(475815),
    a = n(365971),
    o = n(158368);
function l(e) {
    let t = e.document,
        n = (0, a.rw)(e),
        l = (0, i.NQ)(n, e.document.body, function () {
            (0, r.tV)(e);
        });
    function u() {
        (0, o.I_)(n);
    }
    function d() {
        setTimeout(() => {
            (0, o.xz)(n);
        }, 0);
    }
    for (let s of ((0, i.wB)(l, e.document.body),
    e.addEventListener("focus", function () {
        (0, r.XC)(e, !0);
    }),
    e.addEventListener("blur", function () {
        e.document.hasFocus() || (0, r.XC)(e, !1);
    }),
    e.addEventListener("unload", function () {
        (0, r.GP)(e), (0, i.$v)(l, e.document.body), (0, i.JE)(n, e.document.body);
    }),
    e.addEventListener("visibilitychange", function () {
        (0, r.t2)(e);
    }),
    o.NC))
        t.addEventListener(s, u, !0), t.addEventListener(s, d, !1);
    (0, s.a3)(t, function () {
        (0, r._c)(e);
    }),
        (0, r.Ts)(e);
}
