n.d(t, { Z: () => D }), n(47120);
var i = n(108131),
    r = n.n(i),
    a = n(442837),
    s = n(570140),
    o = n(147913),
    l = n(662896),
    u = n(710845),
    c = n(339085),
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
    E = new u.Z('EntityVersionsManager');
class v extends o.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', I);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', I);
    }
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                GUILD_CREATE: b,
                DELETED_ENTITY_IDS: y
            });
    }
}
function y(e) {
    var t;
    let n = null === (t = _.Z.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
    E.fileOnly('received deleted guild entities (id: '.concat(e.guild_id, ', name: ').concat(n, ')')),
        a.ZP.Emitter.batched(() => {
            null != e.channels && N(e.guild_id, new Set(e.channels)), null != e.roles && C(e.guild_id, new Set(e.roles)), null != e.emojis && R(e.guild_id, new Set(e.emojis)), null != e.stickers && O(e.guild_id, new Set(e.stickers));
        });
}
function I() {
    l.Z.getAll().then((e) => {
        e.forEach((e) => T(e));
    });
}
function b(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && T(t.id);
}
function T(e) {
    setTimeout(() => S(e), Math.ceil(Math.random() * g));
}
function S(e) {
    var t, n, i;
    let r = null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
    E.fileOnly('requesting deleted guild entities (id: '.concat(e, ', name: ').concat(r, ')'));
    let a = A(Object.keys(f.Z.getMutableBasicGuildChannelsForGuild(e))),
        s = A(Object.keys(_.Z.getRoles(e))),
        o = A(c.ZP.getGuildEmoji(e).map((e) => e.id)),
        l = A(null !== (i = null === (n = d.Z.getStickersByGuildId(e)) || void 0 === n ? void 0 : n.map((e) => e.id)) && void 0 !== i ? i : []);
    h.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, s, o, l);
}
function A(e) {
    return r().v3(e.sort().join(',')).toString();
}
function N(e, t) {
    let n = p.default.keys(f.Z.getMutableBasicGuildChannelsForGuild(e));
    E.fileOnly('syncChannels', {
        channelIdsInMemory: n,
        channelIdsFromServer: t
    }),
        n.forEach((n) => {
            t.has(n) ||
                s.Z.dispatch({
                    type: 'CHANNEL_DELETE',
                    channel: {
                        guild_id: e,
                        id: n,
                        parent_id: void 0
                    }
                });
        });
}
function C(e, t) {
    p.default.keys(_.Z.getRoles(e)).forEach((n) => {
        t.has(n) ||
            s.Z.dispatch({
                type: 'GUILD_ROLE_DELETE',
                guildId: e,
                roleId: n
            });
    });
}
function R(e, t) {
    let n = c.ZP.getGuildEmoji(e),
        i = n.filter((e) => t.has(e.id));
    n.length !== i.length &&
        s.Z.dispatch({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e,
            emojis: i
        });
}
function O(e, t) {
    var n;
    let i = null !== (n = d.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [],
        r = i.filter((e) => t.has(e.id));
    i.length !== r.length &&
        s.Z.dispatch({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e,
            stickers: r
        });
}
let D = new v();
