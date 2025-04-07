n.d(t, { C: () => i });
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(693546);
function i(e, t) {
    (0, l.ZDy)(async () => {
        let { default: l } = await Promise.all([n.e('82158'), n.e('67071')]).then(n.bind(n, 717057));
        return (n) => {
            var i, o;
            return (0, r.jsx)(
                l,
                ((i = (function (e) {
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
                })({}, n)),
                (o = o =
                    {
                        onAccept: () => {
                            null != t && a.Z.ackUserGuildJoinRequest(e, t), n.onClose();
                        },
                        guildId: e
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                i)
            );
        };
    });
}
