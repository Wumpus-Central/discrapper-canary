r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(512722),
    s = r.n(o),
    l = r(873546),
    u = r(442837),
    c = r(481060),
    d = r(239091),
    f = r(100527),
    p = r(906732),
    h = r(927723),
    _ = r(645727),
    m = r(124072),
    g = r(184301),
    E = r(347475),
    v = r(592125),
    y = r(271383),
    b = r(430824),
    I = r(699516),
    T = r(594174),
    S = r(5192),
    A = r(51144),
    C = r(377668);
function N(e) {
    let { userId: n, className: o, children: s } = e,
        l = a.useCallback(() => {
            (0, _.k)({ kind: 'user' });
        }, []),
        u = a.useCallback(
            (e) => {
                if (null != n)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await r.e('25073').then(r.bind(r, 80742));
                        return (r) =>
                            (0, i.jsx)(e, {
                                ...r,
                                userId: n
                            });
                    });
            },
            [n]
        );
    return (0, i.jsx)(m.Z, {
        className: o,
        onClick: l,
        onContextMenu: u,
        children: s
    });
}
function R(e) {
    let { className: n, userId: a, channelId: o, parsedUserId: _, content: R, inlinePreview: O = !1, viewingChannelId: D } = e,
        { analyticsLocations: L } = (0, p.ZP)(f.Z.USER_MENTION),
        x = (0, u.e7)([T.default], () => T.default.getUser(a)),
        w = (0, u.e7)([v.Z], () => v.Z.getChannel(o)),
        P = null != w ? w.getGuildId() : null,
        M =
            O || null == x || null == P || null == o
                ? void 0
                : (e) => {
                      null != w &&
                          (0, d.jW)(e, async () => {
                              let { default: e } = await Promise.all([r.e('50506'), r.e('79695'), r.e('51269'), r.e('13351'), r.e('33862'), r.e('92453'), r.e('13125'), r.e('54492')]).then(r.bind(r, 757387));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      viewingChannelId: D,
                                      user: x,
                                      channel: w,
                                      guildId: P
                                  });
                          });
                  },
        k = A.ZP.useName(x),
        U = (0, u.e7)([v.Z, y.ZP, I.Z], () => S.ZP.getNickname(P, o, x)),
        B = b.Z.getGuild(P),
        G = (0, h.Ib)(B, w) && a === C.fL ? C.jM : null;
    if (null == x)
        return (0, i.jsx)(N, {
            userId: _,
            className: n,
            children: R
        });
    let Z = (e) =>
        (0, i.jsx)(m.Z, {
            className: n,
            onContextMenu: M,
            color: G,
            ...e,
            children: '@'.concat(null != U ? U : k)
        });
    return O
        ? (0, i.jsx)(p.Gt, {
              value: L,
              children: Z()
          })
        : (0, i.jsx)(p.Gt, {
              value: L,
              children: (0, i.jsx)(c.Popout, {
                  preload:
                      null == x
                          ? void 0
                          : () =>
                                (0, g.Z)(x.id, x.getAvatarURL(P, 80), {
                                    guildId: null != P ? P : void 0,
                                    channelId: null != o ? o : void 0
                                }),
                  renderPopout: (e) => (
                      s()(null != x, 'Unexpected missing user'),
                      (0, i.jsx)(E.Z, {
                          userId: x.id,
                          guildId: null != P ? P : void 0,
                          channelId: o,
                          ...e
                      })
                  ),
                  position: l.tq ? 'top' : 'right',
                  children: (e) => Z(e)
              })
          });
}
