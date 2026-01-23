n.d(t, {
    B8: () => f,
    Mg: () => p,
    pB: () => _,
    wQ: () => d,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(442433);

function a(e, t, n) {
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

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
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
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function d(e, t, a) {
    a.isGroupDM()
        ? (0, i.L3)(e, async () => {
              let { default: e } = await Promise.all([
                  n.e("97262"),
                  n.e("29534"),
                  n.e("33818"),
                  n.e("62891"),
                  n.e("17758"),
              ]).then(n.bind(n, 228006));
              return (n) =>
                  (0, r.jsx)(
                      e,
                      l(s({}, n), {
                          user: t,
                          channel: a,
                      }),
                  );
          })
        : a.isDM()
          ? (0, i.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("99011"),
                    n.e("29534"),
                    n.e("33818"),
                    n.e("39778"),
                    n.e("71287"),
                ]).then(n.bind(n, 385913));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(s({}, n), {
                            user: t,
                            channel: a,
                            showMute: !1,
                            targetIsUser: !0,
                        }),
                    );
            })
          : null != a.guild_id
            ? (0, i.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("97262"),
                      n.e("29534"),
                      n.e("33818"),
                      n.e("55296"),
                      n.e("84841"),
                      n.e("9001"),
                  ]).then(n.bind(n, 107632));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          l(s({}, n), {
                              user: t,
                              channel: a,
                              guildId: a.guild_id,
                          }),
                      );
              })
            : (0, i.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(
                      n.bind(n, 668569),
                  );
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          l(s({}, n), {
                              user: t,
                          }),
                      );
              });
}

function f(e, t) {
    let { user: a, channel: o, moderationAlertId: u, guildId: d } = t,
        f = c(t, ["user", "channel", "moderationAlertId", "guildId"]);
    if ((null == o ? void 0 : o.isGroupDM()) || (null == o ? void 0 : o.isDM()))
        throw Error("Cannot moderate user in DM or group DM");
    let p = null != d ? d : null == o ? void 0 : o.getGuildId();
    null != p &&
        (0, i.L3)(e, async () => {
            let { default: e } = await n.e("12970").then(n.bind(n, 104849));
            return (t) =>
                (0, r.jsx)(
                    e,
                    s(
                        l(s({}, t), {
                            user: a,
                            channelId: null == o ? void 0 : o.id,
                            guildId: p,
                            moderationAlertId: u,
                        }),
                        f,
                    ),
                );
        });
}

function p(e, t) {
    let { user: a, guildId: o, analyticsLocations: c, onCloseContextMenu: u, isViewOnly: d } = t;
    (0, i.L3)(e, async () => {
        let { default: e } = await n.e("83767").then(n.bind(n, 414506));
        return (t) =>
            (0, r.jsx)(
                e,
                l(s({}, t), {
                    user: a,
                    guildId: o,
                    analyticsLocations: c,
                    onCloseContextMenu: u,
                    isViewOnly: d,
                }),
            );
    });
}

function _(e, t, a) {
    null != a &&
        (0, i.L3)(e, async () => {
            let { default: e } = await n.e("77759").then(n.bind(n, 331458));
            return (t) =>
                (0, r.jsx)(
                    e,
                    l(s({}, t), {
                        guildId: a,
                    }),
                );
        });
}
