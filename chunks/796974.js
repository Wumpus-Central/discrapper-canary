n.d(t, { Z: () => E });
var i,
    r = n(442837),
    a = n(902704),
    s = n(570140);
function o(e, t, n) {
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
    u = {},
    c = { scrollTop: 0 };
function d(e) {
    return {
        guildId: e,
        scrollTop: null,
        scrollTo: null
    };
}
function f(e) {
    let { channelId: t, scrollTop: n, scrollHeight: i, offsetHeight: r } = e,
        s = l[t];
    if (null == n || null == i || null == r) {
        if (null == s) return !1;
        delete l[t];
    } else {
        let e = {
            channelId: t,
            scrollTop: n,
            scrollHeight: i,
            offsetHeight: r
        };
        if (null != s && (0, a.Z)(s, e)) return !1;
        l[t] = e;
    }
}
function _(e) {
    let { scrollTop: t } = e;
    c.scrollTop = t;
}
function p(e) {
    let { channelId: t } = e;
    h(t) && delete l[t];
}
function h(e) {
    if (null == l[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: i } = l[e];
    return t === n - i;
}
function m(e) {
    let { guildId: t, scrollTop: n, scrollTo: i } = e;
    null == u[t] && (u[t] = d(t)), void 0 !== n && (u[t].scrollTop = n);
    let r = !1;
    return void 0 !== i && ((r = u[t].scrollTo !== i), (u[t].scrollTo = i)), null != i || r;
}
class g extends (i = r.ZP.Store) {
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
        return null !== (t = u[e]) && void 0 !== t ? t : d(e);
    }
    getGuildListDimensions() {
        return c;
    }
    isAtBottom(e) {
        return h(e);
    }
}
o(g, 'displayName', 'DimensionStore');
let E = new g(s.Z, {
    UPDATE_CHANNEL_DIMENSIONS: f,
    UPDATE_CHANNEL_LIST_DIMENSIONS: m,
    UPDATE_GUILD_LIST_DIMENSIONS: _,
    CALL_CREATE: p
});
