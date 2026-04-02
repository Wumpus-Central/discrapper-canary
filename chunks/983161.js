l.d(n, { default: () => N });
var t = l(627968),
    a = l(64700),
    i = l(91871),
    s = l.n(i),
    r = l(158954),
    c = l(417597),
    o = l(397927),
    d = l(713654),
    u = l(374084),
    h = l(342298),
    m = l(734057),
    x = l(808728),
    g = l(71393),
    p = l(486020),
    v = l(132514),
    C = l(721228),
    j = l(985018),
    k = l(755874);
function b(e, n, l, t) {
    return { channelId: e, title: n, description: l, emoji: null, icon: t ?? null };
}
function N(e) {
    let { transitionState: n, onClose: l, resourceChannel: i, guildId: N, onSave: _, onDelete: I, onIconUpload: A } = e,
        [f, H] = a.useState(i?.title ?? ""),
        [S, y] = a.useState(i?.description ?? ""),
        [M, E] = a.useState(
            (function (e) {
                if (null == e) return null;
                let n = m.A.getChannel(e.channelId);
                return null == n ? null : n.id;
            })(i),
        ),
        K = (0, c.bG)([v.A], () => v.A.getResourceChannel(i?.channelId)?.icon),
        U = (0, c.yK)([v.A], () => (v.A.getSettings()?.resourceChannels ?? []).map((e) => e.channelId)),
        w = f.length < u.SM || null == M,
        L = a.useCallback(() => {
            null == M || f.length <= 0 || (_(b(M, f, S, K)), l());
        }, [_, l, f, M, K, S]),
        R = a.useCallback(() => {
            I?.(), l();
        }, [I, l]),
        G = a.useCallback(
            (e) => {
                E(e);
            },
            [E],
        ),
        J = a.useCallback(
            (e) => {
                let n = x.Ay.getSelectableChannels(N),
                    l = g.A.getGuild(N);
                return Promise.resolve(
                    n
                        .filter((n) => (0, u.Yt)(n.channel) && !U.includes(n.channel.id) && s()(e, n.channel.name))
                        .map((e) => {
                            let n = (0, d.gU)(e.channel, l);
                            return {
                                id: e.channel.id,
                                value: e.channel.id,
                                label: e.channel.name,
                                leading:
                                    null != n
                                        ? (0, t.jsx)(n, { size: "xs", color: "currentColor", className: k.p })
                                        : void 0,
                            };
                        }),
                );
            },
            [N, U],
        ),
        P = a.useCallback(
            (e) => {
                null != A && null != M && A(b(M, f, S), e);
            },
            [M, f, A, S],
        ),
        T = a.useCallback(
            () => (null == K || null == M ? null : p.Ay.getResourceChannelIconURL({ channelId: M, icon: K })),
            [M, K],
        ),
        W = a.useMemo(
            () => [
                { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: l },
                { variant: "primary", text: j.intl.string(j.t["R3BPH+"]), onClick: L, disabled: w },
            ],
            [L, w, l],
        );
    return (0, t.jsxs)(r.Modal, {
        title: j.intl.string(j.t.SNMXYt),
        transitionState: n,
        onClose: l,
        actions: W,
        actionBarInput:
            null != i
                ? (0, t.jsx)(o.QWc, { text: j.intl.string(j.t.N86XcP), onClick: R, variant: "critical" })
                : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: k.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [j.intl.string(j.t.nPa4Ju), (0, t.jsx)(C.A, {})],
                    }),
                    (0, t.jsx)(o.ZiE, {
                        selectionMode: "single",
                        value: M ?? void 0,
                        options: J,
                        onSelectionChange: G,
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.eNDtJK),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: k.me }),
            (0, t.jsxs)("div", {
                className: k.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [j.intl.string(j.t["lFy+aW"]), (0, t.jsx)(C.A, {})],
                    }),
                    (0, t.jsx)(o.ksK, {
                        value: f,
                        onChange: H,
                        placeholder: j.intl.string(j.t.XKUimI),
                        maxLength: u.oW,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: k.me }),
            (0, t.jsxs)("div", {
                className: k.eH,
                children: [
                    (0, t.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.CnkilH),
                    }),
                    (0, t.jsx)(o.fs1, {
                        value: S,
                        onChange: y,
                        placeholder: j.intl.string(j.t.na0V4E),
                        maxLength: u.Mu,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: k.me }),
            (0, t.jsxs)("div", {
                className: k.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.string(j.t.CB6dyu),
                            }),
                            (0, t.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: j.intl.string(j.t.Kcdk7D),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        children: (0, t.jsx)(h.A, {
                            className: k.xp,
                            imageClassName: k.V6,
                            image: K,
                            makeURL: T,
                            icon: (0, t.jsx)(o.JMY, { size: "md", color: "currentColor" }),
                            hideSize: !0,
                            onChange: P,
                            iconClassName: k.Ow,
                            showIcon: null == K,
                        }),
                    }),
                ],
            }),
        ],
    });
}
