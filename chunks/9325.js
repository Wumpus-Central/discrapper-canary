n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(388905),
    s = n(409059),
    c = n(962220),
    d = n(306453),
    u = n(108427),
    h = n(314897),
    _ = n(626135),
    g = n(587444),
    p = n(981631),
    m = n(58346),
    f = n(388032),
    E = n(232186);
function I(e, t, n) {
    e.preventDefault(),
        _.default.track(p.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let i = h.default.getFingerprint(),
        r = null != i ? i : h.default.getId();
    c.Z.openMobileApp(n.state === m.Rj.RESOLVED ? t : void 0, r);
}
function x(e) {
    let { code: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getGuildTemplate(t));
    return (r.useEffect(() => {
        (0, u.e)('guild_template_mobile');
    }, []),
    null == n || n.state === m.Rj.RESOLVING)
        ? (0, i.jsx)(o.ZP, { children: (0, i.jsx)(a.$jN, {}) })
        : n.state === m.Rj.RESOLVED
          ? (0, i.jsxs)(o.ZP, {
                children: [
                    (0, i.jsx)(d.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, i.jsx)(o.zx, {
                        onClick: (e) => I(e, t, n),
                        className: E.marginTop20,
                        children: f.intl.string(f.t['a3Gl+f'])
                    })
                ]
            })
          : (0, i.jsx)(g.Z, {
                text: f.intl.string(f.t['e/rZ2t']),
                buttonCta: f.intl.string(f.t.HAvYn5),
                onClick: (e) => I(e, t, n)
            });
}
l.ZP.initialize();
