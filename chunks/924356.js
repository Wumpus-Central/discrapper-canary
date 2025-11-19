n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(168107),
    o = n(480916),
    s = n(622822),
    l = n(695346),
    c = n(682578),
    u = n(838436),
    d = n(51331),
    f = n(726985),
    _ = n(388032);
function p() {
    var e;
    let t = l.xM.useSetting(),
        n = null == (e = (0, c.J)()) || e,
        p = (0, s.xi)(),
        h = i.useCallback(
            (e) => {
                if (p && e)
                    return void a.Z.showAgeVerificationGetStartedModal({
                        entryPoint: o.cU.AGE_RESTRICTED_DM_COMMANDS_SETTINGS,
                    });
                l.xM.updateSetting(e);
            },
            [p],
        );
    return (0, r.jsx)(u.U, {
        setting: f.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, r.jsx)(d.ZP, {
            value: !!n && t,
            onChange: h,
            title: _.intl.string(_.t.XahVjj),
            note: _.intl.string(_.t.R9fXyS),
            disabled: !n,
        }),
    });
}
