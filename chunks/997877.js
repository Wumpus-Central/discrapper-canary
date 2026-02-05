s.d(t, { x: () => H });
var l = s(627968),
    n = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(989349),
    u = s.n(i),
    c = s(837381),
    o = s(311907),
    d = s(397927),
    f = s(966327),
    m = s(928039),
    h = s(629357),
    b = s(47167),
    x = s(598104),
    g = s(255266),
    p = s(72563),
    A = s(223863),
    _ = s(95701),
    S = s(734057),
    T = s(71393),
    y = s(576705),
    C = s(290863),
    j = s(222823),
    v = s(994500),
    E = s(287809),
    L = s(405269),
    N = s(403362),
    k = s(427262),
    P = s(652215),
    D = s(790782),
    R = s(985018),
    w = s(667052);
function M(e) {
    let {
            destination: t,
            icon: s,
            label: r,
            subLabel: i,
            selected: u,
            disabled: o,
            onPressDestination: f,
            "aria-setsize": m,
            "aria-posinset": h,
        } = e,
        b = (0, c.rm)(t.id),
        x = n.useCallback(() => {
            o || f?.(t);
        }, [f, o, t]);
    return (0, l.jsxs)(d.DUT, {
        className: a()(w.HP, { [w.r9]: o }),
        onClick: x,
        "aria-selected": u,
        "aria-setsize": m,
        "aria-posinset": h,
        ...b,
        children: [
            (0, l.jsxs)("div", {
                className: w.D_,
                children: [
                    (0, l.jsx)("div", { className: w.P0, children: s }),
                    (0, l.jsxs)("div", {
                        className: w.WD,
                        children: [
                            (0, l.jsx)(d.Text, {
                                tag: "strong",
                                className: w.Pf,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: r,
                            }),
                            (0, l.jsx)(d.Text, {
                                className: w.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: w.kv, children: (0, l.jsx)(d.P7L, { checked: u }) }),
        ],
    });
}
function G(e) {
    let { user: t, subLabel: s, ...n } = e,
        r = k.Ay.useName(t),
        a = k.Ay.useUserTag(t, { decoration: "never" }),
        i = (0, o.bG)([v.A], () => v.A.getNickname(t.id)),
        u = (0, o.bG)([C.A], () => C.A.getStatus(t.id));
    return (0, l.jsx)(M, {
        ...n,
        icon: (0, l.jsx)(f.A, { "aria-hidden": !0, size: d._3J.SIZE_32, user: t, status: u }),
        label: i ?? r,
        subLabel: s ?? a,
    });
}
function U(e) {
    let { channel: t, subLabel: s, ...n } = e,
        r = (0, b.Ay)(t),
        a = (0, p.i)(t);
    return (0, l.jsx)(M, {
        ...n,
        icon: (0, l.jsx)(x.A, { "aria-hidden": !0, size: d._3J.SIZE_32, channel: t }),
        label: r,
        subLabel: s ?? a,
    });
}
function I(e) {
    let { channel: t, subLabel: s, ...n } = e,
        r = (0, o.bG)([T.A], () => T.A.getGuild(t?.guild_id)),
        a = (0, b.Ay)(t),
        i = (0, o.bG)([S.A, E.default, v.A], () => {
            let e = S.A.getChannel(t.parent_id);
            return null == e ? null : (0, b.m1)(e, E.default, v.A, !1);
        }),
        c = (0, o.bG)([j.Ay], () => j.Ay.lastMessageTimestamp(t.id, D.P.CHANNEL)),
        f = r?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.bSJ : d.N$i;
        f = (0, l.jsxs)("div", {
            className: w.vr,
            children: [
                (0, l.jsx)(e, { color: d.LU0.colors.TEXT_SUBTLE, className: w.Q9 }),
                (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: i }),
                null != c
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Text, {
                                  className: w.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, l.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, L.Fe)(u()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(M, {
        ...n,
        icon: (0, l.jsx)(g.A, { size: g.q.SMALL_32, guild: r, channel: t }),
        label: a,
        subLabel: s ?? f,
    });
}
function H(e) {
    let { rowData: t, selectedDestinations: s, handleToggleDestination: r, disableSelection: a, ...i } = e,
        u = n.useMemo(() => [t.length], [t.length]),
        o = n.useCallback(() => 48, []),
        f = n.useMemo(() => s?.map(A.I) ?? [], [s]),
        b = n.useCallback(
            (e) => {
                let { section: s, row: n } = e;
                if (s > 0) return;
                let { type: i, record: u } = t[n];
                if (i === h.rD.HEADER) return;
                let c = i === h.rD.USER ? { type: "user", id: u.id } : { type: "channel", id: u.id },
                    o = (0, A.I)(c),
                    d = (function (e) {
                        if (
                            e instanceof _.YB &&
                            (0, _.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(y.A.can(P.xBc.MANAGE_CHANNELS, e) || y.A.can(P.xBc.MANAGE_MESSAGES, e))
                        )
                            return { label: R.intl.string(R.t.Icu3bf) };
                    })(u),
                    m = f.includes(o),
                    b = {
                        key: o,
                        destination: c,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (a && !m) || null != d,
                        selected: m,
                        onPressDestination: r,
                        "aria-posinset": n + 1,
                        "aria-setsize": t.length,
                    };
                return i === h.rD.USER
                    ? (0, l.jsx)(G, { user: u, ...b })
                    : i === h.rD.GROUP_DM
                      ? (0, l.jsx)(U, { channel: u, ...b })
                      : i === h.rD.TEXT_CHANNEL || i === h.rD.VOICE_CHANNEL
                        ? (0, l.jsx)(I, { channel: u, ...b })
                        : void (0, N.xb)(i);
            },
            [a, r, t, f],
        ),
        x = n.useRef(null),
        g = (0, m.A)("share-command-modal", x);
    return (0, l.jsx)(c.hD, {
        navigator: g,
        children: (0, l.jsx)(c.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, l.jsx)(d.OZj, {
                    ref: (e) => {
                        (x.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...s,
                    ...i,
                    sections: u,
                    sectionHeight: 0,
                    renderRow: b,
                    rowHeight: o,
                });
            },
        }),
    });
}
