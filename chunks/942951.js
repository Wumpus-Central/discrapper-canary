r.d(t, { l: () => O });
var n = r(200651),
    l = r(192379),
    o = r(442837),
    i = r(481060),
    u = r(607070),
    a = r(100527),
    c = r(906732),
    s = r(181918),
    d = r(956226),
    f = r(184301),
    p = r(347475),
    b = r(592125),
    v = r(91047);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function O(e) {
    let { user: t, channelId: r, guildId: O, messageId: m, stopPropagation: y = !1, ariaLabel: j } = e,
        { analyticsLocations: w } = (0, c.ZP)(a.Z.USERNAME),
        P = (0, s.$V)(O, 'useUsernameHook'),
        I = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        S = l.useCallback(
            (e) => {
                let n = b.Z.getChannel(r);
                null != n && null != t && (0, v.Pv)(e, t, n);
            },
            [t, r]
        );
    return l.useCallback(
        (e) => (l, o) => {
            let u = null == e ? void 0 : e.colorStrings,
                a = P && null != u && null != u.primaryColor && null != u.secondaryColor ? (0, d.$)(u.primaryColor, u.secondaryColor, u.tertiaryColor, I) : void 0,
                s = (t) =>
                    (0, n.jsx)(
                        i.rz2,
                        h(g({}, null != t ? t : {}), {
                            onContextMenu: S,
                            name: l,
                            color: null == e ? void 0 : e.colorString,
                            roleName: null == e ? void 0 : e.colorRoleName,
                            roleGradient: a,
                            'aria-label': j
                        })
                    ),
                b = (e) => (t) => {
                    y && null != t && t.stopPropagation(), e(t);
                };
            return (0, n.jsx)(
                c.Gt,
                {
                    value: w,
                    children:
                        null != t
                            ? (0, n.jsx)(i.yRy, {
                                  position: 'right',
                                  preload: () =>
                                      (0, f.Z)(t.id, t.getAvatarURL(O, 80), {
                                          guildId: O,
                                          channelId: r
                                      }),
                                  renderPopout: (l) =>
                                      (0, n.jsx)(
                                          p.Z,
                                          h(g({}, l), {
                                              userId: t.id,
                                              guildId: O,
                                              channelId: r,
                                              messageId: m,
                                              roleId: null == e ? void 0 : e.colorRoleId
                                          })
                                      ),
                                  clickTrap: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          r = (function (e, t) {
                                              if (null == e) return {};
                                              var r,
                                                  n,
                                                  l = (function (e, t) {
                                                      if (null == e) return {};
                                                      var r,
                                                          n,
                                                          l = {},
                                                          o = Object.keys(e);
                                                      for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                                                      return l;
                                                  })(e, t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var o = Object.getOwnPropertySymbols(e);
                                                  for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                                              }
                                              return l;
                                          })(e, ['onClick']);
                                      return s(g({ onClick: b(t) }, r));
                                  }
                              })
                            : s(void 0)
                },
                o
            );
        },
        [w, t, r, O, m, S, y, j, P, I]
    );
}
