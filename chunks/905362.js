n.d(t, {
    CK: () => _,
    SJ: () => f
});
var r = n(200651);
n(192379);
var i = n(704215),
    o = n(481060),
    a = n(645041),
    s = n(693546);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('95883').then(n.bind(n, 83521));
        return (n) => {
            let o = (t) => {
                (0, a.Qd)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose();
            };
            return (0, r.jsx)(
                t,
                d(c({}, n), {
                    onClose: o,
                    guildId: e
                })
            );
        };
    });
}
function _(e, t) {
    (0, o.ZDy)(async () => {
        let { default: i } = await Promise.all([n.e('82158'), n.e('48844')]).then(n.bind(n, 717057));
        return (n) => {
            let o = () => {
                null != t && s.Z.ackUserGuildJoinRequest(e, t), n.onClose();
            };
            return (0, r.jsx)(
                i,
                d(c({}, n), {
                    onAccept: o,
                    guildId: e
                })
            );
        };
    });
}
n(970606);
