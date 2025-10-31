e.d(n, { Z: () => s });
var l = e(913527),
    i = e.n(l),
    a = e(749210);
let s = {
    async setCommunicationDisabledDuration(t, n, e, l, s, r) {
        let o = null != e ? i()().add(e, "s").toISOString() : null;
        await a.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: o,
            duration: e,
            reason: l,
            location: s,
            moderatorReportId: r,
        });
    },
};
