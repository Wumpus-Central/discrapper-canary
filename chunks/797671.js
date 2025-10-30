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
    C = n(573261),
    E = n(981631),
    L = n(231338),
    w = n(388032),
    I = n(17478);
function y(e) {
    var t, n;
    let { guildId: y, transitionState: T, onSubmit: N, onClose: B } = e,
        [R, M] = r.useState(E.Sc2),
        [S, j] = r.useState(E.d4z.GUILD_TEXT),
        [D, k] = r.useState(""),
        [G, Z] = r.useState(!1),
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
                                label: w.intl.string(w.t.pnuRXC),
                                value: E.d4z.GUILD_TEXT,
                                description: w.intl.string(w.t["Hf5Lb+"]),
                            },
                            {
                                icon: d.gj8,
                                label: w.intl.string(w.t.Sx55Oh),
                                value: E.d4z.GUILD_VOICE,
                                description: w.intl.string(w.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            r.push({
                                icon: d.ewx,
                                label: w.intl.string(w.t.pNWst0),
                                value: E.d4z.GUILD_STAGE_VOICE,
                                description: w.intl.string(w.t.VPAwgo),
                            }),
                        r.push({
                            icon: d.Mmi,
                            label: w.intl.string(w.t.eAVID5),
                            value: E.d4z.GUILD_FORUM,
                            description: w.intl.string(w.t.iZ5pgg),
                        }),
                        n &&
                            r.push({
                                icon: d.XBm,
                                label: w.intl.string(w.t["6x6fVg"]),
                                value: E.d4z.GUILD_MEDIA,
                                description: w.intl.string(w.t.JyCrwS),
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
        F = null != (n = null == (t = U.find((e) => e.value === S)) ? void 0 : t.channelIcon) ? n : L.Vq,
        q = "" !== D;
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !q)) return;
            Z(!0);
            let t = {
                type: S,
                name: D,
                parent_id: "null" !== R ? R : void 0,
                permission_overwrites: [
                    {
                        id: y,
                        type: u.BN.ROLE,
                        allow: v.Hn,
                        deny: E.Plq.VIEW_CHANNEL,
                    },
                ],
            };
            C.Z.post({
                url: E.ANM.GUILD_CHANNELS(y),
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
                    Z(!1);
                });
        },
        children: (0, i.jsx)(o.Modal, {
            transitionState: T,
            title: w.intl.string(w.t["fUYU+j"]),
            onClose: B,
            actionBarInput: (0, i.jsx)(d.Avr, {
                text: w.intl.string(w.t["13/7kX"]),
                onClick: B,
            }),
            actions: [
                {
                    variant: "primary",
                    text: w.intl.string(w.t["R3BPH+"]),
                    loading: G,
                    disabled: !q,
                    type: "submit",
                },
            ],
            children: (0, i.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsx)(d.q4e, {
                        label: w.intl.string(w.t.vHCZwr),
                        placeholder: w.intl.string(w.t["g/Rr2S"]),
                        value: R,
                        options: W,
                        onChange: (e) => M(e),
                    }),
                    (0, i.jsx)(c.Gu, {
                        label: w.intl.string(w.t["7ZcXG2"]),
                        options: U,
                        value: S,
                        onChange: (e) => {
                            let { value: t } = e;
                            return j(t);
                        },
                    }),
                    (0, i.jsx)(d.oil, {
                        label: w.intl.string(w.t.PVbHDl),
                        value: D,
                        onChange: function (e) {
                            (0, h.zi)(S) && (e = (0, x.Nj)(e)), k(e);
                        },
                        maxLength: E.HN8,
                        placeholder: w.intl.string(w.t["bw/b8E"]),
                        leading: F,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
