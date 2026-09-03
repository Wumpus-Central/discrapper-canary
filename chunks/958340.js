n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = 0,
    s = {};
class l extends i.Ay.Store {
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
let o = new l(r.h, {
    BASIC_GUILD_FETCH: function (e) {
        return (s[e.guildId] = { type: "loading" }), !1;
    },
    BASIC_GUILD_FETCH_SUCCESS: function (e) {
        (s[e.guildId] = e.guildInfo), a++;
    },
    BASIC_GUILD_FETCH_FAILURE: function (e) {
        return (s[e.guildId] = { type: "failed" }), !1;
    },
});
