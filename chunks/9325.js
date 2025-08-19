n.d(t, { Z: () => v }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(388905),
    s = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    h = n(314897),
    p = n(626135),
    m = n(587444),
    f = n(981631),
    g = n(260539),
    _ = n(388032),
    x = n(197571);
function b(e, t, n) {
    e.preventDefault(),
        p.default.track(f.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.Z.openMobileApp(n.state === g.Rj.RESOLVED ? t : void 0, i);
}
function v(e) {
    let { code: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.e)("guild_template_mobile");
    }, []),
    null == n || n.state === g.Rj.RESOLVING)
        ? (0, r.jsx)(o.ZP, { children: (0, r.jsx)(a.$jN, {}) })
        : n.state === g.Rj.RESOLVED
          ? (0, r.jsxs)(o.ZP, {
                children: [
                    (0, r.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0,
                    }),
                    (0, r.jsx)(o.zx, {
                        onClick: (e) => b(e, t, n),
                        className: x.marginTop20,
                        children: _.intl.string(_.t["a3Gl+f"]),
                    }),
                ],
            })
          : (0, r.jsx)(m.Z, {
                text: _.intl.string(_.t["e/rZ2t"]),
                buttonCta: _.intl.string(_.t.HAvYn5),
                onClick: (e) => b(e, t, n),
            });
}
l.ZP.initialize();
