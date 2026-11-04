var t = l(477900),
    i = l(582128),
    s = l(91871),
    a = l.n(s),
    c = l(164636),
    r = l(189213),
    o = l(123292),
    d = l(534514),
    u = l(890497),
    h = l(834730),
    m = l(95477),
    g = l(103557),
    x = l(95635),
    C = l(47167),
    v = l(713654),
    j = l(374084),
    b = l(342298),
    k = l(734057),
    p = l(808728),
    N = l(71393),
    A = l(994500),
    I = l(287809),
    f = l(486020),
    S = l(132514),
    y = l(721228),
    D = l(792996),
    E = l(559357);
function H(e, n, l, t) {
    return { channelId: e, title: n, description: l, emoji: null, icon: t ?? null };
}
l.d(
    n,
    {},
    {
        default: function (e) {
            let {
                    transitionState: n,
                    onClose: l,
                    resourceChannel: s,
                    guildId: R,
                    onSave: U,
                    onDelete: w,
                    onIconUpload: K,
                } = e,
                [L, P] = i.useState(s?.title ?? ""),
                [z, B] = i.useState(s?.description ?? ""),
                [M, X] = i.useState(
                    (function (e) {
                        if (null == e) return null;
                        let n = k.A.getChannel(e.channelId);
                        return null == n ? null : n.id;
                    })(s),
                ),
                G = (0, c.bG)([S.A], () => S.A.getResourceChannel(s?.channelId)?.icon),
                J = (0, c.yK)([S.A], () => (S.A.getSettings()?.resourceChannels ?? []).map((e) => e.channelId)),
                V = L.length < 1 || null == M,
                Y = i.useCallback(() => {
                    null == M || L.length <= 0 || (U(H(M, L, z, G)), l());
                }, [U, l, L, M, G, z]),
                _ = i.useCallback(() => {
                    (w?.(), l());
                }, [w, l]),
                F = i.useCallback(
                    (e) => {
                        X(e);
                    },
                    [X],
                ),
                O = i.useCallback(
                    (e) => {
                        let n = p.A.getSelectableChannels(R),
                            l = N.A.getGuild(R);
                        return Promise.resolve(
                            n
                                .filter(
                                    (n) =>
                                        (0, j.Yt)(n.channel) &&
                                        !J.includes(n.channel.id) &&
                                        a()(e, (0, C.m1)(n.channel, I.default, A.A)),
                                )
                                .map((e) => {
                                    let n = (0, v.gU)(e.channel, l);
                                    return {
                                        id: e.channel.id,
                                        value: e.channel.id,
                                        label: (0, C.m1)(e.channel, I.default, A.A),
                                        leading:
                                            null != n
                                                ? (0, t.jsx)(n, { size: "xs", color: "currentColor", className: E.p })
                                                : void 0,
                                    };
                                }),
                        );
                    },
                    [R, J],
                ),
                Q = i.useCallback(
                    (e) => {
                        null != K && null != M && K(H(M, L, z), e);
                    },
                    [M, L, K, z],
                ),
                T = i.useCallback(
                    () => (null == G || null == M ? null : f.Ay.getResourceChannelIconURL({ channelId: M, icon: G })),
                    [M, G],
                ),
                W = i.useMemo(
                    () => [
                        { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: l },
                        { variant: "primary", text: D.intl.string(D.t["R3BPH+"]), onClick: Y, disabled: V },
                    ],
                    [Y, V, l],
                );
            return (0, t.jsxs)(r.a, {
                title: D.intl.string(D.t.SNMXYt),
                transitionState: n,
                onClose: l,
                actions: W,
                actionBarInput:
                    null != s
                        ? (0, t.jsx)(o.Q, { text: D.intl.string(D.t.N86XcP), onClick: _, variant: "critical" })
                        : void 0,
                children: [
                    (0, t.jsxs)("div", {
                        className: E.eH,
                        children: [
                            (0, t.jsxs)(d.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: [D.intl.string(D.t.nPa4Ju), (0, t.jsx)(y.A, {})],
                            }),
                            (0, t.jsx)(u.Z, {
                                selectionMode: "single",
                                value: M ?? void 0,
                                options: O,
                                onSelectionChange: F,
                            }),
                            (0, t.jsx)(h.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                children: D.intl.string(D.t.eNDtJK),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: E.me }),
                    (0, t.jsxs)("div", {
                        className: E.eH,
                        children: [
                            (0, t.jsxs)(d.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: [D.intl.string(D.t["lFy+aW"]), (0, t.jsx)(y.A, {})],
                            }),
                            (0, t.jsx)(m.k, {
                                value: L,
                                onChange: P,
                                placeholder: D.intl.string(D.t.XKUimI),
                                maxLength: 30,
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: E.me }),
                    (0, t.jsxs)("div", {
                        className: E.eH,
                        children: [
                            (0, t.jsx)(d.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: D.intl.string(D.t.CnkilH),
                            }),
                            (0, t.jsx)(g.f, {
                                value: z,
                                onChange: B,
                                placeholder: D.intl.string(D.t.na0V4E),
                                maxLength: 200,
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: E.me }),
                    (0, t.jsxs)("div", {
                        className: E.kE,
                        children: [
                            (0, t.jsxs)("div", {
                                children: [
                                    (0, t.jsx)(d.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: D.intl.string(D.t.CB6dyu),
                                    }),
                                    (0, t.jsx)(h.E, {
                                        variant: "body-xs/medium",
                                        color: "text-muted",
                                        children: D.intl.string(D.t.Kcdk7D),
                                    }),
                                ],
                            }),
                            (0, t.jsx)("div", {
                                children: (0, t.jsx)(b.A, {
                                    className: E.xp,
                                    imageClassName: E.V6,
                                    image: G,
                                    makeURL: T,
                                    icon: (0, t.jsx)(x.UploadIcon, { size: "md", color: "currentColor" }),
                                    hideSize: !0,
                                    onChange: Q,
                                    iconClassName: E.Ow,
                                    showIcon: null == G,
                                }),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
