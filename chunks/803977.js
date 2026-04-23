l.d(t, { default: () => ec });
var n = l(627968),
    s = l(64700),
    r = l(189213),
    a = l(17928),
    i = l(691540),
    u = l(857250),
    c = l(97483),
    o = l(834730),
    d = l(892547),
    h = l(720149),
    m = l(342384),
    f = l(429913),
    g = l(451909),
    b = l(223863),
    x = l(151054),
    A = l(734057),
    _ = l(287809),
    p = l(957565),
    S = l(403362),
    C = l(833291),
    j = l(998218),
    E = l(985018);
let L = [C.ts];
var y = l(503698),
    N = l.n(y),
    v = l(989349),
    k = l.n(v),
    P = l(837381),
    T = l(939249),
    D = l(658675),
    I = l(778712),
    R = l(56059),
    M = l(276293),
    G = l(661531),
    w = l(475825),
    q = l(966327),
    U = l(928039),
    H = l(115718),
    z = l(47167),
    V = l(598104),
    W = l(255266),
    B = l(72563),
    F = l(95701),
    O = l(71393),
    Q = l(576705),
    J = l(290863),
    Z = l(222823),
    Y = l(994500),
    K = l(58703),
    X = l(427262),
    $ = l(652215),
    ee = l(790782),
    et = l(894385);
