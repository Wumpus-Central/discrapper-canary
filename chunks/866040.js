n.d(t, { Z: () => g }), n(415506);
var r = n(255367),
    i = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(751688),
    l = n(670188),
    c = n(210887),
    u = n(5192),
    d = n(546059);
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
function m(e) {
    let { participants: t, channel: i } = e;
    return (0, r.jsx)(a.Ttm, {
        className: d.popout,
        children: t.map((e) =>
            (0, r.jsx)(
                s.Z,
                {
                    user: e,
                    guildId: null == i ? void 0 : i.guild_id,
                    channelId: null == i ? void 0 : i.id,
                    nick: u.ZP.getNickname(null == i ? void 0 : i.guild_id, null == i ? void 0 : i.id, e),
                    onContextMenu: (t) => {
                        (0, o.jW)(t, async () => {
                            let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                            return (n) => (0, r.jsx)(t, h(_({}, n), { user: e }));
                        });
                    }
                },
                e.id
            )
        )
    });
}
function g(e) {
    let { children: t, participants: n, channel: o, onPopoutClosed: s } = e,
        u = (0, i.e7)([c.Z], () => c.Z.theme),
        d = 1 === n.length ? n[0] : null;
    return null != d
        ? (0, r.jsx)(a.ze6, {
              theme: u,
              children: (0, r.jsx)(l.Z, {
                  user: d,
                  guildId: null == o ? void 0 : o.guild_id,
                  channelId: null == o ? void 0 : o.id,
                  onClosePopout: s,
                  children: t
              })
          })
        : (0, r.jsx)(a.ze6, {
              theme: u,
              children: (0, r.jsx)(a.yRy, {
                  renderPopout: () => {
                      if (null != n)
                          return (0, r.jsx)(m, {
                              participants: n,
                              channel: o
                          });
                      throw Error('One of participant or participants is required');
                  },
                  children: t
              })
          });
}
