n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    o = n(873546),
    a = n(442837),
    s = n(239091),
    l = n(100527),
    c = n(906732),
    u = n(797610),
    d = n(927723),
    f = n(124072),
    _ = n(670188),
    p = n(592125),
    h = n(271383),
    m = n(430824),
    g = n(699516),
    E = n(594174),
    b = n(5192),
    y = n(51144),
    v = n(377668);
function O(e, t, n) {
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
function I(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { userId: t, className: o, children: a } = e,
        l = i.useCallback(() => {
            (0, d.k)({ kind: 'user' });
        }, []),
        c = i.useCallback(
            (e) => {
                null != t &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e('25073').then(n.bind(n, 80742));
                        return (n) => (0, r.jsx)(e, T(I({}, n), { userId: t }));
                    });
            },
            [t]
        );
    return (0, r.jsx)(f.Z, {
        className: o,
        onClick: l,
        onContextMenu: c,
        children: a
    });
}
function A(e) {
    let { className: t, userId: i, channelId: d, parsedUserId: O, content: S, inlinePreview: A = !1, viewingChannelId: C } = e,
        { analyticsLocations: R } = (0, c.ZP)(l.Z.USER_MENTION),
        P = (0, a.e7)([E.default], () => E.default.getUser(i)),
        w = (0, a.e7)([p.Z], () => p.Z.getChannel(d)),
        D = null != w ? w.getGuildId() : null,
        L =
            A || null == P || null == D || null == d
                ? void 0
                : (e) => {
                      null != w &&
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('94342'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      T(I({}, t), {
                                          viewingChannelId: C,
                                          user: P,
                                          channel: w,
                                          guildId: D
                                      })
                                  );
                          });
                  },
        x = y.ZP.useName(P),
        M = (0, a.e7)([p.Z, h.ZP, g.Z], () => b.ZP.getNickname(D, d, P)),
        k = m.Z.getGuild(D),
        j = (0, u.Ib)(k, w) && i === v.fL ? v.jM : null;
    if (null == P)
        return (0, r.jsx)(N, {
            userId: O,
            className: t,
            children: S
        });
    let U = (e) =>
        (0, r.jsx)(
            f.Z,
            T(
                I(
                    {
                        className: t,
                        onContextMenu: L,
                        color: j
                    },
                    e
                ),
                { children: '@'.concat(null != M ? M : x) }
            )
        );
    return A
        ? (0, r.jsx)(c.Gt, {
              value: R,
              children: U()
          })
        : (0, r.jsx)(c.Gt, {
              value: R,
              children: (0, r.jsx)(_.Z, {
                  user: P,
                  guildId: null != D ? D : void 0,
                  channelId: d,
                  position: o.tq ? 'top' : 'right',
                  clickTrap: !0,
                  children: (e) => U(e)
              })
          });
}
