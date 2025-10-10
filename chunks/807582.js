n.d(t, { Z: () => m }), n(953529);
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
    g = n(552461);
let m = (e) => {
    let t,
        n,
        i,
        { guildFeature: m, guild: p, className: f, hideTooltip: h = !1, tooltipPosition: x = "left", onClick: b } = e,
        j = p.features.has(m),
        _ = (0, o.AR)(p.id, "GuildSettingsBoostPerks"),
        v = (0, c._p)(m);
    return !j && m === d.oNc.VANITY_URL && _
        ? null
        : (j
                ? (null != v && (i = u.intl.string(u.t.hUgjyM)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.Ucv, {
                              color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: g.unlockedIcon,
                          }),
                          (0, r.jsx)(a.X6q, {
                              variant: "eyebrow",
                              className: g.description,
                              children: u.intl.string(u.t["0O+87u"]),
                          }),
                      ],
                  })))
                : (null != v && (i = u.intl.string(u.t.L2wYYm)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.Ucv, {
                              color: "currentColor",
                              className: g.icon,
                          }),
                          (0, r.jsx)(a.X6q, {
                              variant: "eyebrow",
                              className: g.description,
                              children: null != v && (0, c.e9)(v),
                          }),
                      ],
                  }))),
            (n =
                h || null == i
                    ? (0, r.jsx)("div", {
                          className: l()(g.availabilityIndicator, f),
                          children: t,
                      })
                    : (0, r.jsx)(s.u, {
                          position: x,
                          text: i,
                          children: (0, r.jsx)("div", {
                              className: l()(g.availabilityIndicator, f),
                              children: t,
                          }),
                      })),
            null == b || j)
          ? n
          : (0, r.jsx)(a.P3F, {
                onClick: b,
                className: g.clickable,
                children: n,
            });
};
