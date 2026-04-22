l.d(t, { x: () => O });
var n = l(627968),
    s = l(64700),
    r = l(503698),
    a = l.n(r),
    i = l(989349),
    u = l.n(i),
    c = l(837381),
    o = l(311907),
    d = l(939249),
    h = l(834730),
    m = l(658675),
    f = l(778712),
    g = l(56059),
    b = l(276293),
    x = l(827734),
    A = l(475825),
    _ = l(966327),
    p = l(928039),
    S = l(629357),
    C = l(47167),
    j = l(598104),
    E = l(255266),
    L = l(72563),
    y = l(223863),
    N = l(95701),
    v = l(734057),
    k = l(71393),
    P = l(576705),
    T = l(290863),
    D = l(222823),
    I = l(994500),
    R = l(287809),
    M = l(405269),
    G = l(403362),
    w = l(427262),
    q = l(652215),
    U = l(790782),
    H = l(985018),
    z = l(894385);
function V(e) {
    let {
            destination: t,
            icon: l,
            label: r,
            subLabel: i,
            selected: u,
            disabled: o,
            onPressDestination: f,
            "aria-setsize": g,
            "aria-posinset": b,
        } = e,
        x = (0, c.rm)(t.id),
        A = s.useCallback(() => {
            o || f?.(t);
        }, [f, o, t]);
    return (0, n.jsxs)(d.D, {
        className: a()(z.HP, { [z.r9]: o }),
        onClick: A,
        "aria-selected": u,
        "aria-setsize": g,
        "aria-posinset": b,
        ...x,
        children: [
            (0, n.jsxs)("div", {
                className: z.D_,
                children: [
                    (0, n.jsx)("div", { className: z.P0, children: l }),
                    (0, n.jsxs)("div", {
                        className: z.WD,
                        children: [
                            (0, n.jsx)(h.E, {
                                tag: "strong",
                                className: z.Pf,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: r,
                            }),
                            (0, n.jsx)(h.E, {
                                className: z.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: z.kv, children: (0, n.jsx)(m.P, { checked: u }) }),
        ],
    });
}
function W(e) {
    let { user: t, subLabel: l, ...s } = e,
        r = w.Ay.useName(t),
        a = w.Ay.useUserTag(t, { decoration: "never" }),
        i = (0, o.bG)([I.A], () => I.A.getNickname(t.id)),
        u = (0, o.bG)([T.A], () => T.A.getStatus(t.id));
    return (0, n.jsx)(V, {
        ...s,
        icon: (0, n.jsx)(_.A, { "aria-hidden": !0, size: f._3.SIZE_32, user: t, status: u }),
        label: i ?? r,
        subLabel: l ?? a,
    });
}
function B(e) {
    let { channel: t, subLabel: l, ...s } = e,
        r = (0, C.Ay)(t),
        a = (0, L.i)(t);
    return (0, n.jsx)(V, {
        ...s,
        icon: (0, n.jsx)(j.A, { "aria-hidden": !0, size: f._3.SIZE_32, channel: t }),
        label: r,
        subLabel: l ?? a,
    });
}
function F(e) {
    let { channel: t, subLabel: l, ...s } = e,
        r = (0, o.bG)([k.A], () => k.A.getGuild(t?.guild_id)),
        a = (0, C.Ay)(t),
        i = (0, o.bG)([v.A, R.default, I.A], () => {
            let e = v.A.getChannel(t.parent_id);
            return null == e ? null : (0, C.m1)(e, R.default, I.A, !1);
        }),
        c = (0, o.bG)([D.Ay], () => D.Ay.lastMessageTimestamp(t.id, U.P.CHANNEL)),
        d = r?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? g.b : b.N;
        d = (0, n.jsxs)("div", {
            className: z.vr,
            children: [
                (0, n.jsx)(e, { color: x.A.colors.TEXT_SUBTLE, className: z.Q9 }),
                (0, n.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: i }),
                null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(h.E, {
                                  className: z.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, n.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, M.Fe)(u()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, n.jsx)(V, {
        ...s,
        icon: (0, n.jsx)(E.A, { size: E.q.SMALL_32, guild: r, channel: t }),
        label: a,
        subLabel: l ?? d,
    });
}
function O(e) {
    let { rowData: t, selectedDestinations: l, handleToggleDestination: r, disableSelection: a, ...i } = e,
        u = s.useMemo(() => [t.length], [t.length]),
        o = s.useCallback(() => 48, []),
        d = s.useMemo(() => l?.map(y.I) ?? [], [l]),
        h = s.useCallback(
            (e) => {
                let { section: l, row: s } = e;
                if (l > 0) return;
                let { type: i, record: u } = t[s];
                if (i === S.rD.HEADER) return;
                let c = i === S.rD.USER ? { type: "user", id: u.id } : { type: "channel", id: u.id },
                    o = (0, y.I)(c),
                    h = (function (e) {
                        if (
                            e instanceof N.YB &&
                            (0, N.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(P.A.can(q.xBc.MANAGE_CHANNELS, e) || P.A.can(q.xBc.MANAGE_MESSAGES, e))
                        )
                            return { label: H.intl.string(H.t.Icu3bf) };
                    })(u),
                    m = d.includes(o),
                    f = {
                        key: o,
                        destination: c,
                        subLabel: null != h ? h.label : void 0,
                        disabled: (a && !m) || null != h,
                        selected: m,
                        onPressDestination: r,
                        "aria-posinset": s + 1,
                        "aria-setsize": t.length,
                    };
                return i === S.rD.USER
                    ? (0, n.jsx)(W, { user: u, ...f })
                    : i === S.rD.GROUP_DM
                      ? (0, n.jsx)(B, { channel: u, ...f })
                      : i === S.rD.TEXT_CHANNEL || i === S.rD.VOICE_CHANNEL
                        ? (0, n.jsx)(F, { channel: u, ...f })
                        : void (0, G.xb)(i);
            },
            [a, r, t, d],
        ),
        m = s.useRef(null),
        f = (0, p.A)("share-command-modal", m);
    return (0, n.jsx)(c.hD, {
        navigator: f,
        children: (0, n.jsx)(c.PR, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, n.jsx)(A.OZ, {
                    ref: (e) => {
                        (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...l,
                    ...i,
                    sections: u,
                    sectionHeight: 0,
                    renderRow: h,
                    rowHeight: o,
                });
            },
        }),
    });
}
