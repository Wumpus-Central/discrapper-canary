var i,
    a = r(442837),
    o = r(524437),
    s = r(570140),
    l = r(581883),
    u = r(131704),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = {},
    p = !1;
function h(e) {
    var n;
    return (0, u.kt)({
        id: e.id,
        name: null !== (n = e.nickname) && void 0 !== n ? n : '',
        type: c.d4z.GUILD_CATEGORY,
        position: e.order,
        guild_id: c.I_8
    });
}
function _() {
    var e, n, r;
    (p = null !== (r = null === (e = l.Z.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== r && r), (f = {});
    let i = null === (n = l.Z.settings.favorites) || void 0 === n ? void 0 : n.favoriteChannels;
    if (null == i) return !1;
    for (let e in i) {
        let n = i[e];
        f[e] = {
            id: e,
            nickname: '' !== n.nickname ? n.nickname : null,
            type: n.type,
            order: n.position,
            parentId: '0' !== n.parentId ? n.parentId : null
        };
    }
}
class m extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z), _(), this.syncWith([l.Z], _);
    }
    getFavoriteChannels() {
        return f;
    }
    get favoriteServerMuted() {
        return p;
    }
    isFavorite(e) {
        return null != e && null != f[e];
    }
    getFavorite(e) {
        if (null != e) return f[e];
    }
    getCategoryRecord(e) {
        return e in f && f[e].type === o.Dd.CATEGORY ? h(f[e]) : null;
    }
    getNickname(e) {
        var n;
        let r = this.getFavorite(e);
        return null !== (n = null == r ? void 0 : r.nickname) && void 0 !== n ? n : void 0;
    }
}
d(m, 'displayName', 'FavoriteStore'), (n.Z = new m(s.Z, {}));
