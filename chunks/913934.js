n.d(t, { M: () => l }), n(896048);
var r = n(350723),
    i = n(860579),
    a = n(475815),
    s = n(365971),
    o = n(158368);
function l(e) {
    let t = e.document,
        n = (0, s.rw)(e);
    function l() {
        (0, r.tV)(e);
    }
    let c = (0, i.NQ)(n, e.document.body, l);
    function u() {
        (0, r.XC)(e, !0);
    }
    function d() {
        e.document.hasFocus() || (0, r.XC)(e, !1);
    }
    function f() {
        (0, r._c)(e);
    }
    function p() {
        (0, r.GP)(e), (0, i.$v)(c, e.document.body), (0, i.JE)(n, e.document.body);
    }
    function _() {
        (0, o.I_)(n);
    }
    function h() {
        setTimeout(() => {
            (0, o.xz)(n);
        }, 0);
    }
    function m() {
        (0, r.t2)(e);
    }
    for (let n of ((0, i.wB)(c, e.document.body),
    e.addEventListener("focus", u),
    e.addEventListener("blur", d),
    e.addEventListener("unload", p),
    e.addEventListener("visibilitychange", m),
    o.NC))
        t.addEventListener(n, _, !0), t.addEventListener(n, h, !1);
    (0, a.a3)(t, f), (0, r.Ts)(e);
}
