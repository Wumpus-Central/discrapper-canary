n.d(t, {
    EQ: () => g,
    ZP: () => m
});
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(540059),
    a = n(605236),
    s = n(930153),
    c = n(432792),
    u = n(981631),
    d = n(388032);
let p = (e) => {
        let { onClose: t, renderTail: n, invertCoachmark: i, coachmarkRef: l, tailLeftOffset: o = 41 } = e;
        return (0, r.jsx)(c.tE, {
            titleText: d.NW.string(d.t['9ItSXV']),
            descriptionText: d.NW.format(d.t.TcvbUl, { quantity: 200 }),
            onClose: t,
            renderTail: n,
            invertCoachmark: i,
            tailLeftOffset: o,
            coachmarkRef: l
        });
    },
    h = () => {
        let e = (0, o.Q3)('VirtualCurrency: ShopOnboardingCoachmark');
        return {
            getRequiredSpacingFromTop: i.useCallback(() => {
                let t = (0, s.Lk)(document.body.style.getPropertyValue('--custom-channel-header-height'), 48),
                    n = (0, s.Lk)(document.body.style.getPropertyValue('--custom-app-top-bar-height'), 36);
                return e ? t + n : t;
            }, [e]),
            tailLeftOffset: e ? 32 : 41,
            isVisualRefreshEnabled: e
        };
    },
    f = (e) => {
        let { onClose: t, renderTail: n = !1, offsetControlRef: l, backgroundElementRef: o } = e,
            { getRequiredSpacingFromTop: a, tailLeftOffset: s } = h(),
            u = i.useRef(null),
            d = i.useCallback(
                (e) => {
                    let t = (e.bottom + e.top) / 2;
                    return !(t <= a() + f.COACHMARK_VERTICAL_OFFSET || t > window.innerHeight - ((0, c.t4)() + f.COACHMARK_VERTICAL_OFFSET));
                },
                [a]
            );
        return (0, r.jsx)(c.U_, {
            offsetControlRef: l,
            coachmarkRef: u,
            backgroundElementRef: o,
            calculateVisibility: d,
            calculateBaseOffsets: () => ({
                left: 0,
                verticalOffset: f.COACHMARK_VERTICAL_OFFSET
            }),
            children: (0, r.jsx)(p, {
                onClose: t,
                renderTail: n,
                tailLeftOffset: s,
                coachmarkRef: u
            })
        });
    };
f.COACHMARK_VERTICAL_OFFSET = 4;
let g = (e) => {
        let { isVirtualCurrencyEnabled: t, listScrollerRef: n } = e,
            r = i.useRef(null),
            o = i.useCallback(() => {
                null !== r.current && r.current.updateElementOffsets();
            }, []),
            s = i.useCallback(() => {
                null !== n.current && n.current.scrollToTop({ animate: !0 });
            }, [n]),
            d = (0, a.wE)(l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
            { shouldShow: p, closeCoachmarkIfOpen: h } = (0, c.M)({
                onboardingCoachmarkType: 'shop',
                prevCoachmarksDismissed: d,
                onShowCoachmarkHandler: s
            });
        return t
            ? {
                  shouldShow: p,
                  closeCoachmarkIfOpen: h,
                  onHandleScroll: o,
                  offsetControlRef: r
              }
            : {
                  shouldShow: !1,
                  closeCoachmarkIfOpen: u.dG4,
                  onHandleScroll: u.dG4,
                  offsetControlRef: r
              };
    },
    m = f;
