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
    let t = null == (e = (0, d.J)()) || e,
        n = (0, c.q3)(),
        h = (0, l.xi)(),
        g = (0, s.Jm)(),
        E = i.useMemo(() => (!h || !!g) && !t, [h, t, g]),
        b = i.useCallback(
            (e) => {
                if (h && e)
                    return void a.Z.showAgeVerificationGetStartedModal({
                        entryPoint: o.cU.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS,
                    });
                u.DC.updateSetting(e);
            },
            [h],
        );
    return (0, r.jsx)(f.U, {
        setting: _.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, r.jsx)(p.ZP, {
            title: m.intl.string(m.t["L+yTsa"]),
            value: n,
            onChange: b,
            disabled: E,
            note: m.intl.string(m.t.hiM8pU),
        }),
    });
}
