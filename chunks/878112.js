n.d(t, { A: () => h });
var r = n(477900),
    i = n(582128),
    s = n(575593),
    a = n(821609),
    l = n(597770),
    u = n(866665),
    o = n(408278),
    d = n(688810),
    c = n(44120),
    I = n(174459),
    f = n(440938),
    v = n(238184),
    p = n(536572),
    g = n(766172),
    x = n(758836),
    A = n(652215),
    m = n(202541),
    _ = n(105292);
let h = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: h,
            returnRef: E,
            onSuccess: C,
            tooltipDelay: b,
            fullWidth: k = !1,
            fullWidthLabel: R,
            giftRecipient: y,
            giftingOrigin: j = m.vQ.SHOP_PAGE,
            onTrackClick: T,
            tabIndex: S,
        } = e,
        { analyticsLocations: O } = (0, d.Ay)(),
        V = i.useRef(null),
        L = (0, f.uM)(),
        P = (0, v.A)();
    function N(e) {
        (e.stopPropagation(),
            I.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: L?.sessionId,
                sku_id: t.skuId,
                page_section: L?.pageSection,
                page_category: L?.pageCategory,
                tile_type: s.R[t.type],
                tile_position: String(L?.tilePosition),
                cta_name: "gift button",
                page_type: P ?? "home",
            }),
            T?.(x.sH.SEND_AS_GIFT),
            (0, c.A)({
                skuId: (0, g.Y)({ product: t, selectedVariantIndex: h }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: j,
                analyticsLocations: O,
                discoverySessionId: L?.sessionId,
                returnRef: E,
                onClose:
                    null != C
                        ? (e) => {
                              e && C();
                          }
                        : void 0,
            }));
    }
    if (k)
        return (0, r.jsx)(a.$, {
            variant: n ? "primary" : "secondary",
            icon: l.GiftIcon,
            onClick: N,
            text: R ?? _.intl.string(_.t.gmnzqM),
            fullWidth: !0,
            tabIndex: S,
        });
    let M = _.intl.string(_.t["JCFN/y"]);
    return (0, r.jsx)(u.m, {
        text: M,
        delay: b,
        children: (0, r.jsx)(o.K, {
            "aria-label": _.intl.formatToPlainString(_.t["5UYoSr"], { ctaLabel: M, productLabel: (0, p.s7)(t) }),
            buttonRef: V,
            variant: n ? "primary" : "secondary",
            icon: l.GiftIcon,
            size: "md",
            onClick: N,
            tabIndex: S,
        }),
    });
};
