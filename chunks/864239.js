n.d(t, { Z: () => m });
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
    _ = n(51331),
    p = n(726985),
    h = n(388032);
function m() {
    var e;
    let t = null == (e = (0, d.J)()) || e,
        n = (0, c.q3)(),
        m = (0, l.xi)(),
        g = (0, s.Jm)(),
        E = i.useMemo(() => (!m || !!g) && !t, [m, t, g]),
        b = i.useCallback(
            (e) => {
                if (m && e)
                    return void a.Z.showAgeVerificationGetStartedModal({
                        entryPoint: o.cU.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS,
                    });
                u.DC.updateSetting(e);
            },
            [m],
        );
    return (0, r.jsx)(f.U, {
        setting: p.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, r.jsx)(_.ZP, {
            title: h.intl.string(h.t["L+yTsa"]),
            value: n,
            onChange: b,
            disabled: E,
            note: h.intl.string(h.t.hiM8pU),
        }),
    });
}
