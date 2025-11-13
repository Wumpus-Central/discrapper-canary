n.d(t, { D: () => o });
var i = n(951288);
n(647438);
var r = n(239091);
function l(e) {
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
function a(e, t) {
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
function o(e, t, o, s, c) {
    let u = o.getGuildId();
    return null != u
        ? (0, r.jW)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e("8982"), n.e("80125"), n.e("81141")]).then(
                      n.bind(n, 357823),
                  );
                  return (n) =>
                      (0, i.jsx)(
                          e,
                          a(l({}, n), {
                              user: t,
                              channel: o,
                              guildId: u,
                              onInteraction: (e) => c("GuildVoiceUserContextMenu", e),
                          }),
                      );
              },
              s,
          )
        : (0, r.jW)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e("80125"), n.e("24509")]).then(n.bind(n, 238296));
                  return (n) =>
                      (0, i.jsx)(
                          e,
                          a(l({}, n), {
                              user: t,
                              channel: o,
                              onInteraction: (e) => c("BaseVoiceUserContextMenu", e),
                          }),
                      );
              },
              s,
          );
}
