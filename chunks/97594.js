n.d(t, { default: () => g }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(466377),
    s = n(481060),
    u = n(376641),
    c = n(714338),
    d = n(607070),
    p = n(585483),
    m = n(254109),
    y = n(212459),
    f = n(730606),
    E = n(860153),
    O = n(981631),
    h = n(388032),
    S = n(105969);
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || d.Z.useReducedMotion ? e.set(t) : e.start(t);
}
function g(e) {
    var {
            onClose: t,
            items: n,
            startingIndex: r,
            enabledContentHarmTypeFlags: g,
            shouldHideMediaOptions: T = !1,
            transitionState: v,
        } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, [
            "onClose",
            "items",
            "startingIndex",
            "enabledContentHarmTypeFlags",
            "shouldHideMediaOptions",
            "transitionState",
        ]);
    let [C, j] = l.useState(null != r ? r : 0),
        [x, L] = l.useState(!1),
        [D, I] = (0, s.q_F)(() => ({
            scale: d.Z.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: {
                friction: 30,
                tension: 300,
            },
        })),
        P = l.useRef(null);
    l.useEffect(() => {
        if (null != t)
            return (
                p.S.subscribe(O.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    p.S.unsubscribe(O.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        l.useEffect(() => {
            var e, t;
            v === s.Dvm.ENTERING && b(D.scale, 1),
                v === s.Dvm.ENTERED && (c.Z.disable(), c.Z.enableTemp(u.P)),
                v === s.Dvm.HIDDEN && (b(D.scale, 0.9), c.Z.disable(), c.Z.enableTemp(u.v)),
                v === s.Dvm.EXITING && b(D.scale, 0.9);
            let n = () => {
                    c.Z.disable(), v === s.Dvm.ENTERED ? c.Z.enableTemp(u.P) : c.Z.enableTemp(u.v);
                },
                i = () => {
                    c.Z.disableTemp();
                },
                l = null == (t = P.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
            return (
                null == l || l.addEventListener("focus", n),
                null == l || l.addEventListener("blur", i),
                () => {
                    null == l || l.removeEventListener("focus", n),
                        null == l || l.removeEventListener("blur", i),
                        c.Z.disableTemp();
                }
            );
        }, [v, D]);
    let R = l.useCallback((e) => {
            j(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE);
        }, []),
        N = l.useMemo(
            () => ({
                scale: D.scale,
                x: D.x,
                y: D.y,
                setScale(e, t) {
                    b(D.scale, e, null == t ? void 0 : t.immediate);
                },
                setOffset(e, t, n) {
                    b(D.x, e, null == n ? void 0 : n.immediate), b(D.y, t, null == n ? void 0 : n.immediate);
                },
                zoomed: x,
                setZoomed(e) {
                    L(e), b(D.scale, e ? 2.5 : 1), e || (b(D.x, 0), b(D.y, 0));
                },
            }),
            [x, D],
        );
    return (0, i.jsx)(s.f6W, {
        theme: O.BRd.MIDNIGHT,
        children: (e) => {
            var l, r;
            return (0, i.jsx)(
                s.Y0X,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })(
                    {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(S.carouselModal, e),
                        transitionState: v,
                    },
                    _,
                )),
                (r = r =
                    {
                        size: s.CgR.DYNAMIC,
                        animation: o.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        "aria-label": h.intl.string(h.t.AMTX3j),
                        parentComponent: "MediaViewerModal",
                        children: (0, i.jsxs)(y.z.Provider, {
                            value: N,
                            children: [
                                (0, i.jsx)(E.Z, {
                                    item: n[C],
                                    hideMediaOptions: T,
                                    onClose: t,
                                }),
                                (0, i.jsx)("div", {
                                    style: { display: "none" },
                                    ref: P,
                                }),
                                (0, i.jsx)(f.ZP, {
                                    items: n,
                                    startIndex: C,
                                    onIndexChange: R,
                                    enabledContentHarmTypeFlags: g,
                                    shouldHideMediaOptions: T,
                                }),
                            ],
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                l),
            );
        },
    });
}
