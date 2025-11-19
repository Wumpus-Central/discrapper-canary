i.d(t, { default: () => p });
var r = i(54381),
    n = i(473749),
    a = i(481060),
    l = i(987209),
    s = i(563132),
    o = i(963249),
    c = i(701464),
    d = i(474936),
    u = i(981631),
    m = i(388032),
    f = i(926845);
function h(e) {
    let { giftRecipient: t, onClose: i, transitionState: l, analyticsLocations: h, analyticsObject: p } = e,
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
                });
            },
            [t, h, p],
        );
    return (0, r.jsxs)(a.Y0X, {
        transitionState: l,
        size: a.CgR.DYNAMIC,
        className: f.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        children: [
            (0, r.jsx)(a.xBx, {
                className: f.modalHeader,
                children: (0, r.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, r.jsx)(a.olH, { onClick: i }),
                    ],
                }),
            }),
            (0, r.jsx)(a.hzk, {
                className: f.modalBody,
                children: (0, r.jsx)(c.Z, {
                    onSelectSku: b,
                    giftRecipient: t,
                    priceOptions: g,
                }),
            }),
        ],
    });
}
function p(e) {
    let { giftRecipient: t, onClose: i, transitionState: n, analyticsLocations: a, analyticsObject: o } = e;
    return (0, r.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, r.jsx)(l.KB, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, r.jsx)(h, {
                giftRecipient: t,
                onClose: i,
                transitionState: n,
                analyticsLocations: a,
                analyticsObject: o,
            }),
        }),
    });
}
