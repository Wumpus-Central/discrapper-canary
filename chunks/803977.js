l.d(t, { default: () => eu });
var s = l(627968),
    a = l(64700),
    n = l(189213),
    r = l(17928),
    i = l(691540),
    c = l(857250),
    u = l(97483),
    d = l(834730),
    o = l(892547),
    m = l(720149),
    x = l(342384),
    h = l(429913),
    b = l(451909),
    A = l(223863),
    f = l(151054),
    g = l(734057),
    p = l(287809),
    C = l(957565),
    j = l(403362),
    E = l(833291),
    N = l(998218),
    S = l(375708);
let k = [E.ts];
var v = l(503698),
    L = l.n(v),
    y = l(989349),
    P = l.n(y),
    _ = l(837381),
    D = l(939249),
    T = l(658675),
    G = l(778712),
    M = l(56059),
    R = l(276293),
    U = l(661531),
    w = l(475825),
    I = l(966327),
    H = l(928039),
    z = l(115718),
    q = l(47167),
    B = l(598104),
    F = l(255266),
    V = l(72563),
    Z = l(95701),
    O = l(71393),
    Q = l(576705),
    X = l(290863),
    J = l(222823),
    W = l(994500),
    $ = l(58703),
    Y = l(427262),
    K = l(652215),
    ee = l(790782),
    et = l(894385);
