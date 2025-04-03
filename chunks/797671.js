a.d(t, { default: () => j }), a(653041), a(266796), a(47120), a(773603);
var n = a(200651),
    r = a(192379),
    i = a(990547),
    o = a(442837),
    l = a(283693),
    c = a(481060),
    d = a(218613),
    s = a(911969),
    u = a(600164),
    _ = a(313201),
    p = a(456269),
    b = a(408987),
    f = a(312146),
    h = a(60222),
    m = a(131704),
    x = a(324067),
    N = a(430824),
    g = a(259580),
    I = a(934415),
    v = a(700785),
    B = a(573261),
    C = a(981631),
    W = a(231338),
    E = a(388032),
    L = a(720848);
function j(e) {
    var t, a;
    let { guildId: j, transitionState: k, onSubmit: w, onClose: y } = e,
        S = (0, _.Dt)(),
        D = (0, _.Dt)(),
        T = (0, _.Dt)(),
        R = (0, _.Dt)(),
        [M, G] = r.useState(C.Sc2),
        [U, z] = r.useState(C.d4z.GUILD_TEXT),
        [H, P] = r.useState(''),
        [Z, A] = r.useState(!1),
        F = (0, o.e7)([N.Z], () => N.Z.getGuild(j), [j]),
        O = (0, h.m)(j),
        V = (0, p.W3)(j),
        X = (0, f.Ui)(F),
        q = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: a, canCreateMediaChannel: r } = e,
                        i = [
                            {
                                icon: c.VL1,
                                label: E.NW.string(E.t.pnuRXF),
                                value: C.d4z.GUILD_TEXT,
                                description: E.NW.string(E.t.Hf5Lb2)
                            },
                            {
                                icon: c.gj8,
                                label: E.NW.string(E.t.Sx55Oj),
                                value: C.d4z.GUILD_VOICE,
                                description: E.NW.string(E.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            i.push({
                                icon: c.ewx,
                                label: E.NW.string(E.t.pNWst7),
                                value: C.d4z.GUILD_STAGE_VOICE,
                                description: E.NW.string(E.t.VPAwgo)
                            }),
                        a &&
                            (i.push({
                                icon: c.Mmi,
                                label: E.NW.string(E.t.eAVIDw),
                                value: C.d4z.GUILD_FORUM,
                                description: E.NW.string(E.t.iZ5pgo)
                            }),
                            r &&
                                i.push({
                                    icon: c.XBm,
                                    label: E.NW.string(E.t['6x6fVl']),
                                    value: C.d4z.GUILD_MEDIA,
                                    description: E.NW.string(E.t.JyCrwc),
                                    isBeta: !0
                                })),
                        i.map((e) => {
                            let { icon: t, label: a, value: r, description: i, isBeta: o } = e;
                            return {
                                name: (0, n.jsxs)('div', {
                                    className: L.channelOptionWrapper,
                                    children: [
                                        (0, n.jsx)(t, { className: L.icon }),
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsxs)(c.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [a, (0, n.jsx)(d.p, { isBeta: o })]
                                                }),
                                                (0, n.jsx)(c.Text, {
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
                    canCreateStageChannel: O,
                    canCreateForumChannel: V,
                    canCreateMediaChannel: X
                }),
            [O, V, X]
        ),
        J = (0, o.e7)([x.Z], () => x.Z.getCategories(j)._categories, [j]),
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
        K = null != (a = null == (t = q.find((e) => e.value === U)) ? void 0 : t.channelIcon) ? a : W.Vq,
        $ = '' !== H;
    return (0, n.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            A(!0);
            let t = {
                type: U,
                name: H,
                parent_id: 'null' !== M ? M : void 0,
                permission_overwrites: [
                    {
                        id: j,
                        type: s.BN.ROLE,
                        allow: v.Hn,
                        deny: C.Plq.VIEW_CHANNEL
                    }
                ]
            };
            B.Z.post({
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
                        b.Z.checkGuildTemplateDirty(j), w(e.body.id), y();
                    },
                    (e) => {}
                )
                .finally(() => {
                    A(!1);
                });
        },
        children: (0, n.jsxs)(c.Y0X, {
            transitionState: k,
            'aria-labelledby': S,
            children: [
                (0, n.jsxs)(c.xBx, {
                    children: [
                        (0, n.jsx)(c.X6q, {
                            id: S,
                            variant: 'heading-md/semibold',
                            children: E.NW.string(E.t['fUYU+v'])
                        }),
                        (0, n.jsx)(c.olH, {
                            className: L.closeButton,
                            onClick: y
                        })
                    ]
                }),
                (0, n.jsxs)(c.hzk, {
                    className: L.modalContent,
                    children: [
                        (0, n.jsx)(c.xJW, {
                            title: E.NW.string(E.t.vHCZws),
                            titleId: D,
                            children: (0, n.jsx)(c.q4e, {
                                placeholder: E.NW.string(E.t['g/Rr2d']),
                                value: M,
                                options: Y,
                                onChange: (e) => G(e),
                                'aria-labelledby': D
                            })
                        }),
                        (0, n.jsx)('div', { className: L.spacer }),
                        (0, n.jsx)(c.xJW, {
                            title: E.NW.string(E.t['7ZcXGx']),
                            titleId: T,
                            children: (0, n.jsx)(c.FXm, {
                                options: q,
                                value: U,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return z(t);
                                },
                                'aria-labelledby': T
                            })
                        }),
                        (0, n.jsx)('div', { className: L.spacer }),
                        (0, n.jsx)(c.xJW, {
                            title: E.NW.string(E.t.PVbHDg),
                            titleId: R,
                            children: (0, n.jsx)(c.oil, {
                                value: H,
                                onChange: function (e) {
                                    (0, m.zi)(U) && (e = (0, I.Nj)(e)), P(e);
                                },
                                maxLength: C.HN8,
                                placeholder: E.NW.string(E.t['bw/b8P']),
                                className: L.inputWrapper,
                                inputClassName: L.inputInner,
                                prefixElement: (0, n.jsx)(K, {
                                    className: L.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': R,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(c.mzw, {
                    justify: u.Z.Justify.BETWEEN,
                    children: [
                        (0, n.jsx)(c.zxk, {
                            type: 'submit',
                            submitting: Z,
                            disabled: !$,
                            children: E.NW.string(E.t.R3BPHx)
                        }),
                        (0, n.jsxs)(c.zxk, {
                            look: c.zxk.Looks.LINK,
                            color: c.zxk.Colors.PRIMARY,
                            className: L.backButton,
                            innerClassName: L.backButtonInner,
                            onClick: y,
                            children: [(0, n.jsx)(g.Z, { direction: g.Z.Directions.LEFT }), E.NW.string(E.t['13/7kZ'])]
                        })
                    ]
                })
            ]
        })
    });
}
