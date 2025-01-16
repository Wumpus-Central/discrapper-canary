n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    o = n(388905),
    a = n(409059),
    c = n(962220),
    d = n(306453),
    u = n(108427),
    h = n(314897),
    g = n(626135),
    m = n(587444),
    f = n(981631),
    p = n(58346),
    x = n(388032),
    _ = n(232186);
function E(e, t, n) {
    e.preventDefault(),
        g.default.track(f.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
    let i = h.default.getFingerprint(),
        r = null != i ? i : h.default.getId();
    c.Z.openMobileApp(n.state === p.Rj.RESOLVED ? t : void 0, r);
}
function I(e) {
    let { code: t } = e,
        n = (0, s.e7)([a.Z], () => a.Z.getGuildTemplate(t));
    return (r.useEffect(() => {
        (0, u.e)('guild_template_mobile');
    }, []),
    null == n || n.state === p.Rj.RESOLVING)
        ? (0, i.jsx)(o.ZP, { children: (0, i.jsx)(l.Spinner, {}) })
        : n.state === p.Rj.RESOLVED
          ? (0, i.jsxs)(o.ZP, {
                children: [
                    (0, i.jsx)(d.Z, {
                        guildTemplate: n,
                        tall: !0
                    }),
                    (0, i.jsx)(o.zx, {
                        onClick: (e) => E(e, t, n),
                        className: _.marginTop20,
                        children: x.intl.string(x.t['a3Gl+f'])
                    })
                ]
            })
          : (0, i.jsx)(m.Z, {
                text: x.intl.string(x.t['e/rZ2t']),
                buttonCta: x.intl.string(x.t.HAvYn5),
                onClick: (e) => E(e, t, n)
            });
}
s.ZP.initialize();
