n.d(t, { Z: () => _ }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(979554),
    a = n(311570),
    s = n(481060),
    o = n(906732),
    c = n(333867),
    d = n(541699),
    u = n(502762),
    p = n(221300),
    h = n(688192),
    f = n(766717),
    g = n(474936),
    m = n(388032),
    b = n(815743);
function _(e) {
    let { wishlistItems: t = [], profileOwner: n, onClick: _ } = e,
        { analyticsLocations: y } = (0, o.ZP)(),
        x = (0, i.useMemo)(() => {
            let e = [];
            for (let i = 0; i < t.length && e.length < 4; i++) {
                let s = t[i],
                    o = 3 === e.length && t.length > 4,
                    u = o ? m.intl.string(m.t.TxBQzD) : m.intl.string(m.t.ilhtIa);
                if ((0, d.Q)(s)) {
                    let i = () => {
                            if (o) return void _();
                            (0, c.Z)({
                                skuId: s.skuId,
                                isGift: !0,
                                giftingOrigin: g.Wt.USER_PROFILE_WISHLIST,
                                analyticsLocations: y,
                                giftRecipient: n,
                                variantsReturnStyle: a.v.VARIANTS_GROUP,
                            });
                        },
                        d = () =>
                            (0, r.jsx)(p.Z, {
                                item: s,
                                profileOwner: n,
                                isHighlighted: !1,
                                surface: h.Y.PROFILE_SIDEBAR,
                            }),
                        m = s.collectiblesItem.type === l.Z.PROFILE_EFFECT;
                    e.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                onCardClick: i,
                                tooltipText: u,
                                shouldScalePreview: !m,
                                renderPreview: d,
                                showMoreOverlay: o,
                                moreCount: t.length - 4,
                            },
                            s.skuId,
                        ),
                    );
                }
            }
            return e;
        }, [t, n, y, _]);
    return 0 === x.length
        ? null
        : (0, r.jsxs)(u.Z.Overlay, {
              className: b.container,
              children: [
                  (0, r.jsx)("div", {
                      className: b.header,
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-sm/medium",
                          children: m.intl.string(m.t["7lZ31J"]),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: b.cardsContainer,
                      children: x,
                  }),
              ],
          });
}
