l.d(n, { default: () => D });
var t = l(627968),
    a = l(64700),
    i = l(91871),
    s = l.n(i),
    r = l(189213),
    c = l(417597),
    o = l(123292),
    d = l(534514),
    u = l(783878),
    h = l(834730),
    m = l(292666),
    x = l(260598),
    g = l(95635),
    p = l(47167),
    v = l(713654),
    j = l(374084),
    C = l(342298),
    k = l(734057),
    b = l(808728),
    A = l(71393),
    N = l(994500),
    _ = l(287809),
    I = l(486020),
    f = l(132514),
    S = l(721228),
    y = l(985018),
    E = l(915858);
function M(e, n, l, t) {
    return { channelId: e, title: n, description: l, emoji: null, icon: t ?? null };
}
function D(e) {
    let { transitionState: n, onClose: l, resourceChannel: i, guildId: D, onSave: H, onDelete: U, onIconUpload: w } = e,
        [K, L] = a.useState(i?.title ?? ""),
        [R, G] = a.useState(i?.description ?? ""),
        [J, P] = a.useState(
            (function (e) {
                if (null == e) return null;
                let n = k.A.getChannel(e.channelId);
                return null == n ? null : n.id;
            })(i),
        ),
        z = (0, c.bG)([f.A], () => f.A.getResourceChannel(i?.channelId)?.icon),
        B = (0, c.yK)([f.A], () => (f.A.getSettings()?.resourceChannels ?? []).map((e) => e.channelId)),
        O = K.length < j.SM || null == J,
        V = a.useCallback(() => {
            null == J || K.length <= 0 || (H(M(J, K, R, z)), l());
        }, [H, l, K, J, z, R]),
        W = a.useCallback(() => {
            U?.(), l();
        }, [U, l]),
        X = a.useCallback(
            (e) => {
                P(e);
            },
            [P],
        ),
        F = a.useCallback(
            (e) => {
                let n = b.Ay.getSelectableChannels(D),
                    l = A.A.getGuild(D);
                return Promise.resolve(
                    n
                        .filter(
                            (n) =>
                                (0, j.Yt)(n.channel) &&
                                !B.includes(n.channel.id) &&
                                s()(e, (0, p.m1)(n.channel, _.default, N.A)),
                        )
                        .map((e) => {
                            let n = (0, v.gU)(e.channel, l);
                            return {
                                id: e.channel.id,
                                value: e.channel.id,
                                label: (0, p.m1)(e.channel, _.default, N.A),
                                leading:
                                    null != n
                                        ? (0, t.jsx)(n, { size: "xs", color: "currentColor", className: E.p })
                                        : void 0,
                            };
                        }),
                );
            },
            [D, B],
        ),
        Y = a.useCallback(
            (e) => {
                null != w && null != J && w(M(J, K, R), e);
            },
            [J, K, w, R],
        ),
        Q = a.useCallback(
            () => (null == z || null == J ? null : I.Ay.getResourceChannelIconURL({ channelId: J, icon: z })),
            [J, z],
        ),
        T = a.useMemo(
            () => [
                { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: l },
                { variant: "primary", text: y.intl.string(y.t["R3BPH+"]), onClick: V, disabled: O },
            ],
            [V, O, l],
        );
    return (0, t.jsxs)(r.Modal, {
        title: y.intl.string(y.t.SNMXYt),
        transitionState: n,
        onClose: l,
        actions: T,
        actionBarInput:
            null != i ? (0, t.jsx)(o.Q, { text: y.intl.string(y.t.N86XcP), onClick: W, variant: "critical" }) : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsxs)(d.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [y.intl.string(y.t.nPa4Ju), (0, t.jsx)(S.A, {})],
                    }),
                    (0, t.jsx)(u.Z, { selectionMode: "single", value: J ?? void 0, options: F, onSelectionChange: X }),
                    (0, t.jsx)(h.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: y.intl.string(y.t.eNDtJK),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsxs)(d.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [y.intl.string(y.t["lFy+aW"]), (0, t.jsx)(S.A, {})],
                    }),
                    (0, t.jsx)(m.k, { value: K, onChange: L, placeholder: y.intl.string(y.t.XKUimI), maxLength: j.oW }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsx)(d.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: y.intl.string(y.t.CnkilH),
                    }),
                    (0, t.jsx)(x.f, { value: R, onChange: G, placeholder: y.intl.string(y.t.na0V4E), maxLength: j.Mu }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(d.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: y.intl.string(y.t.CB6dyu),
                            }),
                            (0, t.jsx)(h.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: y.intl.string(y.t.Kcdk7D),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        children: (0, t.jsx)(C.A, {
                            className: E.xp,
                            imageClassName: E.V6,
                            image: z,
                            makeURL: Q,
                            icon: (0, t.jsx)(g.J, { size: "md", color: "currentColor" }),
                            hideSize: !0,
                            onChange: Y,
                            iconClassName: E.Ow,
                            showIcon: null == z,
                        }),
                    }),
                ],
            }),
        ],
    });
}
