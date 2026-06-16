"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = 0,
    a = {};
class o extends i.Ay.Store {
    static displayName = "BasicGuildStore";
    getGuild(e) {
        let t = a[e];
        if (null != t && !("type" in t)) return t;
    }
    isGuildFetching(e) {
        let t = a[e];
        return null != t && "type" in t && "loading" === t.type;
    }
    getGuildOrStatus(e) {
        return a[e];
    }
    getVersion() {
        return s;
    }
}
let l = new o(r.h, {
    BASIC_GUILD_FETCH: function (e) {
        return (a[e.guildId] = { type: "loading" }), !1;
    },
    BASIC_GUILD_FETCH_SUCCESS: function (e) {
        (a[e.guildId] = e.guildInfo), s++;
    },
    BASIC_GUILD_FETCH_FAILURE: function (e) {
        return (a[e.guildId] = { type: "failed" }), !1;
    },
});
