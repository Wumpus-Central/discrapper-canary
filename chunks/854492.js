n.d(t, {
    A: () => c,
    j: () => u,
}),
    n(896048);
var r = n(562465),
    i = n(73153),
    a = n(383501),
    s = n(403362),
    o = n(857071),
    l = n(652215);
async function c(e) {
    let t = o.A.lurkingGuildIds().filter((t) => !e.includes(t));
    0 !== t.length &&
        (i.h.dispatch({
            type: "GUILD_STOP_LURKING",
            ignoredGuildIds: e,
        }),
        await Promise.all(
            t.map(async (e) => {
                let t = o.A.getLurkingSource();
                try {
                    await r.Bo.del({
                        url: l.Rsh.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    });
                } catch (n) {
                    i.h.dispatch({
                        type: "GUILD_STOP_LURKING_FAILURE",
                        lurkingGuildId: e,
                        lurkingSource: t,
                    });
                }
            }),
        ));
}
async function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = o.A.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, a.A.getGuildId()].filter(s.Vq);
    await c(n);
}
