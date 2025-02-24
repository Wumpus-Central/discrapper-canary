n.d(t, {
    EQ: () => m,
    ZP: () => b
});
var r = n(200651),
    i = n(192379),
    l = n(540059),
    o = n(930153),
    a = n(432792),
    s = n(981631),
    c = n(388032),
    u = n(508060),
    d = n(232474);
let p = () =>
        (0, r.jsx)('div', {
            className: u.assetContainer,
            children: (0, r.jsx)('img', {
                src: d.Z,
                className: u.asset,
                alt: 'Orb GIF'
            })
        }),
    h = (e) => {
        let { onClose: t, renderTail: n, invertCoachmark: i, coachmarkRef: l, tailLeftOffset: o = 41 } = e;
        return (0, r.jsx)(a.tE, {
            titleText: c.NW.string(c.t['9ItSXV']),
            descriptionText: c.NW.format(c.t.TcvbUl, { quantity: 200 }),
            onClose: t,
            renderTail: n,
            invertCoachmark: i,
            tailLeftOffset: o,
            coachmarkRef: l,
            children: (0, r.jsx)(p, {})
        });
    },
    f = () => {
        let e = (0, l.Q3)('VirtualCurrency: ShopOnboardingCoachmark');
        return {
            getRequiredSpacingFromTop: i.useCallback(() => {
                let t = (0, o.Lk)(document.body.style.getPropertyValue('--custom-channel-header-height'), 48),
                    n = (0, o.Lk)(document.body.style.getPropertyValue('--custom-app-top-bar-height'), 36);
                return e ? t + n : t;
            }, [e]),
            tailLeftOffset: e ? 32 : 41,
            isVisualRefreshEnabled: e
        };
    },
    g = (e) => {
        let { onClose: t, renderTail: n = !1, offsetControlRef: l, backgroundElementRef: o } = e,
            { getRequiredSpacingFromTop: s, tailLeftOffset: c } = f(),
            u = i.useRef(null),
            d = i.useCallback(
                (e) => {
                    let t = (e.bottom + e.top) / 2;
                    return !(t <= s() + g.COACHMARK_VERTICAL_OFFSET || t > window.innerHeight - ((0, a.t4)() + g.COACHMARK_VERTICAL_OFFSET));
                },
                [s]
            );
        return (0, r.jsx)(a.U_, {
            offsetControlRef: l,
            coachmarkRef: u,
            backgroundElementRef: o,
            calculateVisibility: d,
            calculateBaseOffsets: () => ({
                left: 0,
                verticalOffset: g.COACHMARK_VERTICAL_OFFSET
            }),
            children: (0, r.jsx)(h, {
                onClose: t,
                renderTail: n,
                tailLeftOffset: c,
                coachmarkRef: u
            })
        });
    };
g.COACHMARK_VERTICAL_OFFSET = 4;
let m = (e) => {
        let { isVirtualCurrencyEnabled: t, listScrollerRef: n } = e,
            r = i.useRef(null),
            l = i.useCallback(() => {
                null !== r.current && r.current.updateElementOffsets();
            }, []),
            o = i.useCallback(() => {
                null !== n.current && n.current.scrollToTop({ animate: !0 });
            }, [n]),
            { shouldShow: c, closeCoachmarkIfOpen: u } = (0, a.M)({
                onboardingCoachmarkType: 'shop',
                onShowCoachmarkHandler: o
            });
        return t
            ? {
                  shouldShow: c,
                  closeCoachmarkIfOpen: u,
                  onHandleScroll: l,
                  offsetControlRef: r
              }
            : {
                  shouldShow: !1,
                  closeCoachmarkIfOpen: s.dG4,
                  onHandleScroll: s.dG4,
                  offsetControlRef: r
              };
    },
    b = g;
