"use strict";
n.d(t, { A: () => N });
var l = n(627968);
n(64700);
var a = n(311907),
    s = n(342952),
    i = n(834730),
    r = n(778712),
    o = n(821609),
    c = n(693879),
    u = n(607407),
    d = n(652176),
    m = n(323443),
    g = n(575731),
    h = n(10862),
    p = n(616356),
    A = n(977997),
    _ = n(47167),
    f = n(475889),
    v = n(262763),
    x = n(402216),
    C = n(985018),
    I = n(255201);
let N = function (e) {
    let { channel: t } = e,
        n = (0, a.bG)([A.A], () => A.A.isInChannel(t.id)),
        N = (0, g.A)(t),
        E = (0, _.Ay)(t),
        b = (0, f.H)(t),
        T = (0, a.bG)([p.A], () => p.A.getAllApplicationStreamsForChannel(t.id)[0]);
    return (0, l.jsxs)(d.Uq, {
        className: I.jC,
        children: [
            (0, l.jsxs)("div", {
                className: I.hY,
                children: [
                    (0, l.jsxs)("div", {
                        className: I.HA,
                        children: [
                            (0, l.jsx)(h.A, {
                                size: "custom",
                                height: 20,
                                width: 20,
                                color: "currentColor",
                                channel: t,
                                style: { flexShrink: 0 },
                            }),
                            (0, l.jsx)("div", {
                                className: I.Mw,
                                children: (0, l.jsx)(i.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: I.Kw,
                                    children: E,
                                }),
                            }),
                        ],
                    }),
                    null != b &&
                        (0, l.jsx)("span", {
                            className: I.j2,
                            children: (0, l.jsx)(c.z, { entry: { start: b }, textColor: "text-feedback-positive" }),
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: I.Bm,
                children: [
                    null != T &&
                        (0, l.jsxs)("div", {
                            className: I.yt,
                            children: [
                                (0, l.jsx)(u.A, { stream: T, className: I.Rh, noText: !0 }),
                                (0, l.jsx)(x.Ay, { size: x.Ay.Sizes.SMALL, className: I.wI }),
                            ],
                        }),
                    (0, l.jsx)(s.A, {
                        users: N,
                        guildId: t.guild_id,
                        channelId: t.id,
                        size: r._3.SIZE_24,
                        maxUsers: 8,
                        "aria-label": C.intl.string(C.t["jNqDh/"]),
                    }),
                    (0, l.jsx)(o.$, {
                        variant: n ? "secondary" : "active",
                        size: "sm",
                        text: n ? C.intl.string(C.t["3xjX0U"]) : C.intl.string(C.t.VJlc0S),
                        fullWidth: !0,
                        onClick: () => {
                            t.isGuildStageVoice()
                                ? (0, m.av)(t)
                                : v.A.handleVoiceConnect({
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
};
