n.d(t, { Z: () => o });
var r = n(913527),
    l = n.n(r),
    i = n(749210);
let o = {
    async setCommunicationDisabledDuration(e, t, n, r, o) {
        let a = null != n ? l()().add(n, 's').toISOString() : null;
        await i.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: a,
            duration: n,
            reason: r,
            location: o
        });
    }
};
