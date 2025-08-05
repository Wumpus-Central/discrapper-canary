(n.d(t, { default: () => E }), n(539854), n(953529), n(388685), n(457542));
var i = n(255367),
    a = n(73800),
    r = n(990547),
    o = n(442837),
    c = n(283693),
    l = n(82659),
    s = n(755721),
    d = n(481060),
    p = n(218613),
    u = n(911969),
    _ = n(313201),
    m = n(408987),
    h = n(312146),
    f = n(60222),
    b = n(131704),
    x = n(324067),
    g = n(430824),
    I = n(934415),
    v = n(700785),
    N = n(573261),
    C = n(981631),
    j = n(231338),
    y = n(388032),
    D = n(720848);
function E(e) {
    var t, n;
    let { guildId: E, transitionState: L, onSubmit: B, onClose: S } = e,
        w = (0, _.Dt)(),
        W = (0, _.Dt)(),
        G = (0, _.Dt)(),
        [T, A] = a.useState(C.Sc2),
        [M, U] = a.useState(C.d4z.GUILD_TEXT),
        [k, H] = a.useState(''),
        [O, P] = a.useState(!1),
        Z = (0, o.e7)([g.Z], () => g.Z.getGuild(E), [E]),
        V = (0, f.m)(E),
        R = (0, h.Ui)(Z),
        z = a.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        a = [
                            {
                                icon: d.VL1,
                                label: y.intl.string(y.t.pnuRXF),
                                value: C.d4z.GUILD_TEXT,
                                description: y.intl.string(y.t.Hf5Lb2)
                            },
                            {
                                icon: d.gj8,
                                label: y.intl.string(y.t.Sx55Oj),
                                value: C.d4z.GUILD_VOICE,
                                description: y.intl.string(y.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            a.push({
                                icon: d.ewx,
                                label: y.intl.string(y.t.pNWst7),
                                value: C.d4z.GUILD_STAGE_VOICE,
                                description: y.intl.string(y.t.VPAwgo)
                            }),
                        a.push({
                            icon: d.Mmi,
                            label: y.intl.string(y.t.eAVIDw),
                            value: C.d4z.GUILD_FORUM,
                            description: y.intl.string(y.t.iZ5pgo)
                        }),
                        n &&
                            a.push({
                                icon: d.XBm,
                                label: y.intl.string(y.t['6x6fVl']),
                                value: C.d4z.GUILD_MEDIA,
                                description: y.intl.string(y.t.JyCrwc),
                                isBeta: !0
                            }),
                        a.map((e) => {
                            let { icon: t, label: n, value: a, description: r, isBeta: o } = e;
                            return {
                                name: (0, i.jsxs)('div', {
                                    className: D.channelOptionWrapper,
                                    children: [
                                        (0, i.jsx)(t, { className: D.icon }),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsxs)(d.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, i.jsx)(p.p, { isBeta: o })]
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: r
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                value: a,
                                channelIcon: t
                            };
                        })
                    );
                })({
                    canCreateStageChannel: V,
                    canCreateMediaChannel: R
                }),
            [V, R]
        ),
        F = (0, o.e7)([x.Z], () => x.Z.getCategories(E)._categories, [E]),
        X = a.useMemo(
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
        q = null != (n = null == (t = z.find((e) => e.value === M)) ? void 0 : t.channelIcon) ? n : j.Vq,
        J = '' !== k;
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            P(!0);
            let t = {
                type: M,
                name: k,
                parent_id: 'null' !== T ? T : void 0,
                permission_overwrites: [
                    {
                        id: E,
                        type: u.BN.ROLE,
                        allow: v.Hn,
                        deny: C.Plq.VIEW_CHANNEL
                    }
                ]
            };
            N.Z.post({
                url: C.ANM.GUILD_CHANNELS(E),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
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
                        (m.Z.checkGuildTemplateDirty(E), B(e.body.id), S());
                    },
                    (e) => {}
                )
                .finally(() => {
                    P(!1);
                });
        },
        children: (0, i.jsx)(l.Modal, {
            transitionState: L,
            title: y.intl.string(y.t['fUYU+v']),
            onClose: S,
            actionBarInput: (0, i.jsx)(d.Avr, {
                text: y.intl.string(y.t['13/7kZ']),
                onClick: S
            }),
            actions: [
                {
                    variant: 'primary',
                    text: y.intl.string(y.t.R3BPHx),
                    loading: O,
                    disabled: !J,
                    type: 'submit'
                }
            ],
            children: (0, i.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsx)(d.xJW, {
                        title: y.intl.string(y.t.vHCZws),
                        titleId: w,
                        children: (0, i.jsx)(d.q4e, {
                            placeholder: y.intl.string(y.t['g/Rr2d']),
                            value: T,
                            options: X,
                            onChange: (e) => A(e),
                            'aria-labelledby': w
                        })
                    }),
                    (0, i.jsx)(d.xJW, {
                        title: y.intl.string(y.t['7ZcXGx']),
                        titleId: W,
                        children: (0, i.jsx)(d.FXm, {
                            options: z,
                            value: M,
                            onChange: (e) => {
                                let { value: t } = e;
                                return U(t);
                            },
                            'aria-labelledby': W
                        })
                    }),
                    (0, i.jsx)(d.xJW, {
                        title: y.intl.string(y.t.PVbHDg),
                        titleId: G,
                        children: (0, i.jsx)(s.Is, {
                            value: k,
                            onChange: function (e) {
                                ((0, b.zi)(M) && (e = (0, I.Nj)(e)), H(e));
                            },
                            maxLength: C.HN8,
                            placeholder: y.intl.string(y.t['bw/b8P']),
                            className: D.inputWrapper,
                            inputClassName: D.inputInner,
                            prefixElement: (0, i.jsx)(q, {
                                className: D.inputPrefix,
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            'aria-labelledby': G,
                            autoFocus: !0
                        })
                    })
                ]
            })
        })
    });
}
