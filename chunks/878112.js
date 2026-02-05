"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(575593),
    s = n(635358),
    o = n(990078),
    l = n(397927),
    u = n(688810),
    c = n(44120),
    d = n(954571),
    _ = n(440938),
    f = n(238184),
    p = n(766172),
    h = n(652215),
    m = n(788868),
    g = n(985018);
let E = (e) => {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: E,
            returnRef: A,
            onSuccess: I,
            tooltipDelay: T,
            fullWidth: y = !1,
        } = e,
        { analyticsLocations: S } = (0, u.Ay)(),
        v = i.useRef(null),
        C = (0, _.uM)(),
        b = (0, f.A)(),
        N = (e) => {
            e.stopPropagation(),
                d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: C?.sessionId,
                    sku_id: t.skuId,
                    page_section: C?.pageSection,
                    page_category: C?.pageCategory,
                    tile_type: a.R[t.type],
                    tile_position: String(C?.tilePosition),
                    cta_name: "gift button",
                    page_type: b || "home",
                }),
                (0, c.A)({
                    skuId: (0, p.Y)({ product: t, selectedVariantIndex: E }),
                    isGift: !0,
                    giftingOrigin: m.vQ.SHOP_PAGE,
                    analyticsLocations: S,
                    returnRef: A,
                    variantsReturnStyle: s.g.VARIANTS_GROUP,
                    onClose:
                        null != I
                            ? (e) => {
                                  e && I();
                              }
                            : void 0,
                });
        };
    return y
        ? (0, r.jsx)(l.Button, {
              variant: n ? "primary" : "secondary",
              icon: l.okO,
              onClick: N,
              text: g.intl.string(g.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(o.m, {
              text: g.intl.string(g.t["JCFN/y"]),
              delay: T,
              children: (0, r.jsx)(l.K0, {
                  "aria-label": g.intl.string(g.t["JCFN/y"]),
                  buttonRef: v,
                  variant: n ? "primary" : "secondary",
                  icon: l.okO,
                  size: "md",
                  onClick: N,
              }),
          });
};
