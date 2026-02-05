"use strict";
n.d(t, { A: () => D });
var r = n(181370),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(439372),
    l = n(560542),
    u = n(626584),
    c = n(508675),
    d = n(679382),
    _ = n(734057),
    f = n(317525),
    p = n(71393),
    h = n(661191),
    m = n(142120);
let g = 2e3,
    E = new u.A("EntityVersionsManager");
class A extends o.A {
    actions = { GUILD_CREATE: y, DELETED_ENTITY_IDS: I };
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", T);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", T);
    }
}
function I(e) {
    let t = p.A.getGuild(e.guild_id)?.name;
    E.fileOnly(`received deleted guild entities (id: ${e.guild_id}, name: ${t})`),
        a.Ay.Emitter.batched(() => {
            null != e.channels && b(e.guild_id, new Set(e.channels)),
                null != e.roles && N(e.guild_id, new Set(e.roles)),
                null != e.emojis && R(e.guild_id, new Set(e.emojis)),
                null != e.stickers && O(e.guild_id, new Set(e.stickers));
        });
}
function T() {
    l.A.getAll().then((e) => {
        e.forEach((e) => S(e));
    });
}
function y(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && S(t.id);
}
function S(e) {
    setTimeout(() => v(e), Math.ceil(Math.random() * g));
}
function v(e) {
    let t = p.A.getGuild(e)?.name;
    E.fileOnly(`requesting deleted guild entities (id: ${e}, name: ${t})`);
    let n = C(Object.keys(_.A.getMutableBasicGuildChannelsForGuild(e))),
        r = C(f.A.getSortedRoles(e).map((e) => e.id)),
        i = C(c.Ay.getGuildEmoji(e).map((e) => e.id)),
        a = C(d.A.getStickersByGuildId(e)?.map((e) => e.id) ?? []);
    m.A.getSocket().getDeletedEntityIdsNotMatchingHash(e, n, r, i, a);
}
function C(e) {
    return i().v3(e.sort().join(",")).toString();
}
function b(e, t) {
    let n = h.default.keys(_.A.getMutableBasicGuildChannelsForGuild(e));
    E.fileOnly("syncChannels", { channelIdsInMemory: n, channelIdsFromServer: t }),
        n.forEach((n) => {
            t.has(n) || s.h.dispatch({ type: "CHANNEL_DELETE", channel: { guild_id: e, id: n, parent_id: void 0 } });
        });
}
function N(e, t) {
    h.default.keys(f.A.getUnsafeMutableRoles(e)).forEach((n) => {
        t.has(n) || s.h.dispatch({ type: "GUILD_ROLE_DELETE", guildId: e, roleId: n });
    });
}
function R(e, t) {
    let n = c.Ay.getGuildEmoji(e),
        r = n.filter((e) => t.has(e.id));
    n.length !== r.length && s.h.dispatch({ type: "GUILD_EMOJIS_UPDATE", guildId: e, emojis: r });
}
function O(e, t) {
    let n = d.A.getStickersByGuildId(e) ?? [],
        r = n.filter((e) => t.has(e.id));
    n.length !== r.length && s.h.dispatch({ type: "GUILD_STICKERS_UPDATE", guildId: e, stickers: r });
}
let D = new A();
