var r = n(477900),
    i = n(582128),
    s = n(575593),
    l = n(821609),
    a = n(597770),
    u = n(866665),
    o = n(408278),
    d = n(688810),
    c = n(44120),
    f = n(129230),
    I = n(440938),
    v = n(238184),
    p = n(536572),
    m = n(766172),
    A = n(758836),
    g = n(652215),
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
                V = (0, v.A)();
            function L(e) {
                (e.stopPropagation(),
                    f.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: N?.sessionId,
                        sku_id: t.skuId,
                        page_section: N?.pageSection,
                        page_category: N?.pageCategory,
                        tile_type: s.R[t.type],
                        tile_position: String(N?.tilePosition),
                        cta_name: "gift button",
                        page_type: V ?? "home",
                    }),
                    T?.(A.sH.SEND_AS_GIFT),
                    (0, c.A)({
                        skuId: (0, m.Y)({ product: t, selectedVariantIndex: h }),
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
                return (0, r.jsx)(l.$, {
                    variant: n ? "primary" : "secondary",
                    icon: a.GiftIcon,
                    onClick: L,
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
                        productLabel: (0, p.s7)(t),
                    }),
                    buttonRef: P,
                    variant: n ? "primary" : "secondary",
                    icon: a.GiftIcon,
                    size: "md",
                    onClick: L,
                    tabIndex: j,
                }),
            });
        },
    },
);
