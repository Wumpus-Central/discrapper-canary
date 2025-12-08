i.d(t, { default: () => p });
var n = i(54381),
    r = i(473749),
    a = i(481060),
    l = i(987209),
    s = i(563132),
    o = i(963249),
    c = i(701464),
    d = i(474936),
    u = i(981631),
    m = i(388032),
    _ = i(926845);
function h(e) {
    let { giftRecipient: t, onClose: i, transitionState: l, analyticsLocations: h, analyticsObject: p } = e,
        { priceOptions: f } = (0, s.JL)(),
        g = r.useCallback(
            (e) => {
                (0, o.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    subscriptionTier: e,
                    giftingOrigin: d.Wt.DM_CHANNEL,
                    analyticsLocations: null != h ? h : [],
                    analyticsObject:
                        null != p
                            ? p
                            : {
                                  page: u.ZY5.DM_CHANNEL,
                                  section: u.jXE.CHANNEL_TEXT_AREA,
                                  object: u.qAy.BUTTON_ICON,
                                  objectType: u.AnalyticsObjectTypes.GIFT,
                              },
                }),
                    i();
            },
            [t, h, p, i],
        );
    return (0, n.jsxs)(a.Y0X, {
        transitionState: l,
        size: a.CgR.DYNAMIC,
        className: _.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(a.xBx, {
                className: _.modalHeader,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, n.jsx)(a.olH, {
                            onClick: i,
                            "data-migration-pending": !0,
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(a.hzk, {
                className: _.modalBody,
                "data-migration-pending": !0,
                children: (0, n.jsx)(c.Z, {
                    onSelectSku: g,
                    giftRecipient: t,
                    priceOptions: f,
                    onWishlistItemClick: i,
                }),
            }),
        ],
    });
}
function p(e) {
    let { giftRecipient: t, onClose: i, transitionState: r, analyticsLocations: a, analyticsObject: o } = e;
    return (0, n.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, n.jsx)(l.KB, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, n.jsx)(h, {
                giftRecipient: t,
                onClose: i,
                transitionState: r,
                analyticsLocations: a,
                analyticsObject: o,
            }),
        }),
    });
}
