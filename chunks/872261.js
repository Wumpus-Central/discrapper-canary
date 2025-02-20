n.d(t, { J: () => c }), n(47120);
var r = n(592125),
    i = n(771845),
    o = n(553245),
    a = n(814074),
    s = n(989263),
    l = n(981631);
function c(e, t) {
    if (e.totalLength >= t) return e;
    let n = new o.b(e.primaryCapacity, e.extendedCapacity),
        l = t - e.totalLength;
    for (let t of i.ZP.getGuildFolders()) for (let i of t.guildIds) for (let t of Object.values(r.Z.getMutableBasicGuildChannelsForGuild(i))) if ((u(t) && (0, s.v)(t) && !(0, a.Hr)(t) && d(i, t, n), n.totalLength >= l)) return f(n, e);
    return f(n, e);
}
function u(e) {
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
    for (let [n, r] of t.allEntries()) e.put(n, r);
    return e;
}
