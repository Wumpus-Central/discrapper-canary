n.d(t, { Z: () => o });
var a = n(951288),
    i = n(515753),
    r = n(82892),
    l = n(131704),
    s = n(981631);
function o(e) {
    let { selected: t, nameplate: n } = e,
        o = (0, r.x)(),
        c = new l.mn({
            id: "0",
            type: s.d4z.DM,
            name: "self",
            guild_id: "0",
            recipients: [o.id],
        });
    return (0, a.jsx)(i.RS, {
        selected: t,
        channel: c,
        user: o,
        nameplate: n,
    });
}
