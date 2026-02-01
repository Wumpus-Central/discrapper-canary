n.d(t, {
    B8: () => s,
    Mg: () => u,
    pB: () => c,
    wQ: () => a,
}),
    n(65821);
var i = n(627968);
n(64700);
var l = n(442433);

function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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

function a(e, t, a) {
    a.isGroupDM()
        ? (0, l.L3)(e, async () => {
              let { default: e } = await Promise.all([
                  n.e("54809"),
                  n.e("97262"),
                  n.e("3795"),
                  n.e("29534"),
                  n.e("97283"),
                  n.e("62891"),
                  n.e("9429"),
              ]).then(n.bind(n, 228006));
              return (n) =>
                  (0, i.jsx)(
                      e,
                      o(r({}, n), {
                          user: t,
                          channel: a,
                      }),
                  );
          })
        : a.isDM()
          ? (0, l.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("54809"),
                    n.e("97262"),
                    n.e("3795"),
                    n.e("99011"),
                    n.e("29534"),
                    n.e("97283"),
                    n.e("93169"),
                    n.e("55150"),
                    n.e("39778"),
                    n.e("78229"),
                ]).then(n.bind(n, 385913));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        o(r({}, n), {
                            user: t,
                            channel: a,
                            showMute: !1,
                            targetIsUser: !0,
                        }),
                    );
            })
          : null != a.guild_id
            ? (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("54809"),
                      n.e("97262"),
                      n.e("3795"),
                      n.e("29534"),
                      n.e("97283"),
                      n.e("55296"),
                      n.e("84841"),
                      n.e("51444"),
                  ]).then(n.bind(n, 107632));
                  return (n) =>
                      (0, i.jsx)(
                          e,
                          o(r({}, n), {
                              user: t,
                              channel: a,
                              guildId: a.guild_id,
                          }),
                      );
              })
            : (0, l.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("57600")]).then(
                      n.bind(n, 668569),
                  );
                  return (n) =>
                      (0, i.jsx)(
                          e,
                          o(r({}, n), {
                              user: t,
                          }),
                      );
              });
}

function s(e, t) {
    let { user: a, channel: s, moderationAlertId: u, guildId: c } = t,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.getOwnPropertyNames(e);
                    for (i = 0; i < r.length; i++)
                        (n = r[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            return r;
        })(t, ["user", "channel", "moderationAlertId", "guildId"]);
    if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM()))
        throw Error("Cannot moderate user in DM or group DM");
    let p = null != c ? c : null == s ? void 0 : s.getGuildId();
    null != p &&
        (0, l.L3)(e, async () => {
            let { default: e } = await n.e("12970").then(n.bind(n, 104849));
            return (t) =>
                (0, i.jsx)(
                    e,
                    r(
                        o(r({}, t), {
                            user: a,
                            channelId: null == s ? void 0 : s.id,
                            guildId: p,
                            moderationAlertId: u,
                        }),
                        d,
                    ),
                );
        });
}

function u(e, t) {
    let { user: a, guildId: s, analyticsLocations: u, onCloseContextMenu: c, isViewOnly: d } = t;
    (0, l.L3)(e, async () => {
        let { default: e } = await n.e("83767").then(n.bind(n, 414506));
        return (t) =>
            (0, i.jsx)(
                e,
                o(r({}, t), {
                    user: a,
                    guildId: s,
                    analyticsLocations: u,
                    onCloseContextMenu: c,
                    isViewOnly: d,
                }),
            );
    });
}

function c(e, t, a) {
    null != a &&
        (0, l.L3)(e, async () => {
            let { default: e } = await n.e("77759").then(n.bind(n, 331458));
            return (t) =>
                (0, i.jsx)(
                    e,
                    o(r({}, t), {
                        guildId: a,
                    }),
                );
        });
}
