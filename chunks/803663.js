n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(359110),
    o = n(922482),
    s = n(146085),
    l = n(750154),
    c = n(592125),
    u = n(496675),
    d = n(979651),
    f = n(475413),
    _ = n(388032);
function p(e) {
    let { activity: t, onAction: n, onClose: p } = e,
        h = (0, l.rq)(t),
        { channelId: m, guildId: g } = null != h ? h : {},
        E = (0, i.e7)([d.Z], () => null != m && d.Z.isInChannel(m), [m]),
        b = (0, i.e7)([c.Z], () => (null != m ? c.Z.getChannel(m) : null), [m]),
        y = (0, i.e7)([u.Z], () => null != b && u.Z.can(s.gl, b), [b]);
    if (!(0, l.dS)(t) || !y || null == g || null == m) return null;
    let v = (e) => {
        e.stopPropagation(), null == n || n({ action: 'PRESS_STAGE_CHANNEL_LISTEN_BUTTON' }), o.AC(g, m), (0, a.Kh)(m), null == p || p();
    };
    return (0, r.jsx)(f.tG, {
        text: _.NW.string(_.t.ZYO5OD),
        fullWidth: !0,
        disabled: E,
        onClick: v
    });
}
