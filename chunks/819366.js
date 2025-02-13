n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(239091),
    d = n(100527),
    f = n(906732),
    _ = n(927723),
    p = n(645727),
    h = n(124072),
    m = n(184301),
    g = n(347475),
    E = n(592125),
    v = n(271383),
    y = n(430824),
    I = n(699516),
    T = n(594174),
    b = n(5192),
    S = n(51144),
    A = n(377668);
function N(e) {
    let { userId: t, className: a, children: s } = e,
        o = r.useCallback(() => {
            (0, p.k)({ kind: 'user' });
        }, []),
        l = r.useCallback(
            (e) => {
                null != t &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('25073').then(n.bind(n, 80742));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                userId: t
                            });
                    });
            },
            [t]
        );
    return (0, i.jsx)(h.Z, {
        className: a,
        onClick: o,
        onContextMenu: l,
        children: s
    });
}
function C(e) {
    let { className: t, userId: r, channelId: a, parsedUserId: p, content: C, inlinePreview: R = !1, viewingChannelId: O } = e,
        { analyticsLocations: D } = (0, f.ZP)(d.Z.USER_MENTION),
        L = (0, l.e7)([T.default], () => T.default.getUser(r)),
        x = (0, l.e7)([E.Z], () => E.Z.getChannel(a)),
        P = null != x ? x.getGuildId() : null,
        w =
            R || null == L || null == P || null == a
                ? void 0
                : (e) => {
                      null != x &&
                          (0, c.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('7717'), n.e('71027')]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      viewingChannelId: O,
                                      user: L,
                                      channel: x,
                                      guildId: P
                                  });
                          });
                  },
        M = S.ZP.useName(L),
        k = (0, l.e7)([E.Z, v.ZP, I.Z], () => b.ZP.getNickname(P, a, L)),
        U = y.Z.getGuild(P),
        G = (0, _.Ib)(U, x) && r === A.fL ? A.jM : null;
    if (null == L)
        return (0, i.jsx)(N, {
            userId: p,
            className: t,
            children: C
        });
    let B = (e) =>
        (0, i.jsx)(h.Z, {
            className: t,
            onContextMenu: w,
            color: G,
            ...e,
            children: '@'.concat(null != k ? k : M)
        });
    return R
        ? (0, i.jsx)(f.Gt, {
              value: D,
              children: B()
          })
        : (0, i.jsx)(f.Gt, {
              value: D,
              children: (0, i.jsx)(u.yRy, {
                  preload:
                      null == L
                          ? void 0
                          : () =>
                                (0, m.Z)(L.id, L.getAvatarURL(P, 80), {
                                    guildId: null != P ? P : void 0,
                                    channelId: null != a ? a : void 0
                                }),
                  renderPopout: (e) => (
                      s()(null != L, 'Unexpected missing user'),
                      (0, i.jsx)(g.Z, {
                          userId: L.id,
                          guildId: null != P ? P : void 0,
                          channelId: a,
                          ...e
                      })
                  ),
                  position: o.tq ? 'top' : 'right',
                  children: (e) => B(e)
              })
          });
}
