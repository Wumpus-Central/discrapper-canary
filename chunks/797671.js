n.d(t, { default: () => L }), n(539854), n(953529), n(388685), n(457542);
var l = n(54381),
    i = n(473749),
    r = n(990547),
    o = n(793030),
    a = n(442837),
    c = n(283693),
    s = n(199849),
    u = n(755721),
    d = n(481060),
    p = n(911969),
    _ = n(241865),
    h = n(408987),
    g = n(312146),
    f = n(60222),
    b = n(131704),
    x = n(324067),
    m = n(430824),
    v = n(934415),
    C = n(700785),
    E = n(573261),
    w = n(981631),
    y = n(231338),
    T = n(388032),
    I = n(920454);
function L(e) {
    var t, n;
    let { guildId: L, transitionState: R, onSubmit: S, onClose: j } = e,
        [N, M] = i.useState(w.Sc2),
        [k, D] = i.useState(w.d4z.GUILD_TEXT),
        [Z, A] = i.useState(""),
        [B, G] = i.useState(!1),
        O = (0, a.e7)([m.Z], () => m.Z.getGuild(L), [L]),
        H = (0, f.m)(L),
        U = (0, g.Ui)(O),
        V = i.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        i = [
                            {
                                icon: d.VL1,
                                label: T.intl.string(T.t.pnuRXC),
                                value: w.d4z.GUILD_TEXT,
                                description: T.intl.string(T.t["Hf5Lb+"]),
                            },
                            {
                                icon: d.gj8,
                                label: T.intl.string(T.t.Sx55Oh),
                                value: w.d4z.GUILD_VOICE,
                                description: T.intl.string(T.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            i.push({
                                icon: d.ewx,
                                label: T.intl.string(T.t.pNWst0),
                                value: w.d4z.GUILD_STAGE_VOICE,
                                description: T.intl.string(T.t.VPAwgo),
                            }),
                        i.push({
                            icon: d.Mmi,
                            label: T.intl.string(T.t.eAVID5),
                            value: w.d4z.GUILD_FORUM,
                            description: T.intl.string(T.t.iZ5pgg),
                        }),
                        n &&
                            i.push({
                                icon: d.XBm,
                                label: T.intl.string(T.t["6x6fVg"]),
                                value: w.d4z.GUILD_MEDIA,
                                description: T.intl.string(T.t.JyCrwS),
                                isBeta: !0,
                            }),
                        i.map((e) => {
                            let { icon: t, label: n, value: i, description: r, isBeta: o } = e;
                            return {
                                name: (0, l.jsxs)("div", {
                                    className: I.channelOptionWrapper,
                                    children: [
                                        (0, l.jsx)(t, { className: I.icon }),
                                        (0, l.jsxs)("div", {
                                            children: [
                                                (0, l.jsxs)(d.Text, {
                                                    variant: "text-md/normal",
                                                    color: "header-primary",
                                                    children: [n, (0, l.jsx)(_.p, { isBeta: o })],
                                                }),
                                                (0, l.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                value: i,
                                channelIcon: t,
                            };
                        })
                    );
                })({
                    canCreateStageChannel: H,
                    canCreateMediaChannel: U,
                }),
            [H, U],
        ),
        W = (0, a.e7)([x.Z], () => x.Z.getCategories(L)._categories, [L]),
        z = i.useMemo(
            () =>
                W.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name,
                    };
                }),
            [W],
        ),
        q = null != (n = null == (t = V.find((e) => e.value === k)) ? void 0 : t.channelIcon) ? n : y.Vq,
        F = "" !== Z;
    return (0, l.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !F)) return;
            G(!0);
            let t = {
                type: k,
                name: Z,
                parent_id: "null" !== N ? N : void 0,
                permission_overwrites: [
                    {
                        id: L,
                        type: p.BN.ROLE,
                        allow: C.Hn,
                        deny: w.Plq.VIEW_CHANNEL,
                    },
                ],
            };
            E.Z.post({
                url: w.ANM.GUILD_CHANNELS(L),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, c.iG)({
                            is_private: !0,
                            channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                            channel_type: null == e || null == (n = e.body) ? void 0 : n.type,
                        });
                    },
                },
                rejectWithError: !0,
            })
                .then(
                    (e) => {
                        h.Z.checkGuildTemplateDirty(L), S(e.body.id), j();
                    },
                    (e) => {},
                )
                .finally(() => {
                    G(!1);
                });
        },
        children: (0, l.jsx)(o.Modal, {
            transitionState: R,
            title: T.intl.string(T.t["fUYU+j"]),
            onClose: j,
            actionBarInput: (0, l.jsx)(d.Avr, {
                text: T.intl.string(T.t["13/7kX"]),
                onClick: j,
            }),
            actions: [
                {
                    variant: "primary",
                    text: T.intl.string(T.t["R3BPH+"]),
                    loading: B,
                    disabled: !F,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, l.jsx)(s.y6, {
                        label: T.intl.string(T.t.vHCZwr),
                        placeholder: T.intl.string(T.t["g/Rr2S"]),
                        value: N,
                        options: z,
                        onChange: (e) => M(e),
                    }),
                    (0, l.jsx)(u.Gu, {
                        label: T.intl.string(T.t["7ZcXG2"]),
                        options: V,
                        value: k,
                        onChange: (e) => {
                            let { value: t } = e;
                            return D(t);
                        },
                    }),
                    (0, l.jsx)(d.oil, {
                        label: T.intl.string(T.t.PVbHDl),
                        value: Z,
                        onChange: function (e) {
                            (0, b.zi)(k) && (e = (0, v.Nj)(e)), A(e);
                        },
                        maxLength: w.HN8,
                        placeholder: T.intl.string(T.t["bw/b8E"]),
                        leading: q,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
