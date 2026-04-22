"use strict";
n.d(t, { J4: () => h, JH: () => E, dL: () => m, et: () => p, xy: () => f });
var r,
    i = n(311907),
    s = n(734057),
    a = n(71393),
    o = n(576705),
    l = n(977997),
    u = n(170148),
    d = n(360469),
    c = n(652215),
    _ = n(985018),
    f =
        (((r = {})[(r.CAN_LAUNCH = 0)] = "CAN_LAUNCH"),
        (r[(r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
        (r[(r.NO_CHANNEL_CONNECT_PERMISSION = 2)] = "NO_CHANNEL_CONNECT_PERMISSION"),
        (r[(r.NO_CHANNEL = 3)] = "NO_CHANNEL"),
        (r[(r.NO_GUILD = 4)] = "NO_GUILD"),
        (r[(r.IS_AFK_CHANNEL = 5)] = "IS_AFK_CHANNEL"),
        (r[(r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
        (r[(r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = 7)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL"),
        r);
function E(e) {
    let { channelId: t, ChannelStore: n, GuildStore: r, PermissionStore: i, VoiceStateStore: s } = e,
        a = n.getChannel(t);
    if (null == a) return 3;
    if (!d.H5.includes(a.type)) return 7;
    if (!(0, u.A)()) return 6;
    if (null != a && !a.isPrivate()) {
        let e = a.getGuildId();
        if (null == e) return 4;
        let n = r.getGuild(e);
        if (n?.afkChannelId === a.id) return 5;
        let o = i.can(c.xBc.CONNECT, a);
        if (!i.can(c.xBc.USE_EMBEDDED_ACTIVITIES, a)) return 1;
        let l = s.getCurrentClientVoiceChannelId(a.getGuildId()) === t;
        if (a.isVocal() && !l && !o) return 2;
    }
    return 0;
}
function h(e) {
    return E({ channelId: e, ChannelStore: s.A, GuildStore: a.A, PermissionStore: o.A, VoiceStateStore: l.A });
}
function p(e) {
    return (0, i.bG)(
        [s.A, a.A, o.A, l.A],
        () => E({ channelId: e, ChannelStore: s.A, GuildStore: a.A, PermissionStore: o.A, VoiceStateStore: l.A }),
        [e],
    );
}
function m(e) {
    switch (e) {
        case 0:
            return _.intl.string(_.t.qJvTKQ);
        case 1:
            return _.intl.string(_.t.hHGrWz);
        default:
            return _.intl.string(_.t.j29zCr);
    }
}
