r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(580587),
    u = r(499254),
    c = r(827498),
    d = r(311819),
    f = r(541716),
    p = r(433355),
    h = r(592125),
    _ = r(944486),
    m = r(626135),
    g = r(572004),
    E = r(591759),
    v = r(135431),
    y = r(621853),
    b = r(429974),
    I = r(475413),
    T = r(981631),
    S = r(388032);
function A(e) {
    let { user: n, closePopout: r, ...A } = e,
        C = (0, o.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        N = (0, o.e7)([_.Z], () => _.Z.getChannelId()),
        R = (0, o.e7)([h.Z], () => {
            var e;
            return null === (e = h.Z.getChannel(N)) || void 0 === e ? void 0 : e.guild_id;
        }),
        O = (0, l.Z)({ channelId: null != N ? N : void 0 }),
        D = n.id,
        L = a.useCallback(() => {
            if (null != C) {
                if (O) {
                    let e = _.Z.getCurrentlySelectedChannelId(),
                        n = h.Z.getChannel(e),
                        i = null != p.ZP.getSidebarState(e) || (null == n ? void 0 : n.isGuildVocal()) ? f.Ie.SIDEBAR : f.Ie.NORMAL;
                    u.__(c._b.TEXT, i, { applicationId: C.id }), (0, s.closeModal)((0, b.z)(D, R)), null == r || r(), m.default.track(T.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: C.id });
                } else
                    (0, v.LO)({
                        applicationId: C.id,
                        ...C
                    });
            }
        }, [O, C, D, R, r]),
        x = O ? S.intl.string(S.t['Cia+Aw']) : S.intl.string(S.t.NgXl3N);
    if (null == C || !(0, v.Eb)(C)) return null;
    let { customInstallUrl: w } = C,
        P = null == w || E.Z.isDiscordUrl(w) ? s.PlusSmallIcon : s.LinkExternalSmallIcon,
        M = O ? void 0 : P;
    return g.wS
        ? (0, i.jsx)(s.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(s.Menu, {
                      navId: 'user-bot-profile-add-app',
                      onClose: n,
                      'aria-label': S.intl.string(S.t.dbkxVl),
                      onSelect: void 0,
                      children: (0, i.jsx)(s.MenuGroup, {
                          children: (0, i.jsx)(s.MenuItem, {
                              id: 'copy',
                              label: S.intl.string(S.t.XWDiho),
                              action: () => (0, g.JG)((0, d.J)(C))
                          })
                      })
                  });
              },
              children: (e) => {
                  let { onClick: n, ...r } = e;
                  return (0, i.jsx)(I.tG, {
                      action: 'PRESS_ADD_APP',
                      text: x,
                      icon: M,
                      onContextMenu: n,
                      onClick: L,
                      ...r,
                      ...A
                  });
              }
          })
        : (0, i.jsx)(I.tG, {
              action: 'PRESS_ADD_APP',
              text: x,
              icon: M,
              onClick: L,
              ...A
          });
}
