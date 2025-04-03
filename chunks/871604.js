n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(580587),
    l = n(499254),
    c = n(827498),
    u = n(311819),
    d = n(433534),
    f = n(541716),
    _ = n(433355),
    p = n(592125),
    h = n(944486),
    m = n(626135),
    g = n(572004),
    E = n(591759),
    b = n(135431),
    y = n(621853),
    v = n(429974),
    O = n(475413),
    I = n(981631),
    S = n(388032);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    var { user: t, closePopout: n } = e,
        T = A(e, ['user', 'closePopout']);
    let C = (0, o.e7)([y.Z], () => {
            var e;
            return null == (e = y.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        R = (0, o.e7)([h.Z], () => h.Z.getChannelId()),
        P = (0, o.e7)([p.Z], () => p.Z.getChannel(R)),
        w = (0, o.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getChannel(R)) ? void 0 : e.guild_id;
        }),
        D = i.useMemo(
            () =>
                null != P
                    ? {
                          channel: P,
                          type: 'channel'
                      }
                    : { type: 'contextless' },
            [P]
        ),
        L = (0, s.Z)({ context: D }),
        x = t.id,
        M = i.useCallback(() => {
            if (null != C)
                if (L) {
                    let e = h.Z.getCurrentlySelectedChannelId(),
                        t = p.Z.getChannel(e),
                        r = null != _.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? f.Ie.SIDEBAR : f.Ie.NORMAL;
                    l.__(c._b.TEXT, r, { applicationId: C.id }), (0, a.Mr3)((0, v.z)(x, w)), null == n || n(), m.default.track(I.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: C.id });
                } else (0, b.L)(N({ applicationId: C.id }, C));
        }, [L, C, x, w, n]),
        k = L ? S.NW.string(S.t['Cia+Aw']) : S.NW.string(S.t.NgXl3N);
    if (null == C || !(0, d.E)(C)) return null;
    let { customInstallUrl: j } = C,
        U = null == j || E.Z.isDiscordUrl(j) ? a.qJs : a.Gr1,
        G = L ? void 0 : U;
    return g.wS
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
                              action: () => (0, g.JG)((0, u.J)(C))
                          })
                      })
                  });
              },
              children: (e) => {
                  var { onClick: t } = e,
                      n = A(e, ['onClick']);
                  return (0, r.jsx)(
                      O.tG,
                      N(
                          {
                              action: 'PRESS_ADD_APP',
                              text: k,
                              icon: G,
                              onContextMenu: t,
                              onClick: M
                          },
                          n,
                          T
                      )
                  );
              }
          })
        : (0, r.jsx)(
              O.tG,
              N(
                  {
                      action: 'PRESS_ADD_APP',
                      text: k,
                      icon: G,
                      onClick: M
                  },
                  T
              )
          );
}
