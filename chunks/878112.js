var r = n(477900),
    i = n(582128),
    s = n(575593),
    a = n(821609),
    l = n(597770),
    u = n(866665),
    o = n(408278),
    c = n(688810),
    d = n(44120),
    I = n(129230),
    p = n(857512),
    f = n(238184),
    m = n(536572),
    v = n(766172),
    g = n(758836),
    x = n(652215),
    C = n(682901),
    _ = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    product: t,
                    primary: n,
                    selectedVariantIndex: h,
                    returnRef: E,
                    onSuccess: A,
                    tooltipDelay: b,
                    fullWidth: R = !1,
                    fullWidthLabel: k,
                    giftRecipient: y,
                    giftingOrigin: L = C.vQ.SHOP_PAGE,
                    onTrackClick: O,
                    tabIndex: S,
                } = e,
                { analyticsLocations: T } = (0, c.Ay)(),
                P = i.useRef(null),
                j = (0, p.uM)(),
                N = (0, f.A)();
            function V(e) {
                (e.stopPropagation(),
                    I.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: j?.sessionId,
                        sku_id: t.skuId,
                        page_section: j?.pageSection,
                        page_category: j?.pageCategory,
                        tile_type: s.R[t.type],
                        tile_position: String(j?.tilePosition),
                        cta_name: "gift button",
                        page_type: N ?? "home",
                    }),
                    O?.(g.sH.SEND_AS_GIFT),
                    (0, d.A)({
                        skuId: (0, v.Y)({ product: t, selectedVariantIndex: h }),
                        isGift: !0,
                        giftRecipient: y,
                        giftingOrigin: L,
                        analyticsLocations: T,
                        discoverySessionId: j?.sessionId,
                        returnRef: E,
                        onClose:
                            null != A
                                ? (e) => {
                                      e && A();
                                  }
                                : void 0,
                    }));
            }
            if (R)
                return (0, r.jsx)(a.$, {
                    variant: n ? "primary" : "secondary",
                    icon: l.GiftIcon,
                    onClick: V,
                    text: k ?? _.intl.string(_.t.gmnzqM),
                    fullWidth: !0,
                    tabIndex: S,
                });
            let D = _.intl.string(_.t["JCFN/y"]);
            return (0, r.jsx)(u.m, {
                text: D,
                delay: b,
                children: (0, r.jsx)(o.K, {
                    "aria-label": _.intl.formatToPlainString(_.t["5UYoSr"], {
                        ctaLabel: D,
                        productLabel: (0, m.s7)(t),
                    }),
                    buttonRef: P,
                    variant: n ? "primary" : "secondary",
                    icon: l.GiftIcon,
                    size: "md",
                    onClick: V,
                    tabIndex: S,
                }),
            });
        },
    },
);
