e.d(n, { A: () => v, k: () => j });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(3026),
    a = e(342952),
    s = e(990078),
    o = e(834730),
    c = e(939249),
    u = e(320448),
    d = e(827734),
    A = e(778712),
    x = e(956793),
    p = e(963027),
    f = e(47167),
    _ = e(263063),
    m = e(378570),
    g = e(345942),
    E = e(576705),
    T = e(575731),
    N = e(21241),
    C = e(939496),
    I = e(10862),
    S = e(652215),
    O = e(996988),
    y = e(985018),
    h = e(514566);
let j = 3;
function v(t) {
    let { user: n, guild: e, channel: v, onAction: P, onClose: L } = t,
        { themeType: R } = (0, C.E)(),
        b = (0, T.A)(v),
        D = (0, f.Ay)(v),
        { canViewChannel: U, canConnect: M } = (0, l.cf)([E.A], () => ({
            canViewChannel: E.A.can(S.xBc.VIEW_CHANNEL, v),
            canConnect: v.isPrivate() || E.A.can(S.xBc.CONNECT, v),
        }));
    if (!U) return null;
    let G = R !== O.d.MODAL && R !== O.d.MODAL_V2 && R !== O.d.SIDEBAR;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.A, { className: h.Ph }),
            (0, i.jsxs)("div", {
                className: h.gx,
                children: [
                    (0, i.jsx)(s.m, {
                        asContainer: !0,
                        text: e.name,
                        "aria-label": !1,
                        children: (0, i.jsx)(_.Ay, {
                            guild: e,
                            size: _.Ay.Sizes.SMOL,
                            className: h.$f,
                            onClick: (t) => {
                                t.stopPropagation(), (0, g.u)(e.id), P?.({ action: "OPEN_VOICE_GUILD" }), L?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, i.jsxs)("div", {
                        className: h.FH,
                        children: [
                            (0, i.jsx)(I.A, {
                                channel: v,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: h.Ow,
                            }),
                            M
                                ? (0, i.jsx)(c.D, {
                                      onClick: (t) => {
                                          t.stopPropagation(),
                                              x.default.selectVoiceChannel(v.id),
                                              (0, m.iN)(v.id),
                                              P?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              L?.();
                                      },
                                      className: h.sd,
                                      "aria-label": (0, p.Ay)({ channel: v }),
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
                        channelId: v.id,
                        maxUsers: j,
                        size: A._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: h.NS,
                        onClickOverflow: (t) => {
                            t.stopPropagation(), P?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (t) => t.stopPropagation(),
                        disableUserPopout: !!G || ((t) => t === n.id),
                        "aria-label": y.intl.string(y.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
