i.d(t, { default: () => f });
var n = i(54381),
    r = i(473749),
    l = i(481060),
    a = i(987209),
    s = i(563132),
    o = i(963249),
    c = i(701464),
    d = i(474936),
    u = i(981631),
    m = i(388032),
    h = i(926845);
function _(e) {
    let { giftRecipient: t, onClose: i, transitionState: a, analyticsLocations: _, analyticsObject: f } = e,
        { priceOptions: p } = (0, s.JL)(),
        g = r.useCallback(
            (e) => {
                (0, o.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    subscriptionTier: e,
                    giftingOrigin: d.Wt.DM_CHANNEL,
                    analyticsLocations: null != _ ? _ : [],
                    analyticsObject:
                        null != f
                            ? f
                            : {
                                  page: u.ZY5.DM_CHANNEL,
                                  section: u.jXE.CHANNEL_TEXT_AREA,
                                  object: u.qAy.BUTTON_ICON,
                                  objectType: u.AnalyticsObjectTypes.GIFT,
                              },
                }),
                    i();
            },
            [t, _, f, i],
        );
    return (0, n.jsxs)(l.Y0X, {
        transitionState: a,
        size: l.CgR.DYNAMIC,
        className: h.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        children: [
            (0, n.jsx)(l.xBx, {
                className: h.modalHeader,
                children: (0, n.jsxs)(l.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, n.jsx)(l.olH, { onClick: i }),
                    ],
                }),
            }),
            (0, n.jsx)(l.hzk, {
                className: h.modalBody,
                children: (0, n.jsx)(c.Z, {
                    onSelectSku: g,
                    giftRecipient: t,
                    priceOptions: p,
                    onWishlistItemClick: i,
                }),
            }),
        ],
    });
}
function f(e) {
    let { giftRecipient: t, onClose: i, transitionState: r, analyticsLocations: l, analyticsObject: o } = e;
    return (0, n.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, n.jsx)(a.KB, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, n.jsx)(_, {
                giftRecipient: t,
                onClose: i,
                transitionState: r,
                analyticsLocations: l,
                analyticsObject: o,
            }),
        }),
    });
}
