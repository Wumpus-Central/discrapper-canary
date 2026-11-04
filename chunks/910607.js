var l = e(477900);
e(582128);
var i = e(855986),
    a = e(3026),
    r = e(342952),
    s = e(866665),
    o = e(834730),
    c = e(939249),
    u = e(320448),
    d = e(646514),
    A = e(778712),
    f = e(597798),
    g = e(963027),
    m = e(47167),
    p = e(682163),
    x = e(378570),
    _ = e(345942),
    I = e(576705),
    N = e(575731),
    E = e(21241),
    T = e(939496),
    h = e(10862),
    C = e(652215),
    S = e(996988),
    y = e(792996),
    v = e(260155);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { user: n, guild: e, channel: O, onAction: j, onClose: P } = t,
                { themeType: R } = (0, T.E)(),
                L = (0, N.A)(O),
                b = (0, m.Ay)(O),
                { canViewChannel: M, canConnect: U } = (0, i.cf)([I.A], () => ({
                    canViewChannel: I.A.can(C.xBc.VIEW_CHANNEL, O),
                    canConnect: O.isPrivate() || I.A.can(C.xBc.CONNECT, O),
                }));
            if (!M) return null;
            let G = R !== S.d.MODAL && R !== S.d.MODAL_V2 && R !== S.d.SIDEBAR;
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
                                        (t.stopPropagation(),
                                            (0, _.u)(e.id),
                                            j?.({ action: "OPEN_VOICE_GUILD" }),
                                            P?.());
                                    },
                                }),
                            }),
                            (0, l.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                            (0, l.jsxs)("div", {
                                className: v.FH,
                                children: [
                                    (0, l.jsx)(h.A, {
                                        channel: O,
                                        size: "xxs",
                                        color: d.A.colors.TEXT_SUBTLE,
                                        className: v.Ow,
                                    }),
                                    U
                                        ? (0, l.jsx)(c.D, {
                                              onClick: (t) => {
                                                  (t.stopPropagation(),
                                                      f.default.selectVoiceChannel(O.id),
                                                      (0, x.iN)(O.id),
                                                      j?.({ action: "OPEN_VOICE_CHANNEL" }),
                                                      P?.());
                                              },
                                              className: v.sd,
                                              "aria-label": (0, g.Ay)({ channel: O }),
                                              children: (0, l.jsx)(o.E, {
                                                  variant: "body-xs/normal",
                                                  color: "text-subtle",
                                                  lineClamp: 1,
                                                  children: (0, l.jsx)(a.A, { children: b }),
                                              }),
                                          })
                                        : (0, l.jsx)(o.E, {
                                              variant: "body-xs/normal",
                                              color: "text-subtle",
                                              lineClamp: 1,
                                              children: (0, l.jsx)(a.A, { children: b }),
                                          }),
                                ],
                            }),
                            (0, l.jsx)(r.A, {
                                users: L,
                                guildId: e.id,
                                channelId: O.id,
                                maxUsers: 3,
                                size: A._3.SIZE_16,
                                overflowCountColor: "text-subtle",
                                overflowCountClassName: v.NS,
                                onClickOverflow: (t) => {
                                    (t.stopPropagation(), j?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" }));
                                },
                                onUserClick: (t) => t.stopPropagation(),
                                disableUserPopout: !!G || ((t) => t === n.id),
                                "aria-label": y.intl.string(y.t["jNqDh/"]),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
