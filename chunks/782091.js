"use strict";
n.d(t, { J4: () => p, JH: () => h, dL: () => m, et: () => E, xy: () => f });
var i,
    r = n(17928),
    s = n(734057),
    a = n(71393),
    o = n(576705),
    l = n(977997),
    u = n(170148),
    c = n(360469),
    d = n(652215),
    _ = n(375708),
    f =
        (((i = {})[(i.CAN_LAUNCH = 0)] = "CAN_LAUNCH"),
        (i[(i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
        (i[(i.NO_CHANNEL_CONNECT_PERMISSION = 2)] = "NO_CHANNEL_CONNECT_PERMISSION"),
        (i[(i.NO_CHANNEL = 3)] = "NO_CHANNEL"),
        (i[(i.NO_GUILD = 4)] = "NO_GUILD"),
        (i[(i.IS_AFK_CHANNEL = 5)] = "IS_AFK_CHANNEL"),
        (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
        (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = 7)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL"),
        i);
function h(e) {
    let { channelId: t, ChannelStore: n, GuildStore: i, PermissionStore: r, VoiceStateStore: s } = e,
        a = n.getChannel(t);
    if (null == a) return 3;
    if (!c.H5.includes(a.type)) return 7;
    if (!(0, u.A)()) return 6;
    if (null != a && !a.isPrivate()) {
        let e = a.getGuildId();
        if (null == e) return 4;
        let n = i.getGuild(e);
        if (n?.afkChannelId === a.id) return 5;
        let o = r.can(d.xBc.CONNECT, a);
        if (!r.can(d.xBc.USE_EMBEDDED_ACTIVITIES, a)) return 1;
        let l = s.getCurrentClientVoiceChannelId(a.getGuildId()) === t;
        if (a.isVocal() && !l && !o) return 2;
    }
    return 0;
}
function p(e) {
    return h({ channelId: e, ChannelStore: s.A, GuildStore: a.A, PermissionStore: o.A, VoiceStateStore: l.A });
}
function E(e) {
    return (0, r.bG)(
        [s.A, a.A, o.A, l.A],
        () => h({ channelId: e, ChannelStore: s.A, GuildStore: a.A, PermissionStore: o.A, VoiceStateStore: l.A }),
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
