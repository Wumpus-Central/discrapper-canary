n.d(t, { Z: () => p }), n(388685);
var r = n(200651),
    o = n(192379),
    a = n(481060),
    i = n(100527),
    s = n(873128),
    l = n(704041),
    c = n(986398),
    u = n(463031),
    d = n(298338);
function p(e) {
    let { guild: t, message: n } = e,
        [p, g] = o.useState(!1),
        m = o.useRef(!1),
        f = (0, s.Z)({
            guildId: t.id,
            leaderboardId: u.z,
            intervalOffset: 0
        }),
        b = o.useMemo(() => {
            var e;
            if ((null == f || null == (e = f.guild_settings) ? void 0 : e.show_winner_crown) !== !0) return !1;
            let t = f.users[0];
            return n.author.id === (null == t ? void 0 : t.user_id);
        }, [f, n]);
    return null != f && b
        ? (0, r.jsx)('div', {
              className: d.badge,
              onMouseEnter: () => {
                  (m.current = !0), g(!0);
              },
              onMouseLeave: () => {
                  (m.current = !1),
                      setTimeout(() => {
                          m.current || g(!1);
                      }, 100);
              },
              children: (0, r.jsx)(a.yRy, {
                  animation: a.yRy.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'top',
                  shouldShow: p,
                  renderPopout: () =>
                      (0, r.jsx)(l.Z, {
                          guildId: t.id,
                          previewMode: !0,
                          source: i.Z.MEMBER_LIST,
                          leaderboardId: f.leaderboard_id
                      }),
                  children: () =>
                      (0, r.jsx)(c.Z, {
                          leaderboard: f,
                          className: d.image
                      })
              })
          })
        : null;
}
