t.d(i, { default: () => p });
var n = t(54381),
    r = t(473749),
    l = t(481060),
    a = t(987209),
    s = t(563132),
    o = t(963249),
    c = t(701464),
    d = t(474936),
    u = t(981631),
    m = t(388032),
    _ = t(926845);
function h(e) {
    let { giftRecipient: i, onClose: t, transitionState: a, analyticsLocations: h, analyticsObject: p } = e,
        { priceOptions: f } = (0, s.JL)(),
        g = r.useCallback(
            (e) => {
                (0, o.Z)({
                    isGift: !0,
                    giftRecipient: i,
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
                    t();
            },
            [i, h, p, t],
        );
    return (0, n.jsxs)(l.Y0X, {
        transitionState: a,
        size: l.CgR.DYNAMIC,
        className: _.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.xBx, {
                className: _.modalHeader,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(l.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, n.jsx)(l.olH, {
                            onClick: t,
                            "data-migration-pending": !0,
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(l.hzk, {
                className: _.modalBody,
                "data-migration-pending": !0,
                children: (0, n.jsx)(c.Z, {
                    onSelectSku: g,
                    giftRecipient: i,
                    priceOptions: f,
                    onWishlistItemClick: t,
                }),
            }),
        ],
    });
}
function p(e) {
    let { giftRecipient: i, onClose: t, transitionState: r, analyticsLocations: l, analyticsObject: o } = e;
    return (0, n.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, n.jsx)(a.KB, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, n.jsx)(h, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: l,
                analyticsObject: o,
            }),
        }),
    });
}
