n.d(t, { default: () => I }), n(539854), n(953529), n(388685), n(457542);
var l = n(951288),
    i = n(647438),
    r = n(990547),
    o = n(793030),
    a = n(442837),
    c = n(283693),
    s = n(755721),
    u = n(481060),
    d = n(911969),
    p = n(241865),
    _ = n(408987),
    h = n(312146),
    g = n(60222),
    f = n(131704),
    b = n(324067),
    m = n(430824),
    x = n(934415),
    v = n(700785),
    C = n(573261),
    E = n(981631),
    w = n(231338),
    y = n(388032),
    T = n(920454);
function I(e) {
    var t, n;
    let { guildId: I, transitionState: L, onSubmit: R, onClose: S } = e,
        [j, N] = i.useState(E.Sc2),
        [M, k] = i.useState(E.d4z.GUILD_TEXT),
        [D, Z] = i.useState(""),
        [A, B] = i.useState(!1),
        G = (0, a.e7)([m.Z], () => m.Z.getGuild(I), [I]),
        O = (0, g.m)(I),
        H = (0, h.Ui)(G),
        U = i.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        i = [
                            {
                                icon: u.VL1,
                                label: y.intl.string(y.t.pnuRXC),
                                value: E.d4z.GUILD_TEXT,
                                description: y.intl.string(y.t["Hf5Lb+"]),
                            },
                            {
                                icon: u.gj8,
                                label: y.intl.string(y.t.Sx55Oh),
                                value: E.d4z.GUILD_VOICE,
                                description: y.intl.string(y.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            i.push({
                                icon: u.ewx,
                                label: y.intl.string(y.t.pNWst0),
                                value: E.d4z.GUILD_STAGE_VOICE,
                                description: y.intl.string(y.t.VPAwgo),
                            }),
                        i.push({
                            icon: u.Mmi,
                            label: y.intl.string(y.t.eAVID5),
                            value: E.d4z.GUILD_FORUM,
                            description: y.intl.string(y.t.iZ5pgg),
                        }),
                        n &&
                            i.push({
                                icon: u.XBm,
                                label: y.intl.string(y.t["6x6fVg"]),
                                value: E.d4z.GUILD_MEDIA,
                                description: y.intl.string(y.t.JyCrwS),
                                isBeta: !0,
                            }),
                        i.map((e) => {
                            let { icon: t, label: n, value: i, description: r, isBeta: o } = e;
                            return {
                                name: (0, l.jsxs)("div", {
                                    className: T.channelOptionWrapper,
                                    children: [
                                        (0, l.jsx)(t, { className: T.icon }),
                                        (0, l.jsxs)("div", {
                                            children: [
                                                (0, l.jsxs)(u.Text, {
                                                    variant: "text-md/normal",
                                                    color: "header-primary",
                                                    children: [n, (0, l.jsx)(p.p, { isBeta: o })],
                                                }),
                                                (0, l.jsx)(u.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
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
        V = (0, a.e7)([b.Z], () => b.Z.getCategories(I)._categories, [I]),
        W = i.useMemo(
            () =>
                V.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name,
                    };
                }),
            [V],
        ),
        q = null != (n = null == (t = U.find((e) => e.value === M)) ? void 0 : t.channelIcon) ? n : w.Vq,
        z = "" !== D;
    return (0, l.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !z)) return;
            B(!0);
            let t = {
                type: M,
                name: D,
                parent_id: "null" !== j ? j : void 0,
                permission_overwrites: [
                    {
                        id: I,
                        type: d.BN.ROLE,
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
                        _.Z.checkGuildTemplateDirty(I), R(e.body.id), S();
                    },
                    (e) => {},
                )
                .finally(() => {
                    B(!1);
                });
        },
        children: (0, l.jsx)(o.Modal, {
            transitionState: L,
            title: y.intl.string(y.t["fUYU+j"]),
            onClose: S,
            actionBarInput: (0, l.jsx)(u.Avr, {
                text: y.intl.string(y.t["13/7kX"]),
                onClick: S,
            }),
            actions: [
                {
                    variant: "primary",
                    text: y.intl.string(y.t["R3BPH+"]),
                    loading: A,
                    disabled: !z,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(u.Kqy, {
                gap: 16,
                children: [
                    (0, l.jsx)(u.q4e, {
                        label: y.intl.string(y.t.vHCZwr),
                        placeholder: y.intl.string(y.t["g/Rr2S"]),
                        value: j,
                        options: W,
                        onChange: (e) => N(e),
                    }),
                    (0, l.jsx)(s.Gu, {
                        label: y.intl.string(y.t["7ZcXG2"]),
                        options: U,
                        value: M,
                        onChange: (e) => {
                            let { value: t } = e;
                            return k(t);
                        },
                    }),
                    (0, l.jsx)(u.oil, {
                        label: y.intl.string(y.t.PVbHDl),
                        value: D,
                        onChange: function (e) {
                            (0, f.zi)(M) && (e = (0, x.Nj)(e)), Z(e);
                        },
                        maxLength: E.HN8,
                        placeholder: y.intl.string(y.t["bw/b8E"]),
                        leading: q,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
