n.d(t, { A: () => eu }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(735438),
    d = n.n(c),
    u = n(821418),
    m = n(665260),
    g = n(17928),
    h = n(661531),
    x = n(990078),
    A = n(778712),
    p = n(834730),
    f = n(885574),
    b = n(192308),
    j = n(534514),
    N = n(821609),
    E = n(695366),
    C = n(404778),
    v = n(289873),
    T = n(396478),
    I = n(376728),
    S = n(579872),
    y = n(414079),
    O = n(297413),
    k = n(361739),
    L = n(966327),
    w = n(736653),
    R = n(429913),
    M = n(47167),
    _ = n(576470),
    P = n(235986),
    G = n(137177),
    W = n(834409),
    D = n(671576),
    U = n(1310),
    B = n(939249),
    H = n(442433),
    z = n(950072),
    V = n(985018),
    K = n(576642);
function F(e) {
    let { roles: t, guildId: s } = e,
        a = t[0] ?? null,
        r = t.length - 1,
        o = l.useMemo(() => new Intl.NumberFormat(V.intl.currentLocale).format(r), [r]),
        c = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, H.L3)(e, async () => {
                        let { default: e } = await n.e("54526").then(n.bind(n, 551309));
                        return () => (0, i.jsx)(e, { roles: t });
                    });
            },
            [t],
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: K.yk,
              children: [
                  null != a && (0, i.jsx)(z.A, { className: K.Bc, role: a, guildId: s }),
                  r > 0 &&
                      (0, i.jsx)(B.D, {
                          className: K.yt,
                          onClick: c,
                          children: (0, i.jsx)(x.m, {
                              text: V.intl.string(V.t.DY6n4q),
                              children: (0, i.jsxs)(p.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ["+", o],
                              }),
                          }),
                      }),
              ],
          });
}
var Y = n(526132),
    q = n(95701),
    Z = n(734057),
    Q = n(317525),
    J = n(994500),
    $ = n(287809),
    X = n(347951),
    ee = n(825484),
    et = n(770178),
    en = n(280362);
function ei(e) {
    let {
            hasInvites: t,
            setHeight: n,
            onShowDisableInvites: s,
            onShowInviteModal: a,
            hasInviteDisabledPermission: r,
            invitesDisabled: o,
            canCreateInvites: d,
        } = e,
        u = l.useMemo(() => (0, c.debounce)(n, 100), [n]),
        m = l.useCallback(
            (e) => {
                let t = e.contentRect;
                null != t && u(t.height);
            },
            [u],
        ),
        g = (0, et.w)(m);
    return (0, i.jsxs)("div", {
        ref: g,
        className: en.o,
        children: [
            (0, i.jsx)(j.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: en.U,
                children: t ? V.intl.string(V.t.DjWsya) : V.intl.string(V.t.AmwmLg),
            }),
            (0, i.jsxs)(ee.e, {
                children: [
                    (0, i.jsx)(N.$, {
                        variant: o ? "primary" : "critical-secondary",
                        text: o ? V.intl.string(V.t["/dbw3H"]) : V.intl.string(V.t.Uwsjn6),
                        onClick: s,
                        disabled: !r,
                    }),
                    !0 === d
                        ? (0, i.jsx)(N.$, { variant: "primary", text: V.intl.string(V.t.KmK3q4), onClick: a })
                        : null,
                ],
            }),
        ],
    });
}
var el = n(652215),
    es = n(32019),
    ea = n(274446),
    er = n(818050);
