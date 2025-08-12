n.d(t, {
    Pv: () => d,
    _j: () => f,
    nm: () => _,
    xS: () => p,
}),
    n(415506);
var r = n(255367);
n(73800);
var i = n(239091);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e, t, o) {
    o.isGroupDM()
        ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([n.e("79695"), n.e("98783"), n.e("72117")]).then(
                  n.bind(n, 354589),
              );
              return (n) =>
                  (0, r.jsx)(
                      e,
                      l(a({}, n), {
                          user: t,
                          channel: o,
                      }),
                  );
          })
        : o.isDM()
          ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("70205"),
                    n.e("98783"),
                    n.e("57789"),
                    n.e("56826"),
                    n.e("42766"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(a({}, n), {
                            user: t,
                            channel: o,
                            showMute: !1,
                            targetIsUser: !0,
                        }),
                    );
            })
          : null != o.guild_id
            ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("98783"),
                      n.e("8982"),
                      n.e("7717"),
                      n.e("73387"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          l(a({}, n), {
                              user: t,
                              channel: o,
                              guildId: o.guild_id,
                          }),
                      );
              })
            : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
                  return (n) => (0, r.jsx)(e, l(a({}, n), { user: t }));
              });
}
function f(e, t) {
    var { user: o, channel: s, moderationAlertId: u, guildId: d } = t,
        f = c(t, ["user", "channel", "moderationAlertId", "guildId"]);
    if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM()))
        throw Error("Cannot moderate user in DM or group DM");
    let _ = null != d ? d : null == s ? void 0 : s.getGuildId();
    null != _ &&
        (0, i.jW)(e, async () => {
            let { default: e } = await n.e("16120").then(n.bind(n, 833737));
            return (t) =>
                (0, r.jsx)(
                    e,
                    a(
                        l(a({}, t), {
                            user: o,
                            channelId: null == s ? void 0 : s.id,
                            guildId: _,
                            moderationAlertId: u,
                        }),
                        f,
                    ),
                );
        });
}
function _(e, t) {
    let { user: o, guildId: s, analyticsLocations: c, onCloseContextMenu: u, isViewOnly: d } = t;
    (0, i.jW)(e, async () => {
        let { default: e } = await n.e("45130").then(n.bind(n, 246389));
        return (t) =>
            (0, r.jsx)(
                e,
                l(a({}, t), {
                    user: o,
                    guildId: s,
                    analyticsLocations: c,
                    onCloseContextMenu: u,
                    isViewOnly: d,
                }),
            );
    });
}
function p(e, t, o) {
    null != o &&
        (0, i.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, r.jsx)(e, l(a({}, t), { guildId: o }));
        });
}
