t.d(i, { default: () => f });
var n = t(951288),
    r = t(647438),
    s = t(481060),
    a = t(987209),
    l = t(563132),
    o = t(963249),
    c = t(701464),
    d = t(474936),
    u = t(981631),
    m = t(388032),
    h = t(926845);
function _(e) {
    let { giftRecipient: i, onClose: t, transitionState: a, analyticsLocations: _, analyticsObject: f } = e,
        { priceOptions: p } = (0, l.JL)(),
        I = r.useCallback(
            (e) => {
                (0, o.Z)({
                    isGift: !0,
                    giftRecipient: i,
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
                });
            },
            [i, _, f],
        );
    return (0, n.jsxs)(s.Y0X, {
        transitionState: a,
        size: s.CgR.DYNAMIC,
        className: h.modalContainer,
        parentComponent: "GiftOptionSelectModal",
        children: [
            (0, n.jsx)(s.xBx, {
                className: h.modalHeader,
                children: (0, n.jsxs)(s.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, n.jsx)(s.olH, { onClick: t }),
                    ],
                }),
            }),
            (0, n.jsx)(s.hzk, {
                className: h.modalBody,
                children: (0, n.jsx)(c.Z, {
                    onSelectSku: I,
                    giftRecipient: i,
                    priceOptions: p,
                }),
            }),
        ],
    });
}
function f(e) {
    let { giftRecipient: i, onClose: t, transitionState: r, analyticsLocations: s, analyticsObject: o } = e;
    return (0, n.jsx)(l.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, n.jsx)(a.KB, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, n.jsx)(_, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: s,
                analyticsObject: o,
            }),
        }),
    });
}
