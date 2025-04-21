n.d(t, { Z: () => E }), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    o = n(388905),
    a = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    h = n(314897),
    g = n(626135),
    p = n(587444),
    m = n(981631),
    f = n(260539),
    _ = n(388032),
    x = n(20493);
function b(e, t, n) {
    e.preventDefault(),
        g.default.track(m.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.Z.openMobileApp(n.state === f.Rj.RESOLVED ? t : void 0, i);
}
function E(e) {
    let { code: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.e)('guild_template_mobile');
    }, []),
    null == n || n.state === f.Rj.RESOLVING)
        ? (0, r.jsx)(o.ZP, { children: (0, r.jsx)(s.$jN, {}) })
        : n.state === f.Rj.RESOLVED
          ? (0, r.jsxs)(o.ZP, {
                children: [
                    (0, r.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, r.jsx)(o.zx, {
                        onClick: (e) => b(e, t, n),
                        className: x.marginTop20,
                        children: _.intl.string(_.t['a3Gl+f'])
                    })
                ]
            })
          : (0, r.jsx)(p.Z, {
                text: _.intl.string(_.t['e/rZ2t']),
                buttonCta: _.intl.string(_.t.HAvYn5),
                onClick: (e) => b(e, t, n)
            });
}
l.ZP.initialize();
