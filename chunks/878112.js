n.d(t, { A: () => v });
var r = n(627968),
    a = n(64700),
    i = n(575593),
    s = n(990078),
    l = n(397927),
    o = n(688810),
    c = n(44120),
    d = n(954571),
    u = n(440938),
    m = n(238184),
    p = n(766172),
    h = n(652215),
    x = n(788868),
    f = n(985018);
let v = (e) => {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: v,
            returnRef: g,
            onSuccess: _,
            tooltipDelay: A,
            fullWidth: j = !1,
            giftRecipient: C,
            giftingOrigin: N = x.vQ.SHOP_PAGE,
        } = e,
        { analyticsLocations: I } = (0, o.Ay)(),
        b = a.useRef(null),
        R = (0, u.uM)(),
        T = (0, m.A)(),
        E = (e) => {
            e.stopPropagation(),
                d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: R?.sessionId,
                    sku_id: t.skuId,
                    page_section: R?.pageSection,
                    page_category: R?.pageCategory,
                    tile_type: i.R[t.type],
                    tile_position: String(R?.tilePosition),
                    cta_name: "gift button",
                    page_type: T || "home",
                }),
                (0, c.A)({
                    skuId: (0, p.Y)({ product: t, selectedVariantIndex: v }),
                    isGift: !0,
                    giftRecipient: C,
                    giftingOrigin: N,
                    analyticsLocations: I,
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
        ? (0, r.jsx)(l.Button, {
              variant: n ? "primary" : "secondary",
              icon: l.okO,
              onClick: E,
              text: f.intl.string(f.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(s.m, {
              text: f.intl.string(f.t["JCFN/y"]),
              delay: A,
              children: (0, r.jsx)(l.K0, {
                  "aria-label": f.intl.string(f.t["JCFN/y"]),
                  buttonRef: b,
                  variant: n ? "primary" : "secondary",
                  icon: l.okO,
                  size: "md",
                  onClick: E,
              }),
          });
};
