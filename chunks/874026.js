var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(855986),
    r = n(342952),
    c = n(834730),
    d = n(939249),
    o = n(778712),
    u = n(821609),
    m = n(367513),
    h = n(597798),
    A = n(401843),
    g = n(652896),
    x = n(346846),
    v = n(711589),
    j = n(607407),
    N = n(682163),
    C = n(129095),
    S = n(575731),
    b = n(10862),
    f = n(616356),
    I = n(46653),
    y = n(71393),
    p = n(967198),
    E = n(977997),
    w = n(47167),
    _ = n(262763),
    T = n(402216),
    O = n(792996),
    z = n(971718);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channel: t } = e,
                n = (0, a.bG)([E.A], () => E.A.isInChannel(t.id)),
                l = (0, a.bG)([y.A], () => y.A.getGuild(t.guild_id)),
                G = (0, a.bG)([p.A], () => p.A.getGuildId()),
                L = null != l && t.guild_id !== G,
                D = (0, S.A)(t),
                F = (0, w.Ay)(t),
                $ = (0, a.bG)([f.A], () => f.A.getAllApplicationStreamsForChannel(t.id)[0]),
                { actionString: k, actionAriaLabel: M, canWatch: V, isWatching: R } = (0, v.K)($),
                H = (0, i.jsxs)("div", {
                    className: s()(z.HA, L && z.wS),
                    children: [
                        (0, i.jsx)(b.A, { size: L ? "xxs" : "sm", color: "currentColor", channel: t, className: z.Ow }),
                        (0, i.jsx)(c.E, {
                            variant: L ? "body-xs/medium" : "body-sm/medium",
                            color: L ? "text-muted" : "text-strong",
                            className: z.Kw,
                            children: F,
                        }),
                    ],
                }),
                J =
                    null != $ &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(j.A, { stream: $, className: z.Rh, noText: !0 }),
                            V &&
                                (0, i.jsx)("div", {
                                    className: z.H_,
                                    children: (0, i.jsx)(c.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-overlay-light",
                                        children: k,
                                    }),
                                }),
                            (0, i.jsx)(T.Ay, { size: T.Ay.Sizes.SMALL, className: z.wI }),
                        ],
                    });
            return (0, i.jsxs)("div", {
                className: z.jC,
                children: [
                    (0, i.jsx)("div", {
                        className: s()(z.hY, L && z.JB),
                        children: L
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(N.Ay, {
                                          guild: l,
                                          size: N.Ay.Sizes.SMALL,
                                          active: !0,
                                          className: z.$f,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: z.gI,
                                          children: [
                                              (0, i.jsx)(c.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-default",
                                                  className: z.Kw,
                                                  children: l.name,
                                              }),
                                              H,
                                          ],
                                      }),
                                  ],
                              })
                            : H,
                    }),
                    (0, i.jsxs)("div", {
                        className: z.Bm,
                        children: [
                            null != $ &&
                                (V
                                    ? (0, i.jsx)(d.D, {
                                          className: z.yt,
                                          onClick: function () {
                                              null != $ &&
                                                  (I.default.getId() !== $.ownerId &&
                                                      h.default.selectVoiceChannel($.channelId),
                                                  R
                                                      ? ((0, x.A)($), m.A.selectParticipant($.channelId, (0, g._z)($)))
                                                      : (0, A.Nl)($));
                                          },
                                          "aria-label": M,
                                          children: J,
                                      })
                                    : (0, i.jsx)("div", { className: z.yt, children: J })),
                            (0, i.jsx)(r.A, {
                                users: D,
                                guildId: t.guild_id,
                                channelId: t.id,
                                size: o._3.SIZE_24,
                                maxUsers: 8,
                                overflowCountColor: "text-default",
                                overflowCountClassName: z.el,
                                "aria-label": O.intl.string(O.t["jNqDh/"]),
                            }),
                            (0, i.jsx)(u.$, {
                                variant: n ? "secondary" : "active",
                                size: "sm",
                                text: n ? O.intl.string(O.t["3xjX0U"]) : O.intl.string(O.t.VJlc0S),
                                fullWidth: !0,
                                onClick: function () {
                                    t.isGuildStageVoice()
                                        ? (0, C.av)(t)
                                        : _.A.handleVoiceConnect({
                                              channel: t,
                                              connected: n,
                                              needSubscriptionToAccess: !1,
                                              routeDirectlyToChannel: !0,
                                              bypassChangeModal: !0,
                                          });
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
