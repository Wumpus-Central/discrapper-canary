n.d(t, { A: () => E });
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
    _ = n(766172),
    C = n(758836),
    A = n(652215),
    f = n(202541),
    m = n(375708);
let E = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: E,
            returnRef: h,
            onSuccess: v,
            tooltipDelay: x,
            fullWidth: R = !1,
            fullWidthLabel: k,
            giftRecipient: b,
            giftingOrigin: y = f.vQ.SHOP_PAGE,
            onTrackClick: S,
        } = e,
        { analyticsLocations: L } = (0, c.Ay)(),
        O = i.useRef(null),
        T = (0, g.uM)(),
        j = (0, I.A)();
    function P(e) {
        e.stopPropagation(),
            p.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: T?.sessionId,
                sku_id: t.skuId,
                page_section: T?.pageSection,
                page_category: T?.pageCategory,
                tile_type: s.R[t.type],
                tile_position: String(T?.tilePosition),
                cta_name: "gift button",
                page_type: j ?? "home",
            }),
            S?.(C.sH.SEND_AS_GIFT),
            (0, d.A)({
                skuId: (0, _.Y)({ product: t, selectedVariantIndex: E }),
                isGift: !0,
                giftRecipient: b,
                giftingOrigin: y,
                analyticsLocations: L,
                discoverySessionId: T?.sessionId,
                returnRef: h,
                onClose:
                    null != v
                        ? (e) => {
                              e && v();
                          }
                        : void 0,
            });
    }
    return R
        ? (0, r.jsx)(l.$, {
              variant: n ? "primary" : "secondary",
              icon: a.GiftIcon,
              onClick: P,
              text: k ?? m.intl.string(m.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(o.m, {
              text: m.intl.string(m.t["JCFN/y"]),
              delay: x,
              children: (0, r.jsx)(u.K, {
                  "aria-label": m.intl.string(m.t["JCFN/y"]),
                  buttonRef: O,
                  variant: n ? "primary" : "secondary",
                  icon: a.GiftIcon,
                  size: "md",
                  onClick: P,
              }),
          });
};
