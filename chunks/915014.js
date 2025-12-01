n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(36563),
    a = n(139117),
    o = n(481060),
    s = n(565138),
    l = n(806729),
    c = n(708108),
    u = n(146078),
    d = n(228168),
    f = n(268685),
    p = n(99520);
let _ = 3;
function m(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: m, mutualGuilds: h } = (0, l.Z)(t),
        g = null != m && m.length > 0,
        E = null != h && h.length > 0,
        b = g && E ? "text-xs/normal" : "text-sm/normal";
    if (!g && !E) return null;
    let y = () =>
            g
                ? (0, r.jsxs)(o.P3F, {
                      className: p.section,
                      onClick: () => (null == n ? void 0 : n(d.oh.MUTUAL_FRIENDS)),
                      children: [
                          (0, r.jsx)(i.Z, {
                              maxUsers: _,
                              users: m.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: f.EF.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0,
                              "aria-hidden": !0,
                          }),
                          (0, r.jsx)(o.Text, {
                              className: p.text,
                              variant: b,
                              color: "interactive-normal",
                              children: (0, c.Z)(m.length),
                          }),
                      ],
                  })
                : null,
        O = () =>
            g && E
                ? (0, r.jsx)("div", {
                      "aria-hidden": "true",
                      className: p.spacer,
                  })
                : null,
        v = () =>
            E
                ? (0, r.jsxs)(o.P3F, {
                      className: p.section,
                      onClick: () => (null == n ? void 0 : n(d.oh.MUTUAL_GUILDS)),
                      children: [
                          !g &&
                              (0, r.jsx)(a.Z, {
                                  maxGuilds: _,
                                  guilds: h.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: s.Z.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0,
                              }),
                          (0, r.jsx)(o.Text, {
                              className: p.text,
                              variant: b,
                              color: "interactive-normal",
                              children: (0, u.Z)(h.length),
                          }),
                      ],
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: p.mutuals,
        children: [y(), O(), v()],
    });
}
