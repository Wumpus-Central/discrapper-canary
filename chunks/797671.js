(n.d(t, { default: () => E }), n(539854), n(953529), n(388685), n(457542));
var a = n(255367),
    r = n(73800),
    i = n(990547),
    o = n(442837),
    c = n(283693),
    l = n(82659),
    d = n(755721),
    s = n(481060),
    _ = n(218613),
    p = n(911969),
    u = n(313201),
    b = n(456269),
    h = n(408987),
    m = n(312146),
    x = n(60222),
    f = n(131704),
    I = n(324067),
    g = n(430824),
    v = n(934415),
    L = n(700785),
    j = n(573261),
    w = n(981631),
    C = n(231338),
    N = n(388032),
    y = n(720848);
function E(e) {
    var t, n;
    let { guildId: E, transitionState: S, onSubmit: B, onClose: W } = e,
        D = (0, u.Dt)(),
        T = (0, u.Dt)(),
        k = (0, u.Dt)(),
        [R, M] = r.useState(w.Sc2),
        [P, G] = r.useState(w.d4z.GUILD_TEXT),
        [A, H] = r.useState(''),
        [U, O] = r.useState(!1),
        Z = (0, o.e7)([g.Z], () => g.Z.getGuild(E), [E]),
        V = (0, x.m)(E),
        z = (0, b.W3)(E),
        F = (0, m.Ui)(Z),
        X = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: r } = e,
                        i = [
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
                            i.push({
                                icon: s.ewx,
                                label: N.intl.string(N.t.pNWst7),
                                value: w.d4z.GUILD_STAGE_VOICE,
                                description: N.intl.string(N.t.VPAwgo)
                            }),
                        n &&
                            (i.push({
                                icon: s.Mmi,
                                label: N.intl.string(N.t.eAVIDw),
                                value: w.d4z.GUILD_FORUM,
                                description: N.intl.string(N.t.iZ5pgo)
                            }),
                            r &&
                                i.push({
                                    icon: s.XBm,
                                    label: N.intl.string(N.t['6x6fVl']),
                                    value: w.d4z.GUILD_MEDIA,
                                    description: N.intl.string(N.t.JyCrwc),
                                    isBeta: !0
                                })),
                        i.map((e) => {
                            let { icon: t, label: n, value: r, description: i, isBeta: o } = e;
                            return {
                                name: (0, a.jsxs)('div', {
                                    className: y.channelOptionWrapper,
                                    children: [
                                        (0, a.jsx)(t, { className: y.icon }),
                                        (0, a.jsxs)('div', {
                                            children: [
                                                (0, a.jsxs)(s.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, a.jsx)(_.p, { isBeta: o })]
                                                }),
                                                (0, a.jsx)(s.Text, {
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
        q = (0, o.e7)([I.Z], () => I.Z.getCategories(E)._categories, [E]),
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
        K = null != (n = null == (t = X.find((e) => e.value === P)) ? void 0 : t.channelIcon) ? n : C.Vq,
        Y = '' !== A;
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !Y)) return;
            O(!0);
            let t = {
                type: P,
                name: A,
                parent_id: 'null' !== R ? R : void 0,
                permission_overwrites: [
                    {
                        id: E,
                        type: p.BN.ROLE,
                        allow: L.Hn,
                        deny: w.Plq.VIEW_CHANNEL
                    }
                ]
            };
            j.Z.post({
                url: w.ANM.GUILD_CHANNELS(E),
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
                        (h.Z.checkGuildTemplateDirty(E), B(e.body.id), W());
                    },
                    (e) => {}
                )
                .finally(() => {
                    O(!1);
                });
        },
        children: (0, a.jsx)(l.Modal, {
            transitionState: S,
            title: N.intl.string(N.t['fUYU+v']),
            onClose: W,
            actionBarInput: (0, a.jsx)(s.Avr, {
                text: N.intl.string(N.t['13/7kZ']),
                onClick: W
            }),
            actions: [
                {
                    variant: 'primary',
                    text: N.intl.string(N.t.R3BPHx),
                    loading: U,
                    disabled: !Y,
                    type: 'submit'
                }
            ],
            children: (0, a.jsxs)(s.Kqy, {
                gap: 16,
                children: [
                    (0, a.jsx)(s.xJW, {
                        title: N.intl.string(N.t.vHCZws),
                        titleId: D,
                        children: (0, a.jsx)(s.q4e, {
                            placeholder: N.intl.string(N.t['g/Rr2d']),
                            value: R,
                            options: J,
                            onChange: (e) => M(e),
                            'aria-labelledby': D
                        })
                    }),
                    (0, a.jsx)(s.xJW, {
                        title: N.intl.string(N.t['7ZcXGx']),
                        titleId: T,
                        children: (0, a.jsx)(s.FXm, {
                            options: X,
                            value: P,
                            onChange: (e) => {
                                let { value: t } = e;
                                return G(t);
                            },
                            'aria-labelledby': T
                        })
                    }),
                    (0, a.jsx)(s.xJW, {
                        title: N.intl.string(N.t.PVbHDg),
                        titleId: k,
                        children: (0, a.jsx)(d.Is, {
                            value: A,
                            onChange: function (e) {
                                ((0, f.zi)(P) && (e = (0, v.Nj)(e)), H(e));
                            },
                            maxLength: w.HN8,
                            placeholder: N.intl.string(N.t['bw/b8P']),
                            className: y.inputWrapper,
                            inputClassName: y.inputInner,
                            prefixElement: (0, a.jsx)(K, {
                                className: y.inputPrefix,
                                color: 'currentColor',
                                'aria-hidden': !0
                            }),
                            'aria-labelledby': k,
                            autoFocus: !0
                        })
                    })
                ]
            })
        })
    });
}