function el(e) {
    let {
            destination: t,
            icon: l,
            label: n,
            subLabel: r,
            selected: i,
            disabled: c,
            onPressDestination: u,
            "aria-setsize": o,
            "aria-posinset": m,
        } = e,
        x = (0, _.rm)(t.id),
        h = a.useCallback(() => {
            c || u?.(t);
        }, [u, c, t]);
    return (0, s.jsxs)(D.D, {
        className: L()(et.HP, { [et.r9]: c }),
        onClick: h,
        "aria-selected": i,
        "aria-setsize": o,
        "aria-posinset": m,
        ...x,
        children: [
            (0, s.jsxs)("div", {
                className: et.D_,
                children: [
                    (0, s.jsx)("div", { className: et.P0, children: l }),
                    (0, s.jsxs)("div", {
                        className: et.WD,
                        children: [
                            (0, s.jsx)(d.E, {
                                tag: "strong",
                                className: et.Pf,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: n,
                            }),
                            (0, s.jsx)(d.E, {
                                className: et.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: et.kv, children: (0, s.jsx)(T.P, { checked: i }) }),
        ],
    });
}
function es(e) {
    let { user: t, subLabel: l, ...a } = e,
        n = Y.Ay.useName(t),
        i = Y.Ay.useUserTag(t, { decoration: "never" }),
        c = (0, r.bG)([W.A], () => W.A.getNickname(t.id)),
        u = (0, r.bG)([X.A], () => X.A.getStatus(t.id));
    return (0, s.jsx)(el, {
        ...a,
        icon: (0, s.jsx)(I.A, { "aria-hidden": !0, size: G._3.SIZE_32, user: t, status: u }),
        label: c ?? n,
        subLabel: l ?? i,
    });
}
function ea(e) {
    let { channel: t, subLabel: l, ...a } = e,
        n = (0, q.Ay)(t),
        r = (0, V.i)(t);
    return (0, s.jsx)(el, {
        ...a,
        icon: (0, s.jsx)(B.A, { "aria-hidden": !0, size: G._3.SIZE_32, channel: t }),
        label: n,
        subLabel: l ?? r,
    });
}
function en(e) {
    let { channel: t, subLabel: l, ...a } = e,
        n = (0, r.bG)([O.A], () => O.A.getGuild(t?.guild_id)),
        i = (0, q.Ay)(t),
        c = (0, r.bG)([g.A, p.default, W.A], () => {
            let e = g.A.getChannel(t.parent_id);
            return null == e ? null : (0, q.m1)(e, p.default, W.A, !1);
        }),
        u = (0, r.bG)([J.Ay], () => J.Ay.lastMessageTimestamp(t.id, ee.P.CHANNEL)),
        o = n?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? M.b : R.N;
        o = (0, s.jsxs)("div", {
            className: et.vr,
            children: [
                (0, s.jsx)(e, { color: U.A.colors.TEXT_SUBTLE, className: et.Q9 }),
                (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: c }),
                null != u
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(d.E, {
                                  className: et.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, s.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, $.Fe)(P()(u)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, s.jsx)(el, {
        ...a,
        icon: (0, s.jsx)(F.A, { size: F.q.SMALL_32, guild: n, channel: t }),
        label: i,
        subLabel: l ?? o,
    });
}
function er(e) {
    let { rowData: t, selectedDestinations: l, handleToggleDestination: n, disableSelection: r, ...i } = e,
        c = a.useMemo(() => [t.length], [t.length]),
        u = a.useCallback(() => 48, []),
        d = a.useMemo(() => l?.map(A.I) ?? [], [l]),
        o = a.useCallback(
            (e) => {
                let { section: l, row: a } = e;
                if (l > 0) return;
                let { type: i, record: c } = t[a];
                if (i === z.rD.HEADER) return;
                let u = i === z.rD.USER ? { type: "user", id: c.id } : { type: "channel", id: c.id },
                    o = (0, A.I)(u),
                    m = (function (e) {
                        if (
                            e instanceof Z.YB &&
                            (0, Z.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(Q.A.can(K.xBc.MANAGE_CHANNELS, e) || Q.A.can(K.xBc.MANAGE_MESSAGES, e))
                        )
                            return { label: S.intl.string(S.t.Icu3bf) };
                    })(c),
                    x = d.includes(o),
                    h = {
                        key: o,
                        destination: u,
                        subLabel: null != m ? m.label : void 0,
                        disabled: (r && !x) || null != m,
                        selected: x,
                        onPressDestination: n,
                        "aria-posinset": a + 1,
                        "aria-setsize": t.length,
                    };
                switch (i) {
                    case z.rD.USER:
                        return (0, s.jsx)(es, { user: c, ...h });
                    case z.rD.GROUP_DM:
                        return (0, s.jsx)(ea, { channel: c, ...h });
                    case z.rD.TEXT_CHANNEL:
                    case z.rD.VOICE_CHANNEL:
                        return (0, s.jsx)(en, { channel: c, ...h });
                    default:
                        return (0, j.xb)(i);
                }
            },
            [r, n, t, d],
        ),
        m = a.useRef(null),
        x = (0, H.A)("share-command-modal", m);
    return (0, s.jsx)(_.hD, {
        navigator: x,
        children: (0, s.jsx)(_.PR, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, s.jsx)(w.OZ, {
                    ref: (e) => {
                        (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...l,
                    ...i,
                    sections: c,
                    sectionHeight: 0,
                    renderRow: o,
                    rowHeight: u,
                });
            },
        }),
    });
}
var ei = l(381941),
    ec = l(119390);
function eu(e) {
    let {
            applicationId: t,
            customId: l,
            linkId: E,
            message: v,
            onClose: L,
            onCopyLink: y,
            onShare: P,
            transitionState: _,
        } = e,
        [D] = (0, h.A)([t]),
        T = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        [G, M] = a.useState(!1),
        [R, U] = a.useState(""),
        [w, I] = a.useState("");
    a.useEffect(() => {
        I((0, x.W)({ applicationId: t, referrerId: T?.id, customId: l, linkId: E }));
    }, [t, T, l, E, I]);
    let H = a.useRef(0),
        [z, q] = a.useState([]),
        B = z.length,
        F = B >= 5;
    a.useEffect(() => {
        "" === R && V.current?.focus();
    }, [R]);
    let V = a.useRef(null),
        { results: Z, updateSearchText: O } = (0, f.R)({ selectedDestinations: z, includeMissingDMs: !0 }),
        Q = a.useCallback(
            (e) => {
                U(e), O(e);
            },
            [U, O],
        ),
        X = a.useCallback(() => {
            Q("");
        }, [Q]),
        J = a.useCallback(
            (e) => {
                q((t) => {
                    let l = t.findIndex((t) => {
                        let { type: l, id: s } = t;
                        return l === e.type && s === e.id;
                    });
                    if (-1 === l) return F ? t : (U(""), (H.current += 1), [e, ...t]);
                    let s = [...t];
                    return s.splice(l, 1), (H.current += 1), s;
                });
            },
            [F],
        ),
        W = a.useCallback(
            async (e) => {
                if (null == D) return;
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
                })(v, D, w);
                M(!0),
                    (await Promise.all(e.map(A.pk))).filter(j.Vq).forEach(async (e) => {
                        let l = g.A.getChannel(e);
                        null != l &&
                            (await m.A.sendMessage(e, b.Ay.parse(l, t), !1, { location: ei.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.P0)(
                        (0, c.o)(S.intl.formatToPlainString(S.t.jQULqL, { applicationName: D.name }), u.Ck.SUCCESS),
                    ),
                    P(!0),
                    L();
            },
            [v, w, L, P, D],
        ),
        $ = a.useCallback(() => {
            (0, C.C)(w, () => {
                y(), (0, i.P0)((0, c.o)(S.intl.string(S.t.t5VZ88), u.Ck.SUCCESS));
            });
        }, [w, y]),
        Y =
            Z.length > 0
                ? (0, s.jsx)(er, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: Z,
                      handleToggleDestination: J,
                      selectedDestinations: z,
                      disableSelection: F,
                  })
                : (0, s.jsxs)("div", {
                      className: et.wV,
                      children: [
                          (0, s.jsx)("img", { className: et.BJ, src: ec, alt: "" }),
                          (0, s.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, s.jsx)(n.Modal, {
        transitionState: _,
        onClose: L,
        title: S.intl.string(S.t.r9qKow),
        subtitle: v,
        size: "md",
        input: (0, s.jsx)(o.I, {
            ref: V,
            query: R,
            onChange: Q,
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
                loading: G,
                disabled: !(B > 0),
            },
        ],
        children: Y,
    });
}
