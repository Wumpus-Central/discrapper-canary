r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(512722),
    o = r.n(s),
    l = r(873546),
    u = r(442837),
    c = r(481060),
    d = r(239091),
    f = r(100527),
    _ = r(906732),
    h = r(927723),
    p = r(645727),
    m = r(124072),
    g = r(184301),
    E = r(347475),
    v = r(592125),
    I = r(271383),
    T = r(430824),
    b = r(699516),
    y = r(594174),
    S = r(5192),
    A = r(51144),
    N = r(377668);
function C(e) {
    let { userId: n, className: s, children: o } = e,
        l = a.useCallback(() => {
            (0, p.k)({ kind: 'user' });
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
        className: s,
        onClick: l,
        onContextMenu: u,
        children: o
    });
}
function R(e) {
    let { className: n, userId: a, channelId: s, parsedUserId: p, content: R, inlinePreview: O = !1, viewingChannelId: D } = e,
        { analyticsLocations: L } = (0, _.ZP)(f.Z.USER_MENTION),
        x = (0, u.e7)([y.default], () => y.default.getUser(a)),
        w = (0, u.e7)([v.Z], () => v.Z.getChannel(s)),
        P = null != w ? w.getGuildId() : null,
        M =
            O || null == x || null == P || null == s
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
        U = (0, u.e7)([v.Z, I.ZP, b.Z], () => S.ZP.getNickname(P, s, x)),
        B = T.Z.getGuild(P),
        G = (0, h.Ib)(B, w) && a === N.fL ? N.jM : null;
    if (null == x)
        return (0, i.jsx)(C, {
            userId: p,
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
        ? (0, i.jsx)(_.Gt, {
              value: L,
              children: Z()
          })
        : (0, i.jsx)(_.Gt, {
              value: L,
              children: (0, i.jsx)(c.Popout, {
                  preload:
                      null == x
                          ? void 0
                          : () =>
                                (0, g.Z)(x.id, x.getAvatarURL(P, 80), {
                                    guildId: null != P ? P : void 0,
                                    channelId: null != s ? s : void 0
                                }),
                  renderPopout: (e) => (
                      o()(null != x, 'Unexpected missing user'),
                      (0, i.jsx)(E.Z, {
                          userId: x.id,
                          guildId: null != P ? P : void 0,
                          channelId: s,
                          ...e
                      })
                  ),
                  position: l.tq ? 'top' : 'right',
                  children: (e) => Z(e)
              })
          });
}
