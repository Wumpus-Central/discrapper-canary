(n.r(t), n.d(t, { default: () => nR }));
var l,
    s,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    c = n.n(r),
    o = n(164636),
    d = n(192308),
    u = n(688810),
    m = n(726249),
    g = n(354328),
    E = n(287809),
    h = n(440938),
    f = n(161918),
    x = n(12678),
    C = n(706113),
    p = n(841702),
    S = n(983545),
    _ = n(365491);
(n(323874), n(14289), n(35956), n(321073));
var A = n(806163),
    v = n(855986),
    b = n(196736),
    I = n(516521),
    j = n(781300),
    L = n(670735),
    N = n(790284),
    O = n(780964),
    T = n(766075),
    R = n(46653),
    y = n(166403),
    M = n(889558),
    k = n(879610),
    G = n(814201),
    P = n(581453),
    D = n(43990),
    B = n(403581),
    F = n(834730),
    H = n(821609),
    w = n(793574),
    U = n(778705),
    z = n(682901),
    K = n(818348),
    V = n(105518),
    Y = n(792996),
    W = n(876564);
function $() {
    let e = i.useCallback(() => {
        (0, U.A)({ subscriptionTier: z.pe.TIER_2, analyticsLocations: [w.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, a.jsx)(D.N, {
        theme: K.NJ.DARK,
        children: (t) =>
            (0, a.jsxs)("div", {
                className: c()(W.vK, t),
                children: [
                    (0, a.jsxs)("div", {
                        className: W.Pf,
                        children: [
                            (0, a.jsx)(B.t, {
                                className: W.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, a.jsx)(F.E, {
                                variant: "body-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: Y.intl.string(V.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(H.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: B.t,
                        text: Y.intl.string(Y.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var Z = n(462887),
    q = n(534514),
    Q = n(736653),
    X = n(457865);
function J(e) {
    let { onRetry: t, errorMessage: n } = e,
        l = (0, Q.Ay)(),
        s = (0, v.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, a.jsxs)("div", {
        className: X.kL,
        children: [
            (0, a.jsx)("img", {
                className: X.Sl,
                src: (0, Z.M)(l) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, a.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.i5SQ74) }),
            (0, a.jsx)(F.E, {
                className: X.h_,
                variant: "body-md/normal",
                color: "text-muted",
                children: Y.intl.string(Y.t.F8FvUy),
            }),
            s &&
                null != n &&
                (0, a.jsx)(F.E, { variant: "body-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, a.jsx)(H.$, { variant: "primary", text: Y.intl.string(Y.t["+hivLW"]), onClick: t }),
        ],
    });
}
var ee = n(349085),
    et = n(890856),
    en = n(331322),
    el = n(713517),
    es = n(660669);
function ea(e) {
    let { name: t, coverUrl: n, fromPriceLabel: l, nitroFromPriceLabel: s, onClickCard: r, onClickViewPlans: o } = e,
        d = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, el.A)(d),
        m = (0, v.bG)([E.default], () => k.Ay.canUseShopDiscounts(E.default.getCurrentUser())) && null != s,
        g = m ? s : l,
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), o?.());
            },
            [o],
        );
    return (0, a.jsxs)(et.s, {
        ref: d,
        onClick: r,
        "aria-label": t,
        className: c()(es.Nr, { [es.yo]: u }),
        children: [
            (0, a.jsx)("div", {
                className: es.q4,
                "aria-hidden": !0,
                children: null != n && (0, a.jsx)("img", { className: es.xy, src: n, alt: "" }),
            }),
            (0, a.jsxs)("div", {
                className: es.Iv,
                children: [
                    null != n
                        ? (0, a.jsx)("img", { className: es.N4, src: n, alt: "" })
                        : (0, a.jsx)("div", {
                              className: es.WB,
                              children: (0, a.jsx)(F.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, a.jsx)("div", { className: es.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: es.qr,
                children: [
                    (0, a.jsxs)("div", {
                        className: es.cs,
                        children: [
                            (0, a.jsx)(F.E, { variant: "body-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, a.jsx)("div", {
                                    className: es.F1,
                                    children: (0, a.jsxs)(en.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, a.jsxs)(en.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, a.jsx)(B.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, a.jsx)(F.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: es.E1,
                        children: (0, a.jsx)(H.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: Y.intl.string(V.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ei = n(469058);
function er() {
    return (0, a.jsx)("div", {
        className: c()(es.Nr, ei.s7, ei.U6),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: ei.qr,
            children: [(0, a.jsx)("div", { className: ei.w9 }), (0, a.jsx)("div", { className: ei.n2 })],
        }),
    });
}
var ec = n(901215);
let eo = i.memo(function (e) {
    let { game: t, onSelect: n } = e,
        l = i.useCallback(() => n(t), [t, n]),
        s = (0, ee.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, a.jsx)(ea, {
        name: t.name,
        coverUrl: s,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: l,
        onClickViewPlans: l,
    });
});
function ed(e) {
    let { games: t, title: n, onSelectGame: l, loading: s = !1 } = e;
    return (0, a.jsxs)("section", {
        className: ec.u,
        children: [
            null != n && (0, a.jsx)(q.D, { variant: "heading-lg/semibold", children: n }),
            (0, a.jsx)("div", {
                className: ec.V,
                children: s
                    ? Array.from({ length: 10 }, (e, t) => (0, a.jsx)(er, {}, t))
                    : t.map((e) => (0, a.jsx)(eo, { game: e, onSelect: l }, e.id)),
            }),
        ],
    });
}
var eu = n(32880),
    em = n(410232),
    eg = n(231483),
    eE = n(339350),
    eh = n(28863),
    ef = n(442935);
function ex() {
    let e = i.useMemo(
        () => [
            { Icon: eu.DownloadIcon, label: Y.intl.string(V.default.GJNQYz) },
            { Icon: em.k, label: Y.intl.string(V.default.pTinR2) },
            { Icon: eg.ShieldIcon, label: Y.intl.string(V.default.s0N1nM) },
            { Icon: eE.Q, label: Y.intl.string(V.default.NzrGEi) },
        ],
        [],
    );
    return (0, a.jsxs)("section", {
        className: ef.ZK,
        children: [
            (0, a.jsxs)("div", {
                className: ef.jE,
                children: [
                    (0, a.jsx)(q.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: Y.intl.string(V.default.F5W36W),
                    }),
                    (0, a.jsxs)(F.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            Y.intl.string(V.default.xMpGuO),
                            " ",
                            (0, a.jsx)(eh.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: Y.intl.string(V.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ef._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: ef.Tc,
                            children: [
                                (0, a.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, a.jsx)(F.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-subtle",
                                    tag: "span",
                                    children: n,
                                }),
                            ],
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
var eC = n(305090);
function ep() {
    return (0, a.jsxs)("div", {
        className: eC.vK,
        children: [
            (0, a.jsx)("div", {
                className: eC.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, a.jsx)("div", { className: eC.Ge, "aria-hidden": !0 }),
            (0, a.jsx)("div", { className: eC.f5, "aria-hidden": !0 }),
        ],
    });
}
var eS = n(408278),
    e_ = n(548411),
    eA = n(554830),
    ev = n(281445),
    eb = n(390544),
    eI = n(554146),
    ej = n(939249),
    eL = n(509434),
    eN = n(866665),
    eO = n(103271);
let eT = { TERTIARY: eO.Xe, SECONDARY: eO.Rm, PRIMARY: eO.zB },
    eR = { SIZE_24: eO.q1, SIZE_32: eO.Hb, SIZE_36: eO.VM };
function ey(e) {
    let {
        className: t,
        tooltip: n,
        color: l,
        size: s = eR.SIZE_32,
        icon: i,
        onMouseDown: r,
        onClick: o,
        disabled: d,
        focusProps: u,
        ref: m,
    } = e;
    return (0, a.jsx)(eN.m, {
        asContainer: !0,
        text: n,
        shouldShow: !d,
        children: (0, a.jsx)(ej.D, {
            innerRef: m,
            "aria-label": n,
            "aria-disabled": d,
            className: c()(t, eO.x6, l, s, { [eO.r9]: d }),
            onMouseDown: r,
            onClick: (e) => {
                o(e);
            },
            focusProps: u,
            children: i,
        }),
    });
}
var eM = n(933832),
    ek = n(624479),
    eG = n(263775),
    eP = n(427209),
    eD = n(95035),
    eB = n(940456),
    eF = n(685743),
    eH = n(981381),
    ew = n(342942),
    eU = n(294454),
    ez = n(625903),
    eK = n(445927),
    eV = n(376205);
function eY(e) {
    let { server: t, onOpenSettings: n } = e,
        l = t.instance.subscriptionId,
        s = (0, v.bG)(
            [y.A],
            () =>
                (0, eV.Yg)({
                    subscriptionId: l,
                    hasFetchedSubscriptions: y.A.hasFetchedSubscriptions(),
                    getSubscriptionById: (e) => y.A.getSubscriptionById(e),
                }),
            [l],
        ),
        r = (0, eK.A)(t.instance) && s,
        c = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, a.jsx)(ey, {
        color: eT.SECONDARY,
        size: eR.SIZE_24,
        icon: (0, a.jsx)(ez.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: c,
        disabled: !r,
        tooltip: Y.intl.string(V.default["feUiM/"]),
    });
}
var eW = n(652215),
    e$ = n(628049),
    eZ = n(49999),
    eq = n(684644);
let eQ = [eb.M.STARTUP_FAILED, eb.M.MISSING_STOCK, eb.M.PROVIDER_ERRORED, eb.M.DELETED];
function eX(e) {
    return `game-server-owned-card-${e}`;
}
function eJ(e) {
    let { gameServerId: t } = e,
        n = i.useCallback(() => {
            (0, eB.Kz)(t).catch(() => {});
        }, [t]);
    return (0, a.jsx)("div", {
        className: eq.y7,
        children: (0, a.jsx)(H.$, {
            fullWidth: !0,
            text: Y.intl.string(V.default.TMzy7d),
            variant: "secondary",
            onClick: n,
        }),
    });
}
function e0() {
    let [e, t] = i.useState(!1),
        n = i.useCallback(() => {
            (t(!0),
                (0, eB.hU)()
                    .catch(() => {})
                    .finally(() => t(!1)));
        }, []);
    return (0, a.jsx)("div", {
        className: eq.y7,
        children: (0, a.jsx)(H.$, {
            fullWidth: !0,
            text: Y.intl.string(V.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let e1 = i.memo(function (e) {
    let { server: t, onJoin: l, onViewPanel: s, onOpenSettings: r, isHighlighted: o = !1 } = e,
        u = (0, ee.A)(t.gameId, "cover") ?? t.coverUrl,
        m = (function (e) {
            let t = (0, v.bG)([y.A], () => (null != e ? y.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === eW.Dmq.CANCELED
                ? { text: Y.intl.formatToPlainString(V.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: Y.intl.formatToPlainString(V.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [g, E] = (0, eG.kn)([eI.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        h = g !== eI.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        f = ev.X.SHOCKBYTE,
        x = R.default.getId() ?? "0",
        { handleCopyServerIp: C, animateCopyIcon: p } = (0, eF.A)(x, t.id, w.A.GAME_SERVER_PAGE, t.serverIp),
        S = i.useCallback(() => {
            (0, ew.A)({
                provider: f,
                onAccept: () => {
                    (E(eZ.i.TAKE_ACTION), C());
                },
            });
        }, [f, E, C]),
        _ = i.useCallback(() => {
            h
                ? l(t)
                : (0, ew.A)({
                      provider: f,
                      onAccept: () => {
                          (E(eZ.i.TAKE_ACTION), l(t));
                      },
                  });
        }, [h, f, E, l, t]),
        A = i.useCallback(() => s(t), [s, t]),
        b = i.useCallback(() => {
            ((e) => {
                let { server: t, source: l } = e;
                (0, d.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(937139),
                            n.e(921611),
                            n.e(592e3),
                            n.e(524434),
                            n.e(933947),
                            n.e(866475),
                            n.e(279926),
                            n.e(481647),
                            n.e(749248),
                            n.e(900361),
                            n.e(844780),
                            n.e(648365),
                            n.e(45072),
                            n.e(368062),
                            n.e(713567),
                            n.e(236946),
                            n.e(692639),
                            n.e(890480),
                            n.e(440963),
                            n.e(766031),
                            n.e(394317),
                            n.e(304329),
                            n.e(12762),
                            n.e(835868),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, a.jsx)(e, { ...n, server: t, source: l });
                    },
                    { stackingBehavior: "stack", modalKey: eU.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        I = (0, eH.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e$.qb[f],
        j = null != t.instance.gameServerPanelUrl,
        L = null != t.instance.status && eQ.includes(t.instance.status),
        N = i.useCallback(() => {
            (0, M.h)({ href: I });
        }, [I]),
        O = i.useMemo(() => {
            switch (t.instance.status) {
                case eb.M.ONLINE:
                    return Y.intl.string(V.default["60kAzo"]);
                case eb.M.OFFLINE:
                    return Y.intl.string(V.default["Ys/RrB"]);
                case eb.M.SLEEPING:
                    return Y.intl.string(V.default.y0z8ZO);
                case eb.M.STARTUP_FAILED:
                    return Y.intl.string(V.default["7C9Z3s"]);
                case eb.M.MISSING_STOCK:
                    return Y.intl.string(V.default["+a5G2l"]);
                case eb.M.PROVIDER_ERRORED:
                    return Y.intl.string(V.default["6g/oji"]);
                case eb.M.DELETED:
                    return Y.intl.string(V.default.Z1NZwX);
                case eb.M.STARTING:
                    return Y.intl.string(V.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        T = t.isOnline ? "text-feedback-positive" : L ? "text-feedback-critical" : "text-muted",
        k = i.useMemo(
            () =>
                (0, a.jsx)(ej.D, {
                    className: c()(eq.wC, eq.QV),
                    onClick: _,
                    "aria-label": Y.intl.string(V.default["fQCcM/"]),
                    children: (0, a.jsx)(F.E, {
                        variant: "body-sm/semibold",
                        color: "none",
                        children: Y.intl.string(V.default["fQCcM/"]),
                    }),
                }),
            [_],
        ),
        G = i.useMemo(
            () =>
                (0, a.jsxs)(ej.D, {
                    className: c()(eq.wC, eq.y2, { [eq.Gz]: !j }),
                    onClick: j ? A : void 0,
                    "aria-disabled": !j,
                    "aria-label": Y.intl.string(V.default.tkbVdf),
                    children: [
                        (0, a.jsx)(F.E, {
                            variant: "body-sm/semibold",
                            color: "none",
                            children: Y.intl.string(V.default.tkbVdf),
                        }),
                        (0, a.jsx)(eL.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                    ],
                }),
            [A, j],
        ),
        P = i.useMemo(() => {
            switch (t.instance.status) {
                case eb.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(eJ, { gameServerId: t.id }), G] });
                case eb.M.STARTUP_FAILED:
                case eb.M.MISSING_STOCK:
                    return (0, a.jsx)("div", {
                        className: eq.y7,
                        children: (0, a.jsx)(H.$, {
                            fullWidth: !0,
                            text: Y.intl.string(V.default.gWMqnI),
                            variant: "primary",
                            icon: eL.I,
                            iconPosition: "end",
                            disabled: !j,
                            onClick: A,
                        }),
                    });
                case eb.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                className: eq.y7,
                                children: (0, a.jsx)(H.$, {
                                    fullWidth: !0,
                                    text: Y.intl.string(V.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: N,
                                }),
                            }),
                            (0, a.jsx)(e0, {}),
                        ],
                    });
                case eb.M.DELETED:
                    return G;
                default:
                    return (0, a.jsxs)(a.Fragment, { children: [k, G] });
            }
        }, [t.instance.status, t.id, j, k, G, A, N]);
    return (0, a.jsxs)("div", {
        id: eX(t.id),
        className: c()(eq.Nr, { [eq.mr]: o }),
        children: [
            o && (0, a.jsx)("div", { className: eq._8, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: eq.Nk,
                "aria-hidden": !0,
                children: [
                    null != u && (0, a.jsx)("img", { className: eq.QC, src: u, alt: "" }),
                    (0, a.jsx)("div", { className: eq.jc }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eq.AQ,
                children: [
                    (0, a.jsx)(ey, {
                        color: eT.SECONDARY,
                        size: eR.SIZE_24,
                        icon: (0, a.jsx)(eP.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: b,
                        tooltip: Y.intl.string(Y.t.RDE0Sc),
                    }),
                    (0, a.jsx)(eY, { server: t, onOpenSettings: r }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eq.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: eq.U1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: eq.oL,
                                children: [
                                    null != u
                                        ? (0, a.jsx)("img", { className: eq.vT, src: u, alt: "" })
                                        : (0, a.jsx)("div", {
                                              className: eq.iv,
                                              children: (0, a.jsx)(F.E, {
                                                  variant: "body-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, a.jsx)("div", { className: eq.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: eq.VQ,
                                children: [
                                    (0, a.jsx)(F.E, {
                                        variant: "body-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, a.jsx)(F.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != m &&
                                        (0, a.jsx)(F.E, {
                                            variant: "body-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: m.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: eq.M1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: eq.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: eq.bi,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default.bDdi7n),
                                            }),
                                            (0, a.jsx)(F.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: eq.gv,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default["7phwMG"]),
                                            }),
                                            h
                                                ? (0, a.jsxs)("div", {
                                                      className: eq.Yb,
                                                      children: [
                                                          (0, a.jsx)(F.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, a.jsx)(ej.D, {
                                                                  className: eq.cL,
                                                                  onClick: C,
                                                                  "aria-label": Y.intl.string(Y.t.OpuAlK),
                                                                  children: p
                                                                      ? (0, a.jsx)(eM.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, a.jsx)(ek.CopyIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, a.jsx)(eD.A, {
                                                      onClick: S,
                                                      children: Y.intl.string(V.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: eq.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: eq.bi,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default["n+ZX7y"]),
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: eq.Yb,
                                                children: [
                                                    (t.isOnline || L) &&
                                                        (0, a.jsx)("span", {
                                                            className: c()(eq.kg, { [eq.rU]: L }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, a.jsx)(F.E, {
                                                        variant: "body-sm/medium",
                                                        color: T,
                                                        tag: "span",
                                                        children: O,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: eq.gv,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(V.default.mJlz3T),
                                            }),
                                            (0, a.jsx)(F.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.location,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: eq.qr, children: P }),
        ],
    });
});
var e2 = n(367016);
function e6(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: l,
            onViewPanel: s,
            onOpenSettings: r,
            highlightServerId: o = null,
            highlightNonce: d = 0,
        } = e,
        u = i.useRef(null),
        m = i.useRef(null),
        [g, E] = i.useState(!1),
        [h, f] = i.useState(!1),
        [x, C] = i.useState(null),
        p = i.useCallback(() => {
            let e = u.current;
            null != e && (E(e.scrollLeft > 1), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    (i.useLayoutEffect(() => {
        p();
    }, [p, t]),
        i.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                p();
            });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }, [p]));
    let S = i.useCallback(() => {
            u.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        _ = i.useCallback(() => {
            u.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        i.useEffect(() => {
            if (d <= 0) return;
            let e = null != o ? document.getElementById(eX(o)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    (C(null), (t = requestAnimationFrame(() => C(o))));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(t));
            };
        }, [d, o]),
        i.useEffect(() => {
            if (null == x) return;
            let e = setTimeout(() => C(null), 4e3);
            return () => clearTimeout(e);
        }, [x]),
        (0, a.jsxs)("section", {
            className: e2.uW,
            ref: m,
            children: [
                (0, a.jsxs)("div", {
                    className: e2.wx,
                    children: [
                        (0, a.jsx)(q.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: Y.intl.string(V.default.BOWmmT),
                        }),
                        (0, a.jsx)(D.N, {
                            theme: K.NJ.DARK,
                            children: (e) =>
                                (0, a.jsxs)("div", {
                                    className: c()(e2.$s, e),
                                    children: [
                                        (0, a.jsx)(H.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: Y.intl.string(Y.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: e2.d$,
                                            children: [
                                                (0, a.jsx)(eS.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: e_.Z,
                                                    disabled: !g,
                                                    onClick: S,
                                                    "aria-label": Y.intl.string(Y.t["13/7kX"]),
                                                }),
                                                (0, a.jsx)(eS.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eA.K,
                                                    disabled: !h,
                                                    onClick: _,
                                                    "aria-label": Y.intl.string(Y.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: c()(e2.XG, { [e2.OW]: g && h, [e2.vL]: g && !h, [e2.y0]: h && !g }),
                    ref: u,
                    onScroll: p,
                    children: t.map((e) =>
                        (0, a.jsx)(
                            "div",
                            {
                                className: e2.AV,
                                children: (0, a.jsx)(e1, {
                                    server: e,
                                    onJoin: l,
                                    onViewPanel: s,
                                    onOpenSettings: r,
                                    isHighlighted: x === e.id,
                                }),
                            },
                            e.id,
                        ),
                    ),
                }),
            ],
        })
    );
}
var e8 = n(705285),
    e5 = n(199781),
    e3 = n(923477),
    e4 = n(269249),
    e7 = n(55766),
    e9 = n(758836),
    te = n(111108);
function tt(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, a.jsx)(L.A, { children: (0, a.jsx)(tn, { isGameServerHostingInShopEnabled: t }) });
}
function tn(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, A.zy)(),
        l = (0, A.W6)(),
        { servers: s, refetch: r } = (0, e7.f)(),
        c = s.length > 0,
        o = (0, v.bG)([E.default], () => k.Ay.canUseShopDiscounts(E.default.getCurrentUser())),
        { games: d, hasError: u, isEmpty: m, isLoading: g, refetch: h } = (0, e4.Y)();
    i.useEffect(() => {
        c && (0, j.hP)().catch(() => {});
    }, [c]);
    let f = i.useRef(d);
    i.useEffect(() => {
        d.length > 0 && (f.current = d);
    }, [d]);
    let x = i.useCallback(() => {
            (h(), r());
        }, [h, r]),
        C = (0, e8.VJ)(),
        [p, S] = i.useState({ serverId: null, nonce: 0 }),
        _ = i.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = G.A.getGameServers();
                for (let l = n.length - 1; l >= 0; l--)
                    if (n[l].game_id === e.gameId) {
                        t = n[l].id;
                        break;
                    }
            }
            S((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        b = i.useCallback(() => {
            let e = s[0];
            null != e && _({ serverId: e.id });
        }, [s, _]),
        L = (0, e3.O)((e) => e.highlightFirstCardNonce),
        D = i.useRef(L);
    i.useEffect(() => {
        if (L === D.current) return;
        D.current = L;
        let e = requestAnimationFrame(() => b());
        return () => cancelAnimationFrame(e);
    }, [L, b]);
    let B = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e8.cl.SHOP_CARD;
                (C(e8.L5.OPEN_PLAN_MODAL, t),
                    (0, e5.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => _({ gameId: e.gameId }),
                    }));
            },
            [C, _],
        ),
        F = i.useMemo(() => {
            let e = new URLSearchParams(n.search).get(e9.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    i.useEffect(() => {
        if (!t || null == F || g || 0 === d.length) return;
        let e = d.find((e) => e.gameId === F);
        if (null == e) return;
        B(e, e8.cl.ACTIVITY_PANEL_DEEP_LINK);
        let s = new URLSearchParams(n.search);
        (s.delete(e9.tD), l.replace(`${n.pathname}?${s.toString()}`));
    }, [t, F, d, g, B, l, n.pathname, n.search]);
    let H = i.useCallback(() => {
            (N.A.setState({ scrollToGameServers: !0 }), (0, T.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL));
        }, []),
        w = i.useCallback((e) => {
            let t = R.default.getId() ?? "0";
            (0, P.A)(t, e.instance);
        }, []),
        U = i.useCallback((e) => {
            (0, M.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        z = i.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = f.current.find((t) => t.gameId === e.gameId);
                function l(t) {
                    (0, e5.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: n?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => _({ serverId: e.id }),
                    });
                }
                let s = y.A.getSubscriptionById(t);
                null != s
                    ? l(s)
                    : (0, j.hP)()
                          .then(() => {
                              let e = y.A.getSubscriptionById(t);
                              null != e && l(e);
                          })
                          .catch(() => {});
            },
            [_],
        ),
        K = c ? Y.intl.string(V.default["+aRmAc"]) : void 0;
    return (0, a.jsx)(I.Ch, {
        className: te.XG,
        children: (0, a.jsxs)("div", {
            className: te.kL,
            children: [
                !o && (0, a.jsx)($, {}),
                (0, a.jsx)(ep, {}),
                (0, a.jsxs)("div", {
                    className: te.Qs,
                    children: [
                        (0, a.jsx)(ex, {}),
                        c &&
                            (0, a.jsx)(e6, {
                                servers: s,
                                onViewAll: H,
                                onJoin: w,
                                onViewPanel: U,
                                onOpenSettings: z,
                                highlightServerId: p.serverId,
                                highlightNonce: p.nonce,
                            }),
                        u || m
                            ? (0, a.jsx)(J, { onRetry: x })
                            : (0, a.jsx)(ed, { games: d, title: K, onSelectGame: B, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var tl = n(856383),
    ts = n(110676),
    ta = n(4227),
    ti = n(856686),
    tr = n(95362),
    tc = n(783977),
    to = n(129230),
    td = n(918467),
    tu = n(758461),
    tm = n(641150);
function tg() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: l } = (0, _.vs)((e) => e),
        { totalCount: s, isFetchingResults: r } = (0, ti.S)(),
        c = (0, _.vs)((e) => e.hasFilters()),
        o = i.useCallback(() => {
            if (!c) return "";
            if (r) return Y.intl.string(Y.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return Y.intl.format(Y.t.KJMJOz, { count: s, search: e });
            }
            if (!n && !l && 1 === e.size) {
                if (e.has(tm.q.AVATAR_DECORATION)) return Y.intl.format(Y.t.s1UzGQ, { count: s });
                if (e.has(tm.q.NAMEPLATE)) return Y.intl.format(Y.t.ZWGN9T, { count: s });
                if (e.has(tm.q.PROFILE_EFFECT)) return Y.intl.format(Y.t["v/7apu"], { count: s });
                if (e.has(tm.q.PROFILE_FRAME)) return Y.intl.format(Y.t.eu4eRy, { count: s });
                if (e.has(tm.q.BUNDLE)) return Y.intl.format(Y.t.fZ1rdk, { count: s });
            }
            return 0 === e.size && n && !l
                ? Y.intl.format(Y.t.TxoTTj, { count: s })
                : 0 === e.size && l && !n
                  ? Y.intl.format(Y.t.TLso50, { count: s })
                  : Y.intl.format(Y.t["/rPvmQ"], { count: s });
        }, [e, s, c, t, r, n, l]);
    return (0, a.jsx)(q.D, { variant: "heading-lg/semibold", children: o() });
}
var tE = n(172218),
    th = n(662203),
    tf = n(511265),
    tx = n(206077),
    tC = n(100057),
    tp = n(812760),
    tS = n(484469),
    t_ = n(761977),
    tA = n(170522),
    tv = n(295621);
let tb = function () {
    return (0, a.jsx)("div", {
        className: tv.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: tA.vY,
                    children: [
                        (0, a.jsx)("div", { className: c()(t_.sW, tv.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, a.jsx)(tS.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tI = n(987421),
    tj = n(350172),
    tL = n(730202),
    tN = n(510801),
    tO = n(998694);
let tT = null,
    tR = new Map();
function ty(e) {
    let { category: t } = e,
        n = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        l = (0, tx.X)(t.products),
        s = (0, tf.p)()(l);
    return null == n || 0 === s.length
        ? null
        : (0, a.jsx)("div", {
              className: tA.vY,
              children: s.map((e, t) =>
                  (0, a.jsx)(
                      h.R9,
                      { newValue: { tilePosition: t }, children: (0, a.jsx)(tI.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tM(e) {
    let { category: t, currentPage: n } = e,
        [l, s] = i.useState(!1),
        r = (0, tE.K)(function (e) {
            s(e);
        }, 0.15),
        c = (0, A.W6)(),
        o = (0, h.uM)(),
        d = i.useCallback(() => {
            var e;
            (to.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: o?.sessionId,
                sku_id: t.skuId,
                page_type: e9.G2.CATALOG,
                page_section: o?.pageSection,
                page_category: t.name,
                page_index: o?.pageIndex,
                page_size: o?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e = t.skuId),
                (tT = e),
                null != e && null != n && tR.set(e, n),
                c.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId)));
        }, [o?.pageIndex, o?.pageSection, o?.pageSize, o?.sessionId, t.name, t.skuId, n, c]);
    return (0, a.jsxs)("div", {
        className: tA.EF,
        ref: r,
        children: [(0, a.jsx)(tp.A, { category: t, onSelect: d }), (0, a.jsx)(ty, { category: t })],
    });
}
function tk(e) {
    let { setCategoryRef: t, currentPage: n, handlePageChange: l, initialCategoryId: s } = e,
        r = (0, h.uM)(),
        c = r?.sessionId ?? "",
        { noCache: o, includeUnpublished: d } = (0, tO.A)(),
        {
            categories: u,
            total: m,
            isLoading: g,
        } = (function (e) {
            let { page: t, pageSize: n, includeUnpublished: l, noCache: s } = e,
                a = i.useMemo(
                    () => ({
                        applicationId: eW.FYj,
                        offset: (t - 1) * n,
                        limit: n,
                        useShopOrdering: !0,
                        includeUnpublishedProducts: l,
                        includeUnpublishedCollections: l,
                        ignoreCache: s,
                    }),
                    [t, n, l, s],
                ),
                r = (0, tj.H)(a),
                c = (0, tj.q7)(a);
            i.useEffect(() => {
                (0, tj.cS)(a);
            }, [a]);
            let {
                    collectionIds: o,
                    fetchState: d,
                    total: u,
                } = (0, v.cf)(
                    [tL.A],
                    () => ({
                        collectionIds: tL.A.getCollectionPageIds(r),
                        fetchState: tL.A.getCollectionPageFetchState(r),
                        total: tL.A.getCollectionListTotal(c),
                    }),
                    [r, c],
                ),
                m = o ?? [],
                g = m.join(","),
                E = (0, v.cf)(
                    [tL.A],
                    () => {
                        let e = {};
                        for (let t of m) e[t] = tL.A.getCollection(t);
                        return e;
                    },
                    [m],
                );
            return {
                categories: i.useMemo(
                    () =>
                        m
                            .map((e) => E[e])
                            .filter((e) => null != e)
                            .map((e) => tN.A.fromStorefrontCollectionRecord(e)),
                    [g, E],
                ),
                total: u ?? 0,
                isLoading: null == o && "error" !== d,
            };
        })({ page: n, pageSize: 5, includeUnpublished: d, noCache: o }),
        E = i.useRef(void 0);
    i.useEffect(() => {
        if (null == s) {
            E.current = void 0;
            return;
        }
        if (s === E.current) return;
        let e = tR.get(s);
        null != e && (e !== n && l(e), (E.current = s));
    }, [s, l, n]);
    let f = i.useMemo(() => u.filter((e) => e.products.length > 0), [u]);
    return (i.useEffect(() => {
        (0, tC.z)({
            sessionId: c,
            checkpoint: tC.t.SHOP_MOUNTED,
            tab: e9.G2.CATALOG,
            unpublishedCategoriesShown: d,
            cacheDisabled: o,
        });
    }, []),
    i.useEffect(() => {
        g ||
            0 === f.length ||
            (0, tC.z)({
                sessionId: c,
                checkpoint: tC.t.SHOP_RENDERED,
                tab: e9.G2.CATALOG,
                unpublishedCategoriesShown: d,
                cacheDisabled: o,
            });
    }, [c, d, o, g, f.length]),
    g)
        ? (0, a.jsx)(tb, {})
        : (0, a.jsxs)("div", {
              className: tA.LZ,
              children: [
                  f.map((e, l) =>
                      (0, a.jsx)(
                          "div",
                          {
                              ref: (n) => t(e.skuId, n),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": Y.intl.formatToPlainString(Y.t.FNtLb3, { category: e.name }),
                              children: (0, a.jsx)(h.R9, {
                                  newValue: { categoryPosition: l },
                                  children: (0, a.jsx)(tM, { category: e, currentPage: n }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, a.jsx)("div", {
                      className: tA.Ej,
                      children: (0, a.jsx)(th.m, {
                          currentPage: n,
                          totalCount: m,
                          pageSize: 5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tG = n(177366),
    tP = n(401864),
    tD = n(124987),
    tB = n(691885),
    tF = n(460348),
    tH = n(878278);
let tw = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, _.vs)(),
        l = (0, h.uM)(),
        s = (0, tF.yB)("CollectiblesSortSelect"),
        r = n(),
        o = i.useMemo(() => e9.QB.filter((e) => e.sortType !== tD.$.RELEVANCE || r), [r]),
        d = i.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tD.$.RECENCY
                ? { label: Y.intl.string(Y.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tD.$.PRICE
                  ? n === tP.A.ASC
                      ? { label: Y.intl.string(Y.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: Y.intl.string(Y.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tD.$.RELEVANCE
                    ? { label: Y.intl.string(Y.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: Y.intl.string(Y.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        u = i.useCallback(
            (e) =>
                ({
                    recent: { sortType: tD.$.RECENCY, sortDirection: tP.A.DESC },
                    "price-asc": { sortType: tD.$.PRICE, sortDirection: tP.A.ASC },
                    "price-desc": { sortType: tD.$.PRICE, sortDirection: tP.A.DESC },
                    popularity: { sortType: tD.$.POPULARITY, sortDirection: tP.A.DESC },
                    relevance: { sortType: tD.$.RELEVANCE, sortDirection: tP.A.DESC },
                })[e],
            [],
        ),
        m = i.useCallback(
            (e) => {
                let n = d(u(e));
                (to.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(u(e)));
            },
            [l, d, u, t],
        ),
        g = d(e);
    return (0, a.jsx)("div", {
        className: c()(tH.k, { [tF.jP]: s }),
        children: (0, a.jsx)(tB.l, {
            label: Y.intl.string(Y.t.uaX705),
            hideLabel: !0,
            options: o.map(d),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var tU =
        (((l = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (l.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (l.PINK = "COLLECTIBLES_COLOR_PINK"),
        (l.RED = "COLLECTIBLES_COLOR_RED"),
        (l.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (l.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (l.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (l.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (l.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (l.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        l),
    tz =
        (((s = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (s.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (s.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (s.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (s.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (s.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (s.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (s.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (s.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (s.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        s),
    tK = n(150934),
    tV = n(805251),
    tY = n(278416),
    tW = n(602853),
    t$ = n(646514),
    tZ = n(947641),
    tq = n(604338),
    tQ = n(785866),
    tX = n(373846),
    tJ = n(308323),
    t0 = n(608599),
    t1 = n(685761),
    t2 = n(157225),
    t6 = n(413249),
    t8 = n(510241),
    t5 = n(601198),
    t3 = n(431527),
    t4 = n(890283),
    t7 = n(7250),
    t9 = n(582666);
function ne() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: l,
            onToggleOfferEligible: s,
            offerEligible: r,
            reset: c,
            hasFilters: o,
        } = (0, _.vs)(),
        d = o(),
        u = (0, h.uM)(),
        m = i.useRef(null),
        g = i.useId(),
        E = i.useId(),
        f = (0, tu.HH)(),
        x = i.useCallback(
            (e) => {
                to.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: u?.sessionId,
                    page_section: u?.pageSection,
                    page_category: u?.pageCategory,
                    page_index: u?.pageIndex,
                    page_size: u?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [u],
        ),
        C = i.useCallback(() => {
            (x(`filter 3p only ${!1 === l ? "on" : "off"}`), n());
        }, [n, l, x]);
    return (0, a.jsxs)("div", {
        className: t9.kT,
        children: [
            (0, a.jsxs)("div", {
                className: t9.KZ,
                children: [
                    (0, a.jsx)("div", {
                        ref: m,
                        tabIndex: -1,
                        children: (0, a.jsx)(q.D, {
                            variant: "heading-sm/semibold",
                            className: t9.hr,
                            id: g,
                            children: Y.intl.string(Y.t.aDZysP),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        role: "group",
                        "aria-labelledby": g,
                        className: t9.mM,
                        children: e9._6.map((e) => (0, a.jsx)(nt, { filter: e, trackFilterAction: x }, e)),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: t9.KZ,
                children: [
                    (0, a.jsx)(q.D, {
                        variant: "heading-sm/semibold",
                        className: t9.hr,
                        id: E,
                        children: Y.intl.string(Y.t.Vfebhe),
                    }),
                    (0, a.jsxs)("div", {
                        role: "group",
                        "aria-labelledby": E,
                        className: t9.mM,
                        children: [
                            (0, a.jsx)(tK.S, {
                                checked: t,
                                onChange: () => {
                                    (x(`filter orb eligible ${!1 === t ? "on" : "off"}`), e());
                                },
                                label: Y.intl.string(Y.t.AHHHgG),
                            }),
                            (0, a.jsx)(tK.S, { checked: l, onChange: C, label: Y.intl.string(Y.t["+W8gb+"]) }),
                            null != f &&
                                (0, a.jsxs)("div", {
                                    className: t9.Ym,
                                    children: [
                                        (0, a.jsx)(tK.S, {
                                            checked: r,
                                            onChange: () => {
                                                (x(`filter offer eligible ${!1 === r ? "on" : "off"}`), s());
                                            },
                                            label: Y.intl.string(Y.t.hY8Ft1),
                                        }),
                                        (0, a.jsx)(tV.E, {
                                            type: { text: Y.intl.string(Y.t["nb5PC/"]) },
                                            icon: tY.TagIcon,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(nn, { trackFilterAction: x }),
            (0, a.jsx)(na, { trackFilterAction: x }),
            d &&
                (0, a.jsx)(H.$, {
                    variant: "secondary",
                    onClick: () => {
                        (x("filter reset"), c(), requestAnimationFrame(() => m.current?.focus()));
                    },
                    text: Y.intl.string(Y.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nt(e) {
    let { filter: t, trackFilterAction: n } = e,
        l = {
            [tm.q.AVATAR_DECORATION]: Y.intl.string(Y.t.dRZYNE),
            [tm.q.PROFILE_EFFECT]: Y.intl.string(Y.t["1cNjtx"]),
            [tm.q.NAMEPLATE]: Y.intl.string(Y.t.V68Fqz),
            [tm.q.PROFILE_FRAME]: Y.intl.string(Y.t.ecTJkR),
            [tm.q.BUNDLE]: Y.intl.string(Y.t.FYFpps),
        },
        { itemTypeFilters: s, onToggleItemType: i } = (0, _.vs)();
    return (0, a.jsx)(tK.S, {
        checked: s.has(t),
        onChange: () => {
            let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
            (n(`filter item type ${e} ${!1 === s.has(t) ? "on" : "off"}`), i(t));
        },
        label: l[t] ?? "",
    });
}
function nn(e) {
    let { trackFilterAction: t } = e,
        n = i.useMemo(
            () => [
                { color: "#9B59B6", label: Y.intl.string(Y.t.kqUD4P), enum: tU.PURPLE },
                { color: "#3498DB", label: Y.intl.string(Y.t.qQTRae), enum: tU.BLUE },
                { color: "#2ECC71", label: Y.intl.string(Y.t["f/Ylk6"]), enum: tU.GREEN },
                { color: "#A0522D", label: Y.intl.string(Y.t["Sd/BMa"]), enum: tU.BROWN },
                { color: "#F1C40F", label: Y.intl.string(Y.t["0fevYz"]), enum: tU.YELLOW },
            ],
            [],
        ),
        l = i.useMemo(
            () => [
                { color: "#E67E22", label: Y.intl.string(Y.t.ZE7weD), enum: tU.ORANGE },
                { color: "#E74C3C", label: Y.intl.string(Y.t.hKJGOM), enum: tU.RED },
                { color: "#EC407A", label: Y.intl.string(Y.t.HvLEGM), enum: tU.PINK },
                { color: "#FFFFFF", label: Y.intl.string(Y.t["CB+lNO"]), enum: tU.WHITE },
                { color: "#262626", label: Y.intl.string(Y.t["dMey+v"]), enum: tU.BLACK },
            ],
            [],
        );
    return (0, a.jsxs)("div", {
        className: t9.KZ,
        children: [
            (0, a.jsx)(q.D, { variant: "heading-sm/semibold", className: t9.hr, children: Y.intl.string(Y.t.K1xGoG) }),
            (0, a.jsx)(nl, { colors: n, trackFilterAction: t }),
            (0, a.jsx)(nl, { colors: l, trackFilterAction: t }),
        ],
    });
}
function nl(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: l, onToggleColor: s } = (0, _.vs)();
    return (0, a.jsx)("div", {
        className: t9.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: r } = e;
            return (0, a.jsx)(
                ns,
                { color: t, label: i, enum: r, isToggled: l.has(r), onToggleColor: s, trackFilterAction: n },
                r,
            );
        }),
    });
}
function ns(e) {
    let { color: t, label: n, enum: l, isToggled: s, onToggleColor: i, trackFilterAction: r } = e,
        o = (0, tW.r)(t$.A.unsafe_rawColors.WHITE).hex(),
        d = (0, tW.r)(t$.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, a.jsx)(
        eN.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, a.jsx)(
                ej.D,
                {
                    className: c()(t9.n1, { [t9.lx]: s }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": s,
                    onClick: () => {
                        (r(`filter color ${n.toLowerCase()} ${!s ? "on" : "off"}`), i(l));
                    },
                    children:
                        s &&
                        (0, a.jsx)("div", {
                            className: t9.oE,
                            children: (0, a.jsx)(tZ.r, {
                                size: "xs",
                                color: (0, t7.j)({ backgroundColor: t, colors: [o, d] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function na(e) {
    let { trackFilterAction: t } = e,
        { enabled: n } = t4.A.useConfig({ location: "collectibles-shop-theme-filters" });
    return n ? (0, a.jsx)(nr, { trackFilterAction: t }) : (0, a.jsx)(ni, { trackFilterAction: t });
}
function ni(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, _.vs)(),
        s = (0, Q.Ay)() === K.NJ.DARK,
        r = i.useCallback(
            (e) => {
                if (n.has(e) || s) return "control-primary-text-default";
            },
            [n, s],
        ),
        o = i.useCallback((e) => (n.has(e) || s ? t$.A.colors.WHITE : t$.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, s]),
        d = i.useMemo(
            () => [
                {
                    name: Y.intl.string(Y.t.aVBOKh),
                    icon: (0, a.jsx)(tq.E, { size: "xs", color: o(tz.ANIME) }),
                    enum: tz.ANIME,
                },
                {
                    name: Y.intl.string(Y.t["3WoZBc"]),
                    icon: (0, a.jsx)(tQ._, { size: "xs", color: o(tz.GAMING) }),
                    enum: tz.GAMING,
                },
                {
                    name: Y.intl.string(Y.t.yuEmLj),
                    icon: (0, a.jsx)(tX.C, { size: "xs", color: o(tz.CUTE_COZY) }),
                    enum: tz.CUTE_COZY,
                },
                {
                    name: Y.intl.string(Y.t.mMvCHo),
                    icon: (0, a.jsx)(tJ.L, { size: "xs", color: o(tz.SCI_FI) }),
                    enum: tz.SCI_FI,
                },
                {
                    name: Y.intl.string(Y.t.TlhOQC),
                    icon: (0, a.jsx)(t0.L, { size: "xs", color: o(tz.FOOD_DRINKS) }),
                    enum: tz.FOOD_DRINKS,
                },
                {
                    name: Y.intl.string(Y.t["4IaUIM"]),
                    icon: (0, a.jsx)(t1.f, { size: "xs", color: o(tz.FANTASY) }),
                    enum: tz.FANTASY,
                },
                {
                    name: Y.intl.string(Y.t["w0nSG/"]),
                    icon: (0, a.jsx)(t2.N, { size: "xs", color: o(tz.ANIMALS_PETS) }),
                    enum: tz.ANIMALS_PETS,
                },
                {
                    name: Y.intl.string(Y.t.cJng7v),
                    icon: (0, a.jsx)(t6.p, { size: "xs", color: o(tz.NATURE) }),
                    enum: tz.NATURE,
                },
                {
                    name: Y.intl.string(Y.t["5mUvyM"]),
                    icon: (0, a.jsx)(t8.T, { size: "xs", color: o(tz.MOVIES_TV_SHOWS) }),
                    enum: tz.MOVIES_TV_SHOWS,
                },
                {
                    name: Y.intl.string(Y.t.MB9H5Z),
                    icon: (0, a.jsx)(t5.e, { size: "xs", color: o(tz.DARK_MOODY) }),
                    enum: tz.DARK_MOODY,
                },
            ],
            [o],
        );
    return (0, a.jsxs)("div", {
        className: t9.KZ,
        children: [
            (0, a.jsx)(q.D, { variant: "heading-sm/semibold", className: t9.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, a.jsx)("div", {
                className: t9.Ot,
                children: d.map((e) => {
                    let { name: s, icon: i, enum: o } = e;
                    return (0, a.jsxs)(
                        ej.D,
                        {
                            className: c()(t9.w4, { [t9.C7]: n.has(o) }),
                            "aria-label": s,
                            "aria-pressed": n.has(o),
                            onClick: () => {
                                let e = n.has(o);
                                (t(`filter theme ${s.toLowerCase()} ${!e ? "on" : "off"}`), l(o));
                            },
                            children: [i, (0, a.jsx)(F.E, { color: r(o), variant: "body-md/medium", children: s })],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
function nr(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, _.vs)(),
        s = i.useMemo(
            () => [
                { name: Y.intl.string(Y.t.aVBOKh), icon: tq.E, enum: tz.ANIME },
                { name: Y.intl.string(Y.t["3WoZBc"]), icon: tQ._, enum: tz.GAMING },
                { name: Y.intl.string(Y.t.yuEmLj), icon: tX.C, enum: tz.CUTE_COZY },
                { name: Y.intl.string(Y.t.mMvCHo), icon: tJ.L, enum: tz.SCI_FI },
                { name: Y.intl.string(Y.t.TlhOQC), icon: t0.L, enum: tz.FOOD_DRINKS },
                { name: Y.intl.string(Y.t["4IaUIM"]), icon: t1.f, enum: tz.FANTASY },
                { name: Y.intl.string(Y.t["w0nSG/"]), icon: t2.N, enum: tz.ANIMALS_PETS },
                { name: Y.intl.string(Y.t.cJng7v), icon: t6.p, enum: tz.NATURE },
                { name: Y.intl.string(Y.t["5mUvyM"]), icon: t8.T, enum: tz.MOVIES_TV_SHOWS },
                { name: Y.intl.string(Y.t.MB9H5Z), icon: t5.e, enum: tz.DARK_MOODY },
            ],
            [],
        ),
        r = i.useMemo(() => new Set(Array.from(n, (e) => String(e))), [n]);
    return (0, a.jsxs)("div", {
        className: t9.KZ,
        children: [
            (0, a.jsx)(q.D, { variant: "heading-sm/semibold", className: t9.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, a.jsx)(t3.C, {
                variant: "filter",
                selectionMode: "multiple",
                label: Y.intl.string(Y.t.YieJl5),
                items: s.map((e) => {
                    let { name: t, icon: n, enum: l } = e;
                    return { id: String(l), label: t, icon: n };
                }),
                selectedKeys: r,
                onSelectionChange: (e) => {
                    if ("all" === e) return;
                    let a = s.find((t) => {
                        let { enum: l } = t;
                        return e.has(String(l)) !== n.has(l);
                    });
                    if (null == a) return;
                    let i = n.has(a.enum);
                    (t(`filter theme ${a.name.toLowerCase()} ${!i ? "on" : "off"}`), l(a.enum));
                },
            }),
        ],
    });
}
var nc = n(415926),
    no = n(561769),
    nd = n(66506);
function nu() {
    return (0, a.jsxs)("div", {
        className: nd.k,
        children: [
            (0, a.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: Y.intl.string(Y.t.oezC3x),
                className: nd._,
            }),
            (0, a.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.oezC3x) }),
            (0, a.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t["Tc/Ndl"]) }),
        ],
    });
}
var nm = n(919303);
let ng = { flattenProductVariants: !0 };
function nE(e) {
    let { scrollerRef: t, tab: n } = e,
        l = (0, h.uM)(),
        s = l?.sessionId ?? "",
        { noCache: r, includeUnpublished: d } = (0, tO.A)(),
        u = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        { skus: m, currentPage: g, totalCount: f, isFetchingResults: x } = (0, ti.S)(),
        C = i.useCallback(() => {
            t?.current?.scrollToTop({ animate: !0 });
        }, [t]),
        p = m?.join("");
    i.useEffect(() => {
        C();
    }, [p, C]);
    let S = m.length;
    i.useEffect(() => {
        (0, tC.z)({
            sessionId: s,
            checkpoint: tC.t.SHOP_RENDERED,
            tab: n,
            unpublishedCategoriesShown: d,
            cacheDisabled: r,
        });
    }, [s, d, r, n]);
    let A = i.useRef(null),
        { setQueryPageSize: v, setQueryPageOffset: b, queryPageSize: I } = (0, _.vs)(),
        [j, L] = i.useState(!1),
        N = x || null == u;
    i.useEffect(() => {
        N ? L(!1) : S > 0 && L(!0);
    }, [N, S]);
    let O = I > 0 && !N && 0 === S;
    i.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == A.current || v(Math.floor(5 * getComputedStyle(A.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != A.current) return (e.observe(A.current), () => e.disconnect());
    }, [v]);
    let T = i.useCallback(
        (e) => {
            (to.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: I,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                b((e - 1) * I));
        },
        [l, I, b],
    );
    return (0, a.jsxs)(no.v3.Provider, {
        value: ng,
        children: [
            (0, a.jsxs)("div", {
                className: c()({ [nm.oE]: O }),
                children: [
                    O && (0, a.jsx)(nu, {}),
                    (0, a.jsxs)("div", {
                        className: c()(nm.ZE, { [nm.Kp]: j }),
                        ref: A,
                        children: [
                            N && [...Array(I)].map((e, t) => (0, a.jsx)(tS.A, {}, t)),
                            !N &&
                                m.map((e, t) =>
                                    (0, a.jsx)(
                                        h.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, a.jsx)(tI.A, {
                                                skuId: e,
                                                hideStaticBundleBackgroundAsset: !0,
                                            }),
                                        },
                                        e,
                                    ),
                                ),
                        ],
                    }),
                ],
            }),
            f > I &&
                (0, a.jsx)("div", {
                    className: nm.Ej,
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(th.m, {
                            currentPage: g,
                            totalCount: f,
                            pageSize: I,
                            onPageChange: T,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nh = n(578364);
function nf(e) {
    let { tab: t, initialCategoryId: n, showFilterInitially: l = !0, onUnmount: s } = e,
        r = (0, g.A)("shop_include_unpublished");
    (!(function () {
        let e = (0, v.bG)([td.A], () => "success" === td.A.getFetchState(eW.FYj)),
            t = null != (0, tu.HH)(),
            { offerEligible: n, clearFilters: l } = (0, _.vs)();
        i.useEffect(() => {
            n && e && !t && l();
        }, [n, e, t, l]);
    })(),
        (0, _.Sf)(r));
    let c = i.useRef(null),
        { handleScroll: o } = (0, nc.r)(c, t),
        { setCategoryRef: d, handleScrollToCategory: u } = (0, tG.k0)(c),
        [m, E] = i.useState(l),
        [h, f] = i.useState(!1);
    return (
        i.useEffect(() => {
            null != n && u(n);
        }, [n, u]),
        i.useEffect(
            () => () => {
                null != s && s();
            },
            [],
        ),
        i.useEffect(() => {
            function e() {
                f(window.innerWidth < 1400);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        (0, a.jsx)("div", {
            className: nh.VM,
            children: (0, a.jsxs)("main", {
                className: nh.MY,
                children: [
                    (0, a.jsx)(I.Gt, {
                        className: nh.OW,
                        ref: c,
                        onScroll: o,
                        scrollbarGutter: "both-edges",
                        children: (0, a.jsx)(nx, {
                            isSmallScreen: h,
                            filterBarOpen: m,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: c,
                            setCategoryRef: d,
                            initialCategoryId: n,
                        }),
                    }),
                    m && !h && (0, a.jsx)("div", { className: nh.yF }),
                    m && !h && (0, a.jsx)(tr.Ip, { className: nh.kT, children: (0, a.jsx)(ne, {}) }),
                ],
            }),
        })
    );
}
function nx(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: l,
            tab: s,
            scrollerRef: r,
            setCategoryRef: o,
            initialCategoryId: d,
        } = e,
        u = i.useRef(null),
        m = (0, _.vs)((e) => e.hasDefaultFilters()),
        g = (0, h.uM)(),
        { handlePageChange: E, currentPage: f } = (function (e) {
            let [t, n] = i.useState(1);
            return {
                currentPage: t,
                handlePageChange: i.useCallback(
                    (t) => {
                        (n(t), e.current?.scrollTo({ to: 0 }));
                    },
                    [e, n],
                ),
            };
        })(r),
        x = i.useCallback(
            (e) => {
                (to.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    page_index: e,
                    page_size: g?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    E(e));
            },
            [g, E],
        ),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            if (t && n)
                return (document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e));
            function e(e) {
                let t = e.target;
                null === u.current ||
                    null === C.current ||
                    u.current.contains(t) ||
                    C.current.contains(t) ||
                    (to.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: g?.sessionId,
                        page_section: g?.pageSection,
                        page_category: g?.pageCategory,
                        page_index: g?.pageIndex,
                        page_size: g?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    l(!1));
            }
        }, [t, n, l, g]),
        (0, a.jsx)("div", {
            className: nh.en,
            children: (0, a.jsxs)("div", {
                className: nh.pf,
                children: [
                    (0, a.jsxs)("div", {
                        className: nh.ne,
                        children: [
                            (0, a.jsx)("div", { className: nh.lQ, children: (0, a.jsx)(tg, {}) }),
                            (0, a.jsxs)("div", {
                                className: c()(nh.wR, { [nh.Im]: t }),
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nh.Ul,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-md/semibold",
                                                children: Y.intl.string(Y.t.uaX705),
                                            }),
                                            (0, a.jsx)(tw, {}),
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        ref: C,
                                        children: (0, a.jsx)(H.$, {
                                            onClick: function () {
                                                let e = !n;
                                                (to.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: g?.sessionId,
                                                    page_section: g?.pageSection,
                                                    page_category: g?.pageCategory,
                                                    page_index: g?.pageIndex,
                                                    page_size: g?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    l(e));
                                            },
                                            variant: "secondary",
                                            text: Y.intl.string(n ? Y.t.fYtm6f : Y.t["TeTYE+"]),
                                            icon: tc.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, a.jsx)("div", {
                                    className: nh.Dh,
                                    ref: u,
                                    children: (0, a.jsx)(I.Ch, { className: nh.Qo, children: (0, a.jsx)(ne, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, a.jsx)(h.R9, {
                              newValue: { pageIndex: f },
                              children: (0, a.jsx)(tk, {
                                  setCategoryRef: o,
                                  currentPage: f,
                                  handlePageChange: x,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, a.jsx)(nE, { scrollerRef: r, tab: s }, s),
                ],
            }),
        })
    );
}
var nC = n(599062),
    np = n(253782),
    nS = n(417388);
let n_ = function () {
        return (0, a.jsxs)("div", {
            className: nS.z,
            children: [
                (0, a.jsx)("img", {
                    className: nS.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: Y.intl.string(Y.t["p8+qtU"]),
                }),
                (0, a.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["p8+qtU"]) }),
                (0, a.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t.UEiyvs) }),
            ],
        });
    },
    nA = [e9.G2.HOME, e9.G2.ORBS];
async function nv() {
    try {
        await (0, ts.gB)();
    } catch {}
}
function nb(e) {
    let { tab: t, transitionToTab: n, transitionState: l, updateAnalyticsState: s } = e,
        r = (0, v.bG)([ta.A], () =>
            null != ta.A.claimError
                ? `shop load claim error: ${ta.A.claimError.message}`
                : null != ta.A.fetchError
                  ? `shop load fetch purchase error: ${ta.A.fetchError.message}`
                  : void 0,
        );
    !(function (e) {
        let t = (0, v.bG)([E.default], () => E.default.getCurrentUser()),
            { noCache: n, includeUnpublished: l } = (0, tO.A)();
        i.useEffect(() => {
            null != e &&
                tl.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: l.toString(),
                    },
                });
        }, [e, t, n, l]);
    })(r);
    let c = (0, b.H)({ location: "collectibles_content" }),
        o = (0, A.W6)(),
        d = (0, A.zy)(),
        [u] = i.useState(() => {
            if ("POP" === o.action) {
                let e;
                return ((e = tT), (tT = null), e ?? void 0);
            }
        }),
        [m, g] = i.useState(u),
        [h, f] = i.useState(null == u),
        x = i.useMemo(() => {
            let e = new URLSearchParams(d.search).get(e9.P1);
            return null != e && "" !== e ? e : void 0;
        }, [d.search]),
        C = i.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: l,
                    shouldAnimate: a,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((s(t, l), null != l && i && !r)) return void o.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
                let c = r ? e9.G2.ORBS : e9.G2.CATALOG;
                (g(l), f(!i), n(c, a));
            },
            [n, s, o],
        ),
        { searchError: p } = (0, ti.S)();
    return null != p
        ? (0, a.jsx)(n_, {})
        : null != r
          ? (0, a.jsx)(nC.h, { onRetry: nv, errorMessage: r, errorOrigin: nC.A.SHOP_PAGE })
          : nA.includes(t)
            ? (0, a.jsx)(np.A, { handleTransition: C, tab: t, transitionState: l })
            : t === e9.G2.GAME_SERVERS
              ? c
                  ? (0, a.jsx)(tt, { isGameServerHostingInShopEnabled: c })
                  : (0, a.jsx)(A.rd, { to: eW.BVt.COLLECTIBLES_SHOP_WITH_TAB(e9.G2.HOME) })
              : (0, a.jsx)(nf, {
                    tab: t,
                    initialCategoryId: m ?? x,
                    showFilterInitially: h && null == x,
                    onUnmount: () => {
                        (g(void 0), f(!0));
                    },
                });
}
var nI = n(685491),
    nj = n(235939),
    nL = n(976860),
    nN = n(352373),
    nO = n(650583);
function nT(e) {
    let { children: t, shouldAddEventListener: n, onClose: l } = e,
        s = (0, d.Rv)();
    return (
        i.useEffect(() => {
            if (n && !s) return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
            function e(e) {
                e.key === nO.N$.Escape && l();
            }
        }, [n, s, l]),
        t
    );
}
let nR = function (e) {
    let { tab: t = e9.G2.HOME, sessionId: n, containerRef: l } = e,
        s = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        { onClose: r } = (function () {
            let { search: e } = (0, A.zy)(),
                t = (0, A.g)(),
                n = i.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                l = null != n ? parseInt(n, 10) : null;
            return {
                onClose: i.useCallback(() => {
                    if (0 === l) {
                        ((0, nL.aX)(), (0, T.openUserSettings)());
                        return;
                    }
                    (0, nL.EL)() ? (0, nL.aX)() : (0, nL.pX)(eW.BVt.APP);
                }, [l]),
                source: l,
                ...t,
            };
        })(),
        { currentTab: d, hasFilters: v } = (0, _.vs)(),
        b = i.useMemo(() => (t === e9.G2.HOME && null != d && v() ? d : t), [t, d, v]);
    (0, p.Wg)();
    let [I, j] = i.useState(),
        L = (0, g.A)("shop_include_unpublished"),
        { category: N, state: O } = (0, C.A)(I, { includeUnpublished: L }),
        R = N?.name,
        [y, M] = i.useState();
    (0, tG.XU)(n);
    let k = i.useCallback((e, t) => {
            (M(e), j(t));
        }, []),
        { selectedTab: G, transitionState: P, transitionToTab: D } = (0, S.o)(b);
    ((0, m.HU)({ location: Y.intl.string(Y.t.pWG4ze) }),
        (0, x.uS)(n, G, R, P, { sourceButton: y, enabled: null == I || "loading" !== O }),
        (0, x.N0)(G, s));
    let { dismissShopButtonDC: B } = (0, nN.A)();
    (i.useEffect(() => {
        B(eZ.i.AUTO_DISMISS);
    }, [B]),
        i.useEffect(() => {
            l.current?.focus();
        }, [l]));
    let { analyticsLocations: F } = (0, x.lC)(G);
    return (0, a.jsx)(u.f5, {
        value: F,
        children: (0, a.jsx)(h.R9, {
            newValue: { pageCategory: R, pageSize: 5 },
            children: (0, a.jsx)(f.iM, {
                tab: G,
                children: (0, a.jsxs)(nT, {
                    onClose: r,
                    shouldAddEventListener: !1,
                    children: [
                        (0, a.jsx)(nI.G, { handleTransition: D, selectedTab: G }),
                        (0, a.jsx)(nj.A, { tab: G, handleTransition: D }),
                        (0, a.jsx)("div", {
                            className: c()(tA.td, {
                                [tA.RK]: P === e9.Pf.VISIBLE,
                                [tA.in]: P === e9.Pf.IN,
                                [tA.FD]: P === e9.Pf.OUT,
                            }),
                            children: (0, a.jsx)(nb, {
                                tab: G,
                                transitionToTab: D,
                                transitionState: P,
                                updateAnalyticsState: k,
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
};
