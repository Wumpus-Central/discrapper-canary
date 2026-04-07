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
    h = n(766172),
    p = n(758836),
    x = n(652215),
    f = n(788868),
    _ = n(985018);
let v = (e) => {
    let {
            product: t,
            primary: n,
            selectedVariantIndex: v,
            returnRef: g,
            onSuccess: A,
            tooltipDelay: C,
            fullWidth: j = !1,
            giftRecipient: N,
            giftingOrigin: I = f.vQ.SHOP_PAGE,
            onTrackClick: b,
        } = e,
        { analyticsLocations: R } = (0, o.Ay)(),
        T = a.useRef(null),
        k = (0, u.uM)(),
        E = (0, m.A)(),
        O = (e) => {
            e.stopPropagation(),
                d.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: k?.sessionId,
                    sku_id: t.skuId,
                    page_section: k?.pageSection,
                    page_category: k?.pageCategory,
                    tile_type: i.R[t.type],
                    tile_position: String(k?.tilePosition),
                    cta_name: "gift button",
                    page_type: E ?? "home",
                }),
                b?.(p.sH.SEND_AS_GIFT),
                (0, c.A)({
                    skuId: (0, h.Y)({ product: t, selectedVariantIndex: v }),
                    isGift: !0,
                    giftRecipient: N,
                    giftingOrigin: I,
                    analyticsLocations: R,
                    returnRef: g,
                    onClose:
                        null != A
                            ? (e) => {
                                  e && A();
                              }
                            : void 0,
                });
        };
    return j
        ? (0, r.jsx)(l.Button, {
              variant: n ? "primary" : "secondary",
              icon: l.okO,
              onClick: O,
              text: _.intl.string(_.t.gmnzqM),
              fullWidth: !0,
          })
        : (0, r.jsx)(s.m, {
              text: _.intl.string(_.t["JCFN/y"]),
              delay: C,
              children: (0, r.jsx)(l.K0, {
                  "aria-label": _.intl.string(_.t["JCFN/y"]),
                  buttonRef: T,
                  variant: n ? "primary" : "secondary",
                  icon: l.okO,
                  size: "md",
                  onClick: O,
              }),
          });
};
