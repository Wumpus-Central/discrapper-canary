n.d(t, {
    t: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
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
    L = n(988113);
function S() {
    let { activeSubscription: e, purchaseError: t, paymentError: n, setPurchaseError: s, selectedSkuId: S, selectedPlan: g, setSelectedSkuId: E, setSelectedPlanId: I, setSelectedPlanNotification: M } = (0, _.usePaymentContext)(),
        { isGift: v } = (0, h.wD)(),
        [y, T] = l.useState(!1),
        [N, P] = l.useState(!1),
        [Z, A] = l.useState(!1);
    return (
        l.useEffect(() => {
            let i = setTimeout(() => {
                if (S === j.Si.TIER_2 && (null == e ? !void 0 : !e.isPremium) && !v) ((null == t ? void 0 : t.code) === d.SM.BILLING_INSUFFICIENT_FUNDS || (null == n ? void 0 : n.code) === d.SM.BILLING_INSUFFICIENT_FUNDS) && A(!0);
            }, 1500);
            return () => clearTimeout(i);
        }, [e, v, n, t, S, A]),
        (0, i.jsxs)('div', {
            className: r()(L.upsellContainer, Z ? L.interactable : null),
            hidden: N,
            children: [
                (0, i.jsx)(c.H, {}),
                (0, i.jsx)(c.Z, {
                    show: Z,
                    children: (0, i.jsx)(u.L, {
                        message: m.intl.format(m.t.dk8zl5, {
                            perkHover: (e, t) =>
                                (0, i.jsx)(
                                    'span',
                                    {
                                        onMouseEnter: () => {
                                            x.default.track(f.rMx.NITRO_BASIC_UPSELL_PERK_HOVERED), T(!0);
                                        },
                                        onMouseLeave: () => T(!1),
                                        children: e
                                    },
                                    'post-failure-nitro-basic-upsell-perk-hover'
                                )
                        }),
                        handleClick: () => {
                            s(null), a.Z.wait(C.pB), a.Z.wait(o.fw), M(m.intl.string(m.t['/5p4ws'])), E(j.Si.TIER_0);
                            let e = j.Xh.PREMIUM_MONTH_TIER_0;
                            (null == g ? void 0 : g.id) === j.Xh.PREMIUM_YEAR_TIER_2 && (e = j.Xh.PREMIUM_YEAR_TIER_0), I(e), P(!0);
                        },
                        handleClose: () => P(!0),
                        handleImageClick: () => {},
                        buttonText: m.intl.string(m.t['7aa9vr']),
                        useInitialGlow: !0,
                        useGlowOnHover: !0,
                        upsellType: 'post-failure-nitro-basic-upsell',
                        themeOverride: u.T.NITRO_BASIC,
                        analyticsLocations: f.Sbl.NITRO_BASIC_UPSELL
                    })
                }),
                y &&
                    (0, i.jsxs)('div', {
                        className: L.tooltip,
                        children: [
                            (0, i.jsx)(p.lq, {
                                className: L.tier0Card,
                                showWumpus: !0,
                                showYearlyPrice: !0
                            }),
                            (0, i.jsx)('div', { className: L.tooltipTail })
                        ]
                    })
            ]
        })
    );
}
