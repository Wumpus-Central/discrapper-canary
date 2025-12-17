n.d(t, { Z: () => v }), n(953529);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    a = n(481060),
    l = n(388905),
    o = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    h = n(314897),
    f = n(626135),
    g = n(587444),
    m = n(981631),
    p = n(260539),
    x = n(388032),
    _ = n(478411);
function E(e, t, n) {
    e.preventDefault(),
        f.default.track(m.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.Z.openMobileApp(n.state === p.Rj.RESOLVED ? t : void 0, i);
}
function v(e) {
    let { code: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.e)("guild_template_mobile");
    }, []),
    null == n || n.state === p.Rj.RESOLVING)
        ? (0, r.jsx)(l.ZP, { children: (0, r.jsx)(a.$jN, {}) })
        : n.state === p.Rj.RESOLVED
          ? (0, r.jsxs)(l.ZP, {
                children: [
                    (0, r.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: _.marginTop20,
                        children: (0, r.jsx)(a.Button, {
                            text: x.intl.string(x.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => E(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, r.jsx)(g.Z, {
                text: x.intl.string(x.t["e/rZ2n"]),
                buttonCta: x.intl.string(x.t.HAvYn0),
                onClick: (e) => E(e, t, n),
            });
}
s.ZP.initialize();
