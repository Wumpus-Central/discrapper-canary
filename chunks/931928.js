n.d(t, {
    ED: () => _,
    fO: () => O,
    qp: () => T
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(512969),
    o = n(442837),
    a = n(540059),
    s = n(703656),
    c = n(664915),
    u = n(751648),
    d = n(432792),
    E = n(981631),
    f = n(642145),
    h = n(388032),
    C = n(907254);
let p = () =>
        (0, l.jsx)('div', {
            className: C.svgContainer,
            children: (0, l.jsx)('img', {
                src: n(39017),
                className: C.svg,
                alt: 'Quests Icon'
            })
        }),
    _ = (e) => {
        let { onClose: t, renderTail: n, invertCoachmark: r, tailLeftOffset: i = 22, coachmarkRef: o } = e;
        return (0, l.jsx)(d.tE, {
            titleText: h.NW.string(h.t['3B4+wM']),
            descriptionText: h.NW.format(h.t.V6DQX1, { quantity: 200 }),
            onClose: t,
            renderTail: n,
            tailLeftOffset: i,
            invertCoachmark: r,
            coachmarkRef: o,
            children: (0, l.jsx)(p, {})
        });
    },
    g = [E.Z5c.ME, E.Z5c.COLLECTIBLES_SHOP, E.Z5c.NITRO_HOME],
    O = (e) => {
        let { onClose: t, renderTail: n = !1, backgroundElementRef: f } = e,
            h = r.useRef(null),
            [C, p] = r.useState(22),
            T = r.useRef(null),
            I = (0, a.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
            S = r.useCallback(
                (e) => {
                    if (I) {
                        let t = window.innerHeight - ((0, d.t4)() + O.COACHMARK_VERTICAL_OFFSET);
                        return e.top <= t;
                    }
                    return !0;
                },
                [I]
            ),
            N = (0, o.e7)([c.Z], () => c.Z.getExpandedFolders().size);
        r.useEffect(() => {
            null !== h.current && h.current.updateElementOffsetsWithPolling();
        }, [N]);
        let m = (0, i.TH)(),
            v = r.useCallback(
                () => ({
                    left: 0,
                    verticalOffset: O.COACHMARK_VERTICAL_OFFSET
                }),
                []
            ),
            b = r.useCallback(
                (e) => {
                    C !== e.width / 2 && p(Math.floor(e.width / 2) - 1);
                },
                [C]
            );
        return (0, l.jsx)(d.U_, {
            offsetControlRef: h,
            backgroundElementRef: f,
            coachmarkRef: T,
            calculateVisibility: S,
            calculateBaseOffsets: v,
            onGetBackgroundElementDimensions: b,
            children: (0, l.jsx)(_, {
                onClose: () => {
                    g.includes(m.pathname) || (0, s.uL)(E.Z5c.ME), (0, u.U9)(['shop']), t();
                },
                renderTail: n,
                tailLeftOffset: C,
                coachmarkRef: T
            })
        });
    };
O.COACHMARK_VERTICAL_OFFSET = 10;
let T = (e) => {
    let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: l } = e,
        i = (0, a.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
        o = r.useCallback(() => {
            if (i && null !== n.current) {
                let e = (0, d.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && l();
            }
        }, [i, n, l]),
        { shouldShow: s, closeCoachmarkIfOpen: c } = (0, d.M)({
            onboardingCoachmarkType: 'discover',
            onShowCoachmarkHandler: o
        });
    return t
        ? {
              shouldShow: s,
              closeCoachmarkIfOpen: c,
              questId: f.V
          }
        : {
              shouldShow: !1,
              closeCoachmarkIfOpen: E.dG4,
              questId: void 0
          };
};
