n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(954571),
    s = n(191627),
    o = n(652215),
    l = n(842130),
    c = n(985018);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f() {
    let e = c.intl.string(l.default["8SLtqb"]),
        t = () => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("43887"), n.e("84268")]).then(n.bind(n, 320742));
                return (t) => (0, r.jsx)(e, d({}, t));
            }),
                a.default.track(o.HAw.FAMILY_CENTER_ACTION, { action: s.qb.ShowQRCodeModal });
        };
    return (0, r.jsx)(i.Button, {
        icon: i.yVk,
        variant: "primary",
        text: e,
        onClick: t,
    });
}
