n.d(t, { A: () => g });
var r = n(627968),
    l = n(64700),
    a = n(575593),
    i = n(635358),
    o = n(990078),
    s = n(397927),
    c = n(688810),
    u = n(44120),
    d = n(954571),
    p = n(440938),
    v = n(238184),
    b = n(766172),
    y = n(652215),
    m = n(788868),
    f = n(985018);
let g = (e) => {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: g,
            returnRef: O,
            onSuccess: j,
            tooltipDelay: h,
            fullWidth: x = !1,
        } = e,
        { analyticsLocations: P } = (0, c.Ay)(),
        A = l.useRef(null),
        C = (0, p.uM)(),
        R = (0, v.A)(),
        k = (e) => {
            e.stopPropagation(),
                d.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == C ? void 0 : C.sessionId,
                    sku_id: t.skuId,
                    page_section: null == C ? void 0 : C.pageSection,
                    page_category: null == C ? void 0 : C.pageCategory,
                    tile_type: a.R[t.type],
                    tile_position: String(null == C ? void 0 : C.tilePosition),
                    cta_name: "gift button",
                    page_type: R || "home",
                }),
                (0, u.A)({
                    skuId: (0, b.Y)({
                        product: t,
                        selectedVariantIndex: g,
                    }),
                    isGift: !0,
                    giftingOrigin: m.vQ.SHOP_PAGE,
                    analyticsLocations: P,
                    returnRef: O,
                    variantsReturnStyle: i.g.VARIANTS_GROUP,
                    onClose:
                        null != j
                            ? (e) => {
                                  e && j();
                              }
                            : void 0,
                });
        };
    return x
        ? (0, r.jsx)(s.Button, {
              variant: n ? "primary" : "secondary",
              icon: s.okO,
              onClick: k,
              text: f.intl.string(f.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(o.m, {
              text: f.intl.string(f.t["JCFN/y"]),
              delay: h,
              children: (0, r.jsx)(s.K0, {
                  "aria-label": f.intl.string(f.t["JCFN/y"]),
                  buttonRef: A,
                  variant: n ? "primary" : "secondary",
                  icon: s.okO,
                  size: "md",
                  onClick: k,
              }),
          });
};
