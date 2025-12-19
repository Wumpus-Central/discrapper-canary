n.d(t, { Z: () => h });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(430824),
    o = n(594174),
    s = n(216572),
    c = n(262746),
    u = n(211640),
    d = n(436355),
    p = n(214110);
function f(e) {
    let { channel: t, message: n, snapshot: f } = e,
        { moderatorReport: h } = f,
        m = null == h ? void 0 : h.reported_user_id,
        g = (0, l.e7)([o.default], () => (null != m ? o.default.getUser(m) : null)),
        b = (0, l.e7)([a.Z], () => a.Z.getGuild(t.guild_id));
    (0, s.Cv)(n);
    let y = (0, c.Z)({
            channel: t,
            user: g,
            guild: b,
        }),
        C = (0, d.Z)({
            channel: t,
            user: g,
            guild: b,
        }),
        v = [
            (0, u.Z)({
                channel: t,
                message: n,
                user: g,
                guild: b,
            }),
            y,
            C,
            (0, p.Z)({
                channel: t,
                user: g,
                guild: b,
            }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== v.length
        ? (0, i.jsx)(i.Fragment, { children: v.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)) })
        : null;
}
function h(e) {
    let { message: t, channel: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, r) =>
            (0, i.jsx)(
                f,
                {
                    channel: n,
                    message: t,
                    snapshot: e,
                },
                r,
            ),
        ),
    });
}
