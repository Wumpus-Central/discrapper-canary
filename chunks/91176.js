n.d(t, { Z: () => o });
var l = n(913527),
    r = n.n(l),
    i = n(749210);
let o = {
    async setCommunicationDisabledDuration(e, t, n, l, o) {
        let a = null != n ? r()().add(n, 's').toISOString() : null;
        await i.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: a,
            duration: n,
            reason: l,
            location: o
        });
    }
};
