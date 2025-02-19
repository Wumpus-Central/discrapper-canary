n.r(t), n.d(t, { default: () => S }), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    c = n(846519),
    s = n(481060),
    l = n(376641),
    u = n(714338),
    d = n(585483),
    p = n(254109),
    m = n(212459),
    g = n(73249),
    _ = n(730606),
    y = n(369171),
    O = n(860153),
    f = n(981631),
    b = n(388032),
    h = n(130430);
function S(e) {
    var { onClose: t, items: n, startingIndex: o, shouldRedactExplicitContent: S, shouldHideMediaOptions: C = !1, className: v, transitionState: E } = e,
        T = (function (e, t) {
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
    let [j, x] = r.useState(null != o ? o : 0),
        [P, I] = r.useState(!1),
        [D, M] = r.useState(!0),
        A = r.useRef(null);
    r.useEffect(() => {
        if (null != t)
            return (
                d.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    d.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        r.useEffect(
            () => (
                E === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(l.P)),
                E === s.Dvm.HIDDEN && (u.Z.disable(), u.Z.enableTemp(l.v)),
                () => {
                    u.Z.disableTemp();
                }
            ),
            [E]
        );
    let w = r.useCallback((e) => {
            x(e), (0, p.yg)(p.uG.SELECTED_ITEM_CHANGE);
        }, []),
        N = r.useMemo(() => {
            var e, t, n;
            return {
                zoomed: P,
                setZoomed: I,
                accessoryVisibility: ((e = null != E ? E : void 0), (t = D), (n = P), (null != e || (e = s.Dvm.HIDDEN), e === s.Dvm.ENTERING || e >= s.Dvm.EXITING) ? y.UE.FORCE_HIDDEN : !n || t ? y.UE.VISIBLE : y.UE.INACTIVE)
            };
        }, [P, E, D]),
        L = r.useCallback(() => {
            var e;
            M(!0), (null !== (e = A.current) && void 0 !== e) || (A.current = new c.sW(1000, () => M(!1))), A.current.delay();
        }, []),
        R = r.useCallback(() => {
            L(), null == t || t();
        }, [L, t]),
        k = n[j];
    return (0, a.jsx)(s.f6W, {
        theme: f.BRd.DARK,
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
                        className: i()(h.carouselModal, e),
                        transitionState: E
                    },
                    T
                )),
                (o = o =
                    {
                        size: s.CgR.DYNAMIC,
                        fullscreenOnMobile: !1,
                        onMouseMove: L,
                        onMouseDown: R,
                        'aria-label': b.NW.string(b.t.AMTX3t),
                        children: (0, a.jsxs)(m.z.Provider, {
                            value: N,
                            children: [
                                (0, a.jsx)(O.Z, {
                                    item: k,
                                    onClose: t
                                }),
                                (0, a.jsxs)(y.c7, {
                                    children: [
                                        (0, a.jsx)(_.ZP, {
                                            items: n,
                                            startIndex: j,
                                            onIndexChange: w,
                                            shouldRedactExplicitContent: S,
                                            shouldHideMediaOptions: C
                                        }),
                                        (0, a.jsx)(g.Z, {
                                            item: k,
                                            hideMediaOptions: C
                                        })
                                    ]
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
