n.d(t, { c: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(626135),
    o = n(617015),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e) {
    let { onConfirm: t } = e;
    a.default.track(s.rMx.OPEN_MODAL, { type: o.M1 }),
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('97951').then(n.bind(n, 537509));
            return (n) => (0, r.jsx)(e, c({ onConfirm: t }, n));
        });
}
