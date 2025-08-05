n.d(t, { D: () => c });
var r = n(255367);
n(73800);
var i = n(239091);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            }));
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
function c(e, t, a, s, c) {
    let u = a.getGuildId();
    return null != u
        ? (0, i.jW)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e('8982'), n.e('80125'), n.e('61866')]).then(n.bind(n, 357823));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          l(o({}, n), {
                              user: t,
                              channel: a,
                              guildId: u,
                              onInteraction: (e) => c('GuildVoiceUserContextMenu', e)
                          })
                      );
              },
              s
          )
        : (0, i.jW)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e('80125'), n.e('47452')]).then(n.bind(n, 238296));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          l(o({}, n), {
                              user: t,
                              channel: a,
                              onInteraction: (e) => c('BaseVoiceUserContextMenu', e)
                          })
                      );
              },
              s
          );
}
