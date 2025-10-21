n.d(t, { default: () => y }), n(539854), n(953529), n(388685), n(457542);
var i = n(951288),
    r = n(647438),
    l = n(990547),
    o = n(793030),
    a = n(442837),
    s = n(283693),
    c = n(755721),
    d = n(481060),
    u = n(911969),
    _ = n(241865),
    p = n(408987),
    m = n(312146),
    b = n(60222),
    h = n(131704),
    g = n(324067),
    f = n(430824),
    x = n(934415),
    v = n(700785),
    w = n(573261),
    C = n(981631),
    E = n(231338),
    L = n(388032),
    I = n(17478);
function y(e) {
    var t, n;
    let { guildId: y, transitionState: T, onSubmit: N, onClose: B } = e,
        [R, M] = r.useState(C.Sc2),
        [j, D] = r.useState(C.d4z.GUILD_TEXT),
        [S, k] = r.useState(""),
        [Z, G] = r.useState(!1),
        A = (0, a.e7)([f.Z], () => f.Z.getGuild(y), [y]),
        H = (0, b.m)(y),
        O = (0, m.Ui)(A),
        U = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        r = [
                            {
                                icon: d.VL1,
                                label: L.intl.string(L.t.pnuRXF),
                                value: C.d4z.GUILD_TEXT,
                                description: L.intl.string(L.t.Hf5Lb2),
                            },
                            {
                                icon: d.gj8,
                                label: L.intl.string(L.t.Sx55Oj),
                                value: C.d4z.GUILD_VOICE,
                                description: L.intl.string(L.t.pqfkoK),
                            },
                        ];
                    return (
                        t &&
                            r.push({
                                icon: d.ewx,
                                label: L.intl.string(L.t.pNWst7),
                                value: C.d4z.GUILD_STAGE_VOICE,
                                description: L.intl.string(L.t.VPAwgo),
                            }),
                        r.push({
                            icon: d.Mmi,
                            label: L.intl.string(L.t.eAVIDw),
                            value: C.d4z.GUILD_FORUM,
                            description: L.intl.string(L.t.iZ5pgo),
                        }),
                        n &&
                            r.push({
                                icon: d.XBm,
                                label: L.intl.string(L.t["6x6fVl"]),
                                value: C.d4z.GUILD_MEDIA,
                                description: L.intl.string(L.t.JyCrwc),
                                isBeta: !0,
                            }),
                        r.map((e) => {
                            let { icon: t, label: n, value: r, description: l, isBeta: o } = e;
                            return {
                                name: (0, i.jsxs)("div", {
                                    className: I.channelOptionWrapper,
                                    children: [
                                        (0, i.jsx)(t, { className: I.icon }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsxs)(d.Text, {
                                                    variant: "text-md/normal",
                                                    color: "header-primary",
                                                    children: [n, (0, i.jsx)(_.p, { isBeta: o })],
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: l,
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
                    canCreateStageChannel: H,
                    canCreateMediaChannel: O,
                }),
            [H, O],
        ),
        V = (0, a.e7)([g.Z], () => g.Z.getCategories(y)._categories, [y]),
        W = r.useMemo(
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
                        type: u.BN.ROLE,
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
                    event: l.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, s.iG)({
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
                        p.Z.checkGuildTemplateDirty(y), N(e.body.id), B();
                    },
                    (e) => {},
                )
                .finally(() => {
                    G(!1);
                });
        },
        children: (0, i.jsx)(o.Modal, {
            transitionState: T,
            title: L.intl.string(L.t["fUYU+v"]),
            onClose: B,
            actionBarInput: (0, i.jsx)(d.Avr, {
                text: L.intl.string(L.t["13/7kZ"]),
                onClick: B,
            }),
            actions: [
                {
                    variant: "primary",
                    text: L.intl.string(L.t.R3BPHx),
                    loading: Z,
                    disabled: !q,
                    type: "submit",
                },
            ],
            children: (0, i.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsx)(d.q4e, {
                        label: L.intl.string(L.t.vHCZws),
                        placeholder: L.intl.string(L.t["g/Rr2d"]),
                        value: R,
                        options: W,
                        onChange: (e) => M(e),
                    }),
                    (0, i.jsx)(c.Gu, {
                        label: L.intl.string(L.t["7ZcXGx"]),
                        options: U,
                        value: j,
                        onChange: (e) => {
                            let { value: t } = e;
                            return D(t);
                        },
                    }),
                    (0, i.jsx)(d.oil, {
                        label: L.intl.string(L.t.PVbHDg),
                        value: S,
                        onChange: function (e) {
                            (0, h.zi)(j) && (e = (0, x.Nj)(e)), k(e);
                        },
                        maxLength: C.HN8,
                        placeholder: L.intl.string(L.t["bw/b8P"]),
                        leading: F,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
