n.d(t, { l: () => b });
var r = n(200651),
    o = n(192379),
    c = n(481060),
    i = n(100527),
    l = n(906732),
    a = n(184301),
    d = n(347475),
    s = n(592125),
    u = n(91047);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { user: t, channelId: n, guildId: b, messageId: p, stopPropagation: g = !1, ariaLabel: h } = e,
        { analyticsLocations: m } = (0, l.ZP)(i.Z.USERNAME),
        v = o.useCallback(
            (e) => {
                let r = s.Z.getChannel(n);
                null != r && null != t && (0, u.Pv)(e, t, r);
            },
            [t, n]
        );
    return o.useCallback(
        (e) => (o, i) => {
            let s = (t) =>
                    (0, r.jsx)(
                        c.rz2,
                        f(_({}, null != t ? t : {}), {
                            onContextMenu: v,
                            name: o,
                            color: null == e ? void 0 : e.colorString,
                            roleName: null == e ? void 0 : e.colorRoleName,
                            'aria-label': h
                        })
                    ),
                u = (e) => (t) => {
                    g && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(
                l.Gt,
                {
                    value: m,
                    children:
                        null != t
                            ? (0, r.jsx)(c.yRy, {
                                  position: 'right',
                                  preload: () =>
                                      (0, a.Z)(t.id, t.getAvatarURL(b, 80), {
                                          guildId: b,
                                          channelId: n
                                      }),
                                  renderPopout: (o) =>
                                      (0, r.jsx)(
                                          d.Z,
                                          f(_({}, o), {
                                              userId: t.id,
                                              guildId: b,
                                              channelId: n,
                                              messageId: p,
                                              roleId: null == e ? void 0 : e.colorRoleId
                                          })
                                      ),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = (function (e, t) {
                                              if (null == e) return {};
                                              var n,
                                                  r,
                                                  o = (function (e, t) {
                                                      if (null == e) return {};
                                                      var n,
                                                          r,
                                                          o = {},
                                                          c = Object.keys(e);
                                                      for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                                      return o;
                                                  })(e, t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var c = Object.getOwnPropertySymbols(e);
                                                  for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                                              }
                                              return o;
                                          })(e, ['onClick']);
                                      return s(_({ onClick: u(t) }, n));
                                  }
                              })
                            : s(void 0)
                },
                i
            );
        },
        [m, t, n, b, p, v, g, h]
    );
}
