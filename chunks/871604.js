n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(989573),
    l = n(499254),
    c = n(827498),
    u = n(311819),
    d = n(433534),
    f = n(541716),
    p = n(433355),
    _ = n(592125),
    m = n(944486),
    h = n(626135),
    g = n(572004),
    E = n(591759),
    b = n(135431),
    y = n(621853),
    O = n(497805),
    v = n(732380),
    S = n(981631),
    I = n(388032);
function T(e, t, n) {
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
                T(e, t, n[t]);
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
function P(e) {
    var { user: t, closePopout: n } = e,
        T = C(e, ["user", "closePopout"]);
    let N = i.useRef(null),
        P = (0, a.e7)([y.Z], () => {
            var e;
            return null == (e = y.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        R = (0, a.e7)([m.Z, _.Z], () => _.Z.getChannel(m.Z.getChannelId())),
        w = (0, s.Z)(R),
        D = t.id,
        x = i.useCallback(() => {
            if (null != P)
                if (w) {
                    let e = m.Z.getCurrentlySelectedChannelId(),
                        t = _.Z.getChannel(e),
                        r =
                            null != p.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal())
                                ? f.Ie.SIDEBAR
                                : f.Ie.NORMAL;
                    l._(c._b.TEXT, r, { applicationId: P.id }),
                        (0, o.Mr3)((0, O.z)(D, null == R ? void 0 : R.guild_id)),
                        null == n || n(),
                        h.default.track(S.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: P.id });
                } else (0, b.L)(A({ applicationId: P.id }, P));
        }, [P, w, D, null == R ? void 0 : R.guild_id, n]),
        L = w ? I.intl.string(I.t["Cia+A8"]) : I.intl.string(I.t.NgXl3C);
    if (null == P || !(0, d.Eb)(P)) return null;
    let { customInstallUrl: j } = P,
        M = null == j || E.Z.isDiscordUrl(j) ? o.qJs : o.Gr1,
        k = w ? void 0 : M;
    return g.wS
        ? (0, r.jsx)(o.yRy, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: "user-bot-profile-add-app",
                      onClose: t,
                      "aria-label": I.intl.string(I.t.dbkxVm),
                      onSelect: void 0,
                      children: (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.sNh, {
                              id: "copy",
                              label: I.intl.string(I.t.XWDihq),
                              action: () => (0, g.JG)((0, u.J)(P)),
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
                          T,
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
                  T,
              ),
          );
}
