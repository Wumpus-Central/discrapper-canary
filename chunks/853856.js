n.d(t, { Z: () => m });
var r,
    i = n(442837),
    o = n(524437),
    a = n(570140),
    s = n(581883),
    l = n(131704),
    c = n(981631);
function u(e, t, n) {
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
let d = {},
    f = !1;
function p(e) {
    var t;
    return (0, l.kt)({
        id: e.id,
        name: null !== (t = e.nickname) && void 0 !== t ? t : '',
        type: c.d4z.GUILD_CATEGORY,
        position: e.order,
        guild_id: c.I_8
    });
}
function _() {
    var e, t, n;
    (f = null !== (n = null === (e = s.Z.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== n && n), (d = {});
    let r = null === (t = s.Z.settings.favorites) || void 0 === t ? void 0 : t.favoriteChannels;
    if (null == r) return !1;
    for (let e in r) {
        let t = r[e];
        d[e] = {
            id: e,
            nickname: '' !== t.nickname ? t.nickname : null,
            type: t.type,
            order: t.position,
            parentId: '0' !== t.parentId ? t.parentId : null
        };
    }
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), _(), this.syncWith([s.Z], _);
    }
    getFavoriteChannels() {
        return d;
    }
    get favoriteServerMuted() {
        return f;
    }
    isFavorite(e) {
        return null != e && null != d[e];
    }
    getFavorite(e) {
        if (null != e) return d[e];
    }
    getCategoryRecord(e) {
        return e in d && d[e].type === o.Dd.CATEGORY ? p(d[e]) : null;
    }
    getNickname(e) {
        var t;
        let n = this.getFavorite(e);
        return null !== (t = null == n ? void 0 : n.nickname) && void 0 !== t ? t : void 0;
    }
}
u(h, 'displayName', 'FavoriteStore');
let m = new h(a.Z, {});
