n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    s = n(496675),
    o = n(981631),
    a = n(647086),
    c = n(388032);
function u(e) {
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
    let t = (0, r.e7)([s.Z], () => s.Z.can(o.Plq.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : e.id === a._
          ? (0, i.jsx)(l.sNh, {
                id: 'create-category',
                label: c.intl.string(c.t['ISN+ND']),
                action: () =>
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('1812').then(n.bind(n, 477782));
                        return (t) => (0, i.jsx)(e, u({}, t));
                    })
            })
          : t
            ? [
                  (0, i.jsx)(
                      l.sNh,
                      {
                          id: 'create-channel',
                          label: c.intl.string(c.t['fUYU+v']),
                          action: () =>
                              (0, l.ZDy)(async () => {
                                  let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
                                  return (n) =>
                                      (0, i.jsx)(
                                          t,
                                          d(u({}, n), {
                                              channelType: o.d4z.GUILD_TEXT,
                                              guildId: e.id
                                          })
                                      );
                              })
                      },
                      'create-channel'
                  ),
                  (0, i.jsx)(
                      l.sNh,
                      {
                          id: 'create-category',
                          label: c.intl.string(c.t['ISN+ND']),
                          action: () =>
                              (0, l.ZDy)(async () => {
                                  let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
                                  return (n) =>
                                      (0, i.jsx)(
                                          t,
                                          d(u({}, n), {
                                              channelType: o.d4z.GUILD_CATEGORY,
                                              guildId: e.id
                                          })
                                      );
                              })
                      },
                      'create-category'
                  )
              ]
            : null;
}
