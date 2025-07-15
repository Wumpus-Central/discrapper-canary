n.d(t, { l: () => m });
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(100527),
    a = n(906732),
    s = n(7284),
    c = n(402235),
    u = n(670188),
    d = n(592125),
    h = n(91047);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function m(e) {
    let { user: t, channelId: n, guildId: m, messageId: f, stopPropagation: g = !1, ariaLabel: b } = e,
        j = r.useRef(null),
        { analyticsLocations: O } = (0, a.ZP)(o.Z.USERNAME),
        y = (0, c.ZP)(m, null == t ? void 0 : t.id),
        v = (0, s.j)({ displayNameStyles: null == t ? void 0 : t.displayNameStyles }),
        T = r.useCallback(
            (e) => {
                let i = d.Z.getChannel(n);
                null != i && null != t && (0, h.Pv)(e, t, i);
            },
            [t, n]
        );
    return r.useCallback(
        (e) => (r, o) => {
            let s = null == e ? void 0 : e.colorStrings,
                c = y && null != s && null != s.primaryColor && null != s.secondaryColor,
                d = (t) => {
                    var n, o;
                    return (0, i.jsx)(
                        l.rz2,
                        ((n = p({}, null != t ? t : {})),
                        (o = o =
                            {
                                ref: j,
                                onContextMenu: T,
                                name: (0, l.qgQ)(r),
                                color: null == e ? void 0 : e.colorString,
                                roleName: null == e ? void 0 : e.colorRoleName,
                                roleColors: c ? s : null,
                                'aria-label': b,
                                className: v
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
                h = (e) => (t) => {
                    (g && null != t && t.stopPropagation(), e(t));
                };
            return (0, i.jsx)(
                a.Gt,
                {
                    value: O,
                    children:
                        null != t
                            ? (0, i.jsx)(u.Z, {
                                  targetElementRef: j,
                                  user: t,
                                  guildId: m,
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
                                                          l = Object.keys(e);
                                                      for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                                      return r;
                                                  })(e, t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var l = Object.getOwnPropertySymbols(e);
                                                  for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                                              }
                                              return r;
                                          })(e, ['onClick']);
                                      return d(p({ onClick: h(t) }, n));
                                  }
                              })
                            : d(void 0)
                },
                o
            );
        },
        [O, t, n, m, f, T, g, b, y, v]
    );
}
