n.d(t, { y: () => c }), n(896048);
var r = n(562465),
    i = n(73153),
    a = n(71393),
    s = n(958340),
    o = n(652215);
let l = new Set();
async function c(e) {
    if (null == a.A.getGuild(e) && null == s.A.getGuildOrStatus(e) && !l.has(e)) {
        i.h.dispatch({
            type: "BASIC_GUILD_FETCH",
            guildId: e,
        }),
            l.add(e);
        try {
            let t = (
                await r.Bo.get({
                    url: o.Rsh.GUILD_BASIC(e),
                    rejectWithError: !0,
                })
            ).body;
            i.h.dispatch({
                type: "BASIC_GUILD_FETCH_SUCCESS",
                guildId: e,
                guildInfo: t,
            });
        } catch (t) {
            i.h.dispatch({
                type: "BASIC_GUILD_FETCH_FAILURE",
                guildId: e,
            });
        } finally {
            l.delete(e);
        }
    }
}
