n.d(t, { Z: () => m });
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
    _ = n(732380),
    p = n(671955),
    h = n(388032);
function m(e) {
    let { activity: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, f.z)(),
        E = g === p.l.MODAL_V2,
        b = (0, l.rq)(t),
        { channelId: y, guildId: O } = null != b ? b : {},
        v = (0, i.e7)([d.Z], () => null != y && d.Z.isInChannel(y), [y]),
        I = (0, i.e7)([c.Z], () => (null != y ? c.Z.getChannel(y) : null), [y]),
        T = (0, i.e7)([u.Z], () => null != I && u.Z.can(s.gl, I), [I]);
    if (!(0, l.dS)(t) || !T || null == O || null == y) return null;
    let S = (e) => {
        e.stopPropagation(),
            null == n || n({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
            o.AC(O, y),
            (0, a.Kh)(y),
            null == m || m();
    };
    return (0, r.jsx)(_.O1, {
        text: h.intl.string(h.t.ZYO5OK),
        fullWidth: !E,
        disabled: v,
        onClick: S,
    });
}
