n.d(t, { default: () => R }), n(321073), n(228524), n(896048), n(492834);
var l = n(627968),
    i = n(64700),
    r = n(110259),
    a = n(158954),
    s = n(311907),
    o = n(933681),
    c = n(421380),
    d = n(397927),
    u = n(155718),
    p = n(409200),
    b = n(568185),
    f = n(219444),
    g = n(284738),
    h = n(95701),
    _ = n(769765),
    x = n(71393),
    v = n(147036),
    A = n(488926),
    m = n(499785),
    E = n(652215),
    y = n(818348),
    T = n(985018),
    I = n(205285);
function R(e) {
    var t, n;
    let { guildId: R, transitionState: C, onSubmit: S, onClose: G } = e,
        [L, M] = i.useState(E._Ee),
        [k, w] = i.useState(E.rbe.GUILD_TEXT),
        [j, D] = i.useState(""),
        [N, O] = i.useState(!1),
        U = (0, s.bG)([x.A], () => x.A.getGuild(R), [R]),
        H = (0, g.R)(R),
        V = (0, f.Vf)(U),
        B = i.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        i = [
                            {
                                icon: d.N$i,
                                label: T.intl.string(T.t.pnuRXC),
                                value: E.rbe.GUILD_TEXT,
                                description: T.intl.string(T.t["Hf5Lb+"]),
                            },
                            {
                                icon: d.HKD,
                                label: T.intl.string(T.t.Sx55Oh),
                                value: E.rbe.GUILD_VOICE,
                                description: T.intl.string(T.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            i.push({
                                icon: d.qux,
                                label: T.intl.string(T.t.pNWst0),
                                value: E.rbe.GUILD_STAGE_VOICE,
                                description: T.intl.string(T.t.VPAwgo),
                            }),
                        i.push({
                            icon: d.bSJ,
                            label: T.intl.string(T.t.eAVID5),
                            value: E.rbe.GUILD_FORUM,
                            description: T.intl.string(T.t.iZ5pgg),
                        }),
                        n &&
                            i.push({
                                icon: d.xfq,
                                label: T.intl.string(T.t["6x6fVg"]),
                                value: E.rbe.GUILD_MEDIA,
                                description: T.intl.string(T.t.JyCrwS),
                                isBeta: !0,
                            }),
                        i.map((e) => {
                            let { icon: t, label: n, value: i, description: r, isBeta: a } = e;
                            return {
                                name: (0, l.jsxs)("div", {
                                    className: I.OA,
                                    children: [
                                        (0, l.jsx)(t, { className: I.Kk }),
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
                    canCreateStageChannel: H,
                    canCreateMediaChannel: V,
                }),
            [H, V],
        ),
        K = (0, s.bG)([_.A], () => _.A.getCategories(R)._categories, [R]),
        W = i.useMemo(
            () =>
                K.map((e) => {
                    let { channel: t } = e;
                    return {
                        id: t.id,
                        value: t.id,
                        label: t.name,
                    };
                }),
            [K],
        ),
        q = null != (t = null == (n = B.find((e) => e.value === k)) ? void 0 : n.channelIcon) ? t : y.FX,
        X = "" !== j;
    return (0, l.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !X)) return;
            O(!0);
            let t = {
                type: k,
                name: j,
                parent_id: "null" !== L ? L : void 0,
                permission_overwrites: [
                    {
                        id: R,
                        type: u.r2.ROLE,
                        allow: A.x3,
                        deny: E.xBc.VIEW_CHANNEL,
                    },
                ],
            };
            m.A.post({
                url: E.Rsh.GUILD_CHANNELS(R),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, o.e0)({
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
                        b.A.checkGuildTemplateDirty(R), S(e.body.id), G();
                    },
                    (e) => {},
                )
                .finally(() => {
                    O(!1);
                });
        },
        children: (0, l.jsx)(a.Modal, {
            transitionState: C,
            title: T.intl.string(T.t["fUYU+j"]),
            onClose: G,
            actionBarInput: (0, l.jsx)(d.QWc, {
                text: T.intl.string(T.t["13/7kX"]),
                onClick: G,
            }),
            actions: [
                {
                    variant: "primary",
                    text: T.intl.string(T.t["R3BPH+"]),
                    loading: N,
                    disabled: !X,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(d.BJc, {
                gap: 16,
                children: [
                    (0, l.jsx)(d.l6P, {
                        label: T.intl.string(T.t.vHCZwr),
                        placeholder: T.intl.string(T.t["g/Rr2S"]),
                        value: L,
                        options: W,
                        onSelectionChange: M,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, l.jsx)(c.$d, {
                        label: T.intl.string(T.t["7ZcXG2"]),
                        options: B,
                        value: k,
                        onChange: (e) => {
                            let { value: t } = e;
                            return w(t);
                        },
                    }),
                    (0, l.jsx)(d.ksK, {
                        label: T.intl.string(T.t.PVbHDl),
                        value: j,
                        onChange: function (e) {
                            (0, h.ke)(k) && (e = (0, v.an)(e)), D(e);
                        },
                        maxLength: E.Ign,
                        placeholder: T.intl.string(T.t["bw/b8E"]),
                        leading: q,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
