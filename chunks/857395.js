n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(249842),
    l = n(838367),
    c = n(576306),
    u = n(83474),
    d = n(914620);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    var { guildId: t, channelId: n, messageId: f, name: p, position: g = 'right' } = e,
        E = m(e, ['guildId', 'channelId', 'messageId', 'name', 'position']);
    let b = (0, c.h)(),
        { unavailable: y, guild: v } = (0, o.cj)(
            [l.Z],
            () => ({
                guild: l.Z.getGuild(t),
                unavailable: l.Z.hasFetchFailed(t)
            }),
            [t]
        ),
        O = null != v,
        I = i.useCallback(async () => {
            if (!b)
                try {
                    O || (await (0, s.P)(t));
                } catch (e) {}
        }, [b, O, t]);
    return y
        ? (0, r.jsx)(
              a.yRy,
              h(
                  _(
                      {
                          position: 'right',
                          renderPopout: (e) => (0, r.jsx)(u.SK, {})
                      },
                      E
                  ),
                  { clickTrap: !0 }
              )
          )
        : (0, r.jsx)(
              a.yRy,
              _(
                  {
                      position: g,
                      preload: I,
                      clickTrap: !0,
                      renderPopout: (e) =>
                          b
                              ? (0, r.jsx)(
                                    d.Z,
                                    h(_({}, e), {
                                        guildId: t,
                                        name: p
                                    })
                                )
                              : null == v
                                ? (0, r.jsx)(r.Fragment, {})
                                : (0, r.jsx)(
                                      u.sK,
                                      h(_({}, e), {
                                          guild: v,
                                          channelId: n,
                                          messageId: f
                                      })
                                  )
                  },
                  E
              )
          );
}
