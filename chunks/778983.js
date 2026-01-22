n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(311907),
    i = n(421380),
    a = n(397927),
    s = n(351001),
    o = n(145530),
    c = n(734057),
    u = n(320501),
    d = n(576705),
    f = n(102817),
    p = n(641131),
    h = n(985018);

function b(e) {
    let { message: t, user: n, guild: b, channel: g } = e,
        m = (0, l.bG)([d.A], () => null != n && null != b && (0, s.Kd)(n, b, [d.A])),
        { messageReference: A } = t,
        y = (0, l.bG)([u.A], () => (null != A ? u.A.getMessage(A.channel_id, A.message_id) : null)),
        O = (0, l.bG)([c.A], () => (null != y ? c.A.getChannel(y.channel_id) : null)),
        j = (0, l.bG)([c.A], () => {
            var e, t;
            return null != (e = null == (t = c.A.getChannel(g.id)) ? void 0 : t.isArchivedThread()) && e;
        });
    if (!m) return null;
    let v = null == y ? h.intl.string(p.default["0IZbwC"]) : h.intl.string(p.default.Uj6oD4),
        x = null == y,
        E = "delete-message-".concat(t.id);
    return (0, r.jsx)(
        f.A,
        {
            text: v,
            icon: a.ucK,
            onClick: () => {
                null != O &&
                    null != y &&
                    o.A.confirmDelete(O, y, !1, {
                        isFlagResolved: j,
                        moderatorReportChannelId: g.id,
                    });
            },
            disabled: x,
            color: i.$n.Colors.RED,
        },
        E,
    );
}
