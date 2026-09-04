r.d(t, { A: () => E });
var n = r(477900),
    i = r(582128),
    s = r(575593),
    l = r(821609),
    a = r(597770),
    o = r(866665),
    u = r(408278),
    c = r(688810),
    d = r(44120),
    p = r(174459),
    g = r(440938),
    f = r(238184),
    I = r(536572),
    _ = r(766172),
    A = r(758836),
    C = r(652215),
    m = r(202541),
    v = r(375708);
let E = function (e) {
    let {
            product: t,
            primary: r,
            selectedVariantIndex: E,
            returnRef: h,
            onSuccess: x,
            tooltipDelay: R,
            fullWidth: k = !1,
            fullWidthLabel: b,
            giftRecipient: y,
            giftingOrigin: S = m.vQ.SHOP_PAGE,
            onTrackClick: L,
        } = e,
        { analyticsLocations: P } = (0, c.Ay)(),
        T = i.useRef(null),
        O = (0, g.uM)(),
        j = (0, f.A)();
    function V(e) {
        e.stopPropagation(),
            p.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: O?.sessionId,
                sku_id: t.skuId,
                page_section: O?.pageSection,
                page_category: O?.pageCategory,
                tile_type: s.R[t.type],
                tile_position: String(O?.tilePosition),
                cta_name: "gift button",
                page_type: j ?? "home",
            }),
            L?.(A.sH.SEND_AS_GIFT),
            (0, d.A)({
                skuId: (0, _.Y)({ product: t, selectedVariantIndex: E }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: S,
                analyticsLocations: P,
                discoverySessionId: O?.sessionId,
                returnRef: h,
                onClose:
                    null != x
                        ? (e) => {
                              e && x();
                          }
                        : void 0,
            });
    }
    if (k)
        return (0, n.jsx)(l.$, {
            variant: r ? "primary" : "secondary",
            icon: a.GiftIcon,
            onClick: V,
            text: b ?? v.intl.string(v.t.gmnzqM),
            fullWidth: !0,
        });
    let N = v.intl.string(v.t["JCFN/y"]);
    return (0, n.jsx)(o.m, {
        text: N,
        delay: R,
        children: (0, n.jsx)(u.K, {
            "aria-label": v.intl.formatToPlainString(v.t["5UYoSr"], { ctaLabel: N, productLabel: (0, I.s7)(t) }),
            buttonRef: T,
            variant: r ? "primary" : "secondary",
            icon: a.GiftIcon,
            size: "md",
            onClick: V,
        }),
    });
};
