n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(100527),
    o = n(381585),
    s = n(994587),
    a = n(429368),
    c = n(680942),
    u = n(786040),
    d = n(58201),
    g = n(694364),
    f = n(215023),
    p = n(388032);
let C = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: a,
                onClick: d,
                icon: C,
                prioritizedCurrency: h,
                onClickAnalytics: _,
            } = e,
            m = (0, s.Nd)(),
            b = null == m ? void 0 : m.tab,
            E = (0, o.sp)(),
            v = (0, g.J)(t, h),
            x = (0, u.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, _);
        return null != d || null != C
            ? (0, r.jsx)(l.hU, {
                  variant: "primary",
                  "aria-label": p.intl.string(p.t.SKNnqq),
                  icon: null != C ? C : l.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != d ? d(t.skuId) : x(e);
                  },
              })
            : v
              ? (0, r.jsx)(o.k0, {
                    newValue: { pageCategory: b === f.AW.HOME || null == E ? void 0 : E.pageCategory },
                    children: (0, r.jsx)(c.Z, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: a,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    h = (e) => {
        let { skuId: t, cardRef: n, onClick: l, icon: i, prioritizedCurrency: o, onClickAnalytics: s } = e,
            c = (0, u.LJ)(t),
            g = (0, a.o)(c);
        if (null == c) return null;
        let f = (0, d.W)(c, g);
        return (0, r.jsx)(C, {
            product: f,
            cardRef: n,
            selectedVariantIndex: g,
            onClick: l,
            icon: i,
            prioritizedCurrency: o,
            onClickAnalytics: s,
        });
    };
