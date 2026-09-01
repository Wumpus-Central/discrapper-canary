n.d(t, { A: () => h });
var r = n(477900),
    i = n(582128),
    s = n(575593),
    l = n(821609),
    a = n(597770),
    o = n(866665),
    u = n(408278),
    c = n(688810),
    d = n(44120),
    p = n(174459),
    g = n(440938),
    I = n(238184),
    _ = n(536572),
    f = n(766172),
    C = n(758836),
    A = n(652215),
    m = n(202541),
    E = n(375708);
let h = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: h,
            returnRef: v,
            onSuccess: x,
            tooltipDelay: R,
            fullWidth: b = !1,
            fullWidthLabel: k,
            giftRecipient: y,
            giftingOrigin: S = m.vQ.SHOP_PAGE,
            onTrackClick: L,
        } = e,
        { analyticsLocations: T } = (0, c.Ay)(),
        O = i.useRef(null),
        j = (0, g.uM)(),
        P = (0, I.A)();
    function V(e) {
        e.stopPropagation(),
            p.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: j?.sessionId,
                sku_id: t.skuId,
                page_section: j?.pageSection,
                page_category: j?.pageCategory,
                tile_type: s.R[t.type],
                tile_position: String(j?.tilePosition),
                cta_name: "gift button",
                page_type: P ?? "home",
            }),
            L?.(C.sH.SEND_AS_GIFT),
            (0, d.A)({
                skuId: (0, f.Y)({ product: t, selectedVariantIndex: h }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: S,
                analyticsLocations: T,
                discoverySessionId: j?.sessionId,
                returnRef: v,
                onClose:
                    null != x
                        ? (e) => {
                              e && x();
                          }
                        : void 0,
            });
    }
    if (b)
        return (0, r.jsx)(l.$, {
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            onClick: V,
            text: k ?? E.intl.string(E.t.gmnzqM),
            fullWidth: !0,
        });
    let N = E.intl.string(E.t["JCFN/y"]);
    return (0, r.jsx)(o.m, {
        text: N,
        delay: R,
        children: (0, r.jsx)(u.K, {
            "aria-label": E.intl.formatToPlainString(E.t["5UYoSr"], { ctaLabel: N, productLabel: (0, _.s7)(t) }),
            buttonRef: O,
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            size: "md",
            onClick: V,
        }),
    });
};
