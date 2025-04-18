n.d(t, { Z: () => b }), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    o = n(388905),
    a = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    h = n(314897),
    p = n(626135),
    g = n(587444),
    f = n(981631),
    m = n(260539),
    _ = n(388032),
    N = n(971005);
function x(e, t, n) {
    e.preventDefault(),
        p.default.track(f.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.Z.openMobileApp(n.state === m.Rj.RESOLVED ? t : void 0, i);
}
function b(e) {
    let { code: t } = e,
        n = (0, s.e7)([a.Z], () => a.Z.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.e)('guild_template_mobile');
    }, []),
    null == n || n.state === m.Rj.RESOLVING)
        ? (0, r.jsx)(o.ZP, { children: (0, r.jsx)(l.$jN, {}) })
        : n.state === m.Rj.RESOLVED
          ? (0, r.jsxs)(o.ZP, {
                children: [
                    (0, r.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, r.jsx)(o.zx, {
                        onClick: (e) => x(e, t, n),
                        className: N.marginTop20,
                        children: _.NW.string(_.t['a3Gl+f'])
                    })
                ]
            })
          : (0, r.jsx)(g.Z, {
                text: _.NW.string(_.t['e/rZ2t']),
                buttonCta: _.NW.string(_.t.HAvYn5),
                onClick: (e) => x(e, t, n)
            });
}
s.ZP.initialize();
