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
    x = e(597798),
    m = e(963027),
    f = e(47167),
    g = e(682163),
    p = e(378570),
    _ = e(345942),
    I = e(576705),
    E = e(575731),
    T = e(21241),
    N = e(939496),
    h = e(10862),
    C = e(652215),
    v = e(996988),
    y = e(792996),
    S = e(260155);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { user: n, guild: e, channel: j, onAction: O, onClose: P } = t,
                { themeType: L } = (0, N.E)(),
                R = (0, E.A)(j),
                b = (0, f.Ay)(j),
                { canViewChannel: M, canConnect: U } = (0, i.cf)([I.A], () => ({
                    canViewChannel: I.A.can(C.xBc.VIEW_CHANNEL, j),
                    canConnect: j.isPrivate() || I.A.can(C.xBc.CONNECT, j),
                }));
            if (!M) return null;
            let G = L !== v.d.MODAL && L !== v.d.MODAL_V2 && L !== v.d.SIDEBAR;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(T.A, { className: S.Ph }),
                    (0, l.jsxs)("div", {
                        className: S.gx,
                        children: [
                            (0, l.jsx)(s.m, {
                                asContainer: !0,
                                text: e.name,
                                "aria-label": !1,
                                children: (0, l.jsx)(g.Ay, {
                                    guild: e,
                                    size: g.Ay.Sizes.SMOL,
                                    className: S.$f,
                                    onClick: (t) => {
                                        (t.stopPropagation(),
                                            (0, _.u)(e.id),
                                            O?.({ action: "OPEN_VOICE_GUILD" }),
                                            P?.());
                                    },
                                }),
                            }),
                            (0, l.jsx)(u.ChevronSmallRightIcon, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                            (0, l.jsxs)("div", {
                                className: S.FH,
                                children: [
                                    (0, l.jsx)(h.A, {
                                        channel: j,
                                        size: "xxs",
                                        color: d.A.colors.TEXT_SUBTLE,
                                        className: S.Ow,
                                    }),
                                    U
                                        ? (0, l.jsx)(c.D, {
                                              onClick: (t) => {
                                                  (t.stopPropagation(),
                                                      x.default.selectVoiceChannel(j.id),
                                                      (0, p.iN)(j.id),
                                                      O?.({ action: "OPEN_VOICE_CHANNEL" }),
                                                      P?.());
                                              },
                                              className: S.sd,
                                              "aria-label": (0, m.Ay)({ channel: j }),
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
                                users: R,
                                guildId: e.id,
                                channelId: j.id,
                                maxUsers: 3,
                                size: A._3.SIZE_16,
                                overflowCountColor: "text-subtle",
                                overflowCountClassName: S.NS,
                                onClickOverflow: (t) => {
                                    (t.stopPropagation(), O?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" }));
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
