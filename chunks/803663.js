n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(359110),
    o = n(922482),
    s = n(146085),
    l = n(750154),
    c = n(592125),
    u = n(496675),
    d = n(979651),
    f = n(652853),
    p = n(732380),
    _ = n(671955),
    m = n(388032);
function h(e) {
    let { activity: t, onAction: n, onClose: h } = e,
        { themeType: g } = (0, f.z)(),
        E = g === _.l.MODAL_V2,
        b = (0, l.rq)(t),
        { channelId: y, guildId: O } = null != b ? b : {},
        v = (0, i.e7)([d.Z], () => null != y && d.Z.isInChannel(y), [y]),
        S = (0, i.e7)([c.Z], () => (null != y ? c.Z.getChannel(y) : null), [y]),
        I = (0, i.e7)([u.Z], () => null != S && u.Z.can(s.gl, S), [S]);
    if (!(0, l.dS)(t) || !I || null == O || null == y) return null;
    let T = (e) => {
        e.stopPropagation(),
            null == n || n({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
            o.AC(O, y),
            (0, a.Kh)(y),
            null == h || h();
    };
    return (0, r.jsx)(p.O1, {
        text: m.intl.string(m.t.ZYO5OK),
        fullWidth: !E,
        disabled: v,
        onClick: T,
    });
}
