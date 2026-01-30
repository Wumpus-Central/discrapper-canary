n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(954571),
    s = n(191627),
    a = n(652215),
    o = n(842130),
    c = n(985018);

function d() {
    let e = c.intl.string(o.default["8SLtqb"]);
    return (0, r.jsx)(i.Button, {
        icon: i.yVk,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("83393"), n.e("84268")]).then(n.bind(n, 320742));
                return (t) =>
                    (0, r.jsx)(
                        e,
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
                        })({}, t),
                    );
            }),
                l.default.track(a.HAw.FAMILY_CENTER_ACTION, {
                    action: s.qb.ShowQRCodeModal,
                });
        },
    });
}
