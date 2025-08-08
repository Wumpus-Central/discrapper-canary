n.d(e, { Z: () => r });
var l = n(913527),
    a = n.n(l),
    i = n(749210);
let r = {
    async setCommunicationDisabledDuration(t, e, n, l, r, o) {
        let u = null != n ? a()().add(n, "s").toISOString() : null;
        await i.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: e,
            communicationDisabledUntilTimestamp: u,
            duration: n,
            reason: l,
            location: r,
            moderatorReportId: o,
        });
    },
};
