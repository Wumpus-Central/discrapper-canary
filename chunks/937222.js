n.d(t, { F: () => m });
var r = n(54381),
    i = n(473749),
    l = n(159691),
    a = n(906732),
    s = n(465682),
    o = n(821458),
    c = n(981631),
    d = n(30513),
    u = n(486324),
    g = n(200299),
    f = n(388032);
function m(e) {
    let { guild: t, canManageGuild: n, buttonClassName: m } = e,
        { analyticsLocations: b } = (0, a.ZP)(),
        p = t.features.has(c.GuildFeatures.BANNER),
        h = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, o.f4)(t, b, n, r);
            },
            [b, t],
        ),
        x = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.E6)({
                        guild: t,
                        analyticsLocations: b,
                        analyticsSection: c.jXE.GUILD_BANNER,
                        analyticsObject: c.qAy.BUTTON_CTA,
                        perks: (0, d.XO)(),
                    });
            },
            [b, t],
        ),
        j = i.useCallback(() => {
            (0, o.mw)({
                uploadType: u.pC.GUILD_BANNER,
                maxFileSizeBytes: g.B,
                onComplete: h,
                analyticsLocation: {
                    page: c.ZY5.GUILD_SETTINGS,
                    section: c.jXE.GUILD_BANNER,
                },
                analyticsLocations: b,
            });
        }, [b, h]);
    return p
        ? (0, r.jsx)("div", {
              className: m,
              children: (0, r.jsx)(l.zxk, {
                  disabled: !(p && n),
                  variant: "primary",
                  text: f.intl.string(f.t.yG2pUi),
                  onClick: j,
              }),
          })
        : (0, r.jsx)("div", {
              className: m,
              children: (0, r.jsx)(s.v, { onClick: x }),
          });
}
