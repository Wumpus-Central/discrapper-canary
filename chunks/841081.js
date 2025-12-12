t.d(e, { default: () => p });
var n = t(54381),
    s = t(473749),
    r = t(481060),
    l = t(987209),
    a = t(563132),
    o = t(963249),
    c = t(701464),
    d = t(474936),
    u = t(981631),
    m = t(388032),
    h = t(926845);
function g(i) {
    let {
            giftRecipient: e,
            onClose: t,
            transitionState: l,
            analyticsLocations: g,
            analyticsLocation: p,
            analyticsObject: f,
            giftMessage: I,
        } = i,
        { priceOptions: _ } = (0, a.JL)(),
        j = s.useCallback(
            (i) => {
                (0, o.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    subscriptionTier: i,
                    giftingOrigin: d.Wt.DM_CHANNEL,
                    analyticsLocations: null != g ? g : [],
                    analyticsLocation: p,
                    analyticsObject:
                        null != f
                            ? f
                            : {
                                  page: u.ZY5.DM_CHANNEL,
                                  section: u.jXE.CHANNEL_TEXT_AREA,
                                  object: u.qAy.BUTTON_ICON,
                                  objectType: u.AnalyticsObjectTypes.GIFT,
                              },
                    giftMessage: I,
                }),
                    t();
            },
            [e, g, p, f, I, t],
        );
    return (0, n.jsxs)(r.Y0X, {
        transitionState: l,
        size: r.CgR.DYNAMIC,
        className: h.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(r.xBx, {
                className: h.modalHeader,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(r.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, n.jsx)(r.olH, {
                            onClick: t,
                            "data-migration-pending": !0,
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(r.hzk, {
                className: h.modalBody,
                "data-migration-pending": !0,
                children: (0, n.jsx)(c.Z, {
                    onSelectSku: j,
                    giftRecipient: e,
                    priceOptions: _,
                    onWishlistItemClick: t,
                }),
            }),
        ],
    });
}
function p(i) {
    let {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: r,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: u,
    } = i;
    return (0, n.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, n.jsx)(l.KB, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, n.jsx)(g, {
                giftRecipient: e,
                onClose: t,
                transitionState: s,
                analyticsLocations: r,
                analyticsLocation: o,
                analyticsObject: c,
                giftMessage: u,
            }),
        }),
    });
}
