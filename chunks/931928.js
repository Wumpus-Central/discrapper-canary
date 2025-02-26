n.d(t, {
    ED: () => p,
    fO: () => _,
    qp: () => g
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(512969),
    o = n(442837),
    a = n(540059),
    s = n(703656),
    c = n(664915),
    u = n(751648),
    d = n(432792),
    E = n(981631),
    f = n(642145),
    h = n(388032);
let p = (e) => {
        let { onClose: t, renderTail: n, invertCoachmark: l, tailLeftOffset: i = 22, coachmarkRef: o } = e;
        return (0, r.jsx)(d.tE, {
            titleText: h.NW.string(h.t['3B4+wM']),
            descriptionText: h.NW.format(h.t.V6DQX1, { quantity: 200 }),
            onClose: t,
            renderTail: n,
            tailLeftOffset: i,
            invertCoachmark: l,
            coachmarkRef: o
        });
    },
    C = [E.Z5c.ME, E.Z5c.COLLECTIBLES_SHOP, E.Z5c.NITRO_HOME],
    _ = (e) => {
        let { onClose: t, renderTail: n = !1, backgroundElementRef: f } = e,
            h = l.useRef(null),
            [g, O] = l.useState(22),
            T = l.useRef(null),
            I = (0, a.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
            S = l.useCallback(
                (e) => {
                    if (I) {
                        let t = window.innerHeight - ((0, d.t4)() + _.COACHMARK_VERTICAL_OFFSET);
                        return e.top <= t;
                    }
                    return !0;
                },
                [I]
            ),
            N = (0, o.e7)([c.Z], () => c.Z.getExpandedFolders().size);
        l.useEffect(() => {
            null !== h.current && h.current.updateElementOffsetsWithPolling();
        }, [N]);
        let b = (0, i.TH)(),
            v = l.useCallback(
                () => ({
                    left: 0,
                    verticalOffset: _.COACHMARK_VERTICAL_OFFSET
                }),
                []
            ),
            m = l.useCallback(
                (e) => {
                    g !== e.width / 2 && O(Math.floor(e.width / 2) - 1);
                },
                [g]
            );
        return (0, r.jsx)(d.U_, {
            offsetControlRef: h,
            backgroundElementRef: f,
            coachmarkRef: T,
            calculateVisibility: S,
            calculateBaseOffsets: v,
            onGetBackgroundElementDimensions: m,
            children: (0, r.jsx)(p, {
                onClose: () => {
                    C.includes(b.pathname) || (0, s.uL)(E.Z5c.ME), (0, u.U9)(['shop']), t();
                },
                renderTail: n,
                tailLeftOffset: g,
                coachmarkRef: T
            })
        });
    };
_.COACHMARK_VERTICAL_OFFSET = 10;
let g = (e) => {
    let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: r } = e,
        i = (0, a.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
        o = l.useCallback(() => {
            if (i && null !== n.current) {
                let e = (0, d.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && r();
            }
        }, [i, n, r]),
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
