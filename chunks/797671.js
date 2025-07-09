(n.d(t, { default: () => k }), n(539854), n(953529), n(388685), n(457542));
var a = n(255367),
    r = n(73800),
    i = n(990547),
    o = n(442837),
    c = n(283693),
    l = n(755721),
    s = n(481060),
    d = n(218613),
    u = n(911969),
    _ = n(600164),
    p = n(313201),
    b = n(456269),
    h = n(408987),
    m = n(312146),
    f = n(60222),
    x = n(131704),
    I = n(324067),
    g = n(430824),
    j = n(259580),
    C = n(934415),
    B = n(700785),
    N = n(573261),
    v = n(981631),
    L = n(231338),
    w = n(388032),
    E = n(720848);
function k(e) {
    var t, n;
    let { guildId: k, transitionState: y, onSubmit: S, onClose: D } = e,
        W = (0, p.Dt)(),
        T = (0, p.Dt)(),
        R = (0, p.Dt)(),
        M = (0, p.Dt)(),
        [P, z] = r.useState(v.Sc2),
        [G, H] = r.useState(v.d4z.GUILD_TEXT),
        [Z, A] = r.useState(''),
        [U, O] = r.useState(!1),
        V = (0, o.e7)([g.Z], () => g.Z.getGuild(k), [k]),
        F = (0, f.m)(k),
        X = (0, b.W3)(k),
        q = (0, m.Ui)(V),
        J = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: r } = e,
                        i = [
                            {
                                icon: s.VL1,
                                label: w.intl.string(w.t.pnuRXF),
                                value: v.d4z.GUILD_TEXT,
                                description: w.intl.string(w.t.Hf5Lb2)
                            },
                            {
                                icon: s.gj8,
                                label: w.intl.string(w.t.Sx55Oj),
                                value: v.d4z.GUILD_VOICE,
                                description: w.intl.string(w.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            i.push({
                                icon: s.ewx,
                                label: w.intl.string(w.t.pNWst7),
                                value: v.d4z.GUILD_STAGE_VOICE,
                                description: w.intl.string(w.t.VPAwgo)
                            }),
                        n &&
                            (i.push({
                                icon: s.Mmi,
                                label: w.intl.string(w.t.eAVIDw),
                                value: v.d4z.GUILD_FORUM,
                                description: w.intl.string(w.t.iZ5pgo)
                            }),
                            r &&
                                i.push({
                                    icon: s.XBm,
                                    label: w.intl.string(w.t['6x6fVl']),
                                    value: v.d4z.GUILD_MEDIA,
                                    description: w.intl.string(w.t.JyCrwc),
                                    isBeta: !0
                                })),
                        i.map((e) => {
                            let { icon: t, label: n, value: r, description: i, isBeta: o } = e;
                            return {
                                name: (0, a.jsxs)('div', {
                                    className: E.channelOptionWrapper,
                                    children: [
                                        (0, a.jsx)(t, { className: E.icon }),
                                        (0, a.jsxs)('div', {
                                            children: [
                                                (0, a.jsxs)(s.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, a.jsx)(d.p, { isBeta: o })]
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
                    canCreateStageChannel: F,
                    canCreateForumChannel: X,
                    canCreateMediaChannel: q
                }),
            [F, X, q]
        ),
        Y = (0, o.e7)([I.Z], () => I.Z.getCategories(k)._categories, [k]),
        K = r.useMemo(
            () =>
                Y.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name
                    };
                }),
            [Y]
        ),
        Q = null != (n = null == (t = J.find((e) => e.value === G)) ? void 0 : t.channelIcon) ? n : L.Vq,
        $ = '' !== Z;
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            O(!0);
            let t = {
                type: G,
                name: Z,
                parent_id: 'null' !== P ? P : void 0,
                permission_overwrites: [
                    {
                        id: k,
                        type: u.BN.ROLE,
                        allow: B.Hn,
                        deny: v.Plq.VIEW_CHANNEL
                    }
                ]
            };
            N.Z.post({
                url: v.ANM.GUILD_CHANNELS(k),
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
                        (h.Z.checkGuildTemplateDirty(k), S(e.body.id), D());
                    },
                    (e) => {}
                )
                .finally(() => {
                    O(!1);
                });
        },
        children: (0, a.jsxs)(s.Y0X, {
            transitionState: y,
            'aria-labelledby': W,
            parentComponent: 'ChannelSelectorCreateChannelModal',
            children: [
                (0, a.jsxs)(s.xBx, {
                    children: [
                        (0, a.jsx)(s.X6q, {
                            id: W,
                            variant: 'heading-md/semibold',
                            children: w.intl.string(w.t['fUYU+v'])
                        }),
                        (0, a.jsx)(s.olH, {
                            className: E.closeButton,
                            onClick: D
                        })
                    ]
                }),
                (0, a.jsxs)(s.hzk, {
                    className: E.modalContent,
                    children: [
                        (0, a.jsx)(s.xJW, {
                            title: w.intl.string(w.t.vHCZws),
                            titleId: T,
                            children: (0, a.jsx)(s.q4e, {
                                placeholder: w.intl.string(w.t['g/Rr2d']),
                                value: P,
                                options: K,
                                onChange: (e) => z(e),
                                'aria-labelledby': T
                            })
                        }),
                        (0, a.jsx)('div', { className: E.spacer }),
                        (0, a.jsx)(s.xJW, {
                            title: w.intl.string(w.t['7ZcXGx']),
                            titleId: R,
                            children: (0, a.jsx)(s.FXm, {
                                options: J,
                                value: G,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return H(t);
                                },
                                'aria-labelledby': R
                            })
                        }),
                        (0, a.jsx)('div', { className: E.spacer }),
                        (0, a.jsx)(s.xJW, {
                            title: w.intl.string(w.t.PVbHDg),
                            titleId: M,
                            children: (0, a.jsx)(s.oil, {
                                value: Z,
                                onChange: function (e) {
                                    ((0, x.zi)(G) && (e = (0, C.Nj)(e)), A(e));
                                },
                                maxLength: v.HN8,
                                placeholder: w.intl.string(w.t['bw/b8P']),
                                className: E.inputWrapper,
                                inputClassName: E.inputInner,
                                prefixElement: (0, a.jsx)(Q, {
                                    className: E.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': M,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(s.mzw, {
                    justify: _.Z.Justify.BETWEEN,
                    children: [
                        (0, a.jsx)(s.zxk, {
                            variant: 'primary',
                            text: w.intl.string(w.t.R3BPHx),
                            type: 'submit',
                            loading: U,
                            disabled: !$
                        }),
                        (0, a.jsxs)(l.zx, {
                            look: l.zx.Looks.LINK,
                            color: l.zx.Colors.PRIMARY,
                            className: E.backButton,
                            innerClassName: E.backButtonInner,
                            onClick: D,
                            children: [(0, a.jsx)(j.Z, { direction: j.Z.Directions.LEFT }), w.intl.string(w.t['13/7kZ'])]
                        })
                    ]
                })
            ]
        })
    });
}
