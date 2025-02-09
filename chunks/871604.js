n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(580587),
    l = n(499254),
    u = n(827498),
    c = n(311819),
    d = n(541716),
    f = n(433355),
    _ = n(592125),
    p = n(944486),
    h = n(626135),
    m = n(572004),
    g = n(591759),
    E = n(135431),
    v = n(621853),
    y = n(429974),
    I = n(475413),
    T = n(981631),
    b = n(388032);
function S(e) {
    let { user: t, closePopout: n, ...S } = e,
        A = (0, a.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        N = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        C = (0, a.e7)([_.Z], () => _.Z.getChannel(N)),
        R = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getChannel(N)) || void 0 === e ? void 0 : e.guild_id;
        }),
        O = r.useMemo(
            () =>
                null != C
                    ? {
                          channel: C,
                          type: 'channel'
                      }
                    : { type: 'contextless' },
            [C]
        ),
        D = (0, o.Z)({ context: O }),
        L = t.id,
        x = r.useCallback(() => {
            if (null != A) {
                if (D) {
                    let e = p.Z.getCurrentlySelectedChannelId(),
                        t = _.Z.getChannel(e),
                        i = null != f.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? d.Ie.SIDEBAR : d.Ie.NORMAL;
                    l.__(u._b.TEXT, i, { applicationId: A.id }), (0, s.Mr3)((0, y.z)(L, R)), null == n || n(), h.default.track(T.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: A.id });
                } else
                    (0, E.LO)({
                        applicationId: A.id,
                        ...A
                    });
            }
        }, [D, A, L, R, n]),
        w = D ? b.intl.string(b.t['Cia+Aw']) : b.intl.string(b.t.NgXl3N);
    if (null == A || !(0, E.Eb)(A)) return null;
    let { customInstallUrl: P } = A,
        M = null == P || g.Z.isDiscordUrl(P) ? s.qJs : s.Gr1,
        k = D ? void 0 : M;
    return m.wS
        ? (0, i.jsx)(s.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(s.v2r, {
                      navId: 'user-bot-profile-add-app',
                      onClose: t,
                      'aria-label': b.intl.string(b.t.dbkxVl),
                      onSelect: void 0,
                      children: (0, i.jsx)(s.kSQ, {
                          children: (0, i.jsx)(s.sNh, {
                              id: 'copy',
                              label: b.intl.string(b.t.XWDiho),
                              action: () => (0, m.JG)((0, c.J)(A))
                          })
                      })
                  });
              },
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)(I.tG, {
                      action: 'PRESS_ADD_APP',
                      text: w,
                      icon: k,
                      onContextMenu: t,
                      onClick: x,
                      ...n,
                      ...S
                  });
              }
          })
        : (0, i.jsx)(I.tG, {
              action: 'PRESS_ADD_APP',
              text: w,
              icon: k,
              onClick: x,
              ...S
          });
}
