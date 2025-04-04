n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(239091),
    o = n(644956),
    a = n(819366),
    s = n(592125);
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
let f = {
    handleUserContextMenu(e, t, o, a) {
        let l = s.Z.getChannel(t);
        null != l &&
            (0, i.jW)(a, async () => {
                let { default: t } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        d(c({}, n), {
                            user: e,
                            channel: l,
                            guildId: o
                        })
                    );
            });
    },
    react(e, t, n) {
        let { userId: i, channelId: s, parsedUserId: l, roleId: u, roleName: f, viewingChannelId: _ } = e;
        return null == i && (null != u || '@everyone' === f || '@here' === f)
            ? (0, r.jsx)(o.Z, d(c({ inlinePreview: n.formatInline }, e), { children: t(e.content, n) }), n.key)
            : (0, r.jsx)(
                  a.Z,
                  {
                      className: 'mention',
                      userId: i,
                      channelId: s,
                      viewingChannelId: _,
                      parsedUserId: l,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction
                  },
                  n.key
              );
    }
};
