n.d(t, { default: () => y }), n(539854), n(953529), n(388685), n(457542);
var i = n(951288),
    a = n(647438),
    r = n(990547),
    l = n(442837),
    o = n(283693),
    c = n(82659),
    s = n(755721),
    d = n(481060),
    u = n(218613),
    p = n(911969),
    _ = n(408987),
    h = n(312146),
    m = n(60222),
    b = n(131704),
    g = n(324067),
    f = n(430824),
    x = n(934415),
    v = n(700785),
    w = n(573261),
    C = n(981631),
    E = n(231338),
    I = n(388032),
    L = n(17478);
function y(e) {
    var t, n;
    let { guildId: y, transitionState: T, onSubmit: N, onClose: B } = e,
        [R, M] = a.useState(C.Sc2),
        [j, D] = a.useState(C.d4z.GUILD_TEXT),
        [S, k] = a.useState(""),
        [Z, G] = a.useState(!1),
        A = (0, l.e7)([f.Z], () => f.Z.getGuild(y), [y]),
        H = (0, m.m)(y),
        O = (0, h.Ui)(A),
        U = a.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        a = [
                            {
                                icon: d.VL1,
                                label: I.intl.string(I.t.pnuRXF),
                                value: C.d4z.GUILD_TEXT,
                                description: I.intl.string(I.t.Hf5Lb2),
                            },
                            {
                                icon: d.gj8,
                                label: I.intl.string(I.t.Sx55Oj),
                                value: C.d4z.GUILD_VOICE,
                                description: I.intl.string(I.t.pqfkoK),
                            },
                        ];
                    return (
                        t &&
                            a.push({
                                icon: d.ewx,
                                label: I.intl.string(I.t.pNWst7),
                                value: C.d4z.GUILD_STAGE_VOICE,
                                description: I.intl.string(I.t.VPAwgo),
                            }),
                        a.push({
                            icon: d.Mmi,
                            label: I.intl.string(I.t.eAVIDw),
                            value: C.d4z.GUILD_FORUM,
                            description: I.intl.string(I.t.iZ5pgo),
                        }),
                        n &&
                            a.push({
                                icon: d.XBm,
                                label: I.intl.string(I.t["6x6fVl"]),
                                value: C.d4z.GUILD_MEDIA,
                                description: I.intl.string(I.t.JyCrwc),
                                isBeta: !0,
                            }),
                        a.map((e) => {
                            let { icon: t, label: n, value: a, description: r, isBeta: l } = e;
                            return {
                                name: (0, i.jsxs)("div", {
                                    className: L.channelOptionWrapper,
                                    children: [
                                        (0, i.jsx)(t, { className: L.icon }),
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
                                                    children: r,
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
                    canCreateStageChannel: H,
                    canCreateMediaChannel: O,
                }),
            [H, O],
        ),
        V = (0, l.e7)([g.Z], () => g.Z.getCategories(y)._categories, [y]),
        W = a.useMemo(
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
        F = null != (n = null == (t = U.find((e) => e.value === j)) ? void 0 : t.channelIcon) ? n : E.Vq,
        q = "" !== S;
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !q)) return;
            G(!0);
            let t = {
                type: j,
                name: S,
                parent_id: "null" !== R ? R : void 0,
                permission_overwrites: [
                    {
                        id: y,
                        type: p.BN.ROLE,
                        allow: v.Hn,
                        deny: C.Plq.VIEW_CHANNEL,
                    },
                ],
            };
            w.Z.post({
                url: C.ANM.GUILD_CHANNELS(y),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, o.iG)({
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
                        _.Z.checkGuildTemplateDirty(y), N(e.body.id), B();
                    },
                    (e) => {},
                )
                .finally(() => {
                    G(!1);
                });
        },
        children: (0, i.jsx)(c.Modal, {
            transitionState: T,
            title: I.intl.string(I.t["fUYU+v"]),
            onClose: B,
            actionBarInput: (0, i.jsx)(d.Avr, {
                text: I.intl.string(I.t["13/7kZ"]),
                onClick: B,
            }),
            actions: [
                {
                    variant: "primary",
                    text: I.intl.string(I.t.R3BPHx),
                    loading: Z,
                    disabled: !q,
                    type: "submit",
                },
            ],
            children: (0, i.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsx)(d.q4e, {
                        label: I.intl.string(I.t.vHCZws),
                        placeholder: I.intl.string(I.t["g/Rr2d"]),
                        value: R,
                        options: W,
                        onChange: (e) => M(e),
                    }),
                    (0, i.jsx)(s.Gu, {
                        label: I.intl.string(I.t["7ZcXGx"]),
                        options: U,
                        value: j,
                        onChange: (e) => {
                            let { value: t } = e;
                            return D(t);
                        },
                    }),
                    (0, i.jsx)(d.oil, {
                        label: I.intl.string(I.t.PVbHDg),
                        value: S,
                        onChange: function (e) {
                            (0, b.zi)(j) && (e = (0, x.Nj)(e)), k(e);
                        },
                        maxLength: C.HN8,
                        placeholder: I.intl.string(I.t["bw/b8P"]),
                        leading: F,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
