n.d(t, {
    Z: () => j,
    h: () => Z
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(525654),
    o = n.n(s),
    c = n(91192),
    d = n(442837),
    u = n(524437),
    m = n(481060),
    h = n(570140),
    _ = n(607070),
    p = n(724757),
    g = n(216789),
    f = n(626135),
    x = n(585483),
    E = n(358085),
    C = n(143316),
    v = n(240126),
    I = n(791914),
    N = n(207950),
    S = n(809780),
    T = n(981631),
    b = n(388032),
    A = n(826310);
function j(e) {
    var t, n, a, s, j, Z, R;
    let { setTab: L, onJump: P, showTutorial: k, setSeenTutorial: M, closePopout: O, badgeState: D } = e,
        w = l.useRef(null),
        [F, U] = (0, S.ZP)(w),
        { loadState: B, channels: G } = F,
        { maybeLoadMore: H, markAllRead: V } = U;
    (t = w),
        (n = F),
        (a = U),
        l.useLayoutEffect(() => {
            var e;
            let { scrollToChannelIndex: i } = n;
            a.clearScrollToChannelIndex();
            let { current: l } = t;
            if (null == l || null == i) return;
            let r = null === (e = l.getScrollerNode()) || void 0 === e ? void 0 : e.children;
            if (null == r) return;
            let s = r[i];
            if (null == s) return;
            let { scrollTop: o, offsetHeight: c } = l.getScrollerState();
            (s.offsetTop < o || s.offsetTop > o + c) && l.scrollTo({ to: s.offsetTop });
        }),
        (s = F),
        (j = U),
        l.useEffect(() => {
            let e = () => {
                let e = s.channels.find((e) => !e.collapsed);
                null != e && j.markChannelRead(e);
            };
            return (
                x.S.subscribe(T.CkL.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    x.S.unsubscribe(T.CkL.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [j, s.channels]),
        (Z = U),
        l.useEffect(() => {
            let e = (e) => {
                ((0, E.isMac)() || (0, E.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && 'z' === e.key && Z.undoMarkChannelRead();
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [Z]),
        l.useEffect(() => {
            f.default.track(T.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        l.useEffect(
            () => (
                h.Z.subscribe('CONNECTION_OPEN', O),
                () => {
                    h.Z.unsubscribe('CONNECTION_OPEN', O);
                }
            ),
            [O]
        );
    let z = (0, d.e7)([_.Z], () => _.Z.messageGroupSpacing),
        W = (0, g.Us)({ location: 'Unreads' }),
        K = (0, p.Z)('unreads', w);
    if (0 === G.length) {
        return (0, i.jsxs)('div', {
            className: r()(A.container, { [A.widerInbox]: W }),
            children: [
                (0, i.jsx)(I.Z, {
                    tab: u.X.UNREADS,
                    setTab: L,
                    badgeState: D,
                    closePopout: O
                }),
                (0, i.jsx)(v.Z, {
                    Icon: m.xx7,
                    header: b.intl.string(b.t['6XMM+P']),
                    tip: (null === (R = o().os) || void 0 === R ? void 0 : R.family) === 'OS X' ? b.intl.string(b.t.w9uDOT) : b.intl.string(b.t.BiUJCw)
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: r()(A.container, 'group-spacing-'.concat(z), { [A.widerInbox]: W }),
        'aria-label': b.intl.string(b.t.sRUdBw),
        children: [
            (0, i.jsx)(I.Z, {
                tab: u.X.UNREADS,
                setTab: L,
                badgeState: D,
                closePopout: O,
                children: (0, i.jsx)(C.Z, {
                    type: 'top-header',
                    onClick: V
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: K,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, i.jsxs)(m.h21, {
                            ref: (e) => {
                                var n;
                                (w.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            ...n,
                            onScroll: B === S.jd.Done ? void 0 : H,
                            className: A.scroller,
                            children: [k ? (0, i.jsx)(y, { setSeenTutorial: M }) : null, (0, N.Z)(G, U, P), B === S.jd.Done ? null : (0, i.jsx)(m.$jN, { className: A.spinner })]
                        });
                    }
                })
            })
        ]
    });
}
function y(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)('div', {
        className: A.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: A.tutorialIcon,
                children: (0, i.jsx)(m.xx7, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(m.X6q, {
                        className: A.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: b.intl.string(b.t.vZPktL)
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: b.intl.string(b.t.vWkIIC)
                    }),
                    (0, i.jsx)(m.zxk, {
                        className: A.tutorialButton,
                        onClick: t,
                        size: m.zxk.Sizes.SMALL,
                        children: b.intl.string(b.t['+IrDzM'])
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    let { setTab: t, badgeState: n, closePopout: l } = e;
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(I.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: l
            }),
            (0, i.jsx)(v.Z, {
                Icon: m.xx7,
                disableStars: !0,
                header: b.intl.string(b.t['KG/ynZ']),
                tip: b.intl.string(b.t.cvcKzc)
            })
        ]
    });
}
