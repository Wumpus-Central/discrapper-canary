"use strict";
n.d(t, { Cy: () => _, IS: () => f, UW: () => c, eL: () => d });
var r = n(961350),
    i = n(734057),
    s = n(71393),
    a = n(312006),
    o = n(516607),
    l = n(652215);
let u = "stage:";
function d(e, t) {
    let n = 0,
        i = r.default.getId();
    a.Ay.isSpeaker(i, e.id) && (n |= 1);
    let o = s.A.getGuild(e.getGuildId());
    null != o &&
        (o.features.has(l.GuildFeatures.PARTNERED) && (n |= 2), o.features.has(l.GuildFeatures.VERIFIED) && (n |= 4));
    let d = n.toString(16);
    return `${u}${e.guild_id}:${e.id}:${d}:${t.id}`;
}
function c(e) {
    if (null == e || null == e.party) return;
    let { id: t, size: n } = e.party;
    try {
        if (null == t || !t.startsWith(u)) return;
        let [, e, r, i, s] = t.split(":"),
            a = parseInt(i, 16);
        return {
            guildId: e,
            channelId: r,
            size: n,
            userIsSpeaker: (1 & a) != 0,
            guildIsPartnered: (2 & a) != 0,
            guildIsVerified: (4 & a) != 0,
            stageInstanceId: s,
        };
    } catch (e) {
        return null;
    }
}
function _(e) {
    return e?.application_id === o.SS;
}
function f(e) {
    let t = c(e);
    if (null == t) return !1;
    let { channelId: n } = t;
    return null != i.A.getChannel(n);
}
