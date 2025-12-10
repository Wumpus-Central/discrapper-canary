n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(442837),
    l = n(352065),
    a = n(481060),
    c = n(607070),
    s = n(451478),
    u = n(585483),
    b = n(79808),
    f = n(981631);
function d(e) {
    var t,
        n,
        {
            partialRoot: d,
            target: y,
            defaultTarget: p,
            onPanelChange: g,
            sidebarFooter: O,
            emptyState: m,
            searchQuery: j,
            onSearchChange: v,
        } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, [
            "partialRoot",
            "target",
            "defaultTarget",
            "onPanelChange",
            "sidebarFooter",
            "emptyState",
            "searchQuery",
            "onSearchChange",
        ]);
    let [x, S] = o.useState(!1),
        [P, C] = o.useState(1.4),
        _ = o.useRef(null),
        w = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        T = (0, i.e7)([s.Z], () => s.Z.isFocused());
    return (
        o.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !w &&
                    T &&
                    (S(!0),
                    C(null != t ? t : 1.4),
                    clearTimeout(_.current),
                    (_.current = setTimeout(() => S(!1), null != n ? n : 1000)));
            };
            return (
                u.S.subscribe(f.CkL.SHAKE_SETTINGS_MODAL, e),
                () => {
                    u.S.unsubscribe(f.CkL.SHAKE_SETTINGS_MODAL, e), clearTimeout(_.current);
                }
            );
        }, [w, T]),
        (0, r.jsx)(a.UkV, {
            isShaking: x,
            intensity: P,
            children: (0, r.jsx)(
                l.A,
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
                        children: (0, r.jsx)(b.Z, {
                            onClose: h.onClose,
                            partialRoot: d,
                            target: y,
                            defaultTarget: p,
                            onPanelChange: g,
                            emptyState: m,
                            sidebarFooter: O,
                            searchQuery: j,
                            onSearchChange: v,
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
