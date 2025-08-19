n.d(t, { l: () => m });
var i = n(951288),
    l = n(647438),
    r = n(481060),
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
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function m(e) {
    let { user: t, channelId: n, guildId: m, messageId: f, stopPropagation: g = !1, ariaLabel: b } = e,
        j = l.useRef(null),
        { analyticsLocations: v } = (0, a.ZP)(o.Z.USERNAME),
        O = (0, c.ZP)(m, null == t ? void 0 : t.id),
        y = (0, s.j)({ displayNameStyles: null == t ? void 0 : t.displayNameStyles }),
        T = l.useCallback(
            (e) => {
                let i = d.Z.getChannel(n);
                null != i && null != t && (0, h.Pv)(e, t, i);
            },
            [t, n],
        );
    return l.useCallback(
        (e) => (l, o) => {
            let s = null == e ? void 0 : e.colorStrings,
                c = O && null != s && null != s.primaryColor && null != s.secondaryColor,
                d = (t) => {
                    var n, o, a;
                    return (0, i.jsx)(
                        r.rz2,
                        ((o = p({}, null != t ? t : {})),
                        (a = a =
                            {
                                ref: j,
                                onContextMenu: T,
                                name: (0, r.qgQ)(l),
                                colorString: null != (n = null == e ? void 0 : e.colorString) ? n : null,
                                roleName: null == e ? void 0 : e.colorRoleName,
                                colorStrings: c ? s : null,
                                "aria-label": b,
                                className: y,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        o),
                    );
                };
            return (0, i.jsx)(
                a.Gt,
                {
                    value: v,
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
                                      var { onClick: t } = e;
                                      return d(
                                          p(
                                              {
                                                  onClick: (e) => {
                                                      g && null != e && e.stopPropagation(), t(e);
                                                  },
                                              },
                                              (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      i,
                                                      l = (function (e, t) {
                                                          if (null == e) return {};
                                                          var n,
                                                              i,
                                                              l = {},
                                                              r = Object.keys(e);
                                                          for (i = 0; i < r.length; i++)
                                                              (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                                          return l;
                                                      })(e, t);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      for (i = 0; i < r.length; i++)
                                                          (n = r[i]),
                                                              !(t.indexOf(n) >= 0) &&
                                                                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                                  (l[n] = e[n]);
                                                  }
                                                  return l;
                                              })(e, ["onClick"]),
                                          ),
                                      );
                                  },
                              })
                            : d(void 0),
                },
                o,
            );
        },
        [v, t, n, m, f, T, g, b, O, y],
    );
}
