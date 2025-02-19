n.d(t, {
    Pv: () => s,
    _j: () => a,
    nm: () => u,
    xS: () => d
}),
    n(411104);
var i = n(200651);
n(192379);
var r = n(239091);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e, t, s) {
    s.isGroupDM()
        ? (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('6915'), n.e('65941')]).then(n.bind(n, 354589));
              return (n) =>
                  (0, i.jsx)(
                      e,
                      o(l({}, n), {
                          user: t,
                          channel: s
                      })
                  );
          })
        : s.isDM()
          ? (0, r.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('25292'), n.e('51269'), n.e('90508'), n.e('13351'), n.e('33862'), n.e('70205'), n.e('98783'), n.e('6915'), n.e('56826'), n.e('57266')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        o(l({}, n), {
                            user: t,
                            channel: s,
                            showMute: !1,
                            targetIsUser: !0
                        })
                    );
            })
          : null != s.guild_id
            ? (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('6915'), n.e('97589'), n.e('7717'), n.e('32692')]).then(n.bind(n, 757387));
                  return (n) =>
                      (0, i.jsx)(
                          e,
                          o(l({}, n), {
                              user: t,
                              channel: s,
                              guildId: s.guild_id
                          })
                      );
              })
            : (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('31327')]).then(n.bind(n, 881351));
                  return (n) => (0, i.jsx)(e, o(l({}, n), { user: t }));
              });
}
function a(e, t) {
    var { user: s, channel: a, moderationAlertId: u, guildId: d } = t,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(t, ['user', 'channel', 'moderationAlertId', 'guildId']);
    if ((null == a ? void 0 : a.isGroupDM()) || (null == a ? void 0 : a.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let h = null != d ? d : null == a ? void 0 : a.getGuildId();
    null != h &&
        (0, r.jW)(e, async () => {
            let { default: e } = await n.e('16120').then(n.bind(n, 833737));
            return (t) =>
                (0, i.jsx)(
                    e,
                    l(
                        o(l({}, t), {
                            user: s,
                            channelId: null == a ? void 0 : a.id,
                            guildId: h,
                            moderationAlertId: u
                        }),
                        c
                    )
                );
        });
}
function u(e, t) {
    let { user: s, guildId: a, analyticsLocations: u, onCloseContextMenu: d, isViewOnly: c } = t;
    (0, r.jW)(e, async () => {
        let { default: e } = await n.e('45130').then(n.bind(n, 246389));
        return (t) =>
            (0, i.jsx)(
                e,
                o(l({}, t), {
                    user: s,
                    guildId: a,
                    analyticsLocations: u,
                    onCloseContextMenu: d,
                    isViewOnly: c
                })
            );
    });
}
function d(e, t, s) {
    null != s &&
        (0, r.jW)(e, async () => {
            let { default: e } = await n.e('50331').then(n.bind(n, 158195));
            return (t) => (0, i.jsx)(e, o(l({}, t), { guildId: s }));
        });
}
