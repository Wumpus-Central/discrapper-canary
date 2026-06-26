n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    s = n(575593),
    l = n(990078),
    a = n(821609),
    o = n(597770),
    u = n(408278),
    c = n(688810),
    d = n(44120),
    p = n(174459),
    C = n(440938),
    f = n(238184),
    I = n(766172),
    g = n(758836),
    k = n(652215),
    A = n(788868),
    m = n(375708);
let x = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: x,
            returnRef: _,
            onSuccess: h,
            tooltipDelay: E,
            fullWidth: v = !1,
            fullWidthLabel: R,
            giftRecipient: y,
            giftingOrigin: T = A.vQ.SHOP_PAGE,
            onTrackClick: j,
        } = e,
        { analyticsLocations: b } = (0, c.Ay)(),
        L = i.useRef(null),
        P = (0, C.uM)(),
        S = (0, f.A)(),
        O = (e) => {
            e.stopPropagation(),
                p.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: P?.sessionId,
                    sku_id: t.skuId,
                    page_section: P?.pageSection,
                    page_category: P?.pageCategory,
                    tile_type: s.R[t.type],
                    tile_position: String(P?.tilePosition),
                    cta_name: "gift button",
                    page_type: S ?? "home",
                }),
                j?.(g.sH.SEND_AS_GIFT),
                (0, d.A)({
                    skuId: (0, I.Y)({ product: t, selectedVariantIndex: x }),
                    isGift: !0,
                    giftRecipient: y,
                    giftingOrigin: T,
                    analyticsLocations: b,
                    discoverySessionId: P?.sessionId,
                    returnRef: _,
                    onClose:
                        null != h
                            ? (e) => {
                                  e && h();
                              }
                            : void 0,
                });
        };
    return v
        ? (0, r.jsx)(a.$, {
              variant: n ? "primary" : "secondary",
              icon: o.o,
              onClick: O,
              text: R ?? m.intl.string(m.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(l.m, {
              text: m.intl.string(m.t["JCFN/y"]),
              delay: E,
              children: (0, r.jsx)(u.K, {
                  "aria-label": m.intl.string(m.t["JCFN/y"]),
                  buttonRef: L,
                  variant: n ? "primary" : "secondary",
                  icon: o.o,
                  size: "md",
                  onClick: O,
              }),
          });
};
