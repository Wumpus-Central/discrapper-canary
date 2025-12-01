n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(168107),
    o = n(480916),
    s = n(81643),
    l = n(622822),
    c = n(519207),
    u = n(695346),
    d = n(682578),
    f = n(838436),
    p = n(51331),
    _ = n(726985),
    m = n(388032);
function h() {
    var e;
    let t = (0, c.Xg)(),
        n = null == (e = (0, d.J)()) || e,
        h = (0, l.xi)(),
        g = (0, s.Jm)(),
        E = i.useMemo(() => (!h || !!g) && !n, [h, n, g]),
        b = i.useCallback(
            (e) => {
                if (h && e)
                    return void a.Z.showAgeVerificationGetStartedModal({
                        entryPoint: o.cU.AGE_RESTRICTED_DM_COMMANDS_SETTINGS,
                    });
                u.xM.updateSetting(e);
            },
            [h],
        );
    return (0, r.jsx)(f.U, {
        setting: _.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, r.jsx)(p.ZP, {
            value: t,
            onChange: b,
            title: m.intl.string(m.t.XahVjj),
            note: m.intl.string(m.t.R9fXyS),
            disabled: E,
        }),
    });
}
