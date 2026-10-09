s.d(t, { default: () => er });
var l = s(477900),
    a = s(582128),
    n = s(17928),
    r = s(189213),
    i = s(858899),
    u = s(834730),
    c = s(683438),
    d = s(148494),
    o = s(342384),
    m = s(429913),
    x = s(451909),
    h = s(446244),
    b = s(151054),
    f = s(734057),
    g = s(287809),
    p = s(957565),
    A = s(403362),
    j = s(721779),
    C = s(998218),
    E = s(660183);
let N = [j.ts];
var v = s(503698),
    k = s.n(v),
    S = s(536637),
    y = s.n(S),
    L = s(837381),
    P = s(939249),
    D = s(658675),
    _ = s(778712),
    T = s(56059),
    R = s(276293),
    w = s(661531),
    I = s(475825),
    G = s(966327),
    U = s(928039),
    H = s(115718),
    M = s(47167),
    z = s(960850),
    F = s(598104),
    q = s(255266),
    V = s(72563),
    Z = s(95701),
    O = s(71393),
    Q = s(290863),
    B = s(573163),
    X = s(994500),
    J = s(58703),
    W = s(427262),
    $ = s(790782),
    Y = s(472234);
function K(e) {
    let {
            destination: t,
            icon: s,
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
    return (0, l.jsxs)(P.D, {
        className: k()(Y.HP, { [Y.r9]: c }),
        onClick: h,
        "aria-selected": i,
        "aria-setsize": o,
        "aria-posinset": m,
        ...x,
        children: [
            (0, l.jsxs)("div", {
                className: Y.D_,
                children: [
                    (0, l.jsx)("div", { className: Y.P0, children: s }),
                    (0, l.jsxs)("div", {
                        className: Y.WD,
                        children: [
                            (0, l.jsx)(u.E, {
                                tag: "strong",
                                className: Y.Pf,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: n,
                            }),
                            (0, l.jsx)(u.E, {
                                className: Y.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: Y.kv, children: (0, l.jsx)(D.P, { checked: i }) }),
        ],
    });
}
function ee(e) {
    let { user: t, subLabel: s, ...a } = e,
        r = W.Ay.useName(t),
        i = W.Ay.useUserTag(t, { decoration: "never" }),
        u = (0, n.bG)([X.A], () => X.A.getNickname(t.id)),
        c = (0, n.bG)([Q.A], () => Q.A.getStatus(t.id));
    return (0, l.jsx)(K, {
        ...a,
        icon: (0, l.jsx)(G.A, { "aria-hidden": !0, size: _._3.SIZE_32, user: t, status: c }),
        label: u ?? r,
        subLabel: s ?? i,
    });
}
function et(e) {
    let { channel: t, subLabel: s, ...a } = e,
        n = (0, M.Ay)(t),
        r = (0, V.i)(t);
    return (0, l.jsx)(K, {
        ...a,
        icon: (0, l.jsx)(F.A, { "aria-hidden": !0, size: _._3.SIZE_32, channel: t }),
        label: n,
        subLabel: s ?? r,
    });
}
function es(e) {
    let { channel: t, subLabel: s, ...a } = e,
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
        o = (0, l.jsxs)("div", {
            className: Y.vr,
            children: [
                (0, l.jsx)(e, { color: w.A.colors.TEXT_SUBTLE, className: Y.Q9 }),
                (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: c }),
                null != d
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.E, {
                                  className: Y.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(u.E, {
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
    return (0, l.jsx)(K, {
        ...a,
        icon: (0, l.jsx)(q.A, { size: q.q.SMALL_32, guild: r, channel: t }),
        label: i,
        subLabel: s ?? o,
    });
}
function el(e) {
    let { rowData: t, selectedDestinations: s, handleToggleDestination: n, disableSelection: r, ...i } = e,
        u = a.useMemo(() => [t.length], [t.length]),
        c = a.useCallback(() => 48, []),
        d = a.useMemo(() => s?.map(h.I) ?? [], [s]),
        o = a.useCallback(
            (e) => {
                let { section: s, row: a } = e;
                if (s > 0) return;
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
                        return (0, l.jsx)(ee, { user: u, ...b });
                    case H.rD.GROUP_DM:
                        return (0, l.jsx)(et, { channel: u, ...b });
                    case H.rD.TEXT_CHANNEL:
                    case H.rD.VOICE_CHANNEL:
                        return (0, l.jsx)(es, { channel: u, ...b });
                    default:
                        return (0, A.xb)(i);
                }
            },
            [r, n, t, d],
        ),
        m = a.useRef(null),
        x = (0, U.A)("share-command-modal", m);
    return (0, l.jsx)(L.hD, {
        navigator: x,
        children: (0, l.jsx)(L.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, l.jsx)(I.OZ, {
                    ref: (e) => {
                        ((m.current = e), (t.current = e?.getScrollerNode() ?? null));
                    },
                    ...s,
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
var ea = s(381941),
    en = s(119390);
function er(e) {
    let {
            applicationId: t,
            customId: s,
            linkId: j,
            message: v,
            onClose: k,
            onCopyLink: S,
            onShare: y,
            transitionState: L,
        } = e,
        [P] = (0, m.A)([t]),
        D = (0, n.bG)([g.default], () => g.default.getCurrentUser()),
        [_, T] = a.useState(!1),
        [R, w] = a.useState(""),
        [I, G] = a.useState("");
    a.useEffect(() => {
        G((0, o.W)({ applicationId: t, referrerId: D?.id, customId: s, linkId: j }));
    }, [t, D, s, j, G]);
    let U = a.useRef(0),
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
                (w(e), Z(e));
            },
            [w, Z],
        ),
        Q = a.useCallback(() => {
            O("");
        }, [O]),
        B = a.useCallback(
            (e) => {
                M((t) => {
                    let s = t.findIndex((t) => {
                        let { type: s, id: l } = t;
                        return s === e.type && l === e.id;
                    });
                    if (-1 === s) return F ? t : (w(""), (U.current += 1), [e, ...t]);
                    let l = [...t];
                    return (l.splice(s, 1), (U.current += 1), l);
                });
            },
            [F],
        ),
        X = a.useCallback(
            async (e) => {
                if (null == P) return;
                let t = (function (e, t, s) {
                    let l = !1,
                        a = e.replaceAll(C.A.URL_REGEX, (e) => {
                            let t = N.some((t) => null != t(e));
                            return (t && (l = !0), t ? e : `\`${e}\``);
                        });
                    if (l) return a;
                    let n = E.intl.formatToMarkdownString(E.t.dZJpdG, { applicationName: t.name, link: s });
                    return `${a}

${n}`;
                })(v, P, I);
                (T(!0),
                    (await Promise.all(e.map(h.pk))).filter(A.Vq).forEach(async (e) => {
                        let s = f.A.getChannel(e);
                        null != s &&
                            (await d.A.sendMessage(e, x.Ay.parse(s, t), !1, { location: ea.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.P0)({
                        text: E.intl.formatToPlainString(E.t.jQULqL, { applicationName: P.name }),
                        variant: "success",
                    }),
                    y(!0),
                    k());
            },
            [v, I, k, y, P],
        ),
        J = a.useCallback(() => {
            (0, p.C)(I, () => {
                (S(), (0, i.P0)({ text: E.intl.string(E.t.t5VZ88), variant: "success" }));
            });
        }, [I, S]),
        W =
            V.length > 0
                ? (0, l.jsx)(el, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: V,
                      handleToggleDestination: B,
                      selectedDestinations: H,
                      disableSelection: F,
                  })
                : (0, l.jsxs)("div", {
                      className: Y.wV,
                      children: [
                          (0, l.jsx)("img", { className: Y.BJ, src: en, alt: "" }),
                          (0, l.jsx)(u.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(E.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, l.jsx)(r.a, {
        transitionState: L,
        onClose: k,
        title: E.intl.string(E.t.r9qKow),
        subtitle: v,
        size: "md",
        input: (0, l.jsx)(c.I, {
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
