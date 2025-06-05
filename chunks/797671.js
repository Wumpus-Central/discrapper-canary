n.d(t, { default: () => w }), n(539854), n(953529), n(388685), n(457542);
var a = n(255367),
    i = n(73800),
    r = n(990547),
    o = n(442837),
    l = n(283693),
    c = n(481060),
    d = n(218613),
    s = n(911969),
    u = n(600164),
    _ = n(313201),
    p = n(456269),
    b = n(408987),
    m = n(312146),
    h = n(60222),
    f = n(131704),
    x = n(324067),
    g = n(430824),
    I = n(259580),
    C = n(934415),
    j = n(700785),
    E = n(573261),
    N = n(981631),
    v = n(231338),
    B = n(388032),
    k = n(720848);
function w(e) {
    var t, n;
    let { guildId: w, transitionState: L, onSubmit: S, onClose: y } = e,
        T = (0, _.Dt)(),
        D = (0, _.Dt)(),
        W = (0, _.Dt)(),
        P = (0, _.Dt)(),
        [R, M] = i.useState(N.Sc2),
        [G, U] = i.useState(N.d4z.GUILD_TEXT),
        [z, H] = i.useState(''),
        [O, Z] = i.useState(!1),
        A = (0, o.e7)([g.Z], () => g.Z.getGuild(w), [w]),
        F = (0, h.m)(w),
        V = (0, p.W3)(w),
        X = (0, m.Ui)(A),
        q = i.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: i } = e,
                        r = [
                            {
                                icon: c.VL1,
                                label: B.intl.string(B.t.pnuRXF),
                                value: N.d4z.GUILD_TEXT,
                                description: B.intl.string(B.t.Hf5Lb2)
                            },
                            {
                                icon: c.gj8,
                                label: B.intl.string(B.t.Sx55Oj),
                                value: N.d4z.GUILD_VOICE,
                                description: B.intl.string(B.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            r.push({
                                icon: c.ewx,
                                label: B.intl.string(B.t.pNWst7),
                                value: N.d4z.GUILD_STAGE_VOICE,
                                description: B.intl.string(B.t.VPAwgo)
                            }),
                        n &&
                            (r.push({
                                icon: c.Mmi,
                                label: B.intl.string(B.t.eAVIDw),
                                value: N.d4z.GUILD_FORUM,
                                description: B.intl.string(B.t.iZ5pgo)
                            }),
                            i &&
                                r.push({
                                    icon: c.XBm,
                                    label: B.intl.string(B.t['6x6fVl']),
                                    value: N.d4z.GUILD_MEDIA,
                                    description: B.intl.string(B.t.JyCrwc),
                                    isBeta: !0
                                })),
                        r.map((e) => {
                            let { icon: t, label: n, value: i, description: r, isBeta: o } = e;
                            return {
                                name: (0, a.jsxs)('div', {
                                    className: k.channelOptionWrapper,
                                    children: [
                                        (0, a.jsx)(t, { className: k.icon }),
                                        (0, a.jsxs)('div', {
                                            children: [
                                                (0, a.jsxs)(c.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, a.jsx)(d.p, { isBeta: o })]
                                                }),
                                                (0, a.jsx)(c.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: r
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                value: i,
                                channelIcon: t
                            };
                        })
                    );
                })({
                    canCreateStageChannel: F,
                    canCreateForumChannel: V,
                    canCreateMediaChannel: X
                }),
            [F, V, X]
        ),
        J = (0, o.e7)([x.Z], () => x.Z.getCategories(w)._categories, [w]),
        Y = i.useMemo(
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
        K = null != (n = null == (t = q.find((e) => e.value === G)) ? void 0 : t.channelIcon) ? n : v.Vq,
        $ = '' !== z;
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            Z(!0);
            let t = {
                type: G,
                name: z,
                parent_id: 'null' !== R ? R : void 0,
                permission_overwrites: [
                    {
                        id: w,
                        type: s.BN.ROLE,
                        allow: j.Hn,
                        deny: N.Plq.VIEW_CHANNEL
                    }
                ]
            };
            E.Z.post({
                url: N.ANM.GUILD_CHANNELS(w),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, l.iG)({
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
                        b.Z.checkGuildTemplateDirty(w), S(e.body.id), y();
                    },
                    (e) => {}
                )
                .finally(() => {
                    Z(!1);
                });
        },
        children: (0, a.jsxs)(c.Y0X, {
            transitionState: L,
            'aria-labelledby': T,
            parentComponent: 'ChannelSelectorCreateChannelModal',
            children: [
                (0, a.jsxs)(c.xBx, {
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: T,
                            variant: 'heading-md/semibold',
                            children: B.intl.string(B.t['fUYU+v'])
                        }),
                        (0, a.jsx)(c.olH, {
                            className: k.closeButton,
                            onClick: y
                        })
                    ]
                }),
                (0, a.jsxs)(c.hzk, {
                    className: k.modalContent,
                    children: [
                        (0, a.jsx)(c.xJW, {
                            title: B.intl.string(B.t.vHCZws),
                            titleId: D,
                            children: (0, a.jsx)(c.q4e, {
                                placeholder: B.intl.string(B.t['g/Rr2d']),
                                value: R,
                                options: Y,
                                onChange: (e) => M(e),
                                'aria-labelledby': D
                            })
                        }),
                        (0, a.jsx)('div', { className: k.spacer }),
                        (0, a.jsx)(c.xJW, {
                            title: B.intl.string(B.t['7ZcXGx']),
                            titleId: W,
                            children: (0, a.jsx)(c.FXm, {
                                options: q,
                                value: G,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return U(t);
                                },
                                'aria-labelledby': W
                            })
                        }),
                        (0, a.jsx)('div', { className: k.spacer }),
                        (0, a.jsx)(c.xJW, {
                            title: B.intl.string(B.t.PVbHDg),
                            titleId: P,
                            children: (0, a.jsx)(c.oil, {
                                value: z,
                                onChange: function (e) {
                                    (0, f.zi)(G) && (e = (0, C.Nj)(e)), H(e);
                                },
                                maxLength: N.HN8,
                                placeholder: B.intl.string(B.t['bw/b8P']),
                                className: k.inputWrapper,
                                inputClassName: k.inputInner,
                                prefixElement: (0, a.jsx)(K, {
                                    className: k.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': P,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(c.mzw, {
                    justify: u.Z.Justify.BETWEEN,
                    children: [
                        (0, a.jsx)(c.zxk, {
                            type: 'submit',
                            submitting: O,
                            disabled: !$,
                            children: B.intl.string(B.t.R3BPHx)
                        }),
                        (0, a.jsxs)(c.zxk, {
                            look: c.zxk.Looks.LINK,
                            color: c.zxk.Colors.PRIMARY,
                            className: k.backButton,
                            innerClassName: k.backButtonInner,
                            onClick: y,
                            children: [(0, a.jsx)(I.Z, { direction: I.Z.Directions.LEFT }), B.intl.string(B.t['13/7kZ'])]
                        })
                    ]
                })
            ]
        })
    });
}
