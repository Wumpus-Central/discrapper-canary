var r = n(477900),
    i = n(582128),
    l = n(575593),
    s = n(821609),
    a = n(597770),
    u = n(866665),
    o = n(408278),
    d = n(688810),
    c = n(44120),
    f = n(129230),
    I = n(440938),
    v = n(238184),
    m = n(536572),
    p = n(766172),
    g = n(758836),
    A = n(652215),
    E = n(682901),
    x = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    product: t,
                    primary: n,
                    selectedVariantIndex: h,
                    returnRef: _,
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
                N = (0, I.uM)(),
                L = (0, v.A)();
            function V(e) {
                (e.stopPropagation(),
                    f.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: N?.sessionId,
                        sku_id: t.skuId,
                        page_section: N?.pageSection,
                        page_category: N?.pageCategory,
                        tile_type: l.R[t.type],
                        tile_position: String(N?.tilePosition),
                        cta_name: "gift button",
                        page_type: L ?? "home",
                    }),
                    T?.(g.sH.SEND_AS_GIFT),
                    (0, c.A)({
                        skuId: (0, p.Y)({ product: t, selectedVariantIndex: h }),
                        isGift: !0,
                        giftRecipient: y,
                        giftingOrigin: S,
                        analyticsLocations: O,
                        discoverySessionId: N?.sessionId,
                        returnRef: _,
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
                    text: k ?? x.intl.string(x.t.gmnzqM),
                    fullWidth: !0,
                    tabIndex: j,
                });
            let D = x.intl.string(x.t["JCFN/y"]);
            return (0, r.jsx)(u.m, {
                text: D,
                delay: b,
                children: (0, r.jsx)(o.K, {
                    "aria-label": x.intl.formatToPlainString(x.t["5UYoSr"], {
                        ctaLabel: D,
                        productLabel: (0, m.s7)(t),
                    }),
                    buttonRef: P,
                    variant: n ? "primary" : "secondary",
                    icon: a.GiftIcon,
                    size: "md",
                    onClick: V,
                    tabIndex: j,
                }),
            });
        },
    },
);
