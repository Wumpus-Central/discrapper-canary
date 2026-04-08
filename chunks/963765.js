n.d(t, { default: () => k }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(110259),
    a = n(158954),
    o = n(311907),
    s = n(933681),
    c = n(421380),
    _ = n(397927),
    d = n(155718),
    p = n(409200),
    u = n(568185),
    h = n(219444),
    g = n(284738),
    x = n(95701),
    b = n(769765),
    f = n(71393),
    m = n(147036),
    v = n(488926),
    A = n(499785),
    C = n(652215),
    E = n(818348),
    w = n(985018),
    I = n(710552);
function k(e) {
    let { guildId: t, transitionState: n, onSubmit: k, onClose: j } = e,
        [S, y] = r.useState(C._Ee),
        [D, G] = r.useState(C.rbe.GUILD_TEXT),
        [L, N] = r.useState(""),
        [T, H] = r.useState(!1),
        R = (0, o.bG)([f.A], () => f.A.getGuild(t), [t]),
        U = (0, g.R)(t),
        B = (0, h.V)(R),
        O = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        r = [
                            {
                                icon: _.N$i,
                                label: w.intl.string(w.t.pnuRXC),
                                value: C.rbe.GUILD_TEXT,
                                description: w.intl.string(w.t["Hf5Lb+"]),
                            },
                            {
                                icon: _.HKD,
                                label: w.intl.string(w.t.Sx55Oh),
                                value: C.rbe.GUILD_VOICE,
                                description: w.intl.string(w.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            r.push({
                                icon: _.qux,
                                label: w.intl.string(w.t.pNWst0),
                                value: C.rbe.GUILD_STAGE_VOICE,
                                description: w.intl.string(w.t.VPAwgo),
                            }),
                        r.push({
                            icon: _.bSJ,
                            label: w.intl.string(w.t.eAVID5),
                            value: C.rbe.GUILD_FORUM,
                            description: w.intl.string(w.t.iZ5pgg),
                        }),
                        n &&
                            r.push({
                                icon: _.xfq,
                                label: w.intl.string(w.t["6x6fVg"]),
                                value: C.rbe.GUILD_MEDIA,
                                description: w.intl.string(w.t.JyCrwS),
                                isBeta: !0,
                            }),
                        r.map((e) => {
                            let { icon: t, label: n, value: r, description: l, isBeta: a } = e;
                            return {
                                name: (0, i.jsxs)("div", {
                                    className: I.OA,
                                    children: [
                                        (0, i.jsx)(t, { className: I.Kk }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsxs)(_.Text, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: [n, (0, i.jsx)(p.p, { isBeta: a })],
                                                }),
                                                (0, i.jsx)(_.Text, {
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
                })({ canCreateStageChannel: U, canCreateMediaChannel: B }),
            [U, B],
        ),
        M = (0, o.bG)([b.A], () => b.A.getCategories(t)._categories, [t]),
        V = r.useMemo(
            () =>
                M.map((e) => {
                    let { channel: t } = e;
                    return { id: t.id, value: t.id, label: t.name };
                }),
            [M],
        ),
        W = O.find((e) => e.value === D)?.channelIcon ?? E.FX,
        X = "" !== L;
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !X)) return;
            H(!0);
            let n = {
                type: D,
                name: L,
                parent_id: "null" !== S ? S : void 0,
                permission_overwrites: [{ id: t, type: d.r2.ROLE, allow: v.x3, deny: C.xBc.VIEW_CHANNEL }],
            };
            A.A.post({
                url: C.Rsh.GUILD_CHANNELS(t),
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
                        u.A.checkGuildTemplateDirty(t), k(e.body.id), j();
                    },
                    (e) => {},
                )
                .finally(() => {
                    H(!1);
                });
        },
        children: (0, i.jsx)(a.Modal, {
            transitionState: n,
            title: w.intl.string(w.t["fUYU+j"]),
            onClose: j,
            actionBarInput: (0, i.jsx)(_.QWc, { text: w.intl.string(w.t["13/7kX"]), onClick: j }),
            actions: [
                { variant: "primary", text: w.intl.string(w.t["R3BPH+"]), loading: T, disabled: !X, type: "submit" },
            ],
            children: (0, i.jsxs)(_.BJc, {
                gap: 16,
                children: [
                    (0, i.jsx)(_.l6P, {
                        label: w.intl.string(w.t.vHCZwr),
                        placeholder: w.intl.string(w.t["g/Rr2S"]),
                        value: S,
                        options: V,
                        onSelectionChange: y,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, i.jsx)(c.$d, {
                        label: w.intl.string(w.t["7ZcXG2"]),
                        options: O,
                        value: D,
                        onChange: (e) => {
                            let { value: t } = e;
                            return G(t);
                        },
                    }),
                    (0, i.jsx)(_.ksK, {
                        label: w.intl.string(w.t.PVbHDl),
                        value: L,
                        onChange: function (e) {
                            (0, x.ke)(D) && (e = (0, m.an)(e)), N(e);
                        },
                        maxLength: C.Ign,
                        placeholder: w.intl.string(w.t["bw/b8E"]),
                        leading: W,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
