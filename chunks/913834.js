n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(100527),
    s = n(873128),
    a = n(704041),
    c = n(986398),
    u = n(463031),
    d = n(791644);
function p(e) {
    let { guild: t, message: n } = e,
        p = l.useRef(null),
        [m, g] = l.useState(!1),
        f = l.useRef(!1),
        b = (0, s.Z)({
            guildId: t.id,
            leaderboardId: u.z,
            intervalOffset: 0
        }),
        h = l.useMemo(() => {
            var e;
            if ((null == b || null == (e = b.guild_settings) ? void 0 : e.show_winner_crown) !== !0) return !1;
            let t = b.users[0];
            return n.author.id === (null == t ? void 0 : t.user_id);
        }, [b, n]);
    return null != b && h
        ? (0, r.jsx)('div', {
              className: d.badge,
              onMouseEnter: () => {
                  (f.current = !0), g(!0);
              },
              onMouseLeave: () => {
                  (f.current = !1),
                      setTimeout(() => {
                          f.current || g(!1);
                      }, 100);
              },
              children: (0, r.jsx)(o.yRy, {
                  targetElementRef: p,
                  animation: o.yRy.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'top',
                  shouldShow: m,
                  renderPopout: () =>
                      (0, r.jsx)(a.Z, {
                          guildId: t.id,
                          previewMode: !0,
                          source: i.Z.MEMBER_LIST,
                          leaderboardId: b.leaderboard_id
                      }),
                  children: () =>
                      (0, r.jsx)(c.Z, {
                          leaderboard: b,
                          className: d.image,
                          ref: p
                      })
              })
          })
        : null;
}
