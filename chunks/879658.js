"use strict";
n.d(t, { I: () => _ });
var i = n(734057),
    r = n(711014),
    s = n(509417),
    a = n(27548),
    o = n(552618),
    l = n(652215);
function _(e, t) {
    if (e.totalLength >= t) return e;
    let n = new s.o(e.primaryCapacity, e.extendedCapacity),
        _ = t - e.totalLength;
    for (let t of r.Ay.getGuildFolders())
        for (let r of t.guildIds)
            for (let t of Object.values(i.A.getMutableBasicGuildChannelsForGuild(r))) {
                var u, c, E, h;
                if (
                    (((u = t).type === l.rbe.DM || u.type === l.rbe.GROUP_DM || u.type === l.rbe.GUILD_TEXT) &&
                        (0, o.c)(t) &&
                        !(0, a.qA)(t) &&
                        ((c = r),
                        (E = t),
                        (h = n).hasExtended(E.id) ||
                            h.put(E.id, { guildId: c, channelId: E.id, channelType: E.type, fallback: !0 })),
                    n.totalLength >= _)
                )
                    return d(n, e);
            }
    return d(n, e);
}
function d(e, t) {
    for (let [n, i] of t.allEntries()) e.put(n, i);
    return e;
}
