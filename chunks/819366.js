n.d(t, { Z: () => N });
var r = n(255367),
    i = n(73800),
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
    O = n(377668);
function v(e, t, n) {
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
                v(e, t, n[t]);
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
function A(e) {
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
function N(e) {
    let { className: t, userId: d, channelId: v, parsedUserId: S, content: N, inlinePreview: C = !1, viewingChannelId: P } = e,
        R = i.useRef(null),
        { analyticsLocations: w } = (0, c.ZP)(l.Z.USER_MENTION),
        D = (0, a.e7)([E.default], () => E.default.getUser(d)),
        L = (0, a.e7)([p.Z], () => p.Z.getChannel(v)),
        x = null != L ? L.getGuildId() : null,
        k =
            C || null == D || null == x || null == v
                ? void 0
                : (e) => {
                      null != L &&
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('94342'), n.e('26881'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('87918')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      T(I({}, t), {
                                          viewingChannelId: P,
                                          user: D,
                                          channel: L,
                                          guildId: x
                                      })
                                  );
                          });
                  },
        M = y.ZP.useName(D),
        j = (0, a.e7)([p.Z, h.ZP, g.Z], () => b.ZP.getNickname(x, v, D)),
        U = m.Z.getGuild(x),
        G = (0, u.Ib)(U, L) && d === O.fL ? O.jM : null;
    if (null == D)
        return (0, r.jsx)(A, {
            userId: S,
            className: t,
            children: N
        });
    let B = (e) =>
        (0, r.jsx)(
            f.Z,
            T(
                I(
                    {
                        ref: R,
                        className: t,
                        onContextMenu: k,
                        color: G
                    },
                    e
                ),
                { children: '@'.concat(null != j ? j : M) }
            )
        );
    return C
        ? (0, r.jsx)(c.Gt, {
              value: w,
              children: B()
          })
        : (0, r.jsx)(c.Gt, {
              value: w,
              children: (0, r.jsx)(_.Z, {
                  targetElementRef: R,
                  user: D,
                  guildId: null != x ? x : void 0,
                  channelId: v,
                  position: o.tq ? 'top' : 'right',
                  clickTrap: !0,
                  children: (e) => B(e)
              })
          });
}
