n.d(t, { A: () => c }), n(321073), n(638769);
var r = n(311907),
    i = n(112389),
    l = n(777705),
    s = n(734057),
    a = n(652215);
function c(e) {
    return (0, r.yK)([l.A, s.A], () => {
        var t;
        let n = (null != (t = l.A.getTopChannelIds(e.id)) ? t : [])
                .map((e) => s.A.getChannel(e))
                .filter((t) => null == t || t.id !== e.rulesChannelId),
            r = [],
            c = 0;
        return (
            n.forEach((e) => {
                if (e.type === a.rbe.GUILD_ANNOUNCEMENT) {
                    if (c >= 2) return;
                    c++;
                }
                r.length < 5 && !r.includes(e) && r.push(e);
            }),
            r.sort((t, n) => !!(0, i.S)(e.id, n.id) - !!(0, i.S)(e.id, t.id)),
            r
        );
    });
}
