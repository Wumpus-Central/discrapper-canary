n.d(t, { L: () => f, A: () => c });
var l = n(477900),
    a = n(582128),
    r = n(834730),
    i = n(140735),
    s = n(615839);
let u = { second: 1e3, minute: 6e4 };
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let a = u[t];
            return (
                !(function t() {
                    let r = Date.now();
                    (l(r), (n = setTimeout(t, a - ((((r - e) % a) + a) % a))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var d = n(719374);
function c(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        a = o(t);
    return (0, l.jsx)(r.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: d.$,
        "data-conjure-turn-timer": !0,
        children: (0, s.C7)(a),
    });
}
function f(e) {
    let { startedAt: t } = e,
        n = o(t, "minute");
    return (0, l.jsx)(i.A, { role: "timer", children: (0, s.Us)(n) });
}