function eo(e) {
    let {
        isDisabled: t,
        inviter: n,
        showChannel: l,
        channel: s,
        inviteSource: r,
        inviteSourceTrailingContent: o,
        uses: c,
        expiresAt: d,
        roles: u,
        guildId: m,
        onRevokeInvite: g,
    } = e;
    return (0, i.jsxs)(P.A, {
        className: a()(es._O, ea.N, { [es.Gg]: t }),
        children: [
            (0, i.jsxs)(P.A, {
                grow: 4,
                basis: 0,
                align: P.A.Align.CENTER,
                className: es.Qq,
                children: [
                    null != n && (0, i.jsx)(L.A, { user: n, size: A._3.SIZE_24, className: es.my }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n && (0, i.jsx)(O.A, { discriminatorClass: es.D2, user: n }),
                            l &&
                                null != s &&
                                (0, i.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: (0, M.m1)(s, $.default, J.A, !0),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(P.A, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: P.A.Align.CENTER,
                className: es.Qq,
                children: (0, i.jsxs)("div", { className: es.AL, children: [r, o] }),
            }),
            (0, i.jsx)(P.A, {
                grow: 1,
                basis: 0,
                align: P.A.Align.CENTER,
                className: es.Qq,
                children: (0, i.jsx)(p.E, { className: es.r9, variant: "text-sm/normal", children: c }),
            }),
            (0, i.jsx)(P.A, {
                grow: 2,
                basis: 0,
                align: P.A.Align.CENTER,
                className: a()(es.Qq, es.sA),
                children: (0, i.jsx)(p.E, { className: es.qW, variant: "text-sm/normal", children: d }),
            }),
            null != m &&
                (0, i.jsx)(P.A, {
                    grow: 2,
                    basis: 0,
                    align: P.A.Align.CENTER,
                    className: es.Qq,
                    children: (0, i.jsx)(F, { roles: u, guildId: m }),
                }),
            (0, i.jsx)(y.A, { className: es.eb, onClick: g }),
        ],
    });
}
function ec(e) {
    let { invite: t, showChannel: n = !1, inviteDisabled: s = !1, hide: a = !1 } = e,
        r = t.guild?.id,
        o = t.uses;
    t.maxUses > 0 && (o = `${t.uses}/${t.maxUses}`);
    let c = (0, g.bG)(
            [Q.A],
            () => (null == r ? [] : t.roles.map((e) => Q.A.getRole(r, e.id)).filter((e) => null != e)),
            [r, t.roles],
        ),
        d = l.useMemo(() => (0, q.OY)(t.channel), [t]);
    return (0, i.jsx)(eo, {
        isDisabled: s,
        inviter: t.inviter,
        showChannel: n,
        channel: d,
        inviteSource: (0, i.jsx)(p.E, { className: es.Rg, variant: "text-sm/normal", children: a ? "..." : t.code }),
        inviteSourceTrailingContent:
            !a && (0, m.Lt)(t.flags ?? 0, u.Q.IS_APPLICATION_BYPASS)
                ? (0, i.jsxs)("div", {
                      className: es.XH,
                      children: [
                          (0, i.jsx)(p.E, {
                              className: es.Qq,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: V.intl.string(V.t["1i1bUl"]),
                          }),
                          (0, i.jsx)(x.m, {
                              text: V.intl.string(V.t["jvd/LF"]),
                              children: (0, i.jsx)(f.m, { size: "xxs", color: "currentColor", className: es.G }),
                          }),
                      ],
                  })
                : null,
        uses: o,
        expiresAt: (0, i.jsx)(_.A, { deadline: t.getExpiresAt() }),
        roles: c,
        guildId: r,
        onRevokeInvite: () => {
            I.Ay.revokeInvite(t);
        },
    });
}
function ed(e) {
    let { applicationId: t, channel: l, showChannel: s = !1, inviteDisabled: a = !1 } = e,
        r = (0, R.h)(t),
        o = (0, g.bG)([$.default], () => $.default.getUser(l.linkedLobby?.linked_by)),
        c = (0, Y.e)(l);
    return (0, i.jsx)(eo, {
        isDisabled: a,
        inviter: o,
        showChannel: s,
        channel: l,
        inviteSource: (0, i.jsxs)("div", {
            className: es._z,
            children: [
                (0, i.jsx)(G.A, { game: r, size: G.M.XXSMALL }),
                (0, i.jsx)(p.E, { className: es.PD, variant: "text-sm/normal", children: r?.name }),
            ],
        }),
        uses: V.intl.string(V.t.jHpxwo),
        expiresAt: V.intl.string(V.t.PqEzn8),
        roles: [],
        guildId: l.guild_id,
        onRevokeInvite: () => {
            c && null != r
                ? (0, b.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("10527"), n.e("73380")]).then(n.bind(n, 106895));
                      return (t) => (0, i.jsx)(e, { ...t, channel: l, application: r });
                  })
                : S.A.show({ title: V.intl.string(V.t.JmUENg), body: V.intl.string(V.t.SrvsML) });
        },
    });
}
function eu(e) {
    let {
        invites: t,
        guild: s,
        hide: a,
        canCreateInvites: r,
        withV2Actions: c,
        channel: u = null,
        showChannel: m = !1,
        loading: x = !1,
    } = e;
    o()(null != s, "guild is required");
    let A = (0, w.Ay)(),
        f = (0, X.Fi)(s),
        I = (0, X.Wr)(s),
        S = l.useMemo(
            () =>
                null == t || x
                    ? []
                    : d()(t)
                          .sortBy((e) => (e.inviter?.username ?? "").toLowerCase())
                          .value(),
            [t, x],
        ),
        y = (0, g.yK)([Z.A], () => Z.A.getSortedLinkedChannelsForGuild(s.id).filter((e) => null == u || e.id === u.id)),
        O = l.useMemo(
            () =>
                x
                    ? []
                    : [...S.map((e) => ({ type: "invite", data: e })), ...y.map((e) => ({ type: "channel", data: e }))],
            [S, y, x],
        ),
        L = () => {
            (0, b.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(U.default, { ...e, channel: u, guild: s, source: el.PE1.SETTINGS_INVITE }),
            );
        },
        [R, M] = l.useState(62),
        _ = () => {
            let e = { source: W.Eo.GUILD_SETTINGS };
            (0, b.openModalLazy)(async () => (t) => (0, i.jsx)(D.default, { ...t, guildId: s.id, analyticsData: e }));
        };
    return (0, i.jsx)(k.ic, {
        sections: [1, +!c, +!!c, Math.max(1, O.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t)
                if (0 === O.length && !x)
                    return (0, i.jsx)(
                        "div",
                        {
                            children: (0, i.jsxs)(T.pp, {
                                theme: A,
                                children: [
                                    (0, i.jsx)(T.G8, {
                                        darkSrc: n(774125),
                                        lightSrc: n(151803),
                                        width: 256,
                                        height: 130,
                                    }),
                                    (0, i.jsx)(T.SG, {
                                        note: V.intl.string(V.t.F53CAc),
                                        children: V.intl.string(V.t["+nLJkZ"]),
                                    }),
                                ],
                            }),
                        },
                        "empty-state",
                    );
                else
                    return (0, i.jsxs)(
                        P.A,
                        {
                            children: [
                                (0, i.jsx)(P.A.Child, {
                                    grow: 4,
                                    basis: 0,
                                    className: er.Gf,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t.EgHyKy),
                                    }),
                                }),
                                (0, i.jsx)(P.A.Child, {
                                    basis: 0,
                                    grow: 3,
                                    className: er.Gf,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        children: y.length > 0 ? V.intl.string(V.t.l7VISQ) : V.intl.string(V.t.LBlFEN),
                                    }),
                                }),
                                (0, i.jsx)(P.A.Child, {
                                    grow: 1,
                                    basis: 0,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t.erWrmA),
                                    }),
                                }),
                                (0, i.jsx)(P.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t["1aM27d"]),
                                    }),
                                }),
                                (0, i.jsx)(P.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t["LPJmL/"]),
                                    }),
                                }),
                            ],
                        },
                        "table-header",
                    );
            return null;
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (0 === t)
                return (0, i.jsx)(j.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: es.wx,
                    children: V.intl.string(V.t["9F90ic"]),
                });
            if (1 === t)
                return (0, i.jsxs)("div", {
                    className: es.o1,
                    children: [
                        (0, i.jsx)(p.E, {
                            className: er.SX,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children:
                                !0 === r
                                    ? V.intl.format(V.t["97VdNm"], { onCreateInvite: L })
                                    : V.intl.string(V.t.WDw38H),
                        }),
                        (0, i.jsxs)("div", {
                            className: es.N5,
                            children: [
                                (0, i.jsx)(N.$, {
                                    size: "sm",
                                    variant: I ? "primary" : "critical-primary",
                                    text: I ? V.intl.string(V.t["/dbw3H"]) : V.intl.string(V.t.Uwsjn6),
                                    onClick: _,
                                    disabled: !f,
                                }),
                                I &&
                                    (0, i.jsxs)("div", {
                                        className: es.TJ,
                                        children: [
                                            (0, i.jsx)(E.E, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: h.A.unsafe_rawColors.YELLOW_300.css,
                                            }),
                                            (0, i.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                children: V.intl.string(V.t["2LLbj9"]),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(C.c, { className: es.zN }),
                    ],
                });
            if (2 === t)
                return (0, i.jsx)(
                    ei,
                    {
                        hasInvites: S.length > 0,
                        setHeight: M,
                        onShowDisableInvites: _,
                        onShowInviteModal: L,
                        hasInviteDisabledPermission: f,
                        invitesDisabled: I,
                        canCreateInvites: r,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === O.length && 0 === n && x)
                    return (0, i.jsx)(v.y, { className: er.QX, type: v.y.Type.SPINNING_CIRCLE }, "spinner");
                let e = O[n];
                switch (e?.type) {
                    case "invite":
                        return (0, i.jsx)(
                            ec,
                            { hide: a, invite: e.data, showChannel: m, inviteDisabled: I },
                            e.data.code,
                        );
                    case "channel":
                        return (0, i.jsx)(
                            ed,
                            {
                                applicationId: e.data.linkedLobby?.application_id,
                                channel: e.data,
                                showChannel: m,
                                inviteDisabled: I,
                            },
                            e.data.id,
                        );
                    default:
                        return null;
                }
            }
        },
        rowHeight: (e, t) =>
            0 === e
                ? 64
                : 1 === e
                  ? 109
                  : 2 === e
                    ? R
                    : 3 === e
                      ? 0 === O.length && 0 === t && x
                          ? 62
                          : 62 * (null != O[t])
                      : 0,
        sectionHeight: (e) => (3 === e ? (0 !== O.length || x ? 28 : 240) : 0),
    });
}
