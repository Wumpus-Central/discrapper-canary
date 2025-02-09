t.d(n, { Z: () => a });
var i = t(913527),
    l = t.n(i),
    r = t(749210);
let a = {
    async setCommunicationDisabledDuration(e, n, t, i, a) {
        let u = null != t ? l()().add(t, 's').toISOString() : null;
        await r.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: n,
            communicationDisabledUntilTimestamp: u,
            duration: t,
            reason: i,
            location: a
        });
    }
};
