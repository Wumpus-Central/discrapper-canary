"use strict";
r.d(t, { A: () => v });
var n = r(627968),
    i = r(64700),
    s = r(575593),
    a = r(990078),
    l = r(397927),
    o = r(688810),
    c = r(44120),
    d = r(954571),
    u = r(440938),
    m = r(238184),
    p = r(766172),
    h = r(652215),
    x = r(788868),
    f = r(985018);
let v = (e) => {
    let {
            product: t,
            primary: r,
            selectedVariantIndex: v,
            returnRef: g,
            onSuccess: _,
            tooltipDelay: A,
            fullWidth: j = !1,
            giftRecipient: C,
            giftingOrigin: N = x.vQ.SHOP_PAGE,
        } = e,
        { analyticsLocations: b } = (0, o.Ay)(),
        I = i.useRef(null),
        R = (0, u.uM)(),
        T = (0, m.A)(),
        E = (e) => {
            e.stopPropagation(),
                d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: R?.sessionId,
                    sku_id: t.skuId,
                    page_section: R?.pageSection,
                    page_category: R?.pageCategory,
                    tile_type: s.R[t.type],
                    tile_position: String(R?.tilePosition),
                    cta_name: "gift button",
                    page_type: T || "home",
                }),
                (0, c.A)({
                    skuId: (0, p.Y)({ product: t, selectedVariantIndex: v }),
                    isGift: !0,
                    giftRecipient: C,
                    giftingOrigin: N,
                    analyticsLocations: b,
                    returnRef: g,
                    onClose:
                        null != _
                            ? (e) => {
                                  e && _();
                              }
                            : void 0,
                });
        };
    return j
        ? (0, n.jsx)(l.Button, {
              variant: r ? "primary" : "secondary",
              icon: l.okO,
              onClick: E,
              text: f.intl.string(f.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, n.jsx)(a.m, {
              text: f.intl.string(f.t["JCFN/y"]),
              delay: A,
              children: (0, n.jsx)(l.K0, {
                  "aria-label": f.intl.string(f.t["JCFN/y"]),
                  buttonRef: I,
                  variant: r ? "primary" : "secondary",
                  icon: l.okO,
                  size: "md",
                  onClick: E,
              }),
          });
};
