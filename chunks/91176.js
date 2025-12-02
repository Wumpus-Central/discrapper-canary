n.d(t, { Z: () => a });
var l = n(913527),
    r = n.n(l),
    i = n(749210);
let a = {
    async setCommunicationDisabledDuration(e, t, n, l, a, o) {
        let u = null != n ? r()().add(n, "s").toISOString() : null;
        await i.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: u,
            duration: n,
            reason: l,
            location: a,
            moderatorReportId: o,
        });
    },
};
