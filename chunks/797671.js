(n.d(t, { default: () => w }), n(539854), n(953529), n(388685), n(457542));
var a = n(255367),
    r = n(73800),
    i = n(990547),
    o = n(442837),
    c = n(283693),
    l = n(481060),
    s = n(218613),
    d = n(911969),
    u = n(600164),
    _ = n(313201),
    p = n(456269),
    b = n(408987),
    h = n(312146),
    m = n(60222),
    f = n(131704),
    x = n(324067),
    I = n(430824),
    g = n(259580),
    j = n(934415),
    C = n(700785),
    B = n(573261),
    N = n(981631),
    L = n(231338),
    k = n(388032),
    v = n(720848);
function w(e) {
    var t, n;
    let { guildId: w, transitionState: E, onSubmit: y, onClose: S } = e,
        D = (0, _.Dt)(),
        W = (0, _.Dt)(),
        T = (0, _.Dt)(),
        R = (0, _.Dt)(),
        [M, P] = r.useState(N.Sc2),
        [z, G] = r.useState(N.d4z.GUILD_TEXT),
        [H, Z] = r.useState(''),
        [A, U] = r.useState(!1),
        O = (0, o.e7)([I.Z], () => I.Z.getGuild(w), [w]),
        V = (0, m.m)(w),
        F = (0, p.W3)(w),
        X = (0, h.Ui)(O),
        q = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: r } = e,
                        i = [
                            {
                                icon: l.VL1,
                                label: k.intl.string(k.t.pnuRXF),
                                value: N.d4z.GUILD_TEXT,
                                description: k.intl.string(k.t.Hf5Lb2)
                            },
                            {
                                icon: l.gj8,
                                label: k.intl.string(k.t.Sx55Oj),
                                value: N.d4z.GUILD_VOICE,
                                description: k.intl.string(k.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            i.push({
                                icon: l.ewx,
                                label: k.intl.string(k.t.pNWst7),
                                value: N.d4z.GUILD_STAGE_VOICE,
                                description: k.intl.string(k.t.VPAwgo)
                            }),
                        n &&
                            (i.push({
                                icon: l.Mmi,
                                label: k.intl.string(k.t.eAVIDw),
                                value: N.d4z.GUILD_FORUM,
                                description: k.intl.string(k.t.iZ5pgo)
                            }),
                            r &&
                                i.push({
                                    icon: l.XBm,
                                    label: k.intl.string(k.t['6x6fVl']),
                                    value: N.d4z.GUILD_MEDIA,
                                    description: k.intl.string(k.t.JyCrwc),
                                    isBeta: !0
                                })),
                        i.map((e) => {
                            let { icon: t, label: n, value: r, description: i, isBeta: o } = e;
                            return {
                                name: (0, a.jsxs)('div', {
                                    className: v.channelOptionWrapper,
                                    children: [
                                        (0, a.jsx)(t, { className: v.icon }),
                                        (0, a.jsxs)('div', {
                                            children: [
                                                (0, a.jsxs)(l.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, a.jsx)(s.p, { isBeta: o })]
                                                }),
                                                (0, a.jsx)(l.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: i
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                value: r,
                                channelIcon: t
                            };
                        })
                    );
                })({
                    canCreateStageChannel: V,
                    canCreateForumChannel: F,
                    canCreateMediaChannel: X
                }),
            [V, F, X]
        ),
        J = (0, o.e7)([x.Z], () => x.Z.getCategories(w)._categories, [w]),
        Y = r.useMemo(
            () =>
                J.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name
                    };
                }),
            [J]
        ),
        K = null != (n = null == (t = q.find((e) => e.value === z)) ? void 0 : t.channelIcon) ? n : L.Vq,
        Q = '' !== H;
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !Q)) return;
            U(!0);
            let t = {
                type: z,
                name: H,
                parent_id: 'null' !== M ? M : void 0,
                permission_overwrites: [
                    {
                        id: w,
                        type: d.BN.ROLE,
                        allow: C.Hn,
                        deny: N.Plq.VIEW_CHANNEL
                    }
                ]
            };
            B.Z.post({
                url: N.ANM.GUILD_CHANNELS(w),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, c.iG)({
                            is_private: !0,
                            channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                            channel_type: null == e || null == (n = e.body) ? void 0 : n.type
                        });
                    }
                },
                rejectWithError: !0
            })
                .then(
                    (e) => {
                        (b.Z.checkGuildTemplateDirty(w), y(e.body.id), S());
                    },
                    (e) => {}
                )
                .finally(() => {
                    U(!1);
                });
        },
        children: (0, a.jsxs)(l.Y0X, {
            transitionState: E,
            'aria-labelledby': D,
            parentComponent: 'ChannelSelectorCreateChannelModal',
            children: [
                (0, a.jsxs)(l.xBx, {
                    children: [
                        (0, a.jsx)(l.X6q, {
                            id: D,
                            variant: 'heading-md/semibold',
                            children: k.intl.string(k.t['fUYU+v'])
                        }),
                        (0, a.jsx)(l.olH, {
                            className: v.closeButton,
                            onClick: S
                        })
                    ]
                }),
                (0, a.jsxs)(l.hzk, {
                    className: v.modalContent,
                    children: [
                        (0, a.jsx)(l.xJW, {
                            title: k.intl.string(k.t.vHCZws),
                            titleId: W,
                            children: (0, a.jsx)(l.q4e, {
                                placeholder: k.intl.string(k.t['g/Rr2d']),
                                value: M,
                                options: Y,
                                onChange: (e) => P(e),
                                'aria-labelledby': W
                            })
                        }),
                        (0, a.jsx)('div', { className: v.spacer }),
                        (0, a.jsx)(l.xJW, {
                            title: k.intl.string(k.t['7ZcXGx']),
                            titleId: T,
                            children: (0, a.jsx)(l.FXm, {
                                options: q,
                                value: z,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return G(t);
                                },
                                'aria-labelledby': T
                            })
                        }),
                        (0, a.jsx)('div', { className: v.spacer }),
                        (0, a.jsx)(l.xJW, {
                            title: k.intl.string(k.t.PVbHDg),
                            titleId: R,
                            children: (0, a.jsx)(l.oil, {
                                value: H,
                                onChange: function (e) {
                                    ((0, f.zi)(z) && (e = (0, j.Nj)(e)), Z(e));
                                },
                                maxLength: N.HN8,
                                placeholder: k.intl.string(k.t['bw/b8P']),
                                className: v.inputWrapper,
                                inputClassName: v.inputInner,
                                prefixElement: (0, a.jsx)(K, {
                                    className: v.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': R,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(l.mzw, {
                    justify: u.Z.Justify.BETWEEN,
                    children: [
                        (0, a.jsx)(l.zxk, {
                            type: 'submit',
                            submitting: A,
                            disabled: !Q,
                            children: k.intl.string(k.t.R3BPHx)
                        }),
                        (0, a.jsxs)(l.zxk, {
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.PRIMARY,
                            className: v.backButton,
                            innerClassName: v.backButtonInner,
                            onClick: S,
                            children: [(0, a.jsx)(g.Z, { direction: g.Z.Directions.LEFT }), k.intl.string(k.t['13/7kZ'])]
                        })
                    ]
                })
            ]
        })
    });
}
