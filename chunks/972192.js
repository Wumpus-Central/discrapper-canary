n.d(t, { A: () => y }), n(938796);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(417597),
    d = n(843282),
    o = n(990078),
    c = n(629584),
    u = n(834730),
    h = n(428678),
    g = n(885574),
    m = n(276293),
    x = n(777666),
    A = n(832712),
    N = n(543465),
    j = n(477427),
    S = n(393432),
    p = n(910323),
    v = n(996124),
    b = n(24873),
    E = n(652215),
    f = n(790782),
    _ = n(355097),
    C = n(985018),
    G = n(851738),
    M = n(626149);
function y(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([N.Ay], () => N.Ay.getGuildFlags(t)),
        l = (0, r.bG)([N.Ay], () => {
            let e = N.Ay.getGuildUnreadSetting(t),
                n = N.Ay.getMessageNotifications(t);
            return e === f.e.UNSET ? (n === E.orn.ALL_MESSAGES ? f.e.ALL_MESSAGES : f.e.ONLY_MENTIONS) : e;
        }),
        a = (0, r.bG)([N.Ay], () => N.Ay.getMessageNotifications(t)),
        [m, x] = (0, s.useState)(!1),
        M = m ? b.N9.CUSTOM : (0, b.jU)(l, a);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: G.Gk,
                children: (0, i.jsx)(c.I, {
                    value: M,
                    options: [
                        { value: b.N9.ALL_MESSAGES, name: C.intl.string(C.t.hZrr6k) },
                        { value: b.N9.MENTIONS, name: C.intl.string(C.t.y59NJm) },
                        { value: b.N9.NOTHING, name: C.intl.string(C.t["pGn/bJ"]) },
                        { value: b.N9.CUSTOM, name: C.intl.string(C.t["32yow9"]) },
                    ],
                    onChange: (e) => {
                        let { value: n } = e;
                        n === b.N9.CUSTOM ? x(!0) : (x(!1), (0, p.i)(t, n));
                    },
                    className: G.q0,
                    look: "pill",
                }),
            }),
            (0, i.jsx)("div", { className: G.zV }),
            (0, i.jsxs)("div", {
                className: G.xE,
                children: [
                    (0, i.jsxs)("div", {
                        className: G.Vg,
                        children: [(0, i.jsx)(L, { unreadSetting: l }), (0, i.jsx)(O, { notificationSetting: a })],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.Vg,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: C.intl.string(C.t.Tqd1Af),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: C.intl.string(C.t.RpQgm5),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: C.intl.string(C.t["1m22ZB"]),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: C.intl.string(C.t["4bP2ZZ"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.Vg,
                        children: [
                            (0, i.jsx)(d.Te, {
                                value: l,
                                className: G.hF,
                                onChange: (e) => {
                                    x(!1),
                                        A.A.updateGuildNotificationSettings(
                                            t,
                                            {
                                                flags: (0, S.md)(
                                                    n,
                                                    e === f.e.ALL_MESSAGES
                                                        ? _.n3.UNREADS_ALL_MESSAGES
                                                        : _.n3.UNREADS_ONLY_MENTIONS,
                                                ),
                                            },
                                            j.G_.unreads(e),
                                        );
                                },
                                options: (0, v.Q)({ notificationSetting: a }),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === f.e.ONLY_MENTIONS && l !== f.e.ONLY_MENTIONS;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", {
                                                children: (0, i.jsx)(u.E, {
                                                    variant: "text-md/normal",
                                                    color: e.disabled ? "text-muted" : void 0,
                                                    children: e.label,
                                                }),
                                            }),
                                            t &&
                                                (0, i.jsx)(o.m, {
                                                    text: C.intl.string(C.t.eP8yWU),
                                                    children: (0, i.jsx)(h.K, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: G.SU,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                                "data-migration-pending": !0,
                            }),
                            (0, i.jsx)(d.Te, {
                                className: G.hF,
                                value: a,
                                onChange: (e) => {
                                    x(!1);
                                    let n = { message_notifications: e };
                                    e === E.orn.ALL_MESSAGES &&
                                        l !== f.e.ALL_MESSAGES &&
                                        (n.flags = (0, S.md)(N.Ay.getGuildFlags(t), _.n3.UNREADS_ALL_MESSAGES)),
                                        A.A.updateGuildNotificationSettings(t, n, j.G_.notifications(e));
                                },
                                options: (0, v._)({ notificationSetting: a }),
                                renderOptionLabel: (e) => {
                                    let t =
                                        e.value === E.orn.ALL_MESSAGES &&
                                        l !== f.e.ALL_MESSAGES &&
                                        a !== E.orn.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.E, { variant: "text-md/normal", children: e.label }),
                                            t &&
                                                (0, i.jsx)(o.m, {
                                                    text: C.intl.string(C.t.idXSbI),
                                                    children: (0, i.jsx)(g.m, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: G.SU,
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
function L(e) {
    let { unreadSetting: t } = e,
        n = [
            { badged: !0, unread: !0, muted: !1, name: C.intl.string(C.t.EjLobP) },
            { badged: !1, unread: !0, muted: !0, name: C.intl.string(C.t.Wgpwpp) },
            { badged: !1, unread: !1, muted: !0, name: C.intl.string(C.t.g9VImh) },
        ];
    return (
        t === f.e.ALL_MESSAGES && (n[1].muted = !1),
        (0, i.jsx)("div", {
            className: G.Qn,
            children: n.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: G.h5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: G.A3,
                                children: [
                                    (0, i.jsx)("div", { className: a()(G.gy, { [G.R]: !e.unread, [G.BM]: e.muted }) }),
                                    (0, i.jsx)(m.N, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a()(G.Uk, { [G.SU]: e.muted }),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/normal",
                                        color: e.muted ? "text-muted" : void 0,
                                        children: e.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: a()(G.qS, { [G.R]: !e.badged }),
                                children: (0, i.jsx)(x.hV, { count: 1 }),
                            }),
                        ],
                    },
                    e.name,
                ),
            ),
        })
    );
}
function O(e) {
    return (0, i.jsxs)("div", {
        className: G.G5,
        children: [
            e.notificationSetting === E.orn.NO_MESSAGES && (0, i.jsx)("div", { className: G._N }),
            (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: G.p3, src: M, alt: "" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(u.E, { variant: "text-xs/medium", children: C.intl.string(C.t.qSq0tD) }),
                    e.notificationSetting === E.orn.ALL_MESSAGES &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: C.intl.string(C.t.WYyzI5),
                        }),
                    e.notificationSetting !== E.orn.ALL_MESSAGES &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xs/normal",
                                    color: "text-link",
                                    tag: "span",
                                    children: ["@Roka", " "],
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    tag: "span",
                                    children: C.intl.string(C.t.WYyzI5),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
