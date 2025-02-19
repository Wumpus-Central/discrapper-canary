n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(580587),
    l = n(499254),
    c = n(827498),
    u = n(311819),
    d = n(541716),
    f = n(433355),
    p = n(592125),
    _ = n(944486),
    h = n(626135),
    m = n(572004),
    g = n(591759),
    E = n(135431),
    v = n(621853),
    b = n(429974),
    y = n(475413),
    O = n(981631),
    S = n(388032);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function C(e) {
    var { user: t, closePopout: n } = e,
        I = N(e, ['user', 'closePopout']);
    let A = (0, o.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        C = (0, o.e7)([_.Z], () => _.Z.getChannelId()),
        R = (0, o.e7)([p.Z], () => p.Z.getChannel(C)),
        P = (0, o.e7)([p.Z], () => {
            var e;
            return null === (e = p.Z.getChannel(C)) || void 0 === e ? void 0 : e.guild_id;
        }),
        w = i.useMemo(
            () =>
                null != R
                    ? {
                          channel: R,
                          type: 'channel'
                      }
                    : { type: 'contextless' },
            [R]
        ),
        D = (0, s.Z)({ context: w }),
        x = t.id,
        L = i.useCallback(() => {
            if (null != A) {
                if (D) {
                    let e = _.Z.getCurrentlySelectedChannelId(),
                        t = p.Z.getChannel(e),
                        r = null != f.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? d.Ie.SIDEBAR : d.Ie.NORMAL;
                    l.__(c._b.TEXT, r, { applicationId: A.id }), (0, a.Mr3)((0, b.z)(x, P)), null == n || n(), h.default.track(O.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: A.id });
                } else (0, E.LO)(T({ applicationId: A.id }, A));
            }
        }, [D, A, x, P, n]),
        M = D ? S.NW.string(S.t['Cia+Aw']) : S.NW.string(S.t.NgXl3N);
    if (null == A || !(0, E.Eb)(A)) return null;
    let { customInstallUrl: k } = A,
        j = null == k || g.Z.isDiscordUrl(k) ? a.qJs : a.Gr1,
        U = D ? void 0 : j;
    return m.wS
        ? (0, r.jsx)(a.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.v2r, {
                      navId: 'user-bot-profile-add-app',
                      onClose: t,
                      'aria-label': S.NW.string(S.t.dbkxVl),
                      onSelect: void 0,
                      children: (0, r.jsx)(a.kSQ, {
                          children: (0, r.jsx)(a.sNh, {
                              id: 'copy',
                              label: S.NW.string(S.t.XWDiho),
                              action: () => (0, m.JG)((0, u.J)(A))
                          })
                      })
                  });
              },
              children: (e) => {
                  var { onClick: t } = e,
                      n = N(e, ['onClick']);
                  return (0, r.jsx)(
                      y.tG,
                      T(
                          {
                              action: 'PRESS_ADD_APP',
                              text: M,
                              icon: U,
                              onContextMenu: t,
                              onClick: L
                          },
                          n,
                          I
                      )
                  );
              }
          })
        : (0, r.jsx)(
              y.tG,
              T(
                  {
                      action: 'PRESS_ADD_APP',
                      text: M,
                      icon: U,
                      onClick: L
                  },
                  I
              )
          );
}
