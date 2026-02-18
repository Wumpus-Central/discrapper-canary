a.d(e, { A: () => k });
var n = a(627968),
    l = a(64700),
    r = a(575593),
    s = a(635358),
    i = a(990078),
    o = a(397927),
    u = a(688810),
    c = a(44120),
    d = a(954571),
    h = a(440938),
    p = a(238184),
    v = a(766172),
    g = a(652215),
    A = a(788868),
    C = a(985018);
let k = (t) => {
    let {
            product: e,
            primary: a,
            selectedVariantIndex: k,
            returnRef: m,
            onSuccess: x,
            tooltipDelay: y,
            fullWidth: b = !1,
        } = t,
        { analyticsLocations: O } = (0, u.Ay)(),
        _ = l.useRef(null),
        w = (0, h.uM)(),
        R = (0, p.A)(),
        f = (t) => {
            t.stopPropagation(),
                d.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: w?.sessionId,
                    sku_id: e.skuId,
                    page_section: w?.pageSection,
                    page_category: w?.pageCategory,
                    tile_type: r.R[e.type],
                    tile_position: String(w?.tilePosition),
                    cta_name: "gift button",
                    page_type: R || "home",
                }),
                (0, c.A)({
                    skuId: (0, v.Y)({ product: e, selectedVariantIndex: k }),
                    isGift: !0,
                    giftingOrigin: A.vQ.SHOP_PAGE,
                    analyticsLocations: O,
                    returnRef: m,
                    variantsReturnStyle: s.g.VARIANTS_GROUP,
                    onClose:
                        null != x
                            ? (t) => {
                                  t && x();
                              }
                            : void 0,
                });
        };
    return b
        ? (0, n.jsx)(o.Button, {
              variant: a ? "primary" : "secondary",
              icon: o.okO,
              onClick: f,
              text: C.intl.string(C.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, n.jsx)(i.m, {
              text: C.intl.string(C.t["JCFN/y"]),
              delay: y,
              children: (0, n.jsx)(o.K0, {
                  "aria-label": C.intl.string(C.t["JCFN/y"]),
                  buttonRef: _,
                  variant: a ? "primary" : "secondary",
                  icon: o.okO,
                  size: "md",
                  onClick: f,
              }),
          });
};
