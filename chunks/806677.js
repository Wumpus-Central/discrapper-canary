i.d(t, { default: () => A });
var a = i(627968),
    n = i(64700),
    r = i(158954),
    l = i(397927),
    s = i(937008),
    o = i(156312),
    d = i(532794),
    _ = i(672525),
    c = i(788868),
    f = i(652215),
    u = i(985018),
    I = i(8043);
function g(e) {
    let { onSelectSku: t, priceOptions: i, showPromotionalGiftBanner: n } = e;
    return (0, a.jsxs)("div", {
        className: I.u6,
        children: [
            (0, a.jsx)(_.D3, {
                onClick: () => t(c.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: n,
            }),
            (0, a.jsx)(_.Ls, { onClick: () => t(c.pe.TIER_0), isGift: !0, priceOptions: i, removeTopMargin: !0 }),
        ],
    });
}
function m() {
    return (0, a.jsx)("div", {
        className: I.jf,
        children: (0, a.jsx)("div", {
            className: I.KN,
            children: Array.from({ length: 6 }).map((e, t) => (0, a.jsx)("div", { className: I.lV }, t)),
        }),
    });
}
function p(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: _,
            analyticsLocations: p,
            analyticsLocation: A,
            analyticsObject: T,
            giftMessage: S,
            giftingOrigin: N = c.vQ.DM_CHANNEL,
        } = e,
        { priceOptions: G } = (0, o.P5)(),
        { claimableRewards: E } = (0, s.Pv)(),
        b = null != E && E.length > 0,
        C = n.useCallback(
            (e) => {
                (0, d.A)({
                    isGift: !0,
                    giftRecipient: t,
                    subscriptionTier: e,
                    giftingOrigin: N,
                    analyticsLocations: p ?? [],
                    analyticsLocation: A,
                    analyticsObject: T ?? {
                        page: f.liQ.DM_CHANNEL,
                        section: f.JJy.CHANNEL_TEXT_AREA,
                        object: f.ZSU.BUTTON_ICON,
                        objectType: f.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: S,
                }),
                    i();
            },
            [t, p, A, T, S, i, N],
        );
    return (0, a.jsxs)(r.dWK, {
        transitionState: _,
        size: "lg",
        onClose: i,
        "aria-label": u.intl.string(u.t["wg/30i"]),
        children: [
            (0, a.jsx)(r.rQ0, { title: u.intl.string(u.t["wg/30i"]) }),
            (0, a.jsx)(l.HOs, {
                className: I.XG,
                children: (0, a.jsxs)("div", {
                    className: I.Qs,
                    children: [
                        (0, a.jsx)(g, { onSelectSku: C, priceOptions: G, showPromotionalGiftBanner: b }),
                        (0, a.jsx)(m, {}),
                    ],
                }),
            }),
        ],
    });
}
function A(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: r,
        analyticsLocation: l,
        analyticsObject: d,
        giftMessage: _,
        giftingOrigin: f = c.vQ.DM_CHANNEL,
    } = e;
    return (0, a.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: c.T7,
        isGift: !0,
        children: (0, a.jsx)(s.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: f,
            children: (0, a.jsx)(p, {
                giftRecipient: t,
                onClose: i,
                transitionState: n,
                analyticsLocations: r,
                analyticsLocation: l,
                analyticsObject: d,
                giftMessage: _,
                giftingOrigin: f,
            }),
        }),
    });
}
