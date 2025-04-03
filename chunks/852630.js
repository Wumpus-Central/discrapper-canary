n.d(t, { Z: () => o });
var r = n(200651),
    i = n(515753),
    s = n(82892),
    a = n(131704),
    l = n(981631);
function o(e) {
    let { selected: t, nameplate: n } = e,
        o = (0, s.x)(),
        c = new a.mn({
            id: '0',
            type: l.d4z.DM,
            name: 'self',
            guild_id: '0',
            recipients: [o.id]
        });
    return (0, r.jsx)(i.RS, {
        selected: t,
        channel: c,
        user: o,
        nameplate: n
    });
}
