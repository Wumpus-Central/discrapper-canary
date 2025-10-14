n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(100527),
    s = n(381585),
    o = n(994587),
    a = n(680942),
    c = n(786040),
    u = n(58201),
    d = n(694364),
    g = n(215023),
    f = n(388032);
let p = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: u,
                onClick: p,
                icon: C,
                prioritizedCurrency: h,
                onClickAnalytics: _,
            } = e,
            m = (0, o.Nd)(),
            b = null == m ? void 0 : m.tab,
            E = (0, s.sp)(),
            v = (0, d.J)(t, h),
            S = (0, c.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, _);
        return null != p || null != C
            ? (0, r.jsx)(l.hU, {
                  variant: "primary",
                  "aria-label": f.intl.string(f.t.SKNnqq),
                  icon: null != C ? C : l.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != p ? p(t.skuId) : S(e);
                  },
              })
            : v
              ? (0, r.jsx)(s.k0, {
                    newValue: { pageCategory: b === g.AW.HOME || null == E ? void 0 : E.pageCategory },
                    children: (0, r.jsx)(a.Z, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: u,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    C = (e) => {
        let {
                skuId: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: i,
                icon: s,
                prioritizedCurrency: o,
                onClickAnalytics: a,
            } = e,
            d = (0, c.LJ)(t);
        if (null == d) return null;
        let g = (0, u.W)(d, l);
        return (0, r.jsx)(p, {
            product: g,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: i,
            icon: s,
            prioritizedCurrency: o,
            onClickAnalytics: a,
        });
    };
