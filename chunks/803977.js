l.d(t, { default: () => ec });
var s = l(627968),
    n = l(64700),
    a = l(189213),
    i = l(17928),
    r = l(691540),
    u = l(857250),
    c = l(97483),
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
    I = l(475825),
    w = l(966327),
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
            label: a,
            subLabel: i,
            selected: r,
            disabled: u,
            onPressDestination: c,
            "aria-setsize": o,
            "aria-posinset": m,
        } = e,
        x = (0, _.rm)(t.id),
        h = n.useCallback(() => {
            u || c?.(t);
        }, [c, u, t]);
    return (0, s.jsxs)(D.D, {
        className: L()(et.HP, { [et.r9]: u }),
        onClick: h,
        "aria-selected": r,
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
                                children: a,
                            }),
                            (0, s.jsx)(d.E, {
                                className: et.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: et.kv, children: (0, s.jsx)(T.P, { checked: r }) }),
        ],
    });
}
function es(e) {
    let { user: t, subLabel: l, ...n } = e,
        a = Y.Ay.useName(t),
        r = Y.Ay.useUserTag(t, { decoration: "never" }),
        u = (0, i.bG)([W.A], () => W.A.getNickname(t.id)),
        c = (0, i.bG)([X.A], () => X.A.getStatus(t.id));
    return (0, s.jsx)(el, {
        ...n,
        icon: (0, s.jsx)(w.A, { "aria-hidden": !0, size: G._3.SIZE_32, user: t, status: c }),
        label: u ?? a,
        subLabel: l ?? r,
    });
}
function en(e) {
    let { channel: t, subLabel: l, ...n } = e,
        a = (0, q.Ay)(t),
        i = (0, V.i)(t);
    return (0, s.jsx)(el, {
        ...n,
        icon: (0, s.jsx)(B.A, { "aria-hidden": !0, size: G._3.SIZE_32, channel: t }),
        label: a,
        subLabel: l ?? i,
    });
}
function ea(e) {
    let { channel: t, subLabel: l, ...n } = e,
        a = (0, i.bG)([O.A], () => O.A.getGuild(t?.guild_id)),
        r = (0, q.Ay)(t),
        u = (0, i.bG)([g.A, p.default, W.A], () => {
            let e = g.A.getChannel(t.parent_id);
            return null == e ? null : (0, q.m1)(e, p.default, W.A, !1);
        }),
        c = (0, i.bG)([J.Ay], () => J.Ay.lastMessageTimestamp(t.id, ee.P.CHANNEL)),
        o = a?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? M.b : R.N;
        o = (0, s.jsxs)("div", {
            className: et.vr,
            children: [
                (0, s.jsx)(e, { color: U.A.colors.TEXT_SUBTLE, className: et.Q9 }),
                (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: u }),
                null != c
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
                                  children: (0, $.Fe)(P()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, s.jsx)(el, {
        ...n,
        icon: (0, s.jsx)(F.A, { size: F.q.SMALL_32, guild: a, channel: t }),
        label: r,
        subLabel: l ?? o,
    });
}
function ei(e) {
    let { rowData: t, selectedDestinations: l, handleToggleDestination: a, disableSelection: i, ...r } = e,
        u = n.useMemo(() => [t.length], [t.length]),
        c = n.useCallback(() => 48, []),
        d = n.useMemo(() => l?.map(A.I) ?? [], [l]),
        o = n.useCallback(
            (e) => {
                let { section: l, row: n } = e;
                if (l > 0) return;
                let { type: r, record: u } = t[n];
                if (r === z.rD.HEADER) return;
                let c = r === z.rD.USER ? { type: "user", id: u.id } : { type: "channel", id: u.id },
                    o = (0, A.I)(c),
                    m = (function (e) {
                        if (
                            e instanceof Z.YB &&
                            (0, Z.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(Q.A.can(K.xBc.MANAGE_CHANNELS, e) || Q.A.can(K.xBc.MANAGE_MESSAGES, e))
                        )
                            return { label: S.intl.string(S.t.Icu3bf) };
                    })(u),
                    x = d.includes(o),
                    h = {
                        key: o,
                        destination: c,
                        subLabel: null != m ? m.label : void 0,
                        disabled: (i && !x) || null != m,
                        selected: x,
                        onPressDestination: a,
                        "aria-posinset": n + 1,
                        "aria-setsize": t.length,
                    };
                return r === z.rD.USER
                    ? (0, s.jsx)(es, { user: u, ...h })
                    : r === z.rD.GROUP_DM
                      ? (0, s.jsx)(en, { channel: u, ...h })
                      : r === z.rD.TEXT_CHANNEL || r === z.rD.VOICE_CHANNEL
                        ? (0, s.jsx)(ea, { channel: u, ...h })
                        : void (0, j.xb)(r);
            },
            [i, a, t, d],
        ),
        m = n.useRef(null),
        x = (0, H.A)("share-command-modal", m);
    return (0, s.jsx)(_.hD, {
        navigator: x,
        children: (0, s.jsx)(_.PR, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, s.jsx)(I.OZ, {
                    ref: (e) => {
                        (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...l,
                    ...r,
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
    eu = l(119390);
function ec(e) {
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
        T = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        [G, M] = n.useState(!1),
        [R, U] = n.useState(""),
        [I, w] = n.useState("");
    n.useEffect(() => {
        w((0, x.W)({ applicationId: t, referrerId: T?.id, customId: l, linkId: E }));
    }, [t, T, l, E, w]);
    let H = n.useRef(0),
        [z, q] = n.useState([]),
        B = z.length,
        F = B >= 5;
    n.useEffect(() => {
        "" === R && V.current?.focus();
    }, [R]);
    let V = n.useRef(null),
        { results: Z, updateSearchText: O } = (0, f.R)({ selectedDestinations: z, includeMissingDMs: !0 }),
        Q = n.useCallback(
            (e) => {
                U(e), O(e);
            },
            [U, O],
        ),
        X = n.useCallback(() => {
            Q("");
        }, [Q]),
        J = n.useCallback(
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
        W = n.useCallback(
            async (e) => {
                if (null == D) return;
                let t = (function (e, t, l) {
                    let s = !1,
                        n = e.replaceAll(N.A.URL_REGEX, (e) => {
                            let t = k.some((t) => null != t(e));
                            return t && (s = !0), t ? e : `\`${e}\``;
                        });
                    if (s) return n;
                    let a = S.intl.formatToMarkdownString(S.t.dZJpdG, { applicationName: t.name, link: l });
                    return `${n}

${a}`;
                })(v, D, I);
                M(!0),
                    (await Promise.all(e.map(A.pk))).filter(j.Vq).forEach(async (e) => {
                        let l = g.A.getChannel(e);
                        null != l &&
                            (await m.A.sendMessage(e, b.Ay.parse(l, t), !1, { location: er.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, r.P0)(
                        (0, u.o)(S.intl.formatToPlainString(S.t.jQULqL, { applicationName: D.name }), c.Ck.SUCCESS),
                    ),
                    P(!0),
                    L();
            },
            [v, I, L, P, D],
        ),
        $ = n.useCallback(() => {
            (0, C.C)(I, () => {
                y(), (0, r.P0)((0, u.o)(S.intl.string(S.t.t5VZ88), c.Ck.SUCCESS));
            });
        }, [I, y]),
        Y =
            Z.length > 0
                ? (0, s.jsx)(ei, {
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
                          (0, s.jsx)("img", { className: et.BJ, src: eu, alt: "" }),
                          (0, s.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, s.jsx)(a.Modal, {
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
