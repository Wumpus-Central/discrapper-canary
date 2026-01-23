n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(442433),
    a = n(593284),
    s = n(288539),
    o = n(734057);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
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
    handleUserContextMenu(e, t, a, s) {
        let l = o.A.getChannel(t);
        null != l &&
            (0, i.L3)(s, async () => {
                let { default: t } = await Promise.all([
                    n.e("97262"),
                    n.e("29534"),
                    n.e("33818"),
                    n.e("55296"),
                    n.e("84841"),
                    n.e("9001"),
                ]).then(n.bind(n, 107632));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        d(c({}, n), {
                            user: e,
                            channel: l,
                            guildId: a,
                        }),
                    );
            });
    },
    react(e, t, n) {
        let { userId: i, channelId: o, parsedUserId: l, roleId: u, roleName: f, viewingChannelId: p } = e;
        return null == i && (null != u || "@everyone" === f || "@here" === f)
            ? (0, r.jsx)(
                  a.A,
                  d(
                      c(
                          {
                              inlinePreview: n.formatInline,
                          },
                          e,
                      ),
                      {
                          children: t(e.content, n),
                      },
                  ),
                  n.key,
              )
            : (0, r.jsx)(
                  s.A,
                  {
                      className: "mention",
                      userId: i,
                      channelId: o,
                      viewingChannelId: p,
                      parsedUserId: l,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction,
                  },
                  n.key,
              );
    },
};
