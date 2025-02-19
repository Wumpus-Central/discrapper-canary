n.r(t), n.d(t, { default: () => h }), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    c = n(466377),
    s = n(481060),
    l = n(376641),
    u = n(714338),
    d = n(540059),
    p = n(585483),
    m = n(254109),
    _ = n(212459),
    g = n(730606),
    y = n(860153),
    O = n(981631),
    f = n(388032),
    b = n(130430);
function h(e) {
    var { onClose: t, items: n, startingIndex: o, shouldRedactExplicitContent: h, shouldHideMediaOptions: S = !1, className: v, transitionState: C } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        o = Object.keys(e);
                    for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (a = 0; a < o.length; a++) (n = o[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['onClose', 'items', 'startingIndex', 'shouldRedactExplicitContent', 'shouldHideMediaOptions', 'className', 'transitionState']);
    let [T, j] = r.useState(null != o ? o : 0),
        [P, x] = r.useState(!1),
        M = (0, d.Q3)('MediaViewerModal');
    r.useEffect(() => {
        if (null != t)
            return (
                p.S.subscribe(O.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    p.S.unsubscribe(O.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        r.useEffect(
            () => (
                C === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(l.P)),
                C === s.Dvm.HIDDEN && (u.Z.disable(), u.Z.enableTemp(l.v)),
                () => {
                    u.Z.disableTemp();
                }
            ),
            [C]
        );
    let I = r.useCallback((e) => {
            j(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE);
        }, []),
        N = r.useMemo(
            () => ({
                zoomed: P,
                setZoomed: x,
                entering: C === s.Dvm.ENTERING || null == C
            }),
            [P, C]
        ),
        D = n[T];
    return (0, a.jsx)(s.f6W, {
        theme: M ? O.BRd.MIDNIGHT : O.BRd.DARK,
        children: (e) => {
            var r, o;
            return (0, a.jsx)(
                s.Y0X,
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })(
                    {
                        hideShadow: !0,
                        className: i()(b.carouselModal, e),
                        transitionState: C
                    },
                    E
                )),
                (o = o =
                    {
                        size: s.CgR.DYNAMIC,
                        animation: c.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        'aria-label': f.NW.string(f.t.AMTX3t),
                        children: (0, a.jsxs)(_.z.Provider, {
                            value: N,
                            children: [
                                (0, a.jsx)(y.Z, {
                                    item: D,
                                    hideMediaOptions: S,
                                    onClose: t
                                }),
                                (0, a.jsx)(g.ZP, {
                                    items: n,
                                    startIndex: T,
                                    onIndexChange: I,
                                    shouldRedactExplicitContent: h,
                                    shouldHideMediaOptions: S
                                })
                            ]
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                r)
            );
        }
    });
}
