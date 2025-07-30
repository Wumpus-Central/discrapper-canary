(n.d(t, {
    Pv: () => a,
    _j: () => s,
    nm: () => c,
    xS: () => u
}),
    n(415506));
var i = n(255367);
n(73800);
var r = n(239091);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
function a(e, t, a) {
    a.isGroupDM()
        ? (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([n.e('14006'), n.e('70274'), n.e('79695'), n.e('80417'), n.e('98783'), n.e('17373')]).then(n.bind(n, 354589));
              return (n) =>
                  (0, i.jsx)(
                      e,
                      o(l({}, n), {
                          user: t,
                          channel: a
                      })
                  );
          })
        : a.isDM()
          ? (0, r.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('14006'), n.e('70274'), n.e('79695'), n.e('80417'), n.e('90508'), n.e('16766'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('15114'), n.e('56826'), n.e('39767')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, i.jsx)(
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
            ? (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('14006'), n.e('70274'), n.e('79695'), n.e('80417'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('42874')]).then(n.bind(n, 757387));
                  return (n) =>
                      (0, i.jsx)(
                          e,
                          o(l({}, n), {
                              user: t,
                              channel: a,
                              guildId: a.guild_id
                          })
                      );
              })
            : (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('70274'), n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                  return (n) => (0, i.jsx)(e, o(l({}, n), { user: t }));
              });
}
function s(e, t) {
    var { user: a, channel: s, moderationAlertId: c, guildId: u } = t,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(t, ['user', 'channel', 'moderationAlertId', 'guildId']);
    if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let h = null != u ? u : null == s ? void 0 : s.getGuildId();
    null != h &&
        (0, r.jW)(e, async () => {
            let { default: e } = await n.e('16120').then(n.bind(n, 833737));
            return (t) =>
                (0, i.jsx)(
                    e,
                    l(
                        o(l({}, t), {
                            user: a,
                            channelId: null == s ? void 0 : s.id,
                            guildId: h,
                            moderationAlertId: c
                        }),
                        d
                    )
                );
        });
}
function c(e, t) {
    let { user: a, guildId: s, analyticsLocations: c, onCloseContextMenu: u, isViewOnly: d } = t;
    (0, r.jW)(e, async () => {
        let { default: e } = await n.e('45130').then(n.bind(n, 246389));
        return (t) =>
            (0, i.jsx)(
                e,
                o(l({}, t), {
                    user: a,
                    guildId: s,
                    analyticsLocations: c,
                    onCloseContextMenu: u,
                    isViewOnly: d
                })
            );
    });
}
function u(e, t, a) {
    null != a &&
        (0, r.jW)(e, async () => {
            let { default: e } = await n.e('50331').then(n.bind(n, 158195));
            return (t) => (0, i.jsx)(e, o(l({}, t), { guildId: a }));
        });
}
