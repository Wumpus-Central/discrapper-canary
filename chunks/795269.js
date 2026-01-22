n.d(t, {
    Lj: () => m,
    R: () => _,
    at: () => p,
    ir: () => h,
    rm: () => g,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(397927),
    l = n(511484),
    c = n(349563),
    u = n(788868),
    d = n(985018),
    f = n(639179),
    p = (function (e) {
        return (
            (e[(e.PREMIUM_TIER_0_WHITE_FILL = 0)] = "PREMIUM_TIER_0_WHITE_FILL"),
            (e[(e.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = "PREMIUM_TIER_0_GRADIENT_FILL"),
            (e[(e.PREMIUM_TIER_2_WHITE_FILL = 2)] = "PREMIUM_TIER_2_WHITE_FILL"),
            (e[(e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL"),
            (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL"),
            (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE"),
            (e[(e.PREMIUM_TIER_2_GREY_FILL = 6)] = "PREMIUM_TIER_2_GREY_FILL"),
            (e[(e.PREMIUM_TIER_2_MOD_BACKGROUND_FILL = 7)] = "PREMIUM_TIER_2_MOD_BACKGROUND_FILL"),
            e
        );
    })({});
function _(e) {
    let { text: t, className: n, colorOptions: i = 2, icon: s, gap: l = !0 } = e;
    return (0, r.jsxs)("div", {
        className: a()(n, f.Yu, {
            [f.XW]: 1 === i,
            [f.Rc]: 3 === i,
            [f.WY]: 4 === i,
            [f.mY]: 5 === i,
            [f.ZC]: 6 === i,
            [f.u0]: 7 === i,
            [f._p]: l,
        }),
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-xs/bold",
                className: a()(f.xG, {
                    [f.wV]: 0 !== i && 2 !== i,
                    [f.Xm]: 0 === i,
                    [f.X3]: 2 === i || 6 === i,
                    [f.kC]: 7 === i,
                }),
                children: t,
            }),
            s,
        ],
    });
}
function h(e) {
    let t,
        { text: n, className: i, colorOptions: o = 2, isPillOnBorder: l = !0 } = e;
    switch (o) {
        case 1:
            t = s.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = "url(#".concat(c.Bp, ")");
            break;
        case 4:
        case 5:
            t = "url(#".concat(c.G5, ")");
            break;
        default:
            t = "white";
    }
    return l
        ? (0, r.jsxs)("div", {
              className: a()(i, f.ls),
              children: [
                  (0, r.jsx)(c.zF, {
                      foreground: f.QX,
                      color: t,
                  }),
                  (0, r.jsx)(c.zF, {
                      foreground: f.J0,
                      color: t,
                  }),
                  (0, r.jsx)(c.zF, {
                      foreground: f.QC,
                      color: t,
                  }),
                  (0, r.jsx)(_, {
                      text: n,
                      colorOptions: o,
                  }),
                  (0, r.jsx)(c.zF, {
                      foreground: f.JF,
                      color: t,
                  }),
                  (0, r.jsx)(c.zF, {
                      foreground: f.Cm,
                      color: t,
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: a()(i, f.ls),
              children: [
                  (0, r.jsx)(_, {
                      text: n,
                      colorOptions: o,
                  }),
                  (0, r.jsx)(c.zF, {
                      foreground: f.QX,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6,
                      },
                      color: t,
                  }),
                  (0, r.jsx)(c.zF, {
                      foreground: f.J0,
                      color: t,
                  }),
              ],
          });
}
function m(e, t) {
    return t === u.pe.TIER_0
        ? d.intl.string(d.t.IBYG5U)
        : e === u.PremiumTypes.TIER_0
          ? d.intl.string(d.t.qYKftX)
          : null;
}
function g(e, t, n, r, i) {
    if (null != n && (0, l.U9)(n, u.pe.TIER_2) && void 0 !== n.discount.amount)
        return e ? d.intl.string(d.t.EyjDRE) : d.intl.formatToPlainString(d.t.iiLbvu, { percent: n.discount.amount });
    if (i === u.pe.TIER_2) {
        let e = d.intl.string(d.t.IBYG5U);
        return (null == r ? void 0 : r.trial_id) === u.Dw && (e = d.intl.string(d.t.gtNqJQ)), e;
    }
    return t === u.PremiumTypes.TIER_2 ? d.intl.string(d.t.qYKftX) : e ? d.intl.string(d.t.EyjDRE) : null;
}
