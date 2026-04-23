"use strict";
n.d(t, { y: () => u });
var r = n(562465),
    i = n(73153),
    s = n(71393),
    a = n(958340),
    o = n(652215);
let l = new Set();
async function u(e) {
    if (null == s.A.getGuild(e) && null == a.A.getGuildOrStatus(e) && !l.has(e)) {
        i.h.dispatch({ type: "BASIC_GUILD_FETCH", guildId: e }), l.add(e);
        try {
            let t = (await r.Bo.get({ url: o.Rsh.GUILD_BASIC(e), rejectWithError: !0 })).body;
            i.h.dispatch({ type: "BASIC_GUILD_FETCH_SUCCESS", guildId: e, guildInfo: t });
        } catch (t) {
            i.h.dispatch({ type: "BASIC_GUILD_FETCH_FAILURE", guildId: e });
        } finally {
            l.delete(e);
        }
    }
}
