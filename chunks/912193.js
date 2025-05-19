n.d(t, { b: () => d });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(846027),
    o = n(468026),
    a = n(388032);
let c = null;
function s() {
    null !== c && (0, i.Mr3)(c), (c = null);
}
function u() {
    l.Z.setSilenceWarning(!1), s();
}
function d() {
    c = (0, i.h7j)((e) =>
        (0, r.jsx)(
            o.default,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    title: a.intl.string(a.t['zQ1+Jy']),
                    body: a.intl.string(a.t.K1gWXl),
                    secondaryConfirmText: a.intl.string(a.t.XAiAgI),
                    onConfirmSecondary: u,
                    onConfirm: s,
                    confirmText: a.intl.string(a.t.BddRzc)
                },
                e
            )
        )
    );
}
