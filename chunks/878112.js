n.d(t, { A: () => _ });
var r = n(477900),
    i = n(582128),
    s = n(575593),
    l = n(821609),
    a = n(597770),
    o = n(866665),
    u = n(408278),
    d = n(688810),
    c = n(44120),
    I = n(174459),
    f = n(440938),
    p = n(238184),
    g = n(536572),
    A = n(766172),
    v = n(758836),
    x = n(652215),
    C = n(202541),
    m = n(375708);
let _ = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: _,
            returnRef: h,
            onSuccess: E,
            tooltipDelay: b,
            fullWidth: R = !1,
            fullWidthLabel: k,
            giftRecipient: y,
            giftingOrigin: T = C.vQ.SHOP_PAGE,
            onTrackClick: S,
            tabIndex: j,
        } = e,
        { analyticsLocations: L } = (0, d.Ay)(),
        O = i.useRef(null),
        V = (0, f.uM)(),
        P = (0, p.A)();
    function N(e) {
        (e.stopPropagation(),
            I.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: V?.sessionId,
                sku_id: t.skuId,
                page_section: V?.pageSection,
                page_category: V?.pageCategory,
                tile_type: s.R[t.type],
                tile_position: String(V?.tilePosition),
                cta_name: "gift button",
                page_type: P ?? "home",
            }),
            S?.(v.sH.SEND_AS_GIFT),
            (0, c.A)({
                skuId: (0, A.Y)({ product: t, selectedVariantIndex: _ }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: T,
                analyticsLocations: L,
                discoverySessionId: V?.sessionId,
                returnRef: h,
                onClose:
                    null != E
                        ? (e) => {
                              e && E();
                          }
                        : void 0,
            }));
    }
    if (R)
        return (0, r.jsx)(l.$, {
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            onClick: N,
            text: k ?? m.intl.string(m.t.gmnzqM),
            fullWidth: !0,
            tabIndex: j,
        });
    let M = m.intl.string(m.t["JCFN/y"]);
    return (0, r.jsx)(o.m, {
        text: M,
        delay: b,
        children: (0, r.jsx)(u.K, {
            "aria-label": m.intl.formatToPlainString(m.t["5UYoSr"], { ctaLabel: M, productLabel: (0, g.s7)(t) }),
            buttonRef: O,
            variant: n ? "primary" : "secondary",
            icon: a.GiftIcon,
            size: "md",
            onClick: N,
            tabIndex: j,
        }),
    });
};
