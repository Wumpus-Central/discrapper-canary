"use strict";
n.d(t, { y: () => d });
var i = n(636537),
    r = n(228366),
    s = n(71393),
    a = n(958340),
    o = n(652215);
let l = new Set();
async function d(e) {
    if (null == s.A.getGuild(e) && null == a.A.getGuildOrStatus(e) && !l.has(e)) {
        r.h.dispatch({ type: "BASIC_GUILD_FETCH", guildId: e }), l.add(e);
        try {
            let t = (await i.Bo.get({ url: o.Rsh.GUILD_BASIC(e), rejectWithError: !0 })).body;
            r.h.dispatch({ type: "BASIC_GUILD_FETCH_SUCCESS", guildId: e, guildInfo: t });
        } catch (t) {
            r.h.dispatch({ type: "BASIC_GUILD_FETCH_FAILURE", guildId: e });
        } finally {
            l.delete(e);
        }
    }
}
