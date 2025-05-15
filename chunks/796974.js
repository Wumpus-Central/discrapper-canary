n.d(t, { Z: () => E });
var r,
    i = n(442837),
    o = n(902704),
    a = n(570140);
function s(e, t, n) {
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
let l = {},
    c = {},
    u = { scrollTop: 0 };
function d(e) {
    return {
        guildId: e,
        scrollTop: null,
        scrollTo: null
    };
}
function f(e) {
    let { channelId: t, scrollTop: n, scrollHeight: r, offsetHeight: i } = e,
        a = l[t];
    if (null == n || null == r || null == i) {
        if (null == a) return !1;
        delete l[t];
    } else {
        let e = {
            channelId: t,
            scrollTop: n,
            scrollHeight: r,
            offsetHeight: i
        };
        if (null != a && (0, o.Z)(a, e)) return !1;
        l[t] = e;
    }
}
function _(e) {
    let { scrollTop: t } = e;
    u.scrollTop = t;
}
function p(e) {
    let { channelId: t } = e;
    h(t) && delete l[t];
}
function h(e) {
    if (null == l[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: r } = l[e];
    return t === n - r;
}
function m(e) {
    let { guildId: t, scrollTop: n, scrollTo: r } = e;
    null == c[t] && (c[t] = d(t)), void 0 !== n && (c[t].scrollTop = n);
    let i = !1;
    return void 0 !== r && ((i = c[t].scrollTo !== r), (c[t].scrollTo = r)), null != r || i;
}
class g extends (r = i.ZP.Store) {
    percentageScrolled(e) {
        if (null != l[e]) {
            let { scrollTop: t, scrollHeight: n } = l[e];
            return t / n;
        }
        return 1;
    }
    getChannelDimensions(e) {
        return l[e];
    }
    getGuildDimensions(e) {
        var t;
        return null != (t = c[e]) ? t : d(e);
    }
    getGuildListDimensions() {
        return u;
    }
    isAtBottom(e) {
        return h(e);
    }
}
s(g, 'displayName', 'DimensionStore');
let E = new g(a.Z, {
    UPDATE_CHANNEL_DIMENSIONS: f,
    UPDATE_CHANNEL_LIST_DIMENSIONS: m,
    UPDATE_GUILD_LIST_DIMENSIONS: _,
    CALL_CREATE: p
});
