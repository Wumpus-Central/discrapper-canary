n.d(t, { Z: () => j });
var r = n(200651),
    l = n(192379),
    s = n(442837),
    a = n(481060),
    i = n(249842),
    c = n(838367),
    o = n(576306),
    d = n(83474),
    u = n(914620);
function m(e) {
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
function h(e, t) {
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
function j(e) {
    var { guildId: t, channelId: n, messageId: j, name: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['guildId', 'channelId', 'messageId', 'name']);
    let b = (0, o.h)(),
        { unavailable: g, guild: x } = (0, s.cj)(
            [c.Z],
            () => ({
                guild: c.Z.getGuild(t),
                unavailable: c.Z.hasFetchFailed(t)
            }),
            [t]
        ),
        O = null != x,
        P = l.useCallback(async () => {
            if (!b)
                try {
                    O || (await (0, i.P)(t));
                } catch (e) {}
        }, [b, O, t]);
    return g
        ? (0, r.jsx)(
              a.yRy,
              h(
                  m(
                      {
                          position: 'right',
                          renderPopout: (e) => (0, r.jsx)(d.SK, {})
                      },
                      p
                  ),
                  { clickTrap: !0 }
              )
          )
        : (0, r.jsx)(
              a.yRy,
              m(
                  {
                      position: 'right',
                      preload: P,
                      clickTrap: !0,
                      renderPopout: (e) =>
                          b
                              ? (0, r.jsx)(
                                    u.Z,
                                    h(m({}, e), {
                                        guildId: t,
                                        name: f
                                    })
                                )
                              : null == x
                                ? (0, r.jsx)(r.Fragment, {})
                                : (0, r.jsx)(
                                      d.sK,
                                      h(m({}, e), {
                                          guild: x,
                                          channelId: n,
                                          messageId: j
                                      })
                                  )
                  },
                  p
              )
          );
}
