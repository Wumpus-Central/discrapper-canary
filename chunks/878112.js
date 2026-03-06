a.d(n, { A: () => A });
var t = a(627968),
    i = a(64700),
    l = a(575593),
    r = a(990078),
    s = a(397927),
    o = a(688810),
    d = a(44120),
    u = a(954571),
    c = a(440938),
    p = a(238184),
    g = a(766172),
    v = a(652215),
    h = a(788868),
    m = a(985018);
let A = (e) => {
    let {
            product: n,
            primary: a,
            selectedVariantIndex: A,
            returnRef: y,
            onSuccess: k,
            tooltipDelay: C,
            fullWidth: f = !1,
        } = e,
        { analyticsLocations: b } = (0, o.Ay)(),
        _ = i.useRef(null),
        E = (0, c.uM)(),
        N = (0, p.A)(),
        S = (e) => {
            e.stopPropagation(),
                u.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: E?.sessionId,
                    sku_id: n.skuId,
                    page_section: E?.pageSection,
                    page_category: E?.pageCategory,
                    tile_type: l.R[n.type],
                    tile_position: String(E?.tilePosition),
                    cta_name: "gift button",
                    page_type: N || "home",
                }),
                (0, d.A)({
                    skuId: (0, g.Y)({ product: n, selectedVariantIndex: A }),
                    isGift: !0,
                    giftingOrigin: h.vQ.SHOP_PAGE,
                    analyticsLocations: b,
                    returnRef: y,
                    onClose:
                        null != k
                            ? (e) => {
                                  e && k();
                              }
                            : void 0,
                });
        };
    return f
        ? (0, t.jsx)(s.Button, {
              variant: a ? "primary" : "secondary",
              icon: s.okO,
              onClick: S,
              text: m.intl.string(m.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, t.jsx)(r.m, {
              text: m.intl.string(m.t["JCFN/y"]),
              delay: C,
              children: (0, t.jsx)(s.K0, {
                  "aria-label": m.intl.string(m.t["JCFN/y"]),
                  buttonRef: _,
                  variant: a ? "primary" : "secondary",
                  icon: s.okO,
                  size: "md",
                  onClick: S,
              }),
          });
};
