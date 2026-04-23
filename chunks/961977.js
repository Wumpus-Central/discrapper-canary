t.d(l, { A: () => x });
var n = t(627968),
    s = t(318254),
    a = t(834730),
    i = t(554146),
    r = t(417098),
    o = t(357186),
    d = t(932001),
    c = t(945942),
    u = t(652215),
    _ = t(49999),
    g = t(985018),
    p = t(922674);
function x(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: x } = (0, c.A)({ location: l }),
        [A, f] = (0, d.RF)(
            t ? i.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, o.c)(i.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        I = A !== i.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || I
        ? null
        : (0, n.jsxs)(r.$T, {
              className: p.U,
              color: r.Hv.BRAND,
              children: [
                  (0, n.jsx)(r.PM, {
                      noticeType: u.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => f(_.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(s.C, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: p.f,
                      children: [
                          (0, n.jsxs)(a.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [g.intl.string(g.t.yYEZGi), null != x && ` (${x})`],
                          }),
                          (0, n.jsx)(a.E, { variant: "text-sm/bold", color: "currentColor", children: "—" }),
                          (0, n.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: g.intl.format(g.t.RUuXiA, { applicationName: g.intl.string(g.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
