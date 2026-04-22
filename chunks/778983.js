n.d(t, { A: () => g });
var i = n(627968),
    l = n(311907),
    a = n(862482),
    s = n(241326),
    r = n(351001),
    o = n(145530),
    c = n(734057),
    d = n(320501),
    u = n(576705),
    h = n(102817),
    m = n(221314),
    A = n(985018);
function g(e) {
    let { message: t, user: n, guild: g, channel: p } = e,
        _ = (0, l.bG)([u.A], () => null != n && null != g && (0, r.Kd)(n, g, [u.A])),
        { messageReference: f } = t,
        E = (0, l.bG)([d.A], () => (null != f ? d.A.getMessage(f.channel_id, f.message_id) : null)),
        C = (0, l.bG)([c.A], () => (null != E ? c.A.getChannel(E.channel_id) : null)),
        x = (0, l.bG)([c.A], () => c.A.getChannel(p.id)?.isArchivedThread() ?? !1);
    if (!_) return null;
    let S = null == E ? A.intl.string(m.default["0IZbwC"]) : A.intl.string(m.default.Uj6oD4),
        I = null == E,
        N = `delete-message-${t.id}`;
    return (0, i.jsx)(
        h.A,
        {
            text: S,
            icon: s.u,
            onClick: () => {
                null != C &&
                    null != E &&
                    o.A.confirmDelete(C, E, !1, { isFlagResolved: x, moderatorReportChannelId: p.id });
            },
            disabled: I,
            color: a.$n.Colors.RED,
        },
        N,
    );
}
