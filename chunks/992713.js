n.d(t, { Z: () => P }), n(388685), n(642613);
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
    _ = n(430824),
    p = n(709054),
    h = n(38618);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = 2000,
    E = new c.Z('EntityVersionsManager');
class b extends s.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', O);
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', O);
    }
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                GUILD_CREATE: v,
                DELETED_ENTITY_IDS: y
            });
    }
}
function y(e) {
    var t;
    let n = null == (t = _.Z.getGuild(e.guild_id)) ? void 0 : t.name;
    E.fileOnly('received deleted guild entities (id: '.concat(e.guild_id, ', name: ').concat(n, ')')),
        a.ZP.Emitter.batched(() => {
            null != e.channels && A(e.guild_id, new Set(e.channels)), null != e.roles && N(e.guild_id, new Set(e.roles)), null != e.emojis && C(e.guild_id, new Set(e.emojis)), null != e.stickers && R(e.guild_id, new Set(e.stickers));
        });
}
function O() {
    l.Z.getAll().then((e) => {
        e.forEach((e) => I(e));
    });
}
function v(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && I(t.id);
}
function I(e) {
    setTimeout(() => S(e), Math.ceil(Math.random() * g));
}
function S(e) {
    var t, n, r;
    let i = null == (t = _.Z.getGuild(e)) ? void 0 : t.name;
    E.fileOnly('requesting deleted guild entities (id: '.concat(e, ', name: ').concat(i, ')'));
    let a = T(Object.keys(f.Z.getMutableBasicGuildChannelsForGuild(e))),
        o = T(Object.keys(_.Z.getRoles(e))),
        s = T(u.ZP.getGuildEmoji(e).map((e) => e.id)),
        l = T(null != (r = null == (n = d.Z.getStickersByGuildId(e)) ? void 0 : n.map((e) => e.id)) ? r : []);
    h.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, o, s, l);
}
function T(e) {
    return i().v3(e.sort().join(',')).toString();
}
function A(e, t) {
    let n = p.default.keys(f.Z.getMutableBasicGuildChannelsForGuild(e));
    E.fileOnly('syncChannels', {
        channelIdsInMemory: n,
        channelIdsFromServer: t
    }),
        n.forEach((n) => {
            t.has(n) ||
                o.Z.dispatch({
                    type: 'CHANNEL_DELETE',
                    channel: {
                        guild_id: e,
                        id: n,
                        parent_id: void 0
                    }
                });
        });
}
function N(e, t) {
    p.default.keys(_.Z.getRoles(e)).forEach((n) => {
        t.has(n) ||
            o.Z.dispatch({
                type: 'GUILD_ROLE_DELETE',
                guildId: e,
                roleId: n
            });
    });
}
function C(e, t) {
    let n = u.ZP.getGuildEmoji(e),
        r = n.filter((e) => t.has(e.id));
    n.length !== r.length &&
        o.Z.dispatch({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e,
            emojis: r
        });
}
function R(e, t) {
    var n;
    let r = null != (n = d.Z.getStickersByGuildId(e)) ? n : [],
        i = r.filter((e) => t.has(e.id));
    r.length !== i.length &&
        o.Z.dispatch({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e,
            stickers: i
        });
}
let P = new b();
