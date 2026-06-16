l.d(n, { default: () => H });
var t = l(627968),
    i = l(64700),
    a = l(91871),
    s = l.n(a),
    c = l(189213),
    r = l(702841),
    d = l(123292),
    o = l(534514),
    u = l(783878),
    h = l(834730),
    m = l(292666),
    x = l(260598),
    g = l(95635),
    C = l(47167),
    v = l(713654),
    j = l(374084),
    k = l(342298),
    p = l(734057),
    b = l(808728),
    N = l(71393),
    A = l(994500),
    S = l(287809),
    f = l(486020),
    I = l(132514),
    y = l(721228),
    D = l(375708),
    E = l(915858);
function M(e, n, l, t) {
    return { channelId: e, title: n, description: l, emoji: null, icon: t ?? null };
}
function H(e) {
    let { transitionState: n, onClose: l, resourceChannel: a, guildId: H, onSave: R, onDelete: w, onIconUpload: K } = e,
        [L, P] = i.useState(a?.title ?? ""),
        [U, z] = i.useState(a?.description ?? ""),
        [B, J] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = p.A.getChannel(e.channelId);
                return null == n ? null : n.id;
            })(a),
        ),
        X = (0, r.bG)([I.A], () => I.A.getResourceChannel(a?.channelId)?.icon),
        G = (0, r.yK)([I.A], () => (I.A.getSettings()?.resourceChannels ?? []).map((e) => e.channelId)),
        V = L.length < j.SM || null == B,
        W = i.useCallback(() => {
            null == B || L.length <= 0 || (R(M(B, L, U, X)), l());
        }, [R, l, L, B, X, U]),
        Y = i.useCallback(() => {
            w?.(), l();
        }, [w, l]),
        _ = i.useCallback(
            (e) => {
                J(e);
            },
            [J],
        ),
        F = i.useCallback(
            (e) => {
                let n = b.Ay.getSelectableChannels(H),
                    l = N.A.getGuild(H);
                return Promise.resolve(
                    n
                        .filter(
                            (n) =>
                                (0, j.Yt)(n.channel) &&
                                !G.includes(n.channel.id) &&
                                s()(e, (0, C.m1)(n.channel, S.default, A.A)),
                        )
                        .map((e) => {
                            let n = (0, v.gU)(e.channel, l);
                            return {
                                id: e.channel.id,
                                value: e.channel.id,
                                label: (0, C.m1)(e.channel, S.default, A.A),
                                leading:
                                    null != n
                                        ? (0, t.jsx)(n, { size: "xs", color: "currentColor", className: E.p })
                                        : void 0,
                            };
                        }),
                );
            },
            [H, G],
        ),
        O = i.useCallback(
            (e) => {
                null != K && null != B && K(M(B, L, U), e);
            },
            [B, L, K, U],
        ),
        Q = i.useCallback(
            () => (null == X || null == B ? null : f.Ay.getResourceChannelIconURL({ channelId: B, icon: X })),
            [B, X],
        ),
        T = i.useMemo(
            () => [
                { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: l },
                { variant: "primary", text: D.intl.string(D.t["R3BPH+"]), onClick: W, disabled: V },
            ],
            [W, V, l],
        );
    return (0, t.jsxs)(c.Modal, {
        title: D.intl.string(D.t.SNMXYt),
        transitionState: n,
        onClose: l,
        actions: T,
        actionBarInput:
            null != a ? (0, t.jsx)(d.Q, { text: D.intl.string(D.t.N86XcP), onClick: Y, variant: "critical" }) : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsxs)(o.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [D.intl.string(D.t.nPa4Ju), (0, t.jsx)(y.A, {})],
                    }),
                    (0, t.jsx)(u.Z, { selectionMode: "single", value: B ?? void 0, options: F, onSelectionChange: _ }),
                    (0, t.jsx)(h.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: D.intl.string(D.t.eNDtJK),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsxs)(o.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [D.intl.string(D.t["lFy+aW"]), (0, t.jsx)(y.A, {})],
                    }),
                    (0, t.jsx)(m.k, { value: L, onChange: P, placeholder: D.intl.string(D.t.XKUimI), maxLength: j.oW }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsx)(o.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: D.intl.string(D.t.CnkilH),
                    }),
                    (0, t.jsx)(x.f, { value: U, onChange: z, placeholder: D.intl.string(D.t.na0V4E), maxLength: j.Mu }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(o.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: D.intl.string(D.t.CB6dyu),
                            }),
                            (0, t.jsx)(h.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: D.intl.string(D.t.Kcdk7D),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        children: (0, t.jsx)(k.A, {
                            className: E.xp,
                            imageClassName: E.V6,
                            image: X,
                            makeURL: Q,
                            icon: (0, t.jsx)(g.J, { size: "md", color: "currentColor" }),
                            hideSize: !0,
                            onChange: O,
                            iconClassName: E.Ow,
                            showIcon: null == X,
                        }),
                    }),
                ],
            }),
        ],
    });
}
