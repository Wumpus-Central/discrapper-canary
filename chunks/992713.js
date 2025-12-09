n.d(t, { Z: () => D }), n(388685), n(642613);
var r = n(108131),
    i = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(147913),
    l = n(662896),
    c = n(710845),
    u = n(339085),
    d = n(926491),
    f = n(592125),
    p = n(485386),
    _ = n(430824),
    m = n(709054),
    h = n(38618);
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
    b = new c.Z("EntityVersionsManager");
class y extends s.Z {
    _initialize() {
        o.Z.subscribe("CONNECTION_OPEN", v);
    }
    _terminate() {
        o.Z.unsubscribe("CONNECTION_OPEN", v);
    }
    constructor(...e) {
        super(...e),
            g(this, "actions", {
                GUILD_CREATE: S,
                DELETED_ENTITY_IDS: O,
            });
    }
}
function O(e) {
    var t;
    let n = null == (t = _.Z.getGuild(e.guild_id)) ? void 0 : t.name;
    b.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")),
        a.ZP.Emitter.batched(() => {
            null != e.channels && C(e.guild_id, new Set(e.channels)),
                null != e.roles && N(e.guild_id, new Set(e.roles)),
                null != e.emojis && P(e.guild_id, new Set(e.emojis)),
                null != e.stickers && R(e.guild_id, new Set(e.stickers));
        });
}
function v() {
    l.Z.getAll().then((e) => {
        e.forEach((e) => I(e));
    });
}
function S(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && I(t.id);
}
function I(e) {
    setTimeout(() => T(e), Math.ceil(Math.random() * E));
}
function T(e) {
    var t, n, r;
    let i = null == (t = _.Z.getGuild(e)) ? void 0 : t.name;
    b.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(i, ")"));
    let a = A(Object.keys(f.Z.getMutableBasicGuildChannelsForGuild(e))),
        o = A(p.Z.getSortedRoles(e).map((e) => e.id)),
        s = A(u.ZP.getGuildEmoji(e).map((e) => e.id)),
        l = A(null != (r = null == (n = d.Z.getStickersByGuildId(e)) ? void 0 : n.map((e) => e.id)) ? r : []);
    h.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, o, s, l);
}
function A(e) {
    return i().v3(e.sort().join(",")).toString();
}
function C(e, t) {
    let n = m.default.keys(f.Z.getMutableBasicGuildChannelsForGuild(e));
    b.fileOnly("syncChannels", {
        channelIdsInMemory: n,
        channelIdsFromServer: t,
    }),
        n.forEach((n) => {
            t.has(n) ||
                o.Z.dispatch({
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
    m.default.keys(p.Z.getUnsafeMutableRoles(e)).forEach((n) => {
        t.has(n) ||
            o.Z.dispatch({
                type: "GUILD_ROLE_DELETE",
                guildId: e,
                roleId: n,
            });
    });
}
function P(e, t) {
    let n = u.ZP.getGuildEmoji(e),
        r = n.filter((e) => t.has(e.id));
    n.length !== r.length &&
        o.Z.dispatch({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e,
            emojis: r,
        });
}
function R(e, t) {
    var n;
    let r = null != (n = d.Z.getStickersByGuildId(e)) ? n : [],
        i = r.filter((e) => t.has(e.id));
    r.length !== i.length &&
        o.Z.dispatch({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e,
            stickers: i,
        });
}
let D = new y();
