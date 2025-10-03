n.d(t, { Z: () => g }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    s = n(28664),
    a = n(481060),
    o = n(158638),
    c = n(267642),
    d = n(981631),
    u = n(388032),
    m = n(552461);
let g = (e) => {
    let t,
        n,
        i,
        { guildFeature: g, guild: p, className: f, hideTooltip: h = !1, tooltipPosition: x = "left", onClick: b } = e,
        j = p.features.has(g),
        _ = (0, o.AR)(p.id, "GuildSettingsBoostPerks"),
        v = (0, c._p)(g);
    return !j && g === d.oNc.VANITY_URL && _
        ? null
        : (j
                ? (null != v && (i = u.intl.string(u.t.hUgjyM)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.$Eu, {
                              color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: m.unlockedIcon,
                          }),
                          (0, r.jsx)(a.X6q, {
                              variant: "eyebrow",
                              className: m.description,
                              children: u.intl.string(u.t["0O+87u"]),
                          }),
                      ],
                  })))
                : (null != v && (i = u.intl.string(u.t.L2wYYm)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.$Eu, {
                              color: "currentColor",
                              className: m.icon,
                          }),
                          (0, r.jsx)(a.X6q, {
                              variant: "eyebrow",
                              className: m.description,
                              children: null != v && (0, c.e9)(v),
                          }),
                      ],
                  }))),
            (n =
                h || null == i
                    ? (0, r.jsx)("div", {
                          className: l()(m.availabilityIndicator, f),
                          children: t,
                      })
                    : (0, r.jsx)(s.u, {
                          position: x,
                          text: i,
                          children: (0, r.jsx)("div", {
                              className: l()(m.availabilityIndicator, f),
                              children: t,
                          }),
                      })),
            null == b || j)
          ? n
          : (0, r.jsx)(a.P3F, {
                onClick: b,
                className: m.clickable,
                children: n,
            });
};
