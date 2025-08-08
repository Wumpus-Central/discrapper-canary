l.d(n, { Z: () => o });
var a = l(913527),
    i = l.n(a),
    e = l(749210);
let o = {
    async setCommunicationDisabledDuration(t, n, l, a, o, s) {
        let u = null != l ? i()().add(l, "s").toISOString() : null;
        await e.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: u,
            duration: l,
            reason: a,
            location: o,
            moderatorReportId: s,
        });
    },
};
