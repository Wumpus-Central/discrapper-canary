n.d(t, { Z: () => b }), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(388905),
    s = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    g = n(314897),
    h = n(626135),
    p = n(587444),
    m = n(981631),
    f = n(260539),
    _ = n(388032),
    x = n(20493);
function E(e, t, n) {
    e.preventDefault(),
        h.default.track(m.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let r = g.default.getFingerprint(),
        i = null != r ? r : g.default.getId();
    c.Z.openMobileApp(n.state === f.Rj.RESOLVED ? t : void 0, i);
}
function b(e) {
    let { code: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.e)('guild_template_mobile');
    }, []),
    null == n || n.state === f.Rj.RESOLVING)
        ? (0, r.jsx)(o.ZP, { children: (0, r.jsx)(a.$jN, {}) })
        : n.state === f.Rj.RESOLVED
          ? (0, r.jsxs)(o.ZP, {
                children: [
                    (0, r.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, r.jsx)(o.zx, {
                        onClick: (e) => E(e, t, n),
                        className: x.marginTop20,
                        children: _.intl.string(_.t['a3Gl+f'])
                    })
                ]
            })
          : (0, r.jsx)(p.Z, {
                text: _.intl.string(_.t['e/rZ2t']),
                buttonCta: _.intl.string(_.t.HAvYn5),
                onClick: (e) => E(e, t, n)
            });
}
l.ZP.initialize();
