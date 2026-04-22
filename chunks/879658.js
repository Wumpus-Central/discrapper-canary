"use strict";
n.d(t, { I: () => u });
var r = n(734057),
    i = n(711014),
    s = n(447508),
    a = n(27548),
    o = n(552618),
    l = n(652215);
function u(e, t) {
    if (e.totalLength >= t) return e;
    let n = new s.o(e.primaryCapacity, e.extendedCapacity),
        u = t - e.totalLength;
    for (let t of i.Ay.getGuildFolders())
        for (let i of t.guildIds)
            for (let t of Object.values(r.A.getMutableBasicGuildChannelsForGuild(i))) {
                var c, _, f, E;
                if (
                    (((c = t).type === l.rbe.DM || c.type === l.rbe.GROUP_DM || c.type === l.rbe.GUILD_TEXT) &&
                        (0, o.c)(t) &&
                        !(0, a.qA)(t) &&
                        ((_ = i),
                        (f = t),
                        (E = n).hasExtended(f.id) ||
                            E.put(f.id, { guildId: _, channelId: f.id, channelType: f.type, fallback: !0 })),
                    n.totalLength >= u)
                )
                    return d(n, e);
            }
    return d(n, e);
}
function d(e, t) {
    for (let [n, r] of t.allEntries()) e.put(n, r);
    return e;
}
