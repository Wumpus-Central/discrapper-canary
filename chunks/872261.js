n.d(t, { J: () => u }), n(47120);
var i = n(592125),
    r = n(771845),
    a = n(553245),
    s = n(814074),
    o = n(989263),
    l = n(981631);
function u(e, t) {
    if (e.totalLength >= t) return e;
    let n = new a.b(e.primaryCapacity, e.extendedCapacity),
        l = t - e.totalLength;
    for (let t of r.ZP.getGuildFolders()) for (let r of t.guildIds) for (let t of Object.values(i.Z.getMutableBasicGuildChannelsForGuild(r))) if ((c(t) && (0, o.v)(t) && !(0, s.Hr)(t) && d(r, t, n), n.totalLength >= l)) return f(n, e);
    return f(n, e);
}
function c(e) {
    return e.type === l.d4z.DM || e.type === l.d4z.GROUP_DM || e.type === l.d4z.GUILD_TEXT;
}
function d(e, t, n) {
    n.hasExtended(t.id) ||
        n.put(t.id, {
            guildId: e,
            channelId: t.id,
            channelType: t.type,
            fallback: !0
        });
}
function f(e, t) {
    for (let [n, i] of t.allEntries()) e.put(n, i);
    return e;
}
