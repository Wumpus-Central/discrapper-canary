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
    x = e(730852),
    p = e(963027),
    f = e(47167),
    _ = e(548118),
    m = e(378570),
    T = e(345942),
    E = e(576705),
    N = e(575731),
    g = e(21241),
    C = e(939496),
    I = e(10862),
    y = e(652215),
    j = e(996988),
    S = e(375708),
    O = e(514566);
let h = 3;
function P(t) {
    let { user: n, guild: e, channel: P, onAction: v, onClose: L } = t,
        { themeType: R } = (0, C.E)(),
        b = (0, N.A)(P),
        U = (0, f.Ay)(P),
        { canViewChannel: M, canConnect: D } = (0, l.cf)([E.A], () => ({
            canViewChannel: E.A.can(y.xBc.VIEW_CHANNEL, P),
            canConnect: P.isPrivate() || E.A.can(y.xBc.CONNECT, P),
        }));
    if (!M) return null;
    let G = R !== j.d.MODAL && R !== j.d.MODAL_V2 && R !== j.d.SIDEBAR;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.A, { className: O.Ph }),
            (0, i.jsxs)("div", {
                className: O.gx,
                children: [
                    (0, i.jsx)(s.m, {
                        asContainer: !0,
                        text: e.name,
                        "aria-label": !1,
                        children: (0, i.jsx)(_.Ay, {
                            guild: e,
                            size: _.Ay.Sizes.SMOL,
                            className: O.$f,
                            onClick: (t) => {
                                t.stopPropagation(), (0, T.u)(e.id), v?.({ action: "OPEN_VOICE_GUILD" }), L?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, i.jsxs)("div", {
                        className: O.FH,
                        children: [
                            (0, i.jsx)(I.A, {
                                channel: P,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: O.Ow,
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
                                      className: O.sd,
                                      "aria-label": (0, p.Ay)({ channel: P }),
                                      children: (0, i.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, i.jsx)(a.A, { children: U }),
                                      }),
                                  })
                                : (0, i.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(a.A, { children: U }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(r.A, {
                        users: b,
                        guildId: e.id,
                        channelId: P.id,
                        maxUsers: h,
                        size: A._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: O.NS,
                        onClickOverflow: (t) => {
                            t.stopPropagation(), v?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (t) => t.stopPropagation(),
                        disableUserPopout: !!G || ((t) => t === n.id),
                        "aria-label": S.intl.string(S.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
