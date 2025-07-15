n.d(t, { Z: () => a });
var r = n(913527),
    l = n.n(r),
    i = n(749210);
let a = {
    async setCommunicationDisabledDuration(e, t, n, r, a, o) {
        let u = null != n ? l()().add(n, 's').toISOString() : null;
        await i.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: u,
            duration: n,
            reason: r,
            location: a,
            moderatorReportId: o
        });
    }
};
