n.d(t, { A: () => eu }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(821418),
    m = n(665260),
    g = n(17928),
    h = n(661531),
    x = n(990078),
    p = n(778712),
    A = n(834730),
    b = n(885574),
    f = n(192308),
    _ = n(534514),
    j = n(821609),
    N = n(695366),
    v = n(404778),
    E = n(289873),
    C = n(396478),
    I = n(376728),
    T = n(579872),
    S = n(414079),
    y = n(297413),
    w = n(361739),
    O = n(966327),
    k = n(736653),
    L = n(429913),
    R = n(47167),
    M = n(576470),
    D = n(235986),
    P = n(137177),
    G = n(834409),
    U = n(671576),
    W = n(1310),
    B = n(939249),
    H = n(442433),
    z = n(950072),
    V = n(985018),
    F = n(576642);
function K(e) {
    let { roles: t, guildId: s } = e,
        a = t[0] ?? null,
        r = t.length - 1,
        o = l.useMemo(() => new Intl.NumberFormat(V.intl.currentLocale).format(r), [r]),
        d = l.useCallback(
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
              className: F.yk,
              children: [
                  null != a && (0, i.jsx)(z.A, { className: F.Bc, role: a, guildId: s }),
                  r > 0 &&
                      (0, i.jsx)(B.D, {
                          className: F.yt,
                          onClick: d,
                          children: (0, i.jsx)(x.m, {
                              text: V.intl.string(V.t.DY6n4q),
                              children: (0, i.jsxs)(A.E, {
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
    Q = n(734057),
    Z = n(317525),
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
            canCreateInvites: c,
        } = e,
        u = l.useMemo(() => (0, d.debounce)(n, 100), [n]),
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
            (0, i.jsx)(_.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: en.U,
                children: t ? V.intl.string(V.t.DjWsya) : V.intl.string(V.t.AmwmLg),
            }),
            (0, i.jsxs)(ee.e, {
                children: [
                    (0, i.jsx)(j.$, {
                        variant: o ? "primary" : "critical-secondary",
                        text: o ? V.intl.string(V.t["/dbw3H"]) : V.intl.string(V.t.Uwsjn6),
                        onClick: s,
                        disabled: !r,
                    }),
                    !0 === c
                        ? (0, i.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.KmK3q4), onClick: a })
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
        uses: d,
        expiresAt: c,
        roles: u,
        guildId: m,
        onRevokeInvite: g,
    } = e;
    return (0, i.jsxs)(D.A, {
        className: a()(es._O, ea.N, { [es.Gg]: t }),
        children: [
            (0, i.jsxs)(D.A, {
                grow: 4,
                basis: 0,
                align: D.A.Align.CENTER,
                className: es.Qq,
                children: [
                    null != n && (0, i.jsx)(O.A, { user: n, size: p._3.SIZE_24, className: es.my }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n && (0, i.jsx)(y.A, { discriminatorClass: es.D2, user: n }),
                            l &&
                                null != s &&
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: (0, R.m1)(s, $.default, J.A, !0),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(D.A, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: D.A.Align.CENTER,
                className: es.Qq,
                children: (0, i.jsxs)("div", { className: es.AL, children: [r, o] }),
            }),
            (0, i.jsx)(D.A, {
                grow: 1,
                basis: 0,
                align: D.A.Align.CENTER,
                className: es.Qq,
                children: (0, i.jsx)(A.E, { className: es.r9, variant: "text-sm/normal", children: d }),
            }),
            (0, i.jsx)(D.A, {
                grow: 2,
                basis: 0,
                align: D.A.Align.CENTER,
                className: a()(es.Qq, es.sA),
                children: (0, i.jsx)(A.E, { className: es.qW, variant: "text-sm/normal", children: c }),
            }),
            null != m &&
                (0, i.jsx)(D.A, {
                    grow: 2,
                    basis: 0,
                    align: D.A.Align.CENTER,
                    className: es.Qq,
                    children: (0, i.jsx)(K, { roles: u, guildId: m }),
                }),
            (0, i.jsx)(S.A, { className: es.eb, onClick: g }),
        ],
    });
}
function ed(e) {
    let { invite: t, showChannel: n = !1, inviteDisabled: s = !1, hide: a = !1 } = e,
        r = t.guild?.id,
        o = t.uses;
    t.maxUses > 0 && (o = `${t.uses}/${t.maxUses}`);
    let d = (0, g.bG)(
            [Z.A],
            () => (null == r ? [] : t.roles.map((e) => Z.A.getRole(r, e.id)).filter((e) => null != e)),
            [r, t.roles],
        ),
        c = l.useMemo(() => (0, q.OY)(t.channel), [t]);
    return (0, i.jsx)(eo, {
        isDisabled: s,
        inviter: t.inviter,
        showChannel: n,
        channel: c,
        inviteSource: (0, i.jsx)(A.E, { className: es.Rg, variant: "text-sm/normal", children: a ? "..." : t.code }),
        inviteSourceTrailingContent:
            !a && (0, m.Lt)(t.flags ?? 0, u.Q.IS_APPLICATION_BYPASS)
                ? (0, i.jsxs)("div", {
                      className: es.XH,
                      children: [
                          (0, i.jsx)(A.E, {
                              className: es.Qq,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: V.intl.string(V.t["1i1bUl"]),
                          }),
                          (0, i.jsx)(x.m, {
                              text: V.intl.string(V.t["jvd/LF"]),
                              children: (0, i.jsx)(b.m, { size: "xxs", color: "currentColor", className: es.G }),
                          }),
                      ],
                  })
                : null,
        uses: o,
        expiresAt: (0, i.jsx)(M.A, { deadline: t.getExpiresAt() }),
        roles: d,
        guildId: r,
        onRevokeInvite: () => {
            I.Ay.revokeInvite(t);
        },
    });
}
function ec(e) {
    let { applicationId: t, channel: l, showChannel: s = !1, inviteDisabled: a = !1 } = e,
        r = (0, L.h)(t),
        o = (0, g.bG)([$.default], () => $.default.getUser(l.linkedLobby?.linked_by)),
        d = (0, Y.e)(l);
    return (0, i.jsx)(eo, {
        isDisabled: a,
        inviter: o,
        showChannel: s,
        channel: l,
        inviteSource: (0, i.jsxs)("div", {
            className: es._z,
            children: [
                (0, i.jsx)(P.A, { game: r, size: P.M.XXSMALL }),
                (0, i.jsx)(A.E, { className: es.PD, variant: "text-sm/normal", children: r?.name }),
            ],
        }),
        uses: V.intl.string(V.t.jHpxwo),
        expiresAt: V.intl.string(V.t.PqEzn8),
        roles: [],
        guildId: l.guild_id,
        onRevokeInvite: () => {
            d && null != r
                ? (0, f.openModalLazy)(async () => {
                      let { default: e } = await n.e("73380").then(n.bind(n, 106895));
                      return (t) => (0, i.jsx)(e, { ...t, channel: l, application: r });
                  })
                : T.A.show({ title: V.intl.string(V.t.JmUENg), body: V.intl.string(V.t.SrvsML) });
        },
    });
}
function eu(e) {
    let {
        invites: t,
        guild: s,
        hide: a,
        canCreateInvites: r,
        withV2Actions: d,
        channel: u = null,
        showChannel: m = !1,
        loading: x = !1,
    } = e;
    o()(null != s, "guild is required");
    let p = (0, k.Ay)(),
        b = (0, X.Fi)(s),
        I = (0, X.Wr)(s),
        T = l.useMemo(
            () =>
                null == t || x
                    ? []
                    : c()(t)
                          .sortBy((e) => (e.inviter?.username ?? "").toLowerCase())
                          .value(),
            [t, x],
        ),
        S = (0, g.yK)([Q.A], () => Q.A.getSortedLinkedChannelsForGuild(s.id).filter((e) => null == u || e.id === u.id)),
        y = l.useMemo(
            () =>
                x
                    ? []
                    : [...T.map((e) => ({ type: "invite", data: e })), ...S.map((e) => ({ type: "channel", data: e }))],
            [T, S, x],
        ),
        O = () => {
            (0, f.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(W.default, { ...e, channel: u, guild: s, source: el.PE1.SETTINGS_INVITE }),
            );
        },
        [L, R] = l.useState(62),
        M = () => {
            let e = { source: G.Eo.GUILD_SETTINGS };
            (0, f.openModalLazy)(async () => (t) => (0, i.jsx)(U.default, { ...t, guildId: s.id, analyticsData: e }));
        };
    return (0, i.jsx)(w.ic, {
        sections: [1, +!d, +!!d, Math.max(1, y.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t)
                if (0 === y.length && !x)
                    return (0, i.jsx)(
                        "div",
                        {
                            children: (0, i.jsxs)(C.pp, {
                                theme: p,
                                children: [
                                    (0, i.jsx)(C.G8, {
                                        darkSrc: n(774125),
                                        lightSrc: n(151803),
                                        width: 256,
                                        height: 130,
                                    }),
                                    (0, i.jsx)(C.SG, {
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
                        D.A,
                        {
                            children: [
                                (0, i.jsx)(D.A.Child, {
                                    grow: 4,
                                    basis: 0,
                                    className: er.Gf,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t.EgHyKy),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    basis: 0,
                                    grow: 3,
                                    className: er.Gf,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: S.length > 0 ? V.intl.string(V.t.l7VISQ) : V.intl.string(V.t.LBlFEN),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    grow: 1,
                                    basis: 0,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t.erWrmA),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t["1aM27d"]),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(A.E, {
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
                return (0, i.jsx)(_.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: es.wx,
                    children: V.intl.string(V.t["9F90ic"]),
                });
            if (1 === t)
                return (0, i.jsxs)("div", {
                    className: es.o1,
                    children: [
                        (0, i.jsx)(A.E, {
                            className: er.SX,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children:
                                !0 === r
                                    ? V.intl.format(V.t["97VdNm"], { onCreateInvite: O })
                                    : V.intl.string(V.t.WDw38H),
                        }),
                        (0, i.jsxs)("div", {
                            className: es.N5,
                            children: [
                                (0, i.jsx)(j.$, {
                                    size: "sm",
                                    variant: I ? "primary" : "critical-primary",
                                    text: I ? V.intl.string(V.t["/dbw3H"]) : V.intl.string(V.t.Uwsjn6),
                                    onClick: M,
                                    disabled: !b,
                                }),
                                I &&
                                    (0, i.jsxs)("div", {
                                        className: es.TJ,
                                        children: [
                                            (0, i.jsx)(N.E, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: h.A.unsafe_rawColors.YELLOW_300.css,
                                            }),
                                            (0, i.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                children: V.intl.string(V.t["2LLbj9"]),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(v.c, { className: es.zN }),
                    ],
                });
            if (2 === t)
                return (0, i.jsx)(
                    ei,
                    {
                        hasInvites: T.length > 0,
                        setHeight: R,
                        onShowDisableInvites: M,
                        onShowInviteModal: O,
                        hasInviteDisabledPermission: b,
                        invitesDisabled: I,
                        canCreateInvites: r,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === y.length && 0 === n && x)
                    return (0, i.jsx)(E.y, { className: er.QX, type: E.y.Type.SPINNING_CIRCLE }, "spinner");
                let e = y[n];
                switch (e?.type) {
                    case "invite":
                        return (0, i.jsx)(
                            ed,
                            { hide: a, invite: e.data, showChannel: m, inviteDisabled: I },
                            e.data.code,
                        );
                    case "channel":
                        return (0, i.jsx)(
                            ec,
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
                    ? L
                    : 3 === e
                      ? 0 === y.length && 0 === t && x
                          ? 62
                          : 62 * (null != y[t])
                      : 0,
        sectionHeight: (e) => (3 === e ? (0 !== y.length || x ? 28 : 240) : 0),
    });
}
