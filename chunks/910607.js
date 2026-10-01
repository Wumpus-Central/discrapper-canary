n.d(e, { A: () => j, k: () => O });
var l = n(477900);
n(582128);
var i = n(17928),
    a = n(3026),
    r = n(342952),
    s = n(866665),
    o = n(834730),
    c = n(939249),
    u = n(320448),
    d = n(661531),
    A = n(778712),
    f = n(730852),
    p = n(963027),
    g = n(47167),
    m = n(548118),
    x = n(378570),
    _ = n(345942),
    I = n(576705),
    N = n(575731),
    E = n(21241),
    h = n(939496),
    T = n(10862),
    C = n(652215),
    S = n(996988),
    v = n(375708),
    y = n(260155);
let O = 3;
function j(t) {
    let { user: e, guild: n, channel: j, onAction: P, onClose: R } = t,
        { themeType: L } = (0, h.E)(),
        b = (0, N.A)(j),
        M = (0, g.Ay)(j),
        { canViewChannel: U, canConnect: D } = (0, i.cf)([I.A], () => ({
            canViewChannel: I.A.can(C.xBc.VIEW_CHANNEL, j),
            canConnect: j.isPrivate() || I.A.can(C.xBc.CONNECT, j),
        }));
    if (!U) return null;
    let G = L !== S.d.MODAL && L !== S.d.MODAL_V2 && L !== S.d.SIDEBAR;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.A, { className: y.Ph }),
            (0, l.jsxs)("div", {
                className: y.gx,
                children: [
                    (0, l.jsx)(s.m, {
                        asContainer: !0,
                        text: n.name,
                        "aria-label": !1,
                        children: (0, l.jsx)(m.Ay, {
                            guild: n,
                            size: m.Ay.Sizes.SMOL,
                            className: y.$f,
                            onClick: (t) => {
                                (t.stopPropagation(), (0, _.u)(n.id), P?.({ action: "OPEN_VOICE_GUILD" }), R?.());
                            },
                        }),
                    }),
                    (0, l.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, l.jsxs)("div", {
                        className: y.FH,
                        children: [
                            (0, l.jsx)(T.A, {
                                channel: j,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: y.Ow,
                            }),
                            D
                                ? (0, l.jsx)(c.D, {
                                      onClick: (t) => {
                                          (t.stopPropagation(),
                                              f.default.selectVoiceChannel(j.id),
                                              (0, x.iN)(j.id),
                                              P?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              R?.());
                                      },
                                      className: y.sd,
                                      "aria-label": (0, p.Ay)({ channel: j }),
                                      children: (0, l.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, l.jsx)(a.A, { children: M }),
                                      }),
                                  })
                                : (0, l.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, l.jsx)(a.A, { children: M }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(r.A, {
                        users: b,
                        guildId: n.id,
                        channelId: j.id,
                        maxUsers: O,
                        size: A._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: y.NS,
                        onClickOverflow: (t) => {
                            (t.stopPropagation(), P?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" }));
                        },
                        onUserClick: (t) => t.stopPropagation(),
                        disableUserPopout: !!G || ((t) => t === e.id),
                        "aria-label": v.intl.string(v.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
