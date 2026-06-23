r.d(t, { A: () => _ });
var n = r(627968),
    i = r(64700),
    a = r(575593),
    l = r(990078),
    s = r(821609),
    o = r(597770),
    u = r(408278),
    d = r(688810),
    c = r(44120),
    p = r(174459),
    g = r(440938),
    C = r(238184),
    A = r(766172),
    I = r(758836),
    v = r(652215),
    E = r(788868),
    h = r(375708);
let _ = (e) => {
    let {
            product: t,
            primary: r,
            selectedVariantIndex: _,
            returnRef: b,
            onSuccess: R,
            tooltipDelay: f,
            fullWidth: S = !1,
            giftRecipient: y,
            giftingOrigin: k = E.vQ.SHOP_PAGE,
            onTrackClick: L,
        } = e,
        { analyticsLocations: O } = (0, d.Ay)(),
        m = i.useRef(null),
        x = (0, g.uM)(),
        V = (0, C.A)(),
        P = (e) => {
            e.stopPropagation(),
                p.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: x?.sessionId,
                    sku_id: t.skuId,
                    page_section: x?.pageSection,
                    page_category: x?.pageCategory,
                    tile_type: a.R[t.type],
                    tile_position: String(x?.tilePosition),
                    cta_name: "gift button",
                    page_type: V ?? "home",
                }),
                L?.(I.sH.SEND_AS_GIFT),
                (0, c.A)({
                    skuId: (0, A.Y)({ product: t, selectedVariantIndex: _ }),
                    isGift: !0,
                    giftRecipient: y,
                    giftingOrigin: k,
                    analyticsLocations: O,
                    discoverySessionId: x?.sessionId,
                    returnRef: b,
                    onClose:
                        null != R
                            ? (e) => {
                                  e && R();
                              }
                            : void 0,
                });
        };
    return S
        ? (0, n.jsx)(s.$, {
              variant: r ? "primary" : "secondary",
              icon: o.o,
              onClick: P,
              text: h.intl.string(h.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, n.jsx)(l.m, {
              text: h.intl.string(h.t["JCFN/y"]),
              delay: f,
              children: (0, n.jsx)(u.K, {
                  "aria-label": h.intl.string(h.t["JCFN/y"]),
                  buttonRef: m,
                  variant: r ? "primary" : "secondary",
                  icon: o.o,
                  size: "md",
                  onClick: P,
              }),
          });
};
