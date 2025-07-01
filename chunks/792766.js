(n.d(t, {
    Z: () => _,
    y: () => g
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(686546),
    c = n(565138),
    u = n(601964),
    d = n(598077),
    p = n(388032),
    m = n(515230);
let f = (e) => {
        var t;
        let { speaker: n, guildId: i, isEmbed: l } = e,
            a = new d.Z(n.user);
        return (0, r.jsxs)('div', {
            className: m.speaker,
            children: [
                (0, r.jsx)(o.qEK, {
                    src: a.getAvatarURL(i, l ? 16 : 24),
                    size: l ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: l ? null : m.avatar
                }),
                (0, r.jsx)(o.Text, {
                    variant: l ? 'text-xs/normal' : 'text-sm/normal',
                    color: 'text-secondary',
                    className: m.username,
                    children: null != (t = n.nick) ? t : a.username
                })
            ]
        });
    },
    g = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let i = new u.ZP(t),
            { name: l, description: a } = i;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: 'heading-md/normal',
                    color: 'header-muted',
                    className: m.alignStart,
                    children: p.intl.string(p.t.Eabu19)
                }),
                (0, r.jsxs)('div', {
                    className: m.guild,
                    children: [
                        (0, r.jsx)(s.ZP, {
                            mask: s.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, r.jsx)(c.Z, {
                                guild: i,
                                size: c.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: m.guildInfo,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: l
                                }),
                                (0, r.jsxs)('div', {
                                    className: m.speaker,
                                    children: [
                                        (0, r.jsx)('div', { className: m.dot }),
                                        null != n && n > 0
                                            ? (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: p.intl.format(p.t['LC+S+v'], { membersOnline: n })
                                              })
                                            : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != a &&
                    '' !== a &&
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: m.alignStart,
                        variant: 'text-sm/normal',
                        children: a
                    })
            ]
        });
    },
    _ = (e) => {
        var t;
        let { stageInstance: n, guild: l, isCard: d = !1, isEmbed: g = !1, onClick: _ } = e,
            h = i.useMemo(() => (null == l ? null : l instanceof u.ZP ? l : new u.ZP(l)), [l]);
        if (null == n || null == h) return null;
        let { topic: b, speaker_count: E, participant_count: y } = n,
            C = null != (t = n.members) ? t : [],
            x = g ? C.slice(0, 3) : C,
            v = E - x.length;
        return (
            g && (v += C.length - x.length),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: m.flex,
                        children: [
                            (0, r.jsxs)('div', {
                                className: m.flex,
                                children: [
                                    (0, r.jsx)(o.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 24,
                                        width: 24,
                                        className: m.live
                                    }),
                                    (0, r.jsx)(o.X6q, {
                                        variant: 'eyebrow',
                                        className: a()(m.__invalid_label, m.live),
                                        children: p.intl.string(p.t['X2K3//'])
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: m.background,
                                children: [
                                    (0, r.jsx)(o.VWR, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 16,
                                        width: 16,
                                        className: m.listeners
                                    }),
                                    (0, r.jsx)(o.X6q, {
                                        className: a()(m.__invalid_label, m.listeners),
                                        variant: 'heading-sm/semibold',
                                        children: y
                                    })
                                ]
                            })
                        ]
                    }),
                    g &&
                        (0, r.jsxs)('div', {
                            className: a()(m.guild, { [m.embed]: g }),
                            children: [
                                (0, r.jsx)(s.ZP, {
                                    mask: s.ZP.Masks.SQUIRCLE,
                                    width: 20,
                                    height: 20,
                                    children: (0, r.jsx)(c.Z, {
                                        guild: h,
                                        size: c.Z.Sizes.MINI,
                                        active: !0
                                    })
                                }),
                                (0, r.jsx)(o.Text, {
                                    color: 'header-secondary',
                                    className: m.__invalid_label,
                                    variant: 'text-sm/normal',
                                    children: h.name
                                })
                            ]
                        }),
                    (0, r.jsx)(o.X6q, {
                        variant: d || g ? 'heading-md/semibold' : 'heading-lg/semibold',
                        className: a()(m.header, { [m.embed]: g }),
                        children: b
                    }),
                    (0, r.jsxs)('div', {
                        className: a()(m.members, { [m.embed]: g }),
                        children: [
                            x.length > 0 &&
                                (0, r.jsxs)('div', {
                                    className: m.speakers,
                                    children: [
                                        x.map((e) =>
                                            (0, r.jsx)(
                                                f,
                                                {
                                                    speaker: e,
                                                    guildId: h.id,
                                                    isEmbed: g
                                                },
                                                e.user.id
                                            )
                                        ),
                                        v > 0
                                            ? (0, r.jsxs)('div', {
                                                  className: m.speaker,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: a()(m.icon, { [m.embed]: g }),
                                                          children: (0, r.jsx)(o.S6n, {
                                                              size: 'custom',
                                                              color: 'currentColor',
                                                              height: g ? 12 : 14,
                                                              className: m.listeners
                                                          })
                                                      }),
                                                      (0, r.jsxs)(o.Text, {
                                                          variant: g ? 'text-xs/normal' : 'text-sm/normal',
                                                          color: 'text-secondary',
                                                          children: ['+', p.intl.format(p.t.L1pCBQ, { count: v })]
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                            g &&
                                (0, r.jsx)(o.zxk, {
                                    color: o.zxk.Colors.GREEN,
                                    onClick: _,
                                    className: m.joinButton,
                                    children: p.intl.string(p.t.ZYO5OD)
                                })
                        ]
                    })
                ]
            })
        );
    };
