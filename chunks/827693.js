n.d(t, { A: () => g });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(263063),
    r = n(987144),
    o = n(864310),
    d = n(71393),
    c = n(473145),
    u = n(652215),
    m = n(985018),
    _ = n(639317);
function g(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([d.A], () => d.A.getGuild(t), [t]),
        { total: g } = (0, o.A)(n?.id);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: _.Nr,
              children: [
                  (0, i.jsxs)("div", {
                      className: _.OA,
                      children: [
                          (0, i.jsx)(a.Ay, { className: _.$f, guild: n, size: a.Ay.Sizes.LARGER }),
                          (0, i.jsxs)("div", {
                              className: _.gI,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: "heading-md/semibold",
                                      color: "text-default",
                                      tag: "span",
                                      children: n.name,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: _.ew,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: _.QW,
                                              children: [
                                                  (0, i.jsx)(l._Jp, {
                                                      className: _.Wz,
                                                      color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                                  }),
                                                  (0, i.jsx)(l.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: m.intl.format(m.t["pob/cL"], { subscriptions: g }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)("div", { className: _.zk }),
                                          (0, i.jsx)(l.Text, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: (0, c.gb)(n.premiumTier, { useLevels: !1 }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsx)(l.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: l._Jp,
                      text: m.intl.string(m.t.aBHecF),
                      onClick: () => {
                          (0, r.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: u.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: u.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: u.ZSU.BUTTON_CTA,
                                  objectType: u.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
