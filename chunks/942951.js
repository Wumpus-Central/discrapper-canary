n.d(t, { l: () => b }), n(388685);
var i = n(200651),
    o = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(607070),
    l = n(100527),
    c = n(906732),
    u = n(181918),
    d = n(956226),
    h = n(823415),
    p = n(670188),
    m = n(592125),
    f = n(91047);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function b(e) {
    let { user: t, channelId: n, guildId: b, messageId: j, stopPropagation: v = !1, ariaLabel: O } = e,
        { analyticsLocations: y } = (0, c.ZP)(l.Z.USERNAME),
        T = (0, u.$V)(b, 'useUsernameHook'),
        x = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        [S, _] = o.useState(!1),
        C = (0, h.ic)({ location: 'useUsernameHook' }),
        E = o.useCallback(
            (e) => {
                let i = m.Z.getChannel(n);
                null != i && null != t && (0, f.Pv)(e, t, i);
            },
            [t, n]
        );
    return o.useCallback(
        (e) => (o, r) => {
            let s = null == e ? void 0 : e.colorStrings,
                l = T && null != s && null != s.primaryColor && null != s.secondaryColor ? (0, d.$)(s.primaryColor, s.secondaryColor, s.tertiaryColor, x) : void 0,
                u = (t) => {
                    var n, r;
                    return (0, i.jsx)(
                        a.rz2,
                        ((n = g({}, null != t ? t : {})),
                        (r = r =
                            {
                                onContextMenu: E,
                                name: o,
                                color: null == e ? void 0 : e.colorString,
                                roleName: null == e ? void 0 : e.colorRoleName,
                                roleGradient: l,
                                'aria-label': O
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n)
                    );
                },
                h = (e) => {
                    v && (null == e || e.stopPropagation()), _(!S);
                };
            return (0, i.jsx)(
                c.Gt,
                {
                    value: y,
                    children:
                        null != t
                            ? (0, i.jsx)(p.Z, {
                                  user: t,
                                  guildId: b,
                                  channelId: n,
                                  messageId: j,
                                  shouldShowOnHover: C,
                                  roleId: null == e ? void 0 : e.colorRoleId,
                                  clickTrap: S,
                                  shouldShow: S,
                                  onRequestClose: () => _(!1),
                                  children: (e) => {
                                      var { onClick: t } = e;
                                      return u(
                                          g(
                                              { onClick: h },
                                              (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      i,
                                                      o = (function (e, t) {
                                                          if (null == e) return {};
                                                          var n,
                                                              i,
                                                              o = {},
                                                              r = Object.keys(e);
                                                          for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                                          return o;
                                                      })(e, t);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                                                  }
                                                  return o;
                                              })(e, ['onClick'])
                                          )
                                      );
                                  }
                              })
                            : u(void 0)
                },
                r
            );
        },
        [y, t, n, b, j, E, v, O, T, x, C, S]
    );
}
