n.d(t, { Z: () => A });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(989573),
    l = n(176412),
    c = n(311819),
    u = n(433534),
    d = n(592125),
    f = n(944486),
    p = n(626135),
    _ = n(572004),
    m = n(591759),
    h = n(135431),
    g = n(621853),
    E = n(497805),
    b = n(732380),
    y = n(981631),
    O = n(388032);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e) {
    var { user: t, closePopout: n } = e,
        v = I(e, ["user", "closePopout"]);
    let T = i.useRef(null),
        A = (0, a.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        C = (0, a.e7)([f.Z, d.Z], () => d.Z.getChannel(f.Z.getChannelId())),
        N = (0, s.Z)(C),
        P = t.id,
        R = i.useCallback(() => {
            null != A &&
                (N
                    ? ((0, l.X)(A.id),
                      (0, o.Mr3)((0, E.z)(P, null == C ? void 0 : C.guild_id)),
                      null == n || n(),
                      p.default.track(y.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: A.id }))
                    : (0, h.L)(S({ applicationId: A.id }, A)));
        }, [A, N, P, null == C ? void 0 : C.guild_id, n]),
        D = N ? O.intl.string(O.t["Cia+A8"]) : O.intl.string(O.t.NgXl3C);
    if (null == A || !(0, u.Eb)(A)) return null;
    let { customInstallUrl: w } = A,
        x = null == w || m.Z.isDiscordUrl(w) ? o.qJs : o.Gr1,
        L = N ? void 0 : x;
    return _.wS
        ? (0, r.jsx)(o.yRy, {
              targetElementRef: T,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: "user-bot-profile-add-app",
                      onClose: t,
                      "aria-label": O.intl.string(O.t.dbkxVm),
                      onSelect: void 0,
                      children: (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.sNh, {
                              id: "copy",
                              label: O.intl.string(O.t.XWDihq),
                              action: () => (0, _.JG)((0, c.J)(A)),
                          }),
                      }),
                  });
              },
              children: (e) => {
                  var { onClick: t } = e,
                      n = I(e, ["onClick"]);
                  return (0, r.jsx)(
                      b.O1,
                      S(
                          {
                              buttonRef: T,
                              action: "PRESS_ADD_APP",
                              text: D,
                              icon: L,
                              onContextMenu: t,
                              onClick: R,
                          },
                          n,
                          v,
                      ),
                  );
              },
          })
        : (0, r.jsx)(
              b.O1,
              S(
                  {
                      action: "PRESS_ADD_APP",
                      text: D,
                      icon: L,
                      onClick: R,
                      variant: "primary",
                  },
                  v,
              ),
          );
}
