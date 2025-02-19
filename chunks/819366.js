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
    p = n(927723),
    _ = n(645727),
    h = n(124072),
    m = n(184301),
    g = n(347475),
    E = n(592125),
    v = n(271383),
    b = n(430824),
    y = n(699516),
    O = n(594174),
    S = n(5192),
    I = n(51144),
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
            (0, _.k)({ kind: 'user' });
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
    let { className: t, userId: i, channelId: o, parsedUserId: _, content: N, inlinePreview: C = !1, viewingChannelId: w } = e,
        { analyticsLocations: D } = (0, f.ZP)(d.Z.USER_MENTION),
        x = (0, l.e7)([O.default], () => O.default.getUser(i)),
        L = (0, l.e7)([E.Z], () => E.Z.getChannel(o)),
        M = null != L ? L.getGuildId() : null,
        k =
            C || null == x || null == M || null == o
                ? void 0
                : (e) => {
                      null != L &&
                          (0, u.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('6915'), n.e('97589'), n.e('7717'), n.e('32692')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      R(A({}, t), {
                                          viewingChannelId: w,
                                          user: x,
                                          channel: L,
                                          guildId: M
                                      })
                                  );
                          });
                  },
        j = I.ZP.useName(x),
        U = (0, l.e7)([E.Z, v.ZP, y.Z], () => S.ZP.getNickname(M, o, x)),
        G = b.Z.getGuild(M),
        B = (0, p.Ib)(G, L) && i === T.fL ? T.jM : null;
    if (null == x)
        return (0, r.jsx)(P, {
            userId: _,
            className: t,
            children: N
        });
    let Z = (e) =>
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
              children: Z()
          })
        : (0, r.jsx)(f.Gt, {
              value: D,
              children: (0, r.jsx)(c.yRy, {
                  preload:
                      null == x
                          ? void 0
                          : () =>
                                (0, m.Z)(x.id, x.getAvatarURL(M, 80), {
                                    guildId: null != M ? M : void 0,
                                    channelId: null != o ? o : void 0
                                }),
                  renderPopout: (e) => (
                      a()(null != x, 'Unexpected missing user'),
                      (0, r.jsx)(
                          g.Z,
                          A(
                              {
                                  userId: x.id,
                                  guildId: null != M ? M : void 0,
                                  channelId: o
                              },
                              e
                          )
                      )
                  ),
                  position: s.tq ? 'top' : 'right',
                  children: (e) => Z(e)
              })
          });
}
