"use strict";
n.d(t, { Lj: () => m, R: () => p, at: () => f, ir: () => h, rm: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(397927),
    l = n(511484),
    u = n(349563),
    c = n(788868),
    d = n(985018),
    _ = n(639179),
    f = (function (e) {
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
function p(e) {
    let { text: t, className: n, colorOptions: i = 2, icon: s, gap: l = !0 } = e;
    return (0, r.jsxs)("div", {
        className: a()(n, _.Yu, {
            [_.XW]: 1 === i,
            [_.Rc]: 3 === i,
            [_.WY]: 4 === i,
            [_.mY]: 5 === i,
            [_.ZC]: 6 === i,
            [_.u0]: 7 === i,
            [_._p]: l,
        }),
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-xs/bold",
                className: a()(_.xG, {
                    [_.wV]: 0 !== i && 2 !== i,
                    [_.Xm]: 0 === i,
                    [_.X3]: 2 === i || 6 === i,
                    [_.kC]: 7 === i,
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
            t = `url(#${u.Bp})`;
            break;
        case 4:
        case 5:
            t = `url(#${u.G5})`;
            break;
        default:
            t = "white";
    }
    return l
        ? (0, r.jsxs)("div", {
              className: a()(i, _.ls),
              children: [
                  (0, r.jsx)(u.zF, { foreground: _.QX, color: t }),
                  (0, r.jsx)(u.zF, { foreground: _.J0, color: t }),
                  (0, r.jsx)(u.zF, { foreground: _.QC, color: t }),
                  (0, r.jsx)(p, { text: n, colorOptions: o }),
                  (0, r.jsx)(u.zF, { foreground: _.JF, color: t }),
                  (0, r.jsx)(u.zF, { foreground: _.Cm, color: t }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: a()(i, _.ls),
              children: [
                  (0, r.jsx)(p, { text: n, colorOptions: o }),
                  (0, r.jsx)(u.zF, { foreground: _.QX, style: { marginLeft: 4, marginBottom: -6 }, color: t }),
                  (0, r.jsx)(u.zF, { foreground: _.J0, color: t }),
              ],
          });
}
function m(e, t) {
    return t === c.pe.TIER_0
        ? d.intl.string(d.t.IBYG5U)
        : e === c.PremiumTypes.TIER_0
          ? d.intl.string(d.t.qYKftX)
          : null;
}
function g(e, t, n, r, i) {
    if (null != n && (0, l.U9)(n, c.pe.TIER_2) && void 0 !== n.discount.amount)
        return e ? d.intl.string(d.t.EyjDRE) : d.intl.formatToPlainString(d.t.iiLbvu, { percent: n.discount.amount });
    if (i === c.pe.TIER_2) {
        let e = d.intl.string(d.t.IBYG5U);
        return r?.trial_id === c.Dw && (e = d.intl.string(d.t.gtNqJQ)), e;
    }
    return t === c.PremiumTypes.TIER_2 ? d.intl.string(d.t.qYKftX) : e ? d.intl.string(d.t.EyjDRE) : null;
}
