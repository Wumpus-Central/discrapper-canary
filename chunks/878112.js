var r = n(477900),
    i = n(582128),
    s = n(575593),
    a = n(821609),
    l = n(597770),
    u = n(866665),
    o = n(408278),
    d = n(688810),
    c = n(44120),
    I = n(129230),
    v = n(857512),
    f = n(238184),
    p = n(536572),
    m = n(766172),
    g = n(758836),
    x = n(652215),
    h = n(682901),
    A = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    product: t,
                    primary: n,
                    selectedVariantIndex: _,
                    returnRef: E,
                    onSuccess: C,
                    tooltipDelay: b,
                    fullWidth: R = !1,
                    fullWidthLabel: k,
                    giftRecipient: y,
                    giftingOrigin: S = h.vQ.SHOP_PAGE,
                    onTrackClick: j,
                    tabIndex: O,
                } = e,
                { analyticsLocations: T } = (0, d.Ay)(),
                N = i.useRef(null),
                P = (0, v.uM)(),
                V = (0, f.A)();
            function L(e) {
                (e.stopPropagation(),
                    I.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: P?.sessionId,
                        sku_id: t.skuId,
                        page_section: P?.pageSection,
                        page_category: P?.pageCategory,
                        tile_type: s.R[t.type],
                        tile_position: String(P?.tilePosition),
                        cta_name: "gift button",
                        page_type: V ?? "home",
                    }),
                    j?.(g.sH.SEND_AS_GIFT),
                    (0, c.A)({
                        skuId: (0, m.Y)({ product: t, selectedVariantIndex: _ }),
                        isGift: !0,
                        giftRecipient: y,
                        giftingOrigin: S,
                        analyticsLocations: T,
                        discoverySessionId: P?.sessionId,
                        returnRef: E,
                        onClose:
                            null != C
                                ? (e) => {
                                      e && C();
                                  }
                                : void 0,
                    }));
            }
            if (R)
                return (0, r.jsx)(a.$, {
                    variant: n ? "primary" : "secondary",
                    icon: l.GiftIcon,
                    onClick: L,
                    text: k ?? A.intl.string(A.t.gmnzqM),
                    fullWidth: !0,
                    tabIndex: O,
                });
            let D = A.intl.string(A.t["JCFN/y"]);
            return (0, r.jsx)(u.m, {
                text: D,
                delay: b,
                children: (0, r.jsx)(o.K, {
                    "aria-label": A.intl.formatToPlainString(A.t["5UYoSr"], {
                        ctaLabel: D,
                        productLabel: (0, p.s7)(t),
                    }),
                    buttonRef: N,
                    variant: n ? "primary" : "secondary",
                    icon: l.GiftIcon,
                    size: "md",
                    onClick: L,
                    tabIndex: O,
                }),
            });
        },
    },
);
