n.d(t, { Z: () => x }), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(388905),
    s = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    h = n(314897),
    p = n(626135),
    _ = n(587444),
    g = n(981631),
    f = n(58346),
    m = n(388032),
    b = n(455812);
function N(e, t, n) {
    e.preventDefault(),
        p.default.track(g.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.Z.openMobileApp(n.state === f.Rj.RESOLVED ? t : void 0, i);
}
function x(e) {
    let { code: t } = e,
        n = (0, o.e7)([s.Z], () => s.Z.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.e)('guild_template_mobile');
    }, []),
    null == n || n.state === f.Rj.RESOLVING)
        ? (0, r.jsx)(l.ZP, { children: (0, r.jsx)(a.$jN, {}) })
        : n.state === f.Rj.RESOLVED
          ? (0, r.jsxs)(l.ZP, {
                children: [
                    (0, r.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, r.jsx)(l.zx, {
                        onClick: (e) => N(e, t, n),
                        className: b.marginTop20,
                        children: m.NW.string(m.t['a3Gl+f'])
                    })
                ]
            })
          : (0, r.jsx)(_.Z, {
                text: m.NW.string(m.t['e/rZ2t']),
                buttonCta: m.NW.string(m.t.HAvYn5),
                onClick: (e) => N(e, t, n)
            });
}
o.ZP.initialize();
