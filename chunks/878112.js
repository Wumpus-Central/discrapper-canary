n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(575593),
    l = n(990078),
    s = n(821609),
    o = n(597770),
    u = n(408278),
    c = n(688810),
    d = n(44120),
    p = n(174459),
    g = n(440938),
    C = n(238184),
    A = n(766172),
    f = n(758836),
    I = n(652215),
    v = n(788868),
    E = n(375708);
let h = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: h,
            returnRef: _,
            onSuccess: b,
            tooltipDelay: R,
            fullWidth: S = !1,
            giftRecipient: y,
            giftingOrigin: k = v.vQ.SHOP_PAGE,
            onTrackClick: L,
        } = e,
        { analyticsLocations: O } = (0, c.Ay)(),
        m = i.useRef(null),
        x = (0, g.uM)(),
        V = (0, C.A)(),
        P = (e) => {
            e.stopPropagation(),
                p.default.track(I.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: x?.sessionId,
                    sku_id: t.skuId,
                    page_section: x?.pageSection,
                    page_category: x?.pageCategory,
                    tile_type: a.R[t.type],
                    tile_position: String(x?.tilePosition),
                    cta_name: "gift button",
                    page_type: V ?? "home",
                }),
                L?.(f.sH.SEND_AS_GIFT),
                (0, d.A)({
                    skuId: (0, A.Y)({ product: t, selectedVariantIndex: h }),
                    isGift: !0,
                    giftRecipient: y,
                    giftingOrigin: k,
                    analyticsLocations: O,
                    discoverySessionId: x?.sessionId,
                    returnRef: _,
                    onClose:
                        null != b
                            ? (e) => {
                                  e && b();
                              }
                            : void 0,
                });
        };
    return S
        ? (0, r.jsx)(s.$, {
              variant: n ? "primary" : "secondary",
              icon: o.o,
              onClick: P,
              text: E.intl.string(E.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(l.m, {
              text: E.intl.string(E.t["JCFN/y"]),
              delay: R,
              children: (0, r.jsx)(u.K, {
                  "aria-label": E.intl.string(E.t["JCFN/y"]),
                  buttonRef: m,
                  variant: n ? "primary" : "secondary",
                  icon: o.o,
                  size: "md",
                  onClick: P,
              }),
          });
};
