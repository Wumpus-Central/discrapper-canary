n.d(t, { Z: () => o }), n(539854), n(642613);
var r = n(442837),
    i = n(977258),
    l = n(958832),
    s = n(592125),
    a = n(981631);
function o(e) {
    return (0, r.Wu)([l.Z, s.Z], () => {
        var t;
        let n = (null != (t = l.Z.getTopChannelIds(e.id)) ? t : []).map((e) => s.Z.getChannel(e)).filter((t) => null == t || t.id !== e.rulesChannelId),
            r = [],
            o = 0;
        return (
            n.forEach((e) => {
                if (e.type === a.d4z.GUILD_ANNOUNCEMENT) {
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
