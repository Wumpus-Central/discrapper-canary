i.d(t, { A: () => _ }), i(938796);
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(417597),
    d = i(843282),
    o = i(990078),
    c = i(397927),
    u = i(832712),
    g = i(543465),
    h = i(477427),
    x = i(393432),
    m = i(910323),
    A = i(996124),
    N = i(24873),
    j = i(652215),
    S = i(790782),
    p = i(355097),
    v = i(985018),
    b = i(549146),
    f = i(626149);
function _(e) {
    let { guildId: t } = e,
        i = (0, r.bG)([g.Ay], () => g.Ay.getGuildFlags(t)),
        l = (0, r.bG)([g.Ay], () => {
            let e = g.Ay.getGuildUnreadSetting(t),
                i = g.Ay.getMessageNotifications(t);
            return e === S.e.UNSET ? (i === j.orn.ALL_MESSAGES ? S.e.ALL_MESSAGES : S.e.ONLY_MENTIONS) : e;
        }),
        a = (0, r.bG)([g.Ay], () => g.Ay.getMessageNotifications(t)),
        [f, _] = (0, s.useState)(!1),
        C = f ? N.N9.CUSTOM : (0, N.jU)(l, a);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)("div", {
                className: b.Gk,
                children: (0, n.jsx)(c.IzF, {
                    value: C,
                    options: [
                        { value: N.N9.ALL_MESSAGES, name: v.intl.string(v.t.hZrr6k) },
                        { value: N.N9.MENTIONS, name: v.intl.string(v.t.y59NJm) },
                        { value: N.N9.NOTHING, name: v.intl.string(v.t["pGn/bJ"]) },
                        { value: N.N9.CUSTOM, name: v.intl.string(v.t["32yow9"]) },
                    ],
                    onChange: (e) => {
                        let { value: i } = e;
                        i === N.N9.CUSTOM ? _(!0) : (_(!1), (0, m.i)(t, i));
                    },
                    className: b.q0,
                    look: "pill",
                }),
            }),
            (0, n.jsx)("div", { className: b.zV }),
            (0, n.jsxs)("div", {
                className: b.xE,
                children: [
                    (0, n.jsxs)("div", {
                        className: b.Vg,
                        children: [(0, n.jsx)(G, { unreadSetting: l }), (0, n.jsx)(E, { notificationSetting: a })],
                    }),
                    (0, n.jsxs)("div", {
                        className: b.Vg,
                        children: [
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: v.intl.string(v.t.Tqd1Af),
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: v.intl.string(v.t.RpQgm5),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: v.intl.string(v.t["1m22ZB"]),
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: v.intl.string(v.t["4bP2ZZ"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: b.Vg,
                        children: [
                            (0, n.jsx)(d.Te, {
                                value: l,
                                className: b.hF,
                                onChange: (e) => {
                                    _(!1),
                                        u.A.updateGuildNotificationSettings(
                                            t,
                                            {
                                                flags: (0, x.md)(
                                                    i,
                                                    e === S.e.ALL_MESSAGES
                                                        ? p.n3.UNREADS_ALL_MESSAGES
                                                        : p.n3.UNREADS_ONLY_MENTIONS,
                                                ),
                                            },
                                            h.G_.unreads(e),
                                        );
                                },
                                options: (0, A.Q)({ notificationSetting: a }),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === S.e.ONLY_MENTIONS && l !== S.e.ONLY_MENTIONS;
                                    return (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("div", {
                                                children: (0, n.jsx)(c.Text, {
                                                    variant: "text-md/normal",
                                                    color: e.disabled ? "text-muted" : void 0,
                                                    children: e.label,
                                                }),
                                            }),
                                            t &&
                                                (0, n.jsx)(o.m, {
                                                    text: v.intl.string(v.t.eP8yWU),
                                                    children: (0, n.jsx)(c.KTN, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: b.SU,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                                "data-migration-pending": !0,
                            }),
                            (0, n.jsx)(d.Te, {
                                className: b.hF,
                                value: a,
                                onChange: (e) => {
                                    _(!1);
                                    let i = { message_notifications: e };
                                    e === j.orn.ALL_MESSAGES &&
                                        l !== S.e.ALL_MESSAGES &&
                                        (i.flags = (0, x.md)(g.Ay.getGuildFlags(t), p.n3.UNREADS_ALL_MESSAGES)),
                                        u.A.updateGuildNotificationSettings(t, i, h.G_.notifications(e));
                                },
                                options: (0, A._)({ notificationSetting: a }),
                                renderOptionLabel: (e) => {
                                    let t =
                                        e.value === j.orn.ALL_MESSAGES &&
                                        l !== S.e.ALL_MESSAGES &&
                                        a !== j.orn.ALL_MESSAGES;
                                    return (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.Text, { variant: "text-md/normal", children: e.label }),
                                            t &&
                                                (0, n.jsx)(o.m, {
                                                    text: v.intl.string(v.t.idXSbI),
                                                    children: (0, n.jsx)(c.mir, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: b.SU,
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
function G(e) {
    let { unreadSetting: t } = e,
        i = [
            { badged: !0, unread: !0, muted: !1, name: v.intl.string(v.t.EjLobP) },
            { badged: !1, unread: !0, muted: !0, name: v.intl.string(v.t.Wgpwpp) },
            { badged: !1, unread: !1, muted: !0, name: v.intl.string(v.t.g9VImh) },
        ];
    return (
        t === S.e.ALL_MESSAGES && (i[1].muted = !1),
        (0, n.jsx)("div", {
            className: b.Qn,
            children: i.map((e) =>
                (0, n.jsxs)(
                    "div",
                    {
                        className: b.h5,
                        children: [
                            (0, n.jsxs)("div", {
                                className: b.A3,
                                children: [
                                    (0, n.jsx)("div", { className: a()(b.gy, { [b.R]: !e.unread, [b.BM]: e.muted }) }),
                                    (0, n.jsx)(c.N$i, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a()(b.Uk, { [b.SU]: e.muted }),
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: e.muted ? "text-muted" : void 0,
                                        children: e.name,
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: a()(b.qS, { [b.R]: !e.badged }),
                                children: (0, n.jsx)(c.hVq, { count: 1 }),
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
    return (0, n.jsxs)("div", {
        className: b.G5,
        children: [
            e.notificationSetting === j.orn.NO_MESSAGES && (0, n.jsx)("div", { className: b._N }),
            (0, n.jsx)("div", { children: (0, n.jsx)("img", { className: b.p3, src: f, alt: "" }) }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(c.Text, { variant: "text-xs/medium", children: v.intl.string(v.t.qSq0tD) }),
                    e.notificationSetting === j.orn.ALL_MESSAGES &&
                        (0, n.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: v.intl.string(v.t.WYyzI5),
                        }),
                    e.notificationSetting !== j.orn.ALL_MESSAGES &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-link",
                                    tag: "span",
                                    children: ["@Roka", " "],
                                }),
                                (0, n.jsx)(c.Text, {
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
