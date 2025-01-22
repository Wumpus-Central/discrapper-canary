var i,
    a = r(442837),
    o = r(902704),
    s = r(570140);
function l(e, n, r) {
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
let u = {},
    c = {},
    d = { scrollTop: 0 };
function f(e) {
    return {
        guildId: e,
        scrollTop: null,
        scrollTo: null
    };
}
function p(e) {
    let { channelId: n, scrollTop: r, scrollHeight: i, offsetHeight: a } = e,
        s = u[n];
    if (null == r || null == i || null == a) {
        if (null == s) return !1;
        delete u[n];
    } else {
        let e = {
            channelId: n,
            scrollTop: r,
            scrollHeight: i,
            offsetHeight: a
        };
        if (null != s && (0, o.Z)(s, e)) return !1;
        u[n] = e;
    }
}
function h(e) {
    let { scrollTop: n } = e;
    d.scrollTop = n;
}
function _(e) {
    let { channelId: n } = e;
    m(n) && delete u[n];
}
function m(e) {
    if (null == u[e]) return;
    let { scrollTop: n, scrollHeight: r, offsetHeight: i } = u[e];
    return n === r - i;
}
function g(e) {
    let { guildId: n, scrollTop: r, scrollTo: i } = e;
    null == c[n] && (c[n] = f(n)), void 0 !== r && (c[n].scrollTop = r);
    let a = !1;
    return void 0 !== i && ((a = c[n].scrollTo !== i), (c[n].scrollTo = i)), null != i || a;
}
class E extends (i = a.ZP.Store) {
    percentageScrolled(e) {
        if (null != u[e]) {
            let { scrollTop: n, scrollHeight: r } = u[e];
            return n / r;
        }
        return 1;
    }
    getChannelDimensions(e) {
        return u[e];
    }
    getGuildDimensions(e) {
        var n;
        return null !== (n = c[e]) && void 0 !== n ? n : f(e);
    }
    getGuildListDimensions() {
        return d;
    }
    isAtBottom(e) {
        return m(e);
    }
}
l(E, 'displayName', 'DimensionStore'),
    (n.Z = new E(s.Z, {
        UPDATE_CHANNEL_DIMENSIONS: p,
        UPDATE_CHANNEL_LIST_DIMENSIONS: g,
        UPDATE_GUILD_LIST_DIMENSIONS: h,
        CALL_CREATE: _
    }));
