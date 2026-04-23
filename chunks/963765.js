n.d(t, { default: () => B }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(110259),
    a = n(189213),
    o = n(17928),
    s = n(933681),
    c = n(785007),
    _ = n(276293),
    d = n(983851),
    p = n(451394),
    u = n(56059),
    h = n(191023),
    g = n(834730),
    b = n(123292),
    f = n(331322),
    x = n(691885),
    m = n(292666),
    v = n(155718),
    E = n(47167),
    A = n(113194),
    C = n(568185),
    w = n(219444),
    I = n(284738),
    k = n(95701),
    j = n(769765),
    y = n(71393),
    G = n(994500),
    L = n(287809),
    S = n(147036),
    D = n(488926),
    N = n(499785),
    H = n(652215),
    T = n(818348),
    R = n(985018),
    U = n(863092);
function B(e) {
    let { guildId: t, transitionState: n, onSubmit: B, onClose: O } = e,
        [M, V] = r.useState(H._Ee),
        [W, X] = r.useState(H.rbe.GUILD_TEXT),
        [F, Z] = r.useState(""),
        [q, K] = r.useState(!1),
        P = (0, o.bG)([y.A], () => y.A.getGuild(t), [t]),
        $ = (0, I.R)(t),
        J = (0, w.V)(P),
        Q = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        r = [
                            {
                                icon: _.N,
                                label: R.intl.string(R.t.pnuRXC),
                                value: H.rbe.GUILD_TEXT,
                                description: R.intl.string(R.t["Hf5Lb+"]),
                            },
                            {
                                icon: d.H,
                                label: R.intl.string(R.t.Sx55Oh),
                                value: H.rbe.GUILD_VOICE,
                                description: R.intl.string(R.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            r.push({
                                icon: p.q,
                                label: R.intl.string(R.t.pNWst0),
                                value: H.rbe.GUILD_STAGE_VOICE,
                                description: R.intl.string(R.t.VPAwgo),
                            }),
                        r.push({
                            icon: u.b,
                            label: R.intl.string(R.t.eAVID5),
                            value: H.rbe.GUILD_FORUM,
                            description: R.intl.string(R.t.iZ5pgg),
                        }),
                        n &&
                            r.push({
                                icon: h.x,
                                label: R.intl.string(R.t["6x6fVg"]),
                                value: H.rbe.GUILD_MEDIA,
                                description: R.intl.string(R.t.JyCrwS),
                                isBeta: !0,
                            }),
                        r.map((e) => {
                            let { icon: t, label: n, value: r, description: l, isBeta: a } = e;
                            return {
                                name: (0, i.jsxs)("div", {
                                    className: U.OA,
                                    children: [
                                        (0, i.jsx)(t, { className: U.Kk }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsxs)(g.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: [n, (0, i.jsx)(A.p, { isBeta: a })],
                                                }),
                                                (0, i.jsx)(g.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
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
                })({ canCreateStageChannel: $, canCreateMediaChannel: J }),
            [$, J],
        ),
        Y = (0, o.bG)([j.A], () => j.A.getCategories(t)._categories, [t]),
        z = r.useMemo(
            () =>
                Y.map((e) => {
                    let { channel: t } = e;
                    return { id: t.id, value: t.id, label: (0, E.m1)(t, L.default, G.A) };
                }),
            [Y],
        ),
        ee = Q.find((e) => e.value === W)?.channelIcon ?? T.FX,
        et = "" !== F;
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !et)) return;
            K(!0);
            let n = {
                type: W,
                name: F,
                parent_id: "null" !== M ? M : void 0,
                permission_overwrites: [{ id: t, type: v.r2.ROLE, allow: D.x3, deny: H.xBc.VIEW_CHANNEL }],
            };
            N.A.post({
                url: H.Rsh.GUILD_CHANNELS(t),
                body: n,
                oldFormErrors: !0,
                trackedActionData: {
                    event: l.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) =>
                        (0, s.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
                },
                rejectWithError: !0,
            })
                .then(
                    (e) => {
                        C.A.checkGuildTemplateDirty(t), B(e.body.id), O();
                    },
                    (e) => {},
                )
                .finally(() => {
                    K(!1);
                });
        },
        children: (0, i.jsx)(a.Modal, {
            transitionState: n,
            title: R.intl.string(R.t["fUYU+j"]),
            onClose: O,
            actionBarInput: (0, i.jsx)(b.Q, { text: R.intl.string(R.t["13/7kX"]), onClick: O }),
            actions: [
                { variant: "primary", text: R.intl.string(R.t["R3BPH+"]), loading: q, disabled: !et, type: "submit" },
            ],
            children: (0, i.jsxs)(f.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(x.l, {
                        label: R.intl.string(R.t.vHCZwr),
                        placeholder: R.intl.string(R.t["g/Rr2S"]),
                        value: M,
                        options: z,
                        onSelectionChange: V,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, i.jsx)(c.$d, {
                        label: R.intl.string(R.t["7ZcXG2"]),
                        options: Q,
                        value: W,
                        onChange: (e) => {
                            let { value: t } = e;
                            return X(t);
                        },
                    }),
                    (0, i.jsx)(m.k, {
                        label: R.intl.string(R.t.PVbHDl),
                        value: F,
                        onChange: function (e) {
                            (0, k.ke)(W) && (e = (0, S.an)(e)), Z(e);
                        },
                        maxLength: H.Ign,
                        placeholder: R.intl.string(R.t["bw/b8E"]),
                        leading: ee,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
