r.d(t, { Z: () => _ }), r(411104);
var n = r(200651),
    a = r(192379),
    o = r(442837),
    i = r(481060),
    s = r(239091),
    l = r(751688),
    c = r(184301),
    u = r(347475),
    d = r(210887),
    p = r(5192),
    m = r(882320);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function b(e) {
    let { participants: t, channel: a } = e;
    return (0, n.jsx)(i.Ttm, {
        className: m.popout,
        children: t.map((e) =>
            (0, n.jsx)(
                l.Z,
                {
                    user: e,
                    guildId: null == a ? void 0 : a.guild_id,
                    channelId: null == a ? void 0 : a.id,
                    nick: p.ZP.getNickname(null == a ? void 0 : a.guild_id, null == a ? void 0 : a.id, e),
                    onContextMenu: (t) => {
                        (0, s.jW)(t, async () => {
                            let { default: t } = await Promise.all([r.e('79695'), r.e('69220'), r.e('31327')]).then(r.bind(r, 881351));
                            return (r) => (0, n.jsx)(t, g(f({}, r), { user: e }));
                        });
                    }
                },
                e.id
            )
        )
    });
}
function _(e) {
    let { children: t, participants: r, channel: s, onPopoutClosed: l } = e,
        p = (0, o.e7)([d.Z], () => d.Z.theme),
        m = 1 === r.length ? r[0] : null,
        _ = (0, a.useCallback)(
            (e) => {
                if (null != m)
                    return (0, n.jsx)(
                        u.Z,
                        g(f({}, e), {
                            closePopout: () => {
                                e.closePopout(), null == l || l();
                            },
                            userId: m.id,
                            guildId: null == s ? void 0 : s.guild_id,
                            channelId: null == s ? void 0 : s.id
                        })
                    );
                if (null != r)
                    return (0, n.jsx)(b, {
                        participants: r,
                        channel: s
                    });
                throw Error('One of participant or participants is required');
            },
            [s, l, r, m]
        );
    return (0, n.jsx)(i.ze6, {
        theme: p,
        children: (0, n.jsx)(i.yRy, {
            renderPopout: _,
            preload: () =>
                null != m
                    ? (0, c.Z)(m, {
                          guildId: null == s ? void 0 : s.guild_id,
                          channelId: null == s ? void 0 : s.id
                      })
                    : Promise.resolve(),
            children: t
        })
    });
}
