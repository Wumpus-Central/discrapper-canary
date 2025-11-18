n.d(t, { Z: () => v }), n(953529);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    l = n(481060),
    a = n(388905),
    o = n(409059),
    c = n(962220),
    u = n(306453),
    d = n(108427),
    h = n(314897),
    g = n(626135),
    m = n(587444),
    p = n(981631),
    f = n(260539),
    _ = n(388032),
    x = n(10198);
function E(e, t, n) {
    e.preventDefault(),
        g.default.track(p.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.Z.openMobileApp(n.state === f.Rj.RESOLVED ? t : void 0, i);
}
function v(e) {
    let { code: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.e)("guild_template_mobile");
    }, []),
    null == n || n.state === f.Rj.RESOLVING)
        ? (0, r.jsx)(a.ZP, { children: (0, r.jsx)(l.$jN, {}) })
        : n.state === f.Rj.RESOLVED
          ? (0, r.jsxs)(a.ZP, {
                children: [
                    (0, r.jsx)(u.Z, {
                        guildTemplate: n,
                        tall: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: x.marginTop20,
                        children: (0, r.jsx)(l.Button, {
                            text: _.intl.string(_.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => E(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, r.jsx)(m.Z, {
                text: _.intl.string(_.t["e/rZ2n"]),
                buttonCta: _.intl.string(_.t.HAvYn0),
                onClick: (e) => E(e, t, n),
            });
}
s.ZP.initialize();
