n.d(t, { default: () => v }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(466377),
    s = n(481060),
    c = n(376641),
    u = n(714338),
    d = n(607070),
    p = n(585483),
    m = n(254109),
    f = n(212459),
    y = n(730606),
    b = n(860153),
    O = n(981631),
    g = n(388032),
    h = n(105969);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || d.Z.useReducedMotion ? e.set(t) : e.start(t);
}
function v(e) {
    var {
            onClose: t,
            items: n,
            startingIndex: o,
            enabledContentHarmTypeFlags: v,
            shouldHideMediaOptions: S = !1,
            transitionState: j,
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
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++)
                    (n = o[i]),
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
    let [C, x] = r.useState(null != o ? o : 0),
        [P, _] = r.useState(!1),
        [w, L] = (0, s.q_F)(() => ({
            scale: d.Z.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: {
                friction: 30,
                tension: 300,
            },
        })),
        M = r.useRef(null);
    r.useEffect(() => {
        if (null != t)
            return (
                p.S.subscribe(O.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    p.S.unsubscribe(O.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        r.useEffect(() => {
            var e, t;
            j === s.Dvm.ENTERING && E(w.scale, 1),
                j === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(c.P)),
                j === s.Dvm.HIDDEN && (E(w.scale, 0.9), u.Z.disable(), u.Z.enableTemp(c.v)),
                j === s.Dvm.EXITING && E(w.scale, 0.9);
            let n = () => {
                    u.Z.disable(), j === s.Dvm.ENTERED ? u.Z.enableTemp(c.P) : u.Z.enableTemp(c.v);
                },
                i = () => {
                    u.Z.disableTemp();
                },
                r = null == (t = M.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
            return (
                null == r || r.addEventListener("focus", n),
                null == r || r.addEventListener("blur", i),
                () => {
                    null == r || r.removeEventListener("focus", n),
                        null == r || r.removeEventListener("blur", i),
                        u.Z.disableTemp();
                }
            );
        }, [j, w]);
    let D = r.useCallback((e) => {
            x(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE);
        }, []),
        I = r.useMemo(
            () => ({
                scale: w.scale,
                x: w.x,
                y: w.y,
                setScale(e, t) {
                    E(w.scale, e, null == t ? void 0 : t.immediate);
                },
                setOffset(e, t, n) {
                    E(w.x, e, null == n ? void 0 : n.immediate), E(w.y, t, null == n ? void 0 : n.immediate);
                },
                zoomed: P,
                setZoomed(e) {
                    _(e), E(w.scale, e ? 2.5 : 1), e || (E(w.x, 0), E(w.y, 0));
                },
            }),
            [P, w],
        );
    return (0, i.jsx)(s.f6W, {
        theme: O.BRd.MIDNIGHT,
        children: (e) => {
            var r, o;
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
                        className: l()(h.carouselModal, e),
                        transitionState: j,
                    },
                    T,
                )),
                (o = o =
                    {
                        size: s.CgR.DYNAMIC,
                        animation: a.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        "aria-label": g.intl.string(g.t.AMTX3t),
                        parentComponent: "MediaViewerModal",
                        children: (0, i.jsxs)(f.z.Provider, {
                            value: I,
                            children: [
                                (0, i.jsx)(b.Z, {
                                    item: n[C],
                                    hideMediaOptions: S,
                                    onClose: t,
                                }),
                                (0, i.jsx)("div", {
                                    style: { display: "none" },
                                    ref: M,
                                }),
                                (0, i.jsx)(y.ZP, {
                                    items: n,
                                    startIndex: C,
                                    onIndexChange: D,
                                    enabledContentHarmTypeFlags: v,
                                    shouldHideMediaOptions: S,
                                }),
                            ],
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                r),
            );
        },
    });
}
