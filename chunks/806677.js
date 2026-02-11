t.d(r, { default: () => x });
var i = t(627968),
    a = t(64700),
    n = t(158954),
    l = t(397927),
    o = t(937008),
    s = t(156312),
    d = t(532794),
    u = t(672525),
    c = t(788868),
    f = t(652215),
    _ = t(985018),
    m = t(958237);
function p(e) {
    let { onSelectSku: r, priceOptions: t, showPromotionalGiftBanner: a } = e;
    return (0, i.jsxs)("div", {
        className: m.u6,
        children: [
            (0, i.jsx)(u.D3, {
                onClick: () => r(c.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: a,
            }),
            (0, i.jsx)(u.Ls, { onClick: () => r(c.pe.TIER_0), isGift: !0, priceOptions: t, removeTopMargin: !0 }),
        ],
    });
}
function C() {
    return (0, i.jsx)("div", {
        className: m.jf,
        children: (0, i.jsx)("div", {
            className: m.KN,
            children: Array.from({ length: 6 }).map((e, r) => (0, i.jsx)("div", { className: m.lV }, r)),
        }),
    });
}
function g(e) {
    let {
            giftRecipient: r,
            onClose: t,
            transitionState: u,
            analyticsLocations: g,
            analyticsLocation: x,
            analyticsObject: h,
            giftMessage: P,
            giftingOrigin: T = c.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: b } = (0, s.P5)(),
        { claimableRewards: I } = (0, o.Pv)(),
        j = null != I && I.length > 0,
        G = a.useCallback(
            (e) => {
                (0, d.A)({
                    isGift: !0,
                    giftRecipient: r,
                    subscriptionTier: e,
                    giftingOrigin: T,
                    analyticsLocations: g ?? [],
                    analyticsLocation: x,
                    analyticsObject: h ?? {
                        page: f.liQ.DM_CHANNEL,
                        section: f.JJy.CHANNEL_TEXT_AREA,
                        object: f.ZSU.BUTTON_ICON,
                        objectType: f.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: P,
                }),
                    t();
            },
            [r, g, x, h, P, t, T],
        );
    return (0, i.jsxs)(n.dWK, {
        transitionState: u,
        size: "lg",
        onClose: t,
        "aria-label": _.intl.string(_.t["wg/30i"]),
        children: [
            (0, i.jsx)(n.rQ0, { title: _.intl.string(_.t["wg/30i"]) }),
            (0, i.jsx)(l.HOs, {
                className: m.XG,
                children: (0, i.jsxs)("div", {
                    className: m.Qs,
                    children: [
                        (0, i.jsx)(p, { onSelectSku: G, priceOptions: b, showPromotionalGiftBanner: j }),
                        (0, i.jsx)(C, {}),
                    ],
                }),
            }),
        ],
    });
}
function x(e) {
    let {
        giftRecipient: r,
        onClose: t,
        transitionState: a,
        analyticsLocations: n,
        analyticsLocation: l,
        analyticsObject: d,
        giftMessage: u,
        giftingOrigin: f = c.vQ.DM_CHANNEL,
    } = e;
    return (0, i.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: c.T7,
        isGift: !0,
        children: (0, i.jsx)(o.dX, {
            isGift: !0,
            giftRecipient: r,
            giftingOrigin: f,
            children: (0, i.jsx)(g, {
                giftRecipient: r,
                onClose: t,
                transitionState: a,
                analyticsLocations: n,
                analyticsLocation: l,
                analyticsObject: d,
                giftMessage: u,
                giftingOrigin: f,
            }),
        }),
    });
}
