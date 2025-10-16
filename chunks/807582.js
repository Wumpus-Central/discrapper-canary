n.d(t, { Z: () => m }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(28664),
    s = n(481060),
    o = n(158638),
    c = n(267642),
    d = n(981631),
    u = n(388032),
    g = n(552461);
let m = (e) => {
    let t,
        n,
        i,
        { guildFeature: m, guild: p, className: f, hideTooltip: h = !1, tooltipPosition: b = "left", onClick: x } = e,
        j = p.features.has(m),
        v = (0, o.AR)(p.id, "GuildSettingsBoostPerks"),
        _ = (0, c._p)(m);
    return !j && m === d.GuildFeatures.VANITY_URL && v
        ? null
        : (j
                ? (null != _ && (i = u.intl.string(u.t.hUgjyM)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Ucv, {
                              color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: g.unlockedIcon,
                          }),
                          (0, r.jsx)(s.Heading, {
                              variant: "eyebrow",
                              className: g.description,
                              children: u.intl.string(u.t["0O+87u"]),
                          }),
                      ],
                  })))
                : (null != _ && (i = u.intl.string(u.t.L2wYYm)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Ucv, {
                              color: "currentColor",
                              className: g.icon,
                          }),
                          (0, r.jsx)(s.Heading, {
                              variant: "eyebrow",
                              className: g.description,
                              children: null != _ && (0, c.e9)(_),
                          }),
                      ],
                  }))),
            (n =
                h || null == i
                    ? (0, r.jsx)("div", {
                          className: l()(g.availabilityIndicator, f),
                          children: t,
                      })
                    : (0, r.jsx)(a.u, {
                          position: b,
                          text: i,
                          children: (0, r.jsx)("div", {
                              className: l()(g.availabilityIndicator, f),
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
