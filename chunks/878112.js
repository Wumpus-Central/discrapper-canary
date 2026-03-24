n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    l = n(575593),
    r = n(990078),
    o = n(397927),
    s = n(688810),
    d = n(44120),
    u = n(954571),
    p = n(440938),
    c = n(238184),
    _ = n(766172),
    E = n(652215),
    S = n(788868),
    h = n(985018);
let v = (e) => {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: v,
            returnRef: A,
            onSuccess: g,
            tooltipDelay: I,
            fullWidth: T = !1,
            giftRecipient: R,
            giftingOrigin: y = S.vQ.SHOP_PAGE,
        } = e,
        { analyticsLocations: m } = (0, s.Ay)(),
        N = i.useRef(null),
        C = (0, p.uM)(),
        f = (0, c.A)(),
        O = (e) => {
            e.stopPropagation(),
                u.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: C?.sessionId,
                    sku_id: t.skuId,
                    page_section: C?.pageSection,
                    page_category: C?.pageCategory,
                    tile_type: l.R[t.type],
                    tile_position: String(C?.tilePosition),
                    cta_name: "gift button",
                    page_type: f || "home",
                }),
                (0, d.A)({
                    skuId: (0, _.Y)({ product: t, selectedVariantIndex: v }),
                    isGift: !0,
                    giftRecipient: R,
                    giftingOrigin: y,
                    analyticsLocations: m,
                    returnRef: A,
                    onClose:
                        null != g
                            ? (e) => {
                                  e && g();
                              }
                            : void 0,
                });
        };
    return T
        ? (0, a.jsx)(o.Button, {
              variant: n ? "primary" : "secondary",
              icon: o.okO,
              onClick: O,
              text: h.intl.string(h.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, a.jsx)(r.m, {
              text: h.intl.string(h.t["JCFN/y"]),
              delay: I,
              children: (0, a.jsx)(o.K0, {
                  "aria-label": h.intl.string(h.t["JCFN/y"]),
                  buttonRef: N,
                  variant: n ? "primary" : "secondary",
                  icon: o.okO,
                  size: "md",
                  onClick: O,
              }),
          });
};
