n.d(t, { F: () => p });
var r = n(951288),
    i = n(647438),
    l = n(159691),
    a = n(906732),
    s = n(465682),
    o = n(821458),
    c = n(981631),
    d = n(30513),
    u = n(486324),
    g = n(200299),
    m = n(388032);
function p(e) {
    let { guild: t, canManageGuild: n, buttonClassName: p } = e,
        { analyticsLocations: f } = (0, a.ZP)(),
        h = t.features.has(c.GuildFeatures.BANNER),
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
        ),
        j = i.useCallback(() => {
            (0, o.mw)({
                uploadType: u.pC.GUILD_BANNER,
                maxFileSizeBytes: g.B,
                onComplete: b,
                analyticsLocation: {
                    page: c.ZY5.GUILD_SETTINGS,
                    section: c.jXE.GUILD_BANNER,
                },
                analyticsLocations: f,
            });
        }, [f, b]);
    return h
        ? (0, r.jsx)("div", {
              className: p,
              children: (0, r.jsx)(l.zxk, {
                  disabled: !(h && n),
                  variant: "primary",
                  text: m.intl.string(m.t.yG2pUi),
                  onClick: j,
              }),
          })
        : (0, r.jsx)("div", {
              className: p,
              children: (0, r.jsx)(s.v, { onClick: x }),
          });
}
