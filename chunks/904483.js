n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    c = n(496675),
    a = n(981631),
    o = n(647086),
    s = n(388032);
function u(e) {
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
function b(e) {
    let t = (0, l.e7)([c.Z], () => c.Z.can(a.Plq.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : e.id === o._
          ? (0, r.jsx)(i.sNh, {
                id: 'create-category',
                label: s.NW.string(s.t['ISN+ND']),
                action: () =>
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e('1812').then(n.bind(n, 477782));
                        return (t) => (0, r.jsx)(e, u({}, t));
                    })
            })
          : t
            ? [
                  (0, r.jsx)(
                      i.sNh,
                      {
                          id: 'create-channel',
                          label: s.NW.string(s.t['fUYU+v']),
                          action: () =>
                              (0, i.ZDy)(async () => {
                                  let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
                                  return (n) =>
                                      (0, r.jsx)(
                                          t,
                                          d(u({}, n), {
                                              channelType: a.d4z.GUILD_TEXT,
                                              guildId: e.id
                                          })
                                      );
                              })
                      },
                      'create-channel'
                  ),
                  (0, r.jsx)(
                      i.sNh,
                      {
                          id: 'create-category',
                          label: s.NW.string(s.t['ISN+ND']),
                          action: () =>
                              (0, i.ZDy)(async () => {
                                  let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
                                  return (n) =>
                                      (0, r.jsx)(
                                          t,
                                          d(u({}, n), {
                                              channelType: a.d4z.GUILD_CATEGORY,
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
