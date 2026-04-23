n.d(t, { C: () => c });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(347481),
    r = n(430452),
    o = n(780964),
    d = n(652215),
    u = n(985018);
let c = (0, l.zD)(o.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
    useTitle: () => u.intl.string(u.t.cUMdH0),
    useSubtitle: () => u.intl.string(u.t["6EjbvA"]),
    useValue: function () {
        return (0, i.bG)([r.Ay], () => r.Ay.getAutomaticGainControl());
    },
    setValue: function (e) {
        s.A.setAutomaticGainControl(e, { page: d.liQ.USER_SETTINGS, section: d.JJy.SETTINGS_VOICE_AND_VIDEO });
    },
    useDisabled: function () {
        return (0, i.bG)([r.Ay, a.A], () => {
            let e = r.Ay.getInputDeviceId();
            return a.A.hasAutomaticGainControl(e);
        });
    },
    usePredicate: function () {
        return (0, i.bG)([r.Ay], () => r.Ay.isAutomaticGainControlSupported() && r.Ay.isInputProfileCustom());
    },
});
