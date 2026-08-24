l.d(t, { default: () => eu });
var s = l(477900),
    a = l(582128),
    n = l(189213),
    r = l(17928),
    i = l(691540),
    u = l(857250),
    c = l(97483),
    d = l(834730),
    o = l(683438),
    m = l(148494),
    x = l(342384),
    h = l(429913),
    b = l(451909),
    f = l(223863),
    g = l(151054),
    p = l(734057),
    A = l(287809),
    j = l(957565),
    C = l(403362),
    E = l(833291),
    N = l(998218),
    S = l(375708);
let k = [E.ts];
var v = l(503698),
    y = l.n(v),
    L = l(989349),
    P = l.n(L),
    D = l(837381),
    _ = l(939249),
    T = l(658675),
    R = l(778712),
    U = l(56059),
    w = l(276293),
    I = l(661531),
    G = l(475825),
    M = l(966327),
    H = l(928039),
    z = l(115718),
    F = l(47167),
    q = l(960850),
    V = l(598104),
    Z = l(255266),
    O = l(72563),
    Q = l(95701),
    B = l(71393),
    X = l(290863),
    J = l(573163),
    W = l(994500),
    $ = l(58703),
    Y = l(427262),
    K = l(790782),
    ee = l(472234);
function et(e) {
    let {
            destination: t,
            icon: l,
            label: n,
            subLabel: r,
            selected: i,
            disabled: u,
            onPressDestination: c,
            "aria-setsize": o,
            "aria-posinset": m,
        } = e,
        x = (0, D.rm)(t.id),
        h = a.useCallback(() => {
            u || c?.(t);
        }, [c, u, t]);
    return (0, s.jsxs)(_.D, {
        className: y()(ee.HP, { [ee.r9]: u }),
        onClick: h,
        "aria-selected": i,
        "aria-setsize": o,
        "aria-posinset": m,
        ...x,
        children: [
            (0, s.jsxs)("div", {
                className: ee.D_,
                children: [
                    (0, s.jsx)("div", { className: ee.P0, children: l }),
                    (0, s.jsxs)("div", {
                        className: ee.WD,
                        children: [
                            (0, s.jsx)(d.E, {
                                tag: "strong",
                                className: ee.Pf,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: n,
                            }),
                            (0, s.jsx)(d.E, {
                                className: ee.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: ee.kv, children: (0, s.jsx)(T.P, { checked: i }) }),
        ],
    });
}
function el(e) {
    let { user: t, subLabel: l, ...a } = e,
        n = Y.Ay.useName(t),
        i = Y.Ay.useUserTag(t, { decoration: "never" }),
        u = (0, r.bG)([W.A], () => W.A.getNickname(t.id)),
        c = (0, r.bG)([X.A], () => X.A.getStatus(t.id));
    return (0, s.jsx)(et, {
        ...a,
        icon: (0, s.jsx)(M.A, { "aria-hidden": !0, size: R._3.SIZE_32, user: t, status: c }),
        label: u ?? n,
        subLabel: l ?? i,
    });
}
function es(e) {
    let { channel: t, subLabel: l, ...a } = e,
        n = (0, F.Ay)(t),
        r = (0, O.i)(t);
    return (0, s.jsx)(et, {
        ...a,
        icon: (0, s.jsx)(V.A, { "aria-hidden": !0, size: R._3.SIZE_32, channel: t }),
        label: n,
        subLabel: l ?? r,
    });
}
function ea(e) {
    let { channel: t, subLabel: l, ...a } = e,
        n = (0, r.bG)([B.A], () => B.A.getGuild(t?.guild_id)),
        i = (0, F.Ay)(t),
        u = (0, r.bG)([p.A, A.default, W.A], () => {
            let e = p.A.getChannel(t.parent_id);
            return null == e ? null : (0, F.m1)(e, A.default, W.A, !1);
        }),
        c = (0, r.bG)([J.Ay], () => J.Ay.lastMessageTimestamp(t.id, K.P.CHANNEL)),
        o = n?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? U.b : w.N;
        o = (0, s.jsxs)("div", {
            className: ee.vr,
            children: [
                (0, s.jsx)(e, { color: I.A.colors.TEXT_SUBTLE, className: ee.Q9 }),
                (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: u }),
                null != c
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(d.E, {
                                  className: ee.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, s.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, $.Fe)(P()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, s.jsx)(et, {
        ...a,
        icon: (0, s.jsx)(Z.A, { size: Z.q.SMALL_32, guild: n, channel: t }),
        label: i,
        subLabel: l ?? o,
    });
}
function en(e) {
    let { rowData: t, selectedDestinations: l, handleToggleDestination: n, disableSelection: r, ...i } = e,
        u = a.useMemo(() => [t.length], [t.length]),
        c = a.useCallback(() => 48, []),
        d = a.useMemo(() => l?.map(f.I) ?? [], [l]),
        o = a.useCallback(
            (e) => {
                let { section: l, row: a } = e;
                if (l > 0) return;
                let { type: i, record: u } = t[a];
                if (i === z.rD.HEADER) return;
                let c = i === z.rD.USER ? { type: "user", id: u.id } : { type: "channel", id: u.id },
                    o = (0, f.I)(c),
                    m = (function (e) {
                        if (
                            e instanceof Q.YB &&
                            (0, Q.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(0, q.F3)(e)
                        )
                            return { label: S.intl.string(S.t.Icu3bf) };
                    })(u),
                    x = d.includes(o),
                    h = {
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
                    case z.rD.USER:
                        return (0, s.jsx)(el, { user: u, ...h });
                    case z.rD.GROUP_DM:
                        return (0, s.jsx)(es, { channel: u, ...h });
                    case z.rD.TEXT_CHANNEL:
                    case z.rD.VOICE_CHANNEL:
                        return (0, s.jsx)(ea, { channel: u, ...h });
                    default:
                        return (0, C.xb)(i);
                }
            },
            [r, n, t, d],
        ),
        m = a.useRef(null),
        x = (0, H.A)("share-command-modal", m);
    return (0, s.jsx)(D.hD, {
        navigator: x,
        children: (0, s.jsx)(D.PR, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, s.jsx)(G.OZ, {
                    ref: (e) => {
                        (m.current = e), (t.current = e?.getScrollerNode() ?? null);
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
var er = l(381941),
    ei = l(119390);
function eu(e) {
    let {
            applicationId: t,
            customId: l,
            linkId: E,
            message: v,
            onClose: y,
            onCopyLink: L,
            onShare: P,
            transitionState: D,
        } = e,
        [_] = (0, h.A)([t]),
        T = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
        [R, U] = a.useState(!1),
        [w, I] = a.useState(""),
        [G, M] = a.useState("");
    a.useEffect(() => {
        M((0, x.W)({ applicationId: t, referrerId: T?.id, customId: l, linkId: E }));
    }, [t, T, l, E, M]);
    let H = a.useRef(0),
        [z, F] = a.useState([]),
        q = z.length,
        V = q >= 5;
    a.useEffect(() => {
        "" === w && Z.current?.focus();
    }, [w]);
    let Z = a.useRef(null),
        { results: O, updateSearchText: Q } = (0, g.R)({ selectedDestinations: z, includeMissingDMs: !0 }),
        B = a.useCallback(
            (e) => {
                I(e), Q(e);
            },
            [I, Q],
        ),
        X = a.useCallback(() => {
            B("");
        }, [B]),
        J = a.useCallback(
            (e) => {
                F((t) => {
                    let l = t.findIndex((t) => {
                        let { type: l, id: s } = t;
                        return l === e.type && s === e.id;
                    });
                    if (-1 === l) return V ? t : (I(""), (H.current += 1), [e, ...t]);
                    let s = [...t];
                    return s.splice(l, 1), (H.current += 1), s;
                });
            },
            [V],
        ),
        W = a.useCallback(
            async (e) => {
                if (null == _) return;
                let t = (function (e, t, l) {
                    let s = !1,
                        a = e.replaceAll(N.A.URL_REGEX, (e) => {
                            let t = k.some((t) => null != t(e));
                            return t && (s = !0), t ? e : `\`${e}\``;
                        });
                    if (s) return a;
                    let n = S.intl.formatToMarkdownString(S.t.dZJpdG, { applicationName: t.name, link: l });
                    return `${a}

${n}`;
                })(v, _, G);
                U(!0),
                    (await Promise.all(e.map(f.pk))).filter(C.Vq).forEach(async (e) => {
                        let l = p.A.getChannel(e);
                        null != l &&
                            (await m.A.sendMessage(e, b.Ay.parse(l, t), !1, { location: er.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.P0)(
                        (0, u.o)(S.intl.formatToPlainString(S.t.jQULqL, { applicationName: _.name }), c.Ck.SUCCESS),
                    ),
                    P(!0),
                    y();
            },
            [v, G, y, P, _],
        ),
        $ = a.useCallback(() => {
            (0, j.C)(G, () => {
                L(), (0, i.P0)((0, u.o)(S.intl.string(S.t.t5VZ88), c.Ck.SUCCESS));
            });
        }, [G, L]),
        Y =
            O.length > 0
                ? (0, s.jsx)(en, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: O,
                      handleToggleDestination: J,
                      selectedDestinations: z,
                      disableSelection: V,
                  })
                : (0, s.jsxs)("div", {
                      className: ee.wV,
                      children: [
                          (0, s.jsx)("img", { className: ee.BJ, src: ei, alt: "" }),
                          (0, s.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, s.jsx)(n.Modal, {
        transitionState: D,
        onClose: y,
        title: S.intl.string(S.t.r9qKow),
        subtitle: v,
        size: "md",
        input: (0, s.jsx)(o.I, {
            ref: Z,
            query: w,
            onChange: B,
            onClear: X,
            placeholder: S.intl.string(S.t["5h0QOP"]),
            "aria-label": S.intl.string(S.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            { text: S.intl.string(S.t.WqhZss), variant: "secondary", onClick: $ },
            {
                text: S.intl.string(S.t.TXNS7S),
                variant: "primary",
                onClick: () => W(z),
                loading: R,
                disabled: !(q > 0),
            },
        ],
        children: Y,
    });
}
