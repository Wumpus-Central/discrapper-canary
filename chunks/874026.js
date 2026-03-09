"use strict";
n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(342952),
    o = n(397927),
    u = n(956793),
    c = n(607407),
    d = n(652176),
    m = n(378570),
    h = n(323443),
    g = n(575731),
    p = n(10862),
    A = n(616356),
    f = n(977997),
    x = n(570597),
    v = n(562153),
    j = n(47167),
    N = n(402216),
    b = n(985018),
    C = n(332690);
let E = function (e) {
    let { channel: t } = e,
        n = (0, a.bG)([f.A], () => f.A.isInChannel(t.id)),
        i = (0, g.A)(t),
        E = (0, j.Ay)(t),
        I = i.map((e) => v.Ay.getName(t.guild_id, t.id, e)),
        R = i.length <= 5,
        T = (0, a.bG)([A.A], () => A.A.getAllApplicationStreamsForChannel(t.id)[0]);
    return (0, l.jsxs)(d.Uq, {
        className: C.jC,
        children: [
            null != T &&
                (0, l.jsxs)("div", {
                    className: C.yt,
                    children: [
                        (0, l.jsx)(c.A, { stream: T, className: C.Rh, noText: !0 }),
                        (0, l.jsx)(N.Ay, { size: N.Ay.Sizes.SMALL, className: C.wI }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: C.HA,
                children: [
                    (0, l.jsx)(p.A, { size: "xs", color: "currentColor", channel: t, style: { flexShrink: 0 } }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-status-online",
                        lineClamp: 1,
                        children: E,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: s()(C.fM, { [C.Tj]: R }),
                children: [
                    R
                        ? (0, l.jsx)(o.Heading, { lineClamp: 1, variant: "heading-md/semibold", children: (0, x.X)(I) })
                        : null,
                    (0, l.jsx)(r.A, {
                        users: i,
                        guildId: t.guild_id,
                        channelId: t.id,
                        size: o._3J.SIZE_24,
                        maxUsers: 8,
                        overflowCountColor: "text-subtle",
                        onUserClick: (e) => e.stopPropagation(),
                        "aria-label": b.intl.string(b.t["jNqDh/"]),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: C.UD,
                children: (0, l.jsx)(o.Button, {
                    variant: n ? "secondary" : "active",
                    size: "sm",
                    text: n ? b.intl.string(b.t["3xjX0U"]) : b.intl.string(b.t.VJlc0S),
                    fullWidth: !0,
                    onClick: () => {
                        t.isGuildStageVoice() ? (0, h.av)(t) : (u.default.selectVoiceChannel(t.id), (0, m.iN)(t.id));
                    },
                }),
            }),
        ],
    });
};
