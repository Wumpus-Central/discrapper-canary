n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(653041);
var i = n(442837),
    r = n(977258),
    l = n(958832),
    s = n(592125),
    a = n(981631);
function o(e) {
    return (0, i.Wu)([l.Z, s.Z], () => {
        var t;
        let n = (null !== (t = l.Z.getTopChannelIds(e.id)) && void 0 !== t ? t : []).map((e) => s.Z.getChannel(e)).filter((t) => null == t || t.id !== e.rulesChannelId),
            i = [],
            o = 0;
        return (
            n.forEach((e) => {
                if (e.type === a.d4z.GUILD_ANNOUNCEMENT) {
                    if (o >= 2) return;
                    o++;
                }
                i.length < 5 && !i.includes(e) && i.push(e);
            }),
            i.sort((t, n) => ((0, r.s)(e.id, n.id) ? 1 : 0) - ((0, r.s)(e.id, t.id) ? 1 : 0)),
            i
        );
    });
}
