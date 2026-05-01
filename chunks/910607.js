e.d(n, { A: () => P, k: () => h });
var i = e(627968);
e(64700);
var l = e(17928),
    a = e(780645),
    r = e(342952),
    s = e(990078),
    o = e(834730),
    c = e(939249),
    u = e(320448),
    d = e(661531),
    A = e(778712),
    x = e(956793),
    p = e(963027),
    f = e(47167),
    _ = e(548118),
    m = e(378570),
    T = e(345942),
    E = e(576705),
    g = e(575731),
    N = e(21241),
    C = e(939496),
    I = e(10862),
    y = e(652215),
    j = e(996988),
    O = e(985018),
    S = e(514566);
let h = 3;
function P(t) {
    let { user: n, guild: e, channel: P, onAction: v, onClose: L } = t,
        { themeType: R } = (0, C.E)(),
        U = (0, g.A)(P),
        b = (0, f.Ay)(P),
        { canViewChannel: M, canConnect: D } = (0, l.cf)([E.A], () => ({
            canViewChannel: E.A.can(y.xBc.VIEW_CHANNEL, P),
            canConnect: P.isPrivate() || E.A.can(y.xBc.CONNECT, P),
        }));
    if (!M) return null;
    let G = R !== j.d.MODAL && R !== j.d.MODAL_V2 && R !== j.d.SIDEBAR;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.A, { className: S.Ph }),
            (0, i.jsxs)("div", {
                className: S.gx,
                children: [
                    (0, i.jsx)(s.m, {
                        asContainer: !0,
                        text: e.name,
                        "aria-label": !1,
                        children: (0, i.jsx)(_.Ay, {
                            guild: e,
                            size: _.Ay.Sizes.SMOL,
                            className: S.$f,
                            onClick: (t) => {
                                t.stopPropagation(), (0, T.u)(e.id), v?.({ action: "OPEN_VOICE_GUILD" }), L?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, i.jsxs)("div", {
                        className: S.FH,
                        children: [
                            (0, i.jsx)(I.A, {
                                channel: P,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: S.Ow,
                            }),
                            D
                                ? (0, i.jsx)(c.D, {
                                      onClick: (t) => {
                                          t.stopPropagation(),
                                              x.default.selectVoiceChannel(P.id),
                                              (0, m.iN)(P.id),
                                              v?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              L?.();
                                      },
                                      className: S.sd,
                                      "aria-label": (0, p.Ay)({ channel: P }),
                                      children: (0, i.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, i.jsx)(a.A, { children: b }),
                                      }),
                                  })
                                : (0, i.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(a.A, { children: b }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(r.A, {
                        users: U,
                        guildId: e.id,
                        channelId: P.id,
                        maxUsers: h,
                        size: A._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: S.NS,
                        onClickOverflow: (t) => {
                            t.stopPropagation(), v?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
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
