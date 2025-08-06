n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(430824),
    s = n(594174),
    l = n(216572),
    c = n(262746),
    u = n(211640),
    d = n(436355),
    f = n(214110);
function _(e) {
    let { channel: t, message: n, snapshot: _ } = e,
        { moderatorReport: p } = _,
        h = null == p ? void 0 : p.reported_user_id,
        m = (0, o.e7)([s.default], () => (null != h ? s.default.getUser(h) : null)),
        g = (0, o.e7)([a.Z], () => a.Z.getGuild(t.guild_id));
    (0, l.Cv)(n);
    let E = (0, c.Z)({
            channel: t,
            user: m,
            guild: g
        }),
        b = (0, d.Z)({
            channel: t,
            user: m,
            guild: g
        }),
        y = [
            (0, u.Z)({
                channel: t,
                message: n,
                user: m,
                guild: g
            }),
            E,
            b,
            (0, f.Z)({
                channel: t,
                user: m,
                guild: g
            })
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== y.length ? (0, r.jsx)(r.Fragment, { children: y.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t)) }) : null;
}
function p(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, r.jsx)(
                _,
                {
                    channel: n,
                    message: t,
                    snapshot: e
                },
                i
            )
        )
    });
}
