n.d(t, {
    Pv: () => l,
    _j: () => s,
    nm: () => c,
    xS: () => d
}),
    n(411104);
var a = n(200651);
n(192379);
var i = n(239091);
function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e, t, l) {
    l.isGroupDM()
        ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('92643')]).then(n.bind(n, 354589));
              return (n) =>
                  (0, a.jsx)(
                      e,
                      o(r({}, n), {
                          user: t,
                          channel: l
                      })
                  );
          })
        : l.isDM()
          ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('25292'), n.e('90508'), n.e('13351'), n.e('20875'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('33177')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, a.jsx)(
                        e,
                        o(r({}, n), {
                            user: t,
                            channel: l,
                            showMute: !1,
                            targetIsUser: !0
                        })
                    );
            })
          : null != l.guild_id
            ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                  return (n) =>
                      (0, a.jsx)(
                          e,
                          o(r({}, n), {
                              user: t,
                              channel: l,
                              guildId: l.guild_id
                          })
                      );
              })
            : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                  return (n) => (0, a.jsx)(e, o(r({}, n), { user: t }));
              });
}
function s(e, t) {
    var { user: l, channel: s, moderationAlertId: c, guildId: d } = t,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        i = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++) (n = r[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(t, ['user', 'channel', 'moderationAlertId', 'guildId']);
    if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let m = null != d ? d : null == s ? void 0 : s.getGuildId();
    null != m &&
        (0, i.jW)(e, async () => {
            let { default: e } = await n.e('16120').then(n.bind(n, 833737));
            return (t) =>
                (0, a.jsx)(
                    e,
                    r(
                        o(r({}, t), {
                            user: l,
                            channelId: null == s ? void 0 : s.id,
                            guildId: m,
                            moderationAlertId: c
                        }),
                        u
                    )
                );
        });
}
function c(e, t) {
    let { user: l, guildId: s, analyticsLocations: c, onCloseContextMenu: d, isViewOnly: u } = t;
    (0, i.jW)(e, async () => {
        let { default: e } = await n.e('45130').then(n.bind(n, 246389));
        return (t) =>
            (0, a.jsx)(
                e,
                o(r({}, t), {
                    user: l,
                    guildId: s,
                    analyticsLocations: c,
                    onCloseContextMenu: d,
                    isViewOnly: u
                })
            );
    });
}
function d(e, t, l) {
    null != l &&
        (0, i.jW)(e, async () => {
            let { default: e } = await n.e('50331').then(n.bind(n, 158195));
            return (t) => (0, a.jsx)(e, o(r({}, t), { guildId: l }));
        });
}
