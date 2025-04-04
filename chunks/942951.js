n.d(t, { l: () => g });
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(607070),
    s = n(100527),
    c = n(906732),
    u = n(181918),
    d = n(956226),
    h = n(670188),
    p = n(592125),
    m = n(91047);
function f(e) {
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
function g(e) {
    let { user: t, channelId: n, guildId: g, messageId: b, stopPropagation: j = !1, ariaLabel: v } = e,
        { analyticsLocations: O } = (0, c.ZP)(s.Z.USERNAME),
        y = (0, u.$V)(g, 'useUsernameHook'),
        T = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        x = r.useCallback(
            (e) => {
                let i = p.Z.getChannel(n);
                null != i && null != t && (0, m.Pv)(e, t, i);
            },
            [t, n]
        );
    return r.useCallback(
        (e) => (r, o) => {
            let l = null == e ? void 0 : e.colorStrings,
                s = y && null != l && null != l.primaryColor && null != l.secondaryColor ? (0, d.$)(l.primaryColor, l.secondaryColor, l.tertiaryColor, T) : void 0,
                u = (t) => {
                    var n, o;
                    return (0, i.jsx)(
                        a.rz2,
                        ((n = f({}, null != t ? t : {})),
                        (o = o =
                            {
                                onContextMenu: x,
                                name: r,
                                color: null == e ? void 0 : e.colorString,
                                roleName: null == e ? void 0 : e.colorRoleName,
                                roleGradient: s,
                                'aria-label': v
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        n)
                    );
                },
                p = (e) => (t) => {
                    j && null != t && t.stopPropagation(), e(t);
                };
            return (0, i.jsx)(
                c.Gt,
                {
                    value: O,
                    children:
                        null != t
                            ? (0, i.jsx)(h.Z, {
                                  user: t,
                                  guildId: g,
                                  channelId: n,
                                  messageId: b,
                                  roleId: null == e ? void 0 : e.colorRoleId,
                                  clickTrap: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = (function (e, t) {
                                              if (null == e) return {};
                                              var n,
                                                  i,
                                                  r = (function (e, t) {
                                                      if (null == e) return {};
                                                      var n,
                                                          i,
                                                          r = {},
                                                          o = Object.keys(e);
                                                      for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                      return r;
                                                  })(e, t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var o = Object.getOwnPropertySymbols(e);
                                                  for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                                              }
                                              return r;
                                          })(e, ['onClick']);
                                      return u(f({ onClick: p(t) }, n));
                                  }
                              })
                            : u(void 0)
                },
                o
            );
        },
        [O, t, n, g, b, x, j, v, y, T]
    );
}
