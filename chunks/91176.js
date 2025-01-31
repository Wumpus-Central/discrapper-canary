e.d(n, { Z: () => i });
var l = e(913527),
    s = e.n(l),
    a = e(749210);
let i = {
    async setCommunicationDisabledDuration(t, n, e, l, i) {
        let o = null != e ? s()().add(e, 's').toISOString() : null;
        await a.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: o,
            duration: e,
            reason: l,
            location: i
        });
    }
};
