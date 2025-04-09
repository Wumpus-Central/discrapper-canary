n.d(t, { l: () => m }), n(388685);
var i = n(200651),
    o = n(192379),
    r = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(181918),
    c = n(823415),
    u = n(670188),
    d = n(592125),
    h = n(91047);
function p(e) {
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
function m(e) {
    let { user: t, channelId: n, guildId: m, messageId: f, stopPropagation: g = !1, ariaLabel: b } = e,
        { analyticsLocations: j } = (0, s.ZP)(a.Z.USERNAME),
        v = (0, l.$V)(m, 'useUsernameHook'),
        [O, y] = o.useState(!1),
        T = (0, c.ic)({ location: 'useUsernameHook' }),
        x = o.useCallback(
            (e) => {
                let i = d.Z.getChannel(n);
                null != i && null != t && (0, h.Pv)(e, t, i);
            },
            [t, n]
        );
    return o.useCallback(
        (e) => (o, a) => {
            let l = null == e ? void 0 : e.colorStrings,
                c = v && null != l && null != l.primaryColor && null != l.secondaryColor,
                d = (t) => {
                    var n, a;
                    return (0, i.jsx)(
                        r.rz2,
                        ((n = p({}, null != t ? t : {})),
                        (a = a =
                            {
                                onContextMenu: x,
                                name: o,
                                color: null == e ? void 0 : e.colorString,
                                roleName: null == e ? void 0 : e.colorRoleName,
                                roleColors: c ? l : null,
                                'aria-label': b
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        n)
                    );
                },
                h = (e) => {
                    g && (null == e || e.stopPropagation()), y(!O);
                };
            return (0, i.jsx)(
                s.Gt,
                {
                    value: j,
                    children:
                        null != t
                            ? (0, i.jsx)(u.Z, {
                                  user: t,
                                  guildId: m,
                                  channelId: n,
                                  messageId: f,
                                  shouldShowOnHover: T,
                                  roleId: null == e ? void 0 : e.colorRoleId,
                                  clickTrap: O,
                                  shouldShow: O,
                                  onRequestClose: () => y(!1),
                                  children: (e) => {
                                      var { onClick: t } = e;
                                      return d(
                                          p(
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
                            : d(void 0)
                },
                a
            );
        },
        [j, t, n, m, f, x, g, b, v, T, O]
    );
}
