r.d(t, { default: () => p });
var i = r(54381),
    n = r(473749),
    a = r(481060),
    l = r(987209),
    s = r(563132),
    o = r(963249),
    c = r(701464),
    d = r(474936),
    u = r(981631),
    m = r(388032),
    f = r(926845);
function h(e) {
    let { giftRecipient: t, onClose: r, transitionState: l, analyticsLocations: h, analyticsObject: p } = e,
        { priceOptions: g } = (0, s.JL)(),
        b = n.useCallback(
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
                    r();
            },
            [t, h, p, r],
        );
    return (0, i.jsxs)(a.Y0X, {
        transitionState: l,
        size: a.CgR.DYNAMIC,
        className: f.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        children: [
            (0, i.jsx)(a.xBx, {
                className: f.modalHeader,
                children: (0, i.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, i.jsx)(a.olH, { onClick: r }),
                    ],
                }),
            }),
            (0, i.jsx)(a.hzk, {
                className: f.modalBody,
                children: (0, i.jsx)(c.Z, {
                    onSelectSku: b,
                    giftRecipient: t,
                    priceOptions: g,
                    onWishlistItemClick: r,
                }),
            }),
        ],
    });
}
function p(e) {
    let { giftRecipient: t, onClose: r, transitionState: n, analyticsLocations: a, analyticsObject: o } = e;
    return (0, i.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, i.jsx)(l.KB, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, i.jsx)(h, {
                giftRecipient: t,
                onClose: r,
                transitionState: n,
                analyticsLocations: a,
                analyticsObject: o,
            }),
        }),
    });
}
