e.d(n, { A: () => v, k: () => h });
var l = e(477900);
e(582128);
var i = e(17928),
    r = e(3026),
    a = e(342952),
    s = e(866665),
    o = e(834730),
    c = e(939249),
    u = e(320448),
    d = e(661531),
    A = e(778712),
    x = e(730852),
    p = e(963027),
    f = e(47167),
    m = e(548118),
    _ = e(378570),
    T = e(345942),
    E = e(576705),
    g = e(575731),
    N = e(21241),
    C = e(939496),
    I = e(10862),
    y = e(652215),
    j = e(996988),
    O = e(375708),
    S = e(260155);
let h = 3;
function v(t) {
    let { user: n, guild: e, channel: v, onAction: P, onClose: R } = t,
        { themeType: L } = (0, C.E)(),
        U = (0, g.A)(v),
        b = (0, f.Ay)(v),
        { canViewChannel: M, canConnect: D } = (0, i.cf)([E.A], () => ({
            canViewChannel: E.A.can(y.xBc.VIEW_CHANNEL, v),
            canConnect: v.isPrivate() || E.A.can(y.xBc.CONNECT, v),
        }));
    if (!M) return null;
    let G = L !== j.d.MODAL && L !== j.d.MODAL_V2 && L !== j.d.SIDEBAR;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.A, { className: S.Ph }),
            (0, l.jsxs)("div", {
                className: S.gx,
                children: [
                    (0, l.jsx)(s.m, {
                        asContainer: !0,
                        text: e.name,
                        "aria-label": !1,
                        children: (0, l.jsx)(m.Ay, {
                            guild: e,
                            size: m.Ay.Sizes.SMOL,
                            className: S.$f,
                            onClick: (t) => {
                                (t.stopPropagation(), (0, T.u)(e.id), P?.({ action: "OPEN_VOICE_GUILD" }), R?.());
                            },
                        }),
                    }),
                    (0, l.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, l.jsxs)("div", {
                        className: S.FH,
                        children: [
                            (0, l.jsx)(I.A, {
                                channel: v,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: S.Ow,
                            }),
                            D
                                ? (0, l.jsx)(c.D, {
                                      onClick: (t) => {
                                          (t.stopPropagation(),
                                              x.default.selectVoiceChannel(v.id),
                                              (0, _.iN)(v.id),
                                              P?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              R?.());
                                      },
                                      className: S.sd,
                                      "aria-label": (0, p.Ay)({ channel: v }),
                                      children: (0, l.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, l.jsx)(r.A, { children: b }),
                                      }),
                                  })
                                : (0, l.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, l.jsx)(r.A, { children: b }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(a.A, {
                        users: U,
                        guildId: e.id,
                        channelId: v.id,
                        maxUsers: h,
                        size: A._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: S.NS,
                        onClickOverflow: (t) => {
                            (t.stopPropagation(), P?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" }));
                        },
                        onUserClick: (t) => t.stopPropagation(),
                        disableUserPopout: !!G || ((t) => t === n.id),
                        "aria-label": O.intl.string(O.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
