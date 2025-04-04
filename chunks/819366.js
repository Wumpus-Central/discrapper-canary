n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(873546),
    l = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(100527),
    f = n(906732),
    _ = n(797610),
    p = n(927723),
    h = n(124072),
    m = n(184301),
    g = n(347475),
    E = n(592125),
    b = n(271383),
    y = n(430824),
    v = n(699516),
    O = n(594174),
    I = n(5192),
    S = n(51144),
    T = n(377668);
function N(e, t, n) {
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { userId: t, className: o, children: a } = e,
        s = i.useCallback(() => {
            (0, p.k)({ kind: 'user' });
        }, []),
        l = i.useCallback(
            (e) => {
                null != t &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await n.e('25073').then(n.bind(n, 80742));
                        return (n) => (0, r.jsx)(e, R(A({}, n), { userId: t }));
                    });
            },
            [t]
        );
    return (0, r.jsx)(h.Z, {
        className: o,
        onClick: s,
        onContextMenu: l,
        children: a
    });
}
function w(e) {
    let { className: t, userId: i, channelId: o, parsedUserId: p, content: N, inlinePreview: C = !1, viewingChannelId: w } = e,
        { analyticsLocations: D } = (0, f.ZP)(d.Z.USER_MENTION),
        L = (0, l.e7)([O.default], () => O.default.getUser(i)),
        x = (0, l.e7)([E.Z], () => E.Z.getChannel(o)),
        M = null != x ? x.getGuildId() : null,
        k =
            C || null == L || null == M || null == o
                ? void 0
                : (e) => {
                      null != x &&
                          (0, u.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('20204')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      R(A({}, t), {
                                          viewingChannelId: w,
                                          user: L,
                                          channel: x,
                                          guildId: M
                                      })
                                  );
                          });
                  },
        j = S.ZP.useName(L),
        U = (0, l.e7)([E.Z, b.ZP, v.Z], () => I.ZP.getNickname(M, o, L)),
        G = y.Z.getGuild(M),
        B = (0, _.Ib)(G, x) && i === T.fL ? T.jM : null;
    if (null == L)
        return (0, r.jsx)(P, {
            userId: p,
            className: t,
            children: N
        });
    let F = (e) =>
        (0, r.jsx)(
            h.Z,
            R(
                A(
                    {
                        className: t,
                        onContextMenu: k,
                        color: B
                    },
                    e
                ),
                { children: '@'.concat(null != U ? U : j) }
            )
        );
    return C
        ? (0, r.jsx)(f.Gt, {
              value: D,
              children: F()
          })
        : (0, r.jsx)(f.Gt, {
              value: D,
              children: (0, r.jsx)(c.yRy, {
                  preload:
                      null == L
                          ? void 0
                          : () =>
                                (0, m.Z)(L.id, L.getAvatarURL(M, 80), {
                                    guildId: null != M ? M : void 0,
                                    channelId: null != o ? o : void 0
                                }),
                  renderPopout: (e) => (
                      a()(null != L, 'Unexpected missing user'),
                      (0, r.jsx)(
                          g.Z,
                          A(
                              {
                                  userId: L.id,
                                  guildId: null != M ? M : void 0,
                                  channelId: o
                              },
                              e
                          )
                      )
                  ),
                  position: s.tq ? 'top' : 'right',
                  clickTrap: !0,
                  children: (e) => F(e)
              })
          });
}
