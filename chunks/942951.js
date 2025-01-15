t.d(n, {
    l: function () {
        return f;
    }
});
var r = t(200651),
    o = t(192379),
    a = t(481060),
    l = t(100527),
    i = t(906732),
    c = t(184301),
    u = t(347475),
    d = t(592125),
    s = t(91047);
function f(e) {
    var n, t;
    let { user: f, channelId: m, guildId: _, messageId: p, stopPropagation: x = !1, ariaLabel: h } = e,
        { analyticsLocations: g } = (0, i.ZP)(l.Z.USERNAME);
    let I =
        ((n = f),
        (t = m),
        o.useCallback(
            (e) => {
                let r = d.Z.getChannel(t);
                null != r && null != n && (0, s.Pv)(e, n, r);
            },
            [n, t]
        ));
    return o.useCallback(
        (e) => (n, t) => {
            let o = (t) =>
                    (0, r.jsx)(a.NameWithRoleAnchor, {
                        ...(null != t ? t : {}),
                        onContextMenu: I,
                        name: n,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': h
                    }),
                l = (e) => (n) => {
                    x && n.stopPropagation(), e(n);
                };
            return (0, r.jsx)(
                i.Gt,
                {
                    value: g,
                    children:
                        null != f
                            ? (0, r.jsx)(a.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, c.Z)(f.id, f.getAvatarURL(_, 80), {
                                          guildId: _,
                                          channelId: m
                                      }),
                                  renderPopout: (n) =>
                                      (0, r.jsx)(u.Z, {
                                          ...n,
                                          userId: f.id,
                                          guildId: _,
                                          channelId: m,
                                          messageId: p,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: n, ...t } = e;
                                      return o({
                                          onClick: l(n),
                                          ...t
                                      });
                                  }
                              })
                            : o(void 0)
                },
                t
            );
        },
        [g, f, m, _, p, I, x, h]
    );
}
