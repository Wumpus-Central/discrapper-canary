"use strict";
n.d(t, { A: () => b });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(342952),
    o = n(397927),
    u = n(607407),
    c = n(652176),
    d = n(323443),
    m = n(575731),
    h = n(10862),
    g = n(616356),
    p = n(977997),
    A = n(570597),
    x = n(562153),
    f = n(47167),
    v = n(262763),
    j = n(402216),
    N = n(985018),
    C = n(417068);
let b = function (e) {
    let { channel: t } = e,
        n = (0, a.bG)([p.A], () => p.A.isInChannel(t.id)),
        i = (0, m.A)(t),
        b = (0, f.Ay)(t),
        E = i.map((e) => x.Ay.getName(t.guild_id, t.id, e)),
        I = i.length <= 5,
        y = (0, a.bG)([g.A], () => g.A.getAllApplicationStreamsForChannel(t.id)[0]);
    return (0, l.jsxs)(c.Uq, {
        className: C.jC,
        children: [
            null != y &&
                (0, l.jsxs)("div", {
                    className: C.yt,
                    children: [
                        (0, l.jsx)(u.A, { stream: y, className: C.Rh, noText: !0 }),
                        (0, l.jsx)(j.Ay, { size: j.Ay.Sizes.SMALL, className: C.wI }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: C.HA,
                children: [
                    (0, l.jsx)(h.A, { size: "xs", color: "currentColor", channel: t, style: { flexShrink: 0 } }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-status-online",
                        lineClamp: 1,
                        children: b,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: s()(C.fM, { [C.Tj]: I }),
                children: [
                    I
                        ? (0, l.jsx)(o.Heading, { lineClamp: 1, variant: "heading-md/semibold", children: (0, A.X)(E) })
                        : null,
                    (0, l.jsx)(r.A, {
                        users: i,
                        guildId: t.guild_id,
                        channelId: t.id,
                        size: o._3J.SIZE_24,
                        maxUsers: 8,
                        overflowCountColor: "text-subtle",
                        onUserClick: (e) => e.stopPropagation(),
                        "aria-label": N.intl.string(N.t["jNqDh/"]),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: C.UD,
                children: (0, l.jsx)(o.Button, {
                    variant: n ? "secondary" : "active",
                    size: "sm",
                    text: n ? N.intl.string(N.t["3xjX0U"]) : N.intl.string(N.t.VJlc0S),
                    fullWidth: !0,
                    onClick: () => {
                        t.isGuildStageVoice()
                            ? (0, d.av)(t)
                            : v.A.handleVoiceConnect({
                                  channel: t,
                                  connected: n,
                                  needSubscriptionToAccess: !1,
                                  routeDirectlyToChannel: !0,
                                  bypassChangeModal: !0,
                              });
                    },
                }),
            }),
        ],
    });
};
