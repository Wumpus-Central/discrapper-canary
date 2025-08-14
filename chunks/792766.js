n.d(t, {
    Z: () => b,
    y: () => E,
}),
    n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(755721),
    l = n(481060),
    c = n(686546),
    u = n(565138),
    d = n(598077),
    f = n(411198),
    _ = n(388032),
    p = n(407749);
let h = 24,
    m = 16,
    g = (e) => {
        var t;
        let { speaker: n, guildId: i, isEmbed: o } = e,
            a = new d.Z(n.user);
        return (0, r.jsxs)("div", {
            className: p.speaker,
            children: [
                (0, r.jsx)(l.qEK, {
                    src: a.getAvatarURL(i, o ? 16 : 24),
                    size: o ? l.EFr.SIZE_16 : l.EFr.SIZE_24,
                    "aria-label": "".concat(n.nick, "-avatar"),
                    className: o ? null : p.avatar,
                }),
                (0, r.jsx)(l.Text, {
                    variant: o ? "text-xs/normal" : "text-sm/normal",
                    color: "text-secondary",
                    className: p.username,
                    children: null != (t = n.nick) ? t : a.username,
                }),
            ],
        });
    },
    E = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let i = f.Qs(t),
            { name: o, description: a } = i;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.X6q, {
                    variant: "heading-md/normal",
                    color: "header-muted",
                    className: p.alignStart,
                    children: _.intl.string(_.t.Eabu19),
                }),
                (0, r.jsxs)("div", {
                    className: p.guild,
                    children: [
                        (0, r.jsx)(c.ZP, {
                            mask: c.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, r.jsx)(u.Z, {
                                guild: i,
                                size: u.Z.Sizes.MEDIUM,
                                active: !0,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: p.guildInfo,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: "heading-sm/semibold",
                                    children: o,
                                }),
                                (0, r.jsxs)("div", {
                                    className: p.speaker,
                                    children: [
                                        (0, r.jsx)("div", { className: p.dot }),
                                        null != n && n > 0
                                            ? (0, r.jsx)(l.Text, {
                                                  variant: "text-sm/normal",
                                                  children: _.intl.format(_.t["LC+S+v"], { membersOnline: n }),
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    "" !== a &&
                    (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        className: p.alignStart,
                        variant: "text-sm/normal",
                        children: a,
                    }),
            ],
        });
    },
    b = (e) => {
        var t;
        let { stageInstance: n, guild: o, isCard: d = !1, isEmbed: E = !1, onClick: b } = e,
            y = i.useMemo(() => (null == o ? null : f.lM(o) ? o : f.Qs(o)), [o]);
        if (null == n || null == y) return null;
        let { topic: O, speaker_count: v, participant_count: I } = n,
            T = null != (t = n.members) ? t : [],
            S = E ? T.slice(0, 3) : T,
            A = v - S.length;
        return (
            E && (A += T.length - S.length),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: p.flex,
                        children: [
                            (0, r.jsxs)("div", {
                                className: p.flex,
                                children: [
                                    (0, r.jsx)(l.ewx, {
                                        size: "custom",
                                        color: "currentColor",
                                        height: h,
                                        width: h,
                                        className: p.live,
                                    }),
                                    (0, r.jsx)(l.X6q, {
                                        variant: "eyebrow",
                                        className: a()(p.__invalid_label, p.live),
                                        children: _.intl.string(_.t["X2K3//"]),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: p.background,
                                children: [
                                    (0, r.jsx)(l.VWR, {
                                        size: "custom",
                                        color: "currentColor",
                                        height: m,
                                        width: m,
                                        className: p.listeners,
                                    }),
                                    (0, r.jsx)(l.X6q, {
                                        className: a()(p.__invalid_label, p.listeners),
                                        variant: "heading-sm/semibold",
                                        children: I,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    E &&
                        (0, r.jsxs)("div", {
                            className: a()(p.guild, { [p.embed]: E }),
                            children: [
                                (0, r.jsx)(c.ZP, {
                                    mask: c.ZP.Masks.SQUIRCLE,
                                    width: 20,
                                    height: 20,
                                    children: (0, r.jsx)(u.Z, {
                                        guild: y,
                                        size: u.Z.Sizes.MINI,
                                        active: !0,
                                    }),
                                }),
                                (0, r.jsx)(l.Text, {
                                    color: "header-secondary",
                                    className: p.__invalid_label,
                                    variant: "text-sm/normal",
                                    children: y.name,
                                }),
                            ],
                        }),
                    (0, r.jsx)(l.X6q, {
                        variant: d || E ? "heading-md/semibold" : "heading-lg/semibold",
                        className: a()(p.header, { [p.embed]: E }),
                        children: O,
                    }),
                    (0, r.jsxs)("div", {
                        className: a()(p.members, { [p.embed]: E }),
                        children: [
                            S.length > 0 &&
                                (0, r.jsxs)("div", {
                                    className: p.speakers,
                                    children: [
                                        S.map((e) =>
                                            (0, r.jsx)(
                                                g,
                                                {
                                                    speaker: e,
                                                    guildId: y.id,
                                                    isEmbed: E,
                                                },
                                                e.user.id,
                                            ),
                                        ),
                                        A > 0
                                            ? (0, r.jsxs)("div", {
                                                  className: p.speaker,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: a()(p.icon, { [p.embed]: E }),
                                                          children: (0, r.jsx)(l.S6n, {
                                                              size: "custom",
                                                              color: "currentColor",
                                                              height: E ? 12 : 14,
                                                              className: p.listeners,
                                                          }),
                                                      }),
                                                      (0, r.jsxs)(l.Text, {
                                                          variant: E ? "text-xs/normal" : "text-sm/normal",
                                                          color: "text-secondary",
                                                          children: ["+", _.intl.format(_.t.L1pCBQ, { count: A })],
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            E &&
                                (0, r.jsx)(s.zx, {
                                    color: s.zx.Colors.GREEN,
                                    onClick: b,
                                    className: p.joinButton,
                                    children: _.intl.string(_.t.ZYO5OD),
                                }),
                        ],
                    }),
                ],
            })
        );
    };
