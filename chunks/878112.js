n.d(t, { A: () => m });
var r = n(477900),
    i = n(582128),
    s = n(575593),
    l = n(821609),
    a = n(597770),
    o = n(866665),
    u = n(408278),
    c = n(688810),
    d = n(44120),
    C = n(174459),
    p = n(440938),
    I = n(238184),
    x = n(766172),
    g = n(758836),
    f = n(652215),
    A = n(202541),
    k = n(375708);
let m = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: m,
            returnRef: v,
            onSuccess: _,
            tooltipDelay: h,
            fullWidth: E = !1,
            fullWidthLabel: R,
            giftRecipient: y,
            giftingOrigin: j = A.vQ.SHOP_PAGE,
            onTrackClick: T,
        } = e,
        { analyticsLocations: b } = (0, c.Ay)(),
        P = i.useRef(null),
        L = (0, p.uM)(),
        S = (0, I.A)();
    function O(e) {
        e.stopPropagation(),
            C.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: L?.sessionId,
                sku_id: t.skuId,
                page_section: L?.pageSection,
                page_category: L?.pageCategory,
                tile_type: s.R[t.type],
                tile_position: String(L?.tilePosition),
                cta_name: "gift button",
                page_type: S ?? "home",
            }),
            T?.(g.sH.SEND_AS_GIFT),
            (0, d.A)({
                skuId: (0, x.Y)({ product: t, selectedVariantIndex: m }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: j,
                analyticsLocations: b,
                discoverySessionId: L?.sessionId,
                returnRef: v,
                onClose:
                    null != _
                        ? (e) => {
                              e && _();
                          }
                        : void 0,
            });
    }
    return E
        ? (0, r.jsx)(l.$, {
              variant: n ? "primary" : "secondary",
              icon: a.o,
              onClick: O,
              text: R ?? k.intl.string(k.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(o.m, {
              text: k.intl.string(k.t["JCFN/y"]),
              delay: h,
              children: (0, r.jsx)(u.K, {
                  "aria-label": k.intl.string(k.t["JCFN/y"]),
                  buttonRef: P,
                  variant: n ? "primary" : "secondary",
                  icon: a.o,
                  size: "md",
                  onClick: O,
              }),
          });
};
