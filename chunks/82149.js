"use strict";
n.d(t, { Cy: () => h, IS: () => m, UW: () => p, eL: () => f });
var r = n(961350),
    i = n(734057),
    a = n(71393),
    s = n(312006),
    o = n(516607),
    l = n(652215);
let u = "stage:",
    c = 1,
    d = 2,
    _ = 4;
function f(e, t) {
    let n = 0,
        i = r.default.getId();
    s.Ay.isSpeaker(i, e.id) && (n |= c);
    let o = a.A.getGuild(e.getGuildId());
    null != o &&
        (o.features.has(l.GuildFeatures.PARTNERED) && (n |= d), o.features.has(l.GuildFeatures.VERIFIED) && (n |= _));
    let f = n.toString(16);
    return `${u}${e.guild_id}:${e.id}:${f}:${t.id}`;
}
function p(e) {
    if (null == e || null == e.party) return;
    let { id: t, size: n } = e.party;
    try {
        if (null == t || !t.startsWith(u)) return;
        let [, e, r, i, a] = t.split(":"),
            s = parseInt(i, 16);
        return {
            guildId: e,
            channelId: r,
            size: n,
            userIsSpeaker: (s & c) != 0,
            guildIsPartnered: (s & d) != 0,
            guildIsVerified: (s & _) != 0,
            stageInstanceId: a,
        };
    } catch (e) {
        return null;
    }
}
function h(e) {
    return e?.application_id === o.SS;
}
function m(e) {
    let t = p(e);
    if (null == t) return !1;
    let { channelId: n } = t;
    return null != i.A.getChannel(n);
}
