n.d(t, { default: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(466377),
    s = n(481060),
    c = n(376641),
    u = n(714338),
    d = n(607070),
    p = n(585483),
    f = n(254109),
    y = n(212459),
    m = n(730606),
    O = n(860153),
    b = n(981631),
    g = n(388032),
    E = n(105969);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || d.Z.useReducedMotion ? e.set(t) : e.start(t);
}
function S(e) {
    var {
            onClose: t,
            items: n,
            startingIndex: l,
            enabledContentHarmTypeFlags: S,
            shouldHideMediaOptions: _ = !1,
            transitionState: v,
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "onClose",
            "items",
            "startingIndex",
            "enabledContentHarmTypeFlags",
            "shouldHideMediaOptions",
            "transitionState",
        ]);
    let [j, C] = i.useState(null != l ? l : 0),
        [P, D] = i.useState(!1),
        [x, L] = (0, s.q_F)(() => ({
            scale: d.Z.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: {
                friction: 30,
                tension: 300,
            },
        })),
        w = i.useRef(null);
    i.useEffect(() => {
        if (null != t)
            return (
                p.S.subscribe(b.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    p.S.unsubscribe(b.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        i.useEffect(() => {
            var e, t;
            v === s.Dvm.ENTERING && h(x.scale, 1),
                v === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(c.P)),
                v === s.Dvm.HIDDEN && (h(x.scale, 0.9), u.Z.disable(), u.Z.enableTemp(c.v)),
                v === s.Dvm.EXITING && h(x.scale, 0.9);
            let n = () => {
                    u.Z.disable(), v === s.Dvm.ENTERED ? u.Z.enableTemp(c.P) : u.Z.enableTemp(c.v);
                },
                r = () => {
                    u.Z.disableTemp();
                },
                i = null == (t = w.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
            return (
                null == i || i.addEventListener("focus", n),
                null == i || i.addEventListener("blur", r),
                () => {
                    null == i || i.removeEventListener("focus", n),
                        null == i || i.removeEventListener("blur", r),
                        u.Z.disableTemp();
                }
            );
        }, [v, x]);
    let R = i.useCallback((e) => {
            C(e), (0, f.yg)(f.uG.SELECTED_ITEM_CHANGE);
        }, []),
        M = i.useMemo(
            () => ({
                scale: x.scale,
                x: x.x,
                y: x.y,
                setScale(e, t) {
                    h(x.scale, e, null == t ? void 0 : t.immediate);
                },
                setOffset(e, t, n) {
                    h(x.x, e, null == n ? void 0 : n.immediate), h(x.y, t, null == n ? void 0 : n.immediate);
                },
                zoomed: P,
                setZoomed(e) {
                    D(e), h(x.scale, e ? 2.5 : 1), e || (h(x.x, 0), h(x.y, 0));
                },
            }),
            [P, x],
        );
    return (0, r.jsx)(s.f6W, {
        theme: b.BRd.MIDNIGHT,
        children: (e) => {
            var i, l;
            return (0, r.jsx)(
                s.Y0X,
                ((i = (function (e) {
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
                })(
                    {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: o()(E.carouselModal, e),
                        transitionState: v,
                    },
                    T,
                )),
                (l = l =
                    {
                        size: s.CgR.DYNAMIC,
                        animation: a.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        "aria-label": g.intl.string(g.t.AMTX3t),
                        parentComponent: "MediaViewerModal",
                        children: (0, r.jsxs)(y.z.Provider, {
                            value: M,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    item: n[j],
                                    hideMediaOptions: _,
                                    onClose: t,
                                }),
                                (0, r.jsx)("div", {
                                    style: { display: "none" },
                                    ref: w,
                                }),
                                (0, r.jsx)(m.ZP, {
                                    items: n,
                                    startIndex: j,
                                    onIndexChange: R,
                                    enabledContentHarmTypeFlags: S,
                                    shouldHideMediaOptions: _,
                                }),
                            ],
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i),
            );
        },
    });
}
