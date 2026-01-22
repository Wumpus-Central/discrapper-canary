n.d(t, { I: () => c }), n(896048);
var r = n(734057),
    i = n(711014),
    a = n(447508),
    s = n(27548),
    o = n(552618),
    l = n(652215);
function c(e, t) {
    if (e.totalLength >= t) return e;
    let n = new a.o(e.primaryCapacity, e.extendedCapacity),
        l = t - e.totalLength;
    for (let t of i.Ay.getGuildFolders())
        for (let i of t.guildIds)
            for (let t of Object.values(r.A.getMutableBasicGuildChannelsForGuild(i)))
                if ((u(t) && (0, o.c)(t) && !(0, s.qA)(t) && d(i, t, n), n.totalLength >= l)) return f(n, e);
    return f(n, e);
}
function u(e) {
    return e.type === l.rbe.DM || e.type === l.rbe.GROUP_DM || e.type === l.rbe.GUILD_TEXT;
}
function d(e, t, n) {
    n.hasExtended(t.id) ||
        n.put(t.id, {
            guildId: e,
            channelId: t.id,
            channelType: t.type,
            fallback: !0,
        });
}
function f(e, t) {
    for (let [n, r] of t.allEntries()) e.put(n, r);
    return e;
}
