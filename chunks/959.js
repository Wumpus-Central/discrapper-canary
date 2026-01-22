n.d(t, { A: () => g }), n(65821);
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(538451),
    l = n(342296),
    c = n(544028),
    u = n(562153),
    d = n(899959);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { participants: t, channel: i } = e;
    return (0, r.jsx)(a.HOs, {
        className: d.S,
        children: t.map((e) =>
            (0, r.jsx)(
                o.A,
                {
                    user: e,
                    guildId: null == i ? void 0 : i.guild_id,
                    channelId: null == i ? void 0 : i.id,
                    nick: u.Ay.getNickname(null == i ? void 0 : i.guild_id, null == i ? void 0 : i.id, e),
                    onContextMenu: (t) => {
                        (0, s.L3)(t, async () => {
                            let { default: t } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) => (0, r.jsx)(t, h(p({}, n), { user: e }));
                        });
                    },
                },
                e.id,
            ),
        ),
    });
}
function g(e) {
    let { children: t, participants: n, channel: s, onPopoutClosed: o, targetElementRef: u } = e,
        d = (0, i.bG)([c.A], () => c.A.theme),
        f = 1 === n.length ? n[0] : null;
    return null != f
        ? (0, r.jsx)(a.wXn, {
              theme: d,
              children: (0, r.jsx)(l.A, {
                  targetElementRef: u,
                  user: f,
                  guildId: null == s ? void 0 : s.guild_id,
                  channelId: null == s ? void 0 : s.id,
                  onClosePopout: o,
                  children: t,
              }),
          })
        : (0, r.jsx)(a.wXn, {
              theme: d,
              children: (0, r.jsx)(a.YNO, {
                  targetElementRef: u,
                  renderPopout: () => {
                      if (null != n)
                          return (0, r.jsx)(m, {
                              participants: n,
                              channel: s,
                          });
                      throw Error("One of participant or participants is required");
                  },
                  children: t,
              }),
          });
}
