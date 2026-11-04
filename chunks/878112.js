n.d(t, { A: () => _ });
var r = n(477900),
    i = n(582128),
    l = n(575593),
    s = n(821609),
    a = n(597770),
    u = n(866665),
    o = n(408278),
    d = n(688810),
    c = n(44120),
    f = n(174459),
    I = n(440938),
    v = n(238184),
    p = n(536572),
    m = n(766172),
    A = n(758836),
    g = n(652215),
    E = n(202541),
    h = n(105292);
let _ = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: _,
            returnRef: x,
            onSuccess: C,
            tooltipDelay: b,
            fullWidth: R = !1,
            fullWidthLabel: k,
            giftRecipient: y,
            giftingOrigin: S = E.vQ.SHOP_PAGE,
            onTrackClick: T,
            tabIndex: j,
        } = e,
        { analyticsLocations: O } = (0, d.Ay)(),
        P = i.useRef(null),
        L = (0, I.uM)(),
        N = (0, v.A)();
    function V(e) {
        (e.stopPropagation(),
            f.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: L?.sessionId,
                sku_id: t.skuId,
                page_section: L?.pageSection,
                page_category: L?.pageCategory,
                tile_type: l.R[t.type],
                tile_position: String(L?.tilePosition),
                cta_name: "gift button",
                page_type: N ?? "home",
            }),
            T?.(A.sH.SEND_AS_GIFT),
            (0, c.A)({
                skuId: (0, m.Y)({ product: t, selectedVariantIndex: _ }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: S,
                analyticsLocations: O,
                discoverySessionId: L?.sessionId,
                returnRef: x,
                onClose:
                    null != C
                        ? (e) => {
                              e && C();
                          }
                        : void 0,
            }));
    }
    if (R)
        return (0, r.jsx)(s.$, {
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            onClick: V,
            text: k ?? h.intl.string(h.t.gmnzqM),
            fullWidth: !0,
            tabIndex: j,
        });
    let D = h.intl.string(h.t["JCFN/y"]);
    return (0, r.jsx)(u.m, {
        text: D,
        delay: b,
        children: (0, r.jsx)(o.K, {
            "aria-label": h.intl.formatToPlainString(h.t["5UYoSr"], { ctaLabel: D, productLabel: (0, p.s7)(t) }),
            buttonRef: P,
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            size: "md",
            onClick: V,
            tabIndex: j,
        }),
    });
};
