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
    f = n(860153),
    y = n(981631),
    b = n(388032),
    O = n(269045);
function h(e) {
    var { onClose: t, items: n, startingIndex: o, shouldRedactExplicitContent: h, shouldHideMediaOptions: S = !1, className: C, transitionState: E } = e,
        v = (function (e, t) {
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
        M = r.useRef(null),
        I = (0, d.Q3)('MediaViewerModal');
    r.useEffect(() => {
        if (null != t)
            return (
                p.S.subscribe(y.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    p.S.unsubscribe(y.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        r.useEffect(() => {
            var e, t;
            E === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(l.P)), E === s.Dvm.HIDDEN && (u.Z.disable(), u.Z.enableTemp(l.v));
            let n = () => {
                    u.Z.disable(), u.Z.enableTemp(l.P);
                },
                a = () => {
                    u.Z.disableTemp();
                },
                r = null == (t = M.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
            return (
                null == r || r.addEventListener('focus', n),
                null == r || r.addEventListener('blur', a),
                () => {
                    null == r || r.removeEventListener('focus', n), null == r || r.removeEventListener('blur', a), u.Z.disableTemp();
                }
            );
        }, [E]);
    let D = r.useCallback((e) => {
            j(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE);
        }, []),
        N = r.useMemo(
            () => ({
                zoomed: P,
                setZoomed: x,
                entering: E === s.Dvm.ENTERING || null == E
            }),
            [P, E]
        ),
        w = n[T];
    return (0, a.jsx)(s.f6W, {
        theme: I ? y.BRd.MIDNIGHT : y.BRd.DARK,
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
                        className: i()(O.carouselModal, e),
                        transitionState: E
                    },
                    v
                )),
                (o = o =
                    {
                        size: s.CgR.DYNAMIC,
                        animation: c.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        'aria-label': b.NW.string(b.t.AMTX3t),
                        children: (0, a.jsxs)(_.z.Provider, {
                            value: N,
                            children: [
                                (0, a.jsx)(f.Z, {
                                    item: w,
                                    hideMediaOptions: S,
                                    onClose: t
                                }),
                                (0, a.jsx)('div', {
                                    style: { display: 'none' },
                                    ref: M
                                }),
                                (0, a.jsx)(g.ZP, {
                                    items: n,
                                    startIndex: T,
                                    onIndexChange: D,
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
