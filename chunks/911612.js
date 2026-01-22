n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(576705),
    a = n(652215),
    o = n(349828),
    c = n(985018);
function u(e) {
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
function d(e, t) {
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
function g(e) {
    let t = (0, r.bG)([l.A], () => l.A.can(a.xBc.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : e.id === o.V
          ? (0, i.jsx)(s.Drp, {
                id: "create-category",
                label: c.intl.string(c.t["ISN+NM"]),
                action: () =>
                    (0, s.mMO)(async () => {
                        let { default: e } = await n.e("28020").then(n.bind(n, 395199));
                        return (t) => (0, i.jsx)(e, u({}, t));
                    }),
            })
          : t
            ? [
                  (0, i.jsx)(
                      s.Drp,
                      {
                          id: "create-channel",
                          label: c.intl.string(c.t["fUYU+j"]),
                          action: () =>
                              (0, s.mMO)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("72271"),
                                      n.e("64233"),
                                      n.e("63641"),
                                  ]).then(n.bind(n, 409200));
                                  return (n) =>
                                      (0, i.jsx)(
                                          t,
                                          d(u({}, n), {
                                              channelType: a.rbe.GUILD_TEXT,
                                              guildId: e.id,
                                          }),
                                      );
                              }),
                      },
                      "create-channel",
                  ),
                  (0, i.jsx)(
                      s.Drp,
                      {
                          id: "create-category",
                          label: c.intl.string(c.t["ISN+NM"]),
                          action: () =>
                              (0, s.mMO)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("72271"),
                                      n.e("64233"),
                                      n.e("63641"),
                                  ]).then(n.bind(n, 409200));
                                  return (n) =>
                                      (0, i.jsx)(
                                          t,
                                          d(u({}, n), {
                                              channelType: a.rbe.GUILD_CATEGORY,
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
