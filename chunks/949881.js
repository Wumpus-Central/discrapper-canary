n.d(t, {
    default: () => l,
});
var r = n(627968);
n(64700);
var a = n(397927),
    o = n(442433),
    c = n(818348);
let l = (e) =>
    (0, r.jsx)(a.W1t, {
        onClose: o.Z_,
        navId: "staff-only-entry-debug",
        "aria-label": "staff only content inventory debug",
        onSelect: c.tE,
        children: (0, r.jsx)(a.Drp, {
            id: "test",
            label: "Debug (Staff-Only)",
            action: () => {
                (0, a.mMO)(async () => {
                    let { default: t } = await n.e("94022").then(n.bind(n, 924037));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n, e),
                        );
                });
            },
            icon: a.PXj,
        }),
    });
