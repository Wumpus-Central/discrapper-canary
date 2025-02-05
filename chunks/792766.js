n.d(t, {
    Z: () => x,
    y: () => f
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(528144),
    c = n(118012),
    d = n(686546),
    u = n(565138),
    m = n(601964),
    _ = n(598077),
    h = n(388032),
    p = n(828573);
let g = (e) => {
        var t;
        let { speaker: n, guildId: l, isEmbed: a } = e,
            r = new _.Z(n.user);
        return (0, i.jsxs)('div', {
            className: p.speaker,
            children: [
                (0, i.jsx)(s.qEK, {
                    src: r.getAvatarURL(l, a ? 16 : 24),
                    size: a ? s.EFr.SIZE_16 : s.EFr.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: a ? null : p.avatar
                }),
                (0, i.jsx)(c.Z, {
                    size: a ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                    color: c.Z.Colors.HEADER_SECONDARY,
                    className: p.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : r.username
                })
            ]
        });
    },
    f = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let l = new m.ZP(t),
            { name: a, description: r } = l;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: p.alignStart,
                    children: h.intl.string(h.t.Eabu19)
                }),
                (0, i.jsxs)('div', {
                    className: p.guild,
                    children: [
                        (0, i.jsx)(d.ZP, {
                            mask: d.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, i.jsx)(u.Z, {
                                guild: l,
                                size: u.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: p.guildInfo,
                            children: [
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-sm/semibold',
                                    children: a
                                }),
                                (0, i.jsxs)('div', {
                                    className: p.speaker,
                                    children: [
                                        (0, i.jsx)('div', { className: p.dot }),
                                        null != n && n > 0
                                            ? (0, i.jsx)(s.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: h.intl.format(h.t['LC+S+v'], { membersOnline: n })
                                              })
                                            : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != r &&
                    '' !== r &&
                    (0, i.jsx)(s.Text, {
                        color: 'header-secondary',
                        className: p.alignStart,
                        variant: 'text-sm/normal',
                        children: r
                    })
            ]
        });
    },
    x = (e) => {
        var t;
        let { stageInstance: n, guild: a, isCard: _ = !1, isEmbed: f = !1, onClick: x } = e,
            C = l.useMemo(() => (null == a ? null : a instanceof m.ZP ? a : new m.ZP(a)), [a]);
        if (null == n || null == C) return null;
        let { topic: v, speaker_count: E, participant_count: I } = n,
            N = null !== (t = n.members) && void 0 !== t ? t : [],
            S = f ? N.slice(0, 3) : N,
            T = E - S.length;
        return (
            f && (T += N.length - S.length),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: p.flex,
                        children: [
                            (0, i.jsxs)('div', {
                                className: p.flex,
                                children: [
                                    (0, i.jsx)(s.ewx, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 24,
                                        width: 24,
                                        className: p.live
                                    }),
                                    (0, i.jsx)(s.X6q, {
                                        variant: 'eyebrow',
                                        className: r()(p.__invalid_label, p.live),
                                        children: h.intl.string(h.t['X2K3//'])
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: p.background,
                                children: [
                                    (0, i.jsx)(s.VWR, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: 16,
                                        width: 16,
                                        className: p.listeners
                                    }),
                                    (0, i.jsx)(s.X6q, {
                                        className: r()(p.__invalid_label, p.listeners),
                                        variant: 'heading-sm/semibold',
                                        children: I
                                    })
                                ]
                            })
                        ]
                    }),
                    f &&
                        (0, i.jsxs)('div', {
                            className: r()(p.guild, { [p.embed]: f }),
                            children: [
                                (0, i.jsx)(d.ZP, {
                                    mask: d.ZP.Masks.SQUIRCLE,
                                    width: 20,
                                    height: 20,
                                    children: (0, i.jsx)(u.Z, {
                                        guild: C,
                                        size: u.Z.Sizes.MINI,
                                        active: !0
                                    })
                                }),
                                (0, i.jsx)(s.Text, {
                                    color: 'header-secondary',
                                    className: p.__invalid_label,
                                    variant: 'text-sm/normal',
                                    children: C.name
                                })
                            ]
                        }),
                    (0, i.jsx)(o.Z, {
                        size: _ || f ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_20,
                        className: r()(p.header, { [p.embed]: f }),
                        children: v
                    }),
                    (0, i.jsxs)('div', {
                        className: r()(p.members, { [p.embed]: f }),
                        children: [
                            S.length > 0 &&
                                (0, i.jsxs)('div', {
                                    className: p.speakers,
                                    children: [
                                        S.map((e) =>
                                            (0, i.jsx)(
                                                g,
                                                {
                                                    speaker: e,
                                                    guildId: C.id,
                                                    isEmbed: f
                                                },
                                                e.user.id
                                            )
                                        ),
                                        T > 0
                                            ? (0, i.jsxs)('div', {
                                                  className: p.speaker,
                                                  children: [
                                                      (0, i.jsx)('div', {
                                                          className: r()(p.icon, { [p.embed]: f }),
                                                          children: (0, i.jsx)(s.S6n, {
                                                              size: 'custom',
                                                              color: 'currentColor',
                                                              height: f ? 12 : 14,
                                                              className: p.listeners
                                                          })
                                                      }),
                                                      (0, i.jsxs)(c.Z, {
                                                          size: f ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                                                          color: c.Z.Colors.HEADER_SECONDARY,
                                                          children: ['+', h.intl.format(h.t.L1pCBQ, { count: T })]
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                            f &&
                                (0, i.jsx)(s.zxk, {
                                    color: s.zxk.Colors.GREEN,
                                    onClick: x,
                                    className: p.joinButton,
                                    children: h.intl.string(h.t.ZYO5OD)
                                })
                        ]
                    })
                ]
            })
        );
    };
