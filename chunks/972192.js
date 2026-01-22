n.d(t, { A: () => O }), n(896048), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    d = n(843282),
    o = n(990078),
    c = n(397927),
    u = n(832712),
    g = n(543465),
    h = n(477427),
    m = n(393432),
    x = n(910323),
    j = n(996124),
    p = n(24873),
    b = n(652215),
    N = n(790782),
    A = n(355097),
    v = n(985018),
    f = n(549146),
    S = n(626149);
function O(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([g.Ay], () => g.Ay.getGuildFlags(t)),
        s = (0, a.bG)([g.Ay], () => {
            let e = g.Ay.getGuildUnreadSetting(t),
                n = g.Ay.getMessageNotifications(t);
            return e === N.e.UNSET ? (n === b.orn.ALL_MESSAGES ? N.e.ALL_MESSAGES : N.e.ONLY_MENTIONS) : e;
        }),
        r = (0, a.bG)([g.Ay], () => g.Ay.getMessageNotifications(t)),
        [S, O] = (0, l.useState)(!1),
        y = S ? p.N9.CUSTOM : (0, p.jU)(s, r);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: f.Gk,
                children: (0, i.jsx)(c.IzF, {
                    value: y,
                    options: [
                        {
                            value: p.N9.ALL_MESSAGES,
                            name: v.intl.string(v.t.hZrr6k),
                        },
                        {
                            value: p.N9.MENTIONS,
                            name: v.intl.string(v.t.y59NJm),
                        },
                        {
                            value: p.N9.NOTHING,
                            name: v.intl.string(v.t["pGn/bJ"]),
                        },
                        {
                            value: p.N9.CUSTOM,
                            name: v.intl.string(v.t["32yow9"]),
                        },
                    ],
                    onChange: (e) => {
                        let { value: n } = e;
                        n === p.N9.CUSTOM ? O(!0) : (O(!1), (0, x.i)(t, n));
                    },
                    className: f.q0,
                    look: "pill",
                }),
            }),
            (0, i.jsx)("div", { className: f.zV }),
            (0, i.jsxs)("div", {
                className: f.xE,
                children: [
                    (0, i.jsxs)("div", {
                        className: f.Vg,
                        children: [(0, i.jsx)(_, { unreadSetting: s }), (0, i.jsx)(E, { notificationSetting: r })],
                    }),
                    (0, i.jsxs)("div", {
                        className: f.Vg,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: v.intl.string(v.t.Tqd1Af),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: v.intl.string(v.t.RpQgm5),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: v.intl.string(v.t["1m22ZB"]),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: v.intl.string(v.t["4bP2ZZ"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: f.Vg,
                        children: [
                            (0, i.jsx)(d.Te, {
                                value: s,
                                className: f.hF,
                                onChange: (e) => {
                                    O(!1),
                                        u.A.updateGuildNotificationSettings(
                                            t,
                                            {
                                                flags: (0, m.md)(
                                                    n,
                                                    e === N.e.ALL_MESSAGES
                                                        ? A.n3.UNREADS_ALL_MESSAGES
                                                        : A.n3.UNREADS_ONLY_MENTIONS,
                                                ),
                                            },
                                            h.G_.unreads(e),
                                        );
                                },
                                options: (0, j.Q)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === N.e.ONLY_MENTIONS && s !== N.e.ONLY_MENTIONS;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", {
                                                children: (0, i.jsx)(c.Text, {
                                                    variant: "text-md/normal",
                                                    color: e.disabled ? "text-muted" : void 0,
                                                    children: e.label,
                                                }),
                                            }),
                                            t &&
                                                (0, i.jsx)(o.m, {
                                                    text: v.intl.string(v.t.eP8yWU),
                                                    children: (0, i.jsx)(c.KTN, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: f.SU,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                                "data-migration-pending": !0,
                            }),
                            (0, i.jsx)(d.Te, {
                                className: f.hF,
                                value: r,
                                onChange: (e) => {
                                    O(!1);
                                    let n = { message_notifications: e };
                                    e === b.orn.ALL_MESSAGES &&
                                        s !== N.e.ALL_MESSAGES &&
                                        (n.flags = (0, m.md)(g.Ay.getGuildFlags(t), A.n3.UNREADS_ALL_MESSAGES)),
                                        u.A.updateGuildNotificationSettings(t, n, h.G_.notifications(e));
                                },
                                options: (0, j._)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t =
                                        e.value === b.orn.ALL_MESSAGES &&
                                        s !== N.e.ALL_MESSAGES &&
                                        r !== b.orn.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-md/normal",
                                                children: e.label,
                                            }),
                                            t &&
                                                (0, i.jsx)(o.m, {
                                                    text: v.intl.string(v.t.idXSbI),
                                                    children: (0, i.jsx)(c.mir, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: f.SU,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                                "data-migration-pending": !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { unreadSetting: t } = e,
        n = [
            {
                badged: !0,
                unread: !0,
                muted: !1,
                name: v.intl.string(v.t.EjLobP),
            },
            {
                badged: !1,
                unread: !0,
                muted: !0,
                name: v.intl.string(v.t.Wgpwpp),
            },
            {
                badged: !1,
                unread: !1,
                muted: !0,
                name: v.intl.string(v.t.g9VImh),
            },
        ];
    return (
        t === N.e.ALL_MESSAGES && (n[1].muted = !1),
        (0, i.jsx)("div", {
            className: f.Qn,
            children: n.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: f.h5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: f.A3,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(f.gy, {
                                            [f.R]: !e.unread,
                                            [f.BM]: e.muted,
                                        }),
                                    }),
                                    (0, i.jsx)(c.N$i, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: r()(f.Uk, { [f.SU]: e.muted }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: e.muted ? "text-muted" : void 0,
                                        children: e.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: r()(f.qS, { [f.R]: !e.badged }),
                                children: (0, i.jsx)(c.hVq, { count: 1 }),
                            }),
                        ],
                    },
                    e.name,
                ),
            ),
        })
    );
}
function E(e) {
    return (0, i.jsxs)("div", {
        className: f.G5,
        children: [
            e.notificationSetting === b.orn.NO_MESSAGES && (0, i.jsx)("div", { className: f._N }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)("img", {
                    className: f.p3,
                    src: S,
                    alt: "",
                }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: v.intl.string(v.t.qSq0tD),
                    }),
                    e.notificationSetting === b.orn.ALL_MESSAGES &&
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: v.intl.string(v.t.WYyzI5),
                        }),
                    e.notificationSetting !== b.orn.ALL_MESSAGES &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-link",
                                    tag: "span",
                                    children: ["@Roka", " "],
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    tag: "span",
                                    children: v.intl.string(v.t.WYyzI5),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
