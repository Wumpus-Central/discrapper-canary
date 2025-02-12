n.d(t, { default: () => k }), n(653041), n(47120), n(773603);
var a = n(200651),
    i = n(192379),
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
    f = n(312146),
    h = n(60222),
    m = n(131704),
    x = n(324067),
    g = n(430824),
    v = n(259580),
    I = n(934415),
    B = n(700785),
    C = n(573261),
    N = n(981631),
    E = n(231338),
    L = n(388032),
    j = n(126852);
function k(e) {
    var t, n;
    let { guildId: k, transitionState: w, onSubmit: y, onClose: S } = e,
        D = (0, _.Dt)(),
        T = (0, _.Dt)(),
        R = (0, _.Dt)(),
        M = (0, _.Dt)(),
        [W, G] = i.useState(N.Sc2),
        [U, z] = i.useState(N.d4z.GUILD_TEXT),
        [H, P] = i.useState(''),
        [Z, A] = i.useState(!1),
        F = (0, o.e7)([g.Z], () => g.Z.getGuild(k), [k]),
        O = (0, h.m)(k),
        V = (0, p.W3)(k),
        X = (0, f.Ui)(F),
        q = i.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: i } = e,
                        r = [
                            {
                                icon: c.VL1,
                                label: L.intl.string(L.t.pnuRXF),
                                value: N.d4z.GUILD_TEXT,
                                description: L.intl.string(L.t.Hf5Lb2)
                            },
                            {
                                icon: c.gj8,
                                label: L.intl.string(L.t.Sx55Oj),
                                value: N.d4z.GUILD_VOICE,
                                description: L.intl.string(L.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            r.push({
                                icon: c.ewx,
                                label: L.intl.string(L.t.pNWst7),
                                value: N.d4z.GUILD_STAGE_VOICE,
                                description: L.intl.string(L.t.VPAwgo)
                            }),
                        n &&
                            (r.push({
                                icon: c.Mmi,
                                label: L.intl.string(L.t.eAVIDw),
                                value: N.d4z.GUILD_FORUM,
                                description: L.intl.string(L.t.iZ5pgo)
                            }),
                            i &&
                                r.push({
                                    icon: c.XBm,
                                    label: L.intl.string(L.t['6x6fVl']),
                                    value: N.d4z.GUILD_MEDIA,
                                    description: L.intl.string(L.t.JyCrwc),
                                    isBeta: !0
                                })),
                        r.map((e) => {
                            let { icon: t, label: n, value: i, description: r, isBeta: o } = e;
                            return {
                                name: (0, a.jsxs)('div', {
                                    className: j.channelOptionWrapper,
                                    children: [
                                        (0, a.jsx)(t, { className: j.icon }),
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
                    canCreateStageChannel: O,
                    canCreateForumChannel: V,
                    canCreateMediaChannel: X
                }),
            [O, V, X]
        ),
        J = (0, o.e7)([x.Z], () => x.Z.getCategories(k)._categories, [k]),
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
        K = null !== (n = null === (t = q.find((e) => e.value === U)) || void 0 === t ? void 0 : t.channelIcon) && void 0 !== n ? n : E.Vq,
        $ = '' !== H;
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            A(!0);
            let t = {
                type: U,
                name: H,
                parent_id: 'null' !== W ? W : void 0,
                permission_overwrites: [
                    {
                        id: k,
                        type: s.BN.ROLE,
                        allow: B.Hn,
                        deny: N.Plq.VIEW_CHANNEL
                    }
                ]
            };
            C.Z.post({
                url: N.ANM.GUILD_CHANNELS(k),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, l.iG)({
                            is_private: !0,
                            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                        });
                    }
                },
                rejectWithError: !0
            })
                .then(
                    (e) => {
                        b.Z.checkGuildTemplateDirty(k), y(e.body.id), S();
                    },
                    (e) => {}
                )
                .finally(() => {
                    A(!1);
                });
        },
        children: (0, a.jsxs)(c.Y0X, {
            transitionState: w,
            'aria-labelledby': D,
            children: [
                (0, a.jsxs)(c.xBx, {
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: D,
                            variant: 'heading-md/semibold',
                            children: L.intl.string(L.t['fUYU+v'])
                        }),
                        (0, a.jsx)(c.olH, {
                            className: j.closeButton,
                            onClick: S
                        })
                    ]
                }),
                (0, a.jsxs)(c.hzk, {
                    className: j.modalContent,
                    children: [
                        (0, a.jsx)(c.xJW, {
                            title: L.intl.string(L.t.vHCZws),
                            titleId: T,
                            children: (0, a.jsx)(c.q4e, {
                                placeholder: L.intl.string(L.t['g/Rr2d']),
                                value: W,
                                options: Y,
                                onChange: (e) => G(e),
                                'aria-labelledby': T
                            })
                        }),
                        (0, a.jsx)('div', { className: j.spacer }),
                        (0, a.jsx)(c.xJW, {
                            title: L.intl.string(L.t['7ZcXGx']),
                            titleId: R,
                            children: (0, a.jsx)(c.FXm, {
                                options: q,
                                value: U,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return z(t);
                                },
                                'aria-labelledby': R
                            })
                        }),
                        (0, a.jsx)('div', { className: j.spacer }),
                        (0, a.jsx)(c.xJW, {
                            title: L.intl.string(L.t.PVbHDg),
                            titleId: M,
                            children: (0, a.jsx)(c.oil, {
                                value: H,
                                onChange: function (e) {
                                    (0, m.zi)(U) && (e = (0, I.Nj)(e)), P(e);
                                },
                                maxLength: N.HN8,
                                placeholder: L.intl.string(L.t['bw/b8P']),
                                className: j.inputWrapper,
                                inputClassName: j.inputInner,
                                prefixElement: (0, a.jsx)(K, {
                                    className: j.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': M,
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
                            submitting: Z,
                            disabled: !$,
                            children: L.intl.string(L.t.R3BPHx)
                        }),
                        (0, a.jsxs)(c.zxk, {
                            look: c.zxk.Looks.LINK,
                            color: c.zxk.Colors.PRIMARY,
                            className: j.backButton,
                            innerClassName: j.backButtonInner,
                            onClick: S,
                            children: [(0, a.jsx)(v.Z, { direction: v.Z.Directions.LEFT }), L.intl.string(L.t['13/7kZ'])]
                        })
                    ]
                })
            ]
        })
    });
}
