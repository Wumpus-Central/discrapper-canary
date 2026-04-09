n.d(t, { default: () => y }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(110259),
    a = n(158954),
    o = n(311907),
    s = n(933681),
    c = n(421380),
    _ = n(397927),
    d = n(155718),
    p = n(47167),
    u = n(409200),
    h = n(568185),
    g = n(219444),
    x = n(284738),
    b = n(95701),
    f = n(769765),
    m = n(71393),
    v = n(994500),
    A = n(287809),
    C = n(147036),
    E = n(488926),
    w = n(499785),
    I = n(652215),
    k = n(818348),
    j = n(985018),
    S = n(710552);
function y(e) {
    let { guildId: t, transitionState: n, onSubmit: y, onClose: D } = e,
        [G, L] = r.useState(I._Ee),
        [N, T] = r.useState(I.rbe.GUILD_TEXT),
        [H, R] = r.useState(""),
        [U, B] = r.useState(!1),
        O = (0, o.bG)([m.A], () => m.A.getGuild(t), [t]),
        M = (0, x.R)(t),
        V = (0, g.V)(O),
        W = r.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateMediaChannel: n } = e,
                        r = [
                            {
                                icon: _.N$i,
                                label: j.intl.string(j.t.pnuRXC),
                                value: I.rbe.GUILD_TEXT,
                                description: j.intl.string(j.t["Hf5Lb+"]),
                            },
                            {
                                icon: _.HKD,
                                label: j.intl.string(j.t.Sx55Oh),
                                value: I.rbe.GUILD_VOICE,
                                description: j.intl.string(j.t.pqfkoF),
                            },
                        ];
                    return (
                        t &&
                            r.push({
                                icon: _.qux,
                                label: j.intl.string(j.t.pNWst0),
                                value: I.rbe.GUILD_STAGE_VOICE,
                                description: j.intl.string(j.t.VPAwgo),
                            }),
                        r.push({
                            icon: _.bSJ,
                            label: j.intl.string(j.t.eAVID5),
                            value: I.rbe.GUILD_FORUM,
                            description: j.intl.string(j.t.iZ5pgg),
                        }),
                        n &&
                            r.push({
                                icon: _.xfq,
                                label: j.intl.string(j.t["6x6fVg"]),
                                value: I.rbe.GUILD_MEDIA,
                                description: j.intl.string(j.t.JyCrwS),
                                isBeta: !0,
                            }),
                        r.map((e) => {
                            let { icon: t, label: n, value: r, description: l, isBeta: a } = e;
                            return {
                                name: (0, i.jsxs)("div", {
                                    className: S.OA,
                                    children: [
                                        (0, i.jsx)(t, { className: S.Kk }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsxs)(_.Text, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: [n, (0, i.jsx)(u.p, { isBeta: a })],
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
                })({ canCreateStageChannel: M, canCreateMediaChannel: V }),
            [M, V],
        ),
        X = (0, o.bG)([f.A], () => f.A.getCategories(t)._categories, [t]),
        F = r.useMemo(
            () =>
                X.map((e) => {
                    let { channel: t } = e;
                    return { id: t.id, value: t.id, label: (0, p.m1)(t, A.default, v.A) };
                }),
            [X],
        ),
        K = W.find((e) => e.value === N)?.channelIcon ?? k.FX,
        Z = "" !== H;
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            if ((e.preventDefault(), !Z)) return;
            B(!0);
            let n = {
                type: N,
                name: H,
                parent_id: "null" !== G ? G : void 0,
                permission_overwrites: [{ id: t, type: d.r2.ROLE, allow: E.x3, deny: I.xBc.VIEW_CHANNEL }],
            };
            w.A.post({
                url: I.Rsh.GUILD_CHANNELS(t),
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
                        h.A.checkGuildTemplateDirty(t), y(e.body.id), D();
                    },
                    (e) => {},
                )
                .finally(() => {
                    B(!1);
                });
        },
        children: (0, i.jsx)(a.Modal, {
            transitionState: n,
            title: j.intl.string(j.t["fUYU+j"]),
            onClose: D,
            actionBarInput: (0, i.jsx)(_.QWc, { text: j.intl.string(j.t["13/7kX"]), onClick: D }),
            actions: [
                { variant: "primary", text: j.intl.string(j.t["R3BPH+"]), loading: U, disabled: !Z, type: "submit" },
            ],
            children: (0, i.jsxs)(_.BJc, {
                gap: 16,
                children: [
                    (0, i.jsx)(_.l6P, {
                        label: j.intl.string(j.t.vHCZwr),
                        placeholder: j.intl.string(j.t["g/Rr2S"]),
                        value: G,
                        options: F,
                        onSelectionChange: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, i.jsx)(c.$d, {
                        label: j.intl.string(j.t["7ZcXG2"]),
                        options: W,
                        value: N,
                        onChange: (e) => {
                            let { value: t } = e;
                            return T(t);
                        },
                    }),
                    (0, i.jsx)(_.ksK, {
                        label: j.intl.string(j.t.PVbHDl),
                        value: H,
                        onChange: function (e) {
                            (0, b.ke)(N) && (e = (0, C.an)(e)), R(e);
                        },
                        maxLength: I.Ign,
                        placeholder: j.intl.string(j.t["bw/b8E"]),
                        leading: K,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
}
