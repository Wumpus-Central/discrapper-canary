n.d(t, { A: () => p });
var i = n(627968),
    l = n(311907),
    a = n(421380),
    s = n(397927),
    r = n(351001),
    o = n(145530),
    c = n(734057),
    d = n(320501),
    u = n(576705),
    h = n(102817),
    m = n(641131),
    A = n(985018);
function p(e) {
    let { message: t, user: n, guild: p, channel: g } = e,
        f = (0, l.bG)([u.A], () => null != n && null != p && (0, r.Kd)(n, p, [u.A])),
        { messageReference: _ } = t,
        E = (0, l.bG)([d.A], () => (null != _ ? d.A.getMessage(_.channel_id, _.message_id) : null)),
        C = (0, l.bG)([c.A], () => (null != E ? c.A.getChannel(E.channel_id) : null)),
        x = (0, l.bG)([c.A], () => c.A.getChannel(g.id)?.isArchivedThread() ?? !1);
    if (!f) return null;
    let S = null == E ? A.intl.string(m.default["0IZbwC"]) : A.intl.string(m.default.Uj6oD4),
        T = null == E,
        I = `delete-message-${t.id}`;
    return (0, i.jsx)(
        h.A,
        {
            text: S,
            icon: s.ucK,
            onClick: () => {
                null != C &&
                    null != E &&
                    o.A.confirmDelete(C, E, !1, { isFlagResolved: x, moderatorReportChannelId: g.id });
            },
            disabled: T,
            color: a.$n.Colors.RED,
        },
        I,
    );
}
