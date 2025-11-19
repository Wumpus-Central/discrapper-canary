n.d(e, { Z: () => o });
var l = n(913527),
    i = n.n(l),
    a = n(749210);
let o = {
    async setCommunicationDisabledDuration(t, e, n, l, o, r) {
        let u = null != n ? i()().add(n, "s").toISOString() : null;
        await a.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: e,
            communicationDisabledUntilTimestamp: u,
            duration: n,
            reason: l,
            location: o,
            moderatorReportId: r,
        });
    },
};
