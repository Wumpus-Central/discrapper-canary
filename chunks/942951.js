n.d(t, {
    l: function () {
        return f;
    }
});
var r = n(200651),
    o = n(192379),
    i = n(481060),
    a = n(100527),
    l = n(906732),
    c = n(184301),
    u = n(347475),
    s = n(592125),
    d = n(91047);
function f(e) {
    var t, n;
    let { user: f, channelId: m, guildId: p, messageId: _, stopPropagation: h = !1, ariaLabel: g } = e,
        { analyticsLocations: x } = (0, l.ZP)(a.Z.USERNAME);
    let v =
        ((t = f),
        (n = m),
        o.useCallback(
            (e) => {
                let r = s.Z.getChannel(n);
                null != r && null != t && (0, d.Pv)(e, t, r);
            },
            [t, n]
        ));
    return o.useCallback(
        (e) => (t, n) => {
            let o = (n) =>
                    (0, r.jsx)(i.NameWithRoleAnchor, {
                        ...(null != n ? n : {}),
                        onContextMenu: v,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': g
                    }),
                a = (e) => (t) => {
                    h && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(
                l.Gt,
                {
                    value: x,
                    children:
                        null != f
                            ? (0, r.jsx)(i.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, c.Z)(f.id, f.getAvatarURL(p, 80), {
                                          guildId: p,
                                          channelId: m
                                      }),
                                  renderPopout: (t) =>
                                      (0, r.jsx)(u.Z, {
                                          ...t,
                                          userId: f.id,
                                          guildId: p,
                                          channelId: m,
                                          messageId: _,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return o({
                                          onClick: a(t),
                                          ...n
                                      });
                                  }
                              })
                            : o(void 0)
                },
                n
            );
        },
        [x, f, m, p, _, v, h, g]
    );
}
