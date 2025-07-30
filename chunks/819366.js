n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    a = n(873546),
    o = n(442837),
    s = n(239091),
    l = n(100527),
    c = n(906732),
    u = n(927723),
    d = n(124072),
    f = n(670188),
    _ = n(592125),
    p = n(271383),
    h = n(699516),
    m = n(594174),
    g = n(5192),
    E = n(51144);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { userId: t, className: a, children: o } = e,
        l = i.useCallback(() => {
            (0, u.k)({ kind: 'user' });
        }, []),
        c = i.useCallback(
            (e) => {
                null != t &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e('25073').then(n.bind(n, 80742));
                        return (n) => (0, r.jsx)(e, v(y({}, n), { userId: t }));
                    });
            },
            [t]
        );
    return (0, r.jsx)(d.Z, {
        className: a,
        onClick: l,
        onContextMenu: c,
        children: o
    });
}
function T(e) {
    let { className: t, userId: u, channelId: b, parsedUserId: O, content: T, inlinePreview: S = !1, viewingChannelId: A } = e,
        N = i.useRef(null),
        { analyticsLocations: C } = (0, c.ZP)(l.Z.USER_MENTION),
        R = (0, o.e7)([m.default], () => m.default.getUser(u)),
        P = (0, o.e7)([_.Z], () => _.Z.getChannel(b)),
        w = null != P ? P.getGuildId() : null,
        D =
            S || null == R || null == w || null == b
                ? void 0
                : (e) => {
                      null != P &&
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('14006'), n.e('70274'), n.e('79695'), n.e('80417'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('72374')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      v(y({}, t), {
                                          viewingChannelId: A,
                                          user: R,
                                          channel: P,
                                          guildId: w
                                      })
                                  );
                          });
                  },
        L = E.ZP.useName(R),
        x = (0, o.e7)([_.Z, p.ZP, h.Z], () => g.ZP.getNickname(w, b, R));
    if (null == R)
        return (0, r.jsx)(I, {
            userId: O,
            className: t,
            children: T
        });
    let M = (e) =>
        (0, r.jsx)(
            d.Z,
            v(
                y(
                    {
                        ref: N,
                        className: t,
                        onContextMenu: D
                    },
                    e
                ),
                { children: '@'.concat(null != x ? x : L) }
            )
        );
    return S
        ? (0, r.jsx)(c.Gt, {
              value: C,
              children: M()
          })
        : (0, r.jsx)(c.Gt, {
              value: C,
              children: (0, r.jsx)(f.Z, {
                  targetElementRef: N,
                  user: R,
                  guildId: null != w ? w : void 0,
                  channelId: b,
                  position: a.tq ? 'top' : 'right',
                  clickTrap: !0,
                  children: (e) => M(e)
              })
          });
}
