n.d(t, { Z: () => o });
var i = n(200651),
    s = n(515753),
    r = n(82892),
    l = n(131704),
    a = n(981631);
function o(e) {
    let { selected: t, nameplate: n } = e,
        o = (0, r.x)(),
        c = new l.mn({
            id: '0',
            type: a.d4z.DM,
            name: 'self',
            guild_id: '0',
            recipients: [o.id]
        });
    return (0, i.jsx)(s.ZP, {
        selected: t,
        channel: c,
        user: o,
        nameplate: n
    });
}
