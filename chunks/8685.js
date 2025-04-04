n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(923928),
    l = n(468026),
    c = n(503856),
    u = n(209590),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = () => {
        s.Z.clearSuppressWarning();
    },
    g = () => {
        s.Z.clearSuppressWarning(!0);
    },
    E = () => {
        let e = i.useRef(null);
        function t() {
            null !== e.current && ((0, a.Mr3)(e.current), (e.current = null));
        }
        let [s, f] = (0, o.Wu)([u.Z], () => [u.Z.shouldShowWarning(), u.Z.isAFKChannel()], []),
            p = i.useCallback(() => {
                let t, n;
                f ? ((t = d.NW.string(d.t.Y40JkZ)), (n = d.NW.string(d.t['5J4yGR']))) : ((t = d.NW.string(d.t.FJSZVF)), (n = d.NW.string(d.t.etJjgY))),
                    (e.current = (0, a.h7j)((e) =>
                        (0, r.jsx)(
                            l.default,
                            _(
                                {
                                    title: t,
                                    body: n,
                                    onConfirm: m,
                                    confirmText: d.NW.string(d.t.BddRzc),
                                    secondaryConfirmText: d.NW.string(d.t['5E9SBw']),
                                    onConfirmSecondary: g
                                },
                                e
                            )
                        )
                    ));
            }, [f]),
            E = i.useCallback(() => {
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('41281').then(n.bind(n, 669732));
                    return (t) => (0, r.jsx)(e, h(_({}, t), { showHideSuppressWarning: !0 }));
                }).then((t) => {
                    null != t && (e.current = t);
                });
            }, []);
        return (
            i.useEffect(
                () => (
                    s && (0, c.p)() ? E() : s ? p() : t(),
                    () => {
                        t();
                    }
                ),
                [s, p, E]
            ),
            null
        );
    };
