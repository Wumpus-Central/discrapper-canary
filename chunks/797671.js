(a.d(t, { default: () => j }), a(539854), a(953529), a(388685), a(457542));
var n = a(255367),
    r = a(73800),
    i = a(990547),
    o = a(442837),
    l = a(283693),
    c = a(82659),
    d = a(755721),
    s = a(481060),
    _ = a(218613),
    u = a(911969),
    p = a(313201),
    b = a(456269),
    h = a(408987),
    m = a(312146),
    x = a(60222),
    f = a(131704),
    g = a(324067),
    I = a(430824),
    v = a(934415),
    L = a(700785),
    w = a(573261),
    C = a(981631),
    N = a(231338),
    y = a(388032),
    S = a(720848);
function j(e) {
    var t, a;
    let { guildId: j, transitionState: B, onSubmit: D, onClose: E } = e,
        T = (0, p.Dt)(),
        R = (0, p.Dt)(),
        M = (0, p.Dt)(),
        [W, G] = r.useState(C.Sc2),
        [k, A] = r.useState(C.d4z.GUILD_TEXT),
        [H, U] = r.useState(''),
        [O, P] = r.useState(!1),
        Z = (0, o.e7)([I.Z], () => I.Z.getGuild(j), [j]),
        V = (0, x.m)(j),
        z = (0, b.W3)(j),
        F = (0, m.Ui)(Z),
        X = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: a, canCreateMediaChannel: r } = e,
                        i = [
                            {
                                icon: s.VL1,
                                label: y.intl.string(y.t.pnuRXF),
                                value: C.d4z.GUILD_TEXT,
                                description: y.intl.string(y.t.Hf5Lb2)
                            },
                            {
                                icon: s.gj8,
                                label: y.intl.string(y.t.Sx55Oj),
                                value: C.d4z.GUILD_VOICE,
                                description: y.intl.string(y.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            i.push({
                                icon: s.ewx,
                                label: y.intl.string(y.t.pNWst7),
                                value: C.d4z.GUILD_STAGE_VOICE,
                                description: y.intl.string(y.t.VPAwgo)
                            }),
                        a &&
                            (i.push({
                                icon: s.Mmi,
                                label: y.intl.string(y.t.eAVIDw),
                                value: C.d4z.GUILD_FORUM,
                                description: y.intl.string(y.t.iZ5pgo)
                            }),
                            r &&
                                i.push({
                                    icon: s.XBm,
                                    label: y.intl.string(y.t['6x6fVl']),
                                    value: C.d4z.GUILD_MEDIA,
                                    description: y.intl.string(y.t.JyCrwc),
                                    isBeta: !0
                                })),
                        i.map((e) => {
                            let { icon: t, label: a, value: r, description: i, isBeta: o } = e;
                            return {
                                name: (0, n.jsxs)('div', {
                                    className: S.channelOptionWrapper,
                                    children: [
                                        (0, n.jsx)(t, { className: S.icon }),
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsxs)(s.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [a, (0, n.jsx)(_.p, { isBeta: o })]
                                                }),
                                                (0, n.jsx)(s.Text, {
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
                    canCreateForumChannel: z,
                    canCreateMediaChannel: F
                }),
            [V, z, F]
        ),
        q = (0, o.e7)([g.Z], () => g.Z.getCategories(j)._categories, [j]),
        J = r.useMemo(
            () =>
                q.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name
                    };
                }),
            [q]
        ),
        K = null != (a = null == (t = X.find((e) => e.value === k)) ? void 0 : t.channelIcon) ? a : N.Vq,
        Y = '' !== H;
    return (0, n.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !Y)) return;
            P(!0);
            let t = {
                type: k,
                name: H,
                parent_id: 'null' !== W ? W : void 0,
                permission_overwrites: [
                    {
                        id: j,
                        type: u.BN.ROLE,
                        allow: L.Hn,
                        deny: C.Plq.VIEW_CHANNEL
                    }
                ]
            };
            w.Z.post({
                url: C.ANM.GUILD_CHANNELS(j),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, a;
                        return (0, l.iG)({
                            is_private: !0,
                            channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                            channel_type: null == e || null == (a = e.body) ? void 0 : a.type
                        });
                    }
                },
                rejectWithError: !0
            })
                .then(
                    (e) => {
                        (h.Z.checkGuildTemplateDirty(j), D(e.body.id), E());
                    },
                    (e) => {}
                )
                .finally(() => {
                    P(!1);
                });
        },
        children: (0, n.jsx)(c.Modal, {
            transitionState: B,
            title: y.intl.string(y.t['fUYU+v']),
            onClose: E,
            actionBarInput: (0, n.jsx)(s.Avr, {
                text: y.intl.string(y.t['13/7kZ']),
                onClick: E
            }),
            actions: [
                {
                    variant: 'primary',
                    text: y.intl.string(y.t.R3BPHx),
                    loading: O,
                    disabled: !Y,
                    type: 'submit'
                }
            ],
            children: (0, n.jsxs)(s.Kqy, {
                gap: 16,
                children: [
                    (0, n.jsx)(s.xJW, {
                        title: y.intl.string(y.t.vHCZws),
                        titleId: T,
                        children: (0, n.jsx)(s.q4e, {
                            placeholder: y.intl.string(y.t['g/Rr2d']),
                            value: W,
                            options: J,
                            onChange: (e) => G(e),
                            'aria-labelledby': T
                        })
                    }),
                    (0, n.jsx)(s.xJW, {
                        title: y.intl.string(y.t['7ZcXGx']),
                        titleId: R,
                        children: (0, n.jsx)(s.FXm, {
                            options: X,
                            value: k,
                            onChange: (e) => {
                                let { value: t } = e;
                                return A(t);
                            },
                            'aria-labelledby': R
                        })
                    }),
                    (0, n.jsx)(s.xJW, {
                        title: y.intl.string(y.t.PVbHDg),
                        titleId: M,
                        children: (0, n.jsx)(d.Is, {
                            value: H,
                            onChange: function (e) {
                                ((0, f.zi)(k) && (e = (0, v.Nj)(e)), U(e));
                            },
                            maxLength: C.HN8,
                            placeholder: y.intl.string(y.t['bw/b8P']),
                            className: S.inputWrapper,
                            inputClassName: S.inputInner,
                            prefixElement: (0, n.jsx)(K, {
                                className: S.inputPrefix,
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            'aria-labelledby': M,
                            autoFocus: !0
                        })
                    })
                ]
            })
        })
    });
}
