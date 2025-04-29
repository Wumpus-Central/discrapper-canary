n.d(t, {
    Z: () => N,
    h: () => P
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(91192),
    u = n(442837),
    d = n(524437),
    p = n(481060),
    m = n(570140),
    f = n(607070),
    h = n(724757),
    g = n(216789),
    _ = n(626135),
    b = n(585483),
    x = n(358085),
    y = n(143316),
    E = n(240126),
    v = n(791914),
    O = n(147522),
    j = n(809780),
    C = n(981631),
    S = n(388032),
    I = n(128406);
function N(e) {
    var t, n, l, o, N, P, A;
    let { setTab: w, onJump: Z, showTutorial: R, setSeenTutorial: k, closePopout: D, badgeState: L } = e,
        M = i.useRef(null),
        [U, F] = (0, j.ZP)(M),
        { loadState: B, channels: G } = U,
        { maybeLoadMore: H, markAllRead: V } = F;
    (t = M),
        (n = U),
        (l = F),
        i.useLayoutEffect(() => {
            var e;
            let { scrollToChannelIndex: r } = n;
            l.clearScrollToChannelIndex();
            let { current: i } = t;
            if (null == i || null == r) return;
            let a = null == (e = i.getScrollerNode()) ? void 0 : e.children;
            if (null == a) return;
            let o = a[r];
            if (null == o) return;
            let { scrollTop: s, offsetHeight: c } = i.getScrollerState();
            (o.offsetTop < s || o.offsetTop > s + c) && i.scrollTo({ to: o.offsetTop });
        }),
        (o = U),
        (N = F),
        i.useEffect(() => {
            let e = () => {
                let e = o.channels.find((e) => !e.collapsed);
                null != e && N.markChannelRead(e);
            };
            return (
                b.S.subscribe(C.CkL.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    b.S.unsubscribe(C.CkL.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [N, o.channels]),
        (P = F),
        i.useEffect(() => {
            let e = (e) => {
                ((0, x.isMac)() || (0, x.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && 'z' === e.key && P.undoMarkChannelRead();
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [P]),
        i.useEffect(() => {
            _.default.track(C.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        i.useEffect(
            () => (
                m.Z.subscribe('CONNECTION_OPEN', D),
                () => {
                    m.Z.unsubscribe('CONNECTION_OPEN', D);
                }
            ),
            [D]
        );
    let z = (0, u.e7)([f.Z], () => f.Z.messageGroupSpacing),
        W = (0, g.Us)({ location: 'Unreads' }),
        K = (0, h.Z)('unreads', M);
    if (0 === G.length) {
        return (0, r.jsxs)('div', {
            className: a()(I.container, { [I.widerInbox]: W }),
            children: [
                (0, r.jsx)(v.Z, {
                    tab: d.X.UNREADS,
                    setTab: w,
                    badgeState: L,
                    closePopout: D
                }),
                (0, r.jsx)(E.Z, {
                    Icon: p.xx7,
                    header: S.intl.string(S.t['6XMM+P']),
                    tip: (null == (A = s().os) ? void 0 : A.family) === 'OS X' ? S.intl.string(S.t.w9uDOT) : S.intl.string(S.t.BiUJCw)
                })
            ]
        });
    }
    return (0, r.jsxs)('div', {
        className: a()(I.container, 'group-spacing-'.concat(z), { [I.widerInbox]: W }),
        'aria-label': S.intl.string(S.t.sRUdBw),
        children: [
            (0, r.jsx)(v.Z, {
                tab: d.X.UNREADS,
                setTab: w,
                badgeState: L,
                closePopout: D,
                children: (0, r.jsx)(y.Z, {
                    type: 'top-header',
                    onClick: V
                })
            }),
            (0, r.jsx)(c.bG, {
                navigator: K,
                children: (0, r.jsx)(c.SJ, {
                    children: (e) => {
                        var t,
                            n,
                            { ref: i } = e,
                            l = (function (e, t) {
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
                                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
                                        (M.current = e), (i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    }
                                },
                                l
                            )),
                            (n = n =
                                {
                                    onScroll: B === j.jd.Done ? void 0 : H,
                                    className: I.scroller,
                                    children: [R ? (0, r.jsx)(T, { setSeenTutorial: k }) : null, (0, O.Z)(G, F, Z), B === j.jd.Done ? null : (0, r.jsx)(p.$jN, { className: I.spinner })]
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
function T(e) {
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
                        children: S.intl.string(S.t.vZPktL)
                    }),
                    (0, r.jsx)(p.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: S.intl.string(S.t.vWkIIC)
                    }),
                    (0, r.jsx)(p.zxk, {
                        className: I.tutorialButton,
                        onClick: t,
                        size: p.zxk.Sizes.SMALL,
                        children: S.intl.string(S.t['+IrDzM'])
                    })
                ]
            })
        ]
    });
}
function P(e) {
    let { setTab: t, badgeState: n, closePopout: i } = e;
    return (0, r.jsxs)('div', {
        className: I.container,
        children: [
            (0, r.jsx)(v.Z, {
                tab: d.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: i
            }),
            (0, r.jsx)(E.Z, {
                Icon: p.xx7,
                disableStars: !0,
                header: S.intl.string(S.t['KG/ynZ']),
                tip: S.intl.string(S.t.cvcKzc)
            })
        ]
    });
}
