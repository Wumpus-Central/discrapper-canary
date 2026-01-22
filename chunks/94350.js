n.d(t, { A: () => P }), n(896048), n(638769);
var r = n(181370),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(439372),
    l = n(560542),
    c = n(626584),
    u = n(508675),
    d = n(679382),
    f = n(734057),
    p = n(317525),
    _ = n(71393),
    h = n(661191),
    m = n(142120);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = 2000,
    b = new c.A("EntityVersionsManager");
class y extends o.A {
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", A);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", A);
    }
    constructor(...e) {
        super(...e),
            g(this, "actions", {
                GUILD_CREATE: v,
                DELETED_ENTITY_IDS: O,
            });
    }
}
function O(e) {
    var t;
    let n = null == (t = _.A.getGuild(e.guild_id)) ? void 0 : t.name;
    b.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")),
        a.Ay.Emitter.batched(() => {
            null != e.channels && C(e.guild_id, new Set(e.channels)),
                null != e.roles && N(e.guild_id, new Set(e.roles)),
                null != e.emojis && R(e.guild_id, new Set(e.emojis)),
                null != e.stickers && w(e.guild_id, new Set(e.stickers));
        });
}
function A() {
    l.A.getAll().then((e) => {
        e.forEach((e) => S(e));
    });
}
function v(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && S(t.id);
}
function S(e) {
    setTimeout(() => I(e), Math.ceil(Math.random() * E));
}
function I(e) {
    var t, n, r;
    let i = null == (n = _.A.getGuild(e)) ? void 0 : n.name;
    b.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(i, ")"));
    let a = T(Object.keys(f.A.getMutableBasicGuildChannelsForGuild(e))),
        s = T(p.A.getSortedRoles(e).map((e) => e.id)),
        o = T(u.Ay.getGuildEmoji(e).map((e) => e.id)),
        l = T(null != (t = null == (r = d.A.getStickersByGuildId(e)) ? void 0 : r.map((e) => e.id)) ? t : []);
    m.A.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, s, o, l);
}
function T(e) {
    return i().v3(e.sort().join(",")).toString();
}
function C(e, t) {
    let n = h.default.keys(f.A.getMutableBasicGuildChannelsForGuild(e));
    b.fileOnly("syncChannels", {
        channelIdsInMemory: n,
        channelIdsFromServer: t,
    }),
        n.forEach((n) => {
            t.has(n) ||
                s.h.dispatch({
                    type: "CHANNEL_DELETE",
                    channel: {
                        guild_id: e,
                        id: n,
                        parent_id: void 0,
                    },
                });
        });
}
function N(e, t) {
    h.default.keys(p.A.getUnsafeMutableRoles(e)).forEach((n) => {
        t.has(n) ||
            s.h.dispatch({
                type: "GUILD_ROLE_DELETE",
                guildId: e,
                roleId: n,
            });
    });
}
function R(e, t) {
    let n = u.Ay.getGuildEmoji(e),
        r = n.filter((e) => t.has(e.id));
    n.length !== r.length &&
        s.h.dispatch({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e,
            emojis: r,
        });
}
function w(e, t) {
    var n;
    let r = null != (n = d.A.getStickersByGuildId(e)) ? n : [],
        i = r.filter((e) => t.has(e.id));
    r.length !== i.length &&
        s.h.dispatch({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e,
            stickers: i,
        });
}
let P = new y();
