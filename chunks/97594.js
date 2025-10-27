n.d(t, { default: () => _ }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(466377),
    s = n(481060),
    c = n(376641),
    u = n(714338),
    d = n(607070),
    f = n(585483),
    p = n(254109),
    m = n(212459),
    y = n(730606),
    O = n(860153),
    b = n(981631),
    E = n(388032),
    g = n(105969);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || d.Z.useReducedMotion ? e.set(t) : e.start(t);
}
function _(e) {
    var {
            onClose: t,
            items: n,
            startingIndex: l,
            enabledContentHarmTypeFlags: _,
            shouldHideMediaOptions: S = !1,
            transitionState: v,
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "onClose",
            "items",
            "startingIndex",
            "enabledContentHarmTypeFlags",
            "shouldHideMediaOptions",
            "transitionState",
        ]);
    let [j, C] = r.useState(null != l ? l : 0),
        [D, x] = r.useState(!1),
        [P, R] = (0, s.q_F)(() => ({
            scale: d.Z.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: {
                friction: 30,
                tension: 300,
            },
        })),
        L = r.useRef(null);
    r.useEffect(() => {
        if (null != t)
            return (
                f.S.subscribe(b.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    f.S.unsubscribe(b.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        r.useEffect(() => {
            var e, t;
            v === s.Dvm.ENTERING && h(P.scale, 1),
                v === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(c.P)),
                v === s.Dvm.HIDDEN && (h(P.scale, 0.9), u.Z.disable(), u.Z.enableTemp(c.v)),
                v === s.Dvm.EXITING && h(P.scale, 0.9);
            let n = () => {
                    u.Z.disable(), v === s.Dvm.ENTERED ? u.Z.enableTemp(c.P) : u.Z.enableTemp(c.v);
                },
                i = () => {
                    u.Z.disableTemp();
                },
                r = null == (t = L.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
            return (
                null == r || r.addEventListener("focus", n),
                null == r || r.addEventListener("blur", i),
                () => {
                    null == r || r.removeEventListener("focus", n),
                        null == r || r.removeEventListener("blur", i),
                        u.Z.disableTemp();
                }
            );
        }, [v, P]);
    let M = r.useCallback((e) => {
            C(e), (0, p.yg)(p.uG.SELECTED_ITEM_CHANGE);
        }, []),
        I = r.useMemo(
            () => ({
                scale: P.scale,
                x: P.x,
                y: P.y,
                setScale(e, t) {
                    h(P.scale, e, null == t ? void 0 : t.immediate);
                },
                setOffset(e, t, n) {
                    h(P.x, e, null == n ? void 0 : n.immediate), h(P.y, t, null == n ? void 0 : n.immediate);
                },
                zoomed: D,
                setZoomed(e) {
                    x(e), h(P.scale, e ? 2.5 : 1), e || (h(P.x, 0), h(P.y, 0));
                },
            }),
            [D, P],
        );
    return (0, i.jsx)(s.f6W, {
        theme: b.BRd.MIDNIGHT,
        children: (e) => {
            var r, l;
            return (0, i.jsx)(
                s.Y0X,
                ((r = (function (e) {
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
                        className: a()(g.carouselModal, e),
                        transitionState: v,
                    },
                    T,
                )),
                (l = l =
                    {
                        size: s.CgR.DYNAMIC,
                        animation: o.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        "aria-label": E.intl.string(E.t.AMTX3j),
                        parentComponent: "MediaViewerModal",
                        children: (0, i.jsxs)(m.z.Provider, {
                            value: I,
                            children: [
                                (0, i.jsx)(O.Z, {
                                    item: n[j],
                                    hideMediaOptions: S,
                                    onClose: t,
                                }),
                                (0, i.jsx)("div", {
                                    style: { display: "none" },
                                    ref: L,
                                }),
                                (0, i.jsx)(y.ZP, {
                                    items: n,
                                    startIndex: j,
                                    onIndexChange: M,
                                    enabledContentHarmTypeFlags: _,
                                    shouldHideMediaOptions: S,
                                }),
                            ],
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                r),
            );
        },
    });
}
