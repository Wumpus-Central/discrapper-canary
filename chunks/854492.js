"use strict";
n.d(t, { A: () => d, j: () => c });
var i = n(562465),
    r = n(228366),
    a = n(763827),
    s = n(403362),
    l = n(857071),
    o = n(652215);
async function d(e) {
    let t = l.A.lurkingGuildIds().filter((t) => !e.includes(t));
    if (0 === t.length) return;
    let n = new Map(t.map((e) => [e, l.A.getLurkingSourceForGuild(e)]));
    r.h.dispatch({ type: "GUILD_STOP_LURKING", ignoredGuildIds: e }),
        await Promise.all(
            t.map(async (e) => {
                let t = n.get(e) ?? null;
                try {
                    await i.Bo.del({
                        url: o.Rsh.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    });
                } catch (n) {
                    r.h.dispatch({ type: "GUILD_STOP_LURKING_FAILURE", lurkingGuildId: e, lurkingSource: t });
                }
            }),
        );
}
async function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = l.A.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, a.A.getGuildId()].filter(s.Vq);
    await d(n);
}
