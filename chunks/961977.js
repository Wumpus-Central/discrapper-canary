t.d(l, { A: () => I });
var n = t(627968),
    s = t(64700),
    a = t(158954),
    i = t(554146),
    r = t(397927),
    o = t(357186),
    d = t(932001),
    c = t(151252),
    u = t(733391),
    _ = t(133015),
    g = t(476438),
    x = t(652215),
    p = t(49999),
    f = t(985018),
    A = t(545941);
function h(e) {
    let { location: l } = e,
        t = (0, _.n)({ location: l }),
        c = (0, g.B)(),
        [h, I] = (0, d.RF)(
            t ? i.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, o.c)(i.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        m = h !== i.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return (s.useEffect(() => {
        t && (0, u.Xw)();
    }, [t]),
    !t || m)
        ? null
        : (0, n.jsxs)(r.$Td, {
              className: A.U,
              color: r.Hv$.BRAND,
              children: [
                  (0, n.jsx)(r.PMB, {
                      noticeType: x.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => I(p.i.USER_DISMISS),
                  }),
                  (0, n.jsx)(a.Cp8, { size: "xs", color: "currentColor" }),
                  (0, n.jsxs)("div", {
                      className: A.f,
                      children: [
                          (0, n.jsxs)(a.EYj, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [f.intl.string(f.t.yYEZGi), null != c && ` (${c})`],
                          }),
                          (0, n.jsx)(a.EYj, { variant: "text-sm/bold", color: "currentColor", children: "—" }),
                          (0, n.jsx)(a.EYj, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: f.intl.format(f.t.RUuXiA, { applicationName: f.intl.string(f.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
function I(e) {
    let { location: l } = e,
        { enabled: t } = (0, c.Z)({ location: l });
    return t ? (0, n.jsx)(h, { location: l }) : null;
}
