n.d(t, { default: () => h }), n(388685);
var a = n(255367),
    r = n(73800),
    i = n(120356),
    o = n.n(i),
    c = n(466377),
    l = n(481060),
    s = n(376641),
    u = n(714338),
    d = n(540059),
    p = n(585483),
    m = n(254109),
    g = n(212459),
    f = n(730606),
    b = n(860153),
    O = n(981631),
    y = n(388032),
    _ = n(269045);
function h(e) {
    var { onClose: t, items: n, startingIndex: i, shouldRedactExplicitContent: h, shouldHideMediaOptions: S = !1, transitionState: v } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['onClose', 'items', 'startingIndex', 'shouldRedactExplicitContent', 'shouldHideMediaOptions', 'transitionState']);
    let [C, E] = r.useState(null != i ? i : 0),
        [T, x] = r.useState(!1),
        P = r.useRef(null),
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
        r.useEffect(() => {
            var e, t;
            v === l.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)), v === l.Dvm.HIDDEN && (u.Z.disable(), u.Z.enableTemp(s.v));
            let n = () => {
                    u.Z.disable(), u.Z.enableTemp(s.P);
                },
                a = () => {
                    u.Z.disableTemp();
                },
                r = null == (t = P.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
            return (
                null == r || r.addEventListener('focus', n),
                null == r || r.addEventListener('blur', a),
                () => {
                    null == r || r.removeEventListener('focus', n), null == r || r.removeEventListener('blur', a), u.Z.disableTemp();
                }
            );
        }, [v]);
    let w = r.useCallback((e) => {
            E(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE);
        }, []),
        D = r.useMemo(
            () => ({
                zoomed: T,
                setZoomed: x,
                entering: v === l.Dvm.ENTERING || null == v
            }),
            [T, v]
        ),
        I = n[C];
    return (0, a.jsx)(l.f6W, {
        theme: M ? O.BRd.MIDNIGHT : O.BRd.DARK,
        children: (e) => {
            var r, i;
            return (0, a.jsx)(
                l.Y0X,
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
                        className: o()(_.carouselModal, e),
                        transitionState: v
                    },
                    j
                )),
                (i = i =
                    {
                        size: l.CgR.DYNAMIC,
                        animation: c.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        'aria-label': y.intl.string(y.t.AMTX3t),
                        children: (0, a.jsxs)(g.z.Provider, {
                            value: D,
                            children: [
                                (0, a.jsx)(b.Z, {
                                    item: I,
                                    hideMediaOptions: S,
                                    onClose: t
                                }),
                                (0, a.jsx)('div', {
                                    style: { display: 'none' },
                                    ref: P
                                }),
                                (0, a.jsx)(f.ZP, {
                                    items: n,
                                    startIndex: C,
                                    onIndexChange: w,
                                    shouldRedactExplicitContent: h,
                                    shouldHideMediaOptions: S
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
