(n.r(t), n.d(t, { default: () => nR }));
var l,
    a,
    s = n(477900),
    i = n(582128),
    r = n(503698),
    o = n.n(r),
    c = n(164636),
    d = n(192308),
    u = n(688810),
    m = n(726249),
    g = n(354328),
    E = n(287809),
    h = n(857512),
    f = n(161918),
    x = n(12678),
    C = n(706113),
    p = n(841702),
    S = n(983545),
    A = n(365491);
(n(323874), n(14289), n(35956), n(321073));
var v = n(806163),
    _ = n(855986),
    I = n(196736),
    b = n(516521),
    j = n(781300),
    L = n(670735),
    N = n(790284),
    O = n(780964),
    T = n(766075),
    y = n(46653),
    R = n(166403),
    M = n(889558),
    k = n(722178),
    P = n(814201),
    G = n(581453),
    D = n(43990),
    B = n(403581),
    F = n(834730),
    H = n(821609),
    w = n(793574),
    U = n(778705),
    z = n(682901),
    V = n(818348),
    K = n(105518),
    Y = n(792996),
    W = n(876564);
function $() {
    let e = i.useCallback(() => {
        (0, U.A)({ subscriptionTier: z.pe.TIER_2, analyticsLocations: [w.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, s.jsx)(D.N, {
        theme: V.NJ.DARK,
        children: (t) =>
            (0, s.jsxs)("div", {
                className: o()(W.vK, t),
                children: [
                    (0, s.jsxs)("div", {
                        className: W.Pf,
                        children: [
                            (0, s.jsx)(B.NitroWheelIcon, {
                                className: W.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, s.jsx)(F.E, {
                                variant: "body-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: Y.intl.string(K.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)(H.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: B.NitroWheelIcon,
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
        a = (0, _.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, s.jsxs)("div", {
        className: X.kL,
        children: [
            (0, s.jsx)("img", {
                className: X.Sl,
                src: (0, Z.M)(l) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, s.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.i5SQ74) }),
            (0, s.jsx)(F.E, {
                className: X.h_,
                variant: "body-md/normal",
                color: "text-muted",
                children: Y.intl.string(Y.t.F8FvUy),
            }),
            a &&
                null != n &&
                (0, s.jsx)(F.E, { variant: "body-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, s.jsx)(H.$, { variant: "primary", text: Y.intl.string(Y.t["+hivLW"]), onClick: t }),
        ],
    });
}
var ee = n(349085),
    et = n(890856),
    en = n(331322),
    el = n(713517),
    ea = n(660669);
function es(e) {
    let { name: t, coverUrl: n, fromPriceLabel: l, nitroFromPriceLabel: a, onClickCard: r, onClickViewPlans: c } = e,
        d = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, el.A)(d),
        m = (0, _.bG)([E.default], () => k.Ay.canUseShopDiscounts(E.default.getCurrentUser())) && null != a,
        g = m ? a : l,
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), c?.());
            },
            [c],
        );
    return (0, s.jsxs)(et.s, {
        ref: d,
        onClick: r,
        "aria-label": t,
        className: o()(ea.Nr, { [ea.yo]: u }),
        children: [
            (0, s.jsx)("div", {
                className: ea.q4,
                "aria-hidden": !0,
                children: null != n && (0, s.jsx)("img", { className: ea.xy, src: n, alt: "" }),
            }),
            (0, s.jsxs)("div", {
                className: ea.Iv,
                children: [
                    null != n
                        ? (0, s.jsx)("img", { className: ea.N4, src: n, alt: "" })
                        : (0, s.jsx)("div", {
                              className: ea.WB,
                              children: (0, s.jsx)(F.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, s.jsx)("div", { className: ea.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: ea.qr,
                children: [
                    (0, s.jsxs)("div", {
                        className: ea.cs,
                        children: [
                            (0, s.jsx)(F.E, { variant: "body-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, s.jsx)("div", {
                                    className: ea.F1,
                                    children: (0, s.jsxs)(en.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, s.jsxs)(en.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, s.jsx)(B.NitroWheelIcon, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, s.jsx)(F.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: ea.E1,
                        children: (0, s.jsx)(H.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: Y.intl.string(K.default.NurDjc),
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
    return (0, s.jsx)("div", {
        className: o()(ea.Nr, ei.s7, ei.U6),
        "aria-hidden": !0,
        children: (0, s.jsxs)("div", {
            className: ei.qr,
            children: [(0, s.jsx)("div", { className: ei.w9 }), (0, s.jsx)("div", { className: ei.n2 })],
        }),
    });
}
var eo = n(901215);
let ec = i.memo(function (e) {
    let { game: t, onSelect: n } = e,
        l = i.useCallback(() => n(t), [t, n]),
        a = (0, ee.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, s.jsx)(es, {
        name: t.name,
        coverUrl: a,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: l,
        onClickViewPlans: l,
    });
});
function ed(e) {
    let { games: t, title: n, onSelectGame: l, loading: a = !1 } = e;
    return (0, s.jsxs)("section", {
        className: eo.u,
        children: [
            null != n && (0, s.jsx)(q.D, { variant: "heading-lg/semibold", children: n }),
            (0, s.jsx)("div", {
                className: eo.V,
                children: a
                    ? Array.from({ length: 10 }, (e, t) => (0, s.jsx)(er, {}, t))
                    : t.map((e) => (0, s.jsx)(ec, { game: e, onSelect: l }, e.id)),
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
            { Icon: eu.DownloadIcon, label: Y.intl.string(K.default.GJNQYz) },
            { Icon: em.CloudUploadIcon, label: Y.intl.string(K.default.pTinR2) },
            { Icon: eg.ShieldIcon, label: Y.intl.string(K.default.s0N1nM) },
            { Icon: eE.HourglassIcon, label: Y.intl.string(K.default.NzrGEi) },
        ],
        [],
    );
    return (0, s.jsxs)("section", {
        className: ef.ZK,
        children: [
            (0, s.jsxs)("div", {
                className: ef.jE,
                children: [
                    (0, s.jsx)(q.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: Y.intl.string(K.default.F5W36W),
                    }),
                    (0, s.jsxs)(F.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            Y.intl.string(K.default.xMpGuO),
                            " ",
                            (0, s.jsx)(eh.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: Y.intl.string(K.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: ef._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, s.jsxs)(
                        "div",
                        {
                            className: ef.Tc,
                            children: [
                                (0, s.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, s.jsx)(F.E, {
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
    return (0, s.jsxs)("div", {
        className: eC.vK,
        children: [
            (0, s.jsx)("div", {
                className: eC.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, s.jsx)("div", { className: eC.Ge, "aria-hidden": !0 }),
            (0, s.jsx)("div", { className: eC.f5, "aria-hidden": !0 }),
        ],
    });
}
var eS = n(408278),
    eA = n(548411),
    ev = n(554830),
    e_ = n(281445),
    eI = n(390544),
    eb = n(554146),
    ej = n(939249),
    eL = n(509434),
    eN = n(866665),
    eO = n(103271);
let eT = { TERTIARY: eO.Xe, SECONDARY: eO.Rm, PRIMARY: eO.zB },
    ey = { SIZE_24: eO.q1, SIZE_32: eO.Hb, SIZE_36: eO.VM };
function eR(e) {
    let {
        className: t,
        tooltip: n,
        color: l,
        size: a = ey.SIZE_32,
        icon: i,
        onMouseDown: r,
        onClick: c,
        disabled: d,
        focusProps: u,
        ref: m,
    } = e;
    return (0, s.jsx)(eN.m, {
        asContainer: !0,
        text: n,
        shouldShow: !d,
        children: (0, s.jsx)(ej.D, {
            innerRef: m,
            "aria-label": n,
            "aria-disabled": d,
            className: o()(t, eO.x6, l, a, { [eO.r9]: d }),
            onMouseDown: r,
            onClick: (e) => {
                c(e);
            },
            focusProps: u,
            children: i,
        }),
    });
}
var eM = n(933832),
    ek = n(624479),
    eP = n(263775),
    eG = n(427209),
    eD = n(95035),
    eB = n(940456),
    eF = n(685743),
    eH = n(981381),
    ew = n(342942),
    eU = n(294454),
    ez = n(625903),
    eV = n(445927),
    eK = n(376205);
function eY(e) {
    let { server: t, onOpenSettings: n } = e,
        l = t.instance.subscriptionId,
        a = (0, _.bG)(
            [R.A],
            () =>
                (0, eK.Yg)({
                    subscriptionId: l,
                    hasFetchedSubscriptions: R.A.hasFetchedSubscriptions(),
                    getSubscriptionById: (e) => R.A.getSubscriptionById(e),
                }),
            [l],
        ),
        r = (0, eV.A)(t.instance) && a,
        o = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, s.jsx)(eR, {
        color: eT.SECONDARY,
        size: ey.SIZE_24,
        icon: (0, s.jsx)(ez.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: o,
        disabled: !r,
        tooltip: Y.intl.string(K.default["feUiM/"]),
    });
}
var eW = n(652215),
    e$ = n(628049),
    eZ = n(49999),
    eq = n(684644);
let eQ = [eI.M.STARTUP_FAILED, eI.M.MISSING_STOCK, eI.M.PROVIDER_ERRORED, eI.M.DELETED];
function eX(e) {
    return `game-server-owned-card-${e}`;
}
function eJ(e) {
    let { gameServerId: t } = e,
        n = i.useCallback(() => {
            (0, eB.Kz)(t).catch(() => {});
        }, [t]);
    return (0, s.jsx)("div", {
        className: eq.y7,
        children: (0, s.jsx)(H.$, {
            fullWidth: !0,
            text: Y.intl.string(K.default.TMzy7d),
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
    return (0, s.jsx)("div", {
        className: eq.y7,
        children: (0, s.jsx)(H.$, {
            fullWidth: !0,
            text: Y.intl.string(K.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let e1 = i.memo(function (e) {
    let { server: t, onJoin: l, onViewPanel: a, onOpenSettings: r, isHighlighted: c = !1 } = e,
        u = (0, ee.A)(t.gameId, "cover") ?? t.coverUrl,
        m = (function (e) {
            let t = (0, _.bG)([R.A], () => (null != e ? R.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === eW.Dmq.CANCELED
                ? { text: Y.intl.formatToPlainString(K.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: Y.intl.formatToPlainString(K.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [g, E] = (0, eP.kn)([eb.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        h = g !== eb.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        f = e_.X.SHOCKBYTE,
        x = y.default.getId() ?? "0",
        { handleCopyServerIp: C, animateCopyIcon: p } = (0, eF.A)(x, t.id, w.A.GAME_SERVER_PAGE, t.serverIp),
        S = i.useCallback(() => {
            (0, ew.A)({
                provider: f,
                onAccept: () => {
                    (E(eZ.i.TAKE_ACTION), C());
                },
            });
        }, [f, E, C]),
        A = i.useCallback(() => {
            h
                ? l(t)
                : (0, ew.A)({
                      provider: f,
                      onAccept: () => {
                          (E(eZ.i.TAKE_ACTION), l(t));
                      },
                  });
        }, [h, f, E, l, t]),
        v = i.useCallback(() => a(t), [a, t]),
        I = i.useCallback(() => {
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
                        return (n) => (0, s.jsx)(e, { ...n, server: t, source: l });
                    },
                    { stackingBehavior: "stack", modalKey: eU.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        b = (0, eH.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e$.qb[f],
        j = null != t.instance.gameServerPanelUrl,
        L = null != t.instance.status && eQ.includes(t.instance.status),
        N = i.useCallback(() => {
            (0, M.h)({ href: b });
        }, [b]),
        O = i.useMemo(() => {
            switch (t.instance.status) {
                case eI.M.ONLINE:
                    return Y.intl.string(K.default["60kAzo"]);
                case eI.M.OFFLINE:
                    return Y.intl.string(K.default["Ys/RrB"]);
                case eI.M.SLEEPING:
                    return Y.intl.string(K.default.y0z8ZO);
                case eI.M.STARTUP_FAILED:
                    return Y.intl.string(K.default["7C9Z3s"]);
                case eI.M.MISSING_STOCK:
                    return Y.intl.string(K.default["+a5G2l"]);
                case eI.M.PROVIDER_ERRORED:
                    return Y.intl.string(K.default["6g/oji"]);
                case eI.M.DELETED:
                    return Y.intl.string(K.default.Z1NZwX);
                case eI.M.STARTING:
                    return Y.intl.string(K.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        T = t.isOnline ? "text-feedback-positive" : L ? "text-feedback-critical" : "text-muted",
        k = i.useMemo(
            () =>
                (0, s.jsx)(ej.D, {
                    className: o()(eq.wC, eq.QV),
                    onClick: A,
                    "aria-label": Y.intl.string(K.default["fQCcM/"]),
                    children: (0, s.jsx)(F.E, {
                        variant: "body-sm/semibold",
                        color: "none",
                        children: Y.intl.string(K.default["fQCcM/"]),
                    }),
                }),
            [A],
        ),
        P = i.useMemo(
            () =>
                (0, s.jsxs)(ej.D, {
                    className: o()(eq.wC, eq.y2, { [eq.Gz]: !j }),
                    onClick: j ? v : void 0,
                    "aria-disabled": !j,
                    "aria-label": Y.intl.string(K.default.tkbVdf),
                    children: [
                        (0, s.jsx)(F.E, {
                            variant: "body-sm/semibold",
                            color: "none",
                            children: Y.intl.string(K.default.tkbVdf),
                        }),
                        (0, s.jsx)(eL.LinkExternalSmallIcon, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                        }),
                    ],
                }),
            [v, j],
        ),
        G = i.useMemo(() => {
            switch (t.instance.status) {
                case eI.M.SLEEPING:
                    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eJ, { gameServerId: t.id }), P] });
                case eI.M.STARTUP_FAILED:
                case eI.M.MISSING_STOCK:
                    return (0, s.jsx)("div", {
                        className: eq.y7,
                        children: (0, s.jsx)(H.$, {
                            fullWidth: !0,
                            text: Y.intl.string(K.default.gWMqnI),
                            variant: "primary",
                            icon: eL.LinkExternalSmallIcon,
                            iconPosition: "end",
                            disabled: !j,
                            onClick: v,
                        }),
                    });
                case eI.M.PROVIDER_ERRORED:
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", {
                                className: eq.y7,
                                children: (0, s.jsx)(H.$, {
                                    fullWidth: !0,
                                    text: Y.intl.string(K.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: N,
                                }),
                            }),
                            (0, s.jsx)(e0, {}),
                        ],
                    });
                case eI.M.DELETED:
                    return P;
                default:
                    return (0, s.jsxs)(s.Fragment, { children: [k, P] });
            }
        }, [t.instance.status, t.id, j, k, P, v, N]);
    return (0, s.jsxs)("div", {
        id: eX(t.id),
        className: o()(eq.Nr, { [eq.mr]: c }),
        children: [
            c && (0, s.jsx)("div", { className: eq._8, "aria-hidden": !0 }),
            (0, s.jsxs)("div", {
                className: eq.Nk,
                "aria-hidden": !0,
                children: [
                    null != u && (0, s.jsx)("img", { className: eq.QC, src: u, alt: "" }),
                    (0, s.jsx)("div", { className: eq.jc }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eq.AQ,
                children: [
                    (0, s.jsx)(eR, {
                        color: eT.SECONDARY,
                        size: ey.SIZE_24,
                        icon: (0, s.jsx)(eG.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: I,
                        tooltip: Y.intl.string(Y.t.RDE0Sc),
                    }),
                    (0, s.jsx)(eY, { server: t, onOpenSettings: r }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eq.rf,
                children: [
                    (0, s.jsxs)("div", {
                        className: eq.U1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eq.oL,
                                children: [
                                    null != u
                                        ? (0, s.jsx)("img", { className: eq.vT, src: u, alt: "" })
                                        : (0, s.jsx)("div", {
                                              className: eq.iv,
                                              children: (0, s.jsx)(F.E, {
                                                  variant: "body-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, s.jsx)("div", { className: eq.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eq.VQ,
                                children: [
                                    (0, s.jsx)(F.E, {
                                        variant: "body-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, s.jsx)(F.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != m &&
                                        (0, s.jsx)(F.E, {
                                            variant: "body-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: m.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eq.M1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eq.N8,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: eq.bi,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default.bDdi7n),
                                            }),
                                            (0, s.jsx)(F.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eq.gv,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default["7phwMG"]),
                                            }),
                                            h
                                                ? (0, s.jsxs)("div", {
                                                      className: eq.Yb,
                                                      children: [
                                                          (0, s.jsx)(F.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, s.jsx)(ej.D, {
                                                                  className: eq.cL,
                                                                  onClick: C,
                                                                  "aria-label": Y.intl.string(Y.t.OpuAlK),
                                                                  children: p
                                                                      ? (0, s.jsx)(eM.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, s.jsx)(ek.CopyIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, s.jsx)(eD.A, {
                                                      onClick: S,
                                                      children: Y.intl.string(K.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: eq.N8,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: eq.bi,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default["n+ZX7y"]),
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: eq.Yb,
                                                children: [
                                                    (t.isOnline || L) &&
                                                        (0, s.jsx)("span", {
                                                            className: o()(eq.kg, { [eq.rU]: L }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, s.jsx)(F.E, {
                                                        variant: "body-sm/medium",
                                                        color: T,
                                                        tag: "span",
                                                        children: O,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eq.gv,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default.mJlz3T),
                                            }),
                                            (0, s.jsx)(F.E, {
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
            (0, s.jsx)("div", { className: eq.qr, children: G }),
        ],
    });
});
var e2 = n(367016);
function e6(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: l,
            onViewPanel: a,
            onOpenSettings: r,
            highlightServerId: c = null,
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
        A = i.useCallback(() => {
            u.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        i.useEffect(() => {
            if (d <= 0) return;
            let e = null != c ? document.getElementById(eX(c)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    (C(null), (t = requestAnimationFrame(() => C(c))));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(t));
            };
        }, [d, c]),
        i.useEffect(() => {
            if (null == x) return;
            let e = setTimeout(() => C(null), 4e3);
            return () => clearTimeout(e);
        }, [x]),
        (0, s.jsxs)("section", {
            className: e2.uW,
            ref: m,
            children: [
                (0, s.jsxs)("div", {
                    className: e2.wx,
                    children: [
                        (0, s.jsx)(q.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: Y.intl.string(K.default.BOWmmT),
                        }),
                        (0, s.jsx)(D.N, {
                            theme: V.NJ.DARK,
                            children: (e) =>
                                (0, s.jsxs)("div", {
                                    className: o()(e2.$s, e),
                                    children: [
                                        (0, s.jsx)(H.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: Y.intl.string(Y.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: e2.d$,
                                            children: [
                                                (0, s.jsx)(eS.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eA.ArrowLargeLeftIcon,
                                                    disabled: !g,
                                                    onClick: S,
                                                    "aria-label": Y.intl.string(Y.t["13/7kX"]),
                                                }),
                                                (0, s.jsx)(eS.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: ev.ArrowLargeRightIcon,
                                                    disabled: !h,
                                                    onClick: A,
                                                    "aria-label": Y.intl.string(Y.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: o()(e2.XG, { [e2.OW]: g && h, [e2.vL]: g && !h, [e2.y0]: h && !g }),
                    ref: u,
                    onScroll: p,
                    children: t.map((e) =>
                        (0, s.jsx)(
                            "div",
                            {
                                className: e2.AV,
                                children: (0, s.jsx)(e1, {
                                    server: e,
                                    onJoin: l,
                                    onViewPanel: a,
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
    e7 = n(923477),
    e3 = n(269249),
    e4 = n(55766),
    e9 = n(758836),
    te = n(111108);
function tt(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, s.jsx)(L.A, { children: (0, s.jsx)(tn, { isGameServerHostingInShopEnabled: t }) });
}
function tn(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, v.zy)(),
        l = (0, v.W6)(),
        { servers: a, refetch: r } = (0, e4.f)(),
        o = a.length > 0,
        c = (0, _.bG)([E.default], () => k.Ay.canUseShopDiscounts(E.default.getCurrentUser())),
        { games: d, hasError: u, isEmpty: m, isLoading: g, refetch: h } = (0, e3.Y)();
    i.useEffect(() => {
        o && (0, j.hP)().catch(() => {});
    }, [o]);
    let f = i.useRef(d);
    i.useEffect(() => {
        d.length > 0 && (f.current = d);
    }, [d]);
    let x = i.useCallback(() => {
            (h(), r());
        }, [h, r]),
        C = (0, e8.VJ)(),
        [p, S] = i.useState({ serverId: null, nonce: 0 }),
        A = i.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = P.A.getGameServers();
                for (let l = n.length - 1; l >= 0; l--)
                    if (n[l].game_id === e.gameId) {
                        t = n[l].id;
                        break;
                    }
            }
            S((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        I = i.useCallback(() => {
            let e = a[0];
            null != e && A({ serverId: e.id });
        }, [a, A]),
        L = (0, e7.O)((e) => e.highlightFirstCardNonce),
        D = i.useRef(L);
    i.useEffect(() => {
        if (L === D.current) return;
        D.current = L;
        let e = requestAnimationFrame(() => I());
        return () => cancelAnimationFrame(e);
    }, [L, I]);
    let B = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e8.cl.SHOP_CARD;
                (C(e8.L5.OPEN_PLAN_MODAL, t),
                    (0, e5.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => A({ gameId: e.gameId }),
                    }));
            },
            [C, A],
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
        let a = new URLSearchParams(n.search);
        (a.delete(e9.tD), l.replace(`${n.pathname}?${a.toString()}`));
    }, [t, F, d, g, B, l, n.pathname, n.search]);
    let H = i.useCallback(() => {
            (N.A.setState({ scrollToGameServers: !0 }), (0, T.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL));
        }, []),
        w = i.useCallback((e) => {
            let t = y.default.getId() ?? "0";
            (0, G.A)(t, e.instance);
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
                        onViewServer: () => A({ serverId: e.id }),
                    });
                }
                let a = R.A.getSubscriptionById(t);
                null != a
                    ? l(a)
                    : (0, j.hP)()
                          .then(() => {
                              let e = R.A.getSubscriptionById(t);
                              null != e && l(e);
                          })
                          .catch(() => {});
            },
            [A],
        ),
        V = o ? Y.intl.string(K.default["+aRmAc"]) : void 0;
    return (0, s.jsx)(b.Ch, {
        className: te.XG,
        children: (0, s.jsxs)("div", {
            className: te.kL,
            children: [
                !c && (0, s.jsx)($, {}),
                (0, s.jsx)(ep, {}),
                (0, s.jsxs)("div", {
                    className: te.Qs,
                    children: [
                        (0, s.jsx)(ex, {}),
                        o &&
                            (0, s.jsx)(e6, {
                                servers: a,
                                onViewAll: H,
                                onJoin: w,
                                onViewPanel: U,
                                onOpenSettings: z,
                                highlightServerId: p.serverId,
                                highlightNonce: p.nonce,
                            }),
                        u || m
                            ? (0, s.jsx)(J, { onRetry: x })
                            : (0, s.jsx)(ed, { games: d, title: V, onSelectGame: B, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var tl = n(856383),
    ta = n(110676),
    ts = n(4227),
    ti = n(856686),
    tr = n(95362),
    to = n(783977),
    tc = n(129230),
    td = n(918467),
    tu = n(758461),
    tm = n(641150),
    tg = n(140735);
function tE() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: l } = (0, A.vs)((e) => e),
        { totalCount: a, isFetchingResults: r } = (0, ti.S)(),
        o = (0, A.vs)((e) => e.hasFilters()),
        c = i.useCallback(() => {
            if (!o) return "";
            if (r) return Y.intl.string(Y.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return Y.intl.formatToPlainString(Y.t.KJMJOz, { count: a, search: e });
            }
            if (!n && !l && 1 === e.size) {
                if (e.has(tm.q.AVATAR_DECORATION)) return Y.intl.formatToPlainString(Y.t.s1UzGQ, { count: a });
                if (e.has(tm.q.NAMEPLATE)) return Y.intl.formatToPlainString(Y.t.ZWGN9T, { count: a });
                if (e.has(tm.q.PROFILE_EFFECT)) return Y.intl.formatToPlainString(Y.t["v/7apu"], { count: a });
                if (e.has(tm.q.PROFILE_FRAME)) return Y.intl.formatToPlainString(Y.t.eu4eRy, { count: a });
                if (e.has(tm.q.BUNDLE)) return Y.intl.formatToPlainString(Y.t.fZ1rdk, { count: a });
            }
            return 0 === e.size && n && !l
                ? Y.intl.formatToPlainString(Y.t.TxoTTj, { count: a })
                : 0 === e.size && l && !n
                  ? Y.intl.formatToPlainString(Y.t.TLso50, { count: a })
                  : Y.intl.formatToPlainString(Y.t["/rPvmQ"], { count: a });
        }, [e, a, o, t, r, n, l])(),
        [d, u] = i.useState("");
    return (
        r || c === d || u(c),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(q.D, { variant: "heading-lg/semibold", children: c }),
                (0, s.jsx)(tg.A, { role: "status", "aria-live": "polite", "aria-atomic": "true", children: d }),
            ],
        })
    );
}
var th = n(172218),
    tf = n(662203),
    tx = n(511265),
    tC = n(206077),
    tp = n(100057),
    tS = n(812760),
    tA = n(484469),
    tv = n(761977),
    t_ = n(170522),
    tI = n(295621);
let tb = function () {
    return (0, s.jsx)("div", {
        className: tI.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, s.jsxs)(
                "div",
                {
                    className: t_.vY,
                    children: [
                        (0, s.jsx)("div", { className: o()(tv.sW, tI.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, s.jsx)(tA.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tj = n(987421),
    tL = n(350172),
    tN = n(730202),
    tO = n(510801),
    tT = n(998694);
let ty = null,
    tR = new Map();
function tM(e) {
    let { category: t } = e,
        n = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        l = (0, tC.X)(t.products),
        a = (0, tx.p)()(l);
    return null == n || 0 === a.length
        ? null
        : (0, s.jsx)("div", {
              className: t_.vY,
              children: a.map((e, t) =>
                  (0, s.jsx)(
                      h.R9,
                      { newValue: { tilePosition: t }, children: (0, s.jsx)(tj.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tk(e) {
    let { category: t, currentPage: n } = e,
        [l, a] = i.useState(!1),
        r = (0, th.K)(function (e) {
            a(e);
        }, 0.15),
        o = (0, v.W6)(),
        c = (0, h.uM)(),
        d = i.useCallback(() => {
            var e;
            (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: c?.sessionId,
                sku_id: t.skuId,
                page_type: e9.G2.CATALOG,
                page_section: c?.pageSection,
                page_category: t.name,
                page_index: c?.pageIndex,
                page_size: c?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e = t.skuId),
                (ty = e),
                null != e && null != n && tR.set(e, n),
                o.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId)));
        }, [c?.pageIndex, c?.pageSection, c?.pageSize, c?.sessionId, t.name, t.skuId, n, o]);
    return (0, s.jsxs)("div", {
        className: t_.EF,
        ref: r,
        children: [(0, s.jsx)(tS.A, { category: t, onSelect: d }), (0, s.jsx)(tM, { category: t })],
    });
}
function tP(e) {
    let { setCategoryRef: t, currentPage: n, handlePageChange: l, initialCategoryId: a } = e,
        r = (0, h.uM)(),
        o = r?.sessionId ?? "",
        { noCache: c, includeUnpublished: d } = (0, tT.A)(),
        {
            categories: u,
            total: m,
            isLoading: g,
        } = (function (e) {
            let { page: t, pageSize: n, includeUnpublished: l, noCache: a } = e,
                s = i.useMemo(
                    () => ({
                        applicationId: eW.FYj,
                        offset: (t - 1) * n,
                        limit: n,
                        useShopOrdering: !0,
                        includeUnpublishedProducts: l,
                        includeUnpublishedCollections: l,
                        ignoreCache: a,
                    }),
                    [t, n, l, a],
                ),
                r = (0, tL.H)(s),
                o = (0, tL.q7)(s);
            i.useEffect(() => {
                (0, tL.cS)(s);
            }, [s]);
            let {
                    collectionIds: c,
                    fetchState: d,
                    total: u,
                } = (0, _.cf)(
                    [tN.A],
                    () => ({
                        collectionIds: tN.A.getCollectionPageIds(r),
                        fetchState: tN.A.getCollectionPageFetchState(r),
                        total: tN.A.getCollectionListTotal(o),
                    }),
                    [r, o],
                ),
                m = c ?? [],
                g = m.join(","),
                E = (0, _.cf)(
                    [tN.A],
                    () => {
                        let e = {};
                        for (let t of m) e[t] = tN.A.getCollection(t);
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
                            .map((e) => tO.A.fromStorefrontCollectionRecord(e)),
                    [g, E],
                ),
                total: u ?? 0,
                isLoading: null == c && "error" !== d,
            };
        })({ page: n, pageSize: 5, includeUnpublished: d, noCache: c }),
        E = i.useRef(void 0);
    i.useEffect(() => {
        if (null == a) {
            E.current = void 0;
            return;
        }
        if (a === E.current) return;
        let e = tR.get(a);
        null != e && (e !== n && l(e), (E.current = a));
    }, [a, l, n]);
    let f = i.useMemo(() => u.filter((e) => e.products.length > 0), [u]);
    return (i.useEffect(() => {
        (0, tp.z)({
            sessionId: o,
            checkpoint: tp.t.SHOP_MOUNTED,
            tab: e9.G2.CATALOG,
            unpublishedCategoriesShown: d,
            cacheDisabled: c,
        });
    }, []),
    i.useEffect(() => {
        g ||
            0 === f.length ||
            (0, tp.z)({
                sessionId: o,
                checkpoint: tp.t.SHOP_RENDERED,
                tab: e9.G2.CATALOG,
                unpublishedCategoriesShown: d,
                cacheDisabled: c,
            });
    }, [o, d, c, g, f.length]),
    g)
        ? (0, s.jsx)(tb, {})
        : (0, s.jsxs)("div", {
              className: t_.LZ,
              children: [
                  f.map((e, l) =>
                      (0, s.jsx)(
                          "div",
                          {
                              ref: (n) => t(e.skuId, n),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": Y.intl.formatToPlainString(Y.t.FNtLb3, { category: e.name }),
                              children: (0, s.jsx)(h.R9, {
                                  newValue: { categoryPosition: l },
                                  children: (0, s.jsx)(tk, { category: e, currentPage: n }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, s.jsx)("div", {
                      className: t_.Ej,
                      children: (0, s.jsx)(tf.m, {
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
    tD = n(401864),
    tB = n(124987),
    tF = n(691885),
    tH = n(460348),
    tw = n(878278);
let tU = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, A.vs)(),
        l = (0, h.uM)(),
        a = (0, tH.yB)("CollectiblesSortSelect"),
        r = n(),
        c = i.useMemo(() => e9.QB.filter((e) => e.sortType !== tB.$.RELEVANCE || r), [r]),
        d = i.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tB.$.RECENCY
                ? { label: Y.intl.string(Y.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tB.$.PRICE
                  ? n === tD.A.ASC
                      ? { label: Y.intl.string(Y.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: Y.intl.string(Y.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tB.$.RELEVANCE
                    ? { label: Y.intl.string(Y.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: Y.intl.string(Y.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        u = i.useCallback(
            (e) =>
                ({
                    recent: { sortType: tB.$.RECENCY, sortDirection: tD.A.DESC },
                    "price-asc": { sortType: tB.$.PRICE, sortDirection: tD.A.ASC },
                    "price-desc": { sortType: tB.$.PRICE, sortDirection: tD.A.DESC },
                    popularity: { sortType: tB.$.POPULARITY, sortDirection: tD.A.DESC },
                    relevance: { sortType: tB.$.RELEVANCE, sortDirection: tD.A.DESC },
                })[e],
            [],
        ),
        m = i.useCallback(
            (e) => {
                let n = d(u(e));
                (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, s.jsx)("div", {
        className: o()(tw.k, { [tH.jP]: a }),
        children: (0, s.jsx)(tF.l, {
            label: Y.intl.string(Y.t.uaX705),
            hideLabel: !0,
            options: c.map(d),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var tz =
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
    tV =
        (((a = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (a.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (a.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (a.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (a.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (a.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (a.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (a.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (a.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (a.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        a),
    tK = n(150934),
    tY = n(805251),
    tW = n(278416),
    t$ = n(602853),
    tZ = n(646514),
    tq = n(947641),
    tQ = n(604338),
    tX = n(785866),
    tJ = n(373846),
    t0 = n(308323),
    t1 = n(608599),
    t2 = n(685761),
    t6 = n(157225),
    t8 = n(413249),
    t5 = n(510241),
    t7 = n(601198),
    t3 = n(431527),
    t4 = n(890283),
    t9 = n(7250),
    ne = n(582666);
function nt() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: l,
            onToggleOfferEligible: a,
            offerEligible: r,
            reset: o,
            hasFilters: c,
        } = (0, A.vs)(),
        d = c(),
        u = (0, h.uM)(),
        m = i.useRef(null),
        g = i.useId(),
        E = i.useId(),
        f = (0, tu.HH)(),
        x = i.useCallback(
            (e) => {
                tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, s.jsxs)("div", {
        className: ne.kT,
        children: [
            (0, s.jsxs)("div", {
                className: ne.KZ,
                children: [
                    (0, s.jsx)("div", {
                        ref: m,
                        tabIndex: -1,
                        children: (0, s.jsx)(q.D, {
                            variant: "heading-sm/semibold",
                            className: ne.hr,
                            id: g,
                            children: Y.intl.string(Y.t.aDZysP),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        role: "group",
                        "aria-labelledby": g,
                        className: ne.mM,
                        children: e9._6.map((e) => (0, s.jsx)(nn, { filter: e, trackFilterAction: x }, e)),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: ne.KZ,
                children: [
                    (0, s.jsx)(q.D, {
                        variant: "heading-sm/semibold",
                        className: ne.hr,
                        id: E,
                        children: Y.intl.string(Y.t.Vfebhe),
                    }),
                    (0, s.jsxs)("div", {
                        role: "group",
                        "aria-labelledby": E,
                        className: ne.mM,
                        children: [
                            (0, s.jsx)(tK.S, {
                                checked: t,
                                onChange: () => {
                                    (x(`filter orb eligible ${!1 === t ? "on" : "off"}`), e());
                                },
                                label: Y.intl.string(Y.t.AHHHgG),
                            }),
                            (0, s.jsx)(tK.S, { checked: l, onChange: C, label: Y.intl.string(Y.t["+W8gb+"]) }),
                            null != f &&
                                (0, s.jsxs)("div", {
                                    className: ne.Ym,
                                    children: [
                                        (0, s.jsx)(tK.S, {
                                            checked: r,
                                            onChange: () => {
                                                (x(`filter offer eligible ${!1 === r ? "on" : "off"}`), a());
                                            },
                                            label: Y.intl.string(Y.t.hY8Ft1),
                                        }),
                                        (0, s.jsx)(tY.E, {
                                            type: { text: Y.intl.string(Y.t["nb5PC/"]) },
                                            icon: tW.TagIcon,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(nl, { trackFilterAction: x }),
            (0, s.jsx)(ni, { trackFilterAction: x }),
            d &&
                (0, s.jsx)(H.$, {
                    variant: "secondary",
                    onClick: () => {
                        (x("filter reset"), o(), requestAnimationFrame(() => m.current?.focus()));
                    },
                    text: Y.intl.string(Y.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nn(e) {
    let { filter: t, trackFilterAction: n } = e,
        l = {
            [tm.q.AVATAR_DECORATION]: Y.intl.string(Y.t.dRZYNE),
            [tm.q.PROFILE_EFFECT]: Y.intl.string(Y.t["1cNjtx"]),
            [tm.q.NAMEPLATE]: Y.intl.string(Y.t.V68Fqz),
            [tm.q.PROFILE_FRAME]: Y.intl.string(Y.t.ecTJkR),
            [tm.q.BUNDLE]: Y.intl.string(Y.t.FYFpps),
        },
        { itemTypeFilters: a, onToggleItemType: i } = (0, A.vs)();
    return (0, s.jsx)(tK.S, {
        checked: a.has(t),
        onChange: () => {
            let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
            (n(`filter item type ${e} ${!1 === a.has(t) ? "on" : "off"}`), i(t));
        },
        label: l[t] ?? "",
    });
}
function nl(e) {
    let { trackFilterAction: t } = e,
        n = i.useMemo(
            () => [
                { color: "#9B59B6", label: Y.intl.string(Y.t.kqUD4P), enum: tz.PURPLE },
                { color: "#3498DB", label: Y.intl.string(Y.t.qQTRae), enum: tz.BLUE },
                { color: "#2ECC71", label: Y.intl.string(Y.t["f/Ylk6"]), enum: tz.GREEN },
                { color: "#A0522D", label: Y.intl.string(Y.t["Sd/BMa"]), enum: tz.BROWN },
                { color: "#F1C40F", label: Y.intl.string(Y.t["0fevYz"]), enum: tz.YELLOW },
            ],
            [],
        ),
        l = i.useMemo(
            () => [
                { color: "#E67E22", label: Y.intl.string(Y.t.ZE7weD), enum: tz.ORANGE },
                { color: "#E74C3C", label: Y.intl.string(Y.t.hKJGOM), enum: tz.RED },
                { color: "#EC407A", label: Y.intl.string(Y.t.HvLEGM), enum: tz.PINK },
                { color: "#FFFFFF", label: Y.intl.string(Y.t["CB+lNO"]), enum: tz.WHITE },
                { color: "#262626", label: Y.intl.string(Y.t["dMey+v"]), enum: tz.BLACK },
            ],
            [],
        );
    return (0, s.jsxs)("div", {
        className: ne.KZ,
        children: [
            (0, s.jsx)(q.D, { variant: "heading-sm/semibold", className: ne.hr, children: Y.intl.string(Y.t.K1xGoG) }),
            (0, s.jsx)(na, { colors: n, trackFilterAction: t }),
            (0, s.jsx)(na, { colors: l, trackFilterAction: t }),
        ],
    });
}
function na(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: l, onToggleColor: a } = (0, A.vs)();
    return (0, s.jsx)("div", {
        className: ne.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: r } = e;
            return (0, s.jsx)(
                ns,
                { color: t, label: i, enum: r, isToggled: l.has(r), onToggleColor: a, trackFilterAction: n },
                r,
            );
        }),
    });
}
function ns(e) {
    let { color: t, label: n, enum: l, isToggled: a, onToggleColor: i, trackFilterAction: r } = e,
        c = (0, t$.r)(tZ.A.unsafe_rawColors.WHITE).hex(),
        d = (0, t$.r)(tZ.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, s.jsx)(
        eN.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, s.jsx)(
                ej.D,
                {
                    className: o()(ne.n1, { [ne.lx]: a }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": a,
                    onClick: () => {
                        (r(`filter color ${n.toLowerCase()} ${!a ? "on" : "off"}`), i(l));
                    },
                    children:
                        a &&
                        (0, s.jsx)("div", {
                            className: ne.oE,
                            children: (0, s.jsx)(tq.CheckmarkLargeBoldIcon, {
                                size: "xs",
                                color: (0, t9.j)({ backgroundColor: t, colors: [c, d] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function ni(e) {
    let { trackFilterAction: t } = e,
        { enabled: n } = t4.A.useConfig({ location: "collectibles-shop-theme-filters" });
    return n ? (0, s.jsx)(no, { trackFilterAction: t }) : (0, s.jsx)(nr, { trackFilterAction: t });
}
function nr(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, A.vs)(),
        a = (0, Q.Ay)() === V.NJ.DARK,
        r = i.useCallback(
            (e) => {
                if (n.has(e) || a) return "control-primary-text-default";
            },
            [n, a],
        ),
        c = i.useCallback((e) => (n.has(e) || a ? tZ.A.colors.WHITE : tZ.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, a]),
        d = i.useMemo(
            () => [
                {
                    name: Y.intl.string(Y.t.aVBOKh),
                    icon: (0, s.jsx)(tQ.VeinIcon, { size: "xs", color: c(tV.ANIME) }),
                    enum: tV.ANIME,
                },
                {
                    name: Y.intl.string(Y.t["3WoZBc"]),
                    icon: (0, s.jsx)(tX.JoystickIcon, { size: "xs", color: c(tV.GAMING) }),
                    enum: tV.GAMING,
                },
                {
                    name: Y.intl.string(Y.t.yuEmLj),
                    icon: (0, s.jsx)(tJ.TeacupIcon, { size: "xs", color: c(tV.CUTE_COZY) }),
                    enum: tV.CUTE_COZY,
                },
                {
                    name: Y.intl.string(Y.t.mMvCHo),
                    icon: (0, s.jsx)(t0.ThemeMidnightIcon, { size: "xs", color: c(tV.SCI_FI) }),
                    enum: tV.SCI_FI,
                },
                {
                    name: Y.intl.string(Y.t.TlhOQC),
                    icon: (0, s.jsx)(t1.BurgerIcon, { size: "xs", color: c(tV.FOOD_DRINKS) }),
                    enum: tV.FOOD_DRINKS,
                },
                {
                    name: Y.intl.string(Y.t["4IaUIM"]),
                    icon: (0, s.jsx)(t2.MagicDoorIcon, { size: "xs", color: c(tV.FANTASY) }),
                    enum: tV.FANTASY,
                },
                {
                    name: Y.intl.string(Y.t["w0nSG/"]),
                    icon: (0, s.jsx)(t6.PawPrintIcon, { size: "xs", color: c(tV.ANIMALS_PETS) }),
                    enum: tV.ANIMALS_PETS,
                },
                {
                    name: Y.intl.string(Y.t.cJng7v),
                    icon: (0, s.jsx)(t8.NatureIcon, { size: "xs", color: c(tV.NATURE) }),
                    enum: tV.NATURE,
                },
                {
                    name: Y.intl.string(Y.t["5mUvyM"]),
                    icon: (0, s.jsx)(t5.ClipsGalleryIcon, { size: "xs", color: c(tV.MOVIES_TV_SHOWS) }),
                    enum: tV.MOVIES_TV_SHOWS,
                },
                {
                    name: Y.intl.string(Y.t.MB9H5Z),
                    icon: (0, s.jsx)(t7.DyingRoseIcon, { size: "xs", color: c(tV.DARK_MOODY) }),
                    enum: tV.DARK_MOODY,
                },
            ],
            [c],
        );
    return (0, s.jsxs)("div", {
        className: ne.KZ,
        children: [
            (0, s.jsx)(q.D, { variant: "heading-sm/semibold", className: ne.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, s.jsx)("div", {
                className: ne.Ot,
                children: d.map((e) => {
                    let { name: a, icon: i, enum: c } = e;
                    return (0, s.jsxs)(
                        ej.D,
                        {
                            className: o()(ne.w4, { [ne.C7]: n.has(c) }),
                            "aria-label": a,
                            "aria-pressed": n.has(c),
                            onClick: () => {
                                let e = n.has(c);
                                (t(`filter theme ${a.toLowerCase()} ${!e ? "on" : "off"}`), l(c));
                            },
                            children: [i, (0, s.jsx)(F.E, { color: r(c), variant: "body-md/medium", children: a })],
                        },
                        a,
                    );
                }),
            }),
        ],
    });
}
function no(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, A.vs)(),
        a = i.useMemo(
            () => [
                { name: Y.intl.string(Y.t.aVBOKh), icon: tQ.VeinIcon, enum: tV.ANIME },
                { name: Y.intl.string(Y.t["3WoZBc"]), icon: tX.JoystickIcon, enum: tV.GAMING },
                { name: Y.intl.string(Y.t.yuEmLj), icon: tJ.TeacupIcon, enum: tV.CUTE_COZY },
                { name: Y.intl.string(Y.t.mMvCHo), icon: t0.ThemeMidnightIcon, enum: tV.SCI_FI },
                { name: Y.intl.string(Y.t.TlhOQC), icon: t1.BurgerIcon, enum: tV.FOOD_DRINKS },
                { name: Y.intl.string(Y.t["4IaUIM"]), icon: t2.MagicDoorIcon, enum: tV.FANTASY },
                { name: Y.intl.string(Y.t["w0nSG/"]), icon: t6.PawPrintIcon, enum: tV.ANIMALS_PETS },
                { name: Y.intl.string(Y.t.cJng7v), icon: t8.NatureIcon, enum: tV.NATURE },
                { name: Y.intl.string(Y.t["5mUvyM"]), icon: t5.ClipsGalleryIcon, enum: tV.MOVIES_TV_SHOWS },
                { name: Y.intl.string(Y.t.MB9H5Z), icon: t7.DyingRoseIcon, enum: tV.DARK_MOODY },
            ],
            [],
        ),
        r = i.useMemo(() => new Set(Array.from(n, (e) => String(e))), [n]);
    return (0, s.jsxs)("div", {
        className: ne.KZ,
        children: [
            (0, s.jsx)(q.D, { variant: "heading-sm/semibold", className: ne.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, s.jsx)(t3.C, {
                variant: "filter",
                selectionMode: "multiple",
                label: Y.intl.string(Y.t.YieJl5),
                items: a.map((e) => {
                    let { name: t, icon: n, enum: l } = e;
                    return { id: String(l), label: t, icon: n };
                }),
                selectedKeys: r,
                onSelectionChange: (e) => {
                    if ("all" === e) return;
                    let s = a.find((t) => {
                        let { enum: l } = t;
                        return e.has(String(l)) !== n.has(l);
                    });
                    if (null == s) return;
                    let i = n.has(s.enum);
                    (t(`filter theme ${s.name.toLowerCase()} ${!i ? "on" : "off"}`), l(s.enum));
                },
            }),
        ],
    });
}
var nc = n(415926),
    nd = n(561769),
    nu = n(66506);
function nm() {
    return (0, s.jsxs)("div", {
        className: nu.k,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: Y.intl.string(Y.t.oezC3x),
                className: nu._,
            }),
            (0, s.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.oezC3x) }),
            (0, s.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t["Tc/Ndl"]) }),
        ],
    });
}
var ng = n(919303);
let nE = { flattenProductVariants: !0 };
function nh(e) {
    let { scrollerRef: t, tab: n } = e,
        l = (0, h.uM)(),
        a = l?.sessionId ?? "",
        { noCache: r, includeUnpublished: d } = (0, tT.A)(),
        u = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
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
        (0, tp.z)({
            sessionId: a,
            checkpoint: tp.t.SHOP_RENDERED,
            tab: n,
            unpublishedCategoriesShown: d,
            cacheDisabled: r,
        });
    }, [a, d, r, n]);
    let v = i.useRef(null),
        { setQueryPageSize: _, setQueryPageOffset: I, queryPageSize: b } = (0, A.vs)(),
        [j, L] = i.useState(!1),
        N = x || null == u;
    i.useEffect(() => {
        N ? L(!1) : S > 0 && L(!0);
    }, [N, S]);
    let O = b > 0 && !N && 0 === S;
    i.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == v.current || _(Math.floor(5 * getComputedStyle(v.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != v.current) return (e.observe(v.current), () => e.disconnect());
    }, [_]);
    let T = i.useCallback(
        (e) => {
            (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: b,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                I((e - 1) * b));
        },
        [l, b, I],
    );
    return (0, s.jsxs)(nd.v3.Provider, {
        value: nE,
        children: [
            (0, s.jsxs)("div", {
                className: o()({ [ng.oE]: O }),
                children: [
                    O && (0, s.jsx)(nm, {}),
                    (0, s.jsxs)("div", {
                        className: o()(ng.ZE, { [ng.Kp]: j }),
                        ref: v,
                        children: [
                            N && [...Array(b)].map((e, t) => (0, s.jsx)(tA.A, {}, t)),
                            !N &&
                                m.map((e, t) =>
                                    (0, s.jsx)(
                                        h.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, s.jsx)(tj.A, {
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
            f > b &&
                (0, s.jsx)("div", {
                    className: ng.Ej,
                    children: (0, s.jsx)("div", {
                        children: (0, s.jsx)(tf.m, {
                            currentPage: g,
                            totalCount: f,
                            pageSize: b,
                            onPageChange: T,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nf = n(578364);
function nx(e) {
    let { tab: t, initialCategoryId: n, showFilterInitially: l = !0, onUnmount: a } = e,
        r = (0, g.A)("shop_include_unpublished");
    (!(function () {
        let e = (0, _.bG)([td.A], () => "success" === td.A.getFetchState(eW.FYj)),
            t = null != (0, tu.HH)(),
            { offerEligible: n, clearFilters: l } = (0, A.vs)();
        i.useEffect(() => {
            n && e && !t && l();
        }, [n, e, t, l]);
    })(),
        (0, A.Sf)(r));
    let o = i.useRef(null),
        { handleScroll: c } = (0, nc.r)(o, t),
        { setCategoryRef: d, handleScrollToCategory: u } = (0, tG.k0)(o),
        [m, E] = i.useState(l),
        [h, f] = i.useState(!1);
    return (
        i.useEffect(() => {
            null != n && u(n);
        }, [n, u]),
        i.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        i.useEffect(() => {
            function e() {
                f(window.innerWidth < 1400);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        (0, s.jsx)("div", {
            className: nf.VM,
            children: (0, s.jsxs)("main", {
                className: nf.MY,
                children: [
                    (0, s.jsx)(b.Gt, {
                        className: nf.OW,
                        ref: o,
                        onScroll: c,
                        scrollbarGutter: "both-edges",
                        children: (0, s.jsx)(nC, {
                            isSmallScreen: h,
                            filterBarOpen: m,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: o,
                            setCategoryRef: d,
                            initialCategoryId: n,
                        }),
                    }),
                    m && !h && (0, s.jsx)("div", { className: nf.yF }),
                    m && !h && (0, s.jsx)(tr.Ip, { className: nf.kT, children: (0, s.jsx)(nt, {}) }),
                ],
            }),
        })
    );
}
function nC(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: l,
            tab: a,
            scrollerRef: r,
            setCategoryRef: c,
            initialCategoryId: d,
        } = e,
        u = i.useRef(null),
        m = (0, A.vs)((e) => e.hasDefaultFilters()),
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
                (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        (0, s.jsx)("div", {
            className: nf.en,
            children: (0, s.jsxs)("div", {
                className: nf.pf,
                children: [
                    (0, s.jsxs)("div", {
                        className: nf.ne,
                        children: [
                            (0, s.jsx)("div", { className: nf.lQ, children: (0, s.jsx)(tE, {}) }),
                            (0, s.jsxs)("div", {
                                className: o()(nf.wR, { [nf.Im]: t }),
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: nf.Ul,
                                        children: [
                                            (0, s.jsx)(F.E, {
                                                variant: "body-md/semibold",
                                                children: Y.intl.string(Y.t.uaX705),
                                            }),
                                            (0, s.jsx)(tU, {}),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        ref: C,
                                        children: (0, s.jsx)(H.$, {
                                            onClick: function () {
                                                let e = !n;
                                                (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            icon: to.FiltersHorizontalIcon,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, s.jsx)("div", {
                                    className: nf.Dh,
                                    ref: u,
                                    children: (0, s.jsx)(b.Ch, { className: nf.Qo, children: (0, s.jsx)(nt, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, s.jsx)(h.R9, {
                              newValue: { pageIndex: f },
                              children: (0, s.jsx)(tP, {
                                  setCategoryRef: c,
                                  currentPage: f,
                                  handlePageChange: x,
                                  initialCategoryId: d,
                              }),
                          })
                        : (0, s.jsx)(nh, { scrollerRef: r, tab: a }, a),
                ],
            }),
        })
    );
}
var np = n(599062),
    nS = n(253782),
    nA = n(417388);
let nv = function () {
        return (0, s.jsxs)("div", {
            className: nA.z,
            children: [
                (0, s.jsx)("img", {
                    className: nA.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: Y.intl.string(Y.t["p8+qtU"]),
                }),
                (0, s.jsx)(q.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["p8+qtU"]) }),
                (0, s.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t.UEiyvs) }),
            ],
        });
    },
    n_ = [e9.G2.HOME, e9.G2.ORBS];
async function nI() {
    try {
        await (0, ta.gB)();
    } catch {}
}
function nb(e) {
    let { tab: t, transitionToTab: n, transitionState: l, updateAnalyticsState: a } = e,
        r = (0, _.bG)([ts.A], () =>
            null != ts.A.claimError
                ? `shop load claim error: ${ts.A.claimError.message}`
                : null != ts.A.fetchError
                  ? `shop load fetch purchase error: ${ts.A.fetchError.message}`
                  : void 0,
        );
    !(function (e) {
        let t = (0, _.bG)([E.default], () => E.default.getCurrentUser()),
            { noCache: n, includeUnpublished: l } = (0, tT.A)();
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
    let o = (0, I.H)({ location: "collectibles_content" }),
        c = (0, v.W6)(),
        d = (0, v.zy)(),
        [u] = i.useState(() => {
            if ("POP" === c.action) {
                let e;
                return ((e = ty), (ty = null), e ?? void 0);
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
                    shouldAnimate: s,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, l), null != l && i && !r)) return void c.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
                let o = r ? e9.G2.ORBS : e9.G2.CATALOG;
                (g(l), f(!i), n(o, s));
            },
            [n, a, c],
        ),
        { searchError: p } = (0, ti.S)();
    return null != p
        ? (0, s.jsx)(nv, {})
        : null != r
          ? (0, s.jsx)(np.h, { onRetry: nI, errorMessage: r, errorOrigin: np.A.SHOP_PAGE })
          : n_.includes(t)
            ? (0, s.jsx)(nS.A, { handleTransition: C, tab: t, transitionState: l })
            : t === e9.G2.GAME_SERVERS
              ? o
                  ? (0, s.jsx)(tt, { isGameServerHostingInShopEnabled: o })
                  : (0, s.jsx)(v.rd, { to: eW.BVt.COLLECTIBLES_SHOP_WITH_TAB(e9.G2.HOME) })
              : (0, s.jsx)(nx, {
                    tab: t,
                    initialCategoryId: m ?? x,
                    showFilterInitially: h && null == x,
                    onUnmount: () => {
                        (g(void 0), f(!0));
                    },
                });
}
var nj = n(685491),
    nL = n(235939),
    nN = n(976860),
    nO = n(352373),
    nT = n(650583);
function ny(e) {
    let { children: t, shouldAddEventListener: n, onClose: l } = e,
        a = (0, d.Rv)();
    return (
        i.useEffect(() => {
            if (n && !a) return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
            function e(e) {
                e.key === nT.N$.Escape && l();
            }
        }, [n, a, l]),
        t
    );
}
let nR = function (e) {
    let { tab: t = e9.G2.HOME, sessionId: n, containerRef: l } = e,
        a = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        { onClose: r } = (function () {
            let { search: e } = (0, v.zy)(),
                t = (0, v.g)(),
                n = i.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                l = null != n ? parseInt(n, 10) : null;
            return {
                onClose: i.useCallback(() => {
                    if (0 === l) {
                        ((0, nN.aX)(), (0, T.openUserSettings)());
                        return;
                    }
                    (0, nN.EL)() ? (0, nN.aX)() : (0, nN.pX)(eW.BVt.APP);
                }, [l]),
                source: l,
                ...t,
            };
        })(),
        { currentTab: d, hasFilters: _ } = (0, A.vs)(),
        I = i.useMemo(() => (t === e9.G2.HOME && null != d && _() ? d : t), [t, d, _]);
    (0, p.Wg)();
    let [b, j] = i.useState(),
        L = (0, g.A)("shop_include_unpublished"),
        { category: N, state: O } = (0, C.A)(b, { includeUnpublished: L }),
        y = N?.name,
        [R, M] = i.useState();
    (0, tG.XU)(n);
    let k = i.useCallback((e, t) => {
            (M(e), j(t));
        }, []),
        { selectedTab: P, transitionState: G, transitionToTab: D } = (0, S.oI)(I);
    ((0, m.HU)({ location: Y.intl.string(Y.t.pWG4ze) }),
        (0, x.uS)(n, P, y, G, { sourceButton: R, enabled: null == b || "loading" !== O }),
        (0, x.N0)(P, a));
    let { dismissShopButtonDC: B } = (0, nO.A)();
    (i.useEffect(() => {
        B(eZ.i.AUTO_DISMISS);
    }, [B]),
        i.useEffect(() => {
            l.current?.focus();
        }, [l]));
    let { analyticsLocations: F } = (0, x.lC)(P);
    return (0, s.jsx)(u.f5, {
        value: F,
        children: (0, s.jsx)(h.R9, {
            newValue: { pageCategory: y, pageSize: 5 },
            children: (0, s.jsx)(f.iM, {
                tab: P,
                children: (0, s.jsxs)(ny, {
                    onClose: r,
                    shouldAddEventListener: !1,
                    children: [
                        (0, s.jsx)(nj.G, { handleTransition: D, selectedTab: P }),
                        (0, s.jsx)(nL.A, { tab: P, handleTransition: D }),
                        (0, s.jsx)("div", {
                            className: o()(t_.td, {
                                [t_.RK]: G === e9.Pf.VISIBLE,
                                [t_.in]: G === e9.Pf.IN,
                                [t_.FD]: G === e9.Pf.OUT,
                            }),
                            children: (0, s.jsx)(nb, {
                                tab: P,
                                transitionToTab: D,
                                transitionState: G,
                                updateAnalyticsState: k,
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
};
