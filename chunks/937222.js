n.d(t, { F: () => p });
var r = n(951288),
    i = n(647438),
    l = n(159691),
    s = n(906732),
    a = n(821458),
    o = n(585961),
    c = n(981631),
    d = n(30513),
    u = n(486324),
    g = n(200299),
    m = n(388032);
function p(e) {
    let { guild: t, canManageGuild: n, buttonClassName: p } = e,
        { analyticsLocations: f } = (0, s.ZP)(),
        h = t.features.has(c.oNc.BANNER),
        x = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, a.f4)(t, f, n, r);
            },
            [f, t],
        ),
        b = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.E6)({
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
            (0, a.mw)({
                uploadType: u.pC.GUILD_BANNER,
                maxFileSizeBytes: g.B,
                onComplete: x,
                analyticsLocation: {
                    page: c.ZY5.GUILD_SETTINGS,
                    section: c.jXE.GUILD_BANNER,
                },
                analyticsLocations: f,
            });
        }, [f, x]);
    return h
        ? (0, r.jsx)("div", {
              className: p,
              children: (0, r.jsx)(l.zxk, {
                  disabled: !(h && n),
                  variant: "primary",
                  text: m.intl.string(m.t.yG2pUl),
                  onClick: j,
              }),
          })
        : (0, r.jsx)(o.P, {
              className: p,
              onClick: b,
          });
}
