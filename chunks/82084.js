n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(442837),
    i = n(352065),
    a = n(481060),
    c = n(607070),
    s = n(451478),
    u = n(585483),
    d = n(79808),
    f = n(981631);
function b(e) {
    var t,
        n,
        {
            root: b,
            directory: p,
            target: y,
            defaultTarget: j,
            onPanelChange: m,
            sidebarHeader: v,
            sidebarFooter: g,
            emptyState: h,
        } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, [
            "root",
            "directory",
            "target",
            "defaultTarget",
            "onPanelChange",
            "sidebarHeader",
            "sidebarFooter",
            "emptyState",
        ]);
    let [x, P] = o.useState(!1),
        [S, C] = o.useState(1.4),
        _ = o.useRef(null),
        w = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        E = (0, l.e7)([s.Z], () => s.Z.isFocused());
    return (
        o.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !w &&
                    E &&
                    (P(!0),
                    C(null != t ? t : 1.4),
                    clearTimeout(_.current),
                    (_.current = setTimeout(() => P(!1), null != n ? n : 1000)));
            };
            return (
                u.S.subscribe(f.CkL.SHAKE_SETTINGS_MODAL, e),
                () => {
                    u.S.unsubscribe(f.CkL.SHAKE_SETTINGS_MODAL, e), clearTimeout(_.current);
                }
            );
        }, [w, E]),
        (0, r.jsx)(a.UkV, {
            isShaking: x,
            intensity: S,
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
                })({}, O)),
                (n = n =
                    {
                        children: (0, r.jsx)(d.Z, {
                            onClose: O.onClose,
                            root: b,
                            directory: p,
                            target: y,
                            defaultTarget: j,
                            onPanelChange: m,
                            sidebarHeader: v,
                            emptyState: h,
                            sidebarFooter: g,
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
