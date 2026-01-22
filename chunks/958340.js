n.d(t, {
    A: () => p,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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
let o = 0,
    l = {};

function c(e) {
    return (
        (l[e.guildId] = {
            type: "loading",
        }),
        !1
    );
}

function u(e) {
    (l[e.guildId] = e.guildInfo), o++;
}

function d(e) {
    return (
        (l[e.guildId] = {
            type: "failed",
        }),
        !1
    );
}
class f extends (r = i.Ay.Store) {
    getGuild(e) {
        let t = l[e];
        if (null != t && !("type" in t)) return t;
    }
    isGuildFetching(e) {
        let t = l[e];
        return null != t && "type" in t && "loading" === t.type;
    }
    getGuildOrStatus(e) {
        return l[e];
    }
    getVersion() {
        return o;
    }
}
s(f, "displayName", "BasicGuildStore");
let p = new f(a.h, {
    BASIC_GUILD_FETCH: c,
    BASIC_GUILD_FETCH_SUCCESS: u,
    BASIC_GUILD_FETCH_FAILURE: d,
});
