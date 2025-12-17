n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(28664),
    a = n(481060),
    s = n(275759),
    o = n(565138),
    c = n(706454),
    d = n(271383),
    u = n(430824),
    p = n(709054),
    h = n(388032),
    f = n(864715);
function g(e) {
    let { userId: t, guildId: n, textClassName: g, tooltipDelay: m } = e,
        b = (0, i.e7)([c.default], () => c.default.locale),
        y = (0, i.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        O = (0, i.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t) : null)),
        x = (0, s.FI)(p.default.extractTimestamp(t), b),
        j = (0, s.FI)(null == O ? void 0 : O.joinedAt, b);
    return null == y || null == O
        ? (0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              className: g,
              children: x,
          })
        : (0, r.jsxs)("div", {
              className: f.memberSinceWrapper,
              children: [
                  (0, r.jsxs)("div", {
                      className: f.memberSince,
                      children: [
                          (0, r.jsx)(l.u, {
                              text: h.intl.string(h.t.uvGmCx),
                              delay: m,
                              children: (0, r.jsx)(a.gw7, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: f.discordIcon,
                              }),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: g,
                              children: x,
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", { className: f.divider }),
                  (0, r.jsxs)("div", {
                      className: f.memberSince,
                      children: [
                          (0, r.jsx)(l.u, {
                              text: y.name,
                              delay: m,
                              children: (0, r.jsx)(o.Z, {
                                  guild: y,
                                  size: o.Z.Sizes.SMOL,
                                  className: f.guildIcon,
                              }),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: g,
                              children: j,
                          }),
                      ],
                  }),
              ],
          });
}
