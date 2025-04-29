n.d(t, {
    Pv: () => a,
    _j: () => u,
    nm: () => c,
    xS: () => s
}),
    n(415506);
var r = n(255367);
n(73800);
var i = n(239091);
function l(e) {
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
function o(e, t) {
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
function a(e, t, a) {
    a.isGroupDM()
        ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([n.e('94342'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('92643')]).then(n.bind(n, 354589));
              return (n) =>
                  (0, r.jsx)(
                      e,
                      o(l({}, n), {
                          user: t,
                          channel: a
                      })
                  );
          })
        : a.isDM()
          ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('94342'), n.e('79695'), n.e('25292'), n.e('90508'), n.e('13351'), n.e('20875'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('33177')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        o(l({}, n), {
                            user: t,
                            channel: a,
                            showMute: !1,
                            targetIsUser: !0
                        })
                    );
            })
          : null != a.guild_id
            ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('94342'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          o(l({}, n), {
                              user: t,
                              channel: a,
                              guildId: a.guild_id
                          })
                      );
              })
            : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                  return (n) => (0, r.jsx)(e, o(l({}, n), { user: t }));
              });
}
function u(e, t) {
    var { user: a, channel: u, moderationAlertId: c, guildId: s } = t,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(t, ['user', 'channel', 'moderationAlertId', 'guildId']);
    if ((null == u ? void 0 : u.isGroupDM()) || (null == u ? void 0 : u.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let p = null != s ? s : null == u ? void 0 : u.getGuildId();
    null != p &&
        (0, i.jW)(e, async () => {
            let { default: e } = await n.e('16120').then(n.bind(n, 833737));
            return (t) =>
                (0, r.jsx)(
                    e,
                    l(
                        o(l({}, t), {
                            user: a,
                            channelId: null == u ? void 0 : u.id,
                            guildId: p,
                            moderationAlertId: c
                        }),
                        d
                    )
                );
        });
}
function c(e, t) {
    let { user: a, guildId: u, analyticsLocations: c, onCloseContextMenu: s, isViewOnly: d } = t;
    (0, i.jW)(e, async () => {
        let { default: e } = await n.e('45130').then(n.bind(n, 246389));
        return (t) =>
            (0, r.jsx)(
                e,
                o(l({}, t), {
                    user: a,
                    guildId: u,
                    analyticsLocations: c,
                    onCloseContextMenu: s,
                    isViewOnly: d
                })
            );
    });
}
function s(e, t, a) {
    null != a &&
        (0, i.jW)(e, async () => {
            let { default: e } = await n.e('50331').then(n.bind(n, 158195));
            return (t) => (0, r.jsx)(e, o(l({}, t), { guildId: a }));
        });
}
