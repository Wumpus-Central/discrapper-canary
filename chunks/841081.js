t.d(i, { default: () => p });
var n = t(54381),
    r = t(473749),
    a = t(481060),
    l = t(987209),
    s = t(563132),
    o = t(963249),
    c = t(701464),
    d = t(474936),
    u = t(981631),
    m = t(388032),
    h = t(926845);
function _(e) {
    let { giftRecipient: i, onClose: t, transitionState: l, analyticsLocations: _, analyticsObject: p } = e,
        { priceOptions: f } = (0, s.JL)(),
        g = r.useCallback(
            (e) => {
                (0, o.Z)({
                    isGift: !0,
                    giftRecipient: i,
                    subscriptionTier: e,
                    giftingOrigin: d.Wt.DM_CHANNEL,
                    analyticsLocations: null != _ ? _ : [],
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
            [i, _, p, t],
        );
    return (0, n.jsxs)(a.Y0X, {
        transitionState: l,
        size: a.CgR.DYNAMIC,
        className: h.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(a.xBx, {
                className: h.modalHeader,
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
                            onClick: t,
                            "data-migration-pending": !0,
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(a.hzk, {
                className: h.modalBody,
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
    let { giftRecipient: i, onClose: t, transitionState: r, analyticsLocations: a, analyticsObject: o } = e;
    return (0, n.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, n.jsx)(l.KB, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, n.jsx)(_, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: a,
                analyticsObject: o,
            }),
        }),
    });
}
