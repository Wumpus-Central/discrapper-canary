(n.r(t), n.d(t, { default: () => nB }));
var l,
    s,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    o = n.n(r),
    c = n(164636),
    u = n(192308),
    d = n(688810),
    m = n(726249),
    g = n(354328),
    E = n(287809),
    h = n(857512),
    f = n(161918),
    C = n(790297),
    x = n(706113),
    p = n(841702),
    S = n(983545),
    A = n(365491);
(n(323874), n(14289), n(35956), n(321073));
var I = n(806163),
    _ = n(855986),
    b = n(196736),
    L = n(516521),
    v = n(669815),
    j = n(670735),
    N = n(790284),
    O = n(780964),
    T = n(766075),
    y = n(46653),
    R = n(166403),
    k = n(889558),
    M = n(448645),
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
    K = n(53776),
    Y = n(792996),
    W = n(876564);
function $() {
    let e = i.useCallback(() => {
        (0, U.A)({ subscriptionTier: z.pe.TIER_2, analyticsLocations: [w.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, a.jsx)(D.N, {
        theme: V.NJ.DARK,
        children: (t) =>
            (0, a.jsxs)("div", {
                className: o()(W.vK, t),
                children: [
                    (0, a.jsxs)("div", {
                        className: W.Pf,
                        children: [
                            (0, a.jsx)(B.NitroWheelIcon, {
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
                                children: Y.intl.string(K.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(H.$, {
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
var q = n(462887),
    Z = n(534514),
    X = n(736653),
    Q = n(457865);
function J(e) {
    let { onRetry: t, errorMessage: n } = e,
        l = (0, X.Ay)(),
        s = (0, _.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, a.jsxs)("div", {
        className: Q.kL,
        children: [
            (0, a.jsx)("img", {
                className: Q.Sl,
                src: (0, q.M)(l) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, a.jsx)(Z.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.i5SQ74) }),
            (0, a.jsx)(F.E, {
                className: Q.h_,
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
    let { name: t, coverUrl: n, fromPriceLabel: l, nitroFromPriceLabel: s, onClickCard: r, onClickViewPlans: c } = e,
        u = i.useRef(null),
        { isHoveringOrFocusing: d } = (0, el.A)(u),
        m = (0, _.bG)([E.default], () => M.Ay.canUseShopDiscounts(E.default.getCurrentUser())) && null != s,
        g = m ? s : l,
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), c?.());
            },
            [c],
        );
    return (0, a.jsxs)(et.s, {
        ref: u,
        onClick: r,
        "aria-label": t,
        className: o()(es.Nr, { [es.yo]: d }),
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
                                                        (0, a.jsx)(B.NitroWheelIcon, {
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
                                                children: Y.intl.string(K.default.SFUhDi),
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
    return (0, a.jsx)("div", {
        className: o()(es.Nr, ei.s7, ei.U6),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: ei.qr,
            children: [(0, a.jsx)("div", { className: ei.w9 }), (0, a.jsx)("div", { className: ei.n2 })],
        }),
    });
}
var eo = n(901215);
let ec = i.memo(function (e) {
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
function eu(e) {
    let { games: t, title: n, onSelectGame: l, loading: s = !1 } = e;
    return (0, a.jsxs)("section", {
        className: eo.u,
        children: [
            null != n && (0, a.jsx)(Z.D, { variant: "heading-lg/semibold", children: n }),
            (0, a.jsx)("div", {
                className: eo.V,
                children: s
                    ? Array.from({ length: 10 }, (e, t) => (0, a.jsx)(er, {}, t))
                    : t.map((e) => (0, a.jsx)(ec, { game: e, onSelect: l }, e.id)),
            }),
        ],
    });
}
var ed = n(32880),
    em = n(410232),
    eg = n(231483),
    eE = n(339350),
    eh = n(28863),
    ef = n(442935);
function eC() {
    let e = i.useMemo(
        () => [
            { Icon: ed.DownloadIcon, label: Y.intl.string(K.default.GJNQYz) },
            { Icon: em.CloudUploadIcon, label: Y.intl.string(K.default.pTinR2) },
            { Icon: eg.ShieldIcon, label: Y.intl.string(K.default.s0N1nM) },
            { Icon: eE.HourglassIcon, label: Y.intl.string(K.default.NzrGEi) },
        ],
        [],
    );
    return (0, a.jsxs)("section", {
        className: ef.ZK,
        children: [
            (0, a.jsxs)("div", {
                className: ef.jE,
                children: [
                    (0, a.jsx)(Z.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: Y.intl.string(K.default.F5W36W),
                    }),
                    (0, a.jsxs)(F.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            Y.intl.string(K.default.xMpGuO),
                            " ",
                            (0, a.jsx)(eh.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: Y.intl.string(K.default.AnZeUS),
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
var ex = n(305090);
function ep() {
    return (0, a.jsxs)("div", {
        className: ex.vK,
        children: [
            (0, a.jsx)("div", {
                className: ex.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, a.jsx)("div", { className: ex.Ge, "aria-hidden": !0 }),
            (0, a.jsx)("div", { className: ex.f5, "aria-hidden": !0 }),
        ],
    });
}
var eS = n(408278),
    eA = n(548411),
    eI = n(554830),
    e_ = n(281445),
    eb = n(390544),
    eL = n(554146),
    ev = n(939249),
    ej = n(509434),
    eN = n(866665),
    eO = n(103271);
let eT = { TERTIARY: eO.Xe, SECONDARY: eO.Rm, PRIMARY: eO.zB },
    ey = { SIZE_24: eO.q1, SIZE_32: eO.Hb, SIZE_36: eO.VM };
function eR(e) {
    let {
        className: t,
        tooltip: n,
        color: l,
        size: s = ey.SIZE_32,
        icon: i,
        onMouseDown: r,
        onClick: c,
        disabled: u,
        focusProps: d,
        ref: m,
    } = e;
    return (0, a.jsx)(eN.m, {
        asContainer: !0,
        text: n,
        shouldShow: !u,
        children: (0, a.jsx)(ev.D, {
            innerRef: m,
            "aria-label": n,
            "aria-disabled": u,
            className: o()(t, eO.x6, l, s, { [eO.r9]: u }),
            onMouseDown: r,
            onClick: (e) => {
                c(e);
            },
            focusProps: d,
            children: i,
        }),
    });
}
var ek = n(933832),
    eM = n(624479),
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
        s = (0, _.bG)(
            [R.A],
            () =>
                (0, eK.Yg)({
                    subscriptionId: l,
                    hasFetchedSubscriptions: R.A.hasFetchedSubscriptions(),
                    getSubscriptionById: (e) => R.A.getSubscriptionById(e),
                }),
            [l],
        ),
        r = (0, eV.A)(t.instance) && s,
        o = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, a.jsx)(eR, {
        color: eT.SECONDARY,
        size: ey.SIZE_24,
        icon: (0, a.jsx)(ez.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: o,
        disabled: !r,
        tooltip: Y.intl.string(K.default["feUiM/"]),
    });
}
var eW = n(652215),
    e$ = n(628049),
    eq = n(49999),
    eZ = n(684644);
let eX = [eb.M.STARTUP_FAILED, eb.M.MISSING_STOCK, eb.M.PROVIDER_ERRORED, eb.M.DELETED];
function eQ(e) {
    return `game-server-owned-card-${e}`;
}
function eJ(e) {
    let { gameServerId: t } = e,
        n = i.useCallback(() => {
            (0, eB.Kz)(t).catch(() => {});
        }, [t]);
    return (0, a.jsx)("div", {
        className: eZ.y7,
        children: (0, a.jsx)(H.$, {
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
    return (0, a.jsx)("div", {
        className: eZ.y7,
        children: (0, a.jsx)(H.$, {
            fullWidth: !0,
            text: Y.intl.string(K.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let e1 = i.memo(function (e) {
    let { server: t, onJoin: l, onViewPanel: s, onOpenSettings: r, isHighlighted: c = !1 } = e,
        d = (0, ee.A)(t.gameId, "cover") ?? t.coverUrl,
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
        [g, E] = (0, eP.kn)([eL.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        h = g !== eL.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        f = e_.X.SHOCKBYTE,
        C = y.default.getId() ?? "0",
        { handleCopyServerIp: x, animateCopyIcon: p } = (0, eF.A)(C, t.id, w.A.GAME_SERVER_PAGE, t.serverIp),
        S = i.useCallback(() => {
            (0, ew.A)({
                provider: f,
                onAccept: () => {
                    (E(eq.i.TAKE_ACTION), x());
                },
            });
        }, [f, E, x]),
        A = i.useCallback(() => {
            h
                ? l(t)
                : (0, ew.A)({
                      provider: f,
                      onAccept: () => {
                          (E(eq.i.TAKE_ACTION), l(t));
                      },
                  });
        }, [h, f, E, l, t]),
        I = i.useCallback(() => s(t), [s, t]),
        b = i.useCallback(() => {
            ((e) => {
                let { server: t, source: l } = e;
                (0, u.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(796662),
                            n.e(801781),
                            n.e(592e3),
                            n.e(524434),
                            n.e(933947),
                            n.e(769281),
                            n.e(279926),
                            n.e(481647),
                            n.e(749248),
                            n.e(900361),
                            n.e(844780),
                            n.e(45072),
                            n.e(368062),
                            n.e(713567),
                            n.e(236946),
                            n.e(692639),
                            n.e(890480),
                            n.e(440963),
                            n.e(766031),
                            n.e(394317),
                            n.e(12762),
                            n.e(835868),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, a.jsx)(e, { ...n, server: t, source: l });
                    },
                    { stackingBehavior: "stack", modalKey: eU.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        L = (0, eH.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e$.qb[f],
        v = null != t.instance.gameServerPanelUrl,
        j = null != t.instance.status && eX.includes(t.instance.status),
        N = i.useCallback(() => {
            (0, k.h)({ href: L });
        }, [L]),
        O = i.useMemo(() => {
            switch (t.instance.status) {
                case eb.M.ONLINE:
                    return Y.intl.string(K.default["60kAzo"]);
                case eb.M.OFFLINE:
                    return Y.intl.string(K.default["Ys/RrB"]);
                case eb.M.SLEEPING:
                    return Y.intl.string(K.default.y0z8ZO);
                case eb.M.STARTUP_FAILED:
                    return Y.intl.string(K.default["7C9Z3s"]);
                case eb.M.MISSING_STOCK:
                    return Y.intl.string(K.default["+a5G2l"]);
                case eb.M.PROVIDER_ERRORED:
                    return Y.intl.string(K.default["6g/oji"]);
                case eb.M.DELETED:
                    return Y.intl.string(K.default.Z1NZwX);
                case eb.M.STARTING:
                    return Y.intl.string(K.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        T = t.isOnline ? "text-feedback-positive" : j ? "text-feedback-critical" : "text-muted",
        M = i.useMemo(
            () =>
                (0, a.jsx)(ev.D, {
                    className: o()(eZ.wC, eZ.QV),
                    onClick: A,
                    "aria-label": Y.intl.string(K.default["fQCcM/"]),
                    children: (0, a.jsx)(F.E, {
                        variant: "body-sm/semibold",
                        color: "none",
                        children: Y.intl.string(K.default["fQCcM/"]),
                    }),
                }),
            [A],
        ),
        P = i.useMemo(
            () =>
                (0, a.jsxs)(ev.D, {
                    className: o()(eZ.wC, eZ.y2, { [eZ.Gz]: !v }),
                    onClick: v ? I : void 0,
                    "aria-disabled": !v,
                    "aria-label": Y.intl.string(K.default.tkbVdf),
                    children: [
                        (0, a.jsx)(F.E, {
                            variant: "body-sm/semibold",
                            color: "none",
                            children: Y.intl.string(K.default.tkbVdf),
                        }),
                        (0, a.jsx)(ej.LinkExternalSmallIcon, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                        }),
                    ],
                }),
            [I, v],
        ),
        G = i.useMemo(() => {
            switch (t.instance.status) {
                case eb.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(eJ, { gameServerId: t.id }), P] });
                case eb.M.STARTUP_FAILED:
                case eb.M.MISSING_STOCK:
                    return (0, a.jsx)("div", {
                        className: eZ.y7,
                        children: (0, a.jsx)(H.$, {
                            fullWidth: !0,
                            text: Y.intl.string(K.default.gWMqnI),
                            variant: "primary",
                            icon: ej.LinkExternalSmallIcon,
                            iconPosition: "end",
                            disabled: !v,
                            onClick: I,
                        }),
                    });
                case eb.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                className: eZ.y7,
                                children: (0, a.jsx)(H.$, {
                                    fullWidth: !0,
                                    text: Y.intl.string(K.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: N,
                                }),
                            }),
                            (0, a.jsx)(e0, {}),
                        ],
                    });
                case eb.M.DELETED:
                    return P;
                default:
                    return (0, a.jsxs)(a.Fragment, { children: [M, P] });
            }
        }, [t.instance.status, t.id, v, M, P, I, N]);
    return (0, a.jsxs)("div", {
        id: eQ(t.id),
        className: o()(eZ.Nr, { [eZ.mr]: c }),
        children: [
            c && (0, a.jsx)("div", { className: eZ._8, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: eZ.Nk,
                "aria-hidden": !0,
                children: [
                    null != d && (0, a.jsx)("img", { className: eZ.QC, src: d, alt: "" }),
                    (0, a.jsx)("div", { className: eZ.jc }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eZ.AQ,
                children: [
                    (0, a.jsx)(eR, {
                        color: eT.SECONDARY,
                        size: ey.SIZE_24,
                        icon: (0, a.jsx)(eG.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: b,
                        tooltip: Y.intl.string(Y.t.RDE0Sc),
                    }),
                    (0, a.jsx)(eY, { server: t, onOpenSettings: r }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eZ.rf,
                children: [
                    (0, a.jsxs)("div", {
                        className: eZ.U1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: eZ.oL,
                                children: [
                                    null != d
                                        ? (0, a.jsx)("img", { className: eZ.vT, src: d, alt: "" })
                                        : (0, a.jsx)("div", {
                                              className: eZ.iv,
                                              children: (0, a.jsx)(F.E, {
                                                  variant: "body-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, a.jsx)("div", { className: eZ.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: eZ.VQ,
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
                        className: eZ.M1,
                        children: [
                            (0, a.jsxs)("div", {
                                className: eZ.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: eZ.bi,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default.bDdi7n),
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
                                        className: eZ.gv,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default["7phwMG"]),
                                            }),
                                            h
                                                ? (0, a.jsxs)("div", {
                                                      className: eZ.Yb,
                                                      children: [
                                                          (0, a.jsx)(F.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, a.jsx)(ev.D, {
                                                                  className: eZ.cL,
                                                                  onClick: x,
                                                                  "aria-label": Y.intl.string(Y.t.OpuAlK),
                                                                  children: p
                                                                      ? (0, a.jsx)(ek.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, a.jsx)(eM.CopyIcon, {
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
                                                      children: Y.intl.string(K.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: eZ.N8,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: eZ.bi,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default["n+ZX7y"]),
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: eZ.Yb,
                                                children: [
                                                    (t.isOnline || j) &&
                                                        (0, a.jsx)("span", {
                                                            className: o()(eZ.kg, { [eZ.rU]: j }),
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
                                        className: eZ.gv,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: Y.intl.string(K.default.mJlz3T),
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
            (0, a.jsx)("div", { className: eZ.qr, children: G }),
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
            highlightServerId: c = null,
            highlightNonce: u = 0,
        } = e,
        d = i.useRef(null),
        m = i.useRef(null),
        [g, E] = i.useState(!1),
        [h, f] = i.useState(!1),
        [C, x] = i.useState(null),
        p = i.useCallback(() => {
            let e = d.current;
            null != e && (E(e.scrollLeft > 1), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    (i.useLayoutEffect(() => {
        p();
    }, [p, t]),
        i.useEffect(() => {
            let e = d.current;
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
            d.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        A = i.useCallback(() => {
            d.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        i.useEffect(() => {
            if (u <= 0) return;
            let e = null != c ? document.getElementById(eQ(c)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    (x(null), (t = requestAnimationFrame(() => x(c))));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(t));
            };
        }, [u, c]),
        i.useEffect(() => {
            if (null == C) return;
            let e = setTimeout(() => x(null), 4e3);
            return () => clearTimeout(e);
        }, [C]),
        (0, a.jsxs)("section", {
            className: e2.uW,
            ref: m,
            children: [
                (0, a.jsxs)("div", {
                    className: e2.wx,
                    children: [
                        (0, a.jsx)(Z.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: Y.intl.string(K.default.BOWmmT),
                        }),
                        (0, a.jsx)(D.N, {
                            theme: V.NJ.DARK,
                            children: (e) =>
                                (0, a.jsxs)("div", {
                                    className: o()(e2.$s, e),
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
                                                    icon: eA.ArrowLargeLeftIcon,
                                                    disabled: !g,
                                                    onClick: S,
                                                    "aria-label": Y.intl.string(Y.t["13/7kX"]),
                                                }),
                                                (0, a.jsx)(eS.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eI.ArrowLargeRightIcon,
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
                (0, a.jsx)("div", {
                    className: o()(e2.XG, { [e2.OW]: g && h, [e2.vL]: g && !h, [e2.y0]: h && !g }),
                    ref: d,
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
                                    isHighlighted: C === e.id,
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
var e5 = n(705285),
    e8 = n(199781),
    e7 = n(923477),
    e3 = n(269249),
    e4 = n(55766),
    e9 = n(758836),
    te = n(111108);
function tt(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, a.jsx)(j.A, { children: (0, a.jsx)(tn, { isGameServerHostingInShopEnabled: t }) });
}
function tn(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, I.zy)(),
        l = (0, I.W6)(),
        { servers: s, refetch: r } = (0, e4.f)(),
        o = s.length > 0,
        c = (0, _.bG)([E.default], () => M.Ay.canUseShopDiscounts(E.default.getCurrentUser())),
        { games: u, hasError: d, isEmpty: m, isLoading: g, refetch: h } = (0, e3.Y)();
    i.useEffect(() => {
        o && (0, v.hP)().catch(() => {});
    }, [o]);
    let f = i.useRef(u);
    i.useEffect(() => {
        u.length > 0 && (f.current = u);
    }, [u]);
    let C = i.useCallback(() => {
            (h(), r());
        }, [h, r]),
        x = (0, e5.VJ)(),
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
        b = i.useCallback(() => {
            let e = s[0];
            null != e && A({ serverId: e.id });
        }, [s, A]),
        j = (0, e7.O)((e) => e.highlightFirstCardNonce),
        D = i.useRef(j);
    i.useEffect(() => {
        if (j === D.current) return;
        D.current = j;
        let e = requestAnimationFrame(() => b());
        return () => cancelAnimationFrame(e);
    }, [j, b]);
    let B = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.cl.SHOP_CARD;
                (x(e5.L5.OPEN_PLAN_MODAL, t),
                    (0, e8.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => A({ gameId: e.gameId }),
                    }));
            },
            [x, A],
        ),
        F = i.useMemo(() => {
            let e = new URLSearchParams(n.search).get(e9.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    i.useEffect(() => {
        if (!t || null == F || g || 0 === u.length) return;
        let e = u.find((e) => e.gameId === F);
        if (null == e) return;
        B(e, e5.cl.ACTIVITY_PANEL_DEEP_LINK);
        let s = new URLSearchParams(n.search);
        (s.delete(e9.tD), l.replace(`${n.pathname}?${s.toString()}`));
    }, [t, F, u, g, B, l, n.pathname, n.search]);
    let H = i.useCallback(() => {
            (N.A.setState({ scrollToGameServers: !0 }), (0, T.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL));
        }, []),
        w = i.useCallback((e) => {
            let t = y.default.getId() ?? "0";
            (0, G.A)(t, e.instance);
        }, []),
        U = i.useCallback((e) => {
            (0, k.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        z = i.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = f.current.find((t) => t.gameId === e.gameId);
                function l(t) {
                    (0, e8.S)({
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
                let s = R.A.getSubscriptionById(t);
                null != s
                    ? l(s)
                    : (0, v.hP)()
                          .then(() => {
                              let e = R.A.getSubscriptionById(t);
                              null != e && l(e);
                          })
                          .catch(() => {});
            },
            [A],
        ),
        V = o ? Y.intl.string(K.default["+aRmAc"]) : void 0;
    return (0, a.jsx)(L.Ch, {
        className: te.XG,
        children: (0, a.jsxs)("div", {
            className: te.kL,
            children: [
                !c && (0, a.jsx)($, {}),
                (0, a.jsx)(ep, {}),
                (0, a.jsxs)("div", {
                    className: te.Qs,
                    children: [
                        (0, a.jsx)(eC, {}),
                        o &&
                            (0, a.jsx)(e6, {
                                servers: s,
                                onViewAll: H,
                                onJoin: w,
                                onViewPanel: U,
                                onOpenSettings: z,
                                highlightServerId: p.serverId,
                                highlightNonce: p.nonce,
                            }),
                        d || m
                            ? (0, a.jsx)(J, { onRetry: C })
                            : (0, a.jsx)(eu, { games: u, title: V, onSelectGame: B, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var tl = n(856383),
    ts = n(969935),
    ta = n(4227),
    ti = n(856686),
    tr = n(95362),
    to = n(783977),
    tc = n(129230),
    tu = n(918467),
    td = n(758461),
    tm = n(641150),
    tg = n(140735);
function tE() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: l } = (0, A.vs)((e) => e),
        { totalCount: s, isFetchingResults: r } = (0, ti.S)(),
        o = (0, A.vs)((e) => e.hasFilters()),
        c = i.useCallback(() => {
            if (!o) return "";
            if (r) return Y.intl.string(Y.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return Y.intl.formatToPlainString(Y.t.KJMJOz, { count: s, search: e });
            }
            if (!n && !l && 1 === e.size) {
                if (e.has(tm.q.AVATAR_DECORATION)) return Y.intl.formatToPlainString(Y.t.s1UzGQ, { count: s });
                if (e.has(tm.q.NAMEPLATE)) return Y.intl.formatToPlainString(Y.t.ZWGN9T, { count: s });
                if (e.has(tm.q.PROFILE_EFFECT)) return Y.intl.formatToPlainString(Y.t["v/7apu"], { count: s });
                if (e.has(tm.q.PROFILE_FRAME)) return Y.intl.formatToPlainString(Y.t.eu4eRy, { count: s });
                if (e.has(tm.q.BUNDLE)) return Y.intl.formatToPlainString(Y.t.fZ1rdk, { count: s });
            }
            return 0 === e.size && n && !l
                ? Y.intl.formatToPlainString(Y.t.TxoTTj, { count: s })
                : 0 === e.size && l && !n
                  ? Y.intl.formatToPlainString(Y.t.TLso50, { count: s })
                  : Y.intl.formatToPlainString(Y.t["/rPvmQ"], { count: s });
        }, [e, s, o, t, r, n, l])(),
        [u, d] = i.useState("");
    return (
        r || c === u || d(c),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(Z.D, { variant: "heading-lg/semibold", children: c }),
                (0, a.jsx)(tg.A, { role: "status", "aria-live": "polite", "aria-atomic": "true", children: u }),
            ],
        })
    );
}
var th = n(172218),
    tf = n(662203),
    tC = n(195271),
    tx = n(924473),
    tp = n(511265),
    tS = n(654512),
    tA = n(206077),
    tI = n(695960),
    t_ = n(100057),
    tb = n(812760),
    tL = n(484469),
    tv = n(761977),
    tj = n(170522),
    tN = n(295621);
let tO = function () {
    return (0, a.jsx)("div", {
        className: tN.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: tj.vY,
                    children: [
                        (0, a.jsx)("div", { className: o()(tv.sW, tN.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, a.jsx)(tL.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tT = n(316108),
    ty = n(987421),
    tR = n(350172),
    tk = n(730202),
    tM = n(510801),
    tP = n(998694);
let tG = null,
    tD = new Map();
var tB = n(504820);
function tF(e) {
    let { category: t } = e,
        n = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        l = (0, tA.X)(t.products),
        s = (0, tp.p)()(l);
    return null == n || 0 === s.length
        ? null
        : (0, a.jsx)("div", {
              className: tj.vY,
              children: s.map((e, t) =>
                  (0, a.jsx)(
                      h.R9,
                      { newValue: { tilePosition: t }, children: (0, a.jsx)(ty.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tH(e) {
    let t,
        { category: n, currentPage: l } = e,
        [s, r] = i.useState(!1),
        o = (0, th.K)(function (e) {
            r(e);
        }, 0.15),
        u = (0, I.W6)(),
        d = (0, h.uM)(),
        m = (0, tI.A)(n.skuId),
        g = (0, tS.A)(n.skuId),
        E = null != m && null != g,
        f = (0, tC.t)("shop_browse_calendar", { autoTrackExposure: E }).enabled,
        C = (0, tx.A)(),
        x = (0, c.bG)([tu.A], () => {
            let e = tu.A.getFetchState(eW.FYj);
            return null == e || ("loading" === e && null == tu.A.getPromotionsForApplication(eW.FYj));
        }),
        p = f && (x || (null != g && !C)),
        S = i.useCallback(() => {
            var e;
            (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: d?.sessionId,
                sku_id: n.skuId,
                page_type: e9.G2.CATALOG,
                page_section: d?.pageSection,
                page_category: n.name,
                page_index: d?.pageIndex,
                page_size: d?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e = n.skuId),
                (tG = e),
                null != e && null != l && tD.set(e, l),
                u.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n.skuId)));
        }, [d?.pageIndex, d?.pageSection, d?.pageSize, d?.sessionId, n.name, n.skuId, l, u]);
    return (
        (t = p
            ? (0, a.jsx)(tT.Vp, {})
            : E && f
              ? (0, a.jsx)(tT.r8, {
                    sequencedOffers: m,
                    products: n.products,
                    openPosition: g,
                    surface: tB.L.CATALOG,
                    isSmallSquaresOnly: !0,
                })
              : (0, a.jsx)(tF, { category: n })),
        (0, a.jsxs)("div", { className: tj.EF, ref: o, children: [(0, a.jsx)(tb.A, { category: n, onSelect: S }), t] })
    );
}
function tw(e) {
    let { setCategoryRef: t, currentPage: n, handlePageChange: l, initialCategoryId: s } = e,
        r = (0, h.uM)(),
        o = r?.sessionId ?? "",
        { noCache: c, includeUnpublished: u } = (0, tP.A)(),
        {
            categories: d,
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
                r = (0, tR.H)(a),
                o = (0, tR.q7)(a);
            i.useEffect(() => {
                (0, tR.cS)(a);
            }, [a]);
            let {
                    collectionIds: c,
                    fetchState: u,
                    total: d,
                } = (0, _.cf)(
                    [tk.A],
                    () => ({
                        collectionIds: tk.A.getCollectionPageIds(r),
                        fetchState: tk.A.getCollectionPageFetchState(r),
                        total: tk.A.getCollectionListTotal(o),
                    }),
                    [r, o],
                ),
                m = c ?? [],
                g = m.join(","),
                E = (0, _.cf)(
                    [tk.A],
                    () => {
                        let e = {};
                        for (let t of m) e[t] = tk.A.getCollection(t);
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
                            .map((e) => tM.A.fromStorefrontCollectionRecord(e)),
                    [g, E],
                ),
                total: d ?? 0,
                isLoading: null == c && "error" !== u,
            };
        })({ page: n, pageSize: 5, includeUnpublished: u, noCache: c }),
        E = i.useRef(void 0);
    i.useEffect(() => {
        if (null == s) {
            E.current = void 0;
            return;
        }
        if (s === E.current) return;
        let e = tD.get(s);
        null != e && (e !== n && l(e), (E.current = s));
    }, [s, l, n]);
    let f = i.useMemo(() => d.filter((e) => e.products.length > 0), [d]);
    return (i.useEffect(() => {
        (0, t_.z)({
            sessionId: o,
            checkpoint: t_.t.SHOP_MOUNTED,
            tab: e9.G2.CATALOG,
            unpublishedCategoriesShown: u,
            cacheDisabled: c,
        });
    }, []),
    i.useEffect(() => {
        g ||
            0 === f.length ||
            (0, t_.z)({
                sessionId: o,
                checkpoint: t_.t.SHOP_RENDERED,
                tab: e9.G2.CATALOG,
                unpublishedCategoriesShown: u,
                cacheDisabled: c,
            });
    }, [o, u, c, g, f.length]),
    g)
        ? (0, a.jsx)(tO, {})
        : (0, a.jsxs)("div", {
              className: tj.LZ,
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
                                  children: (0, a.jsx)(tH, { category: e, currentPage: n }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, a.jsx)("div", {
                      className: tj.Ej,
                      children: (0, a.jsx)(tf.m, {
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
var tU = n(177366),
    tz = n(401864),
    tV = n(124987),
    tK = n(691885),
    tY = n(532603),
    tW = n(878278);
let t$ = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, A.vs)(),
        l = (0, h.uM)(),
        s = (0, tY.yB)("CollectiblesSortSelect"),
        r = n(),
        c = i.useMemo(() => e9.QB.filter((e) => e.sortType !== tV.$.RELEVANCE || r), [r]),
        u = i.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tV.$.RECENCY
                ? { label: Y.intl.string(Y.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tV.$.PRICE
                  ? n === tz.A.ASC
                      ? { label: Y.intl.string(Y.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: Y.intl.string(Y.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tV.$.RELEVANCE
                    ? { label: Y.intl.string(Y.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: Y.intl.string(Y.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        d = i.useCallback(
            (e) =>
                ({
                    recent: { sortType: tV.$.RECENCY, sortDirection: tz.A.DESC },
                    "price-asc": { sortType: tV.$.PRICE, sortDirection: tz.A.ASC },
                    "price-desc": { sortType: tV.$.PRICE, sortDirection: tz.A.DESC },
                    popularity: { sortType: tV.$.POPULARITY, sortDirection: tz.A.DESC },
                    relevance: { sortType: tV.$.RELEVANCE, sortDirection: tz.A.DESC },
                })[e],
            [],
        ),
        m = i.useCallback(
            (e) => {
                let n = u(d(e));
                (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_section: l?.pageSection,
                    page_category: l?.pageCategory,
                    page_index: l?.pageIndex,
                    page_size: l?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(d(e)));
            },
            [l, u, d, t],
        ),
        g = u(e);
    return (0, a.jsx)("div", {
        className: o()(tW.k, { [tY.jP]: s }),
        children: (0, a.jsx)(tK.l, {
            label: Y.intl.string(Y.t.uaX705),
            hideLabel: !0,
            options: c.map(u),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var tq =
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
    tZ =
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
    tX = n(150934),
    tQ = n(805251),
    tJ = n(278416),
    t0 = n(602853),
    t1 = n(646514),
    t2 = n(947641),
    t6 = n(604338),
    t5 = n(785866),
    t8 = n(373846),
    t7 = n(308323),
    t3 = n(608599),
    t4 = n(685761),
    t9 = n(157225),
    ne = n(413249),
    nt = n(510241),
    nn = n(601198),
    nl = n(431527),
    ns = n(890283),
    na = n(7250),
    ni = n(582666);
function nr() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: l,
            onToggleOfferEligible: s,
            offerEligible: r,
            reset: o,
            hasFilters: c,
        } = (0, A.vs)(),
        u = c(),
        d = (0, h.uM)(),
        m = i.useRef(null),
        g = i.useId(),
        E = i.useId(),
        f = (0, td.HH)(),
        C = i.useCallback(
            (e) => {
                tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: d?.sessionId,
                    page_section: d?.pageSection,
                    page_category: d?.pageCategory,
                    page_index: d?.pageIndex,
                    page_size: d?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [d],
        ),
        x = i.useCallback(() => {
            (C(`filter 3p only ${!1 === l ? "on" : "off"}`), n());
        }, [n, l, C]);
    return (0, a.jsxs)("div", {
        className: ni.kT,
        children: [
            (0, a.jsxs)("div", {
                className: ni.KZ,
                children: [
                    (0, a.jsx)("div", {
                        ref: m,
                        tabIndex: -1,
                        children: (0, a.jsx)(Z.D, {
                            variant: "heading-sm/semibold",
                            className: ni.hr,
                            id: g,
                            children: Y.intl.string(Y.t.aDZysP),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        role: "group",
                        "aria-labelledby": g,
                        className: ni.mM,
                        children: e9._6.map((e) => (0, a.jsx)(no, { filter: e, trackFilterAction: C }, e)),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ni.KZ,
                children: [
                    (0, a.jsx)(Z.D, {
                        variant: "heading-sm/semibold",
                        className: ni.hr,
                        id: E,
                        children: Y.intl.string(Y.t.Vfebhe),
                    }),
                    (0, a.jsxs)("div", {
                        role: "group",
                        "aria-labelledby": E,
                        className: ni.mM,
                        children: [
                            (0, a.jsx)(tX.S, {
                                checked: t,
                                onChange: () => {
                                    (C(`filter orb eligible ${!1 === t ? "on" : "off"}`), e());
                                },
                                label: Y.intl.string(Y.t.AHHHgG),
                            }),
                            (0, a.jsx)(tX.S, { checked: l, onChange: x, label: Y.intl.string(Y.t["+W8gb+"]) }),
                            null != f &&
                                (0, a.jsxs)("div", {
                                    className: ni.Ym,
                                    children: [
                                        (0, a.jsx)(tX.S, {
                                            checked: r,
                                            onChange: () => {
                                                (C(`filter offer eligible ${!1 === r ? "on" : "off"}`), s());
                                            },
                                            label: Y.intl.string(Y.t.hY8Ft1),
                                        }),
                                        (0, a.jsx)(tQ.E, {
                                            type: { text: Y.intl.string(Y.t["nb5PC/"]) },
                                            icon: tJ.TagIcon,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(nc, { trackFilterAction: C }),
            (0, a.jsx)(nm, { trackFilterAction: C }),
            u &&
                (0, a.jsx)(H.$, {
                    variant: "secondary",
                    onClick: () => {
                        (C("filter reset"), o(), requestAnimationFrame(() => m.current?.focus()));
                    },
                    text: Y.intl.string(Y.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function no(e) {
    let { filter: t, trackFilterAction: n } = e,
        l = {
            [tm.q.AVATAR_DECORATION]: Y.intl.string(Y.t.dRZYNE),
            [tm.q.PROFILE_EFFECT]: Y.intl.string(Y.t["1cNjtx"]),
            [tm.q.NAMEPLATE]: Y.intl.string(Y.t.V68Fqz),
            [tm.q.PROFILE_FRAME]: Y.intl.string(Y.t.ecTJkR),
            [tm.q.BUNDLE]: Y.intl.string(Y.t.FYFpps),
        },
        { itemTypeFilters: s, onToggleItemType: i } = (0, A.vs)();
    return (0, a.jsx)(tX.S, {
        checked: s.has(t),
        onChange: () => {
            let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
            (n(`filter item type ${e} ${!1 === s.has(t) ? "on" : "off"}`), i(t));
        },
        label: l[t] ?? "",
    });
}
function nc(e) {
    let { trackFilterAction: t } = e,
        n = i.useMemo(
            () => [
                { color: "#9B59B6", label: Y.intl.string(Y.t.kqUD4P), enum: tq.PURPLE },
                { color: "#3498DB", label: Y.intl.string(Y.t.qQTRae), enum: tq.BLUE },
                { color: "#2ECC71", label: Y.intl.string(Y.t["f/Ylk6"]), enum: tq.GREEN },
                { color: "#A0522D", label: Y.intl.string(Y.t["Sd/BMa"]), enum: tq.BROWN },
                { color: "#F1C40F", label: Y.intl.string(Y.t["0fevYz"]), enum: tq.YELLOW },
            ],
            [],
        ),
        l = i.useMemo(
            () => [
                { color: "#E67E22", label: Y.intl.string(Y.t.ZE7weD), enum: tq.ORANGE },
                { color: "#E74C3C", label: Y.intl.string(Y.t.hKJGOM), enum: tq.RED },
                { color: "#EC407A", label: Y.intl.string(Y.t.HvLEGM), enum: tq.PINK },
                { color: "#FFFFFF", label: Y.intl.string(Y.t["CB+lNO"]), enum: tq.WHITE },
                { color: "#262626", label: Y.intl.string(Y.t["dMey+v"]), enum: tq.BLACK },
            ],
            [],
        );
    return (0, a.jsxs)("div", {
        className: ni.KZ,
        children: [
            (0, a.jsx)(Z.D, { variant: "heading-sm/semibold", className: ni.hr, children: Y.intl.string(Y.t.K1xGoG) }),
            (0, a.jsx)(nu, { colors: n, trackFilterAction: t }),
            (0, a.jsx)(nu, { colors: l, trackFilterAction: t }),
        ],
    });
}
function nu(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: l, onToggleColor: s } = (0, A.vs)();
    return (0, a.jsx)("div", {
        className: ni.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: r } = e;
            return (0, a.jsx)(
                nd,
                { color: t, label: i, enum: r, isToggled: l.has(r), onToggleColor: s, trackFilterAction: n },
                r,
            );
        }),
    });
}
function nd(e) {
    let { color: t, label: n, enum: l, isToggled: s, onToggleColor: i, trackFilterAction: r } = e,
        c = (0, t0.r)(t1.A.unsafe_rawColors.WHITE).hex(),
        u = (0, t0.r)(t1.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, a.jsx)(
        eN.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, a.jsx)(
                ev.D,
                {
                    className: o()(ni.n1, { [ni.lx]: s }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": s,
                    onClick: () => {
                        (r(`filter color ${n.toLowerCase()} ${!s ? "on" : "off"}`), i(l));
                    },
                    children:
                        s &&
                        (0, a.jsx)("div", {
                            className: ni.oE,
                            children: (0, a.jsx)(t2.CheckmarkLargeBoldIcon, {
                                size: "xs",
                                color: (0, na.j)({ backgroundColor: t, colors: [c, u] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nm(e) {
    let { trackFilterAction: t } = e,
        { enabled: n } = ns.A.useConfig({ location: "collectibles-shop-theme-filters" });
    return n ? (0, a.jsx)(nE, { trackFilterAction: t }) : (0, a.jsx)(ng, { trackFilterAction: t });
}
function ng(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, A.vs)(),
        s = (0, X.Ay)() === V.NJ.DARK,
        r = i.useCallback(
            (e) => {
                if (n.has(e) || s) return "control-primary-text-default";
            },
            [n, s],
        ),
        c = i.useCallback((e) => (n.has(e) || s ? t1.A.colors.WHITE : t1.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, s]),
        u = i.useMemo(
            () => [
                {
                    name: Y.intl.string(Y.t.aVBOKh),
                    icon: (0, a.jsx)(t6.VeinIcon, { size: "xs", color: c(tZ.ANIME) }),
                    enum: tZ.ANIME,
                },
                {
                    name: Y.intl.string(Y.t["3WoZBc"]),
                    icon: (0, a.jsx)(t5.JoystickIcon, { size: "xs", color: c(tZ.GAMING) }),
                    enum: tZ.GAMING,
                },
                {
                    name: Y.intl.string(Y.t.yuEmLj),
                    icon: (0, a.jsx)(t8.TeacupIcon, { size: "xs", color: c(tZ.CUTE_COZY) }),
                    enum: tZ.CUTE_COZY,
                },
                {
                    name: Y.intl.string(Y.t.mMvCHo),
                    icon: (0, a.jsx)(t7.ThemeMidnightIcon, { size: "xs", color: c(tZ.SCI_FI) }),
                    enum: tZ.SCI_FI,
                },
                {
                    name: Y.intl.string(Y.t.TlhOQC),
                    icon: (0, a.jsx)(t3.BurgerIcon, { size: "xs", color: c(tZ.FOOD_DRINKS) }),
                    enum: tZ.FOOD_DRINKS,
                },
                {
                    name: Y.intl.string(Y.t["4IaUIM"]),
                    icon: (0, a.jsx)(t4.MagicDoorIcon, { size: "xs", color: c(tZ.FANTASY) }),
                    enum: tZ.FANTASY,
                },
                {
                    name: Y.intl.string(Y.t["w0nSG/"]),
                    icon: (0, a.jsx)(t9.PawPrintIcon, { size: "xs", color: c(tZ.ANIMALS_PETS) }),
                    enum: tZ.ANIMALS_PETS,
                },
                {
                    name: Y.intl.string(Y.t.cJng7v),
                    icon: (0, a.jsx)(ne.NatureIcon, { size: "xs", color: c(tZ.NATURE) }),
                    enum: tZ.NATURE,
                },
                {
                    name: Y.intl.string(Y.t["5mUvyM"]),
                    icon: (0, a.jsx)(nt.ClipsGalleryIcon, { size: "xs", color: c(tZ.MOVIES_TV_SHOWS) }),
                    enum: tZ.MOVIES_TV_SHOWS,
                },
                {
                    name: Y.intl.string(Y.t.MB9H5Z),
                    icon: (0, a.jsx)(nn.DyingRoseIcon, { size: "xs", color: c(tZ.DARK_MOODY) }),
                    enum: tZ.DARK_MOODY,
                },
            ],
            [c],
        );
    return (0, a.jsxs)("div", {
        className: ni.KZ,
        children: [
            (0, a.jsx)(Z.D, { variant: "heading-sm/semibold", className: ni.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, a.jsx)("div", {
                className: ni.Ot,
                children: u.map((e) => {
                    let { name: s, icon: i, enum: c } = e;
                    return (0, a.jsxs)(
                        ev.D,
                        {
                            className: o()(ni.w4, { [ni.C7]: n.has(c) }),
                            "aria-label": s,
                            "aria-pressed": n.has(c),
                            onClick: () => {
                                let e = n.has(c);
                                (t(`filter theme ${s.toLowerCase()} ${!e ? "on" : "off"}`), l(c));
                            },
                            children: [i, (0, a.jsx)(F.E, { color: r(c), variant: "body-md/medium", children: s })],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
function nE(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: l } = (0, A.vs)(),
        s = i.useMemo(
            () => [
                { name: Y.intl.string(Y.t.aVBOKh), icon: t6.VeinIcon, enum: tZ.ANIME },
                { name: Y.intl.string(Y.t["3WoZBc"]), icon: t5.JoystickIcon, enum: tZ.GAMING },
                { name: Y.intl.string(Y.t.yuEmLj), icon: t8.TeacupIcon, enum: tZ.CUTE_COZY },
                { name: Y.intl.string(Y.t.mMvCHo), icon: t7.ThemeMidnightIcon, enum: tZ.SCI_FI },
                { name: Y.intl.string(Y.t.TlhOQC), icon: t3.BurgerIcon, enum: tZ.FOOD_DRINKS },
                { name: Y.intl.string(Y.t["4IaUIM"]), icon: t4.MagicDoorIcon, enum: tZ.FANTASY },
                { name: Y.intl.string(Y.t["w0nSG/"]), icon: t9.PawPrintIcon, enum: tZ.ANIMALS_PETS },
                { name: Y.intl.string(Y.t.cJng7v), icon: ne.NatureIcon, enum: tZ.NATURE },
                { name: Y.intl.string(Y.t["5mUvyM"]), icon: nt.ClipsGalleryIcon, enum: tZ.MOVIES_TV_SHOWS },
                { name: Y.intl.string(Y.t.MB9H5Z), icon: nn.DyingRoseIcon, enum: tZ.DARK_MOODY },
            ],
            [],
        ),
        r = i.useMemo(() => new Set(Array.from(n, (e) => String(e))), [n]);
    return (0, a.jsxs)("div", {
        className: ni.KZ,
        children: [
            (0, a.jsx)(Z.D, { variant: "heading-sm/semibold", className: ni.hr, children: Y.intl.string(Y.t.YieJl5) }),
            (0, a.jsx)(nl.C, {
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
var nh = n(415926),
    nf = n(561769),
    nC = n(66506);
function nx() {
    return (0, a.jsxs)("div", {
        className: nC.k,
        children: [
            (0, a.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: Y.intl.string(Y.t.oezC3x),
                className: nC._,
            }),
            (0, a.jsx)(Z.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t.oezC3x) }),
            (0, a.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t["Tc/Ndl"]) }),
        ],
    });
}
var np = n(919303);
let nS = { flattenProductVariants: !0 };
function nA(e) {
    let { scrollerRef: t, tab: n } = e,
        l = (0, h.uM)(),
        s = l?.sessionId ?? "",
        { noCache: r, includeUnpublished: u } = (0, tP.A)(),
        d = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        { skus: m, currentPage: g, totalCount: f, isFetchingResults: C } = (0, ti.S)(),
        x = i.useCallback(() => {
            t?.current?.scrollToTop({ animate: !0 });
        }, [t]),
        p = m?.join("");
    i.useEffect(() => {
        x();
    }, [p, x]);
    let S = m.length;
    i.useEffect(() => {
        (0, t_.z)({
            sessionId: s,
            checkpoint: t_.t.SHOP_RENDERED,
            tab: n,
            unpublishedCategoriesShown: u,
            cacheDisabled: r,
        });
    }, [s, u, r, n]);
    let I = i.useRef(null),
        { setQueryPageSize: _, setQueryPageOffset: b, queryPageSize: L } = (0, A.vs)(),
        [v, j] = i.useState(!1),
        N = C || null == d;
    i.useEffect(() => {
        N ? j(!1) : S > 0 && j(!0);
    }, [N, S]);
    let O = L > 0 && !N && 0 === S;
    i.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == I.current || _(Math.floor(5 * getComputedStyle(I.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != I.current) return (e.observe(I.current), () => e.disconnect());
    }, [_]);
    let T = i.useCallback(
        (e) => {
            (tc.default.track(eW.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: L,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                b((e - 1) * L));
        },
        [l, L, b],
    );
    return (0, a.jsxs)(nf.v3.Provider, {
        value: nS,
        children: [
            (0, a.jsxs)("div", {
                className: o()({ [np.oE]: O }),
                children: [
                    O && (0, a.jsx)(nx, {}),
                    (0, a.jsxs)("div", {
                        className: o()(np.ZE, { [np.Kp]: v }),
                        ref: I,
                        children: [
                            N && [...Array(L)].map((e, t) => (0, a.jsx)(tL.A, {}, t)),
                            !N &&
                                m.map((e, t) =>
                                    (0, a.jsx)(
                                        h.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, a.jsx)(ty.A, {
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
            f > L &&
                (0, a.jsx)("div", {
                    className: np.Ej,
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(tf.m, {
                            currentPage: g,
                            totalCount: f,
                            pageSize: L,
                            onPageChange: T,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nI = n(578364);
function n_(e) {
    let { tab: t, initialCategoryId: n, showFilterInitially: l = !0, onUnmount: s } = e,
        r = (0, g.A)("shop_include_unpublished");
    (!(function () {
        let e = (0, _.bG)([tu.A], () => "success" === tu.A.getFetchState(eW.FYj)),
            t = null != (0, td.HH)(),
            { offerEligible: n, clearFilters: l } = (0, A.vs)();
        i.useEffect(() => {
            n && e && !t && l();
        }, [n, e, t, l]);
    })(),
        (0, A.Sf)(r));
    let o = i.useRef(null),
        { handleScroll: c } = (0, nh.r)(o, t),
        { setCategoryRef: u, handleScrollToCategory: d } = (0, tU.k0)(o),
        [m, E] = i.useState(l),
        [h, f] = i.useState(!1);
    return (
        i.useEffect(() => {
            null != n && d(n);
        }, [n, d]),
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
            className: nI.VM,
            children: (0, a.jsxs)("main", {
                className: nI.MY,
                children: [
                    (0, a.jsx)(L.Gt, {
                        className: nI.OW,
                        ref: o,
                        onScroll: c,
                        scrollbarGutter: "both-edges",
                        children: (0, a.jsx)(nb, {
                            isSmallScreen: h,
                            filterBarOpen: m,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: o,
                            setCategoryRef: u,
                            initialCategoryId: n,
                        }),
                    }),
                    m && !h && (0, a.jsx)("div", { className: nI.yF }),
                    m && !h && (0, a.jsx)(tr.Ip, { className: nI.kT, children: (0, a.jsx)(nr, {}) }),
                ],
            }),
        })
    );
}
function nb(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: l,
            tab: s,
            scrollerRef: r,
            setCategoryRef: c,
            initialCategoryId: u,
        } = e,
        d = i.useRef(null),
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
        C = i.useCallback(
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
        x = i.useRef(null);
    return (
        i.useEffect(() => {
            if (t && n)
                return (document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e));
            function e(e) {
                let t = e.target;
                null === d.current ||
                    null === x.current ||
                    d.current.contains(t) ||
                    x.current.contains(t) ||
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
        (0, a.jsx)("div", {
            className: nI.en,
            children: (0, a.jsxs)("div", {
                className: nI.pf,
                children: [
                    (0, a.jsxs)("div", {
                        className: nI.ne,
                        children: [
                            (0, a.jsx)("div", { className: nI.lQ, children: (0, a.jsx)(tE, {}) }),
                            (0, a.jsxs)("div", {
                                className: o()(nI.wR, { [nI.Im]: t }),
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nI.Ul,
                                        children: [
                                            (0, a.jsx)(F.E, {
                                                variant: "body-md/semibold",
                                                children: Y.intl.string(Y.t.uaX705),
                                            }),
                                            (0, a.jsx)(t$, {}),
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        ref: x,
                                        children: (0, a.jsx)(H.$, {
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
                                (0, a.jsx)("div", {
                                    className: nI.Dh,
                                    ref: d,
                                    children: (0, a.jsx)(L.Ch, { className: nI.Qo, children: (0, a.jsx)(nr, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, a.jsx)(h.R9, {
                              newValue: { pageIndex: f },
                              children: (0, a.jsx)(tw, {
                                  setCategoryRef: c,
                                  currentPage: f,
                                  handlePageChange: C,
                                  initialCategoryId: u,
                              }),
                          })
                        : (0, a.jsx)(nA, { scrollerRef: r, tab: s }, s),
                ],
            }),
        })
    );
}
var nL = n(599062),
    nv = n(269551),
    nj = n(417388);
let nN = function () {
        return (0, a.jsxs)("div", {
            className: nj.z,
            children: [
                (0, a.jsx)("img", {
                    className: nj.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: Y.intl.string(Y.t["p8+qtU"]),
                }),
                (0, a.jsx)(Z.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["p8+qtU"]) }),
                (0, a.jsx)(F.E, { variant: "body-md/medium", children: Y.intl.string(Y.t.UEiyvs) }),
            ],
        });
    },
    nO = [e9.G2.HOME, e9.G2.ORBS];
async function nT() {
    try {
        await (0, ts.gB)();
    } catch {}
}
function ny(e) {
    let { tab: t, transitionToTab: n, transitionState: l, updateAnalyticsState: s } = e,
        r = (0, _.bG)([ta.A], () =>
            null != ta.A.claimError
                ? `shop load claim error: ${ta.A.claimError.message}`
                : null != ta.A.fetchError
                  ? `shop load fetch purchase error: ${ta.A.fetchError.message}`
                  : void 0,
        );
    !(function (e) {
        let t = (0, _.bG)([E.default], () => E.default.getCurrentUser()),
            { noCache: n, includeUnpublished: l } = (0, tP.A)();
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
    let o = (0, b.H)({ location: "collectibles_content" }),
        c = (0, I.W6)(),
        u = (0, I.zy)(),
        [d] = i.useState(() => {
            if ("POP" === c.action) {
                let e;
                return ((e = tG), (tG = null), e ?? void 0);
            }
        }),
        [m, g] = i.useState(d),
        [h, f] = i.useState(null == d),
        C = i.useMemo(() => {
            let e = new URLSearchParams(u.search).get(e9.P1);
            return null != e && "" !== e ? e : void 0;
        }, [u.search]),
        x = i.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: l,
                    shouldAnimate: a,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((s(t, l), null != l && i && !r)) return void c.push(eW.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
                let o = r ? e9.G2.ORBS : e9.G2.CATALOG;
                (g(l), f(!i), n(o, a));
            },
            [n, s, c],
        ),
        { searchError: p } = (0, ti.S)();
    return null != p
        ? (0, a.jsx)(nN, {})
        : null != r
          ? (0, a.jsx)(nL.h, { onRetry: nT, errorMessage: r, errorOrigin: nL.A.SHOP_PAGE })
          : nO.includes(t)
            ? (0, a.jsx)(nv.A, { handleTransition: x, tab: t, transitionState: l })
            : t === e9.G2.GAME_SERVERS
              ? o
                  ? (0, a.jsx)(tt, { isGameServerHostingInShopEnabled: o })
                  : (0, a.jsx)(I.rd, { to: eW.BVt.COLLECTIBLES_SHOP_WITH_TAB(e9.G2.HOME) })
              : (0, a.jsx)(n_, {
                    tab: t,
                    initialCategoryId: m ?? C,
                    showFilterInitially: h && null == C,
                    onUnmount: () => {
                        (g(void 0), f(!0));
                    },
                });
}
var nR = n(685491),
    nk = n(235939),
    nM = n(976860),
    nP = n(352373),
    nG = n(650583);
function nD(e) {
    let { children: t, shouldAddEventListener: n, onClose: l } = e,
        s = (0, u.Rv)();
    return (
        i.useEffect(() => {
            if (n && !s) return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
            function e(e) {
                e.key === nG.N$.Escape && l();
            }
        }, [n, s, l]),
        t
    );
}
let nB = function (e) {
    let { tab: t = e9.G2.HOME, sessionId: n, containerRef: l } = e,
        s = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        { onClose: r } = (function () {
            let { search: e } = (0, I.zy)(),
                t = (0, I.g)(),
                n = i.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                l = null != n ? parseInt(n, 10) : null;
            return {
                onClose: i.useCallback(() => {
                    if (0 === l) {
                        ((0, nM.aX)(), (0, T.openUserSettings)());
                        return;
                    }
                    (0, nM.EL)() ? (0, nM.aX)() : (0, nM.pX)(eW.BVt.APP);
                }, [l]),
                source: l,
                ...t,
            };
        })(),
        { currentTab: u, hasFilters: _ } = (0, A.vs)(),
        b = i.useMemo(() => (t === e9.G2.HOME && null != u && _() ? u : t), [t, u, _]);
    (0, p.Wg)();
    let [L, v] = i.useState(),
        j = (0, g.A)("shop_include_unpublished"),
        { category: N, state: O } = (0, x.A)(L, { includeUnpublished: j }),
        y = N?.name,
        [R, k] = i.useState();
    (0, tU.XU)(n);
    let M = i.useCallback((e, t) => {
            (k(e), v(t));
        }, []),
        { selectedTab: P, transitionState: G, transitionToTab: D } = (0, S.oI)(b);
    ((0, m.HU)({ location: Y.intl.string(Y.t.pWG4ze) }),
        (0, C.uS)(n, P, y, G, { sourceButton: R, enabled: null == L || "loading" !== O }),
        (0, C.N0)(P, s));
    let { dismissShopButtonDC: B } = (0, nP.A)();
    (i.useEffect(() => {
        B(eq.i.AUTO_DISMISS);
    }, [B]),
        i.useEffect(() => {
            l.current?.focus();
        }, [l]));
    let { analyticsLocations: F } = (0, C.lC)(P);
    return (0, a.jsx)(d.f5, {
        value: F,
        children: (0, a.jsx)(h.R9, {
            newValue: { pageCategory: y, pageSize: 5 },
            children: (0, a.jsx)(f.iM, {
                tab: P,
                children: (0, a.jsxs)(nD, {
                    onClose: r,
                    shouldAddEventListener: !1,
                    children: [
                        (0, a.jsx)(nR.G, { handleTransition: D, selectedTab: P }),
                        (0, a.jsx)(nk.A, { tab: P, handleTransition: D }),
                        (0, a.jsx)("div", {
                            className: o()(tj.td, {
                                [tj.RK]: G === e9.Pf.VISIBLE,
                                [tj.in]: G === e9.Pf.IN,
                                [tj.FD]: G === e9.Pf.OUT,
                            }),
                            children: (0, a.jsx)(ny, {
                                tab: P,
                                transitionToTab: D,
                                transitionState: G,
                                updateAnalyticsState: M,
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
};
