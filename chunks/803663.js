n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(359110),
    s = n(922482),
    l = n(146085),
    c = n(750154),
    u = n(592125),
    d = n(496675),
    f = n(979651),
    _ = n(652853),
    p = n(475413),
    h = n(228168),
    m = n(388032);
function g(e) {
    let { activity: t, onAction: n, onClose: g } = e,
        { themeType: E } = (0, _.z)(),
        b = (0, c.rq)(t),
        { channelId: y, guildId: v } = null != b ? b : {},
        O = (0, i.e7)([f.Z], () => null != y && f.Z.isInChannel(y), [y]),
        I = (0, i.e7)([u.Z], () => (null != y ? u.Z.getChannel(y) : null), [y]),
        S = (0, i.e7)([d.Z], () => null != I && d.Z.can(l.gl, I), [I]);
    if (!(0, c.dS)(t) || !S || null == v || null == y) return null;
    let T = (e) => {
        e.stopPropagation(), null == n || n({ action: 'PRESS_STAGE_CHANNEL_LISTEN_BUTTON' }), s.AC(v, y), (0, o.Kh)(y), null == g || g();
    };
    return E === h.lY.MODAL_V2
        ? (0, r.jsx)(p.tG, {
              text: m.intl.string(m.t.ZYO5OD),
              size: a.PhG.TINY,
              themeColor: 'none',
              disabled: O,
              onClick: T
          })
        : (0, r.jsx)(p.tG, {
              text: m.intl.string(m.t.ZYO5OD),
              fullWidth: !0,
              disabled: O,
              onClick: T
          });
}
