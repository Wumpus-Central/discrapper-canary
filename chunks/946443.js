n.d(t, {
    Z: () => S,
    h: () => T
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(525654),
    s = n.n(l),
    c = n(91192),
    d = n(442837),
    u = n(524437),
    p = n(481060),
    m = n(570140),
    f = n(607070),
    h = n(724757),
    g = n(216789),
    _ = n(626135),
    b = n(585483),
    v = n(358085),
    y = n(143316),
    x = n(240126),
    O = n(791914),
    E = n(147522),
    j = n(809780),
    N = n(981631),
    C = n(388032),
    I = n(993217);
function S(e) {
    var t, n, a, l, S, T, A;
    let { setTab: w, onJump: Z, showTutorial: k, setSeenTutorial: R, closePopout: L, badgeState: D } = e,
        M = i.useRef(null),
        [W, F] = (0, j.ZP)(M),
        { loadState: U, channels: B } = W,
        { maybeLoadMore: G, markAllRead: H } = F;
    (t = M),
        (n = W),
        (a = F),
        i.useLayoutEffect(() => {
            var e;
            let { scrollToChannelIndex: r } = n;
            a.clearScrollToChannelIndex();
            let { current: i } = t;
            if (null == i || null == r) return;
            let o = null === (e = i.getScrollerNode()) || void 0 === e ? void 0 : e.children;
            if (null == o) return;
            let l = o[r];
            if (null == l) return;
            let { scrollTop: s, offsetHeight: c } = i.getScrollerState();
            (l.offsetTop < s || l.offsetTop > s + c) && i.scrollTo({ to: l.offsetTop });
        }),
        (l = W),
        (S = F),
        i.useEffect(() => {
            let e = () => {
                let e = l.channels.find((e) => !e.collapsed);
                null != e && S.markChannelRead(e);
            };
            return (
                b.S.subscribe(N.CkL.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    b.S.unsubscribe(N.CkL.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [S, l.channels]),
        (T = F),
        i.useEffect(() => {
            let e = (e) => {
                ((0, v.isMac)() || (0, v.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && 'z' === e.key && T.undoMarkChannelRead();
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [T]),
        i.useEffect(() => {
            _.default.track(N.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        i.useEffect(
            () => (
                m.Z.subscribe('CONNECTION_OPEN', L),
                () => {
                    m.Z.unsubscribe('CONNECTION_OPEN', L);
                }
            ),
            [L]
        );
    let V = (0, d.e7)([f.Z], () => f.Z.messageGroupSpacing),
        z = (0, g.Us)({ location: 'Unreads' }),
        K = (0, h.Z)('unreads', M);
    if (0 === B.length) {
        return (0, r.jsxs)('div', {
            className: o()(I.container, { [I.widerInbox]: z }),
            children: [
                (0, r.jsx)(O.Z, {
                    tab: u.X.UNREADS,
                    setTab: w,
                    badgeState: D,
                    closePopout: L
                }),
                (0, r.jsx)(x.Z, {
                    Icon: p.xx7,
                    header: C.NW.string(C.t['6XMM+P']),
                    tip: (null === (A = s().os) || void 0 === A ? void 0 : A.family) === 'OS X' ? C.NW.string(C.t.w9uDOT) : C.NW.string(C.t.BiUJCw)
                })
            ]
        });
    }
    return (0, r.jsxs)('div', {
        className: o()(I.container, 'group-spacing-'.concat(V), { [I.widerInbox]: z }),
        'aria-label': C.NW.string(C.t.sRUdBw),
        children: [
            (0, r.jsx)(O.Z, {
                tab: u.X.UNREADS,
                setTab: w,
                badgeState: D,
                closePopout: L,
                children: (0, r.jsx)(y.Z, {
                    type: 'top-header',
                    onClick: H
                })
            }),
            (0, r.jsx)(c.bG, {
                navigator: K,
                children: (0, r.jsx)(c.SJ, {
                    children: (e) => {
                        var t,
                            n,
                            { ref: i } = e,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = {},
                                            a = Object.keys(e);
                                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                }
                                return i;
                            })(e, ['ref']);
                        return (0, r.jsxs)(
                            p.h21,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    ref: (e) => {
                                        var t;
                                        (M.current = e), (i.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                                    }
                                },
                                a
                            )),
                            (n = n =
                                {
                                    onScroll: U === j.jd.Done ? void 0 : G,
                                    className: I.scroller,
                                    children: [k ? (0, r.jsx)(P, { setSeenTutorial: R }) : null, (0, E.Z)(B, F, Z), U === j.jd.Done ? null : (0, r.jsx)(p.$jN, { className: I.spinner })]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                })
            })
        ]
    });
}
function P(e) {
    let { setSeenTutorial: t } = e;
    return (0, r.jsxs)('div', {
        className: I.tutorial,
        children: [
            (0, r.jsx)('div', {
                className: I.tutorialIcon,
                children: (0, r.jsx)(p.xx7, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(p.X6q, {
                        className: I.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: C.NW.string(C.t.vZPktL)
                    }),
                    (0, r.jsx)(p.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: C.NW.string(C.t.vWkIIC)
                    }),
                    (0, r.jsx)(p.zxk, {
                        className: I.tutorialButton,
                        onClick: t,
                        size: p.zxk.Sizes.SMALL,
                        children: C.NW.string(C.t['+IrDzM'])
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { setTab: t, badgeState: n, closePopout: i } = e;
    return (0, r.jsxs)('div', {
        className: I.container,
        children: [
            (0, r.jsx)(O.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: i
            }),
            (0, r.jsx)(x.Z, {
                Icon: p.xx7,
                disableStars: !0,
                header: C.NW.string(C.t['KG/ynZ']),
                tip: C.NW.string(C.t.cvcKzc)
            })
        ]
    });
}
