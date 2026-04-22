"use strict";
n.d(t, { A: () => N });
var r = n(181370),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(439372),
    l = n(560542),
    u = n(626584),
    d = n(508675),
    c = n(679382),
    _ = n(734057),
    f = n(317525),
    E = n(71393),
    h = n(661191),
    p = n(142120);
let m = new u.A("EntityVersionsManager");
class g extends o.A {
    actions = { GUILD_CREATE: T, DELETED_ENTITY_IDS: A };
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", I);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", I);
    }
}
function A(e) {
    let t = E.A.getGuild(e.guild_id)?.name;
    m.fileOnly(`received deleted guild entities (id: ${e.guild_id}, name: ${t})`),
        s.Ay.Emitter.batched(() => {
            var t, n, r, i, s, o, l, u;
            let E, p, g, A, I;
            null != e.channels &&
                ((t = e.guild_id),
                (n = new Set(e.channels)),
                (E = h.default.keys(_.A.getMutableBasicGuildChannelsForGuild(t))),
                m.fileOnly("syncChannels", { channelIdsInMemory: E, channelIdsFromServer: n }),
                E.forEach((e) => {
                    n.has(e) ||
                        a.h.dispatch({ type: "CHANNEL_DELETE", channel: { guild_id: t, id: e, parent_id: void 0 } });
                })),
                null != e.roles &&
                    ((r = e.guild_id),
                    (i = new Set(e.roles)),
                    h.default.keys(f.A.getUnsafeMutableRoles(r)).forEach((e) => {
                        i.has(e) || a.h.dispatch({ type: "GUILD_ROLE_DELETE", guildId: r, roleId: e });
                    })),
                null != e.emojis &&
                    ((s = e.guild_id),
                    (o = new Set(e.emojis)),
                    (g = (p = d.Ay.getGuildEmoji(s)).filter((e) => o.has(e.id))),
                    p.length !== g.length && a.h.dispatch({ type: "GUILD_EMOJIS_UPDATE", guildId: s, emojis: g })),
                null != e.stickers &&
                    ((l = e.guild_id),
                    (u = new Set(e.stickers)),
                    (I = (A = c.A.getStickersByGuildId(l) ?? []).filter((e) => u.has(e.id))),
                    A.length !== I.length && a.h.dispatch({ type: "GUILD_STICKERS_UPDATE", guildId: l, stickers: I }));
        });
}
function I() {
    l.A.getAll().then((e) => {
        e.forEach((e) => S(e));
    });
}
function T(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && S(t.id);
}
function S(e) {
    setTimeout(
        () => {
            var t;
            let n, r, i, s, a;
            return (
                (t = e),
                (n = E.A.getGuild(t)?.name),
                m.fileOnly(`requesting deleted guild entities (id: ${t}, name: ${n})`),
                (r = y(Object.keys(_.A.getMutableBasicGuildChannelsForGuild(t)))),
                (i = y(f.A.getSortedRoles(t).map((e) => e.id))),
                (s = y(d.Ay.getGuildEmoji(t).map((e) => e.id))),
                (a = y(c.A.getStickersByGuildId(t)?.map((e) => e.id) ?? [])),
                void p.A.getSocket().getDeletedEntityIdsNotMatchingHash(t, r, i, s, a)
            );
        },
        Math.ceil(2e3 * Math.random()),
    );
}
function y(e) {
    return i().v3(e.sort().join(",")).toString();
}
let N = new g();
