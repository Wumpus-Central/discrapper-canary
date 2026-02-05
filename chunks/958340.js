"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let a = 0,
    s = {};
function o(e) {
    return (s[e.guildId] = { type: "loading" }), !1;
}
function l(e) {
    (s[e.guildId] = e.guildInfo), a++;
}
function u(e) {
    return (s[e.guildId] = { type: "failed" }), !1;
}
class c extends r.Ay.Store {
    static displayName = "BasicGuildStore";
    getGuild(e) {
        let t = s[e];
        if (null != t && !("type" in t)) return t;
    }
    isGuildFetching(e) {
        let t = s[e];
        return null != t && "type" in t && "loading" === t.type;
    }
    getGuildOrStatus(e) {
        return s[e];
    }
    getVersion() {
        return a;
    }
}
let d = new c(i.h, { BASIC_GUILD_FETCH: o, BASIC_GUILD_FETCH_SUCCESS: l, BASIC_GUILD_FETCH_FAILURE: u });
