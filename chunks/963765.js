n(321073);
var i = n(477900),
    l = n(582128),
    r = n(613412),
    a = n(855986),
    s = n(933681),
    o = n(189213),
    c = n(785007),
    d = n(276293),
    u = n(983851),
    p = n(451394),
    g = n(56059),
    b = n(191023),
    h = n(834730),
    x = n(123292),
    m = n(331322),
    v = n(691885),
    I = n(95477),
    A = n(155718),
    E = n(47167),
    _ = n(410380),
    f = n(568185),
    C = n(219444),
    j = n(284738),
    y = n(95701),
    k = n(769765),
    D = n(71393),
    G = n(994500),
    L = n(287809),
    S = n(147036),
    N = n(488926),
    U = n(499785),
    w = n(652215),
    V = n(818348),
    R = n(792996),
    T = n(438271);
n.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, transitionState: n, onSubmit: H, onClose: B } = t,
                [F, O] = l.useState("null"),
                [X, M] = l.useState(w.rbe.GUILD_TEXT),
                [W, P] = l.useState(""),
                [Z, q] = l.useState(!1),
                J = (0, a.bG)([D.A], () => D.A.getGuild(e), [e]),
                K = (0, j.R)(e),
                Q = (0, C.V)(J),
                Y = l.useMemo(
                    () =>
                        (function (t) {
                            let { canCreateStageChannel: e, canCreateMediaChannel: n } = t,
                                l = [
                                    {
                                        icon: d.TextIcon,
                                        label: R.intl.string(R.t.pnuRXC),
                                        value: w.rbe.GUILD_TEXT,
                                        description: R.intl.string(R.t["Hf5Lb+"]),
                                    },
                                    {
                                        icon: u.VoiceNormalIcon,
                                        label: R.intl.string(R.t.Sx55Oh),
                                        value: w.rbe.GUILD_VOICE,
                                        description: R.intl.string(R.t.pqfkoF),
                                    },
                                ];
                            return (
                                e &&
                                    l.push({
                                        icon: p.StageIcon,
                                        label: R.intl.string(R.t.pNWst0),
                                        value: w.rbe.GUILD_STAGE_VOICE,
                                        description: R.intl.string(R.t.VPAwgo),
                                    }),
                                l.push({
                                    icon: g.ForumIcon,
                                    label: R.intl.string(R.t.eAVID5),
                                    value: w.rbe.GUILD_FORUM,
                                    description: R.intl.string(R.t.iZ5pgg),
                                }),
                                n &&
                                    l.push({
                                        icon: b.ImageIcon,
                                        label: R.intl.string(R.t["6x6fVg"]),
                                        value: w.rbe.GUILD_MEDIA,
                                        description: R.intl.string(R.t.JyCrwS),
                                        isBeta: !0,
                                    }),
                                l.map((t) => {
                                    let { icon: e, label: n, value: l, description: r, isBeta: a } = t;
                                    return {
                                        name: (0, i.jsxs)("div", {
                                            className: T.OA,
                                            children: [
                                                (0, i.jsx)(e, { className: T.Kk }),
                                                (0, i.jsxs)("div", {
                                                    children: [
                                                        (0, i.jsxs)(h.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-strong",
                                                            children: [n, (0, i.jsx)(_.p, { isBeta: a })],
                                                        }),
                                                        (0, i.jsx)(h.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-default",
                                                            children: r,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        value: l,
                                        channelIcon: e,
                                    };
                                })
                            );
                        })({ canCreateStageChannel: K, canCreateMediaChannel: Q }),
                    [K, Q],
                ),
                $ = (0, a.bG)([k.A], () => k.A.getCategories(e)._categories, [e]),
                z = l.useMemo(
                    () =>
                        $.map((t) => {
                            let { channel: e } = t;
                            return { id: e.id, value: e.id, label: (0, E.m1)(e, L.default, G.A) };
                        }),
                    [$],
                ),
                tt = Y.find((t) => t.value === X)?.channelIcon ?? V.FX,
                te = "" !== W;
            return (0, i.jsx)("form", {
                onSubmit: function (t) {
                    if ((t.preventDefault(), !te)) return;
                    q(!0);
                    let n = {
                        type: X,
                        name: W,
                        parent_id: "null" !== F ? F : void 0,
                        permission_overwrites: [{ id: e, type: A.r2.ROLE, allow: N.x3, deny: w.xBc.VIEW_CHANNEL }],
                    };
                    U.A.post({
                        url: w.Rsh.GUILD_CHANNELS(e),
                        body: n,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.CHANNEL_CREATE,
                            properties: (t) =>
                                (0, s.e0)({ is_private: !0, channel_id: t?.body?.id, channel_type: t?.body?.type }),
                        },
                        rejectWithError: !0,
                    })
                        .then(
                            (t) => {
                                (f.A.checkGuildTemplateDirty(e), H(t.body.id), B());
                            },
                            (t) => {},
                        )
                        .finally(() => {
                            q(!1);
                        });
                },
                children: (0, i.jsx)(o.a, {
                    transitionState: n,
                    title: R.intl.string(R.t["fUYU+j"]),
                    onClose: B,
                    actionBarInput: (0, i.jsx)(x.Q, { text: R.intl.string(R.t["13/7kX"]), onClick: B }),
                    actions: [
                        {
                            variant: "primary",
                            text: R.intl.string(R.t["R3BPH+"]),
                            loading: Z,
                            disabled: !te,
                            type: "submit",
                        },
                    ],
                    children: (0, i.jsxs)(m.B, {
                        gap: 16,
                        children: [
                            (0, i.jsx)(v.l, {
                                label: R.intl.string(R.t.vHCZwr),
                                placeholder: R.intl.string(R.t["g/Rr2S"]),
                                value: F,
                                options: z,
                                onSelectionChange: O,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, i.jsx)(c.$d, {
                                label: R.intl.string(R.t["7ZcXG2"]),
                                options: Y,
                                value: X,
                                onChange: (t) => {
                                    let { value: e } = t;
                                    return M(e);
                                },
                            }),
                            (0, i.jsx)(I.k, {
                                label: R.intl.string(R.t.PVbHDl),
                                value: W,
                                onChange: function (t) {
                                    ((0, y.ke)(X) && (t = (0, S.an)(t)), P(t));
                                },
                                maxLength: 100,
                                placeholder: R.intl.string(R.t["bw/b8E"]),
                                leading: tt,
                                autoFocus: !0,
                            }),
                        ],
                    }),
                }),
            });
        },
    },
);
