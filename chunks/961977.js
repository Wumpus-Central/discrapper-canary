t.d(l, { A: () => h });
var n = t(627968),
    s = t(64700),
    i = t(158954),
    a = t(554146),
    r = t(397927),
    o = t(357186),
    d = t(379848),
    c = t(151252),
    u = t(733391),
    _ = t(133015),
    g = t(476438),
    p = t(652215),
    I = t(49999),
    x = t(985018),
    f = t(8519);
function A(e) {
    let { location: l } = e,
        t = (0, _.n)({ location: l }),
        c = (0, g.A)(),
        [A, h] = (0, d.RF)(
            t ? a.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, o.c)(a.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        m = A !== a.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return (s.useEffect(() => {
        t && (0, u.Xw)();
    }, [t]),
    !t || m)
        ? null
        : (0, n.jsxs)(r.$Td, {
              className: f.U,
              color: r.Hv$.BRAND,
              children: [
                  (0, n.jsx)(r.PMB, {
                      noticeType: p.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => h(I.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(i.Cp8, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: f.f,
                      children: [
                          (0, n.jsxs)(i.EYj, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [x.intl.string(x.t.yYEZGi), null != c && ` (${c})`],
                          }),
                          (0, n.jsx)(i.EYj, { variant: "text-sm/bold", color: "currentColor", children: "—" }),
                          (0, n.jsx)(i.EYj, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: x.intl.format(x.t.RUuXiA, { applicationName: x.intl.string(x.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
function h(e) {
    let { location: l } = e,
        { enabled: t } = (0, c.Z)({ location: l });
    return t ? (0, n.jsx)(A, { location: l }) : null;
}
