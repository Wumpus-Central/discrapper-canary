n.d(t, { A: () => k });
var r = n(627968),
    i = n(64700),
    s = n(575593),
    l = n(821609),
    a = n(597770),
    o = n(866665),
    u = n(408278),
    c = n(688810),
    d = n(44120),
    p = n(174459),
    C = n(440938),
    f = n(238184),
    I = n(766172),
    g = n(758836),
    x = n(652215),
    m = n(202541),
    A = n(375708);
let k = function (e) {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: k,
            returnRef: _,
            onSuccess: v,
            tooltipDelay: h,
            fullWidth: E = !1,
            fullWidthLabel: R,
            giftRecipient: y,
            giftingOrigin: j = m.vQ.SHOP_PAGE,
            onTrackClick: T,
        } = e,
        { analyticsLocations: b } = (0, c.Ay)(),
        P = i.useRef(null),
        L = (0, C.uM)(),
        S = (0, f.A)();
    function O(e) {
        e.stopPropagation(),
            p.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                skuId: (0, I.Y)({ product: t, selectedVariantIndex: k }),
                isGift: !0,
                giftRecipient: y,
                giftingOrigin: j,
                analyticsLocations: b,
                discoverySessionId: L?.sessionId,
                returnRef: _,
                onClose:
                    null != v
                        ? (e) => {
                              e && v();
                          }
                        : void 0,
            });
    }
    return E
        ? (0, r.jsx)(l.$, {
              variant: n ? "primary" : "secondary",
              icon: a.o,
              onClick: O,
              text: R ?? A.intl.string(A.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(o.m, {
              text: A.intl.string(A.t["JCFN/y"]),
              delay: h,
              children: (0, r.jsx)(u.K, {
                  "aria-label": A.intl.string(A.t["JCFN/y"]),
                  buttonRef: P,
                  variant: n ? "primary" : "secondary",
                  icon: a.o,
                  size: "md",
                  onClick: O,
              }),
          });
};
