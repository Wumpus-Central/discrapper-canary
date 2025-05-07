n.d(t, { Z: () => o });
var l = n(913527),
    i = n.n(l),
    r = n(749210);
let o = {
    async setCommunicationDisabledDuration(e, t, n, l, o) {
        let a = null != n ? i()().add(n, 's').toISOString() : null;
        await r.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: a,
            duration: n,
            reason: l,
            location: o
        });
    }
};
