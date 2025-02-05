t.d(n, { Z: () => r });
var i = t(913527),
    l = t.n(i),
    a = t(749210);
let r = {
    async setCommunicationDisabledDuration(e, n, t, i, r) {
        let d = null != t ? l()().add(t, 's').toISOString() : null;
        await a.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: n,
            communicationDisabledUntilTimestamp: d,
            duration: t,
            reason: i,
            location: r
        });
    }
};
