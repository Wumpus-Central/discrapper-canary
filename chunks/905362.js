n.d(t, {
    CK: () => d,
    SJ: () => u
});
var r = n(200651);
n(192379);
var i = n(704215),
    o = n(481060),
    l = n(645041),
    s = n(693546);
function a(e) {
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
function c(e, t) {
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
function u(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('95883').then(n.bind(n, 83521));
        return (n) =>
            (0, r.jsx)(
                t,
                c(a({}, n), {
                    onClose: (t) => {
                        (0, l.Qd)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose();
                    },
                    guildId: e
                })
            );
    });
}
function d(e, t) {
    (0, o.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('82158'), n.e('67071')]).then(n.bind(n, 717057));
        return (n) =>
            (0, r.jsx)(
                i,
                c(a({}, n), {
                    onAccept: () => {
                        null != t && s.Z.ackUserGuildJoinRequest(e, t), n.onClose();
                    },
                    guildId: e
                })
            );
    });
}
n(970606);
