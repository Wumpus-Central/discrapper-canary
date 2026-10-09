n.d(t, { J4: () => f, JH: () => h, dL: () => p, et: () => I, xy: () => A });
var i,
    r = n(17928),
    a = n(323073),
    s = n(734057),
    l = n(71393),
    o = n(576705),
    d = n(977997),
    c = n(170148),
    u = n(818023),
    _ = n(652215),
    E = n(660183),
    A =
        (((i = {})[(i.CAN_LAUNCH = 0)] = "CAN_LAUNCH"),
        (i[(i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
        (i[(i.NO_CHANNEL_CONNECT_PERMISSION = 2)] = "NO_CHANNEL_CONNECT_PERMISSION"),
        (i[(i.NO_CHANNEL = 3)] = "NO_CHANNEL"),
        (i[(i.NO_GUILD = 4)] = "NO_GUILD"),
        (i[(i.IS_AFK_CHANNEL = 5)] = "IS_AFK_CHANNEL"),
        (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
        (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = 7)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL"),
        (i[(i.CHANNEL_CONTENT_GATED = 8)] = "CHANNEL_CONTENT_GATED"),
        i);
function h(e) {
    let { channelId: t, isContentGated: n, ChannelStore: i, GuildStore: r, PermissionStore: a, VoiceStateStore: s } = e,
        l = i.getChannel(t);
    if (null == l) return 3;
    if (!u.H5.includes(l.type)) return 7;
    if (!(0, c.A)()) return 6;
    if (null != l && !l.isPrivate()) {
        let e = l.getGuildId();
        if (null == e) return 4;
        let i = r.getGuild(e);
        if (i?.afkChannelId === l.id) return 5;
        let o = a.can(_.xBc.CONNECT, l);
        if (!a.can(_.xBc.USE_EMBEDDED_ACTIVITIES, l)) return 1;
        let d = s.getCurrentClientVoiceChannelId(l.getGuildId()) === t;
        if (n) return 8;
        if (l.isVocal() && !d && !o) return 2;
    }
    return 0;
}
function f(e) {
    let t = s.A.getChannel(e);
    return h({
        channelId: e,
        isContentGated: (0, a.qR)(t),
        ChannelStore: s.A,
        GuildStore: l.A,
        PermissionStore: o.A,
        VoiceStateStore: d.A,
    });
}
function I(e) {
    let t = (0, r.bG)([s.A], () => s.A.getChannel(e), [e]),
        n = (0, a.vL)(t);
    return (0, r.bG)(
        [s.A, l.A, o.A, d.A],
        () =>
            h({
                channelId: e,
                isContentGated: n,
                ChannelStore: s.A,
                GuildStore: l.A,
                PermissionStore: o.A,
                VoiceStateStore: d.A,
            }),
        [e, n],
    );
}
function p(e) {
    switch (e) {
        case 0:
            return E.intl.string(E.t.qJvTKQ);
        case 1:
            return E.intl.string(E.t.hHGrWz);
        case 8:
            return E.intl.string(E.t.pKLV22);
        default:
            return E.intl.string(E.t.j29zCr);
    }
}
