n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    i = n(575593),
    r = n(990078),
    s = n(821609),
    o = n(597770),
    d = n(408278),
    u = n(688810),
    c = n(44120),
    p = n(954571),
    g = n(440938),
    v = n(238184),
    m = n(766172),
    h = n(758836),
    A = n(652215),
    C = n(788868),
    E = n(985018);
let _ = (e) => {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: _,
            returnRef: k,
            onSuccess: y,
            tooltipDelay: R,
            fullWidth: b = !1,
            giftRecipient: I,
            giftingOrigin: f = C.vQ.SHOP_PAGE,
            onTrackClick: S,
        } = e,
        { analyticsLocations: N } = (0, u.Ay)(),
        x = l.useRef(null),
        O = (0, g.uM)(),
        P = (0, v.A)(),
        T = (e) => {
            e.stopPropagation(),
                p.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: O?.sessionId,
                    sku_id: t.skuId,
                    page_section: O?.pageSection,
                    page_category: O?.pageCategory,
                    tile_type: i.R[t.type],
                    tile_position: String(O?.tilePosition),
                    cta_name: "gift button",
                    page_type: P ?? "home",
                }),
                S?.(h.sH.SEND_AS_GIFT),
                (0, c.A)({
                    skuId: (0, m.Y)({ product: t, selectedVariantIndex: _ }),
                    isGift: !0,
                    giftRecipient: I,
                    giftingOrigin: f,
                    analyticsLocations: N,
                    returnRef: k,
                    onClose:
                        null != y
                            ? (e) => {
                                  e && y();
                              }
                            : void 0,
                });
        };
    return b
        ? (0, a.jsx)(s.$, {
              variant: n ? "primary" : "secondary",
              icon: o.o,
              onClick: T,
              text: E.intl.string(E.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, a.jsx)(r.m, {
              text: E.intl.string(E.t["JCFN/y"]),
              delay: R,
              children: (0, a.jsx)(d.K, {
                  "aria-label": E.intl.string(E.t["JCFN/y"]),
                  buttonRef: x,
                  variant: n ? "primary" : "secondary",
                  icon: o.o,
                  size: "md",
                  onClick: T,
              }),
          });
};
