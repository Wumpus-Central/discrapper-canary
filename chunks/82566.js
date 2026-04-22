n.d(t, { A: () => o }), n(321073);
var i = n(311907),
    l = n(112389),
    s = n(777705),
    r = n(734057),
    a = n(652215);
function o(e) {
    return (0, i.yK)([s.A, r.A], () => {
        let t = (s.A.getTopChannelIds(e.id) ?? [])
                .map((e) => r.A.getChannel(e))
                .filter((t) => null == t || t.id !== e.rulesChannelId),
            n = [],
            i = 0;
        return (
            t.forEach((e) => {
                if (e.type === a.rbe.GUILD_ANNOUNCEMENT) {
                    if (i >= 2) return;
                    i++;
                }
                n.length < 5 && !n.includes(e) && n.push(e);
            }),
            n.sort((t, n) => !!(0, l.S)(e.id, n.id) - !!(0, l.S)(e.id, t.id)),
            n
        );
    });
}
