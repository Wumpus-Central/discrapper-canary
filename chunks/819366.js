n.d(t, { Z: () => C }), n(388685);
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
    _ = n(823415),
    p = n(670188),
    h = n(592125),
    m = n(271383),
    g = n(430824),
    E = n(699516),
    b = n(594174),
    y = n(5192),
    v = n(51144),
    O = n(377668);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
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
                        return (n) => (0, r.jsx)(e, N(S({}, n), { userId: t }));
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
function C(e) {
    let { className: t, userId: d, channelId: I, parsedUserId: T, content: C, inlinePreview: R = !1, viewingChannelId: P } = e,
        { analyticsLocations: w } = (0, c.ZP)(l.Z.USER_MENTION),
        D = (0, a.e7)([b.default], () => b.default.getUser(d)),
        L = (0, a.e7)([h.Z], () => h.Z.getChannel(I)),
        x = null != L ? L.getGuildId() : null,
        M =
            R || null == D || null == x || null == I
                ? void 0
                : (e) => {
                      null != L &&
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('94342'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      N(S({}, t), {
                                          viewingChannelId: P,
                                          user: D,
                                          channel: L,
                                          guildId: x
                                      })
                                  );
                          });
                  },
        k = v.ZP.useName(D),
        j = (0, a.e7)([h.Z, m.ZP, E.Z], () => y.ZP.getNickname(x, I, D)),
        U = g.Z.getGuild(x),
        G = (0, u.Ib)(U, L),
        [B, V] = i.useState(!1),
        F = (0, _.ic)({ location: 'UserMention' }),
        Z = G && d === O.fL ? O.jM : null;
    if (null == D)
        return (0, r.jsx)(A, {
            userId: T,
            className: t,
            children: C
        });
    let H = (e) =>
        (0, r.jsx)(
            f.Z,
            N(
                S(
                    {
                        className: t,
                        onContextMenu: M,
                        color: Z,
                        onClick: () => V((e) => !e)
                    },
                    e
                ),
                { children: '@'.concat(null != j ? j : k) }
            )
        );
    return R
        ? (0, r.jsx)(c.Gt, {
              value: w,
              children: H()
          })
        : (0, r.jsx)(c.Gt, {
              value: w,
              children: (0, r.jsx)(p.Z, {
                  user: D,
                  guildId: null != x ? x : void 0,
                  channelId: I,
                  position: o.tq ? 'top' : 'right',
                  clickTrap: B,
                  shouldShow: B,
                  shouldShowOnHover: F,
                  onRequestClose: () => V(!1),
                  children: function (e) {
                      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                      return H(n);
                  }
              })
          });
}
