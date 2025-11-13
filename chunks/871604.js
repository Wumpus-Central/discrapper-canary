n.d(t, { Z: () => R });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(989573),
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
    O = n(497805),
    v = n(732380),
    I = n(981631),
    T = n(388032);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    var { user: t, closePopout: n } = e,
        S = C(e, ["user", "closePopout"]);
    let N = i.useRef(null),
        R = (0, a.e7)([y.Z], () => {
            var e;
            return null == (e = y.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        P = (0, a.e7)([h.Z, p.Z], () => p.Z.getChannel(h.Z.getChannelId())),
        D = (0, s.Z)(P),
        w = t.id,
        x = i.useCallback(() => {
            if (null != R)
                if (D) {
                    let e = h.Z.getCurrentlySelectedChannelId(),
                        t = p.Z.getChannel(e),
                        r =
                            null != _.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal())
                                ? f.Ie.SIDEBAR
                                : f.Ie.NORMAL;
                    l._(c._b.TEXT, r, { applicationId: R.id }),
                        (0, o.Mr3)((0, O.z)(w, null == P ? void 0 : P.guild_id)),
                        null == n || n(),
                        m.default.track(I.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: R.id });
                } else (0, b.L)(A({ applicationId: R.id }, R));
        }, [R, D, w, null == P ? void 0 : P.guild_id, n]),
        L = D ? T.intl.string(T.t["Cia+A8"]) : T.intl.string(T.t.NgXl3C);
    if (null == R || !(0, d.Eb)(R)) return null;
    let { customInstallUrl: M } = R,
        j = null == M || E.Z.isDiscordUrl(M) ? o.qJs : o.Gr1,
        k = D ? void 0 : j;
    return g.wS
        ? (0, r.jsx)(o.yRy, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: "user-bot-profile-add-app",
                      onClose: t,
                      "aria-label": T.intl.string(T.t.dbkxVm),
                      onSelect: void 0,
                      children: (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.sNh, {
                              id: "copy",
                              label: T.intl.string(T.t.XWDihq),
                              action: () => (0, g.JG)((0, u.J)(R)),
                          }),
                      }),
                  });
              },
              children: (e) => {
                  var { onClick: t } = e,
                      n = C(e, ["onClick"]);
                  return (0, r.jsx)(
                      v.O1,
                      A(
                          {
                              buttonRef: N,
                              action: "PRESS_ADD_APP",
                              text: L,
                              icon: k,
                              onContextMenu: t,
                              onClick: x,
                          },
                          n,
                          S,
                      ),
                  );
              },
          })
        : (0, r.jsx)(
              v.O1,
              A(
                  {
                      action: "PRESS_ADD_APP",
                      text: L,
                      icon: k,
                      onClick: x,
                      variant: "primary",
                  },
                  S,
              ),
          );
}
