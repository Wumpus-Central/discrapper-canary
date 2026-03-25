"use strict";
n.d(t, { A: () => v });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(342952),
    r = n(397927),
    a = n(693879),
    o = n(607407),
    u = n(652176),
    c = n(323443),
    d = n(575731),
    m = n(10862),
    h = n(616356),
    g = n(977997),
    A = n(47167),
    f = n(475889),
    p = n(262763),
    x = n(402216),
    C = n(985018),
    N = n(417068);
let v = function (e) {
    let { channel: t } = e,
        n = (0, i.bG)([g.A], () => g.A.isInChannel(t.id)),
        v = (0, d.A)(t),
        E = (0, A.Ay)(t),
        T = (0, f.H)(t),
        b = (0, i.bG)([h.A], () => h.A.getAllApplicationStreamsForChannel(t.id)[0]);
    return (0, l.jsxs)(u.Uq, {
        className: N.jC,
        children: [
            (0, l.jsxs)("div", {
                className: N.hY,
                children: [
                    (0, l.jsxs)("div", {
                        className: N.HA,
                        children: [
                            (0, l.jsx)(m.A, {
                                size: "custom",
                                height: 20,
                                width: 20,
                                color: "currentColor",
                                channel: t,
                                style: { flexShrink: 0 },
                            }),
                            (0, l.jsx)("div", {
                                className: N.Mw,
                                children: (0, l.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: N.Kw,
                                    children: E,
                                }),
                            }),
                        ],
                    }),
                    null != T &&
                        (0, l.jsx)("span", {
                            className: N.j2,
                            children: (0, l.jsx)(a.z, { entry: { start: T }, textColor: "text-feedback-positive" }),
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: N.Bm,
                children: [
                    null != b &&
                        (0, l.jsxs)("div", {
                            className: N.yt,
                            children: [
                                (0, l.jsx)(o.A, { stream: b, className: N.Rh, noText: !0 }),
                                (0, l.jsx)(x.Ay, { size: x.Ay.Sizes.SMALL, className: N.wI }),
                            ],
                        }),
                    (0, l.jsx)(s.A, {
                        users: v,
                        guildId: t.guild_id,
                        channelId: t.id,
                        size: r._3J.SIZE_24,
                        maxUsers: 8,
                        "aria-label": C.intl.string(C.t["jNqDh/"]),
                    }),
                    (0, l.jsx)(r.Button, {
                        variant: n ? "secondary" : "active",
                        size: "sm",
                        text: n ? C.intl.string(C.t["3xjX0U"]) : C.intl.string(C.t.VJlc0S),
                        fullWidth: !0,
                        onClick: () => {
                            t.isGuildStageVoice()
                                ? (0, c.av)(t)
                                : p.A.handleVoiceConnect({
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
