n.d(t, { Z: () => l });
var r = n(951288),
    i = n(515753),
    a = n(82892),
    o = n(131704),
    s = n(981631);
function l(e) {
    let { selected: t, nameplate: n } = e,
        l = (0, a.x)(),
        c = new o.mn({
            id: "0",
            type: s.d4z.DM,
            name: "self",
            guild_id: "0",
            recipients: [l.id],
        });
    return (0, r.jsx)(i.RS, {
        selected: t,
        channel: c,
        user: l,
        nameplate: n,
    });
}
