n.d(t, { default: () => L }), n(539854), n(953529), n(388685), n(457542);
var i = n(951288),
    r = n(647438),
    a = n(990547),
    l = n(442837),
    c = n(283693),
    o = n(82659),
    s = n(755721),
    d = n(481060),
    u = n(218613),
    p = n(911969),
    _ = n(313201),
    m = n(408987),
    f = n(312146),
    h = n(60222),
    b = n(131704),
    g = n(324067),
    x = n(430824),
    I = n(934415),
    v = n(700785),
    w = n(573261),
    y = n(981631),
    C = n(231338),
    E = n(388032),
    N = n(17478);
function L(e) {
    var t, n;
    let { guildId: L, transitionState: T, onSubmit: j, onClose: B } = e,
        D = (0, _.Dt)(),
        R = (0, _.Dt)(),
        M = (0, _.Dt)(),
        [S, k] = r.useState(y.Sc2),
        [Z, G] = r.useState(y.d4z.GUILD_TEXT),
        [W, A] = r.useState(""),
        [H, O] = r.useState(!1),
        U = (0, l.e7)([x.Z], () => x.Z.getGuild(L), [L]),
        P = (0, h.m)(L),
        V = (0, f.Ui)(U),
        F = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        r = [
                            {
                                icon: d.VL1,
                                label: E.intl.string(E.t.pnuRXF),
                                value: y.d4z.GUILD_TEXT,
                                description: E.intl.string(E.t.Hf5Lb2),
                            },
                            {
                                icon: d.gj8,
                                label: E.intl.string(E.t.Sx55Oj),
                                value: y.d4z.GUILD_VOICE,
                                description: E.intl.string(E.t.pqfkoK),
                            },
                        ];
                    return (
                        t &&
                            r.push({
                                icon: d.ewx,
                                label: E.intl.string(E.t.pNWst7),
                                value: y.d4z.GUILD_STAGE_VOICE,
                                description: E.intl.string(E.t.VPAwgo),
                            }),
                        r.push({
                            icon: d.Mmi,
                            label: E.intl.string(E.t.eAVIDw),
                            value: y.d4z.GUILD_FORUM,
                            description: E.intl.string(E.t.iZ5pgo),
                        }),
                        n &&
                            r.push({
                                icon: d.XBm,
                                label: E.intl.string(E.t["6x6fVl"]),
                                value: y.d4z.GUILD_MEDIA,
                                description: E.intl.string(E.t.JyCrwc),
                                isBeta: !0,
                            }),
                        r.map((e) => {
                            let { icon: t, label: n, value: r, description: a, isBeta: l } = e;
                            return {
                                name: (0, i.jsxs)("div", {
                                    className: N.channelOptionWrapper,
                                    children: [
                                        (0, i.jsx)(t, { className: N.icon }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsxs)(d.Text, {
                                                    variant: "text-md/normal",
                                                    color: "header-primary",
                                                    children: [n, (0, i.jsx)(u.p, { isBeta: l })],
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                value: r,
                                channelIcon: t,
                            };
                        })
                    );
                })({
                    canCreateStageChannel: P,
                    canCreateMediaChannel: V,
                }),
            [P, V],
        ),
        q = (0, l.e7)([g.Z], () => g.Z.getCategories(L)._categories, [L]),
        z = r.useMemo(
            () =>
                q.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name,
                    };
                }),
            [q],
        ),
        X = null != (n = null == (t = F.find((e) => e.value === Z)) ? void 0 : t.channelIcon) ? n : C.Vq,
        J = "" !== W;
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            O(!0);
            let t = {
                type: Z,
                name: W,
                parent_id: "null" !== S ? S : void 0,
                permission_overwrites: [
                    {
                        id: L,
                        type: p.BN.ROLE,
                        allow: v.Hn,
                        deny: y.Plq.VIEW_CHANNEL,
                    },
                ],
            };
            w.Z.post({
                url: y.ANM.GUILD_CHANNELS(L),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.CHANNEL_CREATE,
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
                        m.Z.checkGuildTemplateDirty(L), j(e.body.id), B();
                    },
                    (e) => {},
                )
                .finally(() => {
                    O(!1);
                });
        },
        children: (0, i.jsx)(o.Modal, {
            transitionState: T,
            title: E.intl.string(E.t["fUYU+v"]),
            onClose: B,
            actionBarInput: (0, i.jsx)(d.Avr, {
                text: E.intl.string(E.t["13/7kZ"]),
                onClick: B,
            }),
            actions: [
                {
                    variant: "primary",
                    text: E.intl.string(E.t.R3BPHx),
                    loading: H,
                    disabled: !J,
                    type: "submit",
                },
            ],
            children: (0, i.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsx)(d.xJW, {
                        title: E.intl.string(E.t.vHCZws),
                        titleId: D,
                        children: (0, i.jsx)(d.q4e, {
                            placeholder: E.intl.string(E.t["g/Rr2d"]),
                            value: S,
                            options: z,
                            onChange: (e) => k(e),
                            "aria-labelledby": D,
                        }),
                    }),
                    (0, i.jsx)(d.xJW, {
                        title: E.intl.string(E.t["7ZcXGx"]),
                        titleId: R,
                        children: (0, i.jsx)(s.Gu, {
                            options: F,
                            value: Z,
                            onChange: (e) => {
                                let { value: t } = e;
                                return G(t);
                            },
                            "aria-labelledby": R,
                        }),
                    }),
                    (0, i.jsx)(d.xJW, {
                        title: E.intl.string(E.t.PVbHDg),
                        titleId: M,
                        children: (0, i.jsx)(s.Is, {
                            value: W,
                            onChange: function (e) {
                                (0, b.zi)(Z) && (e = (0, I.Nj)(e)), A(e);
                            },
                            maxLength: y.HN8,
                            placeholder: E.intl.string(E.t["bw/b8P"]),
                            className: N.inputWrapper,
                            inputClassName: N.inputInner,
                            prefixElement: (0, i.jsx)(X, {
                                className: N.inputPrefix,
                                color: "currentColor",
                                "aria-hidden": !0,
                            }),
                            "aria-labelledby": M,
                            autoFocus: !0,
                        }),
                    }),
                ],
            }),
        }),
    });
}
