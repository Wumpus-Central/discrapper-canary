e.d(n, { A: () => P, k: () => y });
var i = e(627968);
e(64700);
var l = e(17928),
    r = e(3026),
    a = e(342952),
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
    g = e(345942),
    E = e(576705),
    T = e(575731),
    N = e(21241),
    C = e(939496),
    I = e(10862),
    S = e(652215),
    O = e(996988),
    h = e(985018),
    j = e(514566);
let y = 3;
function P(t) {
    let { user: n, guild: e, channel: P, onAction: v, onClose: L } = t,
        { themeType: R } = (0, C.E)(),
        b = (0, T.A)(P),
        D = (0, f.Ay)(P),
        { canViewChannel: U, canConnect: M } = (0, l.cf)([E.A], () => ({
            canViewChannel: E.A.can(S.xBc.VIEW_CHANNEL, P),
            canConnect: P.isPrivate() || E.A.can(S.xBc.CONNECT, P),
        }));
    if (!U) return null;
    let G = R !== O.d.MODAL && R !== O.d.MODAL_V2 && R !== O.d.SIDEBAR;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.A, { className: j.Ph }),
            (0, i.jsxs)("div", {
                className: j.gx,
                children: [
                    (0, i.jsx)(s.m, {
                        asContainer: !0,
                        text: e.name,
                        "aria-label": !1,
                        children: (0, i.jsx)(_.Ay, {
                            guild: e,
                            size: _.Ay.Sizes.SMOL,
                            className: j.$f,
                            onClick: (t) => {
                                t.stopPropagation(), (0, g.u)(e.id), v?.({ action: "OPEN_VOICE_GUILD" }), L?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, i.jsxs)("div", {
                        className: j.FH,
                        children: [
                            (0, i.jsx)(I.A, {
                                channel: P,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: j.Ow,
                            }),
                            M
                                ? (0, i.jsx)(c.D, {
                                      onClick: (t) => {
                                          t.stopPropagation(),
                                              x.default.selectVoiceChannel(P.id),
                                              (0, m.iN)(P.id),
                                              v?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              L?.();
                                      },
                                      className: j.sd,
                                      "aria-label": (0, p.Ay)({ channel: P }),
                                      children: (0, i.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, i.jsx)(r.A, { children: D }),
                                      }),
                                  })
                                : (0, i.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(r.A, { children: D }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(a.A, {
                        users: b,
                        guildId: e.id,
                        channelId: P.id,
                        maxUsers: y,
                        size: A._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: j.NS,
                        onClickOverflow: (t) => {
                            t.stopPropagation(), v?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (t) => t.stopPropagation(),
                        disableUserPopout: !!G || ((t) => t === n.id),
                        "aria-label": h.intl.string(h.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
