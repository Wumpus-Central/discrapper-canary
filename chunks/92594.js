n.d(t, { t: () => E }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(570140),
    o = n(366939),
    C = n(16084),
    d = n(128069),
    u = n(643939),
    c = n(45595),
    p = n(823188),
    x = n(626135),
    h = n(987209),
    _ = n(563132),
    f = n(981631),
    j = n(474936),
    m = n(388032),
    L = n(805683);
function E() {
    let { activeSubscription: e, purchaseError: t, paymentError: n, setPurchaseError: s, selectedSkuId: E, selectedPlan: g, setSelectedSkuId: S, setSelectedPlanId: I, setSelectedPlanNotification: N } = (0, _.JL)(),
        { isGift: T } = (0, h.wD)(),
        [M, v] = i.useState(!1),
        [y, Z] = i.useState(!1),
        [P, k] = i.useState(!1);
    return (
        i.useEffect(() => {
            let l = setTimeout(() => {
                E === j.Si.TIER_2 && (null == e || !e.isPremium) && !T && ((null == t ? void 0 : t.code) === d.SM.BILLING_INSUFFICIENT_FUNDS || (null == n ? void 0 : n.code) === d.SM.BILLING_INSUFFICIENT_FUNDS) && k(!0);
            }, 1500);
            return () => clearTimeout(l);
        }, [e, T, n, t, E, k]),
        (0, l.jsxs)('div', {
            className: r()(L.upsellContainer, P ? L.interactable : null),
            hidden: y,
            children: [
                (0, l.jsx)(c.H, {}),
                (0, l.jsx)(c.Z, {
                    show: P,
                    children: (0, l.jsx)(u.L, {
                        message: m.intl.format(m.t.dk8zl5, {
                            perkHover: (e, t) =>
                                (0, l.jsx)(
                                    'span',
                                    {
                                        onMouseEnter: () => {
                                            x.default.track(f.rMx.NITRO_BASIC_UPSELL_PERK_HOVERED), v(!0);
                                        },
                                        onMouseLeave: () => v(!1),
                                        children: e
                                    },
                                    'post-failure-nitro-basic-upsell-perk-hover'
                                )
                        }),
                        handleClick: () => {
                            s(null), a.Z.wait(C.pB), a.Z.wait(o.fw), N(m.intl.string(m.t['/5p4ws'])), S(j.Si.TIER_0);
                            let e = j.Xh.PREMIUM_MONTH_TIER_0;
                            (null == g ? void 0 : g.id) === j.Xh.PREMIUM_YEAR_TIER_2 && (e = j.Xh.PREMIUM_YEAR_TIER_0), I(e), Z(!0);
                        },
                        handleClose: () => Z(!0),
                        handleImageClick: () => {},
                        buttonText: m.intl.string(m.t['7aa9vr']),
                        useInitialGlow: !0,
                        useGlowOnHover: !0,
                        upsellType: 'post-failure-nitro-basic-upsell',
                        themeOverride: u.T.NITRO_BASIC,
                        analyticsLocations: f.Sbl.NITRO_BASIC_UPSELL
                    })
                }),
                M &&
                    (0, l.jsxs)('div', {
                        className: L.tooltip,
                        children: [
                            (0, l.jsx)(p.lq, {
                                className: L.tier0Card,
                                showWumpus: !0,
                                showYearlyPrice: !0
                            }),
                            (0, l.jsx)('div', { className: L.tooltipTail })
                        ]
                    })
            ]
        })
    );
}
