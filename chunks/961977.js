t.d(l, { A: () => p });
var n = t(627968),
    s = t(158954),
    a = t(554146),
    i = t(397927),
    r = t(357186),
    o = t(932001),
    d = t(945942),
    c = t(652215),
    u = t(49999),
    _ = t(985018),
    g = t(333687);
function p(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: p } = (0, d.A)({ location: l }),
        [x, A] = (0, o.RF)(
            t ? a.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, r.c)(a.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        f = x !== a.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || f
        ? null
        : (0, n.jsxs)(i.$Td, {
              className: g.U,
              color: i.Hv$.BRAND,
              children: [
                  (0, n.jsx)(i.PMB, {
                      noticeType: c.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => A(u.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(s.Cp8, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: g.f,
                      children: [
                          (0, n.jsxs)(s.EYj, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [_.intl.string(_.t.yYEZGi), null != p && ` (${p})`],
                          }),
                          (0, n.jsx)(s.EYj, { variant: "text-sm/bold", color: "currentColor", children: "—" }),
                          (0, n.jsx)(s.EYj, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: _.intl.format(_.t.RUuXiA, { applicationName: _.intl.string(_.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
