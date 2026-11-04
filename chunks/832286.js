var i = n(620632),
    r = n(73153),
    a = n(71393),
    s = n(958340),
    l = n(652215);
let o = new Set();
n.d(
    t,
    {},
    {
        y: async function (e) {
            if (null == a.A.getGuild(e) && null == s.A.getGuildOrStatus(e) && !o.has(e)) {
                (r.h.dispatch({ type: "BASIC_GUILD_FETCH", guildId: e }), o.add(e));
                try {
                    let t = (await i.Bo.get({ url: l.Rsh.GUILD_BASIC(e), rejectWithError: !0 })).body;
                    r.h.dispatch({ type: "BASIC_GUILD_FETCH_SUCCESS", guildId: e, guildInfo: t });
                } catch (t) {
                    r.h.dispatch({ type: "BASIC_GUILD_FETCH_FAILURE", guildId: e });
                } finally {
                    o.delete(e);
                }
            }
        },
    },
);
