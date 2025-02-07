t.d(n, { l: () => _ });
var r = t(200651),
    o = t(192379),
    l = t(481060),
    a = t(100527),
    i = t(906732),
    c = t(184301),
    d = t(347475),
    u = t(592125),
    s = t(91047);
function _(e) {
    let { user: n, channelId: t, guildId: _, messageId: f, stopPropagation: m = !1, ariaLabel: p } = e,
        { analyticsLocations: g } = (0, i.ZP)(a.Z.USERNAME),
        h = o.useCallback(
            (e) => {
                let r = u.Z.getChannel(t);
                null != r && null != n && (0, s.Pv)(e, n, r);
            },
            [n, t]
        );
    return o.useCallback(
        (e) => (o, a) => {
            let u = (n) =>
                    (0, r.jsx)(l.rz2, {
                        ...(null != n ? n : {}),
                        onContextMenu: h,
                        name: o,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': p
                    }),
                s = (e) => (n) => {
                    m && n.stopPropagation(), e(n);
                };
            return (0, r.jsx)(
                i.Gt,
                {
                    value: g,
                    children:
                        null != n
                            ? (0, r.jsx)(l.yRy, {
                                  position: 'right',
                                  preload: () =>
                                      (0, c.Z)(n.id, n.getAvatarURL(_, 80), {
                                          guildId: _,
                                          channelId: t
                                      }),
                                  renderPopout: (o) =>
                                      (0, r.jsx)(d.Z, {
                                          ...o,
                                          userId: n.id,
                                          guildId: _,
                                          channelId: t,
                                          messageId: f,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: n, ...t } = e;
                                      return u({
                                          onClick: s(n),
                                          ...t
                                      });
                                  }
                              })
                            : u(void 0)
                },
                a
            );
        },
        [g, n, t, _, f, h, m, p]
    );
}
