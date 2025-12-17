n.d(t, { Z: () => a });
var l = n(913527),
    i = n.n(l),
    r = n(749210);
let a = {
    async setCommunicationDisabledDuration(e, t, n, l, a, o) {
        let s = null != n ? i()().add(n, "s").toISOString() : null;
        await r.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: s,
            duration: n,
            reason: l,
            location: a,
            moderatorReportId: o,
        });
    },
};
