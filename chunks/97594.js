n.d(t, { default: () => _ }), n(388685);
var a = n(255367),
    r = n(73800),
    o = n(120356),
    i = n.n(o),
    c = n(466377),
    l = n(481060),
    s = n(376641),
    u = n(714338),
    p = n(585483),
    d = n(254109),
    m = n(212459),
    g = n(730606),
    y = n(860153),
    f = n(981631),
    b = n(388032),
    O = n(269045);
function _(e) {
    var { onClose: t, items: n, startingIndex: o, enabledContentHarmTypeFlags: _, shouldHideMediaOptions: h = !1, transitionState: S } = e,
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
        })(e, ['onClose', 'items', 'startingIndex', 'enabledContentHarmTypeFlags', 'shouldHideMediaOptions', 'transitionState']);
    let [j, C] = r.useState(null != o ? o : 0),
        [T, E] = r.useState(!1),
        P = r.useRef(null);
    r.useEffect(() => {
        if (null != t)
            return (
                p.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    p.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        r.useEffect(() => {
            var e, t;
            S === l.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)), S === l.Dvm.HIDDEN && (u.Z.disable(), u.Z.enableTemp(s.v));
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
        }, [S]);
    let x = r.useCallback((e) => {
            C(e), (0, d.yg)(d.uG.SELECTED_ITEM_CHANGE);
        }, []),
        M = r.useMemo(
            () => ({
                zoomed: T,
                setZoomed: E,
                entering: S === l.Dvm.ENTERING || null == S
            }),
            [T, S]
        ),
        w = n[j];
    return (0, a.jsx)(l.f6W, {
        theme: f.BRd.MIDNIGHT,
        children: (e) => {
            var r, o;
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
                        className: i()(O.carouselModal, e),
                        transitionState: S
                    },
                    v
                )),
                (o = o =
                    {
                        size: l.CgR.DYNAMIC,
                        animation: c.fM.SUBTLE,
                        fullscreenOnMobile: !1,
                        onClick: t,
                        'aria-label': b.intl.string(b.t.AMTX3t),
                        parentComponent: 'MediaViewerModal',
                        children: (0, a.jsxs)(m.z.Provider, {
                            value: M,
                            children: [
                                (0, a.jsx)(y.Z, {
                                    item: w,
                                    hideMediaOptions: h,
                                    onClose: t
                                }),
                                (0, a.jsx)('div', {
                                    style: { display: 'none' },
                                    ref: P
                                }),
                                (0, a.jsx)(g.ZP, {
                                    items: n,
                                    startIndex: j,
                                    onIndexChange: x,
                                    enabledContentHarmTypeFlags: _,
                                    shouldHideMediaOptions: h
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
