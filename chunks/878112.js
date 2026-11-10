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
                    selectedVariantIndex: E,
                    returnRef: _,
                    onSuccess: C,
                    tooltipDelay: b,
                    fullWidth: k = !1,
                    fullWidthLabel: R,
                    giftRecipient: y,
                    giftingOrigin: j = h.vQ.SHOP_PAGE,
                    onTrackClick: S,
                    tabIndex: T,
                } = e,
                { analyticsLocations: O } = (0, d.Ay)(),
                N = i.useRef(null),
                V = (0, v.uM)(),
                L = (0, f.A)();
            function P(e) {
                (e.stopPropagation(),
                    I.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: V?.sessionId,
                        sku_id: t.skuId,
                        page_section: V?.pageSection,
                        page_category: V?.pageCategory,
                        tile_type: s.R[t.type],
                        tile_position: String(V?.tilePosition),
                        cta_name: "gift button",
                        page_type: L ?? "home",
                    }),
                    S?.(g.sH.SEND_AS_GIFT),
                    (0, c.A)({
                        skuId: (0, m.Y)({ product: t, selectedVariantIndex: E }),
                        isGift: !0,
                        giftRecipient: y,
                        giftingOrigin: j,
                        analyticsLocations: O,
                        discoverySessionId: V?.sessionId,
                        returnRef: _,
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
                    onClick: P,
                    text: R ?? A.intl.string(A.t.gmnzqM),
                    fullWidth: !0,
                    tabIndex: T,
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
                    onClick: P,
                    tabIndex: T,
                }),
            });
        },
    },
);
