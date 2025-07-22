n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(580587),
    l = n(499254),
    c = n(827498),
    u = n(311819),
    d = n(433534),
    _ = n(541716),
    f = n(433355),
    p = n(592125),
    h = n(944486),
    m = n(626135),
    g = n(572004),
    E = n(591759),
    b = n(135431),
    y = n(621853),
    O = n(497805),
    v = n(475413),
    I = n(981631),
    T = n(388032);
function S(e, t, n) {
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function R(e) {
    var { user: t, closePopout: n } = e,
        S = N(e, ['user', 'closePopout']);
    let C = i.useRef(null),
        R = (0, a.e7)([y.Z], () => {
            var e;
            return null == (e = y.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        P = (0, a.e7)([h.Z], () => h.Z.getChannelId()),
        w = (0, a.e7)([p.Z], () => p.Z.getChannel(P)),
        D = (0, a.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getChannel(P)) ? void 0 : e.guild_id;
        }),
        L = i.useMemo(
            () =>
                null != w
                    ? {
                          channel: w,
                          type: 'channel'
                      }
                    : { type: 'contextless' },
            [w]
        ),
        x = (0, s.Z)({ context: L }),
        M = t.id,
        k = i.useCallback(() => {
            if (null != R)
                if (x) {
                    let e = h.Z.getCurrentlySelectedChannelId(),
                        t = p.Z.getChannel(e),
                        r = null != f.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? _.Ie.SIDEBAR : _.Ie.NORMAL;
                    (l.__(c._b.TEXT, r, { applicationId: R.id }), (0, o.Mr3)((0, O.z)(M, D)), null == n || n(), m.default.track(I.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: R.id }));
                } else (0, b.L)(A({ applicationId: R.id }, R));
        }, [x, R, M, D, n]),
        j = x ? T.intl.string(T.t['Cia+Aw']) : T.intl.string(T.t.NgXl3N);
    if (null == R || !(0, d.Eb)(R)) return null;
    let { customInstallUrl: U } = R,
        G = null == U || E.Z.isDiscordUrl(U) ? o.qJs : o.Gr1,
        B = x ? void 0 : G;
    return g.wS
        ? (0, r.jsx)(o.yRy, {
              targetElementRef: C,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: 'user-bot-profile-add-app',
                      onClose: t,
                      'aria-label': T.intl.string(T.t.dbkxVl),
                      onSelect: void 0,
                      children: (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.sNh, {
                              id: 'copy',
                              label: T.intl.string(T.t.XWDiho),
                              action: () => (0, g.JG)((0, u.J)(R))
                          })
                      })
                  });
              },
              children: (e) => {
                  var { onClick: t } = e,
                      n = N(e, ['onClick']);
                  return (0, r.jsx)(
                      v.tG,
                      A(
                          {
                              ref: C,
                              action: 'PRESS_ADD_APP',
                              text: j,
                              icon: B,
                              onContextMenu: t,
                              onClick: k
                          },
                          n,
                          S
                      )
                  );
              }
          })
        : (0, r.jsx)(
              v.tG,
              A(
                  {
                      action: 'PRESS_ADD_APP',
                      text: j,
                      icon: B,
                      onClick: k
                  },
                  S
              )
          );
}
