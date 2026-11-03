e.d(n, { A: () => j, k: () => O });
var l = e(477900);
e(582128);
var i = e(17928),
    a = e(3026),
    r = e(342952),
    s = e(866665),
    o = e(834730),
    c = e(939249),
    u = e(320448),
    d = e(661531),
    A = e(778712),
    f = e(730852),
    g = e(963027),
    m = e(47167),
    p = e(548118),
    x = e(378570),
    _ = e(345942),
    I = e(576705),
    N = e(575731),
    E = e(21241),
    T = e(939496),
    h = e(10862),
    C = e(652215),
    S = e(996988),
    y = e(105292),
    v = e(260155);
let O = 3;
function j(t) {
    let { user: n, guild: e, channel: j, onAction: P, onClose: L } = t,
        { themeType: R } = (0, T.E)(),
        b = (0, N.A)(j),
        M = (0, m.Ay)(j),
        { canViewChannel: U, canConnect: G } = (0, i.cf)([I.A], () => ({
            canViewChannel: I.A.can(C.xBc.VIEW_CHANNEL, j),
            canConnect: j.isPrivate() || I.A.can(C.xBc.CONNECT, j),
        }));
    if (!U) return null;
    let D = R !== S.d.MODAL && R !== S.d.MODAL_V2 && R !== S.d.SIDEBAR;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.A, { className: v.Ph }),
            (0, l.jsxs)("div", {
                className: v.gx,
                children: [
                    (0, l.jsx)(s.m, {
                        asContainer: !0,
                        text: e.name,
                        "aria-label": !1,
                        children: (0, l.jsx)(p.Ay, {
                            guild: e,
                            size: p.Ay.Sizes.SMOL,
                            className: v.$f,
                            onClick: (t) => {
                                (t.stopPropagation(), (0, _.u)(e.id), P?.({ action: "OPEN_VOICE_GUILD" }), L?.());
                            },
                        }),
                    }),
                    (0, l.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, l.jsxs)("div", {
                        className: v.FH,
                        children: [
                            (0, l.jsx)(h.A, {
                                channel: j,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: v.Ow,
                            }),
                            G
                                ? (0, l.jsx)(c.D, {
                                      onClick: (t) => {
                                          (t.stopPropagation(),
                                              f.default.selectVoiceChannel(j.id),
                                              (0, x.iN)(j.id),
                                              P?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              L?.());
                                      },
                                      className: v.sd,
                                      "aria-label": (0, g.Ay)({ channel: j }),
                                      children: (0, l.jsx)(o.E, {
                                          variant: "body-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, l.jsx)(a.A, { children: M }),
                                      }),
                                  })
                                : (0, l.jsx)(o.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, l.jsx)(a.A, { children: M }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(r.A, {
                        users: b,
                        guildId: e.id,
                        channelId: j.id,
                        maxUsers: O,
                        size: A._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: v.NS,
                        onClickOverflow: (t) => {
                            (t.stopPropagation(), P?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" }));
                        },
                        onUserClick: (t) => t.stopPropagation(),
                        disableUserPopout: !!D || ((t) => t === n.id),
                        "aria-label": y.intl.string(y.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
