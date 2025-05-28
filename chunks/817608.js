n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(271383),
    o = n(430824),
    s = n(594174),
    c = n(216572),
    u = n(262746),
    d = n(211640),
    p = n(436355),
    h = n(214110);
function f(e) {
    let { channel: t, message: n, snapshot: f } = e,
        { moderatorReport: m } = f,
        g = null == m ? void 0 : m.reported_user_id,
        b = (0, l.e7)([s.default], () => (null != g ? s.default.getUser(g) : null)),
        _ = (0, l.e7)([o.Z], () => o.Z.getGuild(t.guild_id)),
        x = (0, l.e7)([a.ZP], () => (null != b ? a.ZP.getMember(t.guild_id, null == b ? void 0 : b.id) : null));
    (0, c.Cv)(n);
    let y = (0, u.Z)({
            channel: t,
            user: b,
            guild: _
        }),
        C = (0, p.Z)({
            channel: t,
            user: b,
            member: x,
            guild: _
        }),
        v = [
            (0, d.Z)({
                message: n,
                user: b,
                guild: _
            }),
            y,
            C,
            (0, h.Z)({
                channel: t,
                user: b,
                guild: _
            })
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== v.length ? (0, r.jsx)(r.Fragment, { children: v.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t)) }) : null;
}
function m(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, r.jsx)(
                f,
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
