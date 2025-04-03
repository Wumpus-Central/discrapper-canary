n.d(t, { Z: () => o }), n(653041), n(230036);
var r = n(442837),
    i = n(977258),
    s = n(958832),
    a = n(592125),
    l = n(981631);
function o(e) {
    return (0, r.Wu)([s.Z, a.Z], () => {
        var t;
        let n = (null != (t = s.Z.getTopChannelIds(e.id)) ? t : []).map((e) => a.Z.getChannel(e)).filter((t) => null == t || t.id !== e.rulesChannelId),
            r = [],
            o = 0;
        return (
            n.forEach((e) => {
                if (e.type === l.d4z.GUILD_ANNOUNCEMENT) {
                    if (o >= 2) return;
                    o++;
                }
                r.length < 5 && !r.includes(e) && r.push(e);
            }),
            r.sort((t, n) => +!!(0, i.s)(e.id, n.id) - +!!(0, i.s)(e.id, t.id)),
            r
        );
    });
}
