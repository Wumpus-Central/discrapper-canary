n.d(t, {
    y: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(528144),
    c = n(118012),
    u = n(686546),
    d = n(565138),
    m = n(601964),
    h = n(598077),
    f = n(388032),
    p = n(828573);
let _ = (e) => {
        var t;
        let { speaker: n, guildId: r, isEmbed: l } = e,
            a = new h.Z(n.user);
        return (0, i.jsxs)('div', {
            className: p.speaker,
            children: [
                (0, i.jsx)(o.Avatar, {
                    src: a.getAvatarURL(r, l ? 16 : 24),
                    size: l ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: l ? null : p.avatar
                }),
                (0, i.jsx)(c.Z, {
                    size: l ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                    color: c.Z.Colors.HEADER_SECONDARY,
                    className: p.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : a.username
                })
            ]
        });
    },
    g = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let r = new m.ZP(t),
            { name: l, description: a } = r;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(s.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: p.alignStart,
                    children: f.intl.string(f.t.Eabu19)
                }),
                (0, i.jsxs)('div', {
                    className: p.guild,
                    children: [
                        (0, i.jsx)(u.ZP, {
                            mask: u.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, i.jsx)(d.Z, {
                                guild: r,
                                size: d.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: p.guildInfo,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    children: l
                                }),
                                (0, i.jsxs)('div', {
                                    className: p.speaker,
                                    children: [
                                        (0, i.jsx)('div', { className: p.dot }),
                                        null != n && n > 0
                                            ? (0, i.jsx)(o.Text, {
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
                    (0, i.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: p.alignStart,
                        variant: 'text-sm/normal',
                        children: a
                    })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { stageInstance: n, guild: l, isCard: h = !1, isEmbed: g = !1, onClick: E } = e,
        C = r.useMemo(() => (null == l ? null : l instanceof m.ZP ? l : new m.ZP(l)), [l]);
    if (null == n || null == C) return null;
    let { topic: I, speaker_count: x, participant_count: N } = n,
        v = null !== (t = n.members) && void 0 !== t ? t : [],
        T = g ? v.slice(0, 3) : v,
        S = x - T.length;
    return (
        g && (S += v.length - T.length),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)('div', {
                    className: p.flex,
                    children: [
                        (0, i.jsxs)('div', {
                            className: p.flex,
                            children: [
                                (0, i.jsx)(o.StageIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 24,
                                    width: 24,
                                    className: p.live
                                }),
                                (0, i.jsx)(o.Heading, {
                                    variant: 'eyebrow',
                                    className: a()(p.__invalid_label, p.live),
                                    children: f.intl.string(f.t['X2K3//'])
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: p.background,
                            children: [
                                (0, i.jsx)(o.HeadphonesIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 16,
                                    width: 16,
                                    className: p.listeners
                                }),
                                (0, i.jsx)(o.Heading, {
                                    className: a()(p.__invalid_label, p.listeners),
                                    variant: 'heading-sm/semibold',
                                    children: N
                                })
                            ]
                        })
                    ]
                }),
                g &&
                    (0, i.jsxs)('div', {
                        className: a()(p.guild, { [p.embed]: g }),
                        children: [
                            (0, i.jsx)(u.ZP, {
                                mask: u.ZP.Masks.SQUIRCLE,
                                width: 20,
                                height: 20,
                                children: (0, i.jsx)(d.Z, {
                                    guild: C,
                                    size: d.Z.Sizes.MINI,
                                    active: !0
                                })
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'header-secondary',
                                className: p.__invalid_label,
                                variant: 'text-sm/normal',
                                children: C.name
                            })
                        ]
                    }),
                (0, i.jsx)(s.Z, {
                    size: h || g ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_20,
                    className: a()(p.header, { [p.embed]: g }),
                    children: I
                }),
                (0, i.jsxs)('div', {
                    className: a()(p.members, { [p.embed]: g }),
                    children: [
                        T.length > 0 &&
                            (0, i.jsxs)('div', {
                                className: p.speakers,
                                children: [
                                    T.map((e) =>
                                        (0, i.jsx)(
                                            _,
                                            {
                                                speaker: e,
                                                guildId: C.id,
                                                isEmbed: g
                                            },
                                            e.user.id
                                        )
                                    ),
                                    S > 0
                                        ? (0, i.jsxs)('div', {
                                              className: p.speaker,
                                              children: [
                                                  (0, i.jsx)('div', {
                                                      className: a()(p.icon, { [p.embed]: g }),
                                                      children: (0, i.jsx)(o.MicrophoneIcon, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: g ? 12 : 14,
                                                          className: p.listeners
                                                      })
                                                  }),
                                                  (0, i.jsxs)(c.Z, {
                                                      size: g ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                                                      color: c.Z.Colors.HEADER_SECONDARY,
                                                      children: ['+', f.intl.format(f.t.L1pCBQ, { count: S })]
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                        g &&
                            (0, i.jsx)(o.Button, {
                                color: o.Button.Colors.GREEN,
                                onClick: E,
                                className: p.joinButton,
                                children: f.intl.string(f.t.ZYO5OD)
                            })
                    ]
                })
            ]
        })
    );
};
