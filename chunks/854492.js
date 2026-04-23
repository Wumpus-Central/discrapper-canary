"use strict";
n.d(t, { A: () => d, j: () => _ });
var i = n(636537),
    r = n(228366),
    s = n(763827),
    a = n(403362),
    o = n(857071),
    l = n(652215);
async function d(e) {
    let t = o.A.lurkingGuildIds().filter((t) => !e.includes(t));
    0 !== t.length &&
        (r.h.dispatch({ type: "GUILD_STOP_LURKING", ignoredGuildIds: e }),
        await Promise.all(
            t.map(async (e) => {
                let t = o.A.getLurkingSource();
                try {
                    await i.Bo.del({
                        url: l.Rsh.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    });
                } catch (n) {
                    r.h.dispatch({ type: "GUILD_STOP_LURKING_FAILURE", lurkingGuildId: e, lurkingSource: t });
                }
            }),
        ));
}
async function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = o.A.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, s.A.getGuildId()].filter(a.Vq);
    await d(n);
}
