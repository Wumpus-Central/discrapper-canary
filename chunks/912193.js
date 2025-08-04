n.d(t, { b: () => d });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(846027),
    a = n(468026),
    o = n(388032);
let s = null;
function c() {
    (null !== s && (0, i.Mr3)(s), (s = null));
}
function u() {
    l.Z.setSilenceWarning(!1);
}
function d() {
    s = (0, i.h7j)((e) =>
        (0, r.jsx)(
            a.default,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })(
                {
                    title: o.intl.string(o.t['zQ1+Jy']),
                    body: o.intl.string(o.t.K1gWXl),
                    secondaryConfirmText: o.intl.string(o.t.XAiAgI),
                    onConfirmSecondary: u,
                    onConfirm: c,
                    confirmText: o.intl.string(o.t.BddRzc)
                },
                e
            )
        )
    );
}
