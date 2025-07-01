(n.d(t, {
    Z: () => P,
    h: () => w
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(525654),
    s = n.n(a),
    c = n(91192),
    u = n(442837),
    d = n(524437),
    h = n(481060),
    p = n(570140),
    f = n(607070),
    g = n(724757),
    m = n(216789),
    b = n(626135),
    _ = n(585483),
    O = n(358085),
    y = n(143316),
    v = n(240126),
    C = n(791914),
    j = n(147522),
    S = n(809780),
    E = n(981631),
    x = n(388032),
    I = n(128406);
function P(e) {
    var t, n, l, a, P, w, Z;
    let { setTab: T, onJump: A, showTutorial: R, setSeenTutorial: D, closePopout: L, badgeState: M } = e,
        k = i.useRef(null),
        [U, G] = (0, S.ZP)(k),
        { loadState: B, channels: F } = U,
        { maybeLoadMore: V, markAllRead: H } = G;
    ((t = k),
        (n = U),
        (l = G),
        i.useLayoutEffect(() => {
            var e;
            let { scrollToChannelIndex: r } = n;
            l.clearScrollToChannelIndex();
            let { current: i } = t;
            if (null == i || null == r) return;
            let o = null == (e = i.getScrollerNode()) ? void 0 : e.children;
            if (null == o) return;
            let a = o[r];
            if (null == a) return;
            let { scrollTop: s, offsetHeight: c } = i.getScrollerState();
            (a.offsetTop < s || a.offsetTop > s + c) && i.scrollTo({ to: a.offsetTop });
        }),
        (a = U),
        (P = G),
        i.useEffect(() => {
            let e = () => {
                let e = a.channels.find((e) => !e.collapsed);
                null != e && P.markChannelRead(e);
            };
            return (
                _.S.subscribe(E.CkL.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    _.S.unsubscribe(E.CkL.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [P, a.channels]),
        (w = G),
        i.useEffect(() => {
            let e = (e) => {
                ((0, O.isMac)() || (0, O.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && 'z' === e.key && w.undoMarkChannelRead();
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [w]),
        i.useEffect(() => {
            b.default.track(E.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        i.useEffect(
            () => (
                p.Z.subscribe('CONNECTION_OPEN', L),
                () => {
                    p.Z.unsubscribe('CONNECTION_OPEN', L);
                }
            ),
            [L]
        ));
    let z = (0, u.e7)([f.Z], () => f.Z.messageGroupSpacing),
        W = (0, m.Us)({ location: 'Unreads' }),
        K = (0, g.Z)('unreads', k);
    if (0 === F.length) {
        return (0, r.jsxs)('div', {
            className: o()(I.container, { [I.widerInbox]: W }),
            children: [
                (0, r.jsx)(C.Z, {
                    tab: d.X.UNREADS,
                    setTab: T,
                    badgeState: M,
                    closePopout: L
                }),
                (0, r.jsx)(v.Z, {
                    Icon: h.xx7,
                    header: x.intl.string(x.t['6XMM+P']),
                    tip: (null == (Z = s().os) ? void 0 : Z.family) === 'OS X' ? x.intl.string(x.t.w9uDOT) : x.intl.string(x.t.BiUJCw)
                })
            ]
        });
    }
    return (0, r.jsxs)('div', {
        className: o()(I.container, 'group-spacing-'.concat(z), { [I.widerInbox]: W }),
        'aria-label': x.intl.string(x.t.sRUdBw),
        children: [
            (0, r.jsx)(C.Z, {
                tab: d.X.UNREADS,
                setTab: T,
                badgeState: M,
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
                                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                }
                                return i;
                            })(e, ['ref']);
                        return (0, r.jsxs)(
                            h.h21,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })(
                                {
                                    ref: (e) => {
                                        var t;
                                        ((k.current = e), (i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null));
                                    }
                                },
                                l
                            )),
                            (n = n =
                                {
                                    onScroll: B === S.jd.Done ? void 0 : V,
                                    className: I.scroller,
                                    children: [R ? (0, r.jsx)(N, { setSeenTutorial: D }) : null, (0, j.Z)(F, G, A), B === S.jd.Done ? null : (0, r.jsx)(h.$jN, { className: I.spinner })]
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
function N(e) {
    let { setSeenTutorial: t } = e;
    return (0, r.jsxs)('div', {
        className: I.tutorial,
        children: [
            (0, r.jsx)('div', {
                className: I.tutorialIcon,
                children: (0, r.jsx)(h.xx7, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(h.X6q, {
                        className: I.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: x.intl.string(x.t.vZPktL)
                    }),
                    (0, r.jsx)(h.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: x.intl.string(x.t.vWkIIC)
                    }),
                    (0, r.jsx)(h.zxk, {
                        className: I.tutorialButton,
                        onClick: t,
                        size: h.zxk.Sizes.SMALL,
                        children: x.intl.string(x.t['+IrDzM'])
                    })
                ]
            })
        ]
    });
}
function w(e) {
    let { setTab: t, badgeState: n, closePopout: i } = e;
    return (0, r.jsxs)('div', {
        className: I.container,
        children: [
            (0, r.jsx)(C.Z, {
                tab: d.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: i
            }),
            (0, r.jsx)(v.Z, {
                Icon: h.xx7,
                disableStars: !0,
                header: x.intl.string(x.t['KG/ynZ']),
                tip: x.intl.string(x.t.cvcKzc)
            })
        ]
    });
}
