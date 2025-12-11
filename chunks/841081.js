t.d(e, { default: () => g });
var n = t(54381),
    s = t(473749),
    r = t(481060),
    a = t(987209),
    l = t(563132),
    o = t(963249),
    c = t(701464),
    d = t(474936),
    u = t(981631),
    m = t(388032),
    h = t(19809);
function f(i) {
    let {
            giftRecipient: e,
            onClose: t,
            transitionState: a,
            analyticsLocations: f,
            analyticsLocation: g,
            analyticsObject: p,
            giftMessage: I,
        } = i,
        { priceOptions: b } = (0, l.JL)(),
        j = s.useCallback(
            (i) => {
                (0, o.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    subscriptionTier: i,
                    giftingOrigin: d.Wt.DM_CHANNEL,
                    analyticsLocations: null != f ? f : [],
                    analyticsLocation: g,
                    analyticsObject:
                        null != p
                            ? p
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
            [e, f, g, p, I, t],
        );
    return (0, n.jsxs)(r.Y0X, {
        transitionState: a,
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
                    priceOptions: b,
                    onWishlistItemClick: t,
                }),
            }),
        ],
    });
}
function g(i) {
    let {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: r,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: u,
    } = i;
    return (0, n.jsx)(l.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.nS,
        isGift: !0,
        children: (0, n.jsx)(a.KB, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: d.Wt.DM_CHANNEL,
            children: (0, n.jsx)(f, {
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
