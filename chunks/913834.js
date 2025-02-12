n.d(t, { Z: () => p }), n(47120);
var a = n(200651),
    o = n(192379),
    i = n(481060),
    r = n(100527),
    s = n(873128),
    l = n(704041),
    c = n(986398),
    u = n(463031),
    d = n(823261);
function p(e) {
    let { guild: t, message: n } = e,
        [p, m] = o.useState(!1),
        g = o.useRef(!1),
        _ = (0, s.Z)({
            guildId: t.id,
            leaderboardId: u.z,
            intervalOffset: 0
        }),
        h = o.useMemo(() => {
            var e;
            if ((null == _ ? void 0 : null === (e = _.guild_settings) || void 0 === e ? void 0 : e.show_winner_crown) !== !0) return !1;
            let t = _.users[0];
            return n.author.id === (null == t ? void 0 : t.user_id);
        }, [_, n]);
    return null != _ && h
        ? (0, a.jsx)('div', {
              className: d.badge,
              onMouseEnter: () => {
                  (g.current = !0), m(!0);
              },
              onMouseLeave: () => {
                  (g.current = !1),
                      setTimeout(() => {
                          g.current || m(!1);
                      }, 100);
              },
              children: (0, a.jsx)(i.yRy, {
                  animation: i.yRy.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'top',
                  shouldShow: p,
                  renderPopout: () =>
                      (0, a.jsx)(l.Z, {
                          guildId: t.id,
                          previewMode: !0,
                          source: r.Z.MEMBER_LIST,
                          leaderboardId: _.leaderboard_id
                      }),
                  children: () =>
                      (0, a.jsx)(c.Z, {
                          leaderboard: _,
                          className: d.image
                      })
              })
          })
        : null;
}
