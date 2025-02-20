n.d(t, { t: () => g }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(570140),
    o = n(366939),
    C = n(16084),
    d = n(128069),
    c = n(643939),
    u = n(45595),
    p = n(823188),
    x = n(626135),
    f = n(987209),
    h = n(563132),
    _ = n(981631),
    j = n(474936),
    m = n(388032),
    L = n(262957);
function g() {
    let { activeSubscription: e, purchaseError: t, paymentError: n, setPurchaseError: s, selectedSkuId: g, selectedPlan: E, setSelectedSkuId: S, setSelectedPlanId: N, setSelectedPlanNotification: y } = (0, h.JL)(),
        { isGift: I } = (0, f.wD)(),
        [O, v] = i.useState(!1),
        [P, b] = i.useState(!1),
        [T, M] = i.useState(!1);
    return (
        i.useEffect(() => {
            let l = setTimeout(() => {
                g === j.Si.TIER_2 && (null == e || !e.isPremium) && !I && ((null == t ? void 0 : t.code) === d.SM.BILLING_INSUFFICIENT_FUNDS || (null == n ? void 0 : n.code) === d.SM.BILLING_INSUFFICIENT_FUNDS) && M(!0);
            }, 1500);
            return () => clearTimeout(l);
        }, [e, I, n, t, g, M]),
        (0, l.jsxs)('div', {
            className: r()(L.upsellContainer, T ? L.interactable : null),
            hidden: P,
            children: [
                (0, l.jsx)(u.H, {}),
                (0, l.jsx)(u.Z, {
                    show: T,
                    children: (0, l.jsx)(c.L, {
                        message: m.NW.format(m.t.dk8zl5, {
                            perkHover: (e, t) =>
                                (0, l.jsx)(
                                    'span',
                                    {
                                        onMouseEnter: () => {
                                            x.default.track(_.rMx.NITRO_BASIC_UPSELL_PERK_HOVERED), v(!0);
                                        },
                                        onMouseLeave: () => v(!1),
                                        children: e
                                    },
                                    'post-failure-nitro-basic-upsell-perk-hover'
                                )
                        }),
                        handleClick: () => {
                            s(null), a.Z.wait(C.pB), a.Z.wait(o.fw), y(m.NW.string(m.t['/5p4ws'])), S(j.Si.TIER_0);
                            let e = j.Xh.PREMIUM_MONTH_TIER_0;
                            (null == E ? void 0 : E.id) === j.Xh.PREMIUM_YEAR_TIER_2 && (e = j.Xh.PREMIUM_YEAR_TIER_0), N(e), b(!0);
                        },
                        handleClose: () => b(!0),
                        handleImageClick: () => {},
                        buttonText: m.NW.string(m.t['7aa9vr']),
                        useInitialGlow: !0,
                        useGlowOnHover: !0,
                        upsellType: 'post-failure-nitro-basic-upsell',
                        themeOverride: c.T.NITRO_BASIC,
                        analyticsLocations: _.Sbl.NITRO_BASIC_UPSELL
                    })
                }),
                O &&
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
