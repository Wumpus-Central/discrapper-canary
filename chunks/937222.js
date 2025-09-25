n.d(t, { F: () => p });
var r = n(951288),
    i = n(647438),
    l = n(755721),
    s = n(906732),
    a = n(70086),
    o = n(821458),
    c = n(981631),
    d = n(30513),
    u = n(486324),
    m = n(200299),
    g = n(388032);
function p(e) {
    let { guild: t, canManageGuild: n, buttonClassName: p } = e,
        { analyticsLocations: f } = (0, s.ZP)(),
        h = t.features.has(c.oNc.BANNER),
        b = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, o.f4)(t, f, n, r);
            },
            [f, t],
        ),
        x = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.E6)({
                        guild: t,
                        analyticsLocations: f,
                        analyticsSection: c.jXE.GUILD_BANNER,
                        analyticsObject: c.qAy.BUTTON_CTA,
                        perks: (0, d.XO)(),
                    });
            },
            [f, t],
        );
    return h
        ? (0, r.jsx)(l.zx, {
              disabled: !(h && n),
              color: l.zx.Colors.BRAND,
              className: p,
              onClick: () =>
                  (0, o.mw)({
                      uploadType: u.pC.GUILD_BANNER,
                      maxFileSizeBytes: m.B,
                      onComplete: b,
                      analyticsLocation: {
                          page: c.ZY5.GUILD_SETTINGS,
                          section: c.jXE.GUILD_BANNER,
                      },
                      analyticsLocations: f,
                  }),
              children: g.intl.string(g.t.yG2pUl),
          })
        : (0, r.jsx)(a.P, {
              className: p,
              onClick: x,
          });
}
