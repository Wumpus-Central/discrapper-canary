n.d(t, { F: () => h });
var r = n(951288),
    i = n(647438),
    l = n(159691),
    a = n(906732),
    s = n(892803),
    o = n(465682),
    c = n(821458),
    d = n(585961),
    u = n(981631),
    g = n(30513),
    m = n(486324),
    p = n(200299),
    f = n(388032);
function h(e) {
    let { guild: t, canManageGuild: n, buttonClassName: h } = e,
        { analyticsLocations: b } = (0, a.ZP)(),
        x = t.features.has(u.GuildFeatures.BANNER),
        { enabled: j } = s.Z.useConfig({ location: "GuildSettingsBannerUploadButton" }),
        v = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, c.f4)(t, b, n, r);
            },
            [b, t],
        ),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, c.E6)({
                        guild: t,
                        analyticsLocations: b,
                        analyticsSection: u.jXE.GUILD_BANNER,
                        analyticsObject: u.qAy.BUTTON_CTA,
                        perks: (0, g.XO)(),
                    });
            },
            [b, t],
        ),
        C = i.useCallback(() => {
            (0, c.mw)({
                uploadType: m.pC.GUILD_BANNER,
                maxFileSizeBytes: p.B,
                onComplete: v,
                analyticsLocation: {
                    page: u.ZY5.GUILD_SETTINGS,
                    section: u.jXE.GUILD_BANNER,
                },
                analyticsLocations: b,
            });
        }, [b, v]);
    return x
        ? (0, r.jsx)("div", {
              className: h,
              children: (0, r.jsx)(l.zxk, {
                  disabled: !(x && n),
                  variant: "primary",
                  text: f.intl.string(f.t.yG2pUi),
                  onClick: C,
              }),
          })
        : j
          ? (0, r.jsx)("div", {
                className: h,
                children: (0, r.jsx)(o.v, { onClick: _ }),
            })
          : (0, r.jsx)(d.P, {
                className: h,
                onClick: _,
            });
}
