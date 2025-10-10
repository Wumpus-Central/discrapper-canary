n.d(t, { Z: () => o });
var l = n(913527),
    i = n.n(l),
    r = n(749210);
let o = {
    async setCommunicationDisabledDuration(e, t, n, l, o, a) {
        let s = null != n ? i()().add(n, "s").toISOString() : null;
        await r.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: s,
            duration: n,
            reason: l,
            location: o,
            moderatorReportId: a,
        });
    },
};
