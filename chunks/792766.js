n.d(t, {
    Z: () => b,
    y: () => _
}),
    n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(528144),
    c = n(118012),
    u = n(686546),
    d = n(565138),
    p = n(601964),
    m = n(598077),
    f = n(388032),
    h = n(515230);
let g = (e) => {
        var t;
        let { speaker: n, guildId: i, isEmbed: l } = e,
            a = new m.Z(n.user);
        return (0, r.jsxs)('div', {
            className: h.speaker,
            children: [
                (0, r.jsx)(o.qEK, {
                    src: a.getAvatarURL(i, l ? 16 : 24),
                    size: l ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: l ? null : h.avatar
                }),
                (0, r.jsx)(c.Z, {
                    size: l ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                    color: c.Z.Colors.HEADER_SECONDARY,
                    className: h.username,
                    children: null != (t = n.nick) ? t : a.username
                })
            ]
        });
    },
    _ = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let i = new p.ZP(t),
            { name: l, description: a } = i;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(s.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: h.alignStart,
                    children: f.intl.string(f.t.Eabu19)
                }),
                (0, r.jsxs)('div', {
                    className: h.guild,
                    children: [
                        (0, r.jsx)(u.ZP, {
                            mask: u.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, r.jsx)(d.Z, {
                                guild: i,
                                size: d.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: h.guildInfo,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: l
                                }),
                                (0, r.jsxs)('div', {
                                    className: h.speaker,
                                    children: [
                                        (0, r.jsx)('div', { className: h.dot }),
                                        null != n && n > 0
                                            ? (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: f.intl.format(f.t['LC+S+v'], { membersOnline: n })
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
                        className: h.alignStart,
                        variant: 'text-sm/normal',
                        children: a
                    })
            ]
        });
    },
    b = (e) => {
        var t;
        let { stageInstance: n, guild: l, isCard: m = !1, isEmbed: _ = !1, onClick: b } = e,
            x = i.useMemo(() => (null == l ? null : l instanceof p.ZP ? l : new p.ZP(l)), [l]);
        if (null == n || null == x) return null;
        let { topic: y, speaker_count: E, participant_count: v } = n,
            O = null != (t = n.members) ? t : [],
            j = _ ? O.slice(0, 3) : O,
            C = E - j.length;
        return (
            _ && (C += O.length - j.length),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: h.flex,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h.flex,
                                children: [
                                    (0, r.jsx)(o.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 24,
                                        width: 24,
                                        className: h.live
                                    }),
                                    (0, r.jsx)(o.X6q, {
                                        variant: 'eyebrow',
                                        className: a()(h.__invalid_label, h.live),
                                        children: f.intl.string(f.t['X2K3//'])
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: h.background,
                                children: [
                                    (0, r.jsx)(o.VWR, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 16,
                                        width: 16,
                                        className: h.listeners
                                    }),
                                    (0, r.jsx)(o.X6q, {
                                        className: a()(h.__invalid_label, h.listeners),
                                        variant: 'heading-sm/semibold',
                                        children: v
                                    })
                                ]
                            })
                        ]
                    }),
                    _ &&
                        (0, r.jsxs)('div', {
                            className: a()(h.guild, { [h.embed]: _ }),
                            children: [
                                (0, r.jsx)(u.ZP, {
                                    mask: u.ZP.Masks.SQUIRCLE,
                                    width: 20,
                                    height: 20,
                                    children: (0, r.jsx)(d.Z, {
                                        guild: x,
                                        size: d.Z.Sizes.MINI,
                                        active: !0
                                    })
                                }),
                                (0, r.jsx)(o.Text, {
                                    color: 'header-secondary',
                                    className: h.__invalid_label,
                                    variant: 'text-sm/normal',
                                    children: x.name
                                })
                            ]
                        }),
                    (0, r.jsx)(s.Z, {
                        size: m || _ ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_20,
                        className: a()(h.header, { [h.embed]: _ }),
                        children: y
                    }),
                    (0, r.jsxs)('div', {
                        className: a()(h.members, { [h.embed]: _ }),
                        children: [
                            j.length > 0 &&
                                (0, r.jsxs)('div', {
                                    className: h.speakers,
                                    children: [
                                        j.map((e) =>
                                            (0, r.jsx)(
                                                g,
                                                {
                                                    speaker: e,
                                                    guildId: x.id,
                                                    isEmbed: _
                                                },
                                                e.user.id
                                            )
                                        ),
                                        C > 0
                                            ? (0, r.jsxs)('div', {
                                                  className: h.speaker,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: a()(h.icon, { [h.embed]: _ }),
                                                          children: (0, r.jsx)(o.S6n, {
                                                              size: 'custom',
                                                              color: 'currentColor',
                                                              height: _ ? 12 : 14,
                                                              className: h.listeners
                                                          })
                                                      }),
                                                      (0, r.jsxs)(c.Z, {
                                                          size: _ ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                                                          color: c.Z.Colors.HEADER_SECONDARY,
                                                          children: ['+', f.intl.format(f.t.L1pCBQ, { count: C })]
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                            _ &&
                                (0, r.jsx)(o.zxk, {
                                    color: o.zxk.Colors.GREEN,
                                    onClick: b,
                                    className: h.joinButton,
                                    children: f.intl.string(f.t.ZYO5OD)
                                })
                        ]
                    })
                ]
            })
        );
    };
