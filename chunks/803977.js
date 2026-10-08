l.d(t, { default: () => er });
var s = l(477900),
    a = l(582128),
    n = l(17928),
    r = l(189213),
    i = l(376357),
    u = l(834730),
    c = l(683438),
    d = l(148494),
    o = l(342384),
    m = l(429913),
    x = l(451909),
    h = l(446244),
    b = l(151054),
    f = l(734057),
    g = l(287809),
    p = l(957565),
    A = l(403362),
    j = l(721779),
    C = l(998218),
    E = l(660183);
let N = [j.ts];
var S = l(503698),
    k = l.n(S),
    v = l(536637),
    y = l.n(v),
    L = l(837381),
    P = l(939249),
    D = l(658675),
    _ = l(778712),
    T = l(56059),
    R = l(276293),
    U = l(661531),
    w = l(475825),
    I = l(966327),
    G = l(928039),
    H = l(115718),
    M = l(47167),
    z = l(960850),
    F = l(598104),
    q = l(255266),
    V = l(72563),
    Z = l(95701),
    O = l(71393),
    Q = l(290863),
    B = l(573163),
    X = l(994500),
    J = l(58703),
    W = l(427262),
    $ = l(790782),
    Y = l(472234);
function K(e) {
    let {
            destination: t,
            icon: l,
            label: n,
            subLabel: r,
            selected: i,
            disabled: c,
            onPressDestination: d,
            "aria-setsize": o,
            "aria-posinset": m,
        } = e,
        x = (0, L.rm)(t.id),
        h = a.useCallback(() => {
            c || d?.(t);
        }, [d, c, t]);
    return (0, s.jsxs)(P.D, {
        className: k()(Y.HP, { [Y.r9]: c }),
        onClick: h,
        "aria-selected": i,
        "aria-setsize": o,
        "aria-posinset": m,
        ...x,
        children: [
            (0, s.jsxs)("div", {
                className: Y.D_,
                children: [
                    (0, s.jsx)("div", { className: Y.P0, children: l }),
                    (0, s.jsxs)("div", {
                        className: Y.WD,
                        children: [
                            (0, s.jsx)(u.E, {
                                tag: "strong",
                                className: Y.Pf,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: n,
                            }),
                            (0, s.jsx)(u.E, {
                                className: Y.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: Y.kv, children: (0, s.jsx)(D.P, { checked: i }) }),
        ],
    });
}
function ee(e) {
    let { user: t, subLabel: l, ...a } = e,
        r = W.Ay.useName(t),
        i = W.Ay.useUserTag(t, { decoration: "never" }),
        u = (0, n.bG)([X.A], () => X.A.getNickname(t.id)),
        c = (0, n.bG)([Q.A], () => Q.A.getStatus(t.id));
    return (0, s.jsx)(K, {
        ...a,
        icon: (0, s.jsx)(I.A, { "aria-hidden": !0, size: _._3.SIZE_32, user: t, status: c }),
        label: u ?? r,
        subLabel: l ?? i,
    });
}
function et(e) {
    let { channel: t, subLabel: l, ...a } = e,
        n = (0, M.Ay)(t),
        r = (0, V.i)(t);
    return (0, s.jsx)(K, {
        ...a,
        icon: (0, s.jsx)(F.A, { "aria-hidden": !0, size: _._3.SIZE_32, channel: t }),
        label: n,
        subLabel: l ?? r,
    });
}
function el(e) {
    let { channel: t, subLabel: l, ...a } = e,
        r = (0, n.bG)([O.A], () => O.A.getGuild(t?.guild_id)),
        i = (0, M.Ay)(t),
        c = (0, n.bG)([f.A, g.default, X.A], () => {
            let e = f.A.getChannel(t.parent_id);
            return null == e ? null : (0, M.m1)(e, g.default, X.A, !1);
        }),
        d = (0, n.bG)([B.Ay], () => B.Ay.lastMessageTimestamp(t.id, $.P.CHANNEL)),
        o = r?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? T.b : R.N;
        o = (0, s.jsxs)("div", {
            className: Y.vr,
            children: [
                (0, s.jsx)(e, { color: U.A.colors.TEXT_SUBTLE, className: Y.Q9 }),
                (0, s.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: c }),
                null != d
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(u.E, {
                                  className: Y.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, s.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, J.Fe)(y()(d)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, s.jsx)(K, {
        ...a,
        icon: (0, s.jsx)(q.A, { size: q.q.SMALL_32, guild: r, channel: t }),
        label: i,
        subLabel: l ?? o,
    });
}
function es(e) {
    let { rowData: t, selectedDestinations: l, handleToggleDestination: n, disableSelection: r, ...i } = e,
        u = a.useMemo(() => [t.length], [t.length]),
        c = a.useCallback(() => 48, []),
        d = a.useMemo(() => l?.map(h.I) ?? [], [l]),
        o = a.useCallback(
            (e) => {
                let { section: l, row: a } = e;
                if (l > 0) return;
                let { type: i, record: u } = t[a];
                if (i === H.rD.HEADER) return;
                let c = i === H.rD.USER ? { type: "user", id: u.id } : { type: "channel", id: u.id },
                    o = (0, h.I)(c),
                    m = (function (e) {
                        if (
                            e instanceof Z.YB &&
                            (0, Z.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(0, z.F3)(e)
                        )
                            return { label: E.intl.string(E.t.Icu3bf) };
                    })(u),
                    x = d.includes(o),
                    b = {
                        key: o,
                        destination: c,
                        subLabel: null != m ? m.label : void 0,
                        disabled: (r && !x) || null != m,
                        selected: x,
                        onPressDestination: n,
                        "aria-posinset": a + 1,
                        "aria-setsize": t.length,
                    };
                switch (i) {
                    case H.rD.USER:
                        return (0, s.jsx)(ee, { user: u, ...b });
                    case H.rD.GROUP_DM:
                        return (0, s.jsx)(et, { channel: u, ...b });
                    case H.rD.TEXT_CHANNEL:
                    case H.rD.VOICE_CHANNEL:
                        return (0, s.jsx)(el, { channel: u, ...b });
                    default:
                        return (0, A.xb)(i);
                }
            },
            [r, n, t, d],
        ),
        m = a.useRef(null),
        x = (0, G.A)("share-command-modal", m);
    return (0, s.jsx)(L.hD, {
        navigator: x,
        children: (0, s.jsx)(L.PR, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, s.jsx)(w.OZ, {
                    ref: (e) => {
                        ((m.current = e), (t.current = e?.getScrollerNode() ?? null));
                    },
                    ...l,
                    ...i,
                    sections: u,
                    sectionHeight: 0,
                    renderRow: o,
                    rowHeight: c,
                });
            },
        }),
    });
}
var ea = l(381941),
    en = l(119390);
function er(e) {
    let {
            applicationId: t,
            customId: l,
            linkId: j,
            message: S,
            onClose: k,
            onCopyLink: v,
            onShare: y,
            transitionState: L,
        } = e,
        [P] = (0, m.A)([t]),
        D = (0, n.bG)([g.default], () => g.default.getCurrentUser()),
        [_, T] = a.useState(!1),
        [R, U] = a.useState(""),
        [w, I] = a.useState("");
    a.useEffect(() => {
        I((0, o.W)({ applicationId: t, referrerId: D?.id, customId: l, linkId: j }));
    }, [t, D, l, j, I]);
    let G = a.useRef(0),
        [H, M] = a.useState([]),
        z = H.length,
        F = z >= 5;
    a.useEffect(() => {
        "" === R && q.current?.focus();
    }, [R]);
    let q = a.useRef(null),
        { results: V, updateSearchText: Z } = (0, b.R)({ selectedDestinations: H, includeMissingDMs: !0 }),
        O = a.useCallback(
            (e) => {
                (U(e), Z(e));
            },
            [U, Z],
        ),
        Q = a.useCallback(() => {
            O("");
        }, [O]),
        B = a.useCallback(
            (e) => {
                M((t) => {
                    let l = t.findIndex((t) => {
                        let { type: l, id: s } = t;
                        return l === e.type && s === e.id;
                    });
                    if (-1 === l) return F ? t : (U(""), (G.current += 1), [e, ...t]);
                    let s = [...t];
                    return (s.splice(l, 1), (G.current += 1), s);
                });
            },
            [F],
        ),
        X = a.useCallback(
            async (e) => {
                if (null == P) return;
                let t = (function (e, t, l) {
                    let s = !1,
                        a = e.replaceAll(C.A.URL_REGEX, (e) => {
                            let t = N.some((t) => null != t(e));
                            return (t && (s = !0), t ? e : `\`${e}\``);
                        });
                    if (s) return a;
                    let n = E.intl.formatToMarkdownString(E.t.dZJpdG, { applicationName: t.name, link: l });
                    return `${a}

${n}`;
                })(S, P, w);
                (T(!0),
                    (await Promise.all(e.map(h.pk))).filter(A.Vq).forEach(async (e) => {
                        let l = f.A.getChannel(e);
                        null != l &&
                            (await d.A.sendMessage(e, x.Ay.parse(l, t), !1, { location: ea.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.P0)(
                        (0, i.ox)(E.intl.formatToPlainString(E.t.jQULqL, { applicationName: P.name }), i.Ck.SUCCESS),
                    ),
                    y(!0),
                    k());
            },
            [S, w, k, y, P],
        ),
        J = a.useCallback(() => {
            (0, p.C)(w, () => {
                (v(), (0, i.P0)((0, i.ox)(E.intl.string(E.t.t5VZ88), i.Ck.SUCCESS)));
            });
        }, [w, v]),
        W =
            V.length > 0
                ? (0, s.jsx)(es, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: V,
                      handleToggleDestination: B,
                      selectedDestinations: H,
                      disableSelection: F,
                  })
                : (0, s.jsxs)("div", {
                      className: Y.wV,
                      children: [
                          (0, s.jsx)("img", { className: Y.BJ, src: en, alt: "" }),
                          (0, s.jsx)(u.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(E.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, s.jsx)(r.a, {
        transitionState: L,
        onClose: k,
        title: E.intl.string(E.t.r9qKow),
        subtitle: S,
        size: "md",
        input: (0, s.jsx)(c.I, {
            ref: q,
            query: R,
            onChange: O,
            onClear: Q,
            placeholder: E.intl.string(E.t["5h0QOP"]),
            "aria-label": E.intl.string(E.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            { text: E.intl.string(E.t.WqhZss), variant: "secondary", onClick: J },
            {
                text: E.intl.string(E.t.TXNS7S),
                variant: "primary",
                onClick: () => X(H),
                loading: _,
                disabled: !(z > 0),
            },
        ],
        children: W,
    });
}
