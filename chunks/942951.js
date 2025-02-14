n.d(t, { l: () => u });
var o = n(200651),
    r = n(192379),
    i = n(481060),
    c = n(100527),
    d = n(906732),
    l = n(184301),
    a = n(347475),
    s = n(592125),
    _ = n(91047);
function u(e) {
    let { user: t, channelId: n, guildId: u, messageId: f, stopPropagation: g = !1, ariaLabel: p } = e,
        { analyticsLocations: h } = (0, d.ZP)(c.Z.USERNAME),
        b = r.useCallback(
            (e) => {
                let o = s.Z.getChannel(n);
                null != o && null != t && (0, _.Pv)(e, t, o);
            },
            [t, n]
        );
    return r.useCallback(
        (e) => (r, c) => {
            let s = (t) =>
                    (0, o.jsx)(i.rz2, {
                        ...(null != t ? t : {}),
                        onContextMenu: b,
                        name: r,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': p
                    }),
                _ = (e) => (t) => {
                    g && t.stopPropagation(), e(t);
                };
            return (0, o.jsx)(
                d.Gt,
                {
                    value: h,
                    children:
                        null != t
                            ? (0, o.jsx)(i.yRy, {
                                  position: 'right',
                                  preload: () =>
                                      (0, l.Z)(t.id, t.getAvatarURL(u, 80), {
                                          guildId: u,
                                          channelId: n
                                      }),
                                  renderPopout: (r) =>
                                      (0, o.jsx)(a.Z, {
                                          ...r,
                                          userId: t.id,
                                          guildId: u,
                                          channelId: n,
                                          messageId: f,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return s({
                                          onClick: _(t),
                                          ...n
                                      });
                                  }
                              })
                            : s(void 0)
                },
                c
            );
        },
        [h, t, n, u, f, b, g, p]
    );
}
