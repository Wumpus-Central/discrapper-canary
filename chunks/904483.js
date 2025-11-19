n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(496675),
    c = n(981631),
    o = n(647086),
    u = n(388032);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
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
function p(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.can(c.Plq.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : e.id === o._
          ? (0, r.jsx)(l.sNh, {
                id: "create-category",
                label: u.intl.string(u.t["ISN+NM"]),
                action: () =>
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e("1812").then(n.bind(n, 477782));
                        return (t) => (0, r.jsx)(e, s({}, t));
                    }),
            })
          : t
            ? [
                  (0, r.jsx)(
                      l.sNh,
                      {
                          id: "create-channel",
                          label: u.intl.string(u.t["fUYU+j"]),
                          action: () =>
                              (0, l.ZDy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("33285"),
                                      n.e("29497"),
                                      n.e("26861"),
                                  ]).then(n.bind(n, 241865));
                                  return (n) =>
                                      (0, r.jsx)(
                                          t,
                                          d(s({}, n), {
                                              channelType: c.d4z.GUILD_TEXT,
                                              guildId: e.id,
                                          }),
                                      );
                              }),
                      },
                      "create-channel",
                  ),
                  (0, r.jsx)(
                      l.sNh,
                      {
                          id: "create-category",
                          label: u.intl.string(u.t["ISN+NM"]),
                          action: () =>
                              (0, l.ZDy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("33285"),
                                      n.e("29497"),
                                      n.e("26861"),
                                  ]).then(n.bind(n, 241865));
                                  return (n) =>
                                      (0, r.jsx)(
                                          t,
                                          d(s({}, n), {
                                              channelType: c.d4z.GUILD_CATEGORY,
                                              guildId: e.id,
                                          }),
                                      );
                              }),
                      },
                      "create-category",
                  ),
              ]
            : null;
}