function el(e) {
    let {
            destination: t,
            icon: l,
            label: r,
            subLabel: a,
            selected: i,
            disabled: u,
            onPressDestination: c,
            "aria-setsize": d,
            "aria-posinset": h,
        } = e,
        m = (0, P.rm)(t.id),
        f = s.useCallback(() => {
            u || c?.(t);
        }, [c, u, t]);
    return (0, n.jsxs)(T.D, {
        className: N()(et.HP, { [et.r9]: u }),
        onClick: f,
        "aria-selected": i,
        "aria-setsize": d,
        "aria-posinset": h,
        ...m,
        children: [
            (0, n.jsxs)("div", {
                className: et.D_,
                children: [
                    (0, n.jsx)("div", { className: et.P0, children: l }),
                    (0, n.jsxs)("div", {
                        className: et.WD,
                        children: [
                            (0, n.jsx)(o.E, {
                                tag: "strong",
                                className: et.Pf,
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                children: r,
                            }),
                            (0, n.jsx)(o.E, {
                                className: et.J2,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: a,
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: et.kv, children: (0, n.jsx)(D.P, { checked: i }) }),
        ],
    });
}
function en(e) {
    let { user: t, subLabel: l, ...s } = e,
        r = X.Ay.useName(t),
        i = X.Ay.useUserTag(t, { decoration: "never" }),
        u = (0, a.bG)([Y.A], () => Y.A.getNickname(t.id)),
        c = (0, a.bG)([J.A], () => J.A.getStatus(t.id));
    return (0, n.jsx)(el, {
        ...s,
        icon: (0, n.jsx)(q.A, { "aria-hidden": !0, size: I._3.SIZE_32, user: t, status: c }),
        label: u ?? r,
        subLabel: l ?? i,
    });
}
function es(e) {
    let { channel: t, subLabel: l, ...s } = e,
        r = (0, z.Ay)(t),
        a = (0, B.i)(t);
    return (0, n.jsx)(el, {
        ...s,
        icon: (0, n.jsx)(V.A, { "aria-hidden": !0, size: I._3.SIZE_32, channel: t }),
        label: r,
        subLabel: l ?? a,
    });
}
function er(e) {
    let { channel: t, subLabel: l, ...s } = e,
        r = (0, a.bG)([O.A], () => O.A.getGuild(t?.guild_id)),
        i = (0, z.Ay)(t),
        u = (0, a.bG)([A.A, _.default, Y.A], () => {
            let e = A.A.getChannel(t.parent_id);
            return null == e ? null : (0, z.m1)(e, _.default, Y.A, !1);
        }),
        c = (0, a.bG)([Z.Ay], () => Z.Ay.lastMessageTimestamp(t.id, ee.P.CHANNEL)),
        d = r?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? R.b : M.N;
        d = (0, n.jsxs)("div", {
            className: et.vr,
            children: [
                (0, n.jsx)(e, { color: G.A.colors.TEXT_SUBTLE, className: et.Q9 }),
                (0, n.jsx)(o.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: u }),
                null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(o.E, {
                                  className: et.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, n.jsx)(o.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, K.Fe)(k()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, n.jsx)(el, {
        ...s,
        icon: (0, n.jsx)(W.A, { size: W.q.SMALL_32, guild: r, channel: t }),
        label: i,
        subLabel: l ?? d,
    });
}
function ea(e) {
    let { rowData: t, selectedDestinations: l, handleToggleDestination: r, disableSelection: a, ...i } = e,
        u = s.useMemo(() => [t.length], [t.length]),
        c = s.useCallback(() => 48, []),
        o = s.useMemo(() => l?.map(b.I) ?? [], [l]),
        d = s.useCallback(
            (e) => {
                let { section: l, row: s } = e;
                if (l > 0) return;
                let { type: i, record: u } = t[s];
                if (i === H.rD.HEADER) return;
                let c = i === H.rD.USER ? { type: "user", id: u.id } : { type: "channel", id: u.id },
                    d = (0, b.I)(c),
                    h = (function (e) {
                        if (
                            e instanceof F.YB &&
                            (0, F.zy)(e.type) &&
                            null != e.rateLimitPerUser &&
                            e.rateLimitPerUser > 0 &&
                            !(Q.A.can($.xBc.MANAGE_CHANNELS, e) || Q.A.can($.xBc.MANAGE_MESSAGES, e))
                        )
                            return { label: E.intl.string(E.t.Icu3bf) };
                    })(u),
                    m = o.includes(d),
                    f = {
                        key: d,
                        destination: c,
                        subLabel: null != h ? h.label : void 0,
                        disabled: (a && !m) || null != h,
                        selected: m,
                        onPressDestination: r,
                        "aria-posinset": s + 1,
                        "aria-setsize": t.length,
                    };
                return i === H.rD.USER
                    ? (0, n.jsx)(en, { user: u, ...f })
                    : i === H.rD.GROUP_DM
                      ? (0, n.jsx)(es, { channel: u, ...f })
                      : i === H.rD.TEXT_CHANNEL || i === H.rD.VOICE_CHANNEL
                        ? (0, n.jsx)(er, { channel: u, ...f })
                        : void (0, S.xb)(i);
            },
            [a, r, t, o],
        ),
        h = s.useRef(null),
        m = (0, U.A)("share-command-modal", h);
    return (0, n.jsx)(P.hD, {
        navigator: m,
        children: (0, n.jsx)(P.PR, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, n.jsx)(w.OZ, {
                    ref: (e) => {
                        (h.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...l,
                    ...i,
                    sections: u,
                    sectionHeight: 0,
                    renderRow: d,
                    rowHeight: c,
                });
            },
        }),
    });
}
var ei = l(381941),
    eu = l(119390);
function ec(e) {
    let {
            applicationId: t,
            customId: l,
            linkId: C,
            message: y,
            onClose: N,
            onCopyLink: v,
            onShare: k,
            transitionState: P,
        } = e,
        [T] = (0, f.A)([t]),
        D = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        [I, R] = s.useState(!1),
        [M, G] = s.useState(""),
        [w, q] = s.useState("");
    s.useEffect(() => {
        q((0, m.W)({ applicationId: t, referrerId: D?.id, customId: l, linkId: C }));
    }, [t, D, l, C, q]);
    let U = s.useRef(0),
        [H, z] = s.useState([]),
        V = H.length,
        W = V >= 5;
    s.useEffect(() => {
        "" === M && B.current?.focus();
    }, [M]);
    let B = s.useRef(null),
        { results: F, updateSearchText: O } = (0, x.R)({ selectedDestinations: H, includeMissingDMs: !0 }),
        Q = s.useCallback(
            (e) => {
                G(e), O(e);
            },
            [G, O],
        ),
        J = s.useCallback(() => {
            Q("");
        }, [Q]),
        Z = s.useCallback(
            (e) => {
                z((t) => {
                    let l = t.findIndex((t) => {
                        let { type: l, id: n } = t;
                        return l === e.type && n === e.id;
                    });
                    if (-1 === l) return W ? t : (G(""), (U.current += 1), [e, ...t]);
                    let n = [...t];
                    return n.splice(l, 1), (U.current += 1), n;
                });
            },
            [W],
        ),
        Y = s.useCallback(
            async (e) => {
                if (null == T) return;
                let t = (function (e, t, l) {
                    let n = !1,
                        s = e.replaceAll(j.A.URL_REGEX, (e) => {
                            let t = L.some((t) => null != t(e));
                            return t && (n = !0), t ? e : `\`${e}\``;
                        });
                    if (n) return s;
                    let r = E.intl.formatToMarkdownString(E.t.dZJpdG, { applicationName: t.name, link: l });
                    return `${s}

${r}`;
                })(y, T, w);
                R(!0),
                    (await Promise.all(e.map(b.pk))).filter(S.Vq).forEach(async (e) => {
                        let l = A.A.getChannel(e);
                        null != l &&
                            (await h.A.sendMessage(e, g.Ay.parse(l, t), !1, { location: ei.Hx.ACTIVITY_SHARE }));
                    }),
                    (0, i.P0)(
                        (0, u.o)(E.intl.formatToPlainString(E.t.jQULqL, { applicationName: T.name }), c.Ck.SUCCESS),
                    ),
                    k(!0),
                    N();
            },
            [y, w, N, k, T],
        ),
        K = s.useCallback(() => {
            (0, p.C)(w, () => {
                v(), (0, i.P0)((0, u.o)(E.intl.string(E.t.t5VZ88), c.Ck.SUCCESS));
            });
        }, [w, v]),
        X =
            F.length > 0
                ? (0, n.jsx)(ea, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: F,
                      handleToggleDestination: Z,
                      selectedDestinations: H,
                      disableSelection: W,
                  })
                : (0, n.jsxs)("div", {
                      className: et.wV,
                      children: [
                          (0, n.jsx)("img", { className: et.BJ, src: eu, alt: "" }),
                          (0, n.jsx)(o.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(E.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, n.jsx)(r.Modal, {
        transitionState: P,
        onClose: N,
        title: E.intl.string(E.t.r9qKow),
        subtitle: y,
        size: "md",
        input: (0, n.jsx)(d.I, {
            ref: B,
            query: M,
            onChange: Q,
            onClear: J,
            placeholder: E.intl.string(E.t["5h0QOP"]),
            "aria-label": E.intl.string(E.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            { text: E.intl.string(E.t.WqhZss), variant: "secondary", onClick: K },
            {
                text: E.intl.string(E.t.TXNS7S),
                variant: "primary",
                onClick: () => Y(H),
                loading: I,
                disabled: !(V > 0),
            },
        ],
        children: X,
    });
}
