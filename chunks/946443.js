n.d(t, {
    Z: function () {
        return b;
    },
    h: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(91192),
    d = n(442837),
    u = n(524437),
    m = n(481060),
    h = n(570140),
    f = n(607070),
    p = n(724757),
    _ = n(626135),
    g = n(585483),
    E = n(358085),
    C = n(143316),
    I = n(240126),
    x = n(791914),
    N = n(147522),
    v = n(809780),
    T = n(981631),
    S = n(388032),
    A = n(826310);
function b(e) {
    let { setTab: t, onJump: n, showTutorial: l, setSeenTutorial: o, closePopout: b, badgeState: R } = e,
        Z = r.useRef(null),
        [P, L] = (0, v.ZP)(Z),
        { loadState: y, channels: O } = P,
        { maybeLoadMore: M, markAllRead: k } = L;
    (function (e, t, n) {
        r.useLayoutEffect(() => {
            var i;
            let { scrollToChannelIndex: r } = t;
            n.clearScrollToChannelIndex();
            let { current: l } = e;
            if (null == l || null == r) return;
            let a = null === (i = l.getScrollerNode()) || void 0 === i ? void 0 : i.children;
            if (null == a) return;
            let o = a[r];
            if (null == o) return;
            let { scrollTop: s, offsetHeight: c } = l.getScrollerState();
            (o.offsetTop < s || o.offsetTop > s + c) && l.scrollTo({ to: o.offsetTop });
        });
    })(Z, P, L),
        (function (e, t) {
            r.useEffect(() => {
                let n = () => {
                    let n = e.channels.find((e) => !e.collapsed);
                    null != n && t.markChannelRead(n);
                };
                return (
                    g.S.subscribe(T.CkL.MARK_TOP_INBOX_CHANNEL_READ, n),
                    () => {
                        g.S.unsubscribe(T.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
                    }
                );
            }, [t, e.channels]);
        })(P, L),
        (function (e) {
            r.useEffect(() => {
                let t = (t) => {
                    ((0, E.isMac)() || (0, E.isMacWeb)() ? t.metaKey : t.ctrlKey) && !t.shiftKey && !t.altKey && 'z' === t.key && e.undoMarkChannelRead();
                };
                return (
                    document.addEventListener('keydown', t),
                    () => {
                        document.removeEventListener('keydown', t);
                    }
                );
            }, [e]);
        })(L),
        r.useEffect(() => {
            _.default.track(T.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        r.useEffect(
            () => (
                h.Z.subscribe('CONNECTION_OPEN', b),
                () => {
                    h.Z.unsubscribe('CONNECTION_OPEN', b);
                }
            ),
            [b]
        );
    let D = (0, d.e7)([f.Z], () => f.Z.messageGroupSpacing),
        B = (0, p.Z)('unreads', Z);
    if (0 === O.length) {
        var U;
        return (0, i.jsxs)('div', {
            className: A.container,
            children: [
                (0, i.jsx)(x.Z, {
                    tab: u.X.UNREADS,
                    setTab: t,
                    badgeState: R,
                    closePopout: b
                }),
                (0, i.jsx)(I.Z, {
                    Icon: m.InboxIcon,
                    header: S.intl.string(S.t['6XMM+P']),
                    tip: (null === (U = s().os) || void 0 === U ? void 0 : U.family) === 'OS X' ? S.intl.string(S.t.w9uDOT) : S.intl.string(S.t.BiUJCw)
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: a()(A.container, 'group-spacing-'.concat(D)),
        'aria-label': S.intl.string(S.t.sRUdBw),
        children: [
            (0, i.jsx)(x.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: R,
                closePopout: b,
                children: (0, i.jsx)(C.Z, {
                    type: 'top-header',
                    onClick: k
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: B,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: t, ...r } = e;
                        return (0, i.jsxs)(m.AdvancedScrollerThin, {
                            ref: (e) => {
                                var n;
                                (Z.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            ...r,
                            onScroll: y === v.jd.Done ? void 0 : M,
                            className: A.scroller,
                            children: [l ? (0, i.jsx)(j, { setSeenTutorial: o }) : null, (0, N.Z)(O, L, n), y === v.jd.Done ? null : (0, i.jsx)(m.Spinner, { className: A.spinner })]
                        });
                    }
                })
            })
        ]
    });
}
function j(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)('div', {
        className: A.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: A.tutorialIcon,
                children: (0, i.jsx)(m.InboxIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(m.Heading, {
                        className: A.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: S.intl.string(S.t.vZPktL)
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: S.intl.string(S.t.vWkIIC)
                    }),
                    (0, i.jsx)(m.Button, {
                        className: A.tutorialButton,
                        onClick: t,
                        size: m.Button.Sizes.SMALL,
                        children: S.intl.string(S.t['+IrDzM'])
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { setTab: t, badgeState: n, closePopout: r } = e;
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(x.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: r
            }),
            (0, i.jsx)(I.Z, {
                Icon: m.InboxIcon,
                disableStars: !0,
                header: S.intl.string(S.t['KG/ynZ']),
                tip: S.intl.string(S.t.cvcKzc)
            })
        ]
    });
}
