n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(442837),
    i = n(352065),
    a = n(481060),
    s = n(607070),
    c = n(451478),
    u = n(585483),
    d = n(79808),
    f = n(981631);
function m(e) {
    var t,
        n,
        { root: m, directory: b, target: j, onPanelChange: p, sidebarHeader: x, sidebarFooter: v, emptyState: y } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["root", "directory", "target", "onPanelChange", "sidebarHeader", "sidebarFooter", "emptyState"]);
    let [g, O] = l.useState(!1),
        [C, _] = l.useState(1.4),
        S = l.useRef(null),
        P = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        N = (0, o.e7)([c.Z], () => c.Z.isFocused());
    return (
        l.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !P &&
                    N &&
                    (O(!0),
                    _(null != t ? t : 1.4),
                    clearTimeout(S.current),
                    (S.current = setTimeout(() => O(!1), null != n ? n : 1000)));
            };
            return (
                u.S.subscribe(f.CkL.SHAKE_SETTINGS_MODAL, e),
                () => {
                    u.S.unsubscribe(f.CkL.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current);
                }
            );
        }, [P, N]),
        (0, r.jsx)(a.UkV, {
            isShaking: g,
            intensity: C,
            children: (0, r.jsx)(
                i.A,
                ((t = (function (e) {
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
                })({}, h)),
                (n = n =
                    {
                        children: (0, r.jsx)(d.Z, {
                            onClose: h.onClose,
                            root: m,
                            directory: b,
                            target: j,
                            onPanelChange: p,
                            sidebarHeader: x,
                            emptyState: y,
                            sidebarFooter: v,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        })
    );
}
