n.d(t, { l: () => p });
var i = n(255367),
    r = n(73800),
    o = n(481060),
    l = n(100527),
    s = n(906732),
    a = n(181918),
    c = n(670188),
    u = n(592125),
    d = n(91047);
function h(e) {
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
function p(e) {
    let { user: t, channelId: n, guildId: p, messageId: f, stopPropagation: m = !1, ariaLabel: g } = e,
        b = r.useRef(null),
        { analyticsLocations: O } = (0, s.ZP)(l.Z.USERNAME),
        v = (0, a.$V)(p, 'useUsernameHook'),
        j = r.useCallback(
            (e) => {
                let i = u.Z.getChannel(n);
                null != i && null != t && (0, d.Pv)(e, t, i);
            },
            [t, n]
        );
    return r.useCallback(
        (e) => (r, l) => {
            let a = null == e ? void 0 : e.colorStrings,
                u = v && null != a && null != a.primaryColor && null != a.secondaryColor,
                d = (t) => {
                    var n, l;
                    return (0, i.jsx)(
                        o.rz2,
                        ((n = h({}, null != t ? t : {})),
                        (l = l =
                            {
                                ref: b,
                                onContextMenu: j,
                                name: (0, o.qgQ)(r),
                                color: null == e ? void 0 : e.colorString,
                                roleName: null == e ? void 0 : e.colorRoleName,
                                roleColors: u ? a : null,
                                'aria-label': g
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n)
                    );
                },
                y = (e) => (t) => {
                    m && null != t && t.stopPropagation(), e(t);
                };
            return (0, i.jsx)(
                s.Gt,
                {
                    value: O,
                    children:
                        null != t
                            ? (0, i.jsx)(c.Z, {
                                  targetElementRef: b,
                                  user: t,
                                  guildId: p,
                                  channelId: n,
                                  messageId: f,
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
                                      return d(h({ onClick: y(t) }, n));
                                  }
                              })
                            : d(void 0)
                },
                l
            );
        },
        [O, t, n, p, f, j, m, g, v]
    );
}
