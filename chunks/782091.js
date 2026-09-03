n.d(t, { J4: () => h, JH: () => A, dL: () => f, et: () => I, xy: () => E });
var i,
    r = n(17928),
    a = n(734057),
    s = n(71393),
    l = n(576705),
    o = n(977997),
    d = n(170148),
    c = n(360469),
    u = n(652215),
    _ = n(375708),
    E =
        (((i = {})[(i.CAN_LAUNCH = 0)] = "CAN_LAUNCH"),
        (i[(i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
        (i[(i.NO_CHANNEL_CONNECT_PERMISSION = 2)] = "NO_CHANNEL_CONNECT_PERMISSION"),
        (i[(i.NO_CHANNEL = 3)] = "NO_CHANNEL"),
        (i[(i.NO_GUILD = 4)] = "NO_GUILD"),
        (i[(i.IS_AFK_CHANNEL = 5)] = "IS_AFK_CHANNEL"),
        (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
        (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = 7)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL"),
        i);
function A(e) {
    let { channelId: t, ChannelStore: n, GuildStore: i, PermissionStore: r, VoiceStateStore: a } = e,
        s = n.getChannel(t);
    if (null == s) return 3;
    if (!c.H5.includes(s.type)) return 7;
    if (!(0, d.A)()) return 6;
    if (null != s && !s.isPrivate()) {
        let e = s.getGuildId();
        if (null == e) return 4;
        let n = i.getGuild(e);
        if (n?.afkChannelId === s.id) return 5;
        let l = r.can(u.xBc.CONNECT, s);
        if (!r.can(u.xBc.USE_EMBEDDED_ACTIVITIES, s)) return 1;
        let o = a.getCurrentClientVoiceChannelId(s.getGuildId()) === t;
        if (s.isVocal() && !o && !l) return 2;
    }
    return 0;
}
function h(e) {
    return A({ channelId: e, ChannelStore: a.A, GuildStore: s.A, PermissionStore: l.A, VoiceStateStore: o.A });
}
function I(e) {
    return (0, r.bG)(
        [a.A, s.A, l.A, o.A],
        () => A({ channelId: e, ChannelStore: a.A, GuildStore: s.A, PermissionStore: l.A, VoiceStateStore: o.A }),
        [e],
    );
}
function f(e) {
    switch (e) {
        case 0:
            return _.intl.string(_.t.qJvTKQ);
        case 1:
            return _.intl.string(_.t.hHGrWz);
        default:
            return _.intl.string(_.t.j29zCr);
    }
}
