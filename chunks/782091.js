n.d(t, { J4: () => _, JH: () => A, dL: () => g, et: () => p, xy: () => E });
var i,
    l = n(17928),
    a = n(734057),
    r = n(71393),
    s = n(576705),
    o = n(977997),
    d = n(170148),
    u = n(360469),
    c = n(652215),
    h = n(985018),
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
    let { channelId: t, ChannelStore: n, GuildStore: i, PermissionStore: l, VoiceStateStore: a } = e,
        r = n.getChannel(t);
    if (null == r) return 3;
    if (!u.H5.includes(r.type)) return 7;
    if (!(0, d.A)()) return 6;
    if (null != r && !r.isPrivate()) {
        let e = r.getGuildId();
        if (null == e) return 4;
        let n = i.getGuild(e);
        if (n?.afkChannelId === r.id) return 5;
        let s = l.can(c.xBc.CONNECT, r);
        if (!l.can(c.xBc.USE_EMBEDDED_ACTIVITIES, r)) return 1;
        let o = a.getCurrentClientVoiceChannelId(r.getGuildId()) === t;
        if (r.isVocal() && !o && !s) return 2;
    }
    return 0;
}
function _(e) {
    return A({ channelId: e, ChannelStore: a.A, GuildStore: r.A, PermissionStore: s.A, VoiceStateStore: o.A });
}
function p(e) {
    return (0, l.bG)(
        [a.A, r.A, s.A, o.A],
        () => A({ channelId: e, ChannelStore: a.A, GuildStore: r.A, PermissionStore: s.A, VoiceStateStore: o.A }),
        [e],
    );
}
function g(e) {
    switch (e) {
        case 0:
            return h.intl.string(h.t.qJvTKQ);
        case 1:
            return h.intl.string(h.t.hHGrWz);
        default:
            return h.intl.string(h.t.j29zCr);
    }
}
