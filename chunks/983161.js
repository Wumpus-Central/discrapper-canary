l.d(n, { default: () => I });
var t = l(627968),
    a = l(64700),
    i = l(91871),
    s = l.n(i),
    r = l(158954),
    c = l(417597),
    o = l(397927),
    d = l(47167),
    u = l(713654),
    h = l(374084),
    m = l(342298),
    x = l(734057),
    g = l(808728),
    p = l(71393),
    v = l(994500),
    C = l(287809),
    j = l(486020),
    k = l(132514),
    b = l(721228),
    A = l(985018),
    N = l(755874);
function _(e, n, l, t) {
    return { channelId: e, title: n, description: l, emoji: null, icon: t ?? null };
}
function I(e) {
    let { transitionState: n, onClose: l, resourceChannel: i, guildId: I, onSave: f, onDelete: H, onIconUpload: S } = e,
        [y, M] = a.useState(i?.title ?? ""),
        [E, K] = a.useState(i?.description ?? ""),
        [U, w] = a.useState(
            (function (e) {
                if (null == e) return null;
                let n = x.A.getChannel(e.channelId);
                return null == n ? null : n.id;
            })(i),
        ),
        L = (0, c.bG)([k.A], () => k.A.getResourceChannel(i?.channelId)?.icon),
        R = (0, c.yK)([k.A], () => (k.A.getSettings()?.resourceChannels ?? []).map((e) => e.channelId)),
        G = y.length < h.SM || null == U,
        J = a.useCallback(() => {
            null == U || y.length <= 0 || (f(_(U, y, E, L)), l());
        }, [f, l, y, U, L, E]),
        P = a.useCallback(() => {
            H?.(), l();
        }, [H, l]),
        T = a.useCallback(
            (e) => {
                w(e);
            },
            [w],
        ),
        W = a.useCallback(
            (e) => {
                let n = g.Ay.getSelectableChannels(I),
                    l = p.A.getGuild(I);
                return Promise.resolve(
                    n
                        .filter(
                            (n) =>
                                (0, h.Yt)(n.channel) &&
                                !R.includes(n.channel.id) &&
                                s()(e, (0, d.m1)(n.channel, C.default, v.A)),
                        )
                        .map((e) => {
                            let n = (0, u.gU)(e.channel, l);
                            return {
                                id: e.channel.id,
                                value: e.channel.id,
                                label: (0, d.m1)(e.channel, C.default, v.A),
                                leading:
                                    null != n
                                        ? (0, t.jsx)(n, { size: "xs", color: "currentColor", className: N.p })
                                        : void 0,
                            };
                        }),
                );
            },
            [I, R],
        ),
        z = a.useCallback(
            (e) => {
                null != S && null != U && S(_(U, y, E), e);
            },
            [U, y, S, E],
        ),
        B = a.useCallback(
            () => (null == L || null == U ? null : j.Ay.getResourceChannelIconURL({ channelId: U, icon: L })),
            [U, L],
        ),
        O = a.useMemo(
            () => [
                { variant: "secondary", text: A.intl.string(A.t["ETE/oC"]), onClick: l },
                { variant: "primary", text: A.intl.string(A.t["R3BPH+"]), onClick: J, disabled: G },
            ],
            [J, G, l],
        );
    return (0, t.jsxs)(r.Modal, {
        title: A.intl.string(A.t.SNMXYt),
        transitionState: n,
        onClose: l,
        actions: O,
        actionBarInput:
            null != i
                ? (0, t.jsx)(o.QWc, { text: A.intl.string(A.t.N86XcP), onClick: P, variant: "critical" })
                : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: N.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [A.intl.string(A.t.nPa4Ju), (0, t.jsx)(b.A, {})],
                    }),
                    (0, t.jsx)(o.ZiE, {
                        selectionMode: "single",
                        value: U ?? void 0,
                        options: W,
                        onSelectionChange: T,
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: A.intl.string(A.t.eNDtJK),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: N.me }),
            (0, t.jsxs)("div", {
                className: N.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [A.intl.string(A.t["lFy+aW"]), (0, t.jsx)(b.A, {})],
                    }),
                    (0, t.jsx)(o.ksK, {
                        value: y,
                        onChange: M,
                        placeholder: A.intl.string(A.t.XKUimI),
                        maxLength: h.oW,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: N.me }),
            (0, t.jsxs)("div", {
                className: N.eH,
                children: [
                    (0, t.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: A.intl.string(A.t.CnkilH),
                    }),
                    (0, t.jsx)(o.fs1, {
                        value: E,
                        onChange: K,
                        placeholder: A.intl.string(A.t.na0V4E),
                        maxLength: h.Mu,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: N.me }),
            (0, t.jsxs)("div", {
                className: N.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: A.intl.string(A.t.CB6dyu),
                            }),
                            (0, t.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: A.intl.string(A.t.Kcdk7D),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        children: (0, t.jsx)(m.A, {
                            className: N.xp,
                            imageClassName: N.V6,
                            image: L,
                            makeURL: B,
                            icon: (0, t.jsx)(o.JMY, { size: "md", color: "currentColor" }),
                            hideSize: !0,
                            onChange: z,
                            iconClassName: N.Ow,
                            showIcon: null == L,
                        }),
                    }),
                ],
            }),
        ],
    });
}
