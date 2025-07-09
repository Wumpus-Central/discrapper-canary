n.d(t, { b: () => u });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(846027),
    o = n(468026),
    s = n(388032);
let a = null;
function c() {
    (null !== a && (0, r.Mr3)(a), (a = null));
}
function d() {
    l.Z.setSilenceWarning(!1);
}
function u() {
    a = (0, r.h7j)((e) =>
        (0, i.jsx)(
            o.default,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            ((i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i));
                        }));
                }
                return e;
            })(
                {
                    title: s.intl.string(s.t['zQ1+Jy']),
                    body: s.intl.string(s.t.K1gWXl),
                    secondaryConfirmText: s.intl.string(s.t.XAiAgI),
                    onConfirmSecondary: d,
                    onConfirm: c,
                    confirmText: s.intl.string(s.t.BddRzc)
                },
                e
            )
        )
    );
}
