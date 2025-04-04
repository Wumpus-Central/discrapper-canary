r.d(t, { Z: () => f }), r(415506);
var n = r(200651),
    a = r(442837),
    o = r(481060),
    i = r(239091),
    l = r(751688),
    s = r(670188),
    c = r(210887),
    u = r(5192),
    d = r(546059);
function p(e) {
    let { participants: t, channel: a } = e;
    return (0, n.jsx)(o.Ttm, {
        className: d.popout,
        children: t.map((e) =>
            (0, n.jsx)(
                l.Z,
                {
                    user: e,
                    guildId: null == a ? void 0 : a.guild_id,
                    channelId: null == a ? void 0 : a.id,
                    nick: u.ZP.getNickname(null == a ? void 0 : a.guild_id, null == a ? void 0 : a.id, e),
                    onContextMenu: (t) => {
                        (0, i.jW)(t, async () => {
                            let { default: t } = await Promise.all([r.e('79695'), r.e('69220'), r.e('70686')]).then(r.bind(r, 881351));
                            return (r) => {
                                var a, o;
                                return (0, n.jsx)(
                                    t,
                                    ((a = (function (e) {
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
                                    })({}, r)),
                                    (o = o = { user: e }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                        : (function (e, t) {
                                              var r = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var n = Object.getOwnPropertySymbols(e);
                                                  r.push.apply(r, n);
                                              }
                                              return r;
                                          })(Object(o)).forEach(function (e) {
                                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                          }),
                                    a)
                                );
                            };
                        });
                    }
                },
                e.id
            )
        )
    });
}
function f(e) {
    let { children: t, participants: r, channel: i, onPopoutClosed: l } = e,
        u = (0, a.e7)([c.Z], () => c.Z.theme),
        d = 1 === r.length ? r[0] : null;
    return null != d
        ? (0, n.jsx)(o.ze6, {
              theme: u,
              children: (0, n.jsx)(s.Z, {
                  user: d,
                  guildId: null == i ? void 0 : i.guild_id,
                  channelId: null == i ? void 0 : i.id,
                  onClosePopout: l,
                  children: t
              })
          })
        : (0, n.jsx)(o.ze6, {
              theme: u,
              children: (0, n.jsx)(o.yRy, {
                  renderPopout: () => {
                      if (null != r)
                          return (0, n.jsx)(p, {
                              participants: r,
                              channel: i
                          });
                      throw Error('One of participant or participants is required');
                  },
                  children: t
              })
          });
}
