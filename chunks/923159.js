i.d(e, { Q: () => d });
var n = i(311907),
    l = i(817281),
    s = i(419954),
    r = i(964404),
    a = i(780964),
    u = i(698723),
    o = i(985018);
let d = (0, s.zD)(a.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
    useTitle: () => o.intl.string(o.t.jrWHD3),
    useSubtitle: () => o.intl.string(o.t.YCCMkJ),
    useValue: function () {
        return (0, n.bG)([r.Ay], () => !r.Ay.disableVoiceChannelChangeAlert);
    },
    setValue: function (t) {
        (0, u.A)("switch_channel_warning_enabled", t, !r.Ay.disableVoiceChannelChangeAlert),
            l.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !t });
    },
});
