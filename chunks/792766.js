n.d(t, {
    Z: () => b,
    y: () => _
}),
    n(953529);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
        let { speaker: n, guildId: i, isEmbed: a } = e,
            l = new m.Z(n.user);
        return (0, r.jsxs)('div', {
            className: h.speaker,
            children: [
                (0, r.jsx)(o.qEK, {
                    src: l.getAvatarURL(i, a ? 16 : 24),
                    size: a ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: a ? null : h.avatar
                }),
                (0, r.jsx)(c.Z, {
                    size: a ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                    color: c.Z.Colors.HEADER_SECONDARY,
                    className: h.username,
                    children: null != (t = n.nick) ? t : l.username
                })
            ]
        });
    },
    _ = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let i = new p.ZP(t),
            { name: a, description: l } = i;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(s.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: h.alignStart,
                    children: f.NW.string(f.t.Eabu19)
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
                                    children: a
                                }),
                                (0, r.jsxs)('div', {
                                    className: h.speaker,
                                    children: [
                                        (0, r.jsx)('div', { className: h.dot }),
                                        null != n && n > 0
                                            ? (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: f.NW.format(f.t['LC+S+v'], { membersOnline: n })
                                              })
                                            : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != l &&
                    '' !== l &&
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: h.alignStart,
                        variant: 'text-sm/normal',
                        children: l
                    })
            ]
        });
    },
    b = (e) => {
        var t;
        let { stageInstance: n, guild: a, isCard: m = !1, isEmbed: _ = !1, onClick: b } = e,
            x = i.useMemo(() => (null == a ? null : a instanceof p.ZP ? a : new p.ZP(a)), [a]);
        if (null == n || null == x) return null;
        let { topic: y, speaker_count: v, participant_count: E } = n,
            O = null != (t = n.members) ? t : [],
            N = _ ? O.slice(0, 3) : O,
            j = v - N.length;
        return (
            _ && (j += O.length - N.length),
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
                                        className: l()(h.__invalid_label, h.live),
                                        children: f.NW.string(f.t['X2K3//'])
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
                                        className: l()(h.__invalid_label, h.listeners),
                                        variant: 'heading-sm/semibold',
                                        children: E
                                    })
                                ]
                            })
                        ]
                    }),
                    _ &&
                        (0, r.jsxs)('div', {
                            className: l()(h.guild, { [h.embed]: _ }),
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
                        className: l()(h.header, { [h.embed]: _ }),
                        children: y
                    }),
                    (0, r.jsxs)('div', {
                        className: l()(h.members, { [h.embed]: _ }),
                        children: [
                            N.length > 0 &&
                                (0, r.jsxs)('div', {
                                    className: h.speakers,
                                    children: [
                                        N.map((e) =>
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
                                        j > 0
                                            ? (0, r.jsxs)('div', {
                                                  className: h.speaker,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: l()(h.icon, { [h.embed]: _ }),
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
                                                          children: ['+', f.NW.format(f.t.L1pCBQ, { count: j })]
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
                                    children: f.NW.string(f.t.ZYO5OD)
                                })
                        ]
                    })
                ]
            })
        );
    };
