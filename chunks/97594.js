(n.d(t, { default: () => S }), n(388685));
var a = n(255367),
    r = n(73800),
    i = n(120356),
    o = n.n(i),
    c = n(466377),
    l = n(481060),
    s = n(376641),
    u = n(714338),
    d = n(607070),
    p = n(585483),
    m = n(254109),
    g = n(212459),
    y = n(730606),
    f = n(860153),
    b = n(981631),
    O = n(388032),
    _ = n(269045);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || d.Z.useReducedMotion ? e.set(t) : e.start(t);
}
function S(e) {
    var { onClose: t, items: n, startingIndex: i, enabledContentHarmTypeFlags: S, shouldHideMediaOptions: v = !1, transitionState: j } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) ((n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['onClose', 'items', 'startingIndex', 'enabledContentHarmTypeFlags', 'shouldHideMediaOptions', 'transitionState']);
    let [T, E] = r.useState(null != i ? i : 0),
        [x, P] = r.useState(!1),
        [M, w] = (0, l.q_F)(() => ({
            scale: d.Z.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: {
                friction: 30,
                tension: 300
            }
        })),
        D = r.useRef(null);
    (r.useEffect(() => {
        if (null != t)
            return (
                p.S.subscribe(b.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    p.S.unsubscribe(b.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        r.useEffect(() => {
            var e, t;
            (j === l.Dvm.ENTERING && h(M.scale, 1), j === l.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)), j === l.Dvm.HIDDEN && (h(M.scale, 0.9), u.Z.disable(), u.Z.enableTemp(s.v)), j === l.Dvm.EXITING && h(M.scale, 0.9));
            let n = () => {
                    (u.Z.disable(), u.Z.enableTemp(s.P));
                },
                a = () => {
                    u.Z.disableTemp();
                },
                r = null == (t = D.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
            return (
                null == r || r.addEventListener('focus', n),
                null == r || r.addEventListener('blur', a),
                () => {
                    (null == r || r.removeEventListener('focus', n), null == r || r.removeEventListener('blur', a), u.Z.disableTemp());
                }
            );
        }, [j, M]));
    let I = r.useCallback((e) => {
            (E(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE));
        }, []),
        A = r.useMemo(
            () => ({
                scale: M.scale,
                x: M.x,
                y: M.y,
                setScale(e, t) {
                    h(M.scale, e, null == t ? void 0 : t.immediate);
                },
                setOffset(e, t, n) {
                    (h(M.x, e, null == n ? void 0 : n.immediate), h(M.y, t, null == n ? void 0 : n.immediate));
                },
                zoomed: x,
                setZoomed(e) {
                    (P(e), h(M.scale, e ? 2.5 : 1), e || (h(M.x, 0), h(M.y, 0)));
                }
            }),
            [x, M]
        );
    return (0, a.jsx)(l.f6W, {
        theme: b.BRd.MIDNIGHT,
        children: (e) => {
            var r, i;
            return (0, a.jsx)(
                l.Y0X,
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            a.forEach(function (t) {
                                var a;
                                ((a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = a));
                            }));
                    }
                    return e;
                })(
                    {
                        'data-migration-pending': !0,
                        hideShadow: !0,
                        className: o()(_.carouselModal, e),
                        transitionState: j
                    },
                    C
                )),
                (i = i =
                    {
                        size: l.CgR.DYNAMIC,
                        animation: c.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        'aria-label': O.intl.string(O.t.AMTX3t),
                        parentComponent: 'MediaViewerModal',
                        children: (0, a.jsxs)(g.z.Provider, {
                            value: A,
                            children: [
                                (0, a.jsx)(f.Z, {
                                    item: n[T],
                                    hideMediaOptions: v,
                                    onClose: t
                                }),
                                (0, a.jsx)('div', {
                                    style: { display: 'none' },
                                    ref: D
                                }),
                                (0, a.jsx)(y.ZP, {
                                    items: n,
                                    startIndex: T,
                                    onIndexChange: I,
                                    enabledContentHarmTypeFlags: S,
                                    shouldHideMediaOptions: v
                                })
                            ]
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r)
            );
        }
    });
}
