(a.d(t, { default: () => S }), a(539854), a(953529), a(388685), a(457542));
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
    b = a(408987),
    h = a(312146),
    m = a(60222),
    x = a(131704),
    f = a(324067),
    g = a(430824),
    I = a(934415),
    v = a(700785),
    L = a(573261),
    w = a(981631),
    C = a(231338),
    N = a(388032),
    y = a(720848);
function S(e) {
    var t, a;
    let { guildId: S, transitionState: j, onSubmit: B, onClose: D } = e,
        E = (0, p.Dt)(),
        T = (0, p.Dt)(),
        R = (0, p.Dt)(),
        [M, W] = r.useState(w.Sc2),
        [G, k] = r.useState(w.d4z.GUILD_TEXT),
        [A, H] = r.useState(''),
        [U, O] = r.useState(!1),
        P = (0, o.e7)([g.Z], () => g.Z.getGuild(S), [S]),
        Z = (0, m.m)(S),
        V = (0, h.Ui)(P),
        z = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: a } = e,
                        r = [
                            {
                                icon: s.VL1,
                                label: N.intl.string(N.t.pnuRXF),
                                value: w.d4z.GUILD_TEXT,
                                description: N.intl.string(N.t.Hf5Lb2)
                            },
                            {
                                icon: s.gj8,
                                label: N.intl.string(N.t.Sx55Oj),
                                value: w.d4z.GUILD_VOICE,
                                description: N.intl.string(N.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            r.push({
                                icon: s.ewx,
                                label: N.intl.string(N.t.pNWst7),
                                value: w.d4z.GUILD_STAGE_VOICE,
                                description: N.intl.string(N.t.VPAwgo)
                            }),
                        r.push({
                            icon: s.Mmi,
                            label: N.intl.string(N.t.eAVIDw),
                            value: w.d4z.GUILD_FORUM,
                            description: N.intl.string(N.t.iZ5pgo)
                        }),
                        a &&
                            r.push({
                                icon: s.XBm,
                                label: N.intl.string(N.t['6x6fVl']),
                                value: w.d4z.GUILD_MEDIA,
                                description: N.intl.string(N.t.JyCrwc),
                                isBeta: !0
                            }),
                        r.map((e) => {
                            let { icon: t, label: a, value: r, description: i, isBeta: o } = e;
                            return {
                                name: (0, n.jsxs)('div', {
                                    className: y.channelOptionWrapper,
                                    children: [
                                        (0, n.jsx)(t, { className: y.icon }),
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
                    canCreateStageChannel: Z,
                    canCreateMediaChannel: V
                }),
            [Z, V]
        ),
        F = (0, o.e7)([f.Z], () => f.Z.getCategories(S)._categories, [S]),
        X = r.useMemo(
            () =>
                F.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name
                    };
                }),
            [F]
        ),
        q = null != (a = null == (t = z.find((e) => e.value === G)) ? void 0 : t.channelIcon) ? a : C.Vq,
        J = '' !== A;
    return (0, n.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            O(!0);
            let t = {
                type: G,
                name: A,
                parent_id: 'null' !== M ? M : void 0,
                permission_overwrites: [
                    {
                        id: S,
                        type: u.BN.ROLE,
                        allow: v.Hn,
                        deny: w.Plq.VIEW_CHANNEL
                    }
                ]
            };
            L.Z.post({
                url: w.ANM.GUILD_CHANNELS(S),
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
                        (b.Z.checkGuildTemplateDirty(S), B(e.body.id), D());
                    },
                    (e) => {}
                )
                .finally(() => {
                    O(!1);
                });
        },
        children: (0, n.jsx)(c.Modal, {
            transitionState: j,
            title: N.intl.string(N.t['fUYU+v']),
            onClose: D,
            actionBarInput: (0, n.jsx)(s.Avr, {
                text: N.intl.string(N.t['13/7kZ']),
                onClick: D
            }),
            actions: [
                {
                    variant: 'primary',
                    text: N.intl.string(N.t.R3BPHx),
                    loading: U,
                    disabled: !J,
                    type: 'submit'
                }
            ],
            children: (0, n.jsxs)(s.Kqy, {
                gap: 16,
                children: [
                    (0, n.jsx)(s.xJW, {
                        title: N.intl.string(N.t.vHCZws),
                        titleId: E,
                        children: (0, n.jsx)(s.q4e, {
                            placeholder: N.intl.string(N.t['g/Rr2d']),
                            value: M,
                            options: X,
                            onChange: (e) => W(e),
                            'aria-labelledby': E
                        })
                    }),
                    (0, n.jsx)(s.xJW, {
                        title: N.intl.string(N.t['7ZcXGx']),
                        titleId: T,
                        children: (0, n.jsx)(s.FXm, {
                            options: z,
                            value: G,
                            onChange: (e) => {
                                let { value: t } = e;
                                return k(t);
                            },
                            'aria-labelledby': T
                        })
                    }),
                    (0, n.jsx)(s.xJW, {
                        title: N.intl.string(N.t.PVbHDg),
                        titleId: R,
                        children: (0, n.jsx)(d.Is, {
                            value: A,
                            onChange: function (e) {
                                ((0, x.zi)(G) && (e = (0, I.Nj)(e)), H(e));
                            },
                            maxLength: w.HN8,
                            placeholder: N.intl.string(N.t['bw/b8P']),
                            className: y.inputWrapper,
                            inputClassName: y.inputInner,
                            prefixElement: (0, n.jsx)(q, {
                                className: y.inputPrefix,
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            'aria-labelledby': R,
                            autoFocus: !0
                        })
                    })
                ]
            })
        })
    });
}
