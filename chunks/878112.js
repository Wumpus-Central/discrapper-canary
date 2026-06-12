e.d(a, { A: () => k });
var n = e(627968),
    r = e(64700),
    s = e(575593),
    l = e(990078),
    i = e(821609),
    o = e(597770),
    u = e(408278),
    c = e(688810),
    d = e(44120),
    p = e(174459),
    v = e(440938),
    g = e(238184),
    h = e(766172),
    C = e(758836),
    A = e(652215),
    b = e(788868),
    I = e(375708);
let k = (t) => {
    let {
            product: a,
            primary: e,
            selectedVariantIndex: k,
            returnRef: f,
            onSuccess: R,
            tooltipDelay: V,
            fullWidth: _ = !1,
            giftRecipient: x,
            giftingOrigin: m = b.vQ.SHOP_PAGE,
            onTrackClick: y,
        } = t,
        { analyticsLocations: L } = (0, c.Ay)(),
        E = r.useRef(null),
        S = (0, v.uM)(),
        w = (0, g.A)(),
        P = (t) => {
            t.stopPropagation(),
                p.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    sku_id: a.skuId,
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    tile_type: s.R[a.type],
                    tile_position: String(S?.tilePosition),
                    cta_name: "gift button",
                    page_type: w ?? "home",
                }),
                y?.(C.sH.SEND_AS_GIFT),
                (0, d.A)({
                    skuId: (0, h.Y)({ product: a, selectedVariantIndex: k }),
                    isGift: !0,
                    giftRecipient: x,
                    giftingOrigin: m,
                    analyticsLocations: L,
                    returnRef: f,
                    onClose:
                        null != R
                            ? (t) => {
                                  t && R();
                              }
                            : void 0,
                });
        };
    return _
        ? (0, n.jsx)(i.$, {
              variant: e ? "primary" : "secondary",
              icon: o.o,
              onClick: P,
              text: I.intl.string(I.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, n.jsx)(l.m, {
              text: I.intl.string(I.t["JCFN/y"]),
              delay: V,
              children: (0, n.jsx)(u.K, {
                  "aria-label": I.intl.string(I.t["JCFN/y"]),
                  buttonRef: E,
                  variant: e ? "primary" : "secondary",
                  icon: o.o,
                  size: "md",
                  onClick: P,
              }),
          });
};
