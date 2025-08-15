n.d(t, { default: () => S }), n(539854), n(953529), n(388685), n(457542);
var r = n(255367),
    a = n(73800),
    i = n(990547),
    o = n(442837),
    l = n(283693),
    c = n(82659),
    s = n(755721),
    d = n(481060),
    _ = n(218613),
    u = n(911969),
    p = n(313201),
    b = n(408987),
    h = n(312146),
    m = n(60222),
    x = n(131704),
    f = n(324067),
    g = n(430824),
    I = n(934415),
    v = n(700785),
    L = n(573261),
    w = n(981631),
    C = n(231338),
    N = n(388032),
    y = n(920454);
function S(e) {
    var t, n;
    let { guildId: S, transitionState: j, onSubmit: B, onClose: D } = e,
        E = (0, p.Dt)(),
        T = (0, p.Dt)(),
        R = (0, p.Dt)(),
        [M, W] = a.useState(w.Sc2),
        [G, k] = a.useState(w.d4z.GUILD_TEXT),
        [A, H] = a.useState(""),
        [U, O] = a.useState(!1),
        P = (0, o.e7)([g.Z], () => g.Z.getGuild(S), [S]),
        Z = (0, m.m)(S),
        V = (0, h.Ui)(P),
        z = a.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        a = [
                            {
                                icon: d.VL1,
                                label: N.intl.string(N.t.pnuRXF),
                                value: w.d4z.GUILD_TEXT,
                                description: N.intl.string(N.t.Hf5Lb2),
                            },
                            {
                                icon: d.gj8,
                                label: N.intl.string(N.t.Sx55Oj),
                                value: w.d4z.GUILD_VOICE,
                                description: N.intl.string(N.t.pqfkoK),
                            },
                        ];
                    return (
                        t &&
                            a.push({
                                icon: d.ewx,
                                label: N.intl.string(N.t.pNWst7),
                                value: w.d4z.GUILD_STAGE_VOICE,
                                description: N.intl.string(N.t.VPAwgo),
                            }),
                        a.push({
                            icon: d.Mmi,
                            label: N.intl.string(N.t.eAVIDw),
                            value: w.d4z.GUILD_FORUM,
                            description: N.intl.string(N.t.iZ5pgo),
                        }),
                        n &&
                            a.push({
                                icon: d.XBm,
                                label: N.intl.string(N.t["6x6fVl"]),
                                value: w.d4z.GUILD_MEDIA,
                                description: N.intl.string(N.t.JyCrwc),
                                isBeta: !0,
                            }),
                        a.map((e) => {
                            let { icon: t, label: n, value: a, description: i, isBeta: o } = e;
                            return {
                                name: (0, r.jsxs)("div", {
                                    className: y.channelOptionWrapper,
                                    children: [
                                        (0, r.jsx)(t, { className: y.icon }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(d.Text, {
                                                    variant: "text-md/normal",
                                                    color: "header-primary",
                                                    children: [n, (0, r.jsx)(_.p, { isBeta: o })],
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                value: a,
                                channelIcon: t,
                            };
                        })
                    );
                })({
                    canCreateStageChannel: Z,
                    canCreateMediaChannel: V,
                }),
            [Z, V],
        ),
        F = (0, o.e7)([f.Z], () => f.Z.getCategories(S)._categories, [S]),
        X = a.useMemo(
            () =>
                F.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name,
                    };
                }),
            [F],
        ),
        q = null != (n = null == (t = z.find((e) => e.value === G)) ? void 0 : t.channelIcon) ? n : C.Vq,
        J = "" !== A;
    return (0, r.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            O(!0);
            let t = {
                type: G,
                name: A,
                parent_id: "null" !== M ? M : void 0,
                permission_overwrites: [
                    {
                        id: S,
                        type: u.BN.ROLE,
                        allow: v.Hn,
                        deny: w.Plq.VIEW_CHANNEL,
                    },
                ],
            };
            L.Z.post({
                url: w.ANM.GUILD_CHANNELS(S),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, l.iG)({
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
                        b.Z.checkGuildTemplateDirty(S), B(e.body.id), D();
                    },
                    (e) => {},
                )
                .finally(() => {
                    O(!1);
                });
        },
        children: (0, r.jsx)(c.Modal, {
            transitionState: j,
            title: N.intl.string(N.t["fUYU+v"]),
            onClose: D,
            actionBarInput: (0, r.jsx)(d.Avr, {
                text: N.intl.string(N.t["13/7kZ"]),
                onClick: D,
            }),
            actions: [
                {
                    variant: "primary",
                    text: N.intl.string(N.t.R3BPHx),
                    loading: U,
                    disabled: !J,
                    type: "submit",
                },
            ],
            children: (0, r.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(d.xJW, {
                        title: N.intl.string(N.t.vHCZws),
                        titleId: E,
                        children: (0, r.jsx)(d.q4e, {
                            placeholder: N.intl.string(N.t["g/Rr2d"]),
                            value: M,
                            options: X,
                            onChange: (e) => W(e),
                            "aria-labelledby": E,
                        }),
                    }),
                    (0, r.jsx)(d.xJW, {
                        title: N.intl.string(N.t["7ZcXGx"]),
                        titleId: T,
                        children: (0, r.jsx)(d.FXm, {
                            options: z,
                            value: G,
                            onChange: (e) => {
                                let { value: t } = e;
                                return k(t);
                            },
                            "aria-labelledby": T,
                        }),
                    }),
                    (0, r.jsx)(d.xJW, {
                        title: N.intl.string(N.t.PVbHDg),
                        titleId: R,
                        children: (0, r.jsx)(s.Is, {
                            value: A,
                            onChange: function (e) {
                                (0, x.zi)(G) && (e = (0, I.Nj)(e)), H(e);
                            },
                            maxLength: w.HN8,
                            placeholder: N.intl.string(N.t["bw/b8P"]),
                            className: y.inputWrapper,
                            inputClassName: y.inputInner,
                            prefixElement: (0, r.jsx)(q, {
                                className: y.inputPrefix,
                                color: "currentColor",
                                "aria-hidden": !0,
                            }),
                            "aria-labelledby": R,
                            autoFocus: !0,
                        }),
                    }),
                ],
            }),
        }),
    });
}
