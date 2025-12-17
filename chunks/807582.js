n.d(t, { Z: () => f }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(28664),
    s = n(481060),
    o = n(158638),
    c = n(267642),
    d = n(981631),
    u = n(388032),
    g = n(754681);
let f = (e) => {
    let t,
        n,
        i,
        { guildFeature: f, guild: m, className: b, hideTooltip: p = !1, tooltipPosition: h = "left", onClick: x } = e,
        j = m.features.has(f),
        v = (0, o.AR)(m.id, "GuildSettingsBoostPerks"),
        O = (0, c._p)(f);
    return !j && f === d.GuildFeatures.VANITY_URL && v
        ? null
        : (j
                ? (null != O && (i = u.intl.string(u.t.hUgjyP)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Ucv, {
                              color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: g.unlockedIcon,
                          }),
                          (0, r.jsx)(s.Heading, {
                              variant: "eyebrow",
                              className: g.description,
                              children: u.intl.string(u.t["0O+87i"]),
                          }),
                      ],
                  })))
                : (null != O && (i = u.intl.string(u.t.L2wYYj)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Ucv, {
                              color: "currentColor",
                              className: g.icon,
                          }),
                          (0, r.jsx)(s.Heading, {
                              variant: "eyebrow",
                              className: g.description,
                              children: null != O && (0, c.e9)(O),
                          }),
                      ],
                  }))),
            (n =
                p || null == i
                    ? (0, r.jsx)("div", {
                          className: l()(g.availabilityIndicator, b),
                          children: t,
                      })
                    : (0, r.jsx)(a.u, {
                          position: h,
                          text: i,
                          children: (0, r.jsx)("div", {
                              className: l()(g.availabilityIndicator, b),
                              children: t,
                          }),
                      })),
            null == x || j)
          ? n
          : (0, r.jsx)(s.P3F, {
                onClick: x,
                className: g.clickable,
                children: n,
            });
};
