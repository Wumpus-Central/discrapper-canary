n.d(t, { default: () => I }), n(539854), n(953529), n(388685), n(457542);
var l = n(54381),
    i = n(473749),
    r = n(990547),
    a = n(793030),
    o = n(442837),
    c = n(283693),
    s = n(755721),
    d = n(481060),
    u = n(911969),
    p = n(241865),
    f = n(408987),
    b = n(312146),
    h = n(60222),
    g = n(131704),
    x = n(324067),
    _ = n(430824),
    m = n(934415),
    v = n(700785),
    C = n(573261),
    E = n(981631),
    w = n(231338),
    y = n(388032),
    T = n(549922);
function I(e) {
    var t, n;
    let { guildId: I, transitionState: L, onSubmit: R, onClose: S } = e,
        [j, M] = i.useState(E.Sc2),
        [N, k] = i.useState(E.d4z.GUILD_TEXT),
        [D, Z] = i.useState(""),
        [A, B] = i.useState(!1),
        G = (0, o.e7)([_.Z], () => _.Z.getGuild(I), [I]),
        O = (0, h.m)(I),
        H = (0, b.Ui)(G),
        U = i.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        i = [
                            {
                                icon: d.VL1,
                                label: y.intl.string(y.t.pnuRXC),
                                value: E.d4z.GUILD_TEXT,
                                description: y.intl.string(y.t["Hf5Lb+"]),
                            },
                            {
                                icon: d.gj8,
                                label: y.intl.string(y.t.Sx55Oh),
                                value: E.d4z.GUILD_VOICE,
                                description: y.intl.string(y.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            i.push({
                                icon: d.ewx,
                                label: y.intl.string(y.t.pNWst0),
                                value: E.d4z.GUILD_STAGE_VOICE,
                                description: y.intl.string(y.t.VPAwgo),
                            }),
                        i.push({
                            icon: d.Mmi,
                            label: y.intl.string(y.t.eAVID5),
                            value: E.d4z.GUILD_FORUM,
                            description: y.intl.string(y.t.iZ5pgg),
                        }),
                        n &&
                            i.push({
                                icon: d.XBm,
                                label: y.intl.string(y.t["6x6fVg"]),
                                value: E.d4z.GUILD_MEDIA,
                                description: y.intl.string(y.t.JyCrwS),
                                isBeta: !0,
                            }),
                        i.map((e) => {
                            let { icon: t, label: n, value: i, description: r, isBeta: a } = e;
                            return {
                                name: (0, l.jsxs)("div", {
                                    className: T.channelOptionWrapper,
                                    children: [
                                        (0, l.jsx)(t, { className: T.icon }),
                                        (0, l.jsxs)("div", {
                                            children: [
                                                (0, l.jsxs)(d.Text, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: [n, (0, l.jsx)(p.p, { isBeta: a })],
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
                    canCreateStageChannel: O,
                    canCreateMediaChannel: H,
                }),
            [O, H],
        ),
        V = (0, o.e7)([x.Z], () => x.Z.getCategories(I)._categories, [I]),
        W = i.useMemo(
            () =>
                V.map((e) => {
                    let { channel: t } = e;
                    return {
                        id: t.id,
                        value: t.id,
                        label: t.name,
                    };
                }),
            [V],
        ),
        z = null != (n = null == (t = U.find((e) => e.value === N)) ? void 0 : t.channelIcon) ? n : w.Vq,
        F = "" !== D;
    return (0, l.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !F)) return;
            B(!0);
            let t = {
                type: N,
                name: D,
                parent_id: "null" !== j ? j : void 0,
                permission_overwrites: [
                    {
                        id: I,
                        type: u.BN.ROLE,
                        allow: v.Hn,
                        deny: E.Plq.VIEW_CHANNEL,
                    },
                ],
            };
            C.Z.post({
                url: E.ANM.GUILD_CHANNELS(I),
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
                        f.Z.checkGuildTemplateDirty(I), R(e.body.id), S();
                    },
                    (e) => {},
                )
                .finally(() => {
                    B(!1);
                });
        },
        children: (0, l.jsx)(a.Modal, {
            transitionState: L,
            title: y.intl.string(y.t["fUYU+j"]),
            onClose: S,
            actionBarInput: (0, l.jsx)(d.Avr, {
                text: y.intl.string(y.t["13/7kX"]),
                onClick: S,
            }),
            actions: [
                {
                    variant: "primary",
                    text: y.intl.string(y.t["R3BPH+"]),
                    loading: A,
                    disabled: !F,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, l.jsx)(d.PhF, {
                        label: y.intl.string(y.t.vHCZwr),
                        placeholder: y.intl.string(y.t["g/Rr2S"]),
                        value: j,
                        options: W,
                        onSelectionChange: M,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, l.jsx)(s.Gu, {
                        label: y.intl.string(y.t["7ZcXG2"]),
                        options: U,
                        value: N,
                        onChange: (e) => {
                            let { value: t } = e;
                            return k(t);
                        },
                    }),
                    (0, l.jsx)(d.oil, {
                        label: y.intl.string(y.t.PVbHDl),
                        value: D,
                        onChange: function (e) {
                            (0, g.zi)(N) && (e = (0, m.Nj)(e)), Z(e);
                        },
                        maxLength: E.HN8,
                        placeholder: y.intl.string(y.t["bw/b8E"]),
                        leading: z,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
